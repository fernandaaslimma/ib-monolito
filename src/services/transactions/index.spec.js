import {
  getFixedIncomeTransactions,
  getEquityIncomeTransactions,
  getFundsIncomeTransactions,
  getCashAccountTransactions,
  getUserCashAccount,
  getAccountBalanceByDate
} from "./index";

jest.mock("../../utils/fetchHandler");

const fetchHandlerMock = require("../../utils/fetchHandler").default;

let fetchHandlerImplementation;

global.__API__ = "http://localhost";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("getFixedIncomeTransactions", () => {
  describe("getFixedIncomeTransactions", () => {
    it("Should call fetchHandler with right API url", done => {
      getFixedIncomeTransactions("01-01-2016", "01-01-2018", 0, 10).then(
        resp => {
          expect(resp).toBe(
            `${__API__}/clientportfolio/v1/fixedincome/transactions?dateFrom=01-01-2016&dateTo=01-01-2018&limit=10&offset=0`
          );
          done();
        }
      );
    });
  });

  describe("getEquityIncomeTransactions", () => {
    it("Should call fetchHandler with right API url", done => {
      getEquityIncomeTransactions("01-01-2016", "01-01-2018", 0, 10).then(
        resp => {
          expect(resp).toBe(
            `${__API__}/clientportfolio/v1/equity/transactions?dateFrom=01-01-2016&dateTo=01-01-2018&limit=10&offset=0`
          );
          done();
        }
      );
    });
  });

  describe("getFundsIncomeTransactions", () => {
    it("Should call fetchHandler with right API url", done => {
      getFundsIncomeTransactions("01-01-2016", "01-01-2018", 0, 10).then(
        resp => {
          expect(resp).toBe(
            `${__API__}/clientportfolio/v1/funds/transactions?dateFrom=01-01-2016&dateTo=01-01-2018&limit=10&offset=0`
          );
          done();
        }
      );
    });
  });
  describe("getUserCashAccount", () => {
    it("Should call fetchHandler with right API url", done => {
      getUserCashAccount().then(resp => {
        expect(resp).toBe(`${__API__}/clientportfolio/v1/cashaccounts`);
        done();
      });
    });
  });
  describe("getCashAccountTransactions", () => {
    it("Should call fetchHandler with right API url", done => {
      getCashAccountTransactions(61514, "2018-01-01", "2018-02-01").then(
        resp => {
          expect(resp).toBe(
            `${__API__}/clientportfolio/v1/cashaccounts/61514/events?dateFrom=2018-01-01&dateTo=2018-02-01`
          );
          done();
        }
      );
    });
  });
  describe("getAccountBalanceByDate", () => {
    it("Should call fetchHandler with right API url", done => {
      getAccountBalanceByDate(61514, "2018-05-21").then(resp => {
        expect(resp).toBe(
          `${__API__}/clientportfolio/v1/cashaccounts/61514/balance-history?date=2018-05-21`
        );
        done();
      });
    });
  });
});
