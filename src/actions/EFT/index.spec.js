import actions from "./index";
import { ALL_TRANSFERS } from "../../utils/constants";

jest.mock("../../services/EFT");

const store = {
  setState: jest.fn()
};

const {
  getFavoreds: getFavoredsAPI,
  getTransfers: getTransfersAPI,
  getTransferById: getTransfersByIdAPI,
  getTransfersByType: getTransfersByTypeAPI,
  approveEFT: approveEFTAPI,
  denyEFT: denyEFTAPI,
  createEFT: createEFTAPI,
  getApprovers: getApproversAPI,
  getISPBList: getISPBListAPI,
  getAvailableDateRanges: getAvailableDateRangesAPI
} = require("../../services/EFT");

const getFavoredsAPIResponse = [
  {
    id: "id",
    defaultAuth: true,
    authUri: "pj_teste@bancobbm.com.br",
    type: "mail",
    actions: ["authregistration", "passwordreset"],
    activated: true,
    plataformIdentifier: null
  }
];

const getTransfersAPIResponse = {
  content: [
    {
      transferOrderId: "transferOrderIdtransferOrderIdtransferOrderId",
      originAccount: "originAccount",
      dueDate: 1541618551000,
      recipient: {
        name: "GT Logística de transporte Ltda 2",
        bankId: "9978",
        bankName: "Banco Santander",
        bankBranch: "1916",
        bankAccount: "7844121",
        taxId: "129.325.227-10"
      },
      ammount: 203,
      approvers: [
        {
          approverId: "jsonFagundes@bancobbm.com.br",
          name: "Json Fagundes",
          hasApproved: false
        }
      ]
    }
  ],
  statusCode: 200,
  messages: ["string"]
};

const getTransfersByTypeAPIResponse = {
  ...getTransfersAPIResponse
};

const createEFTAPIResponse = {
  id: "id",
  type: "oob",
  authFactorId: "authFactorId",
  actionType: "passwordreset",
  payload: {
    agent: "Chrome",
    id: "id",
    local: "Rio de Janeiro - Brasil",
    name: "Angelica "
  }
};

const getApproversAPIResponse = {
  content: {
    quantity: "2",
    approvers: [
      {
        name: "Usuario PJ4",
        uid: "pj4@bocombbm.com.br"
      }
    ]
  }
};

const getISPBListAPIResponse = [
  {
    code: "231",
    name: "ALUSTAR WILLOW",
    value: "ALUSTAR WILLOW",
    ispb: "33485541"
  },
  {
    code: "237",
    name: "QUALITYWARE 1106",
    value: "QUALITYWARE 1106",
    ispb: "60746948"
  },
  {
    code: "291",
    name: "BBI 3769",
    value: "BBI 3769",
    ispb: "60898723"
  },

  {
    code: "48",
    name: "NACOP 2001",
    value: "NACOP 2001",
    ispb: "00898723"
  }
];

const getAvailableDateRangesAPIResponse = [
  {
    date: "2019-05-27",
    service: "wireTransfer",
    periods: [
      {
        startTime: 1558951200000,
        endTime: 1558972800000
      }
    ]
  }
];

const getNextAvailableDateAPIResponse = getAvailableDateRangesAPIResponse;
const errorMock = { message: "mock error" };
const expectedErrorResponse = { error: errorMock };

