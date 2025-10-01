import {
  getInvestmentFunds,
  getSubscriptionsPendencies,
  createSubscription,
  approveSubscription,
  getPendingTransactions,
  getPendingTransactionsFunds,
  createRedemption,
  approveRedemption
} from "./index";

jest.mock("../../utils/fetchHandler");

const fetchHandlerMock = require("../../utils/fetchHandler").default;

let fetchHandlerImplementation;

global.__API__ = "";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("investment products", () => {
  describe("getInvestmentFunds", () => {
    it("Should call fetchHandler with right API url", done => {
      getInvestmentFunds({ showClosedFunds: true }).then(resp => {
        expect(resp).toBe(`${__API__}/torfunds/v1/funds?ShowClosedFunds=true`);
        done();
      });
    });
  });

  describe("createSubscription", () => {
    it("Should call fetchHandler with right API url", done => {
      getSubscriptionsPendencies("body").then(resp => {
        expect(resp).toBe(
          `${__API__}/clientdocumentsubmission/v1/subscriptions/pendencies`
        );
        done();
      });
    });
  });

  describe("getSubscriptionsPendencies", () => {
    it("Should call fetchHandler with right API url", done => {
      createSubscription().then(resp => {
        expect(resp).toBe(`${__API__}/torfunds/v1/subscriptions`);
        done();
      });
    });
  });

  describe("approveSubscription", () => {
    it("Should call fetchHandler with right API url", done => {
      approveSubscription("12345", "body").then(resp => {
        expect(resp).toBe(`${__API__}/torfunds/v1/subscriptions/12345/confirm`);
        done();
      });
    });
  });

  describe("getPendingTransactions", () => {
    it("Should call fetchHandler with right API url", done => {
      getPendingTransactions().then(resp => {
        expect(resp).toBe(`${__API__}/tor/v1/pendingtransactions`);
        done();
      });
    });
  });

  describe("getPendingTransactionsFunds", () => {
    it("Should call fetchHandler with right API url", done => {
      getPendingTransactionsFunds().then(resp => {
        expect(resp).toBe(`${__API__}/torfunds/v1/pendingtransactions`);
        done();
      });
    });
  });

  describe("createRedemption", () => {
    it("Should call fetchHandler with right API url", done => {
      createRedemption("body").then(resp => {
        expect(resp).toBe(`${__API__}/torfunds/v1/redemptions`);
        done();
      });
    });
  });

  describe("approveRedemption", () => {
    it("Should call fetchHandler with right API url", done => {
      approveRedemption("12345", "body").then(resp => {
        expect(resp).toBe(`${__API__}/torfunds/v1/redemptions/12345/confirm`);
        done();
      });
    });
  });
});
