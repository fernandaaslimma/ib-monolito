import React, { Component, Fragment } from "react";
import {
  getDateFieldPlaceholderByLocale,
  translate,
  getLanguage
} from "../../../utils/i18n";
import DefaultShimmerLoading from "../../common/DefaultShimmerLoading";
import { func, bool, object } from "prop-types";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import { StepSlider } from "react-bocombbm-components";
import FillStep from "./FillStep";
import ConfirmationStep from "./ConfirmationStep";
import moment from "moment";
import ResumeStep from "./ResumeStep";
import { isToday, checkDate } from "../../../utils/validations/EFT";
import {
  ACTION_TYPE_WIRE_TRANSFER,
  ACTION_TYPE_WIRE_TRANSFER_THIRD_PARTY,
  WIRETRANSFER_SERVICE,
  PRIVATEACCOUNT,
  TRANSACTIONALACCOUNT
} from "../../../utils/constants";
import { MODAL_TYPES } from "../../common/Modal/Modal";
import { getDateStringFromEpoch } from "../../../utils/formatDate";
import mfaActionsCheck from "../../../utils/mfaActionsCheck";
import { redirect } from "../../../utils/redirect";
import Header from "../../common/Modal/Header";
import { EFTTokenMfaWrapper } from "../Pendencies/styles";
import EFTToken from "../../common/EFTToken";
import { Wrapper } from "./styles";

export const InstanceContext = React.createContext(null);

class IndividualWireTransfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      selectedAccount: null,
      originAccount: null,
      isScheduled: false,
      inputedDate: "",
      disableForward: false,
      validAsScheduled: true,
      commonValidToMoveOn: {
        date: false,
        ammount: false
      },
      accounts: {},
      favoredAccounts: {},
      accountStatus: false,
      showFavoredAccounts: false,
      positionSelectedTab: 0,
      isThirdFavored: false,

      selectedPeopleData: [],
      selectedPeopleAccountsData: [],
      selectedPeople: false,
      selectedAccounts: {},
      validToMoveOn: {
        account: false,
        verifyDigit: false,
        agency: false,
        name: false
      },
      tabs: [
        {
          title: translate("TED_CONTACTS"),
          dataTest: "savedAccounts"
        },
        {
          title: translate("TED_FAVORED_NEW_ACCOUNT"),
          dataTest: "newAccount"
        }
      ],
      ammount: "0,00",
      goToStep: undefined,
      transfer: undefined,
      isNewAccount: false
    };

    this.changeOriginAccount = this.changeOriginAccount.bind(this);
    this.steps = [FillStep, ConfirmationStep, ResumeStep];
    this.setStateValue = this.setStateValue.bind(this);
    this.changeTransferDate = this.changeTransferDate.bind(this);
    this.changeAmmount = this.changeAmmount.bind(this);
    this.tokenModal = this.tokenModal.bind(this);
    this.getTransferInfomation = this.getTransferInfomation.bind(this);
    this.approveFromMobileCallback = this.approveFromMobileCallback.bind(this);
    this.changeCommonValidDate = this.changeCommonValidDate.bind(this);
    this.checkAvailabilitySchedule = this.checkAvailabilitySchedule.bind(this);
    this.initialClassState = this.initialClassState.bind(this);
    this.resetClassAndStoreState = this.resetClassAndStoreState.bind(this);
    this.filterEmptyAccounts = this.filterEmptyAccounts.bind(this);
    this.changeAccountStatus = this.changeAccountStatus.bind(this);
    this.clearTabsData = this.clearTabsData.bind(this);
    this.checkFavoredAccounts = this.checkFavoredAccounts.bind(this);
    this.changeSelectedMenu = this.changeSelectedMenu.bind(this);
    this.initialDate = this.initialDate.bind(this);
  }

  async componentDidUpdate(prevProps) {
    const { methodChanging } = this.props;

    if (methodChanging !== prevProps.methodChanging) {
      this.props.addHeaderOnClickBack(
        methodChanging ? () => this.props.changeFactorTogle(false) : null
      );
    }
  }

  clearTabsData() {
    const { handleUserFavoredData, handleIsThirdFavored } = this.props;

    this.setState({
      selectedPeopleData: [],
      selectedPeopleAccountsData: [],
      selectedPeople: false,
      selectedAccounts: {},
      showFavoredAccounts: false,
      positionSelectedTab: 0,
      isThirdFavored: false,
      isNewAccount: false,
      saveRecipientAccount: false,
      accountStatus: false
    });

    this.checkFavoredAccounts(false, {});

    const clearAccount = {
      BankCode: undefined,
      BankIspb: undefined,
      BankName: undefined,
      Branch: undefined,
      CashAccountId: undefined,
      Domain: undefined,
      MaxAmount: undefined,
      Number: undefined,
      Type: undefined,
      VerifyingDigit: undefined,
      thirdFavoredFullName: undefined,
      thirdFavoredDocument: undefined,
      isThirdFavored: false
    };

    handleUserFavoredData(clearAccount);
    handleIsThirdFavored(false);
  }

  checkFavoredAccounts(validAccount, account) {
    const { handleUserFavoredData } = this.props;

    this.setState({
      validToMoveOn: {
        ...this.state.validToMoveOn,
        account: validAccount,
        verifyDigit: validAccount,
        agency: validAccount,
        name: validAccount
      }
    });

    handleUserFavoredData(account);
  }

  changeSelectedMenu(menuPosition) {
    const { validToMoveOn, positionSelectedTab } = this.state;

    if (positionSelectedTab !== menuPosition) {
      this.clearTabsData();

      this.props.handleIsThirdFavored(false, true);

      this.setState({
        positionSelectedTab: menuPosition,
        isNewAccount: menuPosition === 1 ? true : false,
        validToMoveOn: {
          ...validToMoveOn,
          account: false,
          agency: false,
          name: false,
          verifyDigit: false
        }
      });

      return positionSelectedTab;
    }
  }

  filterEmptyAccounts(accounts) {
    return (
      accounts &&
      accounts.length &&
      accounts.filter(account => Object.keys(account).length)
    );
  }

  async initialClassState() {
    const {
      handleUserInputOriginAccount,
      getAvailableDateRanges,
      favoredAccounts,
      getFavoredAccounts
    } = this.props;
    await getAvailableDateRanges(WIRETRANSFER_SERVICE);
    const today = moment(this.props.serverTime)
      .utcOffset(-3)
      .format(getDateFieldPlaceholderByLocale());
    this.changeTransferDate({ target: { value: "" } });

    this.props.handleUserInputTranferDataDate(today);

    await getAvailableDateRanges(WIRETRANSFER_SERVICE);
    await getFavoredAccounts(this.props.accounts[0].account);

    const newAccounts = this.props.accounts.length
      ? this.filterEmptyAccounts(this.props.accounts)
      : {};

    const selectedAccount = newAccounts.length ? newAccounts[0] : {};

    handleUserInputOriginAccount({
      target: {
        name: "number",
        value: selectedAccount && selectedAccount.accountNumber
      }
    });

    this.setState({
      loading: false,
      selectedAccount,
      originAccount: this.props.originAccount,
      isScheduled: today !== this.props.nextAvailableDate,
      commonValidToMoveOn: {
        ammount: false,
        date: today === this.props.nextAvailableDate
      },
      accounts: newAccounts,
      favoredAccounts: favoredAccounts
    });
  }

  async initialDate() {
    const { getAvailableDateRanges } = this.props;
    await getAvailableDateRanges(WIRETRANSFER_SERVICE);
    const today = moment(this.props.serverTime)
      .utcOffset(-3)
      .format(getDateFieldPlaceholderByLocale());
    this.changeTransferDate({ target: { value: "" } });
    this.props.handleUserInputTranferDataDate(today);
    await getAvailableDateRanges(WIRETRANSFER_SERVICE);

    this.setState({
      loading: false,
      isScheduled: today !== this.props.nextAvailableDate,
      commonValidToMoveOn: {
        ammount: false,
        date: today === this.props.nextAvailableDate
      }
    });
  }

  resetClassAndStoreState() {
    this.clearTabsData();
    this.props.resetFields();
    this.initialClassState();
  }

  async componentDidMount() {
    const {
      getAccounts,
      getNextAvailableDate,
      getAvailableDateRanges,
      getBanks,
      getFavoredAccounts,
      getLimit
    } = this.props;
    await getAvailableDateRanges(WIRETRANSFER_SERVICE);
    this.props.resetFields();

    let accountGroups = [PRIVATEACCOUNT, TRANSACTIONALACCOUNT];

    await getAccounts(null, false, accountGroups);
    await getNextAvailableDate(WIRETRANSFER_SERVICE, this.props.serverTime);
    await getBanks();
    await getFavoredAccounts(this.props.accounts[0].account);
    await getLimit();

    this.initialClassState();
  }

  setStateValue(state, value) {
    this.setState({
      [state]: value
    });
  }

  changeCommonValidDate(valid) {
    const { commonValidToMoveOn } = this.state;
    this.setState({
      commonValidToMoveOn: {
        ...commonValidToMoveOn,
        date: valid
      }
    });
  }

  async changeTransferDate(event) {
    const { handleUserInputTranferData, serverTime } = this.props;
    const { commonValidToMoveOn, isScheduled } = this.state;
    const value = event.target.value;
    if (value.length && value.indexOf("_") === -1) {
      const dateValid = checkDate(value, true, serverTime);
      await handleUserInputTranferData(event);
      this.setState({
        inputedDate: value,
        commonValidToMoveOn: {
          ...commonValidToMoveOn,
          date: isScheduled
            ? isToday(value, serverTime)
              ? false
              : dateValid
            : true
        }
      });
    } else {
      this.setState({
        inputedDate: value,
        commonValidToMoveOn: {
          ...commonValidToMoveOn,
          date: false
        }
      });
    }
  }

  async changeOriginAccount(event) {
    const {
      handleUserInputOriginAccount,
      getFavoredAccounts,
      favoredAccounts
    } = this.props;

    const selectedAccount = this.props.accounts.find(
      account => account.accountNumber === event.target.value
    );
    this.clearAmmout();
    this.changeAmmount("0,00");

    this.setState({
      showFavoredAccounts: false
    });

    await handleUserInputOriginAccount({
      target: { name: "number", value: selectedAccount.accountNumber }
    });

    await getFavoredAccounts(selectedAccount.account);

    this.setState({
      selectedAccount,
      originAccount: this.props.originAccount,
      favoredAccounts: favoredAccounts
    });

    this.changeSelectedMenu(0);
  }

  handleClose(goToStep) {
    this.props.changeFactorTogle(false);
    this.props.closeModal();
    goToStep(2);
  }

  clearAmmout() {
    this.setState({
      commonValidToMoveOn: {
        ...this.state.commonValidToMoveOn,
        ammount: false
      }
    });
  }

  changeAmmount(value) {
    const { handleUserInputTransferCurrency, favoredAccounts } = this.props;
    const {
      commonValidToMoveOn,
      positionSelectedTab,
      selectedAccount
    } = this.state;

    this.setState({
      ammount: value
    });

    handleUserInputTransferCurrency(value);

    selectedAccount.availableBalance === 0
      ? this.setState({
          commonValidToMoveOn: {
            ...commonValidToMoveOn,
            date: false,
            ammount: false
          }
        })
      : this.setState({
          commonValidToMoveOn: {
            ...commonValidToMoveOn,
            ammount: value === "0,00" || value === "0.00" ? false : true
          }
        });

    const storageLanguage = getLanguage();
    let valueBr = parseFloat(value.replace(/[.]/g, "").replace(",", "."));
    let valueEn = parseFloat(value.replace(/,/g, ""));

    storageLanguage === "pt-BR"
      ? valueBr > selectedAccount.availableBalance &&
        this.setState({
          commonValidToMoveOn: {
            ...commonValidToMoveOn,
            ammount: false
          }
        })
      : valueEn > selectedAccount.availableBalance &&
        this.setState({
          commonValidToMoveOn: {
            ...commonValidToMoveOn,
            ammount: false
          }
        });

    favoredAccounts.length === 0 &&
      positionSelectedTab === 0 &&
      (value === "0,00" || value === "0.00") &&
      this.setState({
        commonValidToMoveOn: {
          ...commonValidToMoveOn,
          ammount: false
        }
      });
  }

  async checkAvailabilitySchedule() {
    await this.props.getAvailableDateRanges(WIRETRANSFER_SERVICE);
    this.setStateValue("disableForward", false);
  }

  async approveFromMobileCallback(transferPayload) {
    const { approveEFT, openToastr, serverTime } = this.props;
    const { transferOrderId, transfer } = this.state;

    const dueDate = getDateStringFromEpoch(transfer.dueDate);
    const toastrMessage = isToday(dueDate, serverTime)
      ? translate("TRANSFER_CREATED_WITH_SUCCESS_PF")
      : translate("TRANSFER_SCHEDULED_WITH_SUCCESS_PF");

    await approveEFT(transferOrderId, transferPayload);

    this.state.goToStep(3);

    openToastr({
      text: toastrMessage,
      isBelow: true,
      isTop: false,
      isScrolling: this.state.isScrolling
    });
    return null;
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

  async tokenModal(type, goToStep) {
    const {
      getAuthFactors,
      methodChanging,
      createEFT,
      favoredData,
      transferData,
      originAccount,
      serverTime,
      userInfo
    } = this.props;

    const { accountStatus, isThirdFavored, isNewAccount } = this.state;

    await createEFT(
      favoredData,
      transferData,
      originAccount,
      accountStatus,
      favoredData,
      isNewAccount,
      userInfo
    );
    const transferOrderId = this.props.createEFTData.content.transferOrderId;

    await getAuthFactors();
    const validAuthFactors = await mfaActionsCheck(
      isThirdFavored
        ? ACTION_TYPE_WIRE_TRANSFER_THIRD_PARTY
        : favoredData.isFavoredContactList
        ? ACTION_TYPE_WIRE_TRANSFER_THIRD_PARTY
        : ACTION_TYPE_WIRE_TRANSFER,
      this.props.authFactors
    );
    if (validAuthFactors.result !== true) {
      return redirect("/mfaboarding");
    } else {
      const transfer = await this.getTransferInfomation(transferOrderId);
      this.setState({ transfer: transfer });
      const storageLanguage = getLanguage();
      const params = {
        actionType: isThirdFavored
          ? ACTION_TYPE_WIRE_TRANSFER_THIRD_PARTY
          : favoredData.isFavoredContactList
          ? ACTION_TYPE_WIRE_TRANSFER_THIRD_PARTY
          : ACTION_TYPE_WIRE_TRANSFER,
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

      // const requestApproval = async (params,callbackFunction) =>
      // {
      //   async function funcaoAOrigem(){
      //     console.log("recebidos",params);
      //     await new Promise(resolve =>
      //     setTimeout(async function(){
      //       console.log("Vou chamar a callback");
      //       await callbackFunction(params);
      //       return resolve;
      //    }, 5000)
      //    );

      //   }

      //   await funcaoAOrigem();

      // }

      //check from mobile context
      if (typeof requestApproval === "function" && mobileFactor.length > 0) {
        /* eslint-disable */
        try {
          this.setState({ goToStep: goToStep });
          return requestApproval(params, this.approveFromMobileCallback);
        } catch (error) {
          this.props.addError(error);
          return { error };
        }

        /* eslint-enable */
      }

      const { openModal, openToastr, approveEFT, denyEFT } = this.props;

      const dueDate = getDateStringFromEpoch(transfer.dueDate);
      const toastrMessage = isToday(dueDate, serverTime)
        ? translate("TRANSFER_CREATED_WITH_SUCCESS_PF")
        : translate("TRANSFER_SCHEDULED_WITH_SUCCESS_PF");

      const onConfirm = async () => {
        try {
          type === "approve"
            ? await approveEFT(transferOrderId)
            : await denyEFT(transferOrderId);
          this.props.closeModal();
          openToastr({
            text: toastrMessage,
            isBelow: true,
            isTop: false,
            isScrolling: this.state.isScrolling,
            warning: !isToday(dueDate, serverTime)
          });
          this.props.closeModal();

          goToStep(3);
        } catch (error) {
          this.props.addError(error);
          this.props.closeModal();
          return { error };
        }
      };

      openModal({
        type: MODAL_TYPES.CUSTOM,
        overwriteDefaultButtons: true,
        children: () => (
          <Fragment>
            <Header
              onClickBack={
                methodChanging
                  ? () => this.props.changeFactorTogle(false)
                  : () => {
                      this.props.closeModal();
                      goToStep(2);
                    }
              }
              onClickClose={() => this.handleClose(goToStep)}
              dataTest="MfaAddpBbmBack"
            />
            <EFTTokenMfaWrapper>
              <EFTToken
                onConfirm={onConfirm}
                onMFAConfirmation={() => onConfirm()}
                onMFAError={() => {}}
                createAuthCodeParams={params}
              />
            </EFTTokenMfaWrapper>
          </Fragment>
        )
      });
    }
  }

  changeAccountStatus() {
    this.setState({
      accountStatus: !this.state.accountStatus,
      saveRecipientAccount: !this.state.accountStatus
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <Wrapper>
        {loading ? (
          <DefaultShimmerLoading repeat={4} innerRepeat={2} />
        ) : (
          <ErrorBoundary errorStatus={this.props.error}>
            <InstanceContext.Provider value={this}>
              <StepSlider steps={this.steps} />
            </InstanceContext.Provider>
          </ErrorBoundary>
        )}
      </Wrapper>
    );
  }
}

export default IndividualWireTransfer;

IndividualWireTransfer.defaultProps = {
  favoredData: {
    favored: "",
    CNPJ: "",
    bank: "",
    agency: "",
    account: "",
    verifyDigit: "",
    name: "",
    thirdFavoredFullName: "",
    thirdFavoredDocument: ""
  },
  transferData: {
    date: ""
  }
};

IndividualWireTransfer.propTypes = {
  transferData: object,
  favoredData: object,
  loading: bool,
  getBalanceAndEventsHistory: func.isRequired,
  getAccounts: func.isRequired
};
