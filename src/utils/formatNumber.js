import { getLanguage, isPtBR } from "../utils/i18n";

export default function formatNumber(value, numberOptions = {}) {
  const options = {};
  if (numberOptions.currency) {
    options.style = "currency";
    options.currency = numberOptions.currency;
  }

  if (numberOptions.digits) {
    options.minimumFractionDigits = numberOptions.digits;
    options.maximumFractionDigits = numberOptions.digits;
  }
  return getLanguage() === "keys"
    ? new Intl.NumberFormat("en-US", options).format(value)
    : new Intl.NumberFormat(
      getLanguage() ? getLanguage() : "pt-BR",
      options
    ).format(value);
}

export function formatTel(ddd, number) {
  let v = ddd.toString().concat(number);
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}

export function formatNumberWithoutCurrency(value, numberOptions = {}) {
  const options = {};

  if (numberOptions.digits) {
    options.minimumFractionDigits = numberOptions.digits;
    options.maximumFractionDigits = numberOptions.digits;
  }
  const intNumber = new Intl.NumberFormat(getLanguage(), options).format(value);

  return intNumber;
}

export function unFormatNumber(value) {
  value = value.toString();

  if (isPtBR()) {
    value = value.replace(/\./g, "");
    value = value.replace(/,/g, ".");
  } else {
    value = value.replace(/,/g, "");
  }

  return parseFloat(value);
}

export function extractNumber(value) {
  return value.toString().replace(/\D/g, "");
}

export function formatCPF(value) {
  return value
    .toString()
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
}

export function formatCNPJ(value) {
  return value
    .toString()
    .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5");
}

export function formatDocument(value) {
  return value && value.toString().length > 11
    ? formatCNPJ(value)
    : formatCPF(value);
}

export function formatHideDocument(value) {
  return value && value.toString().length > 11
    ? value
      .toString()
      .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "**.$2.$3/$4-**")
    : value.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "***.$2.$3-**");
}

export function docObfuscation(value) {
  return value && value.toString().length > 11
    ? value
      .toString()
      .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "**.$2.$3/$4-**")
    : value
      .toString()
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.***.***-$4");
}

export function formatBankAccount(value) {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{0,8})(\d{0,1}).*$/, '$1-$2')
    .replace(/-$/, '')
}

