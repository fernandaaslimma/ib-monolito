import moment from "moment";
import fetchHandler from "../../utils/fetchHandler";

export const getDocuments = type =>
  fetchHandler(`${__API__}/clientdocuments/v1/files?typeId=${type}`);

export const getShipmentsDocuments = type => {
  const today = new Date();

  const days = today.getDay() === 5 ? 4 : 6;

  const endDate = moment(today).format("YYYY/MM/DD");
  const startDate = moment(new Date().setDate(today.getDate() - days)).format(
    "YYYY/MM/DD"
  );

  const mockStartDate = "2024/10/30";
  const mockEndDate = "2024/11/05";

  return fetchHandler(
    `${__API__}/clientdocuments/v1/files?typeId=${type}&startDate=${
      type === "mock" ? mockStartDate : startDate
    }&endDate=${type === "mock" ? mockEndDate : endDate}`
  );
};

export const getDocumentTypes = () =>
  fetchHandler(`${__API__}/clientdocuments/v1/documenttypes`);

export const downloadDocument = id => {
  const encodeId = encodeURIComponent(id);
  const options = {
    headers: new Headers({
      "X-Fetch-Type": "download/base64",
      "X-File-Name": `${id}`
    })
  };
  return fetchHandler(
    `${__API__}/clientdocuments/v1/files/${encodeId}/download`,
    options
  );
};
