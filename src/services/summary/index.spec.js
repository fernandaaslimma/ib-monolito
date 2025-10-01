import { getIndexes, getTransactions } from "./index";

jest.mock("../../utils/fetchHandler");

const fetchHandlerMock = require("../../utils/fetchHandler").default;

let fetchHandlerImplementation;

global.__API__ = "http://localhost";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("summary", () => {
  describe("getIndexes", () => {
    it("Should call fetchHandler with right API url", done => {
      global.__API__ = "http://localhost";
      const date = "2014-04-01";
      getIndexes(date).then(resp => {
        expect(resp).toBe(
          `${__API__}/clientportfolio/v1/consolidated/indexes/monthrates?month=${date}`
        );
        done();
      });
    });
  });

  describe("getTransactions", () => {
    it("Should call fetchHandler with right API url with limit", done => {
      global.__API__ = "http://localhost";
      const limit = 5;
      getTransactions(limit).then(resp => {
        expect(resp).toBe(
          `${__API__}/clientportfolio/v1/consolidated/transactions?limit=${limit}&offset=0`
        );
        done();
      });
    });

    it("Should call fetchHandler with right API url with limit and offset", done => {
      global.__API__ = "http://localhost";
      const limit = 10;
      const offset = 3;
      getTransactions(limit, offset).then(resp => {
        expect(resp).toBe(
          `${__API__}/clientportfolio/v1/consolidated/transactions?limit=${limit}&offset=${offset}`
        );
        done();
      });
    });
  });
});
