import React, { Fragment, Component } from "react";
import { arrayOf, shape, number, string, func, bool } from "prop-types";
import EFTToken from "../../common/EFTToken";
import {
  ACTION_TYPE_APPROVE_INVESTMENT,
  BRASILIA_UTC_OFFSET,
  BRL_CURRENCY,
  EN_US_AM_PM_FORMAT,
  PT_BR_24H_FORMAT
} from "../../../utils/constants";
import { MODAL_TYPES } from "../../common/Modal/Modal";
import {
  BorderedWrapper,
  BtnWrapper,
  ContentWrapper,
  Separator,
  StickyWrapper,
  Token
} from "./styles";

import Header from "../../common/Modal/Header";
import { unFormatNumber } from "../../../utils/formatNumber";
import { rem } from "../../../styles/tools";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import mfaActionsCheck from "../../../utils/mfaActionsCheck";
import { redirect } from "../../../utils/redirect";
import FormStep from "./FormStep";
import PriorityStep from "./PriorityStep";
import ResumeStep from "./ResumeStep";
import ConfirmationStep from "./ConfirmationStep";
import { InstanceContext } from "./withdrawLcaContext";
import { Button, StepSlider } from "react-bocombbm-components";
import { isPtBR, translate } from "../../../utils/i18n";
import { modelBrazilianTime } from "../../../utils/formatDate";
import moment from "moment";
import {
  AccountText,
  Currency,
  InfoContentBold,
  Value,
  ValueInfo,
  WithdrawalValueLabel
} from "./FormStep/styles";
import ShimmerLoading from "../../common/ShimmerLoading";
import AmmountInput from "../../common/AmmountInput";
import createLogError from "../../../utils/createLogError";

