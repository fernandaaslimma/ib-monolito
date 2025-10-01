import { redirect, hardRedirect } from "./redirect";

jest.mock("../services/history");
const historyMock = require("../services/history");

let setHrefSpy;
let historySpy;

describe.skip("redirect", () => {
  beforeEach(() => {
    setHrefSpy = jest.spyOn(global.location, "assign");
  });

  it.skip("Should set location href to url value", () => {
    hardRedirect("http://someUrl.com");
    expect(setHrefSpy).toHaveBeenCalledWith("http://someUrl.com");
  });
});

describe.skip("hardRedirect", () => {
  beforeEach(() => {
    historySpy = jest.spyOn(historyMock, "push");
  });

  it.skip("Should set call history.push with url value", () => {
    redirect("http://someUrl.com");
    expect(historySpy).toHaveBeenCalledWith("http://someUrl.com");
  });
});
