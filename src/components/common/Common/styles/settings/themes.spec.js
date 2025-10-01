import { defaultTheme } from "./themes";
import { rem } from "../tools";

describe("themes component", () => {
  it("should have the correct default theme values", () => {
    const expectedTheme = {
      space: [0, rem(5), rem(10), rem(15), rem(20)],
      breakpoints: [32, 48, 64]
    };

    expect(defaultTheme).toEqual(expectedTheme);
  });
});
