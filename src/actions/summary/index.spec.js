import summary from "./index";

jest.mock("../../services/position");
jest.mock("../../services/summary");

const getIndexesMock = require("../../services/summary").getIndexes;
const getTransactionsMock = require("../../services/summary").getTransactions;
const getConsolidatedPositionMock = require("../../services/position")
  .getTotalByType;
const getConsolidatedAssetsMock = require("../../services/position")
  .getAssetsClass;
const getAssetsByTypeMock = require("../../services/position").getAssets;

const store = {
  setState: jest.fn()
};

const indexesMock = [
  {
    index: "CDI",
    monthAcrrued: 0.3,
    yearAccrued: 12.7
  },
  {
    index: "Dolar",
    monthAcrrued: 0.7,
    yearAccrued: 10.7
  }
];

const transactionsMock = [
  {
    date: "2017-01-01",
    grossValue: 123.123,
    type: "Ativo",
    assetName: "LCI"
  }
];

const consolidatedPositionMock = [
  {
    assetType: "Funds",
    assetTypeLabel: "Fixed Income",
    netBalance: 123213.2,
    grossBalance: 12.3,
    portfolioShare: 23
  }
];

const consolidatedAssetsMock = [
  {
    assetClass: "Fixed Income",
    netBalance: 123213.2,
    grossBalance: 12.3,
    portfolioShare: 23
  }
];

const assetsMock = [
  {
    name: "Fixed Income",
    netBalance: 123213.2,
    grossBalance: 12.3,
    portfolioShare: 23
  }
];

describe("summary actions", () => {
  beforeEach(() => {
    getIndexesMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(indexesMock)
      })
    );

    getTransactionsMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(transactionsMock)
      })
    );

    getConsolidatedPositionMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(consolidatedPositionMock)
      })
    );

    getConsolidatedAssetsMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(consolidatedAssetsMock)
      })
    );

    getAssetsByTypeMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(assetsMock)
      })
    );
  });

  it("Should return an action object", () => {
    expect(Object.keys(summary())).toEqual([
      "getIndexes",
      "getTransactions",
      "getConsolidatedPosition",
      "getConsolidatedAssets",
      "getAssetsByType"
    ]);
  });

  describe("getIndexes", () => {
    it("Should returns indexes", async () => {
      const { getIndexes } = summary();

      const date = "2017-01-01";
      const limit = 1;

      const indexes = await getIndexes(null, date, limit);
      expect(indexes).toEqual({
        indexes: [indexesMock[0]]
      });
    });

    it("Should invoke getIndexes", async () => {
      const { getIndexes } = summary();

      const date = "2017-01-01";
      const limit = 1;

      await getIndexes(null, date, limit);
      expect(getIndexesMock).toHaveBeenCalledWith(date);
    });
  });

  describe("getTransactions", () => {
    it("Should returns transactions", async () => {
      const { getTransactions } = summary();

      const transactions = await getTransactions();
      expect(transactions).toEqual({
        transactions: transactionsMock
      });
    });

    it("Should invoke getTransactions", async () => {
      const { getTransactions } = summary();

      const limit = 3;

      await getTransactions(null, limit);
      expect(getTransactionsMock).toHaveBeenCalledWith(limit);
    });
  });

  describe("getConsolidatedPosition", () => {
    it("Should returns consolidatedPosition", async () => {
      const { getConsolidatedPosition } = summary();

      const consolidatedPosition = await getConsolidatedPosition();
      expect(consolidatedPosition).toEqual({
        consolidatedPosition: [
          {
            assetType: "Funds",
            assetTypeLabel: "Fixed Income",
            name: "Fixed Income",
            netBalance: 123213.2,
            grossBalance: 12.3,
            portfolioShare: 23
          }
        ]
      });
    });

    it("Should invoke getConsolidatedPosition", async () => {
      const { getConsolidatedPosition } = summary();

      await getConsolidatedPosition();
      expect(getConsolidatedPositionMock).toHaveBeenCalledWith();
    });
  });

  describe("getConsolidatedAssets", () => {
    it("Should returns getConsolidatedAssets", async () => {
      const { getConsolidatedAssets } = summary();

      const consolidatedAssets = await getConsolidatedAssets();
      expect(consolidatedAssets).toEqual({
        consolidatedAssets: [
          {
            assetClass: "Fixed Income",
            grossBalance: 12.3,
            name: "Fixed Income",
            netBalance: 123213.2,
            portfolioShare: 23
          }
        ]
      });
    });

    it("Should invoke getConsolidatedAssets", async () => {
      const { getConsolidatedAssets } = summary();

      await getConsolidatedAssets();
      expect(getConsolidatedAssetsMock).toHaveBeenCalledWith();
    });
  });

  describe("getAssetsByType", () => {
    it("Should return an empty when newIndex and currentIndex are the same", async () => {
      const { getAssetsByType } = summary(store);

      const assets = await getAssetsByType(null, "FixedIncome", 1, 1);
      expect(assets).toEqual({
        assets: [],
        currentIndex: -1
      });
    });

    it("Should return assets when newIndex and currentIndex are different", async () => {
      const { getAssetsByType } = summary(store);

      const assets = await getAssetsByType(null, "FixedIncome", 0, 1);
      expect(assets).toEqual({
        assets: assetsMock
      });
    });

    it("Should invoke getAssetsByTypeMock", async () => {
      const { getAssetsByType } = summary(store);

      await getAssetsByType(null, "FixedIncome", 0, 1);
      expect(getAssetsByTypeMock).toHaveBeenCalledWith("FixedIncome");
    });

    it("Should invoke setState", async () => {
      const { getAssetsByType } = summary(store);

      await getAssetsByType(null, "FixedIncome", 0, 1);
      expect(store.setState).toHaveBeenCalledWith({ currentIndex: 0 });
    });
  });
});
