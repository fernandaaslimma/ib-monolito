import React, { Component, Fragment } from "react";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import { StepSlider } from "react-bocombbm-components";
import DefaultShimmerLoading from "../../common/DefaultShimmerLoading";
import ListStep from "./ListStep";
import DetailsStep from "./DetailsStep";
import FormStep from "./FormStep";
import ConfirmationStep from "./ConfirmationStep";
import ResumeStep from "./ResumeStep";
import moment from "moment";
import {
  getDateFieldPlaceholderByLocale,
  isPtBR,
  translate
} from "../../../utils/i18n";
import { hotjarTag } from "../../../utils/hotjarFun";
import { checkDate } from "../../../utils/validations/fund";
import {
  REGISTRATION_DATA_NOTIFICATION_TYPE,
  SUITABILITY_NOTIFICATION_TYPE,
  FUNDS_SERVICE,
  ACTION_TYPE_APPROVE_INVESTMENT,
  TYPE_PRODUCT_FUNDS,
  TYPE_PRODUCT_FUNDS_UNSUITABLE
} from "../../../utils/constants";
import { unFormatNumber } from "../../../utils/formatNumber";
import { MODAL_TYPES } from "../../common/Modal/Modal";
import Header from "../../common/Modal/Header";
import EFTToken from "../../common/EFTToken";
import { EFTTokenMfaWrapper } from "./styles";

