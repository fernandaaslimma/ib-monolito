import {
  getAccounts,
  getBalance,
  getEquities,
  getFixedIncome,
  getFunds,
  getTotalByType,
  getAssets,
  getAssetsClass,
  getLcaTotal,
  getValuesSuggestion,
  getPriorityTypesAPI,
  postLcaDetailsAPI,
  getAllLcaDetailsAPI,
  postToWithdrawalAPI,
  postToAproveWithdrawalAPI,
  getBalanceHistory,
  getEvents,
  getCnab
} from "./index";

jest.mock("../../utils/fetchHandler", () => URI => Promise.resolve(URI));

global.__API__ = "";

describe("position", () => {
  describe("getAccounts", () => {
    it("Should call fetchHandler with new API url", done => {
      getAccounts().then(resp => {
        expect(resp).toBe(`${__API__}/cashmanagement/v1/cashaccounts`);
        done();
      });
    });

    it("Should call fetchHandler with old API url", done => {
      getAccounts(true).then(resp => {
        expect(resp).toBe(`${__API__}/clientportfolio/v1/cashaccounts`);
        done();
      });
    });

    it("Should call fetchHandler with all accounts query string", done => {
      getAccounts(null, true).then(resp => {
        expect(resp).toBe(
          `${__API__}/cashmanagement/v1/cashaccounts?allAccounts=true`
        );
        done();
      });
    });
  });

  describe("getBalance", () => {
    it("Should call fetchHandler with new API url", done => {
      getBalance(1).then(resp => {
        expect(resp).toBe(
          `${__API__}/cashmanagement/v1/cashaccounts/1/balance`
        );
        done();
      });
    });

    it("Should call fetchHandler with old API url", done => {
      getBalance(1, true).then(resp => {
        expect(resp).toBe(
          `${__API__}/clientportfolio/v1/cashaccounts/1/balance`
        );
        done();
      });
    });
  });

  describe("getEquities", () => {
    it("Should call fetchHandler with right API url", done => {
      getEquities().then(resp => {
        expect(resp).toBe(`${__API__}/clientportfolio/v1/equity/position`);
        done();
      });
    });
  });

  describe("getFixedIncome", () => {
    it("Should call fetchHandler with right API url", done => {
      getFixedIncome().then(resp => {
        expect(resp).toBe(`${__API__}/clientportfolio/v1/fixedincome/position`);
        done();
      });
    });
  });

  describe("getFunds", () => {
    it("Should call fetchHandler with right API url", done => {
      getFunds().then(resp => {
        expect(resp).toBe(`${__API__}/clientportfolio/v1/funds/position`);
        done();
      });
    });
  });

  describe("getTotalByType", () => {
    it("Should call fetchHandler with right API url with params", done => {
      getTotalByType("Funds").then(resp => {
        expect(resp).toBe(
          `${__API__}/clientportfolio/v1/consolidated/totals/position?assetType=Funds`
        );
        done();
      });
    });

    it("Should call fetchHandler with right API url without params", done => {
      getTotalByType().then(resp => {
        expect(resp).toBe(
          `${__API__}/clientportfolio/v1/consolidated/totals/position`
        );
        done();
      });
    });
  });

  describe("getAssets", () => {
    it("Should call fetchHandler with right API url with params", done => {
      getAssets("Funds").then(resp => {
        expect(resp).toBe(
          `${__API__}/clientportfolio/v1/consolidated/totals/position?groupBy=AssetName&assetType=Funds`
        );
        done();
      });
    });

    it("Should call fetchHandler with right API url without params", done => {
      getAssets().then(resp => {
        expect(resp).toBe(
          `${__API__}/clientportfolio/v1/consolidated/totals/position?groupBy=AssetName`
        );
        done();
      });
    });
  });

  describe("getAssetsClass", () => {
    it("Should call fetchHandler with right API url with params", done => {
      getAssetsClass("Funds").then(resp => {
        expect(resp).toBe(
          `${__API__}/clientportfolio/v1/consolidated/totals/position?groupBy=AssetClass&assetType=Funds`
        );
        done();
      });
    });

    it("Should call fetchHandler with right API url without params", done => {
      getAssetsClass().then(resp => {
        expect(resp).toBe(
          `${__API__}/clientportfolio/v1/consolidated/totals/position?groupBy=AssetClass`
        );
        done();
      });
    });
  });

  describe("getLcaTotal", () => {
    it("Should call fetchHandler with right API url with params", done => {
      getLcaTotal().then(resp => {
        expect(resp).toBe(
          `${__API__}/investmentmanagementbff/v1/api/fixedincome/lca/total`
        );
        done();
      });
    });
  });

  describe("getBalanceHistory", () => {
    it("Should call fetchHandler with right API url with params", done => {
      getBalanceHistory(123, {
        range: { from: "2010-11-01", to: "2010-11-10" }
      }).then(resp => {
        expect(resp).toBe(
          `${__API__}/cashmanagement/v1/cashaccounts/123/balance-history?dateFrom=2010-11-01&dateTo=2010-11-10`
        );
        done();
      });
    });
  });

  describe("getCnabFile", () => {
    it("Should call fetchHandler with right API url with params", done => {
      getCnab(123, "2010-11-01", "2010-11-10").then(resp => {
        expect(resp).toBe(
          `${__API__}/cashmanagement/v1/cashaccounts/123/statement/cnab?dateFrom=2010-11-01&dateTo=2010-11-10`
        );
        done();
      });
    });
  });

  describe("getValuesSuggestion", () => {
    it("Should call fetchHandler with right API url with params", done => {
      getValuesSuggestion(1, 30000).then(resp => {
        expect(resp).toBe(
          `${__API__}/investmentmanagementbff/v1/api/fixedincome/lca/suggestedvalues/1/30000`
        );
        done();
      });
    });
  });

  describe("getPriorityTypesAPI", () => {
    it("Should call fetchHandler with right API url with params", done => {
      getPriorityTypesAPI().then(resp => {
        expect(resp).toBe(
          `${__API__}/investmentmanagementbff/v1/api/fixedincome/lca/prioritytypes`
        );
        done();
      });
    });
  });

  describe("postLcaDetailsAPI", () => {
    it("Should call fetchHandler with right API url with params", done => {
      postLcaDetailsAPI("mock").then(resp => {
        expect(resp).toBe(
          `${__API__}/investmentmanagementbff/v1/api/fixedincome/lca/details`
        );
        done();
      });
    });
  });

  describe("getAllLcaDetailsAPI", () => {
    it("Should call fetchHandler with right API url with params", done => {
      getAllLcaDetailsAPI(35000).then(resp => {
        expect(resp).toBe(
          `${__API__}/investmentmanagementbff/v1/api/fixedincome/lca/all/details/35000`
        );
        done();
      });
    });
  });

  describe("postToWithdrawalAPI", () => {
    it("Should call fetchHandler with right API url with params", done => {
      postToWithdrawalAPI("mock").then(resp => {
        expect(resp).toBe(
          `${__API__}/investmentmanagementbff/v1/api/fixedincome/lca/withdraw`
        );
        done();
      });
    });
  });

  describe("postToAproveWithdrawalAPI", () => {
    it("Should call fetchHandler with right API url with params", done => {
      postToAproveWithdrawalAPI("mock").then(resp => {
        expect(resp).toBe(
          `${__API__}/investmentmanagementbff/v1/api/fixedincome/lca/approve`
        );
        done();
      });
    });
  });

  describe("getEvents", () => {
    it("Should call fetchHandler with right API url with params", done => {
      getEvents(123, {
        range: { from: "2010-11-01", to: "2010-11-10" }
      }).then(resp => {
        expect(resp).toBe(
          `${__API__}/cashmanagement/v1/cashaccounts/123/statement?dateFrom=2010-11-01&dateTo=2010-11-10&onlyDaysWithTransactions=undefined&showFutureTransactions=undefined`
        );
        done();
      });
    });
  });
});
