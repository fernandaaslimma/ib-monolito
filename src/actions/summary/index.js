import * as summaryAPI from "../../services/summary";
import * as positionAPI from "../../services/position";

export default store => ({
  getIndexes: async (_, date, limit) => {
    try {
      const rawIndexes = await summaryAPI.getIndexes(date);
      const responseIndexes = await rawIndexes.json();

      return {
        indexes: responseIndexes.slice(0, limit)
      };
    } catch (error) {
      return { error };
    }
  },
  getTransactions: async (_, limit) => {
    try {
      const rawTransactions = await summaryAPI.getTransactions(limit);
      const responseTransactions = await rawTransactions.json();

      return {
        transactions: responseTransactions
      };
    } catch (error) {
      return { error };
    }
  },
  getConsolidatedPosition: async () => {
    try {
      const rawConsolidatedPosition = await positionAPI.getTotalByType();

      const responseConsolidatedPosition = await rawConsolidatedPosition.json();

      return {
        consolidatedPosition: responseConsolidatedPosition.map(i => ({
          name: i.assetTypeLabel,
          ...i
        }))
      };
    } catch (error) {
      return { error };
    }
  },
  getConsolidatedAssets: async () => {
    try {
      const rawConsolidatedAssets = await positionAPI.getAssetsClass();
      const responseConsolidatedAssets = await rawConsolidatedAssets.json();

      return {
        consolidatedAssets: responseConsolidatedAssets.map(i => ({
          name: i.assetClass,
          ...i
        }))
      };
    } catch (error) {
      return { error };
    }
  },
  getAssetsByType: async (_, type, newIndex, currentIndex) => {
    try {
      if (newIndex === currentIndex) {
        return {
          assets: [],
          currentIndex: -1
        };
      }
      store.setState({ currentIndex: newIndex });

      const rawAssets = await positionAPI.getAssets(type);
      const responseAssets = await rawAssets.json();

      return {
        assets: responseAssets
      };
    } catch (error) {
      return { error };
    }
  }
});
