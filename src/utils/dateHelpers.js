import moment from "moment";

export const ISODateToBrFormat = date => {
  return moment.utc(date).format("DD/MM/YYYY");
};

export const ptBrToIso = date => {
  const data = moment(date, "DD/MM/YYYY");
  return data.format("YYYY-MM-DD");
};
