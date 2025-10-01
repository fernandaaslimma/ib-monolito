import { scrollToTop } from "./dom";

describe("dom", () => {
  it("Should scroll to top", () => {
    scrollToTop();
    expect(window.scrollY).toEqual(0);
  });
});
