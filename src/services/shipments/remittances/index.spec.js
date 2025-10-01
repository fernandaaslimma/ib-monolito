import {
  getRemittances,
  postRemmitance,
  getRemittancesBasicInfo
} from "./index";

jest.mock("../../../utils/fetchHandler");

const fetchHandlerMock = require("../../../utils/fetchHandler").default;

let fetchHandlerImplementation;

global.__API__ = "http://localhost";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("remittances", () => {
  it("getRemittances - Should call fetchHandler with right API url", done => {
    getRemittances(1, 20, "01/01/2022", "01/01/2022").then(resp => {
      expect(resp).toBe(
        `${__API__}/remittancesapi/v1/Remittances?Page=1&PageSize=20&dateTo=01/01/2022&dateFrom=01/01/2022`
      );
      done();
    });
  });

  it("postRemmitance - Should call fetchHandler with right API url", done => {
    postRemmitance(new FormData()).then(resp => {
      expect(resp).toBe(`${__API__}/remittancesapi/v1/Remittances`);
      done();
    });
  });
  it("getRemittancesBasicInfo - Should call fetchHandler with right API url", done => {
    getRemittancesBasicInfo().then(resp => {
      expect(resp).toBe(`${__API__}/remittancesapi/v1/Remittances/basicInfo`);
      done();
    });
  });
});
