import transactions from "./index";

jest.mock("../../services/transactions");

const getFixedIncomeTransactionsMock = require("../../services/transactions")
  .getFixedIncomeTransactions;
const getFundsIncomeTransactionsMock = require("../../services/transactions")
  .getFundsIncomeTransactions;
const getEquityIncomeTransactionsMock = require("../../services/transactions")
  .getEquityIncomeTransactions;
const getUserCashAccountMock = require("../../services/transactions")
  .getUserCashAccount;
const getCashAccountTransactionsMock = require("../../services/transactions")
  .getCashAccountTransactions;
const getAccountBalanceByDateMock = require("../../services/transactions")
  .getAccountBalanceByDate;

const fixedIncomeTransactionsMock = [
  {
    assetName: "COMPROMISSADA",
    type: "COMPRA",
    date: "2016-05-02",
    grossValue: 87570.15,
    netValue: 87570.15,
    incomeTax: 0,
    iof: 0
  },
  {
    assetName: "COMPROMISSADA",
    type: "RESGATE ANTECIPADO",
    date: "2016-05-11",
    grossValue: -87876.11,
    netValue: -87807.27,
    incomeTax: 68.84,
    iof: 0
  },
  {
    assetName: "LCA - Pós",
    type: "VENCIMENTO",
    date: "2017-03-02",
    grossValue: -19984.22,
    netValue: -19984.22,
    incomeTax: 0,
    iof: 0
  }
];

const fundsIncomeTransactionsMock = [
  {
    assetName: "BAHIA AM FI REFERENCIADO DI",
    type: "APLICAÇÃO",
    date: "2016-05-05",
    grossValue: 13526.47,
    netValue: 13526.47,
    incomeTax: 0,
    iof: 0
  },
  {
    assetName: "BAHIA AM FI REFERENCIADO DI",
    type: "RESGATE PARA PAG. DE IR",
    date: "2016-05-31",
    grossValue: -15.34,
    netValue: 0,
    incomeTax: 15.34,
    iof: 0
  },
  {
    assetName: "BAHIA AM FI REFERENCIADO DI",
    type: "RESGATE PARA PAG. DE IR",
    date: "2016-05-31",
    grossValue: -286.47,
    netValue: 0,
    incomeTax: 286.47,
    iof: 0
  }
];

const equityIncomeTransactionsMock = [
  {
    assetName: "PORD11 CI",
    type: "COMPRA",
    date: "2016-03-29",
    grossValue: 141504,
    netValue: 141504
  }
];

const cashAccountTransactionsMock = [
  {
    amount: 78351.22,
    date: "2018-01-03",
    type: "CRÉDITO"
  },
  {
    amount: 4923.16,
    date: "2018-01-08",
    type: "CRÉDITO"
  },
  {
    amount: -87879.5,
    date: "2018-01-09",
    type: "DÉBITO"
  },
  {
    amount: 88038.51,
    date: "2018-01-22",
    type: "CRÉDITO"
  },
  {
    amount: -91651.78,
    date: "2018-01-22",
    type: "DÉBITO"
  }
];

const userCashAccountMock = [
  {
    id: 61514,
    bankISPB: "15114366",
    bankCode: "107",
    branch: 2,
    number: 308642,
    verifyingDigit: "4",
    holders: [
      {
        id: 66554,
        name: "cliente42203",
        document: "12114474135"
      }
    ],
    type: "CC"
  }
];

const userCashAccountNameMock = "308642-4";

const openBalanceMock = {
  date: "2018-04-01",
  openBalance: 6903.2,
  closeBalance: 6903.2
};

const closeBalanceMock = {
  closeBalance: 6903.2,
  date: "2018-04-01",
  openBalance: 6903.2
};

const totalCount = 450;

