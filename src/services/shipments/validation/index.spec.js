import {
  postRemmitanceValidation,
  getRemmitanceValidationLayouts
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
  it("postRemmitanceValidation - Should call fetchHandler with right API url", done => {
    postRemmitanceValidation(new FormData(), "typeTest").then(resp => {
      expect(resp).toBe(
        `${__API__}/remittancesapi/v1/Validator?layoutType=typeTest`
      );
      done();
    });
  });
});

describe("remittances", () => {
  it("getRemmitanceValidationLayouts - Should call fetchHandler with right API url", done => {
    getRemmitanceValidationLayouts().then(resp => {
      expect(resp).toBe(`${__API__}/remittancesapi/v1/Validator/cnablayouts`);
      done();
    });
  });
});
