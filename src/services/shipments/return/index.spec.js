import { getReceivables, getReceivableDownloadFile } from "./index";

jest.mock("../../../utils/fetchHandler");

const fetchHandlerMock = require("../../../utils/fetchHandler").default;

let fetchHandlerImplementation;

global.__API__ = "http://localhost";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("receivables", () => {
  it("getReceivables - Should call fetchHandler with right API url", done => {
    getReceivables(1, 20, "01/01/2022", "01/01/2022").then(resp => {
      expect(resp).toBe(
        `${__API__}/remittancesapi/v1/returnFiles?Page=1&PageSize=20&dateTo=01/01/2022&dateFrom=01/01/2022`
      );
      done();
    });
  });

  it("getReceivableDownloadFile - Should call fetchHandler with right API url", done => {
    getReceivableDownloadFile(1).then(resp => {
      expect(resp).toBe(`${__API__}/remittancesapi/v1/returnFiles/1/download`);
      done();
    });
  });
});
