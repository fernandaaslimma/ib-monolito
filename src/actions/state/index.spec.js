import state from "./index";
import commonState from "../../utils/store/commonState";

describe("state action", () => {
  it("Should return an action object", () => {
    expect(typeof state() === "object").toBeTruthy();
    expect(Object.keys(state())).toEqual(["initStateIfEmpty"]);
  });

  describe("initStateIfEmpty", () => {
    it("Shouldn't should do anything if currentState is not empty", () => {
      const { initStateIfEmpty } = state();
      const currentState = {
        count: 1
      };
      expect(initStateIfEmpty(currentState)).toEqual(undefined);
    });

    it("Should reinitialize the state if currentState is empty", () => {
      const { initStateIfEmpty } = state();
      const currentState = {};
      expect(initStateIfEmpty(currentState)).toEqual(commonState);
    });
  });
});
