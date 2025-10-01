import { EN_US, PT_BR } from "../utils/constants";

export default function formatNumber(
  value,
  numberOptions = {},
  locale = EN_US
) {
  const validLocale =
    [EN_US, PT_BR].find(l => l.toLowerCase() === locale.toLowerCase()) || EN_US;

  const options = {};
  if (numberOptions.currency) {
    options.style = "currency";
    options.currency = numberOptions.currency;
  }

  if (numberOptions.digits) {
    options.minimumFractionDigits = numberOptions.digits;
    options.maximumFractionDigits = numberOptions.digits;
  }

  return new Intl.NumberFormat(validLocale, options).format(value);
}
