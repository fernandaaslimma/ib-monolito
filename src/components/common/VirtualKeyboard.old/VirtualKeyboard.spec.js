import React from "react";
import { shallow } from "enzyme";

import VirtualKeyboard from "./VirtualKeyboard";
import { Key, KeyBoard, Erase, Wrapper } from "./styles";

jest.mock("redux-zero/react", () => ({
  connect: () => Comp => Comp
}));

describe("VirtualKeyboard component", () => {
  it("Should have 10 buttons", () => {
    const virtualKeyboard = shallow(<VirtualKeyboard />);
    expect(virtualKeyboard.find(Key).length).toBe(10);
  });

  for (let i = 0; i <= 9; i++) {
    it(`Should have button ${i}`, () => {
      const virtualKeyboard = shallow(<VirtualKeyboard />);

      expect(
        virtualKeyboard
          .find(KeyBoard)
          .findWhere(innerComponent => innerComponent.text() == i).length
      ).toBe(1);
    });
  }

  it("Should call preventDefault when click on erase btn", () => {
    const preventDefault = jest.fn();
    const virtualKeyboard = shallow(<VirtualKeyboard />);

    virtualKeyboard.find(Erase).simulate("click", { preventDefault });

    expect(preventDefault).toHaveBeenCalled();
  });

  it("Should call onErase when click on erase btn", () => {
    const props = {
      onErase: jest.fn()
    };

    const virtualKeyboard = shallow(<VirtualKeyboard {...props} />);

    virtualKeyboard.find(Erase).simulate("click", {
      preventDefault: jest.fn()
    });

    expect(props.onErase).toHaveBeenCalled();
  });

  it("Should call focus function of lastFocusedInput prop when click Wrapper component", () => {
    const focus = jest.fn();

    const props = {
      virtualKeyboardConfig: {
        lastFocusedInput: {
          focus
        }
      }
    };

    const virtualKeyboard = shallow(<VirtualKeyboard {...props} />);

    virtualKeyboard.find(Wrapper).simulate("click");

    expect(focus).toHaveBeenCalled();
  });
});
