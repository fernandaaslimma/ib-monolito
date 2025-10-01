import fetchHandler from "../../../utils/fetchHandler";

export const getRemittances = async (page, pageSize, dateTo, dateFrom) => {
  try {
    return await fetchHandler(
      `${__API__}/remittancesapi/v1/Remittances?Page=${page}&PageSize=${pageSize}&dateTo=${dateTo}&dateFrom=${dateFrom}`
    );
  } catch (error) {
    return {
      error
    };
  }
};

export const postRemmitance = async body => {
  try {
    return await fetchHandler(`${__API__}/remittancesapi/v1/Remittances`, {
      method: "POST",
      body: body
    });
  } catch (error) {
    return {
      error
    };
  }
};

export const getRemittancesBasicInfo = async () => {
  try {
    return await fetchHandler(
      `${__API__}/remittancesapi/v1/Remittances/basicInfo`
    );
  } catch (error) {
    return {
      error
    };
  }
};
