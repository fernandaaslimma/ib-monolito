import React, { Component, Fragment } from "react";
import _ from "lodash";
import moment from "moment";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import { StepSlider, Button } from "react-bocombbm-components";
import DefaultShimmerLoading from "../../common/DefaultShimmerLoading";
import DefaultContent from "../../common/DefaultContent";
import Icon from "../../common/Icon";
import { black30 } from "../../../styles/settings";
import ListStep from "./ListStep";
import { checkIfHasAccess } from "../../common/CanAccess/CanAccess";
import DetailsStep from "../../InvestmentProducts/Funds/DetailsStep";
import FormStep from "../../InvestmentProducts/Funds/FormStep";
import ConfirmationStep from "../../InvestmentProducts/Funds/ConfirmationStep";
import ResumeStep from "../../InvestmentProducts/Funds/ResumeStep";
import { checkDate } from "../../../utils/validations/fund";
import { redirect } from "../../../utils/redirect";
import {
  getDateFieldPlaceholderByLocale,
  isPtBR,
  translate
} from "../../../utils/i18n";
import {
  REGISTRATION_DATA_NOTIFICATION_TYPE,
  SUITABILITY_NOTIFICATION_TYPE,
  FUNDS_SERVICE,
  ACTION_TYPE_APPROVE_INVESTMENT,
  TYPE_PRODUCT_FUNDS,
  TYPE_PRODUCT_FUNDS_UNSUITABLE,
  INVESTMENT_PRODUCTS_LIST_URL,
  INVESTMENT_FUNDS_ROLE
} from "../../../utils/constants";
import { unFormatNumber } from "../../../utils/formatNumber";
import { MODAL_TYPES } from "../../common/Modal/Modal";
import Header from "../../common/Modal/Header";
import EFTToken from "../../common/EFTToken";
import {
  EFTTokenMfaWrapper,
  RedemptionErrorMessage,
  RedemptionErrorMessageWrapper,
  FixedButtonArea
} from "./styles";
import { InstanceContext } from "../../InvestmentProducts/Funds/fundsContext";
import AnimatedBottonSheet from "../../common/AnimatedBottomSheet";
import createLogError from "../../../utils/createLogError";
class InvestmentFunds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      selectedFund: null,
      typeOfFundPendencie: "",
      route: "",
      filledValue: isPtBR ? "0,00" : "0.00",
      selectedAccount: {},
      canInvest: false,
      hasTerms: null,
      signed: false,
      isEmpty: false,
      hasUnsuitableTerm: [],
      usedSteps: [],
      chosenOperation: null,
      hasAccess: false,
      openMaxWithdrawalSheet: false,
      errorTitle: "",
      errorMessage: ""
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
    this.isUsedStep = this.isUsedStep.bind(this);
    this.clearUsedSteps = this.clearUsedSteps.bind(this);
    this.usesStep = this.usesStep.bind(this);
    this.setChosenOperation = this.setChosenOperation.bind(this);
    this.checkFundIsInMoviment = this.checkFundIsInMoviment.bind(this);
    this.goToOriginalFundsList = this.goToOriginalFundsList.bind(this);
  }

  isUsedStep(step) {
    const { usedSteps } = this.state;

    if (usedSteps.includes(step)) {
      return true;
    } else {
      return false;
    }
  }

  usesStep(step) {
    const { usedSteps } = this.state;
    let newArray = usedSteps;
    newArray.push(step);
    this.setState({ usedSteps: newArray });
  }

  clearUsedSteps() {
    this.setState({ usedSteps: [] });
  }

  setChosenOperation(operation) {
    this.setState({ chosenOperation: operation });
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

  selectFund(selectedFund, callBack) {
    const { funds } = this.props;
    const selectedTotalFunds =
      selectedFund &&
      funds &&
      _.find(funds, function(item) {
        return item.fundCnpj === selectedFund.cnpj;
      });
    const {
      iofBalance,
      incomeTaxBalance,
      grossBalance,
      grossResultBalance
    } = selectedTotalFunds;
    selectedTotalFunds.grossIncome = grossBalance - grossResultBalance;
    selectedTotalFunds.irIof = iofBalance + incomeTaxBalance;
    selectedTotalFunds.netIncome =
      grossResultBalance - selectedTotalFunds.irIof;
    selectedFund.investmentDetails = selectedTotalFunds;
    this.setState({ selectedFund });
    callBack();
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
      filledValue: isPtBR ? "0,00" : "0.00"
    });
  }

  resetFundPendencie() {
    this.setState({ typeOfFundPendencie: "" });
  }

  goToOriginalFundsList() {
    redirect(INVESTMENT_PRODUCTS_LIST_URL);
  }

  async componentDidMount() {
    this.setState({
      hasAccess: checkIfHasAccess(
        this.props.userInfo,
        [INVESTMENT_FUNDS_ROLE],
        true
      )
    });
    await this.props.handleUserInputTranferDataDate(
      moment().format(getDateFieldPlaceholderByLocale())
    );
    this.props.getPendingTransactionsFunds();
    this.props.getTotalFunds();
    await this.props.getFunds({ groupBy: "AssetName" });
    if (this.state.hasAccess) {
      await this.props.getInvestmentFunds({ showClosedFunds: true });
    }
    await this.props.getAvailableDateRanges(FUNDS_SERVICE);
    await this.props.getAccounts();
    this.setState({
      loading: false,
      isEmpty: this.props.funds.length === 0,
      selectedAccount: this.props.accounts[0]
    });
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
    const {
      userInfo: { corpId },
      createSubscription,
      createRedemption,
      addError
    } = this.props;
    const {
      filledValue,
      selectedFund: {
        cnpj,
        id,
        investmentDetails: { grossBalance }
      },
      chosenOperation,
      selectedAccount: { account, bankCode, branch, number, holderId }
    } = this.state;

    const redeemBody = {
      productId: id,
      productDocument: cnpj,
      redemptionValue: unFormatNumber(filledValue),
      investmentValue: unFormatNumber(filledValue),
      clientId: holderId,
      fullRedemption:
        unFormatNumber(filledValue) === grossBalance ? true : false,
      account: {
        bankCode: `${bankCode}`,
        branch: `${branch}`,
        id: account,
        number: `${number}`
      }
    };

    const investBody = {
      productId: id,
      investmentValue: unFormatNumber(filledValue),
      account: {
        id: account,
        bankCode: bankCode,
        branch: branch,
        number: number
      },
      clientId: holderId
    };

    if (chosenOperation === "redeem") {
      try {
        await createRedemption(redeemBody);
      } catch ({ error }) {
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
            message: "Error when trying to withdral fund",
            status: error.status,
            corpId: corpId
          });
          addError({
            message: "Error when trying to withdral fund",
            status: error.status,
            corpId: corpId
          });
        }
      }
    } else {
      await createSubscription(investBody);
    }

    const hasTermToApprove =
      !chosenOperation === "redeem" &&
      this.props.subscription.terms &&
      this.props.subscription.terms.length > 0;

    const hasUnsuitableTerm =
      !chosenOperation === "redeem" &&
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
      redemption,
      openModal,
      approveSubscription,
      approveRedemption
    } = this.props;
    const { chosenOperation } = this.state;
    const subscriptionId = subscription && subscription.id;
    const redemptionId = redemption && redemption.id;

    const subscriptionParams = {
      actionType: ACTION_TYPE_APPROVE_INVESTMENT,
      payload: {
        id: subscriptionId,
        ...subscription
      }
    };

    const redemptionParams = {
      actionType: ACTION_TYPE_APPROVE_INVESTMENT,
      payload: {
        id: redemptionId,
        investmentValue: redemption?.redemptionValue,
        ...redemption
      }
    };

    const params =
      chosenOperation === "redeem" ? redemptionParams : subscriptionParams;

    const onConfirm = async () => {
      try {
        if (chosenOperation === "redeem") {
          await approveRedemption(redemptionId);
        } else {
          await approveSubscription(subscriptionId);
        }
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

  render() {
    const { loading } = this.state;
    return (
      <Fragment>
        {loading ? (
          <DefaultShimmerLoading repeat={4} innerRepeat={2} />
        ) : (
          <ErrorBoundary errorStatus={this.props.error}>
            {this.state.isEmpty ? (
              <DefaultContent
                data-test="Empty_Position"
                Icon={() => <Icon type="EmptyInvest" color={black30} />}
                primaryText={translate("POSITION_FUNDS_EMPTY_STATE_TITLE")}
                secondaryTexts={[translate("POSITION_FUNDS_EMPTY_STATE_TEXT")]}
              >
                <Button
                  type="outline"
                  spacing={{
                    top: "l",
                    bottom: "none",
                    right: "s",
                    left: "s"
                  }}
                  dataTest="redirectToFunds"
                  onClick={() => redirect(INVESTMENT_PRODUCTS_LIST_URL)}
                >
                  {translate("POSITION_FUNDS_EMPTY_STATE_BUTTON_REDIRECT")}
                </Button>
              </DefaultContent>
            ) : (
              <InstanceContext.Provider value={this}>
                <StepSlider steps={this.steps} />
              </InstanceContext.Provider>
            )}
          </ErrorBoundary>
        )}
        <AnimatedBottonSheet
          data-test="createRedemption"
          isOpen={this.state.openMaxWithdrawalSheet}
          head={{
            title: this.state.errorTitle
          }}
          velocity={0.3}
          onClickInBack={() => this.setState({ openMaxWithdrawalSheet: false })}
        >
          <Fragment>
            <RedemptionErrorMessageWrapper>
              {this.state.errorMessage &&
                this.state.errorMessage.map((message, index) => (
                  <RedemptionErrorMessage
                    key={index}
                    className="RedemptionErrorMessage"
                  >
                    {message}
                  </RedemptionErrorMessage>
                ))}
            </RedemptionErrorMessageWrapper>
            <FixedButtonArea>
              <Button
                onClick={() => this.setState({ openMaxWithdrawalSheet: false })}
              >
                {translate("POSITION_FUNDS_UNDERSTOOD")}
              </Button>
            </FixedButtonArea>
          </Fragment>
        </AnimatedBottonSheet>
      </Fragment>
    );
  }
}

export default InvestmentFunds;
