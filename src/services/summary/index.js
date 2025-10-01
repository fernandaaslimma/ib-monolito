import fetchHandler from "../../utils/fetchHandler";

export const getIndexes = date =>
  fetchHandler(
    `${__API__}/clientportfolio/v1/consolidated/indexes/monthrates?month=${date}`
  );

export const getTransactions = (limit, offset = 0) =>
  fetchHandler(
    `${__API__}/clientportfolio/v1/consolidated/transactions?limit=${limit}&offset=${offset}`
  );
