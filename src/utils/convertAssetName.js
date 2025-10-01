import { translate } from "../utils/i18n";
import capitalize from "./capitalize";
import { CASH_ACCOUNT, FIXED_INCOME, EQUITY, FUNDS } from "./constants";

export default function convertAssetName(assetType) {
  switch (assetType) {
    case CASH_ACCOUNT:
      return capitalize(translate("CASH_ACCOUNTS"));
    case FIXED_INCOME:
      return capitalize(translate("FIXED_INCOME"));
    case EQUITY:
      return capitalize(translate("EQUITIES"));
    case FUNDS:
      return capitalize(translate("FUNDS"));
    default:
      return assetType;
  }
}
