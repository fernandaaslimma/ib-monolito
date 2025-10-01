import * as shipmentsAPI from "../../../services/shipments/return";
import { getLink } from "../../../utils/downloadFile";

export default () => ({
  getReceivables: async (_, page, pageSize, dateTo, dateFrom) => {
    try {
      const receivablesResponse = await shipmentsAPI.getReceivables(
        page,
        pageSize,
        dateTo,
        dateFrom
      );
      const shipments = await receivablesResponse.json();
      return { shipments };
    } catch (error) {
      return { error };
    }
  },

  getReceivableDownloadFile: async (_, receivableId, fileName) => {
    try {
      shipmentsAPI
        .getReceivableDownloadFile(receivableId)
        .then(resp => resp.blob())
        .then(text => {
          getLink(text, fileName);
        });
    } catch (error) {
      return { error };
    }
  }
});
