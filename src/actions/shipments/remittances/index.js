import * as remittancesAPI from "../../../services/shipments/remittances";

export default store => ({
  getRemittances: async (_, page, pageSize, dateTo, dateFrom) => {
    try {
      const remittancesResponse = await remittancesAPI.getRemittances(
        page,
        pageSize,
        dateTo,
        dateFrom
      );
      const remittances = await remittancesResponse.json();
      return { remittances };
    } catch (error) {
      return { error };
    }
  },

  postRemmitance: async (_, body, progressFunction, filterList) => {
    try {
      const postRemittancesResponse = await remittancesAPI.postRemmitance(body);
      if (
        postRemittancesResponse.error &&
        postRemittancesResponse.error.status === 400
      ) {
        store.setState({ calledAPI: false });
        progressFunction(false, {
          status: postRemittancesResponse.error.status,
          toastR: true,
          message: postRemittancesResponse.error.Message,
          toastRMode: "error"
        });
      } else if (postRemittancesResponse.status <= 201) {
        store.setState({ calledAPI: false });
        progressFunction(false, { status: 200 });
        filterList();
      } else {
        return { error: postRemittancesResponse.error };
      }
    } catch (error) {
      return { error };
    }
  },

  getRemittancesBasicInfo: async () => {
    try {
      const remittancesBasicInfoResponse = await remittancesAPI.getRemittancesBasicInfo();
      const remittanceBasicInfo = await remittancesBasicInfoResponse.json();
      return { remittanceBasicInfo };
    } catch (error) {
      return { error };
    }
  }
});
