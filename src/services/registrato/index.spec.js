import { validateSecurityPhrase } from "./index";

jest.mock("../../utils/fetchHandler");

const fetchHandlerMock = require("../../utils/fetchHandler").default;

let fetchHandlerImplementation;

global.__API__ = "http://localhost";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("registrato", () => {
  describe("validateSecurityPhrase", () => {
    it("Should call fetchHandler with right API url", done => {
      validateSecurityPhrase(1).then(resp => {
        expect(resp).toBe(`${__API__}/registrato/v1/validatephrase`);
        done();
      });
    });
  });
});
