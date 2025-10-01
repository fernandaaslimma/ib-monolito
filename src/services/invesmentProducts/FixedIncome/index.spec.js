import {
  getInvestmentFI,
  createSubscriptionFI,
  approveSubscriptionFI,
  getPendingTransactionsFI
} from "./index";

jest.mock("../../../utils/fetchHandler");

const fetchHandlerMock = require("../../../utils/fetchHandler").default;

let fetchHandlerImplementation;

global.__API__ = "";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("investment products", () => {
  it("Should call getInvestmentFI with right API url", done => {
    getInvestmentFI().then(resp => {
      expect(resp).toBe(`${__API__}/torfixedincome/v1/products`);
      done();
    });
  });
  it("Should call getInvestmentFI with right API url", done => {
    jest.mock("../../../utils/fetchHandler", () => () =>
      Promise.reject("error")
    );

    getInvestmentFI().then(resp => {
      expect(resp).toBe("/torfixedincome/v1/products");
      done();
    });
  });
  it("Should call createSubscriptionFI with error", done => {
    jest.mock("../../../utils/fetchHandler", () => () =>
      Promise.reject("error")
    );

    createSubscriptionFI().then(resp => {
      expect(resp).toBe("/torfixedincome/v1/subscriptions");
      done();
    });
  });

  it("Should call createSubscriptionFI with right API url", done => {
    createSubscriptionFI().then(resp => {
      expect(resp).toBe(`${__API__}/torfixedincome/v1/subscriptions`);
      done();
    });
  });

  it("Should call approveSubscriptionFI with right API url", done => {
    approveSubscriptionFI(1, {}).then(resp => {
      expect(resp).toBe(`${__API__}/torfixedincome/v1/subscriptions/1/confirm`);
      done();
    });
  });

  it("Should call approveSubscriptionFI with error", done => {
    jest.mock("../../../utils/fetchHandler", () => () =>
      Promise.reject("error")
    );

    approveSubscriptionFI(1, {}).then(resp => {
      expect(resp).toBe("/torfixedincome/v1/subscriptions/1/confirm");
      done();
    });
  });

  it("Should call getPendingTransactionsFI with right API url", done => {
    getPendingTransactionsFI().then(resp => {
      expect(resp).toBe(`${__API__}/torfixedincome/v1/pendingtransactions`);
      done();
    });
  });

  it("Should call getPendingTransactionsFI with error", done => {
    jest.mock("../../../utils/fetchHandler", () => () =>
      Promise.reject("error")
    );

    getPendingTransactionsFI().then(resp => {
      expect(resp).toBe("/torfixedincome/v1/pendingtransactions");
      done();
    });
  });
});
