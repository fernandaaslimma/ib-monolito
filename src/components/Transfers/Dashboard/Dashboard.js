import React, { Component, Fragment } from "react";
import moment from "moment";
import {
  string,
  shape,
  func,
  bool,
  number,
  oneOfType,
  array
} from "prop-types";
import { AlertMessage } from "react-bocombbm-components";
import ModalDeleteFavoredAccount from "./ModalDeleteFavoredAccount";
import Icon from "../../../components/common/Icon";
import Checkbox from "../../../components/common/Checkbox2";
import {
  formatNumberWithoutCurrency,
  unFormatNumber,
  formatCPF,
  formatCNPJ
} from "../../../utils/formatNumber";
import { Container } from "../../../styles/grid";
import {
  CREATE_APPROVE_EFT,
  CREATE_EFT,
  PENDENCIES,
  WIRETRANSFER_SERVICE,
  PRIVATEACCOUNT,
  TRANSACTIONALACCOUNT
} from "../../../utils/constants";
import { toCurrency, checkOnKeyPress } from "../../../utils/currency";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import { rem } from "../../../styles/tools";

import {
  DashboardWrapper,
  Fieldset,
  FieldsetTitle,
  TitleWrapper,
  Content,
  FloatingText,
  AvailableBalBox,
  Button,
  Title,
  Currency,
  ButtonWrapper,
  ShowHideWrapper,
  IconWrapper,
  Row,
  WrapperFavoredData,
  TitleFavoredData,
  WrapperCheckbox,
  ContainerList,
  CardTitle,
  DropdownWrapper,
  ListHead,
  ListBody,
  ListHeadTitle,
  WrapperList,
  ListBodyTitle,
  TextBold,
  WrapperDropdown,
  WrapperDefaultContent,
  InputHelperText,
  InputHelperTextWrapper
} from "./styles";
import Card from "../../common/Card";
import Input from "../../common/Input";
import Dropdown from "../../common/Dropdown";
import Dropdown2 from "../../common/Dropdown2";
import { darkGreen } from "../../../styles/settings";
import {
  translate,
  getDateFieldPlaceholderByLocale
} from "../../../utils/i18n";
import {
  checkDate,
  checkValue,
  checkBank,
  checkAgency,
  checkAccount,
  checkOriginAccount,
  hasAvailableBalance,
  checkVerifyDigit,
  isToday
} from "../../../utils/validations/EFT";
import { MODAL_TYPES } from "../../common/Modal/Modal";
import DashboardEFTS from "../Pendencies";

import EFTConfirmation from "../../common/EFTConfirmation";
import EFTSchedule from "../../common/EFTSchedule";
import EFTUnavailable from "../../common/EFTUnavailable";
import Hide from "../../common/Hide";
import NotSupportMobile from "../../common/NotSupportMobile";
import Tabs from "../../common/Tabs";

import DashboardFilters from "./DashboardFilters";
import CanAccess from "../../common/CanAccess";
import { checkIfHasAccess } from "../../common/CanAccess/CanAccess";
import NewTransferShimmerLoading from "./NewTransferShimmerLoading";
import Autocomplete from "../../common/Autocomplete";
import ClickWrapper from "../../../utils/clickWrapper";
import { isPtBR } from "../../../utils/i18n/i18n";
import { unformatDocuments } from "../../../utils/unformat";
import { checkValidCnpj } from "../../../utils/validations/input";
import ShimmerLoading from "../../common/ShimmerLoading";
import DefaultContent from "../../common/DefaultContent";

export const isDisabled = (
  isValidDate,
  isValidValue,
  isValidBank,
  isValidAgency,
  isValidAccount,
  isValidOriginAccount,
  isValidDigit,
  inputValue,
  isValidCnpj
) => {
  return !(
    isValidDate &&
    isValidValue &&
    isValidBank &&
    isValidAgency &&
    isValidAccount &&
    isValidOriginAccount &&
    isValidDigit &&
    !inputValue &&
    isValidCnpj
  );
};

