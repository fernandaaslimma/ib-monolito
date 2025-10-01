import actionsReceivablesDownloadFIle from "./index";

jest.mock("../../../services/shipments/return");

const serviceReceivables = require("../../../services/shipments/return/index")
  .getReceivables;
serviceReceivables.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);

const serviceReceivableDownloadfileMock = require("../../../services/shipments/return")
  .getReceivableDownloadFile;

let storeMock;
let getStateMock = jest.fn();
let blob;

describe("getReceivables", () => {
  it("Should getReceivables", async () => {
    const { getReceivables } = actionsReceivablesDownloadFIle();
    const receivables = await getReceivables({
      page: 1,
      pageSize: 10,
      dateTo: "11/11/2011",
      dateFrom: "11/02/2022"
    });

    expect(receivables).toEqual({ shipments: [] });
  });
});
describe("getReceivableDownloadFile", () => {
  beforeEach(() => {
    storeMock = { setState: jest.fn(), getState: getStateMock };

    blob = jest.fn(() => "blob");
    serviceReceivableDownloadfileMock.mockImplementation(() =>
      Promise.resolve({
        blob
      })
    );
  });
  it("Should ReceivableDownloadFile", async () => {
    const { getReceivableDownloadFile } = actionsReceivablesDownloadFIle(
      storeMock
    );
    await getReceivableDownloadFile("mock", 1, "fileName");

    expect(serviceReceivableDownloadfileMock).toHaveBeenCalledWith(1);
  });
});
