import { logError } from "./index";

jest.mock("../../utils/fetchHandler", () => URI => Promise.resolve(URI));

global.__ERROR_LOG_URL__ =
  "https://bbmlog.azurewebsites.net/api/entry?code=xpto";

describe("logError", () => {
  it("Should call fetchHandler with right API url", done => {
    logError("Error Message", "User Agent").then(resp => {
      expect(resp).toBe(__ERROR_LOG_URL__);
      done();
    });
  });
});
