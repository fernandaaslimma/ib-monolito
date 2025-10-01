export const numberToBrl = number => {
  if (!number) return "0";
  const splitedNumber = number.toFixed(2).split(".");
  splitedNumber[0] = splitedNumber[0].split(/(?=(?:...)*$)/).join(".");
  return splitedNumber.join(",");
};

export const numberToBrlWithR$ = number => {
  return `R$ ${numberToBrl(number)}`;
};

export const brlToNumber = brl => {
  if (!brl) return 0;
  const dotLessBrl = brl.replace(/[^0-9,]/g, "");
  const commaLessBrl = dotLessBrl.replace(/,/g, ".");
  if (!commaLessBrl) return 0;
  return parseFloat(commaLessBrl);
};

export const formatBrl = brl => {
  return numberToBrlWithR$(brlToNumber(brl));
};