class WithdrawLca extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.getMaxAndMinValues = this.getMaxAndMinValues.bind(this);
    this.selectExactValue = this.selectExactValue.bind(this);
    this.changeAccount = this.changeAccount.bind(this);
    this.getWithdrawalDetails = this.getWithdrawalDetails.bind(this);
    this.finalClickWithdrawal = this.finalClickWithdrawal.bind(this);
    this.resetStates = this.resetStates.bind(this);
    this.tokenModal = this.tokenModal.bind(this);
    this.changeAmmount = this.changeAmmount.bind(this);
    this.changeState = this.changeState.bind(this);
    this.mountMessageWithAvailabilityTime = this.mountMessageWithAvailabilityTime.bind(
      this
    );
    this.checkAvailabilityHour = this.checkAvailabilityHour.bind(this);

    this.steps = [FormStep, PriorityStep, ConfirmationStep, ResumeStep];

    this.state = {
      currentPriority: null,
      currentAccount: null,
      loading: true,
      accountsToBeListed: [],
      disabledButton: true,
      valueToBeRescued: null,
      responseLcaDetails: [],
      isAuthenticating: false,
      isExiting: false,
      personalDataToken: null,
      query: {},
      filledValue: isPtBR ? "0,00" : "0.00",
      openPriorityBottomSheet: false,
      loadingPriorities: false,
      openAccountSelectionBottomSheet: false,
      loadingLcaDetails: false,
      loadingCreateWithdrawal: false,
      limitReached: false
    };
  }

  checkAvailabilityHour(availableDateRanges) {
    const { startTime, endTime } = { ...availableDateRanges[0] };
    return moment(this.props.serverTime).isBetween(startTime, endTime);
  }

  mountMessageWithAvailabilityTime(availableDateRanges) {
    const { startTime, endTime } = { ...availableDateRanges[0] };
    const maxEndTime = Math.max(endTime);
    const maxStartTime = Math.max(startTime);

    const rangeStart = isPtBR()
      ? modelBrazilianTime(
          moment(maxStartTime)
            .utcOffset(BRASILIA_UTC_OFFSET)
            .format(PT_BR_24H_FORMAT)
        )
      : moment(maxStartTime)
          .utcOffset(BRASILIA_UTC_OFFSET)
          .format(EN_US_AM_PM_FORMAT);

    const rangeEnd = isPtBR()
      ? modelBrazilianTime(
          moment(maxEndTime)
            .utcOffset(BRASILIA_UTC_OFFSET)
            .format(PT_BR_24H_FORMAT)
        )
      : moment(maxEndTime)
          .utcOffset(BRASILIA_UTC_OFFSET)
          .format(EN_US_AM_PM_FORMAT);

    return (
      <React.Fragment>
        {translate("FIXED_INCOME_CANT_INVEST_MSG1")}
        <InfoContentBold>
          {rangeStart}
          {translate("FIXED_INCOME_CANT_INVEST_MSG2")}
          {rangeEnd}
        </InfoContentBold>
        {translate("FIXED_INCOME_CANT_INVEST_MSG3")}
      </React.Fragment>
    );
  }

  // MFA Session

  async tokenModal(payload, type, goToStep) {
    const params = {
      actionType: ACTION_TYPE_APPROVE_INVESTMENT,
      payload
    };
    const { openModal, methodChanging } = this.props;
    const postToAproveWithdraw = async () => {
      const { payload, key } = this.props.mfaTokenParams;
      await this.props.postToAproveWithdrawal(payload, key);
      if (this.props.responseToAproveWithdrawal.approved === true) {
        this.props.closeModal();
        this.props.openToastr({
          text: translate("FIXED_INCOME_WITHDRAW_TOASTR_ACCEPTED_REDEMPTION"),
          isBelow: false,
          isTop: true,
          timeout: 3000
        });

        goToStep(4);
      }
      this.setState({ loadingCreateWithdrawal: false });
    };

    const onConfirm = async () => {
      (await type) === "approve" ? postToAproveWithdraw() : () => {};
    };

    this.scrollToTop();

    openModal({
      type: MODAL_TYPES.PAGE_AS_MODAL,
      width: rem(1100),
      overwriteDefaultButtons: true,
      children: () => (
        <Fragment>
          <Header
            onClickBack={
              methodChanging ? () => this.props.changeFactorTogle(false) : null
            }
            onClickClose={() => this.props.closeModal()}
            dataTest="MfaAddpBbmBack"
          />
          <Token>
            <EFTToken
              onConfirm={onConfirm}
              onMFAConfirmation={() => onConfirm()}
              onMFAError={() => {}}
              createAuthCodeParams={params}
            />
          </Token>
        </Fragment>
      )
    });
  }
  // End MFA Session

  changeState(state, value) {
    this.setState({
      [state]: value
    });
  }

  changeAccount(selectedAccount) {
    const { accounts } = this.props;
    const currentAccount = accounts.find(
      acc => acc.accountNumber === selectedAccount
    );
    this.setState({
      currentAccount: currentAccount
    });
  }

  async getMaxAndMinValues(valueToBeRescued, priorityType) {
    this.setState({
      loadingPriorities: true,
      valueToBeRescued: valueToBeRescued
    });

    await this.props.getSuggestionValues(priorityType.id, valueToBeRescued);
    this.setState({
      loadingPriorities: false
    });
  }

  async componentDidMount() {
    const { getAuthFactors, getAvailableDateRanges, getLimitLca } = this.props;
    await this.resetStates();

    await Promise.all([
      getAuthFactors(),
      getAvailableDateRanges("FixedIncome"),
      getLimitLca()
    ]);

    this.setState({
      loading: false
    });

    const validAuthFactors = await mfaActionsCheck(
      ACTION_TYPE_APPROVE_INVESTMENT,
      this.props.authFactors
    );
    if (validAuthFactors.result === false) {
      return redirect("/mfaboarding");
    }
  }

  componentDidUpdate(prevProps) {
    const { methodChanging } = this.props;

    if (methodChanging !== prevProps.methodChanging) {
      this.props.addHeaderOnClickBack(
        methodChanging ? () => this.props.changeFactorTogle(false) : null
      );
    }
  }

  selectExactValue(value) {
    this.setState({
      valueToBeRescued: value,
      disabledButton: false
    });
  }

  changeAmmount(filledValue) {
    this.setState({ filledValue });
  }

  async getWithdrawalDetails(currentStep, selectedPositions) {
    const { filledValue } = this.state;
    const { totalLca } = this.props;

    this.setState({
      previous: currentStep,
      loadingLcaDetails: true
    });
    if (unFormatNumber(filledValue) === unFormatNumber(totalLca)) {
      await this.props.getAllLcaDetails(unFormatNumber(filledValue));
    } else {
      await this.props.postLcaDetails({
        selectedPositions: selectedPositions
      });
    }
    this.setState({
      loadingLcaDetails: false
    });
  }

  async resetStates() {
    !this.props.totalLca && this.props.getTotalLca();

    await Promise.all([
      this.props.resetFields(),
      this.props.getPriorityTypes(),
      this.props.getAccountsWithoutBalance(),
      this.props.getAccounts(),
      this.props.resetUuid()
    ]);
    const { priorities, accounts } = this.props;
    this.setState({
      disabledButton: true,
      previous: null,
      responseLcaDetails: [],

      current: 1,
      loading: false,
      currentPriority: priorities[0],
      currentAccount: accounts[0],
      valueToBeRescued: null
    });
  }

  async finalClickWithdrawal(goToStep) {
    this.setState({
      loadingCreateWithdrawal: true
    });
    const {
      currentAccount: { id, bankCode, branch, verifyingDigit, number }
    } = this.state;
    const {
      userInfo: { corpId },
      responseLcaDetails,
      postToWithdrawal,
      addError
    } = this.props;
    const positions = responseLcaDetails.map(elem => {
      return {
        positionId: elem.positionId,
        quantity: elem.quantity
      };
    });
    const query = {
      withdrawPositions: positions,
      account: {
        id,
        bankCode,
        branch,
        number,
        verifyingDigit
      }
    };

    try {
      await postToWithdrawal(query);

      if (this.props.responseToWithdrawal.statusCode === 201) {
        await this.tokenModal(
          this.props.responseToWithdrawal.payload,
          "approve",
          goToStep
        );
        this.setState({
          loadingCreateWithdrawal: false
        });
      } else {
        createLogError({
          message: "Error when trying to withdral a fixed income title",
          status: this.props.responseToWithdrawal.statusCode,
          corpId: corpId
        });
        addError({
          message: "Error when trying to withdral a fixed income title",
          status: this.props.responseToWithdrawal.statusCode,
          corpId: corpId
        });
      }
    } catch ({ error }) {
      this.setState({
        loadingCreateWithdrawal: false
      });
      if (
        error &&
        error.status === 422 &&
        error.showErrorToUser === true &&
        error.errors
      ) {
        return this.setState({
          openMaxWithdrawalSheet: true,
          errorTitle: error.errors[0].title,
          errorMessage: error.errors[0].message.split("\n\n")
        });
      } else {
        createLogError({
          message: "Error when trying to withdral a fixed income title",
          status: error.status,
          corpId: corpId
        });
        addError({
          message: "Error when trying to withdral a fixed income title",
          status: error.status,
          corpId: corpId
        });
      }
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <Fragment>
        {loading ? (
          <Fragment>
            <ContentWrapper>
              <BorderedWrapper>
                <AccountText>
                  {translate("POSITION_FUNDS_AVAILABLE_FOR_REDEMPTION")}
                </AccountText>
                <ValueInfo>
                  <Currency>{BRL_CURRENCY}</Currency>
                  <Value>
                    {<ShimmerLoading darker width={30} height={14} />}
                  </Value>
                </ValueInfo>
              </BorderedWrapper>
              <WithdrawalValueLabel>
                {translate("FIXED_INCOME_WITHDRAWAL_VALUE")}
              </WithdrawalValueLabel>
              <AmmountInput
                config={{
                  operation: "redeem",
                  ammountValue: this.state.filledValue
                }}
                showTotalButton
                blockAddValues
                increments={{
                  ranges: [5000, 10000, 20000, 30000, 50000],
                  totalLabel: translate("AVAILABLE_AMOUNT")
                }}
                loading={loading}
              />
            </ContentWrapper>
            <StickyWrapper>
              <Separator />
              <BtnWrapper>
                <Button
                  type="outline"
                  dataTest="loadingButton1"
                  spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
                  disabled={true}
                >
                  {translate("FIXED_INCOME_WITHDRAWAL_BACK")}
                </Button>
                <Button
                  dataTest="loadingButton2"
                  disabled={true}
                  spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
                >
                  {translate("FIXED_INCOME_WITHDRAWAL_CONTINUE")}
                </Button>
              </BtnWrapper>
            </StickyWrapper>
          </Fragment>
        ) : (
          <ErrorBoundary errorStatus={this.props.error}>
            <InstanceContext.Provider value={this}>
              <StepSlider steps={this.steps} />
            </InstanceContext.Provider>
          </ErrorBoundary>
        )}
      </Fragment>
    );
  }
}

