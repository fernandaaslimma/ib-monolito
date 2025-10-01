import position from "./index";
import moment from "moment";

jest.mock("uuid", () => ({
  v4: () => "00000000-0000-0000-0000-000000000000"
}));

jest.mock("../../services/position");

jest.mock("moment", () => jest.fn());
moment.mockImplementation(val => ({
  format: () => val.substring(0, 10)
}));

const getAccountsMock = require("../../services/position").getAccounts;
const getBalanceMock = require("../../services/position").getBalance;
const getEquitiesMock = require("../../services/position").getEquities;
const getFundsMock = require("../../services/position").getFunds;
const getFixedIncomeMock = require("../../services/position").getFixedIncome;
const getTotalByType = require("../../services/position").getTotalByType;
const getLcaTotal = require("../../services/position").getLcaTotal;
const getValuesSuggestion = require("../../services/position")
  .getValuesSuggestion;
const getPriorityTypesAPI = require("../../services/position")
  .getPriorityTypesAPI;
const postLcaDetailsAPI = require("../../services/position").postLcaDetailsAPI;
const getAllLcaDetailsAPI = require("../../services/position")
  .getAllLcaDetailsAPI;

const postToWithdrawalAPI = require("../../services/position")
  .postToWithdrawalAPI;
const postToAproveWithdrawalAPI = require("../../services/position")
  .postToAproveWithdrawalAPI;
const getEventsMock = require("../../services/position").getEvents;
const getBalanceHistoryMock = require("../../services/position")
  .getBalanceHistory;

const getCnabMock = require("../../services/position").getCnab;

const accountsMock = [
  {
    id: 1,
    branch: 2,
    verifyingDigit: 3,
    number: 4,
    bankCode: 107,
    bankISPB: "2312321"
  }
];

const equitiesMock = [
  {
    name: "equities"
  }
];

const fixedIncomeMock = [
  {
    name: "fixedIncome"
  }
];

const fundsMock = [
  {
    name: "funds"
  }
];

let totalsMock = [
  {
    netBalance: 123
  }
];

const balanceMock = {
  totalBalance: 5,
  availableBalance: 6,
  blockedBalance: 7,
  date: "12/12"
};

const lcaMock = {
  totalLca: 35000.0
};

const valuesSuggestionMock = {
  totalMax: {
    totalMaxValue: 30700,
    maxPositions: [
      {
        positionId: "541758",
        quantity: 3
      },
      {
        positionId: "541761",
        quantity: 7
      },
      {
        positionId: "541764",
        quantity: 19
      }
    ]
  },
  totalMin: {
    totalMinValue: 29900,
    minPositions: [
      {
        positionId: "541758",
        quantity: 3
      },
      {
        positionId: "541761",
        quantity: 7
      },
      {
        positionId: "541764",
        quantity: 18
      }
    ]
  }
};

const responseLcaMocks = [
  {
    positionId: "541758",
    product: "LCA",
    issuer: "CARLINDA Gantois",
    issueDate: "2019-10-28",
    maturityDate: "2020-10-29",
    grossValue: 600,
    netValue: 600,
    quantity: 3,
    unitPrice: 200
  },
  {
    positionId: "541761",
    product: "LCA",
    issuer: "CARLINDA Gantois",
    issueDate: "2019-10-28",
    maturityDate: "2020-10-29",
    grossValue: 4900,
    netValue: 4900,
    quantity: 7,
    unitPrice: 700
  },
  {
    positionId: "541764",
    product: "LCA",
    issuer: "CARLINDA Gantois",
    issueDate: "2019-10-28",
    maturityDate: "2020-10-29",
    grossValue: 3200,
    netValue: 3200,
    quantity: 4,
    unitPrice: 800
  },
  {
    positionId: "541765",
    product: "LCA",
    issuer: "CARLINDA Gantois",
    issueDate: "2019-10-28",
    maturityDate: "2020-10-29",
    grossValue: 3200,
    netValue: 3200,
    quantity: 5,
    unitPrice: 800
  },
  {
    positionId: "541761",
    product: "LCA",
    issuer: "CARLINDA Gantois",
    issueDate: "2019-10-28",
    maturityDate: "2020-10-29",
    grossValue: 4900,
    netValue: 4900,
    quantity: 7,
    unitPrice: 700
  },
  {
    positionId: "541764",
    product: "LCA",
    issuer: "CARLINDA Gantois",
    issueDate: "2019-10-28",
    maturityDate: "2020-10-29",
    grossValue: 3200,
    netValue: 3200,
    quantity: 4,
    unitPrice: 800
  }
];