describe("EFT actions", () => {
  it("should return an action object", () => {
    expect(typeof actions() === "object").toBeTruthy();
    expect(Object.keys(actions())).toEqual([
      "getFavored",
      "handleUserInputTranferData",
      "handleUserInputTransferCurrency",
      "handleUserInputTranferDataDate",
      "handleUserFavoredData",
      "handleIsThirdFavored",
      "handleIsFavoredContactList",
      "handleUserFavoredDataThird",
      "handleUserInputCnpj",
      "handleUserSelectedAccount",
      "handleUserInputFavoredData",
      "handleUserInputFavoredDataBank",
      "handleUserInputOriginAccount",
      "setAfterCreationLoad",
      "resetSignLoading",
      "resetFields",
      "getTransferById",
      "getTransfers",
      "approveEFT",
      "denyEFT",
      "createEFT",
      "getApprovers",
      "getBanks",
      "getAvailableDateRanges",
      "getNextAvailableDate",
      "getFavoredAccounts",
      "deleteFavoredAccount",
      "getLimit"
    ]);
  });

  describe("getFavored", () => {
    it("Should getFavored with success", async () => {
      getFavoredsAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(getFavoredsAPIResponse)
        })
      );
      const { getFavored } = actions();

      const response = await getFavored();

      expect(response).toEqual({ favoreds: getFavoredsAPIResponse });
    });
  });

  describe("handleUserInputTranferData", () => {
    it("Should handleUserInputTranferData with success", async () => {
      const { handleUserInputTranferData } = actions();
      const state = handleUserInputTranferData(
        { transferData: {} },
        { target: { value: "123", name: "field" } }
      );

      expect(state).toEqual({
        transferData: {
          error: null,
          field: "123"
        }
      });
    });
  });

  describe("handleUserInputTransferCurrency", () => {
    it("Should handleUserInputTransferCurrency with success", async () => {
      const { handleUserInputTransferCurrency } = actions();
      const state = handleUserInputTransferCurrency(
        { transferData: {} },
        "500,00"
      );

      expect(state).toEqual({
        transferData: {
          value: "500,00"
        }
      });
    });
  });

  describe("handleUserInputTranferDataDate", () => {
    it("Should handleUserInputTranferDataDate with success", async () => {
      const { handleUserInputTranferDataDate } = actions();
      const state = handleUserInputTranferDataDate(
        { transferData: {} },
        "12/12/2999"
      );

      expect(state).toEqual({
        transferData: {
          error: null,
          date: "12/12/2999"
        }
      });
    });
  });

  describe("handleUserInputFavoredData", () => {
    it("Should handleUserInputFavoredData with success", async () => {
      const { handleUserInputFavoredData } = actions();
      const state = handleUserInputFavoredData(
        { favoredData: {} },
        { target: { value: "123", name: "field" } }
      );

      expect(state).toEqual({
        favoredData: {
          error: null,
          field: "123"
        }
      });
    });
    it("Should handleUserInputFavoredData verifyDigit with success", async () => {
      const { handleUserInputFavoredData } = actions();
      const state = handleUserInputFavoredData(
        { favoredData: {} },
        { target: { value: "1", name: "verifyDigit" } }
      );

      expect(state).toEqual({
        favoredData: {
          verifyDigit: "1"
        }
      });
    });
    it("Should handleUserInputFavoredData verifyDigit with unacepted caracter", async () => {
      const { handleUserInputFavoredData } = actions();
      const state = handleUserInputFavoredData(
        { favoredData: {} },
        { target: { value: "a", name: "verifyDigit" } }
      );

      expect(state).toEqual(false);
    });

    it("Should handleUserInputFavoredData agency with success", async () => {
      const { handleUserInputFavoredData } = actions();
      const state = handleUserInputFavoredData(
        { favoredData: {} },
        { target: { value: "1", name: "agency" } }
      );

      expect(state).toEqual({
        favoredData: {
          agency: "1"
        }
      });
    });
    it("Should handleUserInputFavoredData agency with unacepted caracter", async () => {
      const { handleUserInputFavoredData } = actions();
      const state = handleUserInputFavoredData(
        { favoredData: {} },
        { target: { value: "a", name: "agency" } }
      );

      expect(state).toEqual(false);
    });
    it("Should handleUserInputFavoredData account with success", async () => {
      const { handleUserInputFavoredData } = actions();
      const state = handleUserInputFavoredData(
        { favoredData: {} },
        { target: { value: "1", name: "account" } }
      );

      expect(state).toEqual({
        favoredData: {
          account: "1"
        }
      });
    });
    it("Should handleUserInputFavoredData account with unacepted caracter", async () => {
      const { handleUserInputFavoredData } = actions();
      const state = handleUserInputFavoredData(
        { favoredData: {} },
        { target: { value: "a", name: "account" } }
      );

      expect(state).toEqual(false);
    });
  });

  describe("handleUserInputFavoredDataBank", () => {
    it("Should handleUserInputFavoredDataBank with success", async () => {
      const { handleUserInputFavoredDataBank } = actions();
      const state = handleUserInputFavoredDataBank(
        { favoredData: {} },
        {
          code: "231",
          name: "231 ALUSTAR WILLOW",
          value: "ALUSTAR WILLOW",
          ispb: "33485541"
        }
      );

      expect(state).toEqual({
        favoredData: {
          bank: "ALUSTAR WILLOW",
          bankCode: "231",
          bankISPB: "33485541",
          error: null,
          name: "231 ALUSTAR WILLOW"
        }
      });
    });
  });

  describe("setAfterCreationLoad", () => {
    it("Should setAfterCreationLoad with success", async () => {
      const { setAfterCreationLoad } = actions();
      const state = setAfterCreationLoad();

      expect(state).toEqual({ isAfterCreation: true });
    });
  });

  describe("handleUserInputOriginAccount", () => {
    it("Should handleUserInputOriginAccount with success", async () => {
      const { handleUserInputOriginAccount } = actions();
      const state = handleUserInputOriginAccount(
        {
          accounts: [
            {
              accountNumber: "123",
              account: 6455
            }
          ],
          originAccount: {}
        },
        { target: { value: "123", name: "field" } }
      );

      expect(state).toEqual({
        originAccount: {
          error: null,
          field: "123",
          id: 6455
        }
      });
    });
  });

  describe("resetSignLoading", () => {
    it("Should resetSignLoading with success", async () => {
      const { resetSignLoading } = actions();
      const state = resetSignLoading();

      expect(state).toEqual({ signLoadingId: null });
    });
  });

  describe("resetFields", () => {
    it("Should resetFields with success", async () => {
      const { resetFields } = actions();
      const state = resetFields();

      expect(state).toEqual({
        isAfterCreation: false,
        originAccount: {},
        favoredData: {},
        transferData: {},
        favoredAccounts: []
      });
    });
  });

  describe("getTransferById", () => {
    it("Should getTransferById with success", async () => {
      getTransfersByIdAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(getTransfersAPIResponse)
        })
      );
      const { getTransferById } = actions();

      const response = await getTransferById(1111);

      expect(response).toEqual({
        currentTransfer: getTransfersAPIResponse.content
      });
    });

    it("Should getTransferById with error", async () => {
      getTransfersByIdAPI.mockImplementation(() => Promise.reject(errorMock));

      const { getTransferById } = actions();

      const response = await getTransferById(1111);
      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getTransfers", () => {
    it("Should getTransfers as ALL_TRANSFERS with success", async () => {
      getTransfersAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(getTransfersAPIResponse)
        })
      );
      const { getTransfers } = actions();

      const response = await getTransfers({}, { type: ALL_TRANSFERS });

      expect(response).toEqual({ pendencies: getTransfersAPIResponse });
    });

    it("Should getTransfersByType with success", async () => {
      getTransfersByTypeAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(getTransfersByTypeAPIResponse)
        })
      );
      const { getTransfers } = actions();

      const response = await getTransfers({}, { type: "mock" });

      expect(response).toEqual({ pendencies: getTransfersByTypeAPIResponse });
    });
  });

  describe("denyEFT", () => {
    it("Should denyEFT with success", done => {
      denyEFTAPI.mockImplementation(() =>
        Promise.resolve({
          status: 200
        })
      );
      const state = {
        mfaTokenParams: {
          payload: {
            id: 254,
            type: "oob",
            authFactorId: "639430e0-1526-4353-8844-8233e7fbbb99",
            payload: {
              id: "kj198fas-jbcsa982-biqa90",
              agent: "Chrome",
              local: "Rio de Janeiro - Brasil"
            },
            approved: false
          }
        },
        messageAuthenticationCode: "SAJdkasj22918390821321@$(*(ds*a("
      };

      const { denyEFT } = actions();

      denyEFT(state, 123).then(() => {
        done();
      });
    });

    it("Should denyEFT with error", async () => {
      denyEFTAPI.mockImplementation(() => {
        throw new Error();
      });

      const state = {
        mfaTokenParams: {
          payload: {
            id: 254,
            type: "oob",
            authFactorId: "639430e0-1526-4353-8844-8233e7fbbb99",
            payload: {
              id: "kj198fas-jbcsa982-biqa90",
              agent: "Chrome",
              local: "Rio de Janeiro - Brasil"
            },
            approved: false
          }
        },
        messageAuthenticationCode: "SAJdkasj22918390821321@$(*(ds*a("
      };

      const { denyEFT } = actions();

      try {
        await denyEFT(state, "123");
      } catch (error) {
        expect(error);
      }
    });
  });

  describe("approveEFT", () => {
    it("Should approveEFT with success", done => {
      approveEFTAPI.mockImplementation(() =>
        Promise.resolve({
          status: 200
        })
      );

      const state = {
        mfaTokenParams: {
          payload: {
            id: 254,
            type: "oob",
            authFactorId: "639430e0-1526-4353-8844-8233e7fbbb99",
            payload: {
              id: "kj198fas-jbcsa982-biqa90",
              agent: "Chrome",
              local: "Rio de Janeiro - Brasil"
            },
            approved: true
          },
          key: "SAJdkasj22918390821321@$(*(ds*a("
        }
      };

      const { approveEFT } = actions();

      approveEFT(state, "123").then(() => {
        done();
      });
    });

    it("Should approveEFT with mobileResponse", done => {
      approveEFTAPI.mockImplementation(() =>
        Promise.resolve({
          status: 200
        })
      );

      const state = {
        mfaTokenParams: {
          payload: {
            id: 254,
            type: "oob",
            authFactorId: "639430e0-1526-4353-8844-8233e7fbbb99",
            payload: {
              id: "kj198fas-jbcsa982-biqa90",
              agent: "Chrome",
              local: "Rio de Janeiro - Brasil"
            },
            approved: true
          },
          key: "SAJdkasj22918390821321@$(*(ds*a("
        }
      };

      const { approveEFT } = actions();

      approveEFT(state, "123", { payload: "1111" }).then(() => {
        done();
      });
    });

    it("Should approveEFT with error", async () => {
      approveEFTAPI.mockImplementation(() => {
        throw new Error();
      });

      const state = {
        mfaTokenParams: {
          payload: {
            id: 254,
            type: "oob",
            authFactorId: "639430e0-1526-4353-8844-8233e7fbbb99",
            payload: {
              id: "kj198fas-jbcsa982-biqa90",
              agent: "Chrome",
              local: "Rio de Janeiro - Brasil"
            },
            approved: true
          },
          key: "SAJdkasj22918390821321@$(*(ds*a("
        }
      };

      const { approveEFT } = actions();

      // approveEFT(state, "123").then(() => done())

      try {
        await approveEFT(state, "123");
      } catch (error) {
        expect(error);
      }
    });
  });

  describe("createEFT", () => {
    const state = {
      favoredData: {
        bank: "bank",
        agency: "agency",
        account: "account",
        favored: "favored",
        CNPJ: "CNPJ",
        thirdFavoredDocument: "129.325.227-10"
      },
      transferData: {
        value: "value",
        date: "date"
      },
      originAccount: {
        number: "number"
      },
      userInfo: {
        givenName: "Yuri",
        surname: "Ramos",
        document: "11111111111"
      },
      accounts: [
        {
          accountNumber: "number",
          availableBalance: "availableBalance",
          name: "Angelica"
        }
      ],
      currentAccount: {
        name: "Angelica "
      },
      accountStatus: null
    };

    it("Should createEFT with success", async () => {
      createEFTAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(createEFTAPIResponse),
          headers: new Headers({ "x-message-authentication-code": "teste" })
        })
      );

      const { createEFT } = actions();

      const response = await createEFT(
        state,
        state.favoredData,
        state.transferData,
        state.originAccount,
        state.accountStatus,
        state.currentAccount.name
      );

      expect(response).toEqual({ createEFTData: createEFTAPIResponse });
    });

    it("Should createEFT with error", async () => {
      createEFTAPI.mockImplementation(() => Promise.reject(errorMock));
      const { createEFT } = actions();
      const response = await createEFT(
        state,
        state.favoredData,
        state.transferData,
        state.originAccount,
        state.accountStatus,
        state.currentAccount.name
      );

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getApprovers", () => {
    it("Should getApprovers with success", async () => {
      getApproversAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(getApproversAPIResponse)
        })
      );

      const { getApprovers } = actions();
      const response = await getApprovers();

      expect(response).toEqual({
        approvers: getApproversAPIResponse.content
      });
    });

    it("Should getApprovers with error", async () => {
      getApproversAPI.mockImplementation(() => Promise.reject(errorMock));
      const { getApprovers } = actions();
      const response = await getApprovers();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getBanks", () => {
    it("Should getBanks with success", async () => {
      const banksListResponse = [
        {
          code: "231",
          name: "231 ALUSTAR WILLOW",
          value: "ALUSTAR WILLOW",
          ispb: "33485541"
        },
        {
          code: "237",
          name: "237 QUALITYWARE 1106",
          value: "QUALITYWARE 1106",
          ispb: "60746948"
        },
        {
          code: "291",
          name: "291 BBI 3769",
          value: "BBI 3769",
          ispb: "60898723"
        },

        {
          code: "48",
          name: "48 NACOP 2001",
          value: "NACOP 2001",
          ispb: "00898723"
        }
      ];

      getISPBListAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(getISPBListAPIResponse)
        })
      );

      const { getBanks } = actions();
      const response = await getBanks();

      expect(response).toEqual({
        respBankISPB: getISPBListAPIResponse,
        banksList: banksListResponse
      });
    });

    it("Should getBanks with error", async () => {
      getISPBListAPI.mockImplementation(() => Promise.reject(errorMock));
      const { getBanks } = actions();
      const response = await getBanks();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getAvailableDateRanges", () => {
    it("Should getAvailableDateRanges with success", async () => {
      getAvailableDateRangesAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(getAvailableDateRangesAPIResponse)
        })
      );

      const { getAvailableDateRanges } = actions(store);

      const state = {
        transferData: {
          date: "date"
        }
      };

      const response = await getAvailableDateRanges(state);

      expect(response).toEqual({
        availableDateRanges: getAvailableDateRangesAPIResponse[0].periods
      });

      getAvailableDateRangesAPI.mockClear();
    });

    it("Should getAvailableDateRanges with error", async () => {
      getAvailableDateRangesAPI.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { getAvailableDateRanges } = actions();
      const state = {
        transferData: {
          date: "date"
        }
      };

      const response = await getAvailableDateRanges(state);
      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getNextAvailableDate", () => {
    it("Should getNextAvailableDate with success", async () => {
      getAvailableDateRangesAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(getNextAvailableDateAPIResponse)
        })
      );

      const { getNextAvailableDate } = actions(store);

      const state = {
        transferData: {
          date: "date"
        }
      };

      try {
        getNextAvailableDate(state).then(response =>
          expect(response).toEqual({
            nextAvailableDate: "06/01/2010"
          })
        );
      } catch (error) {
        expect(error);
      }

      getAvailableDateRangesAPI.mockClear();
    });
  });

  it("Should getNextAvailableDate with error", async () => {
    getAvailableDateRangesAPI.mockImplementation(() =>
      Promise.reject(errorMock)
    );

    const { getNextAvailableDate } = actions(store);
    const state = {
      transferData: {
        date: "date"
      }
    };

    const response = await getNextAvailableDate(state);
    expect(response).toEqual(expectedErrorResponse);
  });
});
