import actionsRemittancesUploadFile from "./index";

jest.mock("../../../services/shipments/remittances");
const serviceRemittances = require("../../../services/shipments/remittances/index")
  .getRemittances;
serviceRemittances.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);
const serviceRemittancesUploadFileMock = require("../../../services/shipments/remittances")
  .getRemittancesBasicInfo;

let blob;
// eslint-disable-next-line no-console
describe("getRemittances", () => {
  it("Should getRemittances", async () => {
    const { getRemittances } = actionsRemittancesUploadFile();
    const remittances = await getRemittances({
      page: 1,
      pageSize: 10,
      dateTo: "11/11/2011",
      dateFrom: "11/02/2022"
    });
    expect(remittances).toEqual(remittances);
  });
});

describe("getRemittancesUploadFile", () => {
  beforeEach(() => {
    blob = jest.fn(() => "blob");
    serviceRemittancesUploadFileMock.mockImplementation(() =>
      Promise.resolve({
        blob
      })
    );
  });
  it("Should RemittancesUploadFile", async () => {
    const { getRemittancesBasicInfo } = actionsRemittancesUploadFile();
    await serviceRemittancesUploadFileMock();
    expect(getRemittancesBasicInfo).toEqual(getRemittancesBasicInfo);
  });
});
