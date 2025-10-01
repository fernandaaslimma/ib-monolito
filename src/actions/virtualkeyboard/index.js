export default () => ({
  setActiveInput: (state, inputElement, inputComponent) => {
    return {
      virtualKeyboardConfig: {
        ...state.virtualKeyboard,
        activeInput: inputElement,
        lastFocusedInput: inputElement,
        lastFocusedInputComponent: inputComponent
      }
    };
  },
  cleanActiveInput: (state, inputElement) => {
    return {
      virtualKeyboardConfig: {
        ...state.virtualKeyboard,
        activeInput: null,
        lastFocusedInput: inputElement
      }
    };
  }
});
