import lca from "./index";

jest.mock("../../../services/invesmentProducts/FixedIncome");
const getInvestmentLCAMock = require("../../../services/invesmentProducts/FixedIncome")
  .getInvestmentFI;
const createSubscriptionFIMock = require("../../../services/invesmentProducts/FixedIncome")
  .createSubscriptionFI;
const approveSubscriptionFIMock = require("../../../services/invesmentProducts/FixedIncome")
  .approveSubscriptionFI;
const getPendingTransactionsFIMock = require("../../../services/invesmentProducts/FixedIncome")
  .getPendingTransactionsFI;

getInvestmentLCAMock.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);

createSubscriptionFIMock.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);

approveSubscriptionFIMock.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);

getPendingTransactionsFIMock.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);

const errorMock = { message: "mock error" };
const expectedErrorResponse = { error: errorMock };

describe("lca action", () => {
  it("should return an action object", () => {
    expect(typeof lca() === "object").toBeTruthy();
    expect(Object.keys(lca())).toEqual([
      "getInvestmentFI",
      "createSubscriptionFI",
      "approveSubscriptionFI",
      "getPendingTransactionsFI"
    ]);
  });

  describe("getInvestmentFI", () => {
    it("Should invoke getInvestmentFI", async () => {
      const { getInvestmentFI } = lca();

      const response = await getInvestmentFI();
      expect(response).toEqual({ investmentFI: [] });
    });

    it("Should invoke getInvestmentFI with error", async () => {
      getInvestmentLCAMock.mockImplementation(() => Promise.reject(errorMock));

      const { getInvestmentFI } = lca();
      const response = await getInvestmentFI();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("createSubscriptionFI", () => {
    it("Should invoke createSubscriptionFI", async () => {
      const { createSubscriptionFI } = lca();

      const response = await createSubscriptionFI({});
      expect(response).toEqual({ subscription: [] });
    });

    it("Should invoke getInvestmentFI with error", async () => {
      createSubscriptionFIMock.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { getInvestmentFI } = lca();
      const response = await getInvestmentFI();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("approveSubscriptionFI", () => {
    let state;
    beforeEach(() => {
      state = { payload: "mock", key: "1234" };
    });
    it("Should invoke approveSubscriptionFI", async () => {
      const { approveSubscriptionFI } = lca();
      await approveSubscriptionFI({ mfaTokenParams: state }, 1);
      expect(approveSubscriptionFIMock).toHaveBeenCalled();
    });

    it("Should invoke approveSubscriptionFI with error", async () => {
      approveSubscriptionFIMock.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { approveSubscriptionFI } = lca();

      try {
        await approveSubscriptionFI({ mfaTokenParams: state }, 1);
      } catch (error) {
        expect(error).toEqual(expectedErrorResponse);
      }
    });
  });

  describe("getPendingTransactionsFIMock", () => {
    it("Should invoke getPendingTransactionsFIMock", async () => {
      const { getPendingTransactionsFI } = lca();

      const response = await getPendingTransactionsFI();
      expect(response).toEqual({ pendingTransactionsFI: [] });
    });

    it("Should invoke getPendingTransactionsFIMock with error", async () => {
      getPendingTransactionsFIMock.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { getPendingTransactionsFI } = lca();
      const response = await getPendingTransactionsFI();

      expect(response).toEqual(expectedErrorResponse);
    });
  });
});
