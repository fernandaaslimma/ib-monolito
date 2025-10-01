import React, { Component, Fragment } from "react";
import moment from "moment";
import { Icon, Pagination, Button } from "react-bocombbm-components";
import * as htmlToImage from "html-to-image";
import _, { concat } from "lodash";

import { func, bool } from "prop-types";
import {
  Balance,
  Status,
  InnerLabel,
  ButtonsWrapperLib,
  StyledButton,
  IconView,
  PaginaTionWrapper,
  InfoWrapper,
  Events,
  Line,
  DescriptionItem,
  ContentCard,
  EmptyItem,
  DescriptionTextItem,
  AmountTextItem,
  CardWrapper,
  DefaultWrapper,
  PageTitle,
  WrapperPendingOperations,
  CounterPart,
  AccountInfoWrapper,
  AccountInfoItem,
  AccountInfoLabel,
  AccountInfoContent,
  StyledLine,
  ButtonsWrapper,
  ChangeAccountWrapper,
  ChangeModalButtonWrapper,
  HideValueWrapper,
  AccountInfoItemValue,
  AccountInformation,
  WrapperOffShore
} from "./styles";

import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import Card from "../../common/Card";
import { Container } from "../../../styles/grid";
import StatementsFilter from "./StatementsFilter";
import DefaultContent from "../../common/DefaultContent";

import { darkGreen, black30, neutral200 } from "../../../styles/settings";
import {
  translate,
  getDateFieldPlaceholderByLocale
} from "../../../utils/i18n";
import HideableValue from "../../common/HideableValue";
import DefaultShimmerLoading from "../../common/DefaultShimmerLoading";

import { rem, remFontSize } from "../../../styles/tools";
import {
  DEFAULT_API_RESPONSE_DATE_FORMAT,
  STATEMENTS_PAGE_SIZE,
  DEFAULT_PAGEABLE_RANGE,
  SCHEDULED_TRANSFERS,
  FILE_FORMAT_PNG,
  CNAB_ROLE
} from "../../../utils/constants";
import {
  isMsBrowser,
  isMsEdge,
  isInternetExplorer
} from "../../../utils/getNavigator";
import Hide from "../../common/Hide";
import Mobile from "./Mobile";
import PendingOperations from "../../common/PendingOperations";
import StatementsCards from "./StatementsCards";
import createLogError from "../../../utils/createLogError";
import { isCorporationUser, isIndividualUser } from "../../../utils/roles";
import formatNumber, { formatCNPJ } from "../../../utils/formatNumber";
import TransferDetails from "./TransferDetails";
import { MODAL_TYPES } from "../../common/Modal/Modal";
import Header from "../../common/Modal/Header/Header";
import Table from "../../common/Table";
import Radio from "../../common/Radio";
import {
  ContentNotShared,
  Disclaimer,
  ShareArea,
  VoucherLine,
  VoucherWrapper
} from "./Mobile/StatementsCards/styles";
import Voucher from "./Voucher";
import { shareFromBase64 } from "../../../utils/downloadFile";
import { scrollToTop } from "../../../utils/dom";
import { checkIfHasAccess } from "../../common/CanAccess/CanAccess";
import PrintView from "./PrintView";
import OffshoreSelect from "../../common/OffshoreSelect/OffshoreSelect";
import BlockedData from "../../common/BlockedData";

let count = 5;

