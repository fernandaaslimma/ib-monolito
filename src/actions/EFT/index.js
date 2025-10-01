import * as EFT_API from "../../services/EFT";
import moment from "moment";
import { unFormatNumber } from "../../utils/formatNumber";
import { hasAvailableBalance } from "../../utils/validations/EFT";
import { ALL_TRANSFERS, HISTORY } from "../../utils/constants";
import {
  getDateFieldParserLocale,
  getDateFieldPlaceholderByLocale
} from "../../utils/i18n";

export default store => ({
  getFavored: () =>
    EFT_API.getFavoreds()
      .then(resp => resp.json())
      .then(favoreds => ({ favoreds })),

  handleUserInputTranferData: (state, e) => {
    const { name, value } = e.target;
    return {
      transferData: {
        ...state.transferData,
        error: null,
        [name]: value
      }
    };
  },

  handleUserInputTransferCurrency: (state, value) => ({
    transferData: {
      ...state.transferData,
      value
    }
  }),

  handleUserInputTranferDataDate: (state, from) => {
    return {
      transferData: {
        ...state.transferData,
        error: null,
        date: from
      }
    };
  },

  handleUserFavoredData: (state, account) => {
    return {
      favoredData: {
        ...state.favoredData,
        account: account.number,
        agency: account.branch,
        bank: account.bankName,
        bankCode: account.bankCode,
        bankISPB: account.bankIspb,
        error: null,
        name: account.people && account.people,
        document: account.people && account.peopleDocument,
        verifyDigit: account.verifyingDigit,
        thirdFavoredFullName:
          account.thirdFavoredFullName && account.thirdFavoredFullName,
        thirdFavoredDocument:
          account.thirdFavoredDocument && account.thirdFavoredDocument,
        isThirdFavored: account.isThirdFavored && account.isThirdFavored
      }
    };
  },

  handleIsThirdFavored: (state, isThird, isNewAccount = false) => {
    return {
      favoredData: {
        ...state.favoredData,
        isThirdFavored: isThird,
        isNewAccount: isNewAccount
      }
    };
  },

  handleIsFavoredContactList: (
    state,
    isFavoredContact = false,
    document = null
  ) => {
    return {
      favoredData: {
        ...state.favoredData,
        isFavoredContactList: isFavoredContact,
        favoredContactDocument: document
      }
    };
  },

  handleUserFavoredDataThird: (state, e) => {
    const { name, value } = e.target;

    return name === "thirdFavoredFullName"
      ? {
        favoredData: {
          ...state.favoredData,
          thirdFavoredFullName: value
        }
      }
      : {
        favoredData: {
          ...state.favoredData,
          thirdFavoredDocument: value
        }
      };
  },

  handleUserInputCnpj: (state, document) => {
    return { favoredData: { ...state.favoredData, CNPJ: document } };
  },

  handleUserSelectedAccount: (state, selectedAccount) => {
    return {
      favoredData: {
        ...state.favoredData,
        cnpjHeadOfficeBranch: selectedAccount.document.substring(8, 14),
        CNPJ: selectedAccount.document
      }
    };
  },

  handleUserInputFavoredData: (state, e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trim();

    //Regex enable only numbers from 0 to 9
    const regex = RegExp("^[0-9]*$").test(value);
    //Regex enable only numbers from 0 to 9 and x character lower and upper case
    // const regex2 = RegExp("^[0-9xX]*$").test(value);

    switch (name) {
      case "cnpj": {
        return {
          favoredData: {
            ...state.favoredData,
            cnpjHeadOfficeBranch: value
          }
        };
      }
      case "agency": {
        return (
          regex && {
            favoredData: { ...state.favoredData, agency: trimmedValue }
          }
        );
      }
      case "account": {
        return (
          regex && {
            favoredData: { ...state.favoredData, account: trimmedValue }
          }
        );
      }
      case "verifyDigit": {
        return (
          regex && {
            favoredData: { ...state.favoredData, verifyDigit: trimmedValue }
          }
        );
      }
      default: {
        return {
          favoredData: {
            ...state.favoredData,
            error: null,
            [name]: trimmedValue
          }
        };
      }
    }
  },

  handleUserInputFavoredDataBank: (state, bank) => {
    const { value, ispb, code, name = value } = bank;
    return {
      favoredData: {
        ...state.favoredData,
        error: null,
        name: name,
        bank: value,
        bankISPB: ispb,
        bankCode: code
      }
    };
  },

  handleUserInputOriginAccount: (state, e) => {
    const { name, value } = e.target;
    const selectedAccount = state.accounts.find(c => c.accountNumber === value);

    return {
      originAccount: {
        ...state.originAccount,
        error: null,
        id: selectedAccount.account,
        [name]: value
      }
    };
  },

  setAfterCreationLoad: () => ({
    isAfterCreation: true
  }),

  resetSignLoading: () => ({
    signLoadingId: null
  }),

  resetFields: (_, date) => {
    const transferData = date
      ? {
        date: moment(date, getDateFieldParserLocale())
          .utcOffset(-3, true)
          .format(getDateFieldPlaceholderByLocale())
      }
      : {};

    return {
      isAfterCreation: false,
      originAccount: {},
      favoredData: {},
      transferData: {
        ...transferData
      },
      favoredAccounts: []
    };
  },

  getTransferById: async (_, id) => {
    try {
      const transferRaw = await EFT_API.getTransferById(id);
      const getTransfersResponse = await transferRaw.json();

      return {
        currentTransfer: getTransfersResponse.content
      };
    } catch (error) {
      return { error };
    }
  },

  getTransfers: async (_, { type, range }) => {
    try {
      let getTransfersRequest;
      if (type === ALL_TRANSFERS) {
        getTransfersRequest = await EFT_API.getTransfers();
      } else if (type === HISTORY) {
        const end = new Date();
        const unixEnd = end.getTime();

        const unixStart = new Date(end).setDate(end.getDate() - range);
        getTransfersRequest = await EFT_API.getTransfersByPeriod({
          type,
          unixStart,
          unixEnd
        });
      } else {
        getTransfersRequest = await EFT_API.getTransfersByType({ type });
      }
      const getTransfersResponse = await getTransfersRequest.json();

      return {
        pendencies: getTransfersResponse
      };
    } catch (error) {
      throw { error };
    }
  },

  approveEFT: async (
    state,
    transferOrderId,
    mobileResponse,
    saveAccount = false
  ) => {
    mobileResponse &&
      (mobileResponse.payload = {
        ...mobileResponse.payload,
        id: transferOrderId
      });

    const body = {
      message: {
        payload: mobileResponse ? mobileResponse : state.mfaTokenParams.payload,
        messageAuthenticationCode: mobileResponse
          ? mobileResponse.key
          : state.mfaTokenParams.key
      }
    };

    mobileResponse && delete body.message.payload.key;

    try {
      await EFT_API.approveEFT(transferOrderId, body, saveAccount);
    } catch (error) {
      throw { error };
    }
  },

  denyEFT: async (state, transferOrderId, saveAccount = false) => {
    const body = {
      message: {
        payload: state.mfaTokenParams.payload,
        messageAuthenticationCode: state.mfaTokenParams.key
      }
    };
    try {
      await EFT_API.denyEFT(transferOrderId, body, saveAccount);
    } catch (error) {
      throw { error };
    }
  },

  createEFT: async (
    state,
    favoredData,
    transferData,
    originAccount,
    accountStatus,
    currentAccount = null,
    newRecipient = false,
    userInfo
  ) => {
    try {
      const dueDate = moment(transferData.date, getDateFieldParserLocale())
        .utcOffset(-3, true)
        .valueOf();

      const { accounts } = state;

      const accountId = accounts.find(
        c => c.accountNumber === originAccount.number
      ).account;

      const favoredName = accounts.find(
        account => account.accountNumber === originAccount.number
      ).name;

      const body = {
        recipient: {
          newRecipient: newRecipient,
          saveRecipientAccount: accountStatus,
          bankId: favoredData.bankCode,
          bankISPB: favoredData.bankISPB,
          bankBranch: favoredData.agency,
          bankName: favoredData.bank,
          bankAccount: favoredData.account,
          verifyingDigit: favoredData.verifyDigit,
          name: favoredData.isThirdFavored
            ? favoredData.thirdFavoredFullName
            : favoredData.isNewAccount
              ? favoredName
              : currentAccount.name,
          taxId: favoredData.isThirdFavored
            ? favoredData.thirdFavoredDocument.replace(/\D+/g, "")
            : favoredData.isFavoredContactList
              ? favoredData.favoredContactDocument
              : favoredData.CNPJ || userInfo.document,
          IsThirdParty: favoredData.isFavoredContactList
            ? favoredData.isFavoredContactList
            : favoredData.isThirdFavored
        },
        amount: unFormatNumber(transferData.value),
        dueDate: dueDate,
        originAccount: `${originAccount.number}`,
        originAccountId: accountId,
        awaitBalance: !hasAvailableBalance(
          originAccount,
          transferData,
          accounts
        )
      };
      const createEFTRequest = await EFT_API.createEFT(body);
      const createEFTData = await createEFTRequest.json();

      return { createEFTData };
    } catch (error) {
      return { error };
    }
  },

  getApprovers: async (_, body) => {
    try {
      const approversRaw = await EFT_API.getApprovers(body);
      const respApprovers = await approversRaw.json();

      return {
        approvers: respApprovers.content
      };
    } catch (error) {
      return { error };
    }
  },

  getBanks: async () => {
    try {
      const getBankISPB = await EFT_API.getISPBList();
      const respBankISPB = await getBankISPB.json();

      const newBankISPBList = respBankISPB.map(obj => ({
        ...obj,
        value: obj.name,
        name: `${obj.code} ${obj.name}`
      }));
      return {
        respBankISPB: respBankISPB,
        banksList: newBankISPBList
      };
    } catch (error) {
      return { error };
    }
  },

  getAvailableDateRanges: async ({ transferData }, service) => {
    try {
      const date =
        transferData &&
        transferData.date &&
        moment(transferData.date, getDateFieldParserLocale()).utcOffset(
          -3,
          true
        );

      const request = await EFT_API.getAvailableDateRanges(
        date ? date.format("YYYY-MM-DD") : undefined,
        service
      );
      const response = await request.json();
      return {
        availableDateRanges: response[0].periods,
        serverTime: response[0].serverTime
      };
    } catch (error) {
      return { error };
    }
  },

  getNextAvailableDate: async ({ transferData }, service, serverTime) => {
    try {
      store.setState({ skipLoading: true });
      let nextAvailableDate;
      let date =
        transferData &&
        transferData.date &&
        moment(transferData.date, getDateFieldParserLocale())
          .utcOffset(-3, true)
          .startOf("day")
          .add(1, "days");

      for (let index = 0; !nextAvailableDate && index < 10; index++) {
        const request = await EFT_API.getAvailableDateRanges(
          date ? date.format("YYYY-MM-DD") : undefined,
          service
        );
        const response = await request.json();

        if (response[0].periods.length > 0) {
          const now = serverTime ? serverTime : new Date().getTime();
          const maxEndTime = Math.max(
            ...response[0].periods.map(x => x.endTime),
            0
          );
          const minute = 60000;

          if (now <= maxEndTime - minute) {
            nextAvailableDate = moment(response[0].date)
              .utcOffset(-3, true)
              .format(getDateFieldPlaceholderByLocale());
          }
        }
        date = moment(date)
          .utcOffset(-3, true)
          .add(1, "days");
      }

      store.setState({
        skipLoading: false
      });

      return {
        nextAvailableDate
      };
    } catch (error) {
      return { error };
    }
  },

  getFavoredAccounts: async (_, id) => {
    try {
      const getFavoredAccounts = await EFT_API.getFavoredAccounts(id);
      const respFavoredAccounts = await getFavoredAccounts.json();
      return {
        favoredAccounts: respFavoredAccounts
      };
    } catch (error) {
      return { error };
    }
  },

  deleteFavoredAccount: async (
    _,
    accountId,
    recipientId,
    recipientAccountId
  ) => {
    const deleteFavoredAccount = await EFT_API.deleteFavoredAccount(
      accountId,
      recipientId,
      recipientAccountId
    );
    const respDeleteFavoredAccount = await deleteFavoredAccount;
    return {
      deletedFavoredAccount: respDeleteFavoredAccount
    };
  },

  getLimit: async () => {
    try {
      const getLimit = await EFT_API.getLimit();
      const respLimit = await getLimit.json();
      return {
        limitTed: respLimit
      };
    } catch (error) {
      return { error };
    }
  }
});
