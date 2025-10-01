import actions from "./index";

describe("Navigation Menu actions", () => {
  it("should return an action object", () => {
    expect(typeof actions() === "object").toBeTruthy();
    expect(
      typeof actions().showNavigationMenu(false, true).isNavigationMenuShown
    ).toBeTruthy();
    expect(Object.keys(actions())).toEqual(["showNavigationMenu"]);
  });
});