class Statements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAccount: null,
      loading: true,
      loadingCnab: false,
      hideValues: true,
      isEmptyEvents: false,
      isEmptyFutureEvents: true,
      isBottomSheet: false,
      balanceHistoryParams: {
        range: {
          from: moment
            .utc()
            .subtract(60, "days")
            .toDate(),
          to: moment.utc().toDate()
        },
        activePage: 1,
        limit: STATEMENTS_PAGE_SIZE,
        offset: 0,
        onlyDaysWithTransaction: true
      },
      printContext: false,
      filterButtonFill: undefined,
      futureTransactions: [],
      selectedAccount: {},
      filteredAccounts: [],
      selectedAccountIndex: 0,
      closingModalContext: false,
      transferContent: {
        transferInfo: {},
        receiverInfo: {},
        transferType: ""
      },
      loadingVoucher: false
    };
    this.myRef = React.createRef();
    this.ref = React.createRef();

    this._isMounted = false;

    this.changeValuesVisibility = this.changeValuesVisibility.bind(this);
    this.changePage = this.changePage.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.onFilterMobile = this.onFilterMobile.bind(this);
    this.changeAccount = this.changeAccount.bind(this);
    this.printScreen = this.printScreen.bind(this);
    this.downloadCnab = this.downloadCnab.bind(this);
    this.resetStates = this.resetStates.bind(this);
    this.getPendingOperationsNumber = this.getPendingOperationsNumber.bind(
      this
    );
    this.filterBySettledOperation = this.filterBySettledOperation.bind(this);
    this.sortedArray = this.sortedArray.bind(this);
    this.filterEmptyAccounts = this.filterEmptyAccounts.bind(this);
    this.buildRows = this.buildRows.bind(this);
    this.openChangeAccountModal = this.openChangeAccountModal.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.mountCashAccount = this.mountCashAccount.bind(this);
    this.formatValues = this.formatValues.bind(this);
    this.injectCurrency = this.injectCurrency.bind(this);
    this.maskValues = this.maskValues.bind(this);
    this.triggerModal = this.triggerModal.bind(this);
    this.renderVoucher = this.renderVoucher.bind(this);
    this.getBank = this.getBank.bind(this);
    this.shareAction = this.shareAction.bind(this);
    this.renderVoucherContent = this.renderVoucherContent.bind(this);
  }

  async componentDidMount() {
    this._isMounted = true;
    const { getAccounts, getBanks } = this.props;

    await getAccounts(null, true);
    await getBanks();

    const newAccounts = this.filterEmptyAccounts(this.props.accounts);

    const initialAccount = newAccounts ? newAccounts[0] : "";

    this._isMounted &&
      this.setState({
        currentAccount: initialAccount,
        selectedAccount: initialAccount,
        filteredAccounts: newAccounts
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      currentAccount,
      balanceHistoryParams,
      selectedAccount,
      closingModalContext
    } = this.state;

    if (
      prevState.currentAccount !== currentAccount ||
      prevState.balanceHistoryParams !== balanceHistoryParams
    ) {
      this.fetchStatementsFutureTransactionsData(30);
      this.fetchStatementsData();
    }

    if (
      Object.keys(prevState.selectedAccount).length > 0 &&
      prevState.selectedAccount !== selectedAccount &&
      !closingModalContext
    ) {
      this.openChangeAccountModal();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  resetStates() {
    this.setState({
      filterButtonFill: undefined,
      balanceHistoryParams: {
        range: {
          from: moment
            .utc()
            .subtract(60, "days")
            .toDate(),
          to: moment.utc().toDate()
        },
        activePage: 1,
        limit: STATEMENTS_PAGE_SIZE,
        offset: 0,
        onlyDaysWithTransaction: true
      }
    });
  }

  getBank(ispb) {
    let { banksList } = this.props;

    let hasBbm = banksList.some(item => item.code === "107");

    !hasBbm &&
      banksList.push({
        code: "107",
        ispb: "15114366",
        value: "BANCO BOCOM BBM"
      });

    const bankFound = banksList.filter(bankItem => {
      if (ispb == bankItem.ispb) {
        return bankItem;
      }
    });

    return bankFound.length ? bankFound[0].value : "";
  }

  changeValuesVisibility() {
    this.setState({
      hideValues: !this.state.hideValues
    });
  }

  filterEmptyAccounts(accounts) {
    return (
      accounts &&
      accounts.length > 0 &&
      accounts.filter(account => Object.keys(account).length)
    );
  }

  async changeAccount(e) {
    const { accounts, getAccounts } = this.props;
    const currentAccount = await accounts.find(
      account => account.accountNumber === e.target.value
    );

    await getAccounts(null, true);

    this.setState({
      currentAccount,
      loading: true
    });
  }

  changePage(page) {
    this.setState({
      balanceHistoryParams: {
        ...this.state.balanceHistoryParams,
        activePage: page,
        offset: (page - 1) * STATEMENTS_PAGE_SIZE
      },
      loading: true
    });
    window.scrollTo(0, 0);
  }

  onFilterMobile({ range, filterButtonFill }) {
    this.setState({
      filterButtonFill,
      balanceHistoryParams: {
        ...this.state.balanceHistoryParams,
        range
      },
      loading: true
    });
  }

  onFilter(range) {
    this.setState({
      balanceHistoryParams: {
        ...this.state.balanceHistoryParams,
        range
      },
      loading: true
    });
  }

  async downloadCnab() {
    this.setState({ loadingCnab: true });

    const { getStatementsCnab } = this.props;
    const { balanceHistoryParams, currentAccount } = this.state;
    await getStatementsCnab(currentAccount, balanceHistoryParams);

    this.setState({ loadingCnab: false });
  }

  async printScreen() {
    const valueIsNotVisible = this.state.hideValues;
    await this.setState({
      printContext: true
    });

    if (valueIsNotVisible === true) {
      await this.setState({
        hideValues: false
      });

      this.setState({
        loading: false
      });
    }

    window.print();

    valueIsNotVisible === true
      ? this.setState({
          hideValues: true,
          printContext: false
        })
      : this.setState({
          printContext: false
        });
  }

  async fetchStatementsData() {
    const { getBalanceAndEventsHistory } = this.props;
    const { balanceHistoryParams, currentAccount } = this.state;
    await getBalanceAndEventsHistory(currentAccount, balanceHistoryParams);

    this.setState({
      isEmptyEvents: this.props.balanceAndEventsHistory
        ? this.props.balanceAndEventsHistory.length === 0
        : true,
      loading: false
    });
  }

  getPendingOperationsNumber(futureOperations) {
    let counter = 0;
    futureOperations &&
      futureOperations.length &&
      futureOperations.map(item => {
        return (counter += item.events.length);
      });

    return counter;
  }

  async fetchStatementsFutureTransactionsData(period) {
    const { getFutureEventsHistory, getTransfers } = this.props;
    const { currentAccount } = this.state;

    const transactionsPeriod = period && Number.isInteger(period) ? period : 15;
    const futureHistoryParams = {
      range: {
        from: moment.utc().toDate(),
        to: moment
          .utc()
          .add(transactionsPeriod, "days")
          .toDate()
      },
      activePage: 1,
      limit: 90,
      offset: 0,
      onlyDaysWithTransaction: true,
      showFutureTransactions: true
    };
    await getTransfers({ type: SCHEDULED_TRANSFERS });
    await getFutureEventsHistory(currentAccount, futureHistoryParams);

    var futureEventsRaw = await this.filterBySettledOperation(
      this.props.futureEventsHistory,
      false
    );

    const futureEvents = Object.assign([], futureEventsRaw);

    var futureTed = _.filter(this.props.pendencies.content, [
      "status",
      "waitingSettlement"
    ]);

    var grouped = _.groupBy(futureTed, "dueDate");
    var mapped = _.map(grouped, (item, i) => {
      const dateToIso = value =>
        new Date(parseInt(value)).toISOString().substring(0, 10);
      item.map(event => {
        event.date = new Date(parseInt(event.dueDate))
          .toISOString()
          .substring(0, 10);
        event.amount = parseFloat(`-${event.amount}`);
        event.settled = false;
      });
      return { date: dateToIso(i), events: item };
    });

    await futureEvents.map(item => {
      const DateIndex = _.findIndex(mapped, ["date", item.date]);
      if (DateIndex >= 0) {
        mapped[DateIndex].events = _.concat(
          mapped[DateIndex].events,
          item.events
        );
      } else {
        mapped.push({ date: item.date, events: item.events });
      }
    });

    this.setState({
      isEmptyFutureEvents: Object.keys(mapped).length === 0,
      futureTransactions: mapped
    });
  }

  filterBySettledOperation(futureEventsHistory, settled = false) {
    const futureEventsHistorySettledAs =
      futureEventsHistory && futureEventsHistory.length
        ? futureEventsHistory.filter(
            item =>
              (item.events =
                item.events &&
                item.events.filter(event => event.settled === settled)).length
          )
        : {};
    return futureEventsHistorySettledAs;
  }

  sortedArray(data) {
    const sorted =
      data &&
      data.length &&
      this.filterBySettledOperation(data, false).sort(function compare(a, b) {
        var dateA = new moment.utc(a.date);
        var dateB = new moment.utc(b.date);
        return dateA - dateB;
      });
    return sorted;
  }

  handleChangeCheckbox(e) {
    const { filteredAccounts } = this.state;

    const selectedAccount = filteredAccounts.filter(
      item => item.accountNumber === e.target.value
    );

    const selectedAccountIndex = filteredAccounts.findIndex(
      item => item.accountNumber === e.target.value
    );

    this.setState({
      selectedAccount: selectedAccount[0],
      selectedAccountIndex
    });
  }

  buildRows(rows) {
    const { selectedAccount } = this.state;
    return rows.map((row, index) => ({
      checkbox: (
        <Radio
          dataTest={`RadioStatementsAccount_${index}`}
          onChange={e => this.handleChangeCheckbox(e)}
          name="account"
          value={row.accountNumber}
          checked={row.accountNumber === selectedAccount.accountNumber}
        />
      ),
      name: (
        <StyledLine
          checked={row.accountNumber === selectedAccount.accountNumber}
        >
          {row.name}
        </StyledLine>
      ),
      cnpj: (
        <StyledLine
          checked={row.accountNumber === selectedAccount.accountNumber}
        >
          {formatCNPJ(row.document)}
        </StyledLine>
      ),
      accountNumber: (
        <StyledLine
          checked={row.accountNumber === selectedAccount.accountNumber}
        >
          {row.accountNumber}
        </StyledLine>
      )
    }));
  }

  async changeAccountAndCloseModal() {
    const { filteredAccounts, selectedAccount } = this.state;

    const selectedAccountIndex = filteredAccounts.findIndex(
      item => item.accountNumber === selectedAccount.accountNumber
    );
    this.props.closeModal();

    await this.props.getAccounts(null, true);

    this.setState({
      currentAccount: selectedAccount,
      selectedAccountIndex,
      closingModalContext: true,
      loading: true
    });
  }

  handleClose() {
    const { filteredAccounts, currentAccount } = this.state;

    const selectedAccountIndex = filteredAccounts.findIndex(
      item => item.accountNumber === currentAccount.accountNumber
    );

    this.setState({
      selectedAccount: currentAccount,
      selectedAccountIndex,
      closingModalContext: true
    });

    this.props.closeModal();
  }

  openChangeAccountModal() {
    this.setState({
      closingModalContext: false
    });
    this.props.openModal({
      type: MODAL_TYPES.PAGE_AS_MODAL,
      width: rem(972),
      children: () => (
        <div style={{ backgroundColor: "#ffffff" }}>
          <Header
            onClickClose={() => this.handleClose()}
            dataTest="changeAccountsStatementsHeader"
            title={translate("STATEMENTS_SELECT_ACCOUNT")}
          />
          <ChangeAccountWrapper>
            <Table
              headers={[
                {
                  title: "",
                  field: "checkbox",
                  width: "7%",
                  style: {
                    paddingTop: `${rem(0)}`,
                    paddingBottom: `${rem(0)}`,
                    paddingLeft: `${rem(7)}`
                  }
                },
                {
                  title: translate("STATEMENTS_CORPORATE_NAME"),
                  field: "name",
                  width: "50%",
                  style: { paddingTop: `${rem(0)}`, paddingBottom: `${rem(0)}` }
                },
                {
                  title: translate("STATEMENTS_CNPJ"),
                  field: "cnpj",
                  width: "30%",
                  style: { paddingTop: `${rem(0)}`, paddingBottom: `${rem(0)}` }
                },
                {
                  title: translate("STATEMENTS_ACCOUNT_INFO"),
                  field: "accountNumber",
                  width: "20%",
                  style: { paddingTop: `${rem(0)}`, paddingBottom: `${rem(0)}` }
                }
              ]}
              data={this.buildRows(this.state.filteredAccounts)}
              withBackground={true}
              withSeparator
              selectedLine={this.state.selectedAccountIndex}
              borderSpacing={6}
              spaceBetweenHeadAndBody={20}
            />
            <ButtonsWrapperLib>
              <Button
                dataTest="cancelButton"
                type="outline"
                onClick={() => this.handleClose()}
              >
                {translate("STATEMENTS_CANCEL_CHANGE_ACCOUNT")}
              </Button>
              <Button
                dataTest="confirmButton"
                type="conclusive"
                onClick={() => this.changeAccountAndCloseModal()}
              >
                {translate("STATEMENTS_CONFIRM_CHANGE_ACCOUNT")}
              </Button>
            </ButtonsWrapperLib>
          </ChangeAccountWrapper>
        </div>
      )
    });
  }

  mountCashAccount(transferData, key) {
    const number =
      transferData[key].number && transferData[key].number.length
        ? transferData[key].number
        : transferData[key].accountNumber &&
          transferData[key].accountNumber.length
        ? transferData[key].accountNumber
        : "X";

    const getVD = () => {
      if (
        transferData[key].accountVerifyingDigit &&
        transferData[key].accountVerifyingDigit.length
      ) {
        return transferData[key].accountVerifyingDigit;
      } else if (
        transferData[key].verifyingDigit &&
        transferData[key].verifyingDigit.legth
      ) {
        return transferData[key].verifyingDigit;
      } else return "X";
    };

    return `${number}-${getVD()}`;
  }

  formatValues(value) {
    return formatNumber(Math.abs(value), { digits: 2 });
  }

  injectCurrency(value) {
    const defaultCurrency = "R$";

    return `${
      Math.sign(value) === -1 ? "-" : "+"
    } ${defaultCurrency} ${this.formatValues(value)}`;
  }

  maskValues(value) {
    const hideMask = "\u25CF".repeat(6);
    if (this.state.hideValues) {
      return value.lastIndexOf(" ") != -1
        ? concat(value.substring(0, value.lastIndexOf(" ") + 1), hideMask)
        : hideMask;
    }
    return value;
  }

  triggerModal(transferData, isFuture = false) {
    const { currentAccount } = this.state;
    this.setState({
      transferContent: {
        transferInfo: transferData,
        receiverInfo: !isFuture
          ? {
              ...transferData.counterParty,
              name:
                transferData.counterParty &&
                transferData.counterParty.partyName.length
                  ? transferData.counterParty.partyName
                  : "",
              document: transferData.counterParty
                ? transferData.counterParty.partyDocument
                : "",
              branch: transferData.counterParty
                ? transferData.counterParty.accountBranch
                : "",
              cashAccount: transferData.counterParty
                ? this.mountCashAccount(transferData, "counterParty")
                : "",
              bankName: transferData.counterParty
                ? this.getBank(transferData.counterParty.bankISPB)
                : ""
            }
          : {
              ...transferData.recipient,
              cashAccount: this.mountCashAccount(transferData, "recipient")
            },
        senderInfo: {
          ...currentAccount,
          bankName: this.getBank(currentAccount.bankISPB),
          cashAccount: `${currentAccount.number}-${currentAccount.verifyingDigit}`
        },
        transferType: transferData.eventClass
      }
    });
    this.props.openModal({
      type: MODAL_TYPES.FIXED_MODAL,
      width: rem(400),
      closeTreatment: true,
      children: () => {
        return (
          <Fragment>
            <Header
              onClickClose={() => this.props.closeModal()}
              dataTest="VoucherModalHeader"
              title={translate("VOUCHER")}
              bottomSheetHeaderStyle
            />
            <TransferDetails
              transferContent={this.state.transferContent}
              maskValues={this.maskValues}
              injectCurrency={this.injectCurrency}
              renderVoucher={() => this.renderVoucher()}
              closeVoucher={() => this.props.closeModal()}
            />
          </Fragment>
        );
      }
    });
  }

  shareAction() {
    this.setState({
      loadingVoucher: true
    });
    htmlToImage
      .toJpeg(this.myRef.current, { quality: 0.8 })
      .then(async function(dataUrl) {
        const strImage = dataUrl.replace(/^data:image\/[a-z]+;base64,/, "");
        await shareFromBase64(
          strImage,
          translate("VOUCHER") + ".png",
          FILE_FORMAT_PNG
        );
      })
      .catch(function(error) {
        createLogError({
          message: error.message,
          customMessage:
            "This error was originated when trying to share voucher",
          status: ""
        });
      });
    this.setState({
      loadingVoucher: false
    });
  }
  renderVoucherContent() {
    const { closeModal } = this.props;
    const { transferContent, loadingVoucher } = this.state;
    return (
      <Fragment>
        <Header
          onClickClose={() => closeModal()}
          dataTest="VoucherModalHeader"
          title={translate("VOUCHER")}
          bottomSheetHeaderStyle
        />
        <VoucherWrapper desktop={true} dataTest={"VoucherWrapper"}>
          <div ref={this.myRef}>
            <Voucher
              transferContent={transferContent}
              defaultCurrency={"R$"}
              downloadMode={false}
              desktop={true}
            />
          </div>

          <ContentNotShared>
            <VoucherLine />

            <Disclaimer>{translate("VOUCHER_CONTACT_YOUR_BANKER")}</Disclaimer>
            <ShareArea canShare={transferContent.transferType}>
              <Button
                dataTest="closeVoucherButton"
                type="outline"
                onClick={() => closeModal()}
              >
                {translate("CLOSE")}
              </Button>
              {transferContent.transferType === "TransferenciaEnviada" && (
                <Button
                  dataTest="shareVoucherButton"
                  onClick={() => this.shareAction()}
                  loading={loadingVoucher}
                  disabled={loadingVoucher}
                >
                  {translate("VOUCHER_SHARE")}
                </Button>
              )}
            </ShareArea>
          </ContentNotShared>
        </VoucherWrapper>
      </Fragment>
    );
  }

  renderVoucher() {
    scrollToTop();
    const { openModal, closeModal } = this.props;
    closeModal();
    openModal({
      type: MODAL_TYPES.FIXED_MODAL,
      width: rem(768),
      bigModal: true,
      closeTreatment: true,
      children: () => {
        return this.renderVoucherContent();
      }
    });
  }

  render() {
    const {
      accounts,
      balanceAndEventsHistory,
      eventsTotalCount,
      userInfo
    } = this.props;
    const {
      currentAccount,
      loading,
      loadingCnab,
      hideValues,
      balanceHistoryParams,
      isEmptyEvents,
      isEmptyFutureEvents,
      isBottomSheet,
      printContext,
      filterButtonFill,
      filteredAccounts
    } = this.state;

    const currency = "(R$)";
    const printCurrency = "R$";
    const blocked = currentAccount?.blockedBalance === 100000000;

    const showCNAB =
      isCorporationUser() && checkIfHasAccess(userInfo, [CNAB_ROLE]);

    const selectView = () => {
      try {
        if (!accounts || Object.keys(accounts).length === 0) {
          throw new Error("This user has no accounts");
        }
        if (__SHOW_STATEMENTS_CONTENT_MOBILE__ === "true") {
          return displayContent();
        } else {
          return isIndividualUser() ? (
            !printContext ? (
              <Fragment>{displayMobile()}</Fragment>
            ) : (
              <Fragment>{displayPrintContent()}</Fragment>
            )
          ) : (
            <Fragment>
              {!printContext ? (
                <Hide below="md">{displayContent()}</Hide>
              ) : null}
              {!printContext ? <Hide above="md">{displayMobile()}</Hide> : null}
              {printContext ? displayPrintContent() : null}
            </Fragment>
          );
        }
      } catch (error) {
        createLogError({
          message: error.message,
          status: "",
          corpId: userInfo.corpId
        });
      }
    };

    const displayMobile = () => {
      return (
        <Mobile
          changeAccount={this.changeAccount}
          changeBottomSheetState={this.changeBottomSheetState}
          accounts={this.filterEmptyAccounts(accounts)}
          originAccount={currentAccount}
          balanceAndEventsHistory={balanceAndEventsHistory}
          isEmptyEvents={isEmptyEvents}
          futureEventsHistory={this.sortedArray(this.state.futureTransactions)}
          isEmptyFutureEvents={isEmptyFutureEvents}
          isBottomSheet={isBottomSheet}
          onFilter={this.onFilterMobile}
          filter={balanceHistoryParams}
          changeValuesVisibility={this.changeValuesVisibility}
          hideValues={hideValues}
          filterButtonFill={filterButtonFill}
          resetStates={this.resetStates}
          loading={this.state.loading}
          getPendingOperationsNumber={this.getPendingOperationsNumber}
          printContext={printContext}
          getBank={this.getBank}
          userInfo={userInfo}
          printScreen={this.printScreen}
        />
      );
    };

    const displayContent = () => {
      let accountInformation = [
        {
          label: translate("STATEMENTS_CORPORATE_NAME"),
          content: currentAccount.name
        },
        {
          label: translate("STATEMENTS_CNPJ"),
          content: currentAccount.document,
          key: "cnpj"
        },
        {
          label: translate("STATEMENTS_ACCOUNT_INFO"),
          content: currentAccount.accountNumber
        }
      ];

      let accountAvalilableBalanceInfo = {
        label: `${translate("CURRENT_BALANCE")}:`,
        key: "currentBalance",
        content: (
          <HideValueWrapper>
            <HideableValue
              blocked={blocked}
              hide={hideValues}
              currency="R$"
              value={currentAccount?.availableBalance}
              styles={`font-size: ${remFontSize(
                24
              )}; font-family: Lato Bold; margin-right: ${rem(15)}`}
            />
            <IconView>
              {hideValues ? (
                <Icon
                  type="View"
                  width={25}
                  height={25}
                  cursorPointer
                  onClick={this.changeValuesVisibility}
                  color={neutral200}
                />
              ) : (
                <Icon
                  type="HideView"
                  width={25}
                  height={25}
                  cursorPointer
                  onClick={this.changeValuesVisibility}
                  color={neutral200}
                />
              )}
            </IconView>
          </HideValueWrapper>
        )
      };

      return (
        <Container>
          <WrapperOffShore>
            <OffshoreSelect userInfo={userInfo} fullWidth={true} />
          </WrapperOffShore>
          {filteredAccounts.length > 1 && (
            <ChangeModalButtonWrapper>
              <StyledButton
                smallBlue
                onClick={() => this.openChangeAccountModal(accountInformation)}
              >
                {translate("STATEMENTS_SWITCH_ACCOUNTS_BUTTON")}
              </StyledButton>
            </ChangeModalButtonWrapper>
          )}
          <Balance external>
            <AccountInfoWrapper>
              <AccountInformation>
                {accountInformation.map((item, index) => {
                  return (
                    <AccountInfoItem
                      key={index}
                      id={`AccountInfoItem_${index}`}
                      className="AccountInfoItem"
                    >
                      <AccountInfoLabel>{item.label}</AccountInfoLabel>
                      {item.key === "currentBalance" ? (
                        item.content
                      ) : (
                        <AccountInfoContent>
                          {item.key === "cnpj"
                            ? formatCNPJ(item.content)
                            : item.content}
                        </AccountInfoContent>
                      )}
                    </AccountInfoItem>
                  );
                })}
              </AccountInformation>
            </AccountInfoWrapper>
            <AccountInfoItemValue>
              <AccountInfoLabel>
                {accountAvalilableBalanceInfo.label}
              </AccountInfoLabel>

              {accountAvalilableBalanceInfo.content}
            </AccountInfoItemValue>
          </Balance>
          <StatementsFilter
            onFilter={this.onFilter}
            filter={balanceHistoryParams}
          />

          {!isEmptyFutureEvents && (
            <WrapperPendingOperations>
              <PendingOperations
                dataTest="futureTransactions"
                boxTitle={`${translate(
                  "YOU_HAVE"
                )} ${this.getPendingOperationsNumber(
                  this.filterBySettledOperation(
                    this.state.futureTransactions,
                    false
                  )
                )} ${translate("FUTURE_TRANSACTIONS")}`}
                mode={"desktop"}
                bottomSheetTitle={`${translate("FUTURE_TRANSACTIONS_TITLE")}`}
                printContext={printContext}
              >
                <StatementsCards
                  dataTest="cardFutureTransactions"
                  withDayBalance={false}
                  list={this.sortedArray(this.state.futureTransactions)}
                />
              </PendingOperations>
            </WrapperPendingOperations>
          )}
          {!printContext && (
            <ButtonsWrapper>
              <PageTitle>{translate("LAST_ENTRANCES")}</PageTitle>
              <div>
                {showCNAB && (
                  <Button
                    type="outline"
                    spacing={{
                      top: "none",
                      bottom: "none",
                      right: "l",
                      left: "none"
                    }}
                    withIcon={{ name: "Download", position: "left" }}
                    loading={loadingCnab}
                    dataTest="downloadCnabButton"
                    onClick={() => this.downloadCnab()}
                    disabled={isEmptyEvents}
                  >
                    {translate("DOWNLOAD_CNAB")}
                  </Button>
                )}

                <Button
                  type="primary"
                  spacing={{
                    top: "none",
                    bottom: "none",
                    right: "none",
                    left: "none"
                  }}
                  withIcon={{ name: "Download", position: "left" }}
                  dataTest="downloadPdfButton"
                  onClick={() => this.printScreen()}
                  disabled={isEmptyEvents}
                >
                  {translate("DOWNLOAD_PDF")}
                </Button>
              </div>
            </ButtonsWrapper>
          )}

          {blocked && <BlockedData />}
          {isEmptyEvents && (
            <DefaultWrapper>
              <DefaultContent
                data-test="Empty_Statements"
                Icon={() => <Icon type="NoResults" color={black30} />}
                primaryText={translate("STATEMENTS_NO_RESULTS")}
                secondaryTexts={[translate("STATEMENTS_NO_RESULTS_PERIOD")]}
              />
            </DefaultWrapper>
          )}
          {!isEmptyEvents &&
            balanceAndEventsHistory.map((item, index) => {
              count = count + 4 + item.events.length;
              let breakPageBefore = false;
              if (count > 20) {
                breakPageBefore = true;
                count = 0 + 4 + item.events.length;
              }
              if (index === balanceAndEventsHistory.length - 1) {
                count = 4;
              }

              return (
                item.events !== null &&
                item.events.length !== 0 && (
                  <Fragment key={index}>
                    <CardWrapper
                      breakPageBefore={breakPageBefore}
                      className="print"
                      index={index}
                    >
                      <Card
                        title={moment
                          .utc(item.date, DEFAULT_API_RESPONSE_DATE_FORMAT)
                          .format(getDateFieldPlaceholderByLocale())}
                        icon="Calendar"
                        styles={`margin-bottom: ${rem(16)}`}
                        titleColor={darkGreen}
                      >
                        <ContentCard data-test="cardStatement">
                          <Events>
                            <Line>
                              <EmptyItem />
                              <DescriptionTextItem>
                                {translate("DESCRIPTION")}
                              </DescriptionTextItem>
                              <AmountTextItem>
                                {`${translate("AMOUNT")} ${currency}`}
                              </AmountTextItem>
                            </Line>
                            {item.events.map((item, i) => (
                              <Line
                                key={i}
                                className="transferLine"
                                clickable
                                onClick={() => this.triggerModal(item)}
                              >
                                <EmptyItem />
                                <DescriptionItem data-test="cardTransactionType">
                                  {item.description}

                                  {item.counterParty &&
                                  item.counterParty.partyName.length ? (
                                    <CounterPart>
                                      {item.counterParty.partyName.toUpperCase()}
                                    </CounterPart>
                                  ) : (
                                    <CounterPart>---</CounterPart>
                                  )}
                                </DescriptionItem>
                                <HideableValue
                                  hide={hideValues}
                                  value={item.amount}
                                  colorized
                                />
                              </Line>
                            ))}
                          </Events>
                          <Balance>
                            <EmptyItem />
                            <Status initial>
                              <InnerLabel expanded>
                                {translate("TOTAL")}
                              </InnerLabel>
                            </Status>
                            {item.blockedAmount > 0 && (
                              <Status total>
                                <InfoWrapper showValue={!hideValues}>
                                  <InnerLabel>{`${translate(
                                    "BLOCKED_BALANCE"
                                  )} ${currency}`}</InnerLabel>
                                  <HideableValue
                                    hide={hideValues}
                                    value={item.blockedAmount}
                                    styles={`font-size: ${remFontSize(
                                      14
                                    )}; font-family: Lato; color: #4e768f`}
                                  />
                                </InfoWrapper>
                              </Status>
                            )}
                            <Status total>
                              <InfoWrapper showValue={!hideValues}>
                                <InnerLabel>
                                  {`${translate(
                                    "DAY_FINAL_AVAILABLE_BALANCE"
                                  )} ${currency}`}
                                </InnerLabel>
                                <HideableValue
                                  hide={hideValues}
                                  value={item.availableAmount}
                                  styles={`font-size: ${remFontSize(
                                    14
                                  )}; font-family: Lato; color: #4e768f`}
                                />
                              </InfoWrapper>
                            </Status>
                          </Balance>
                        </ContentCard>
                      </Card>
                    </CardWrapper>
                    {isInternetExplorer() ||
                      isMsBrowser() ||
                      (isMsEdge() && <div key={index} />)}
                  </Fragment>
                )
              );
            })}
          {!isEmptyEvents && (
            <PaginaTionWrapper>
              <Pagination
                onChangePage={this.changePage}
                initialPage="1"
                activePage={balanceHistoryParams.activePage}
                pageSize={balanceHistoryParams.limit}
                pageRange={DEFAULT_PAGEABLE_RANGE}
                pageTotal={eventsTotalCount}
              />
            </PaginaTionWrapper>
          )}
        </Container>
      );
    };

    const displayPrintContent = () => {
      return (
        <PrintView
          balanceHistoryParams={this.state.balanceHistoryParams}
          balanceAndEventsHistory={this.props.balanceAndEventsHistory}
          isEmptyEvents={isEmptyEvents}
          currentAccount={this.state.currentAccount}
          printCurrency={printCurrency}
        />
      );
    };

    return loading ? (
      <DefaultShimmerLoading repeat={2} innerRepeat={3} />
    ) : (
      <ErrorBoundary errorStatus={this.props.error}>
        {selectView()}
      </ErrorBoundary>
    );
  }
}

export default Statements;

Statements.defaultProps = {
  loading: false
};

Statements.propTypes = {
  loading: bool,
  getBalanceAndEventsHistory: func.isRequired,
  getAccounts: func.isRequired
};