const responsePriorityTypes = [
  { id: 1, name: "Priority by Earlier Maturity Date" },
  { id: 2, name: "Priority by Yield" }
];

const responseToWithdrawalMocks = {
  statusCode: 201,
  message: "successful withdrawal"
};

const responseToAproveWithdrawalMocks = {
  approved: true
};

const balanceHistoryMock = [
  {
    type: "Crédito",
    description: "Repasse cobrança",
    counterparty: "Bocom BBM S.A",
    amount: 86000,
    date: "2019-11-10"
  }
];

const eventsMock = [
  {
    type: "Crédito",
    description: "Repasse cobrança",
    counterparty: "Bocom BBM S.A",
    amount: 55000,
    date: "2019-11-10"
  }
];

const errorMock = { message: "mock error" };
const expectedErrorResponse = { error: errorMock };

describe("positions action", () => {
  beforeEach(() => {
    getAccountsMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(accountsMock)
      })
    );

    getBalanceMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(balanceMock)
      })
    );

    getEquitiesMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(equitiesMock)
      })
    );

    getFundsMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fundsMock)
      })
    );

    getFixedIncomeMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fixedIncomeMock)
      })
    );

    getTotalByType.mockImplementation(value => {
      totalsMock[0].assetType = value;
      return Promise.resolve({
        json: () => Promise.resolve(totalsMock)
      });
    });

    getLcaTotal.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(lcaMock)
      })
    );

    getValuesSuggestion.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(valuesSuggestionMock)
      })
    );

    getPriorityTypesAPI.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(responsePriorityTypes)
      })
    );

    postLcaDetailsAPI.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(responseLcaMocks)
      })
    );

    getAllLcaDetailsAPI.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(responseLcaMocks)
      })
    );

    getEventsMock.mockImplementation(() =>
      Promise.resolve({
        headers: {
          get: () => 50
        },
        json: () => Promise.resolve(eventsMock)
      })
    );

    getEventsMock.mockImplementation(() =>
      Promise.resolve({
        headers: {
          get: () => 50
        },
        json: () => Promise.resolve(eventsMock)
      })
    );

    getBalanceHistoryMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(balanceHistoryMock)
      })
    );

    postToWithdrawalAPI.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(responseToWithdrawalMocks)
      })
    );

    postToAproveWithdrawalAPI.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(responseToAproveWithdrawalMocks)
      })
    );
  });

  it("Should return an action object", () => {
    expect(Object.keys(position())).toEqual([
      "getAccounts",
      "getAccountsWithoutBalance",
      "getEquities",
      "getFixedIncome",
      "getFunds",
      "getTotalEquities",
      "getTotalFunds",
      "getTotalFixedIncome",
      "getTotalLca",
      "getSuggestionValues",
      "getPriorityTypes",
      "postLcaDetails",
      "resetUuid",
      "getAllLcaDetails",
      "postToWithdrawal",
      "postToAproveWithdrawal",
      "getBalance",
      "getBalanceAndEventsHistory",
      "getStatementsCnab",
      "getFutureEventsHistory",
      "createFixedIncomeRedemption",
      "getLimitLca"
    ]);
  });

  describe("getAccounts", () => {
    it("Should return accounts with balance", async () => {
      const { getAccounts } = position();

      const accounts = await getAccounts();
      expect(accounts).toEqual({
        accounts: [
          {
            account: 1,
            accountNumber: "107 2 4-3",
            blockedBalance: 7,
            availableBalance: 6,
            totalBalance: 5,
            date: "12/12",
            document: "",
            holderId: "",
            name: "",
            bankISPB: "2312321",
            verifyingDigit: 3,
            number: 4,
            branch: 2,
            bankCode: 107
          }
        ]
      });
    });

    it("Should return accounts without balance", async () => {
      const { getAccountsWithoutBalance } = position();

      const accounts = await getAccountsWithoutBalance();
      expect(accounts).toEqual({
        responseAccounts: [
          {
            bankCode: 107,
            bankISPB: "2312321",
            branch: 2,
            id: 1,
            number: 4,
            verifyingDigit: 3
          }
        ]
      });
    });

    it("Should invoke getAccounts", async () => {
      const { getAccounts } = position();

      await getAccounts();
      expect(getAccountsMock).toHaveBeenCalled();
    });

    it("Should invoke getAccounts withou balance", async () => {
      const { getAccountsWithoutBalance } = position();

      await getAccountsWithoutBalance();
      expect(getAccountsMock).toHaveBeenCalled();
    });

    it("Should invoke getBalance", async () => {
      const { getAccounts } = position();

      await getAccounts();
      expect(getBalanceMock).toHaveBeenCalledWith(1, false);
    });
    it("Should getBalance with error", async () => {
      getAccountsMock.mockImplementation(() => Promise.reject(errorMock));
      const { getAccounts } = position();
      const response = await getAccounts();
      expect(response).toEqual(expectedErrorResponse);
    });

    it("should getAccounts with error", async () => {
      getAccountsMock.mockImplementation(() => Promise.reject(errorMock));

      const { getAccounts } = position();
      const response = await getAccounts();
      expect(response).toEqual(expectedErrorResponse);
    });

    it("should getAccountsWithoutBalance with error", async () => {
      getAccountsMock.mockImplementation(() => Promise.reject(errorMock));

      const { getAccountsWithoutBalance } = position();
      const response = await getAccountsWithoutBalance();
      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getEquities", () => {
    it("Should invoke getEquities", async () => {
      const { getEquities } = position();

      await getEquities();
      expect(getEquitiesMock).toHaveBeenCalled();
    });

    it("Should return equities", async () => {
      const { getEquities } = position();

      const equities = await getEquities();
      expect(equities).toEqual({
        equities: [
          {
            name: "equities"
          }
        ]
      });
    });
    it("Should getEquities with error", async () => {
      getEquitiesMock.mockImplementation(() => Promise.reject(errorMock));
      const { getEquities } = position();
      const response = await getEquities();
      expect(response).toEqual(expectedErrorResponse);
    });

    it("should getEquities with error", async () => {
      getEquitiesMock.mockImplementation(() => Promise.reject(errorMock));

      const { getEquities } = position();
      const response = await getEquities();
      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getFunds", () => {
    it("Should invoke getFunds", async () => {
      const { getFunds } = position();

      await getFunds();
      expect(getFundsMock).toHaveBeenCalledWith(undefined);
    });

    it("Should return funds", async () => {
      const { getFunds } = position();

      const funds = await getFunds();
      expect(funds).toEqual({
        funds: [
          {
            name: "funds"
          }
        ]
      });
    });
    it("Should getFunds with error", async () => {
      getFundsMock.mockImplementation(() => Promise.reject(errorMock));
      const { getFunds } = position();
      const response = await getFunds();
      expect(response).toEqual(expectedErrorResponse);
    });

    it("should getFunds with error", async () => {
      getFundsMock.mockImplementation(() => Promise.reject(errorMock));

      const { getFunds } = position();
      const response = await getFunds();
      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getFixedIncome", () => {
    it("Should invoke getFixedIncome", async () => {
      const { getFixedIncome } = position();

      await getFixedIncome();
      expect(getFixedIncomeMock).toHaveBeenCalledWith();
    });

    it("Should return fixedIncome", async () => {
      const { getFixedIncome } = position();

      const fixedIncome = await getFixedIncome();
      expect(fixedIncome).toEqual({
        fixedIncome: [
          {
            name: "fixedIncome"
          }
        ]
      });
    });
    it("Should getFixedIncome with error", async () => {
      getFixedIncomeMock.mockImplementation(() => Promise.reject(errorMock));
      const { getFixedIncome } = position();
      const response = await getFixedIncome();
      expect(response).toEqual(expectedErrorResponse);
    });

    it("should getFixedIncome with error", async () => {
      getFixedIncomeMock.mockImplementation(() => Promise.reject(errorMock));

      const { getFixedIncome } = position();
      const response = await getFixedIncome();
      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getTotalFixedIncome", () => {
    it("Should invoke getTotalByType", async () => {
      const { getTotalFixedIncome } = position();

      await getTotalFixedIncome();
      expect(getTotalByType).toHaveBeenCalledWith("FixedIncome");
    });

    it("Should return the total", async () => {
      const { getTotalFixedIncome } = position();

      const total = await getTotalFixedIncome();
      expect(total).toEqual({
        totalFixedIncome: {
          assetType: "FixedIncome",
          netBalance: 123
        }
      });
    });
    it("Should getTotalFixedIncome with error", async () => {
      getTotalByType.mockImplementation(() => Promise.reject(errorMock));
      const { getTotalFixedIncome } = position();
      const response = await getTotalFixedIncome();
      expect(response).toEqual(expectedErrorResponse);
    });

    it("should getTotalFixedIncome with error", async () => {
      getTotalByType.mockImplementation(() => Promise.reject(errorMock));

      const { getTotalFixedIncome } = position();
      const response = await getTotalFixedIncome();
      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getTotalFunds", () => {
    it("Should invoke getTotalByType", async () => {
      const { getTotalFunds } = position();

      await getTotalFunds();
      expect(getTotalByType).toHaveBeenCalledWith("Funds");
    });

    it("Should return the total", async () => {
      const { getTotalFunds } = position();
      //aqui
      const total = await getTotalFunds();
      expect(total).toEqual({
        totalFunds: {
          assetType: "Funds",
          netBalance: 123
        }
      });
    });
    it("Should getTotalFunds with error", async () => {
      getTotalByType.mockImplementation(() => Promise.reject(errorMock));
      const { getTotalFunds } = position();
      const response = await getTotalFunds();
      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getEquities", () => {
    it("Should invoke getTotalByType", async () => {
      const { getTotalEquities } = position();

      await getTotalEquities();
      expect(getTotalByType).toHaveBeenCalledWith("Equity");
    });

    it("Should return the total", async () => {
      const { getTotalEquities } = position();

      const total = await getTotalEquities();
      expect(total).toEqual({
        totalEquities: {
          assetType: "Equity",
          netBalance: 123
        }
      });
    });
    it("Should getEquities with error", async () => {
      getTotalByType.mockImplementation(() => Promise.reject(errorMock));
      const { getTotalEquities } = position();
      const response = await getTotalEquities();
      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getLca", () => {
    it("Should invoke getTotalLca", async () => {
      const { getTotalLca } = position();

      await getTotalLca();
      expect(getLcaTotal).toHaveBeenCalled();
    });

    it("Should return the total", async () => {
      const { getTotalLca } = position();

      const total = await getTotalLca();
      expect(total).toEqual({ totalLca: "NaN", totalLcaRaw: undefined });
    });
    it("Should getLca with error", async () => {
      getLcaTotal.mockImplementation(() => Promise.reject(errorMock));
      const { getTotalLca } = position();
      const response = await getTotalLca();
      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getSuggestionValues", () => {
    it("Should invoke getValuesSuggestion", async () => {
      const params = {
        priorityType: {
          id: 1,
          name: "Priority by Earlier Maturity Date"
        },
        withdrawalValue: 35000
      };
      const { getSuggestionValues } = position();

      const response = await getSuggestionValues(
        params.priorityType,
        params.withdrawalValue
      );
      expect(getValuesSuggestion).toHaveBeenCalledWith(35000, undefined);
      expect(response).toEqual({
        totalMax: {
          maxPositions: undefined,
          totalMaxValue: {
            maxPositions: [
              { positionId: "541758", quantity: 3 },
              { positionId: "541761", quantity: 7 },
              { positionId: "541764", quantity: 19 }
            ],
            totalMaxValue: 30700
          }
        },
        totalMin: {
          minPositions: undefined,
          totalMinValue: {
            minPositions: [
              { positionId: "541758", quantity: 3 },
              { positionId: "541761", quantity: 7 },
              { positionId: "541764", quantity: 18 }
            ],
            totalMinValue: 29900
          }
        }
      });
    });
    it("Should getSuggestionValues with error", async () => {
      getValuesSuggestion.mockImplementation(() => Promise.reject(errorMock));
      const { getSuggestionValues } = position();
      const response = await getSuggestionValues();
      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getPriorityTypes", () => {
    it("Should invoke getPriorityTypes", async () => {
      const { getPriorityTypes } = position();

      await getPriorityTypes();
      expect(getPriorityTypesAPI).toHaveBeenCalled();
    });

    it("Should return priority types", async () => {
      const { getPriorityTypes } = position();

      const priority = await getPriorityTypes();
      expect(priority).toEqual({
        priorities: [{ id: 1, name: undefined }, { id: 2, name: undefined }]
      });
    });
    it("Should getPriorityTypes with error", async () => {
      getPriorityTypesAPI.mockImplementation(() => Promise.reject(errorMock));
      const { getPriorityTypes } = position();
      const response = await getPriorityTypes();
      expect(response).toEqual(expectedErrorResponse);
    });

    it("should getTotalEquities with error", async () => {
      getTotalByType.mockImplementation(() => Promise.reject(errorMock));

      const { getTotalEquities } = position();
      const response = await getTotalEquities();
      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("postLcaDetails", () => {
    it("Should invoke postLcaDetails", async () => {
      const { postLcaDetails } = position();
      const body = { detailsLca: "mock" };
      await postLcaDetails(body);
      expect(postLcaDetailsAPI).toHaveBeenCalled();
    });

    it("Should return the total", async () => {
      const { postLcaDetails } = position();

      const total = await postLcaDetails();
      expect(total).toEqual({ responseLcaDetails: undefined });
    });
    it("Should postLcaDetails with error", async () => {
      postLcaDetailsAPI.mockImplementation(() => Promise.reject(errorMock));

      const { postLcaDetails } = position();

      const response = await postLcaDetails();
      expect(response).toEqual({ error: { message: "mock error" } });
    });
  });

  describe("getBalance", () => {
    it("Should invoke getBalance", async () => {
      const { getBalance } = position();
      await getBalance(null, 12345);
      expect(getBalanceMock).toHaveBeenCalledWith(12345);
    });

    it("should getBalance with error", async () => {
      getBalanceMock.mockImplementation(() => Promise.reject(errorMock));

      const { getBalance } = position();
      const response = await getBalance();
      expect(response).toEqual(expectedErrorResponse);
    });
  });

  it("Should invoke getStatementsCnab", async () => {
    const params = {
      range: {
        from: "2021-05-19T09:20:54-03:00",
        to: "2021-08-17T09:20:54-03:00"
      }
    };

    getCnabMock.mockImplementation(() => Promise.resolve("teste"));

    const { getStatementsCnab } = position();

    await getStatementsCnab("", { account: 1234 }, params);
    expect(getCnabMock).toHaveBeenCalledWith(1234, "2021-05-19", "2021-08-17");
  });

  describe("getAllLcaDetails", () => {
    it("Should invoke getAllLcaDetails", async () => {
      const { getAllLcaDetails } = position();
      const body = { detailsLca: "mock" };

      await getAllLcaDetails(body);
      expect(getAllLcaDetailsAPI).toHaveBeenCalled();
    });

    it("Should return the total", async () => {
      const { getAllLcaDetails } = position();

      const total = await getAllLcaDetails();
      expect(total).toEqual({ responseLcaDetails: undefined });
    });
    it("Should getAllLcaDetails with error", async () => {
      getAllLcaDetailsAPI.mockImplementation(() => Promise.reject(errorMock));

      const { getAllLcaDetails } = position();

      const response = await getAllLcaDetails();

      expect(response).toEqual({ error: { message: "mock error" } });
    });
  });

  describe("postToWithdrawal", () => {
    it("Should invoke postToWithdrawal", async () => {
      const { postToWithdrawal } = position();
      const body = { query: "mock" };

      await postToWithdrawal(body);
      expect(postToWithdrawalAPI).toHaveBeenCalled();
    });

    it("Should return the total", async () => {
      const { postToWithdrawal } = position();

      const total = await postToWithdrawal();
      expect(total).toEqual({
        responseToWithdrawal: {
          message: "successful withdrawal",
          statusCode: 201
        }
      });
    });

    it("should put confirmation and get error", async () => {
      postToWithdrawalAPI.mockImplementation(() => Promise.reject(errorMock));

      const { postToWithdrawal } = position();

      try {
        await postToWithdrawal();
      } catch (error) {
        expect(error).toEqual(errorMock);
      }
    });
  });

  describe("postToAproveWithdrawal", () => {
    it("Should invoke postToWithdrawal", async () => {
      const { postToAproveWithdrawal } = position();
      const body = { query: "mock", key: "000" };

      await postToAproveWithdrawal(body);
      expect(postToAproveWithdrawalAPI).toHaveBeenCalled();
    });

    it("Should return the responseToAproveWithdrawal", async () => {
      const { postToAproveWithdrawal } = position();

      const responseToAproveWithdrawal = await postToAproveWithdrawal();
      expect(responseToAproveWithdrawal).toEqual({
        responseToAproveWithdrawal: { approved: true }
      });
    });

    it("should put confirmation and get error", async () => {
      postToAproveWithdrawalAPI.mockImplementation(() =>
        Promise.reject(errorMock)
      );
      const { postToAproveWithdrawal } = position();

      try {
        await postToAproveWithdrawal();
      } catch (error) {
        expect(error).toEqual(errorMock);
      }
    });
  });

  describe("reset uuids", () => {
    it("Should clear errors", async () => {
      const { resetUuid } = position();

      expect(resetUuid()).toEqual({ randomUuid: undefined });
    });
  });

  describe("getBalanceAndEventsHistory", () => {
    it("should getBalanceAndEventsHistory with error", async () => {
      getEventsMock.mockImplementation(() => Promise.reject(errorMock));

      const { getBalanceAndEventsHistory } = position();
      const response = await getBalanceAndEventsHistory(null, 123, {
        range: { from: "2019-11-10", to: "2019-11-15" }
      });
      expect(response).toEqual(expectedErrorResponse);
    });
  });
});
