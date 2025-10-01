import funds from "./index";

jest.mock("../../services/invesmentProducts");
const getInvestmentFundsMock = require("../../services/invesmentProducts")
  .getInvestmentFunds;

getInvestmentFundsMock.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);
const getFundsPendenciesMock = require("../../services/invesmentProducts")
  .getSubscriptionsPendencies;
getFundsPendenciesMock.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve({ mock: "mock" })
  })
);
const createSubscriptionMock = require("../../services/invesmentProducts")
  .createSubscription;
const approveSubscriptionMock = require("../../services/invesmentProducts")
  .approveSubscription;
const createRedemptionMock = require("../../services/invesmentProducts")
  .createRedemption;
const approveRedemptionMock = require("../../services/invesmentProducts")
  .approveRedemption;
const getPendingTransactionsMock = require("../../services/invesmentProducts")
  .getPendingTransactions;

getPendingTransactionsMock.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);

const errorMock = { message: "mock error" };
const expectedErrorResponse = { error: errorMock };

describe("funds action", () => {
  it("should return an action object", () => {
    expect(typeof funds() === "object").toBeTruthy();
    expect(Object.keys(funds())).toEqual([
      "getInvestmentFunds",
      "getSubscriptionsPendencies",
      "createSubscription",
      "approveSubscription",
      "createRedemption",
      "approveRedemption",
      "getPendingTransactions",
      "getPendingTransactionsFunds",
      "downloadTermsFunds"
    ]);
  });

  describe("getInvestmentFunds", () => {
    it("Should invoke getInvestmentFunds", async () => {
      const { getInvestmentFunds } = funds();

      const response = await getInvestmentFunds({ showClosedFunds: true });
      expect(response).toEqual({ investmentFunds: [] });
    });

    it("Should invoke getInvestmentFunds with error", async () => {
      getInvestmentFundsMock.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { getInvestmentFunds } = funds();
      const response = await getInvestmentFunds();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getSubscriptionsPendencies", () => {
    const state = {
      userInfo: {
        givenName: "Yuri",
        surname: "Ramos",
        document: "11111111111",
        corpoId: 111
      }
    };
    it("Should invoke getSubscriptionsPendencies", async () => {
      const { getSubscriptionsPendencies } = funds();

      const response = await getSubscriptionsPendencies(state);
      expect(response).toEqual({ subscriptionsPendencies: { mock: "mock" } });
    });

    it("Should invoke getSubscriptionsPendencies with error", async () => {
      getFundsPendenciesMock.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { getSubscriptionsPendencies } = funds();
      const response = await getSubscriptionsPendencies();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("createSubscription", () => {
    it("should invoke with successs", async () => {
      createSubscriptionMock.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve("mock")
        })
      );

      const { createSubscription } = funds();
      const getResponse = await createSubscription({});

      expect(getResponse).toEqual({ subscription: "mock" });
    });

    it("should createSubscriptionMock with error", async () => {
      createSubscriptionMock.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { createSubscription } = funds();
      const response = await createSubscription();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("approveSubscription", () => {
    let state;
    beforeEach(() => {
      state = { payload: "mock", key: "1234" };
    });

    it("should invoke with successs", async () => {
      const { approveSubscription } = funds();
      await approveSubscription({ mfaTokenParams: state }, 1);

      expect(approveSubscriptionMock).toHaveBeenCalled();
    });

    it("should approveSubscriptionMock with error", async () => {
      approveSubscriptionMock.mockImplementation(() =>
        Promise.reject(errorMock)
      );
      const { approveSubscription } = funds();

      try {
        await approveSubscription({ mfaTokenParams: state }, 1);
      } catch (error) {
        expect(error).toEqual(expectedErrorResponse);
      }
    });
  });

  describe("createRedemption", () => {
    it("should invoke with successs", async () => {
      createRedemptionMock.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve("mock")
        })
      );

      const { createRedemption } = funds();
      const getResponse = await createRedemption({});

      expect(getResponse).toEqual({ redemption: "mock" });
    });

    it("should approveSubscriptionMock with error", async () => {
      createRedemptionMock.mockImplementation(() => Promise.reject(errorMock));
      const { createRedemption } = funds();

      try {
        await createRedemption();
      } catch (error) {
        expect(error).toEqual(expectedErrorResponse);
      }
    });
  });

  describe("approveRedemption", () => {
    let state;
    beforeEach(() => {
      state = { payload: "mock", key: "1234" };
    });

    it("should invoke with successs", async () => {
      const { approveRedemption } = funds();
      await approveRedemption({ mfaTokenParams: state }, 1);

      expect(approveRedemptionMock).toHaveBeenCalled();
    });

    it("should approveRedemption with error", async () => {
      approveRedemptionMock.mockImplementation(() => Promise.reject(errorMock));
      const { approveRedemption } = funds();

      try {
        await approveRedemption({ mfaTokenParams: state }, 1);
      } catch (error) {
        expect(error).toEqual(expectedErrorResponse);
      }
    });
  });

  describe("getPendingTransactions", () => {
    it("Should invoke getPendingTransactions", async () => {
      const { getPendingTransactions } = funds();

      const response = await getPendingTransactions();
      expect(response).toEqual({ pendingTransactions: [] });
    });

    it("Should invoke getPendingTransactions with error", async () => {
      getPendingTransactionsMock.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { getPendingTransactions } = funds();
      const response = await getPendingTransactions();

      expect(response).toEqual(expectedErrorResponse);
    });
  });
});
