import { downloadTerm } from "./index";

jest.mock("../../utils/fetchHandler");

const fetchHandlerMock = require("../../utils/fetchHandler").default;

let fetchHandlerImplementation;

global.__API__ = "http://localhost";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("Terms Download", () => {
  describe("downloadTerm", () => {
    it("Should call fetchHandler with right API url", done => {
      downloadTerm(
        "Termo de Adesão - Internet Banking",
        "Termo%20de%20Ades%C3%A3o%20-%20Internet%20Banking.pdf"
      ).then(resp => {
        expect(resp).toBe(
          `${__API__}/productterms/Termo%20de%20Ades%C3%A3o%20-%20Internet%20Banking.pdf`
        );
        done();
      });
    });
  });
});