describe("transactions actions", () => {
  beforeEach(() => {
    getFixedIncomeTransactionsMock.mockImplementation(() =>
      Promise.resolve({
        headers: {
          get: () => totalCount
        },
        json: () => Promise.resolve(fixedIncomeTransactionsMock)
      })
    );

    getFundsIncomeTransactionsMock.mockImplementation(() =>
      Promise.resolve({
        headers: {
          get: () => totalCount
        },
        json: () => Promise.resolve(fundsIncomeTransactionsMock)
      })
    );

    getEquityIncomeTransactionsMock.mockImplementation(() =>
      Promise.resolve({
        headers: {
          get: () => totalCount
        },
        json: () => Promise.resolve(equityIncomeTransactionsMock)
      })
    );

    getUserCashAccountMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(userCashAccountMock)
      })
    );

    getCashAccountTransactionsMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(cashAccountTransactionsMock)
      })
    );

    getAccountBalanceByDateMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(openBalanceMock)
      })
    );
  });

  it("Should return an action object", () => {
    expect(Object.keys(transactions())).toEqual([
      "getFixedIncomeTransactions",
      "getFundsIncomeTransactions",
      "getEquityIncomeTransactions",
      "getUserCashAccountTransactions"
    ]);
  });

  describe("getFixedIncomeTransactions", () => {
    it("Should returns fixed incometransactions", async () => {
      const { getFixedIncomeTransactions } = transactions();

      const fixedIncomeTransactions = await getFixedIncomeTransactions();
      expect(fixedIncomeTransactions).toEqual({
        fixedIncomeTransactions: fixedIncomeTransactionsMock,
        totalCount
      });
    });

    it("Should invoke getFixedIncomeTransactions", async () => {
      const { getFixedIncomeTransactions } = transactions();

      await getFixedIncomeTransactions();
      expect(getFixedIncomeTransactionsMock).toHaveBeenCalledWith(
        "",
        "",
        0,
        10
      );
    });
  });

  describe("getFundsIncomeTransactions", () => {
    it("Should returns funds incometransactions", async () => {
      const { getFundsIncomeTransactions } = transactions();

      const fundsIncomeTransactions = await getFundsIncomeTransactions();
      expect(fundsIncomeTransactions).toEqual({
        fundsIncomeTransactions: fundsIncomeTransactionsMock,
        totalCount
      });
    });

    it("Should invoke getFundsIncomeTransactions", async () => {
      const { getFundsIncomeTransactions } = transactions();

      await getFundsIncomeTransactions();
      expect(getFundsIncomeTransactionsMock).toHaveBeenCalledWith(
        "",
        "",
        0,
        10
      );
    });
  });

  describe("getEquityIncomeTransactions", () => {
    it("Should returns equity incometransactions", async () => {
      const { getEquityIncomeTransactions } = transactions();

      const equityIncomeTransactions = await getEquityIncomeTransactions();
      expect(equityIncomeTransactions).toEqual({
        equityIncomeTransactions: equityIncomeTransactionsMock,
        totalCount
      });
    });

    it("Should invoke getEquityIncomeTransactions", async () => {
      const { getEquityIncomeTransactions } = transactions();

      await getEquityIncomeTransactions();
      expect(getEquityIncomeTransactionsMock).toHaveBeenCalledWith(
        "",
        "",
        0,
        10
      );
    });
  });

  describe("getUserCashAccountTransactions", () => {
    it("Should returns user cash accounttransactions", async () => {
      const { getUserCashAccountTransactions } = transactions();

      const userCashAccountTransactions = await getUserCashAccountTransactions();
      expect(userCashAccountTransactions).toEqual({
        cashAccounts: [
          {
            userCashAccount: userCashAccountNameMock,
            cashAccountTransactions: cashAccountTransactionsMock,
            accountOpenBalance: openBalanceMock,
            accountCloseBalance: closeBalanceMock
          }
        ]
      });
    });

    it("Should invoke getUserCashAccountTransactions", async () => {
      const { getUserCashAccountTransactions } = transactions();

      await getUserCashAccountTransactions(null, "2018-04-21", "2018-05-21");
      expect(getUserCashAccountMock).toHaveBeenCalledWith();
      expect(getCashAccountTransactionsMock).toHaveBeenCalledWith(
        61514,
        "2018-05-21",
        "2018-04-21"
      );
      expect(getAccountBalanceByDateMock).toHaveBeenCalledWith(
        61514,
        "2018-05-21"
      );
      expect(getAccountBalanceByDateMock).toHaveBeenCalledWith(
        61514,
        "2018-04-21"
      );
    });
  });
});
