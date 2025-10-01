import React, { Component, Fragment } from "react";
import { arrayOf, shape, number, string, func, bool } from "prop-types";
import { translate, getLanguage } from "../../../utils/i18n";
import formatNumber from "../../../utils/formatNumber";
import EFTToken from "../../common/EFTToken";
import EFTApprove from "../../common/EFTApprove";
import { MODAL_TYPES } from "../../common/Modal/Modal";
import { Column, Row } from "../../../styles/grid";
import { PendenciesWrapper, EFTTokenMfaWrapper } from "./styles";
import Header from "../../common/Modal/Header";
import Desktop from "./Desktop";
import {
  APPROVE_EFT,
  CREATE_APPROVE_EFT,
  ACTION_TYPE_WIRE_TRANSFER
} from "../../../utils/constants";
import { checkIfHasAccess } from "../../common/CanAccess/CanAccess";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import mfaActionsCheck from "../../../utils/mfaActionsCheck";
import { redirect } from "../../../utils/redirect";
import { isToday } from "../../../utils/validations/EFT";
import { getDateStringFromEpoch } from "../../../utils/formatDate";

class Pendencies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolling: false,
      hasAccess: false,
      saveAccount: false
    };

    this.tokenModal = this.tokenModal.bind(this);
    this.getTransferInfomation = this.getTransferInfomation.bind(this);
    this.approveModal = this.approveModal.bind(this);
  }

  isEFTCreatorApprover() {
    return this.props.userInfo.roles.includes(CREATE_APPROVE_EFT);
  }

  async componentDidMount() {
    this.setState({
      hasAccess: checkIfHasAccess(
        this.props.userInfo,
        [APPROVE_EFT, CREATE_APPROVE_EFT],
        true
      )
    });
  }

  async componentDidUpdate(prevProps) {
    const { createEFTData, isAfterCreation, methodChanging } = this.props;

    if (methodChanging !== prevProps.methodChanging) {
      this.props.addHeaderOnClickBack(
        methodChanging ? () => this.props.changeFactorTogle(false) : null
      );
    }

    if (
      createEFTData &&
      isAfterCreation &&
      isAfterCreation !== prevProps.isAfterCreation
    ) {
      if (this.isEFTCreatorApprover()) {
        this.setState({
          saveAccount: this.props.saveAccount
        });
        await this.tokenModal(createEFTData.content.transferOrderId, "approve");
      }
    }
  }

  handleClose() {
    this.props.changeFactorTogle(false);
    this.props.closeModal();
  }

  async approveFromMobileCallback(transferPayload) {
    const { approveEFT, loadTransfers } = this.props;
    const { transferOrderId, saveAccount } = this.state;

    await approveEFT(transferOrderId, transferPayload, saveAccount);
    await loadTransfers();
  }

  async getTransferInfomation(transferOrderId) {
    await this.props.getTransferById(transferOrderId);

    const bodyByTransfer = this.props.currentTransfer;
    bodyByTransfer && delete bodyByTransfer.approvers;
    bodyByTransfer && delete bodyByTransfer.transferOrderId;

    this.setState({
      transferOrderId
    });

    return bodyByTransfer;
  }

  async tokenModal(transferOrderId, type) {
    const { getAuthFactors, methodChanging, userInfo } = this.props;
    await getAuthFactors();
    const validAuthFactors = await mfaActionsCheck(
      ACTION_TYPE_WIRE_TRANSFER,
      this.props.authFactors
    );
    if (validAuthFactors.result !== true) {
      return redirect("/mfaboarding");
    } else {
      const transfer = await this.getTransferInfomation(transferOrderId);
      const storageLanguage = getLanguage();
      const params = {
        actionType: ACTION_TYPE_WIRE_TRANSFER,
        currentLanguage: storageLanguage
          ? storageLanguage
          : userInfo.preferredLanguage,
        payload: {
          id: transferOrderId,
          ...transfer
        }
      };

      const mobileFactor = validAuthFactors.authFactors.filter(factor => {
        if (factor.type === "mobile") {
          if (
            factor.defaultAuth === true &&
            factor.actions.includes(ACTION_TYPE_WIRE_TRANSFER) &&
            factor.isSelf === true
          ) {
            return true;
          } else {
            return false;
          }
        }
      });

      //check from mobile context
      if (typeof requestApproval === "function" && mobileFactor.length > 0) {
        /* eslint-disable */
        return requestApproval(
          params,
          this.approveFromMobileCallback.bind(this)
        );
        /* eslint-enable */
      }

      const {
        openModal,
        openToastr,
        approveEFT,
        denyEFT,
        loadTransfers,
        serverTime
      } = this.props;

      const dueDate = getDateStringFromEpoch(transfer.dueDate);

      const toastrMessage = this.isEFTCreatorApprover()
        ? isToday(dueDate, serverTime)
          ? translate("TRANSFER_CREATED_AND_APPROVED_WITH_SUCCESS")
          : translate("TRANSFER_SCHEDULED_AND_APPROVED_WITH_SUCCESS")
        : translate("TRANSFER_APPROVED_WITH_SUCCESS");

      const onConfirm = async () => {
        try {
          type === "approve"
            ? await approveEFT(transferOrderId, false, this.state.saveAccount)
            : await denyEFT(transferOrderId, false, this.state.saveAccount);
          await loadTransfers();
          this.props.closeModal();
          openToastr({
            text: toastrMessage,
            isBelow: true,
            isTop: false,
            isScrolling: this.state.isScrolling,
            warning: !isToday(dueDate, serverTime)
          });
        } catch (error) {
          this.props.addError(error);
          this.props.closeModal();
          return { error };
        }
      };

      openModal({
        type: MODAL_TYPES.CUSTOM,
        //width: "46rem",
        overwriteDefaultButtons: true,
        children: () => (
          <Fragment>
            <Header
              onClickBack={
                methodChanging
                  ? () => this.props.changeFactorTogle(false)
                  : null
              }
              onClickClose={() => this.handleClose()}
              dataTest="MfaAddpBbmBack"
            />
            <EFTTokenMfaWrapper>
              <EFTToken
                onConfirm={onConfirm}
                onMFAConfirmation={() => onConfirm()}
                onMFAError={() => {}}
                createAuthCodeParams={params}
                saveAccount={this.state.saveAccount}
              />
            </EFTTokenMfaWrapper>
          </Fragment>
        )
      });
    }
  }

  async approveModal(pendency, header, data) {
    const { openModal } = this.props;

    const message = `${translate("EFT_TRANSFER_APPROVE")} ${translate(
      "CURRENCY_UNIT"
    )} ${formatNumber(pendency.amount, { digits: 2 })}`;

    const handleSaveAccount = async value => {
      this.setState({
        saveAccount: value
      });
    };

    openModal({
      type: MODAL_TYPES.CUSTOM,
      message: message,
      overwriteDefaultButtons: true,
      children: () => (
        <Fragment>
          <EFTApprove
            pendency={pendency}
            header={header}
            data={data}
            handleSaveAccount={handleSaveAccount}
          />
        </Fragment>
      )
    });
  }

  render() {
    const { hasAccess } = this.state;
    const { isEmpty } = this.props;

    return (
      <ErrorBoundary errorStatus={this.props.error}>
        <PendenciesWrapper>
          <Fragment data-test="ETFcreator">
            <Row>
              <Column>
                <Desktop
                  {...this.props}
                  hasAccess={hasAccess}
                  isEmpty={isEmpty}
                  tokenModal={this.tokenModal}
                  approveModal={this.approveModal}
                />
              </Column>
            </Row>
          </Fragment>
        </PendenciesWrapper>
      </ErrorBoundary>
    );
  }
}

export default Pendencies;

Pendencies.defaultProps = {
  pendencies: {
    content: []
  },
  loading: false
};

Pendencies.propTypes = {
  pendencies: shape({
    content: arrayOf(
      shape({
        transferOrderId: string,
        originAccount: string,
        dueDate: number,
        recipient: shape({
          name: string,
          bankId: string,
          bankName: string,
          bankBranch: string,
          bankAccount: string,
          taxId: string
        }),
        amount: number,
        approvers: arrayOf(
          shape({
            approverId: string,
            name: string,
            hasApproved: bool
          })
        )
      })
    ),
    statusCode: number,
    messages: arrayOf(string)
  }),
  loading: bool,
  approveEFT: func.isRequired,
  checkMFA: func.isRequired
};
