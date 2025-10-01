beforeEach(() => {
  jest.mock("./getResolution");
});

const isMediumDevice = require("./getResolution").isMediumDevice;

it("should return true for mobile devices", () => {
  global.innerWidth = 500;
  expect(isMediumDevice()).toBe(true);
});
