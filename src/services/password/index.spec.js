import { createPassword } from "./index";

jest.mock("../../utils/fetchHandler");

const fetchHandlerMock = require("../../utils/fetchHandler").default;

let fetchHandlerImplementation;

global.__API__ = "";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("contracts", () => {
  describe("createPassword", () => {
    it.skip("Should call fetch with right API url", done => {
      createPassword("otp", "password").then(resp => {
        expect(resp).toBe(`${__API__}/ibusermanagement/v1/users/password`);
        done();
      });
    });
  });
});
