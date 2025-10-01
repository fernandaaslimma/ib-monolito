import { isPtBR } from "../i18n";

export const getDigitsFromValue = (value = "") =>
  value.replace(/(-(?!\d))|[^0-9-]/g, "") || "";

const padDigits = digits => {
  const desiredLength = 3;
  const actualLength = digits.length;

  if (actualLength >= desiredLength) {
    return digits;
  }

  const amountToAdd = desiredLength - actualLength;
  const padding = "0".repeat(amountToAdd);

  return padding + digits;
};

const removeLeadingZeros = number => number.replace(/^0+([0-9]+)/, "$1");

const addDecimalToNumber = (number, centsSeparator) => {
  const centsStartingPosition = number.length - 2;
  const dollars = removeLeadingZeros(
    number.substring(0, centsStartingPosition)
  );
  const cents = number.substring(centsStartingPosition);

  return `${dollars}${centsSeparator}${cents}`;
};

const addThousandSeparator = (number, thousandsSeparator) => {
  const dollarsWithThousandSeparator = number
    .substring(0, number.length - 3)
    .replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
  const cents = number.substring(number.length - 3, number.length);
  return `${dollarsWithThousandSeparator}${cents}`;
};

export const toCurrency = value => {
  const thousandsSeparator = isPtBR() ? "." : ",";
  const centsSeparator = isPtBR() ? "," : ".";

  if (value) {
    const digits = getDigitsFromValue(value);
    const digitsWithPadding = padDigits(digits);
    const digitsWithDecimal = addDecimalToNumber(
      digitsWithPadding,
      centsSeparator
    );
    return addThousandSeparator(digitsWithDecimal, thousandsSeparator);
  }
};

export function setFormatCurrency(value) {
  return toCurrency(value, isPtBR() ? "." : ",", isPtBR() ? "," : ".");
}

export function checkOnKeyPress(event) {
  if (String.fromCharCode(event.charCode).match(/[^0-9,.]/gi)) {
    event.preventDefault();
    return;
  }
}

export const animateCurrencyIncrement = (
  obj,
  start,
  end,
  duration,
  callback
) => {
  let startTimestamp = null;
  const step = timestamp => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);

    const value = progress * (end - start) + start;
    obj.value = Number.isInteger(start)
      ? toCurrency(Math.ceil(value).toFixed(2))
      : toCurrency(
          (Math.round((value + Number.EPSILON) * 100) / 100).toString()
        );

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      const convertedAsLocaleStringValue = toCurrency(end.toFixed(2));
      obj.value = convertedAsLocaleStringValue;
      callback(convertedAsLocaleStringValue);
    }
  };
  window.requestAnimationFrame(step);
};
