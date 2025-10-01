import fetchHandler from "../../../utils/fetchHandler";

export const getReceivables = async (page, pageSize, dateTo, dateFrom) => {
  try {
    return await fetchHandler(
      `${__API__}/remittancesapi/v1/returnFiles?Page=${page}&PageSize=${pageSize}&dateTo=${dateTo}&dateFrom=${dateFrom}`
    );
  } catch (error) {
    return {
      error
    };
  }
};

export const getReceivableDownloadFile = async receivableId => {
  try {
    return await fetchHandler(
      `${__API__}/remittancesapi/v1/returnFiles/${receivableId}/download`
    );
  } catch (error) {
    return {
      error
    };
  }
};
