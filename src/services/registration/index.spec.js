import { getRegistrationFormData } from "./index";

jest.mock("../../utils/fetchHandler");

const fetchHandlerMock = require("../../utils/fetchHandler").default;

let fetchHandlerImplementation;

global.__API__ = "";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("registration", () => {
  describe("getRegistrationFormData", () => {
    it("Should call fetchHandler with right API url", done => {
      getRegistrationFormData().then(resp => {
        expect(resp).toEqual("/personregistration/v1/api/person");
        done();
      });
    });
  });
});