import { InstanceContext } from "./fundsContext";
class InvestmentFunds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      selectedFund: null,
      typeOfFundPendencie: "",
      route: "",
      filledValue: isPtBR() ? "0,00" : "0.00",
      selectedAccount: {},
      canInvest: false,
      hasTerms: null,
      signed: false,
      hasUnsuitableTerm: [],
      fundsInMoviment: "",
      chosenOperation: null
    };

    this.colors = {
      moderate: "#E3F1D4",
      aggressive: "#E2DCF5",
      conservative: "#DAE6F2"
    };

    this.steps = [
      ListStep,
      DetailsStep,
      FormStep,
      ConfirmationStep,
      ResumeStep
    ];
    this.selectFund = this.selectFund.bind(this);
    this.verifyPendencies = this.verifyPendencies.bind(this);
    this.changeAmmount = this.changeAmmount.bind(this);
    this.selectAccount = this.selectAccount.bind(this);
    this.createOperationFunction = this.createOperationFunction.bind(this);
    this.tokenModal = this.tokenModal.bind(this);
    this.approveTerm = this.approveTerm.bind(this);
    this.resetInvestability = this.resetInvestability.bind(this);
    this.resetFundPendencie = this.resetFundPendencie.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
    this.isMobile = this.isMobile.bind(this);
    this.checkFundIsInMoviment = this.checkFundIsInMoviment.bind(this);
    this.setChosenOperation = this.setChosenOperation.bind(this);
  }

  selectFund(selectedFund, callBack) {
    this.setState({ selectedFund });
    callBack();
  }

  setChosenOperation(operation) {
    this.setState({ chosenOperation: operation });
  }

  selectAccount(event) {
    const selectedAccount = this.props.accounts.find(
      account => account.accountNumber === event.target.value
    );

    this.setState({ selectedAccount });
  }

  changeAmmount(filledValue) {
    this.setState({ filledValue });
  }

  resetInvestability() {
    return this.setState({
      canInvest: false,
      signed: false,
      filledValue: isPtBR() ? "0,00" : "0.00"
    });
  }

  resetFundPendencie() {
    this.setState({ typeOfFundPendencie: "" });
  }

  async componentDidMount() {
    hotjarTag();
    await this.props.handleUserInputTranferDataDate(
      moment().format(getDateFieldPlaceholderByLocale())
    );
    await this.props.getInvestmentFunds({ showClosedFunds: true });
    await this.props.getFunds({ groupBy: "AssetName" });
    await this.props.getAvailableDateRanges(FUNDS_SERVICE);
    await this.props.getAccounts();
    await this.props.getPendingTransactionsFunds();
    this.setState({
      loading: false,
      selectedAccount: this.props.accounts[0]
    });
  }

  componentWillUnmount() {
    hotjarTag();
  }

  showFooterModal(route, typeOfFundPendencie) {
    this.setState({
      typeOfFundPendencie,
      route
    });
  }

  async verifyPendencies() {
    await this.props.getSubscriptionsPendencies();

    if (
      this.props.subscriptionsPendencies &&
      this.props.subscriptionsPendencies.length > 0
    ) {
      this.props.subscriptionsPendencies.every(item => {
        if (item.code === REGISTRATION_DATA_NOTIFICATION_TYPE) {
          this.showFooterModal(
            "/registrationData",
            REGISTRATION_DATA_NOTIFICATION_TYPE
          );
          return false;
        }
        if (item.code === SUITABILITY_NOTIFICATION_TYPE) {
          this.showFooterModal("/suitability", SUITABILITY_NOTIFICATION_TYPE);
          return false;
        }
        return true;
      });
    } else {
      this.setState({
        canInvest: true
      });
    }
  }

  async approveTerm(goToStep) {
    const {
      openToastr,
      closeToastr,
      subscription,
      approveNewTerms
    } = this.props;

    const productTermIdPath = subscription.terms.filter(
      element => element.type === TYPE_PRODUCT_FUNDS
    );

    const unsuitableTermIdPath = subscription.terms.filter(
      element => element.type === TYPE_PRODUCT_FUNDS_UNSUITABLE
    );

    try {
      productTermIdPath.length > 0 &&
        (await approveNewTerms({
          termId: productTermIdPath[0].id,
          accepted: true
        }));

      unsuitableTermIdPath.length > 0 &&
        (await approveNewTerms({
          termId: unsuitableTermIdPath[0].id,
          accepted: true
        }));

      closeToastr();

      this.setState({ signed: true });

      this.tokenModal(goToStep);
    } catch (error) {
      openToastr({
        text: translate("TOASTR_ERROR_ACCEPTED_NEW_TERMS"),
        isBelow: false,
        isTop: true,
        error: true,
        timeout: 600000
      });
    }
  }

  async downloadFile(file, filename, unsuitableTerm) {
    let fileCodeId = file.split(/[/]+/).pop();
    if (this.isMobile()) {
      await this.props.downloadTermsFunds(fileCodeId, unsuitableTerm);
    } else {
      const link = document.createElement("a");
      document.body.appendChild(link);
      link.href = file;
      link.download = filename;
      link.target = "_blank";
      link.click();
      setTimeout(link.remove(), 100);
      return link;
    }
  }

  isMobile() {
    return typeof MOBILEAPP_Download === "function";
  }

  handleClose() {
    this.props.closeModal();
    this.setState({ signed: false });
  }

  async createOperationFunction(goToStep) {
    const { createSubscription } = this.props;
    const {
      filledValue,
      selectedFund,
      selectedAccount: { account, bankCode, branch, number, holderId }
    } = this.state;

    const body = {
      productId: selectedFund.id,
      investmentValue: unFormatNumber(filledValue),
      account: {
        id: account,
        bankCode: bankCode,
        branch: branch,
        number: number
      },
      clientId: holderId
    };
    await createSubscription(body);

    const hasTermToApprove =
      this.props.subscription.terms && this.props.subscription.terms.length > 0;

    const hasUnsuitableTerm =
      this.props.subscription.terms &&
      this.props.subscription.terms.filter(
        element => element.type === TYPE_PRODUCT_FUNDS_UNSUITABLE
      );

    if (hasTermToApprove) {
      this.setState({
        hasUnsuitableTerm: hasUnsuitableTerm.length > 0,
        hasTerms: this.props.subscription
      });
    } else {
      this.tokenModal(goToStep);
    }
  }

  async tokenModal(goToStep) {
    const {
      methodChanging,
      subscription,
      openModal,
      approveSubscription
    } = this.props;
    const subscriptionId = subscription.id;

    const params = {
      actionType: ACTION_TYPE_APPROVE_INVESTMENT,
      payload: {
        id: subscriptionId,
        ...subscription
      }
    };

    const onConfirm = async () => {
      try {
        await approveSubscription(subscriptionId);
        this.props.closeModal();
        goToStep(5);
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
                : () => this.handleClose()
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
            />
          </EFTTokenMfaWrapper>
        </Fragment>
      )
    });
  }

  async checkFundIsInMoviment(fundName, serverTime) {
    const thisFundToday = this.props.pendingTransactionsFunds.filter(fund => {
      return (
        fund.product.name === fundName &&
        checkDate(fund.transactionDate, serverTime)
      );
    });

    if (thisFundToday.length === 0) {
      this.setState({ fundsInMoviment: "" });
    } else {
      this.setState({ fundsInMoviment: thisFundToday });
    }
  }

  render() {
    const { loading } = this.state;
    return (
      <Fragment>
        {loading ? (
          <DefaultShimmerLoading repeat={4} innerRepeat={2} />
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

export default InvestmentFunds;
