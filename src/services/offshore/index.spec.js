import {
  getTransactionsOffShore,
} from "./index";

jest.mock("../../utils/fetchHandler");

const fetchHandlerMock = require("../../utils/fetchHandler").default;

let fetchHandlerImplementation;

global.__API__ = "http://localhost";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("getTransactionsOffShore", () => {
  describe("getTransactionsOffShore", () => {
    it("Should call fetchHandler with right API url", done => {
      getTransactionsOffShore(
        {
          dateFrom: "",
          dateTo: "",
          limit: 10,
          offset: 0,
          currency: 'USD'
        }
      ).then(
        resp => {
          expect(resp).toBe(
            `${__API__}/clientportfoliooffshore/v1/investments-offshore/transactions?dateFrom=&dateTo=&limit=10&offset=0&currency=USD`
          );
          done();
        }
      );
    });
  });
});