export const isDisabledFavoredData = (
  isValidDate,
  isValidValue,
  isValidName,
  isValidAccount,
  inputValue,
  selectFavored,
  dataFavored
) => {
  return !(
    isValidDate &&
    isValidValue &&
    isValidName &&
    isValidAccount &&
    !inputValue &&
    selectFavored !== null &&
    dataFavored !== null
  );
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmptyOccurrencies: true,
      isCreateTransferEnabled: false,
      currentDashboardGridTitle: translate(PENDENCIES.toUpperCase()),
      dateInputFocused: false,
      filter: {
        type: PENDENCIES,
        range: 15
      },
      isNewAccount: true,
      favoredNameList: [],
      selectFavored: null,
      favoredAccountsList: [],
      dataFavored: {},
      saveAccount: false,
      msgErrorCnpjHeadOfficeBranch: false,
      valueInputAccountDestFavored: null,
      valueInputNameFavored: null,
      selectedTab: 0,
      isEmptyListFavored: false,
      isFocusedHelperInputText: false
    };

    this.setSelectedTab = this.setSelectedTab.bind(this);
    this.handleNewAccount = this.handleNewAccount.bind(this);
    this.displayConfirmModal = this.displayConfirmModal.bind(this);
    this.openDeleteFavoredModal = this.openDeleteFavoredModal.bind(this);
    this.getToastrMessage = this.getToastrMessage.bind(this);
    this.getCurrentAccount = this.getCurrentAccount.bind(this);
    this.toggleEftCreation = this.toggleEftCreation.bind(this);
    this.toggleAndGetDate = this.toggleAndGetDate.bind(this);
    this.closeEftCreation = this.closeEftCreation.bind(this);
    this.loadTransfers = this.loadTransfers.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.checkAvailableDate = this.checkAvailableDate.bind(this);
    this.postConfirmation = this.postConfirmation.bind(this);
    this.isEFTCreatorOrCreatorApprover = this.isEFTCreatorOrCreatorApprover.bind(
      this
    );
    this.handleChangeOriginAccount = this.handleChangeOriginAccount.bind(this);
    this.handleChangeInputNameFavored = this.handleChangeInputNameFavored.bind(
      this
    );
    this.handleChangeInputAccountDestFavored = this.handleChangeInputAccountDestFavored.bind(
      this
    );
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.getFixedInputCnpj = this.getFixedInputCnpj.bind(this);
    this.getListFavoredAccounts = this.getListFavoredAccounts.bind(this);
    this.inputRef = React.createRef();
    this.dateInput;
  }

  handleNewAccount() {
    const { favoredAccounts } = this.props;
    const { isNewAccount } = this.state;

    !isNewAccount &&
      (this.clearFavoredForm(),
        this.handleChangeFavoredNameAutocomplete(favoredAccounts));

    this.setState({
      isNewAccount: isNewAccount ? false : true
    });

    this.getApprovers(isNewAccount ? false : true);
  }

  isEFTCreatorOrCreatorApprover() {
    return checkIfHasAccess(
      this.props.userInfo,
      [CREATE_EFT, CREATE_APPROVE_EFT],
      true
    );
  }

  async componentWillMount() {
    this.props.resetSignLoading();
  }

  async componentWillUnmount() {
    await this.props.resetFields();
  }

  async loadTransfers() {
    await this.props.getTransfers(this.state.filter);
    this.setState({
      isEmptyOccurrencies: this.props.pendencies.content.length === 0
    });
  }

  async componentDidMount() {
    this.loadTransfers();
  }

  setSelectedTab(value) {
    this.closeEftCreation();
    this.setState({ selectedTab: value });

    this.state.selectedTab === 0 &&
      (this.toggleEftCreation(), this.setState({ isEmptyListFavored: false }));
  }

  checkAvailableDate() {
    const { transferData, availableDateRanges, serverTime } = this.props;
    let shouldDisplayModal = true;
    if (isToday(transferData.date, serverTime)) {
      const now = serverTime;
      const maxEndTime = Math.max(
        ...availableDateRanges.map(x => x.endTime),
        0
      );
      const minute = 60000;
      if (now <= maxEndTime - minute) {
        shouldDisplayModal = false;
      }
    } else {
      if (availableDateRanges.length > 0) {
        shouldDisplayModal = false;
      }
    }

    if (shouldDisplayModal) {
      this.displayUnavailableEFTModal();
    }

    return !shouldDisplayModal;
  }

  async displayUnavailableEFTModal() {
    const {
      openModal,
      getNextAvailableDate,
      availableDateRanges,
      serverTime
    } = this.props;
    await getNextAvailableDate(WIRETRANSFER_SERVICE, serverTime);
    openModal({
      type: MODAL_TYPES.CUSTOM,
      width: "484px",
      overwriteDefaultButtons: true,
      children: () => (
        <EFTUnavailable
          dateInput={this.dateInput}
          availableDateRanges={availableDateRanges}
        />
      )
    });
  }

  async getListFavoredAccounts(accountId) {
    const { getFavoredAccounts } = this.props;

    await getFavoredAccounts(accountId);
    const { favoredAccounts } = this.props;

    favoredAccounts.length === 0
      ? this.setState({ isEmptyListFavored: true })
      : (this.handleChangeFavoredNameAutocomplete(favoredAccounts),
        this.setState({
          isNewAccount: false,
          isEmptyListFavored: false
        }));
  }

  openDeleteFavoredModal(favored, account) {
    const {
      openModal,
      originAccount,
      deleteFavoredAccount,
      openToastr,
      closeModal
    } = this.props;

    const onDelete = async (recipientId, recipientAccountId) => {
      try {
        await deleteFavoredAccount(
          originAccount.id,
          recipientId,
          recipientAccountId
        );
        closeModal();
        this.getListFavoredAccounts(originAccount.id);
        openToastr({
          text: translate("TED_TOAST_MSG_SUCCESS_ACCOUNT_DELETED"),
          isBelow: true,
          isTop: false,
          timeout: 3000
        });
      } catch (error) {
        closeModal();
        openToastr({
          text: translate("TED_TOAST_MSG_ERROR_ACCOUNT_DELETED"),
          isBelow: true,
          isTop: false,
          timeout: 3000,
          error: true
        });
        return { error };
      }
    };

    openModal({
      type: MODAL_TYPES.CUSTOM,
      width: "541px",
      overwriteDefaultButtons: true,
      message: translate("TED_DELETE_ACCOUNT"),
      children: () => (
        <ModalDeleteFavoredAccount
          onDelete={onDelete}
          favoredList={{
            id: favored.id,
            name: favored.name,
            document: favored.document,
            account: account
          }}
        />
      )
    });
  }

  displayConfirmModal() {
    const {
      openModal,
      transferData,
      favoredData,
      originAccount,
      approvers,
      quantity,
      serverTime
    } = this.props;

    const { isNewAccount, dataFavored } = this.state;

    const message = `${translate("EFT_TRANSFER_AMOUNT")} ${translate(
      "CURRENCY_UNIT"
    )} ${transferData.value}`;

    const onConfirm = async saveAccount => {
      this.setState({
        saveAccount: saveAccount
      });
      hasAvailableBalance(originAccount, transferData, this.props.accounts)
        ? await this.handleConfirmModal()
        : isToday(transferData.date, serverTime)
          ? this.displayScheduleModal()
          : await this.handleConfirmModal();
    };

    openModal({
      type: MODAL_TYPES.CUSTOM,
      message: message,
      overwriteDefaultButtons: true,
      children: () => (
        <EFTConfirmation
          transferData={transferData}
          favoredData={isNewAccount ? favoredData : dataFavored}
          originAccount={originAccount}
          approvers={approvers.approvers}
          quantity={quantity}
          onConfirm={onConfirm}
          currentAccount={this.getCurrentAccount()}
          isNewAccount={isNewAccount}
        />
      )
    });
  }

  displayScheduleModal() {
    const { openModal } = this.props;
    const onConfirm = async () => {
      await this.handleConfirmModal();
    };

    setTimeout(() => {
      openModal({
        type: MODAL_TYPES.CUSTOM,
        width: "25rem",
        overwriteDefaultButtons: true,
        children: () => <EFTSchedule onConfirm={onConfirm} />
      });
    }, 100);
  }

  openToast() {
    const { transferData, openToastr, originAccount, serverTime } = this.props;

    openToastr({
      text: this.getToastrMessage(),
      isBelow: true,
      warning:
        !isToday(transferData.date, serverTime) ||
        !hasAvailableBalance(originAccount, transferData, this.props.accounts),
      isTop: false,
      timeout: 3000
    });
  }

  async postConfirmation() {
    const {
      resetFields,
      nextAvailableDate,
      setAfterCreationLoad,
      approvers,
      userInfo
    } = this.props;

    let isSelfAprover = false;

    approvers.approvers.map(selfApprover => {
      isSelfAprover
        ? null
        : selfApprover.uid === userInfo.document && (isSelfAprover = true);
    });
    const isCreateAprover = userInfo.roles.includes(CREATE_APPROVE_EFT);

    !checkIfHasAccess(userInfo, [CREATE_APPROVE_EFT]) && this.openToast();

    isCreateAprover && isSelfAprover === false
      ? this.openToast()
      : await setAfterCreationLoad();
    await this.loadTransfers();
    await resetFields(nextAvailableDate);
  }

  async handleConfirmModal() {
    const {
      transferData,
      favoredData,
      originAccount,
      createEFT,
      closeModal
    } = this.props;

    await createEFT(
      this.state.isNewAccount ? favoredData : this.state.dataFavored,
      transferData,
      originAccount,
      null,
      this.getCurrentAccount(),
      this.state.isNewAccount
    );
    closeModal && (await closeModal());
    this.postConfirmation();
    this.clearFavoredForm();
    this.setState({
      isNewAccount: true
    });
    this.closeEftCreation();
  }

  async toggleAndGetDate() {
    const { serverTime } = this.props;
    await this.props.getAvailableDateRanges(WIRETRANSFER_SERVICE);
    this.setState({
      isCreateTransferEnabled: true
    });

    this.props.handleUserInputTranferDataDate(
      moment.utc(serverTime).format(getDateFieldPlaceholderByLocale())
    );
    this.toggleEftCreation();
    this.props.getAvailableDateRanges(WIRETRANSFER_SERVICE);
  }

  getToastrMessage() {
    const { originAccount, transferData, serverTime } = this.props;

    return isToday(transferData.date, serverTime) &&
      hasAvailableBalance(originAccount, transferData, this.props.accounts)
      ? translate("TRANSFER_CREATED_WITH_SUCCESS")
      : translate("TRANSFER_SCHEDULED_WITH_SUCCESS");
  }

  getCurrentAccount() {
    const { accounts, originAccount } = this.props;
    let accountFiltered =
      accounts !== undefined && originAccount.number !== ""
        ? accounts.find(c => c.accountNumber === originAccount.number)
        : {};
    return accountFiltered;
  }

  async toggleEftCreation() {
    const {
      getAccounts,
      handleUserInputOriginAccount,
      getBanks,
      handleUserSelectedAccount,
      accounts
    } = this.props;
    const currentAccount = this.getCurrentAccount();

    let accountGroups = [PRIVATEACCOUNT, TRANSACTIONALACCOUNT];

    await getAccounts(null, false, accountGroups);
    await getBanks();

    if (this.props.accounts && this.props.accounts.length === 1) {
      handleUserInputOriginAccount({
        target: { name: "number", value: this.props.accounts[0].accountNumber }
      });
      handleUserSelectedAccount(this.props.accounts[0]);
      this.getListFavoredAccounts(this.props.accounts[0].account);
    }

    this.setState({
      hasData: true
    });

    accounts && handleUserSelectedAccount(currentAccount);
  }

  async closeEftCreation() {
    await this.props.resetFields();
    this.clearFavoredForm();
    this.setState({
      hasData: false,
      isCreateTransferEnabled: false,
      isNewAccount: true
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps && this.props.error != prevProps.error) {
      this.closeEftCreation();
    }

    const { filter, isCreateTransferEnabled } = this.state;
    const { availableDateRanges } = this.props;

    if (prevState.filter !== filter) {
      this.loadTransfers();
    }

    if (
      prevProps.availableDateRanges !== availableDateRanges &&
      isCreateTransferEnabled
    ) {
      this.checkAvailableDate();
    }
  }

  onFilter(filter) {
    this.setState({
      currentDashboardGridTitle: translate(filter["type"].toUpperCase()),
      filter
    });
  }

  async handleChangeOriginAccount(e) {
    const { isNewAccount } = this.state;
    const {
      handleUserInputOriginAccount,
      getApprovers,
      handleUserSelectedAccount
    } = this.props;

    this.clearFavoredForm();
    await handleUserInputOriginAccount(e);
    const { originAccount, transferData } = this.props;

    this.getListFavoredAccounts(originAccount.id);

    const currentAccount = this.getCurrentAccount();

    this.setState({
      msgErrorCnpjHeadOfficeBranch: false
    });

    currentAccount && handleUserSelectedAccount(currentAccount);

    if (
      originAccount.number &&
      transferData.value &&
      unFormatNumber(transferData.value) != 0
    ) {
      await getApprovers({
        document: currentAccount.document,
        amount: unFormatNumber(transferData.value),
        newRecipient: isNewAccount
      });
    }
  }

  clearFavoredForm() {
    this.setState({
      favoredNameList: [],
      selectFavored: null,
      dataFavored: null,
      favoredAccountsList: [],
      isNewAccount: true
    });
  }

  handleChangeFavoredNameAutocomplete(favoredAccounts) {
    const favoredAutoComplete = [];

    favoredAccounts.map(c => {
      let document =
        c.document.length > 11 ? formatCNPJ(c.document) : formatCPF(c.document);

      let favoredObj = {
        name: c.name + " (" + document + ")",
        favored: c.name,
        document: c.document,
        accounts: c.accounts
      };
      favoredAutoComplete.push(favoredObj);
    });

    this.setState({
      favoredNameList: favoredAutoComplete
    });
  }

  handleChangeInputNameFavored(e) {
    const { value } = e.target;
    const favored = this.state.favoredNameList.find(c => c.name === value);
    const accounts = [];

    this.setState({
      valueInputAccountDestFavored: null,
      valueInputNameFavored: value
    });

    value !== ""
      ? (favored.accounts.map(e => {
        let obj = {
          ...e,
          document: favored.document,
          name:
            e.bankName +
            " (" +
            e.bankCode +
            ") | Agência: " +
            e.branch +
            " | " +
            e.type +
            ": " +
            e.number +
            "-" +
            e.verifyingDigit,
          selected: false
        };

        accounts.push(obj);
      }),
        this.setState({
          favoredAccountsList: accounts,
          selectFavored: {
            ...this.state,
            name: favored.name,
            document: favored.document
          }
        }))
      : this.setState({
        favoredAccountsList: [],
        selectFavored: null,
        dataFavored: null
      });
  }

  handleChangeInputAccountDestFavored(e) {
    const { value } = e.target;
    const account = this.state.favoredAccountsList.find(c => c.name === value);

    value !== ""
      ? this.setState({
        valueInputAccountDestFavored: value,
        dataFavored: {
          account: account.number,
          agency: account.branch,
          bank: account.bankName,
          bankCode: account.bankCode,
          bankISPB: account.bankIspb,
          name: account.bankName,
          verifyDigit: account.verifyingDigit,
          CNPJ: account.document,
          error: null
        }
      })
      : this.setState({
        dataFavored: null
      });
  }

  async handleChangeValue(e) {
    const { handleUserInputTransferCurrency } = this.props;
    const valueAsCurrency = toCurrency(
      e.target.value,
      isPtBR() ? "." : ",",
      isPtBR() ? "," : "."
    );

    await handleUserInputTransferCurrency(valueAsCurrency);
  }

  async getApprovers(isNewAccount) {
    const { originAccount, transferData, getApprovers } = this.props;
    const currentAccount = this.getCurrentAccount();

    if (
      originAccount.number &&
      transferData.value &&
      unFormatNumber(transferData.value) != 0
    ) {
      await getApprovers({
        document: currentAccount.document,
        amount: unFormatNumber(transferData.value),
        newRecipient: isNewAccount
      });
    }
  }

  getFixedInputCnpj() {
    const currentAccount = this.getCurrentAccount();
    return (
      currentAccount.document &&
      currentAccount.document.substring(0, 2) +
      "." +
      currentAccount.document.substring(2, 5) +
      "." +
      currentAccount.document.substring(5, 8) +
      "/"
    );
  }

  checkCnpjWithHeadOfficeAndBranch(value) {
    const { handleUserInputCnpj } = this.props;
    const cnpj = unformatDocuments(this.getFixedInputCnpj() + value);

    checkValidCnpj(cnpj) ? handleUserInputCnpj(cnpj) : handleUserInputCnpj("");

    this.setState({
      msgErrorCnpjHeadOfficeBranch: checkValidCnpj(cnpj) ? false : true
    });
  }

  render() {
    const {
      handleUserInputTranferData,
      handleUserInputFavoredData,
      handleUserInputFavoredDataBank,
      transferData,
      favoredData,
      originAccount,
      accounts,
      banksList,
      getAvailableDateRanges,
      error,
      serverTime,
      favoredAccounts,
      loading
    } = this.props;

    const {
      isEmptyOccurrencies,
      isCreateTransferEnabled,
      filter,
      hasData,
      isNewAccount,
      selectFavored,
      favoredAccountsList,
      favoredNameList,
      saveAccount,
      msgErrorCnpjHeadOfficeBranch,
      valueInputAccountDestFavored,
      valueInputNameFavored,
      isEmptyListFavored,
      isFocusedHelperInputText
    } = this.state;

    const currentAccount = this.getCurrentAccount();

    const myTransfersView = () => {
      return (
        <Fragment>
          {isCreateTransferEnabled && (
            <CanAccess roles={[CREATE_EFT, CREATE_APPROVE_EFT]} anyRole>
              <ShowHideWrapper
                data-test="newTransferBox"
                open={isCreateTransferEnabled}
              >
                {!hasData && <NewTransferShimmerLoading />}
                {hasData && (
                  <Content>
                    <Card
                      BigTitle={translate("NEW_TRANSFER")}
                      titleColor={darkGreen}
                    >
                      <IconWrapper>
                        <Icon
                          type="Close"
                          width="25"
                          height="25"
                          onClick={() => this.closeEftCreation()}
                          dataTest="Sair"
                          cursorPointer
                        />
                      </IconWrapper>
                      <form noValidate>
                        <Fieldset width={23}>
                          <TitleWrapper>
                            <FieldsetTitle>
                              {translate("ORIGIN_ACCOUNT")}
                            </FieldsetTitle>
                          </TitleWrapper>
                          <Dropdown
                            onChange={e => this.handleChangeOriginAccount(e)}
                            name="number"
                            list={accounts}
                            valid={() =>
                              checkOriginAccount(originAccount.number)
                            }
                            value={originAccount.number}
                            label={translate("NUMBER").toUpperCase()}
                            dataTest="originAccount"
                            tinyLabels
                            accountNumber
                            height={48}
                          />
                          <AvailableBalBox>
                            <TitleWrapper>
                              <FieldsetTitle>
                                {translate("AVAILABLE_BALANCE")}
                              </FieldsetTitle>
                            </TitleWrapper>
                            <FloatingText data-test="originAccountBalance">
                              {originAccount.number && (
                                <Currency>R$&nbsp;&nbsp;</Currency>
                              )}
                              {originAccount.number &&
                                formatNumberWithoutCurrency(
                                  this.props.accounts.find(
                                    c =>
                                      c.accountNumber === originAccount.number
                                  ).availableBalance,
                                  {
                                    digits: 2
                                  }
                                )}
                            </FloatingText>
                          </AvailableBalBox>
                        </Fieldset>
                        <Fieldset width={22}>
                          <TitleWrapper>
                            <FieldsetTitle>
                              {translate("TRANSFER_DATA")}
                            </FieldsetTitle>
                          </TitleWrapper>
                          <Input
                            onChange={handleUserInputTranferData}
                            type="text"
                            name="date"
                            valid={() =>
                              checkDate(transferData.date, false, serverTime)
                            }
                            value={transferData.date}
                            onBlur={e => {
                              this.dateInput = e.currentTarget;
                              if (
                                checkDate(
                                  transferData.date,
                                  false,
                                  serverTime
                                ) &&
                                !this.props.modalSettings
                              ) {
                                getAvailableDateRanges(WIRETRANSFER_SERVICE);
                              }
                              this.setState({
                                dateInputFocused: false
                              });
                            }}
                            onFocus={() =>
                              this.setState({ dateInputFocused: true })
                            }
                            label={translate("DATE").toUpperCase()}
                            dataTest="transferDate"
                            maxLength={11}
                            tinyLabels
                            maskType="datetime"
                            innerRef={this.inputRef}
                            refType={this.inputRef}
                          />
                          <Input
                            onKeyPress={e => checkOnKeyPress(e)}
                            onChange={e => this.handleChangeValue(e)}
                            onBlur={() => {
                              transferData.value !== "0,00" &&
                                this.getApprovers(isNewAccount);
                            }}
                            type="text"
                            name="value"
                            prefix={"R$"}
                            maxLength={14}
                            valid={() => checkValue(transferData.value)}
                            value={transferData.value}
                            label={translate("VALUE").toUpperCase()}
                            dataTest="transferAmount"
                            tinyLabels
                            innerRef={this.inputRef}
                            refType={this.inputRef}
                            textAlign="right"
                          />
                        </Fieldset>
                        <Fieldset width={55} withRows>
                          <WrapperFavoredData>
                            <TitleWrapper>
                              <FieldsetTitle>
                                {translate("FAVORED_DATA")}
                              </FieldsetTitle>
                            </TitleWrapper>

                            <TitleFavoredData>
                              {translate("TED_NEW_BENEFICIARY_AND_ACCOUNT")}
                            </TitleFavoredData>

                            <WrapperCheckbox>
                              <Checkbox
                                name="switchButton"
                                dataTest="switchNewAccount"
                                checked={isNewAccount}
                                onChange={this.handleNewAccount}
                                disabled={
                                  originAccount.number === "" ||
                                    favoredAccounts.length === 0
                                    ? true
                                    : false
                                }
                              />
                            </WrapperCheckbox>
                          </WrapperFavoredData>
                          {isNewAccount && currentAccount ? (
                            <Fragment>
                              <Row>
                                <Input
                                  type="text"
                                  name="nameFavored"
                                  dataTest="recipientName"
                                  value={currentAccount.name}
                                  label={translate("FAVORED").toUpperCase()}
                                  msgError={translate(
                                    "TED_MSG_ERROR_FAVORED_NAME"
                                  )}
                                  maxLength="45"
                                  onChange={handleUserInputFavoredData}
                                  valid={true}
                                  disabled
                                  tinyLabels
                                  width={60}
                                />
                                <Input
                                  type="text"
                                  name="cnpj"
                                  dataTest="recipientCnpj"
                                  value={favoredData.cnpjHeadOfficeBranch}
                                  label={translate("TED_CNPJ").toUpperCase()}
                                  onChange={e => {
                                    handleUserInputFavoredData(e),
                                      this.checkCnpjWithHeadOfficeAndBranch(
                                        e.target.value
                                      );
                                  }}
                                  tinyLabels
                                  width={40}
                                  maskType="cnpjSubscriptionFixed"
                                  valid={() => !msgErrorCnpjHeadOfficeBranch}
                                  msgError={translate(
                                    "TED_MSG_ERROR_CNPJ_HEAD_OFFICE_OR_BRANCH"
                                  )}
                                  fixedValue={this.getFixedInputCnpj()}
                                  spaceFixedInput="83px"
                                />
                              </Row>
                              <Row>
                                <Autocomplete
                                  list={banksList}
                                  change={handleUserInputFavoredDataBank}
                                  value={favoredData.name}
                                  fieldToFilter="name"
                                  noMatchMessage={translate("NO_MATCH_RESULTS")}
                                  styles={`margin: ${rem(9)} ${rem(6)} ${rem(
                                    9
                                  )} 0; width: 50%`}
                                  label={translate("BANK").toUpperCase()}
                                  dataTest="recipientBank"
                                />

                                <Input
                                  onChange={handleUserInputFavoredData}
                                  maxLength="4"
                                  type="text"
                                  name="agency"
                                  valid={() => checkAgency(favoredData.agency)}
                                  value={favoredData.agency}
                                  label={translate("TED_AGENCY_WITHOUT_DIGIT").toUpperCase()}
                                  dataTest="bankBranch"
                                  tinyLabels
                                  width={20}
                                />

                                <Input
                                  onChange={handleUserInputFavoredData}
                                  maxLength="11"
                                  type="text"
                                  name="account"
                                  valid={() =>
                                    checkAccount(favoredData.account)
                                  }
                                  value={favoredData.account}
                                  label={translate("ACCOUNT").toUpperCase()}
                                  dataTest="recipientBankAccount"
                                  tinyLabels
                                  width={23}
                                />
                                <Input
                                  onChange={handleUserInputFavoredData}
                                  maxLength="1"
                                  type="text"
                                  name="verifyDigit"
                                  valid={() =>
                                    checkVerifyDigit(favoredData.verifyDigit)
                                  }
                                  value={favoredData.verifyDigit}
                                  label={translate(
                                    "VERIFY_DIGIT"
                                  ).toUpperCase()}
                                  tinyLabels
                                  width={7}
                                  onFocus={() => this.setState({
                                    isFocusedHelperInputText: true
                                  })}
                                  onBlur={() => this.setState({
                                    isFocusedHelperInputText: false
                                  })}
                                />
                              </Row>
                              <InputHelperTextWrapper>
                                {isFocusedHelperInputText &&
                                  <InputHelperText>
                                    {translate("TED_VERIFY_NUMBER_HELPER_TEXT")}
                                  </InputHelperText>
                                }
                              </InputHelperTextWrapper>
                            </Fragment>
                          ) : (
                            <Fragment>
                              <Row>
                                <Dropdown2
                                  onChange={e => {
                                    this.handleChangeInputNameFavored(e);
                                  }}
                                  list={favoredNameList}
                                  label={translate("FAVORED")}
                                  dataTest="favoredAccounts"
                                  height={48}
                                  width={100}
                                  tinyLabels
                                  value={valueInputNameFavored}
                                  clearInput={
                                    valueInputNameFavored ? false : true
                                  }
                                  keyName="name"
                                  hasEmptySelection
                                />
                              </Row>
                              <Row>
                                <Dropdown2
                                  onChange={e => {
                                    this.handleChangeInputAccountDestFavored(e);
                                  }}
                                  list={favoredAccountsList}
                                  label={translate("EFT_ACCOUNT_DEST")}
                                  dataTest="targetAccount"
                                  height={48}
                                  width={100}
                                  value={valueInputAccountDestFavored}
                                  clearInput={
                                    valueInputAccountDestFavored ? false : true
                                  }
                                  tinyLabels
                                  keyName="name"
                                  disabled={selectFavored ? false : true}
                                  hasEmptySelection
                                />
                              </Row>
                            </Fragment>
                          )}
                        </Fieldset>
                        <ButtonWrapper>
                          <ClickWrapper>
                            <Button
                              disabled={
                                loading
                                  ? loading
                                  : isNewAccount
                                    ? isDisabled(
                                      checkDate(
                                        transferData.date,
                                        false,
                                        serverTime
                                      ),
                                      checkValue(transferData.value),
                                      checkBank(favoredData.name, banksList),
                                      checkAgency(favoredData.agency),
                                      checkAccount(favoredData.account),
                                      checkOriginAccount(originAccount.number),
                                      checkVerifyDigit(favoredData.verifyDigit),
                                      this.state.dateInputFocused,
                                      favoredData.CNPJ !== "" ? true : false
                                    )
                                    : isDisabledFavoredData(
                                      checkDate(
                                        transferData.date,
                                        false,
                                        serverTime
                                      ),
                                      checkValue(transferData.value),
                                      valueInputNameFavored ? true : false,
                                      valueInputAccountDestFavored
                                        ? true
                                        : false,
                                      this.state.dateInputFocused,
                                      this.state.selectFavored,
                                      this.state.dataFavored
                                    )
                              }
                              dataTest="submitTransferBtn"
                              isCallToAction
                              onClick={() => {
                                if (this.checkAvailableDate()) {
                                  this.displayConfirmModal();
                                }
                              }}
                            >
                              {translate("CREATE")}
                            </Button>
                          </ClickWrapper>
                        </ButtonWrapper>
                      </form>
                    </Card>
                  </Content>
                )}
              </ShowHideWrapper>
            </CanAccess>
          )
          }
          <Title titleColor={darkGreen} BigTitle capitalize isNewTransfer>
            {this.state.currentDashboardGridTitle}
            <CanAccess roles={[CREATE_EFT, CREATE_APPROVE_EFT]} anyRole>
              <ClickWrapper>
                <Button
                  onClick={() => this.toggleAndGetDate()}
                  disabled={isCreateTransferEnabled}
                  isNewTransfer
                  dataTest="btnNewTrans"
                >
                  {translate("NEW_TRANSFER")}
                </Button>
              </ClickWrapper>
            </CanAccess>
          </Title>
          <DashboardFilters onFilter={this.onFilter} defaultFilter={filter} />
          <DashboardEFTS
            {...this.props}
            isEmpty={isEmptyOccurrencies}
            loadTransfers={this.loadTransfers}
            saveAccount={saveAccount}
          />
        </Fragment >
      );
    };

    const shimmerLoadingListBody = () => {
      return (
        <Fragment>
          <ListBody>
            <ListBodyTitle>
              <ShimmerLoading height={13} />
            </ListBodyTitle>
            <ListBodyTitle>
              <ShimmerLoading height={13} />
            </ListBodyTitle>
            <ListBodyTitle>
              <ShimmerLoading height={13} />
            </ListBodyTitle>
            <ListBodyTitle>
              <ShimmerLoading height={13} />
            </ListBodyTitle>
            <ListBodyTitle>
              <ShimmerLoading height={13} />
            </ListBodyTitle>
            <ListBodyTitle>
              <ShimmerLoading height={13} />
            </ListBodyTitle>
          </ListBody>
          <ListBody>
            <ListBodyTitle>
              <ShimmerLoading height={13} />
            </ListBodyTitle>
            <ListBodyTitle>
              <ShimmerLoading height={13} />
            </ListBodyTitle>
            <ListBodyTitle>
              <ShimmerLoading height={13} />
            </ListBodyTitle>
            <ListBodyTitle>
              <ShimmerLoading height={13} />
            </ListBodyTitle>
            <ListBodyTitle>
              <ShimmerLoading height={13} />
            </ListBodyTitle>
            <ListBodyTitle>
              <ShimmerLoading height={13} />
            </ListBodyTitle>
          </ListBody>
        </Fragment>
      );
    };

    const FavoredListView = () => {
      return (
        <ContainerList>
          <Card>
            <CardTitle>
              {translate("TED_SELECT_ORIGIN_ACCOUNT").toUpperCase()}
            </CardTitle>
            <DropdownWrapper>
              {accounts ? (
                <Dropdown
                  onChange={e => this.handleChangeOriginAccount(e)}
                  name="number"
                  list={accounts}
                  valid={() => checkOriginAccount(originAccount.number)}
                  value={originAccount.number}
                  label={translate("NUMBER").toUpperCase()}
                  dataTest="originAccount"
                  tinyLabels
                  accountNumber
                  height={48}
                />
              ) : (
                <WrapperDropdown>
                  <ShimmerLoading width={180} height={15} />
                </WrapperDropdown>
              )}
            </DropdownWrapper>

            <WrapperList>
              {originAccount.number !== "" && favoredAccounts.length > 0 && (
                <ListHead>
                  <ListHeadTitle>
                    {translate("FAVORED").toUpperCase()}
                  </ListHeadTitle>
                  <ListHeadTitle>{translate("TED_CNPJ")}</ListHeadTitle>
                  <ListHeadTitle>
                    {translate("TED_BANK_NAME_AND_CODE")}
                  </ListHeadTitle>
                  <ListHeadTitle>{translate("TED_AGENCY")}</ListHeadTitle>
                  <ListHeadTitle>
                    {translate("ACCOUNT").toUpperCase()}
                  </ListHeadTitle>
                  <ListHeadTitle>{translate("TED_DELETE")}</ListHeadTitle>
                </ListHead>
              )}

              {originAccount.number !== "" && loading
                ? shimmerLoadingListBody()
                : favoredAccounts.length > 0 &&
                favoredAccounts.map(favoreds => {
                  return favoreds.accounts.map((accounts, index) => {
                    return (
                      <ListBody key={index}>
                        <ListBodyTitle>
                          <TextBold>{favoreds.name}</TextBold>
                        </ListBodyTitle>
                        <ListBodyTitle>
                          {formatCNPJ(favoreds.document)}
                        </ListBodyTitle>
                        <ListBodyTitle>
                          {`${accounts.bankCode} - ${accounts.bankName}`}
                        </ListBodyTitle>
                        <ListBodyTitle>{accounts.branch}</ListBodyTitle>
                        <ListBodyTitle>
                          {`${accounts.number} - ${accounts.verifyingDigit}`}
                        </ListBodyTitle>
                        <ListBodyTitle
                          icon
                          onClick={() =>
                            this.openDeleteFavoredModal(favoreds, accounts)
                          }
                        >
                          <Icon
                            type="TrashCan"
                            width="12"
                            height="12"
                            dataTest="trashcan"
                            color="#27445F"
                          />
                        </ListBodyTitle>
                      </ListBody>
                    );
                  });
                })}
              {isEmptyListFavored && !loading && (
                <WrapperDefaultContent>
                  <DefaultContent
                    data-test="noRecordFavoredList"
                    Icon={() => (
                      <Icon type="NoRecord" height={rem(66)} width={rem(66)} />
                    )}
                    primaryText={translate("TED_NO_REGISTERED_FAVOREDS")}
                    secondaryTexts={[
                      translate("TED_NO_REGISTERED_FAVOREDS_MSG")
                    ]}
                  />
                </WrapperDefaultContent>
              )}
            </WrapperList>
          </Card>

          <AlertMessage
            icon="Attention"
            type="neutral"
            spacing={{
              top: "l",
              bottom: "l",
              right: "none",
              left: "none"
            }}
          >
            {translate("TED_FAVORED_LIST_ALERT_MSG")}
          </AlertMessage>
        </ContainerList>
      );
    };

    const tabsView = () => {
      return (
        <Container>
          <Tabs
            selectedTab={this.state.selectedTab}
            setSelectedTab={this.setSelectedTab}
            backgroundColor="#f7f8f9"
            widthTabs={360}
          >
            <section title={translate("TED_MY_TRANSFERS")}>
              {myTransfersView()}
            </section>
            <section title={translate("TED_FAVORED_LIST")}>
              {FavoredListView()}
            </section>
          </Tabs>
        </Container>
      );
    };

    const selectView = () => {
      if (__SHOW_WIRETRANSFER_CONTENT_MOBILE__ === "true") {
        return tabsView();
      } else {
        return (
          <Fragment>
            <Hide below="md">{tabsView()}</Hide>
            <Hide above="md">
              <NotSupportMobile />
            </Hide>
          </Fragment>
        );
      }
    };

    return (
      <ErrorBoundary errorStatus={error} >
        <DashboardWrapper>{selectView()}</DashboardWrapper>
      </ErrorBoundary>
    );
  }
}

export default Dashboard;

Dashboard.defaultProps = {
  favoredAccounts: [],
  transferData: {
    date: "",
    value: ""
  },
  favoredData: {
    favored: "",
    CNPJ: "",
    bank: "",
    agency: "",
    account: "",
    verifyDigit: "",
    nameFavored: "",
    cnpjHeadOfficeBranch: ""
  },
  originAccount: {
    number: "",
    availableBalance: ""
  }
};

Dashboard.propTypes = {
  deletedFavoredAccount: array,
  placeholder: string,
  type: string,
  name: string,
  label: string,
  openToastr: func,
  tinyLabels: bool,
  valid: bool,
  onChange: func,
  maxlength: number,
  transferData: shape({
    date: string,
    value: oneOfType([number, string])
  })
};