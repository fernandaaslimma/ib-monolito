import actions from "./";
// import Input from "../../components/common/Input";

describe("VirtualKeyboad actions", () => {
  it("Should return an action object", () => {
    expect(typeof actions() === "object").toBeTruthy();
    expect(Object.keys(actions())).toEqual([
      "setActiveInput",
      "cleanActiveInput"
    ]);
  });

  describe("Active Keyboard", () => {
    it("Should change state to have an enabled virtual keyboard", () => {
      const inputElement = {
        preventDefault: jest.fn()
      };
      const { setActiveInput } = actions();
      expect(setActiveInput(inputElement, inputElement, inputElement)).toEqual({
        virtualKeyboardConfig: {
          activeInput: inputElement,
          lastFocusedInput: inputElement,
          lastFocusedInputComponent: inputElement
        }
      });
    });
  });
  describe("Clean Active Keyboard", () => {
    it("Should Clean the active keyboard Value", () => {
      const { cleanActiveInput } = actions();
      expect(cleanActiveInput({ virtualKeyboard: null }, null)).toEqual({
        virtualKeyboardConfig: {
          activeInput: null,
          lastFocusedInput: null
        }
      });
    });
  });
});
