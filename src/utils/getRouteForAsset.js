import { CASH_ACCOUNT, FIXED_INCOME, EQUITY, FUNDS } from "./constants";

export default function getRouteForAsset(assetType) {
  switch (assetType) {
    case CASH_ACCOUNT:
      return "/position/account";
    case FIXED_INCOME:
      return "/investments/positions/fixed-income";
    case EQUITY:
      return "/investments/positions/equities";
    case FUNDS:
      return "/investments/positions/funds";
    default:
      return "/";
  }
}
