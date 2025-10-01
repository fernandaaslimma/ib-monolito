import logError from "./logError";

jest.mock("../services/logs");

const logErrorAPI = require("../services/logs").logError;

describe("logError", () => {
  it("Should invoke the API with the right parameters", () => {
    logError({ message: "Random Error" });

    expect(logErrorAPI).toHaveBeenCalledTimes(1);
    expect(logErrorAPI).toHaveBeenCalledWith("Random Error", "Fake userAgent");
  });
});
