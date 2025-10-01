import React, { Component, Fragment } from "react";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import { StepSlider } from "react-bocombbm-components";
import DefaultShimmerLoading from "../../common/DefaultShimmerLoading";
import ListStep from "./ListStep";
import DetailsStep from "./DetailsStep";
import FormStep from "./FormStep";
import ConfirmationStep from "./ConfirmationStep";
import ResumeStep from "./ResumeStep";
import { isPtBR, translate } from "../../../utils/i18n";

import { InstanceContext } from "./fixedIncomeContext";
import {
  ACTION_TYPE_APPROVE_INVESTMENT,
  FIXED_INCOME,
  REGISTRATION_DATA_NOTIFICATION_TYPE,
  SUITABILITY_NOTIFICATION_TYPE
} from "../../../utils/constants";
import { MODAL_TYPES } from "../../common/Modal/Modal";
import Header from "../../common/Modal/Header/Header";
import { EFTTokenMfaWrapper } from "./styles";
import EFTToken from "../../common/EFTToken";
import { unFormatNumber } from "../../../utils/formatNumber";
import { checkDate } from "../../../utils/validations/fund";
class FixedIncome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: null,
      loading: true,
      filledValue: isPtBR ? "0,00" : "0.00",
      canInvest: false,
      signed: false,
      selectedAccount: {},
      typeOfFundPendencie: "",
      route: "",
      onGoingTransactions: null,
      isBottomSheetUpdate: false,
      clickedToContinue: false,
      onGoingBottomSheet: false,
      loadingButtonInvestRequest: false
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
    this.selectProduct = this.selectProduct.bind(this);
    this.changeAmmount = this.changeAmmount.bind(this);
    this.resetInvestability = this.resetInvestability.bind(this);
    this.selectAccount = this.selectAccount.bind(this);
    this.tokenModal = this.tokenModal.bind(this);
    this.createOperationFunction = this.createOperationFunction.bind(this);
    this.verifyPendencies = this.verifyPendencies.bind(this);
    this.verifyOnGoingTransactions = this.verifyOnGoingTransactions.bind(this);
    this.showFooterModal = this.showFooterModal.bind(this);
    this.resetSubscriptionPendencie = this.resetSubscriptionPendencie.bind(
      this
    );
    this.resetStateOnGoingTransaction = this.resetStateOnGoingTransaction.bind(
      this
    );
    this.handleClose = this.handleClose.bind(this);
    this.changeState = this.changeState.bind(this);
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

  async componentDidMount() {
    const { getInvestmentFI, getAccounts, getAvailableDateRanges } = this.props;
    await Promise.all([
      getInvestmentFI(),
      getAccounts(),
      getAvailableDateRanges(FIXED_INCOME)
    ]);

    this.setState({
      loading: false,
      selectedAccount: this.props.accounts[0]
    });
  }

  changeState(state, value) {
    this.setState({ [state]: value });
  }

  selectProduct(selectedProduct, callBack) {
    this.setState({ selectedProduct });
    callBack();
  }

  resetStateOnGoingTransaction() {
    this.setState({ onGoingTransactions: null });
  }

  resetSubscriptionPendencie() {
    this.setState({ typeOfFundPendencie: "", isBottomSheetUpdate: false });
  }

  showFooterModal(route, typeOfFundPendencie) {
    this.setState({
      typeOfFundPendencie,
      route
    });
  }

  async verifyPendencies(goToStep) {
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
      goToStep(3);
    }
  }

  async verifyOnGoingTransactions(id, serverTime, goToStep) {
    this.setState({
      loadingButtonInvestRequest: true
    });
    const { getPendingTransactionsFI } = this.props;

    await getPendingTransactionsFI();

    const thisTransactionToday = this.props.pendingTransactionsFI.filter(
      transaction => {
        return (
          transaction.product.id === id &&
          checkDate(transaction.transactionDate, serverTime)
        );
      }
    );

    if (thisTransactionToday.length === 0) {
      this.createOperationFunction(goToStep);
    } else {
      this.setState({
        onGoingTransactions: thisTransactionToday,
        loadingButtonInvestRequest: false
      });
    }
  }

  async createOperationFunction(goToStep) {
    this.state.loadingButtonInvestRequest === false &&
      this.setState({ loadingButtonInvestRequest: true });
    const { createSubscriptionFI } = this.props;
    const {
      filledValue,
      selectedProduct,
      selectedAccount: { account, bankCode, branch, number }
    } = this.state;

    const body = {
      productId: selectedProduct.id,
      investmentValue: unFormatNumber(filledValue),
      account: {
        id: account,
        bankCode: bankCode,
        branch: branch,
        number: number
      }
    };
    await createSubscriptionFI(body);

    this.tokenModal(goToStep);
  }

  handleClose() {
    this.props.closeModal();
    this.setState({ signed: false });
  }

  async tokenModal(goToStep) {
    this.setState({
      loadingButtonInvestRequest: false
    });
    const { selectedProduct } = this.state;

    const {
      methodChanging,
      subscription,
      openModal,
      closeModal,
      approveSubscriptionFI,
      openToastr,
      addError
    } = this.props;

    const subscriptionId = subscription.id;

    const params = {
      actionType: ACTION_TYPE_APPROVE_INVESTMENT,
      payload: {
        id: subscriptionId,
        productName: selectedProduct.productLabel,
        ...subscription
      }
    };

    const onConfirm = async () => {
      try {
        await approveSubscriptionFI(subscriptionId);
        closeModal();
        openToastr({
          text: translate("INVESTMENTS_FIXED_INCOME_TOASTR_ACCEPTED"),
          isBelow: true,
          isTop: false,
          timeout: 3000
        });
        goToStep(5);
      } catch (error) {
        addError(error);
        closeModal();
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
            <InstanceContext.Provider value={this}>
              <StepSlider steps={this.steps} />
            </InstanceContext.Provider>
          </ErrorBoundary>
        )}
      </Fragment>
    );
  }
}

export default FixedIncome;
