import { translate } from "../../utils/i18n";

export const verifyDays = (day, type) => {
  if (day == 0) {
    return translate("SAME_DAY_FUNDS");
  } else if (day == 1) {
    return type === "Útil"
      ? translate("ONE_WORKING_DAY_FUNDS")
      : translate("ONE_CONSECUTIVE_DAY_FUNDS");
  } else if (day > 1) {
    return type === "Útil"
      ? `${day}${translate("WORKING_DAYS_FUNDS")}`
      : `${day}${translate("CONSECUTIVE_DAYS_FUNDS")}`;
  }
};
