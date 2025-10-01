import React from "react";
import { shallow } from "enzyme";

import VirtualKeyboardInput from "./VirtualKeyboardInput";

describe("VirtualKeyboardInput component", () => {
  it("Should match snapshot", () => {
    const virtualKeyboardInput = shallow(
      <VirtualKeyboardInput render={() => <input />} />
    );

    expect(virtualKeyboardInput).toMatchSnapshot();
  });

  it("Should render a wrapped component", () => {
    const virtualKeyboardInput = shallow(
      <VirtualKeyboardInput render={() => <input />} />
    );

    expect(virtualKeyboardInput.html()).toEqual('<input readonly=""/>');
  });

  it("Should render a wrapped component with custom onkeyDown prop", () => {
    const virtualKeyboardInput = shallow(
      <VirtualKeyboardInput render={() => <input />} />
    );

    expect(
      typeof virtualKeyboardInput.props().onKeyDown === "function"
    ).toBeTruthy();
  });

  it("Should call custom onkeyDown prop with prevent default", () => {
    const onKeyDownEvent = {
      preventDefault: jest.fn()
    };

    const virtualKeyboardInput = shallow(
      <VirtualKeyboardInput render={() => <input />} />
    );

    virtualKeyboardInput.simulate("keydown", onKeyDownEvent);
    expect(onKeyDownEvent.preventDefault).toHaveBeenCalled();
  });

  it("Should not call custom onkeyDown prop with prevent default if window.innerWidth is lower than detachBelow prop", () => {
    global.window = global.window || {};
    global.window.innerWidth = 400;

    const onKeyDownEvent = {
      preventDefault: jest.fn()
    };

    const virtualKeyboardInput = shallow(
      <VirtualKeyboardInput detachBelow={500} render={() => <input />} />
    );

    virtualKeyboardInput.simulate("keydown", onKeyDownEvent);
    expect(onKeyDownEvent.preventDefault).not.toHaveBeenCalled();
  });

  it("Should call custom onkeyDown prop with prevent default if window.innerWidth is greater than detachBelow prop", () => {
    global.window = global.window || {};
    global.window.innerWidth = 700;

    const onKeyDownEvent = {
      preventDefault: jest.fn()
    };

    const virtualKeyboardInput = shallow(
      <VirtualKeyboardInput detachBelow={500} render={() => <input />} />
    );

    virtualKeyboardInput.simulate("keydown", onKeyDownEvent);
    expect(onKeyDownEvent.preventDefault).toHaveBeenCalled();
  });
});