WithdrawLca.defaultProps = {
  responseLcaDetails: [],
  loading: false,
  totalMax: [],
  totalMin: [],
  responseToWithdrawal: [],
  responseAccounts: [],
  accounts: [],
  banksList: [],
  priorities: []
};

WithdrawLca.propTypes = {
  accounts: arrayOf(
    shape({
      account: number,
      accountNumber: string,
      totalBalance: number,
      blockedBalance: number,
      availableBalance: number,
      verifyingDigit: string,
      bankISPB: string,
      date: string,
      name: string,
      document: string
    })
  ),
  banksList: arrayOf(
    shape({
      code: string,
      name: string,
      ispb: string,
      value: string
    })
  ),
  responseAccounts: arrayOf(
    shape({
      id: number,
      bankISPB: string,
      bankCode: string,
      branch: number,
      number: number,
      verifyingDigit: string,
      holders: [
        {
          id: number,
          name: string,
          document: string
        }
      ],
      type: string
    })
  ),
  priorities: arrayOf(
    shape({
      id: number,
      name: string
    })
  ),
  totalMax: arrayOf(
    shape({
      totalMaxValue: string,
      maxPositions: [
        {
          positionId: string,
          quantity: number
        }
      ]
    })
  ),
  totalMin: arrayOf(
    shape({
      totalMinValue: string,
      minPositions: [
        {
          positionId: string,
          quantity: number
        }
      ]
    })
  ),
  responseToWithdrawal: arrayOf(
    shape({
      statusCode: number,
      message: string
    })
  ),

  loading: bool,
  getSuggestionValues: func.isRequired,
  resetFields: func.isRequired,
  getTotalLca: func.isRequired,
  getPriorityTypes: func.isRequired,
  getAccounts: func.isRequired,
  getApprovers: func.isRequired
};

export default WithdrawLca;
