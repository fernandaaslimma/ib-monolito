import { hotjarTag, hotjarId } from "./hotjarFun";

describe("Hotjar tag use", () => {
  const { location } = window;

  beforeAll(() => {
    delete window.location;
    window.location = { pathname: jest.fn() };
    window.hj = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    window.location = location;
  });

  it("Should invoke the hotjarTag withouth path", () => {
    hotjarTag();
    expect(window.hj).toHaveBeenCalledTimes(1);
  });

  it("Should invoke the hotjarTag with path", () => {
    hotjarTag("test/path");
    expect(window.hj).toHaveBeenCalledTimes(1);
  });

  it("Should invoke the hotjarId with infos", () => {
    const info = { type: "teste" };
    hotjarId("12345", info);
    expect(window.hj).toHaveBeenCalledTimes(1);
  });
});
