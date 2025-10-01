import CreateLog from "./index";

global.__ERROR_LOG_URL__ =
  "https://bbmlog.azurewebsites.net/api/entry?code=xpto";

jest.mock("../../utils/fetchHandler");

const fetchHandlerMock = require("../../utils/fetchHandler").default;

let fetchHandlerImplementation;

global.__API__ = "http://localhost";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("error", () => {
  it("Should call fetchHandler with right API url", done => {
    CreateLog().then(resp => {
      expect(resp).toBe("https://bbmlog.azurewebsites.net/api/entry?code=xpto");
      done();
    });
  });
});
