import { checkValidEmail } from "./login";

export const clearFields = (object, fields) =>
  fields.forEach(field => (object[field] = null));

export const isValueNullOrUndefined = (value = null) => {
  if (typeof value === "undefined" || !value) {
    return true;
  }

  return false;
};

export const checkCPFOrCNPJ = (value, isCNPJ = false) => {
  if (value) {
    const raw = value.replace(/[^\w\s]/gi, "");
    return isCNPJ ? raw.length === 14 : raw.length === 11;
  }
  return false;
};

export const checkValidDateLength = date => {
  // for MM/DD/YYYY or DD/MM/YYYY date string type
  if (date) {
    const raw = date.replace(/[^a-z0-9]/gi, "");
    return raw.length === 8;
  }
  return false;
};

export const checkDefaultInputLength = value => {
  if (value) {
    return value.length > 0;
  }
  return false;
};

export const checkIfIsInteger = value => {
  if (value) {
    return Number.isInteger(Number(value));
  }
  return false;
};

export const checkValidPhoneNumber = value => {
  if (value) {
    return value.length >= 10;
  }
  return false;
};

export const checkValidDDD = value => {
  if (value) {
    return value.length === 2;
  }
  return false;
};

export const validateInputByType = {
  default: checkDefaultInputLength,
  cpf: checkCPFOrCNPJ,
  spouseCpf: checkCPFOrCNPJ,
  startDate: checkValidDateLength,
  endDate: checkValidDateLength,
  name: checkDefaultInputLength,
  rangeId: checkIfIsInteger,
  telephone: checkValidPhoneNumber,
  ddd: checkValidDDD,
  phoneNumber: checkValidPhoneNumber,
  email: checkValidEmail
};

export const checkTypeAndValidate = (type, value) => {
  const keys = Object.keys(validateInputByType);
  return keys.includes(type)
    ? validateInputByType[type](value)
    : checkDefaultInputLength(value);
};

export const checkValidCpfAndPassport = value => {
  if (!value) return false;
  let str = value.replace(/[^a-zA-Z0-9]/g);
  if (str.length === 11) return newCheckCpfValidate(value);
  return false;
};

export const checkValidCpfAndCnpj = value => {
  if (value) {
    let str = value.replace(/[^\w\s]/gi, "");
    str = str.replace(/\D/g, "");

    return str.length === 11 ? checkValidCpf(value) : checkValidCnpj(value);
  }
};

export const newCheckCpfValidate = value => {
  let cpf = value.replace(/[^\d]+/g, "");
  if (cpf.length !== 11) return false;

  if (/^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let primeiroDigito = 11 - (soma % 11);
  if (primeiroDigito === 10 || primeiroDigito === 11) {
    primeiroDigito = 0;
  }
  if (parseInt(cpf.charAt(9)) !== primeiroDigito) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  let segundoDigito = 11 - (soma % 11);
  if (segundoDigito === 10 || segundoDigito === 11) {
    segundoDigito = 0;
  }
  if (parseInt(cpf.charAt(10)) !== segundoDigito) return false;

  return true;
};

export const checkValidCpf = value => {
  var sum;
  var rest;
  sum = 0;

  if (value) {
    const cpf = value.replace(/[^\w\s]/gi, "");
    if (
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999"
    )
      return false;

    for (let i = 1; i <= 9; i++)
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++)
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(cpf.substring(10, 11))) return false;
    return true;
  }
};

export const checkValidCnpj = value => {
  let cnpj = value.replace(/\D/g, "");
  cnpj = cnpj.padStart(14, "0");

  if (isExceptionCnpj(cnpj)) return false;

  if (!isValidCnpjNumber(cnpj)) return false;

  if (
    calculateRestCnpj(sumCnpjDigit(cnpj, 12)) !=
    parseInt(cnpj.substring(12, 13))
  ) {
    return false;
  }

  if (
    calculateRestCnpj(sumCnpjDigit(cnpj.substring(0, 13), 13)) !=
    parseInt(cnpj.substring(13, 14))
  ) {
    return false;
  }

  return true;
};

function isExceptionCnpj(value) {
  let lstCpfException = new Array(
    "00000000000000",
    "11111111111111",
    "22222222222222",
    "33333333333333",
    "44444444444444",
    "55555555555555",
    "66666666666666",
    "77777777777777",
    "88888888888888",
    "99999999999999"
  );

  return lstCpfException.includes(value);
}

export function isValidCnpjNumber(value) {
  if (value == "" || value === undefined || value === null || value.legth < 14)
    return false;
  return true;
}

function sumCnpjDigit(value, length) {
  let pos = length - 7;
  let sumDigit = 0;

  for (let i = length; i >= 1; i--) {
    sumDigit += value.charAt(length - i) * pos--;
    if (pos < 2) pos = 9;
  }

  return sumDigit;
}

function calculateRestCnpj(value) {
  return value % 11 < 2 ? 0 : 11 - (value % 11);
}
