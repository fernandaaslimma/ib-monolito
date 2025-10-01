import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";
import MaskedInput from "react-text-mask";
import { InputField } from "./styles";

describe("Input component", () => {
  it("should match snapshot", () => {
    const props = {
      onChange: () => {},
      type: "submit",
      name: "input",
      placeholder: "My input"
    };
    expect(shallow(<Input {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with label", () => {
    const props = {
      onChange: () => {},
      type: "submit",
      name: "input",
      label: "label"
    };
    expect(shallow(<Input {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with success validation", () => {
    const props = {
      onChange: () => {},
      type: "submit",
      name: "input",
      placeholder: "My input",
      valid: true
    };
    expect(shallow(<Input {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with icon", () => {
    const props = {
      onChange: () => {},
      type: "submit",
      name: "input",
      placeholder: "My input",
      valid: true,
      icon: "Icon"
    };
    expect(shallow(<Input {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with error validation", () => {
    const props = {
      onChange: () => {},
      type: "submit",
      name: "input",
      placeholder: "My input",
      valid: false
    };
    expect(shallow(<Input {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with no validation", () => {
    const props = {
      onChange: () => {},
      type: "submit",
      name: "input",
      placeholder: "My input",
      valid: null
    };
    expect(shallow(<Input {...props} />)).toMatchSnapshot();
  });

  it("should trigger onKeyDown prop with event", () => {
    const props = {
      onChange: () => {},
      onKeyDown: jest.fn(),
      type: "submit",
      name: "input",
      placeholder: "My input",
      valid: null
    };

    const input = shallow(<Input {...props} />);
    input.find(InputField).simulate("keydown", { target: "sample" });

    expect(props.onKeyDown).toHaveBeenCalledWith({ target: "sample" });
  });

  it("should prevent default if disabled key is clicked", () => {
    const props = {
      onChange: jest.fn(),
      onKeyDown: jest.fn(),
      type: "submit",
      name: "input",
      placeholder: "My input",
      valid: null,
      disableKeys: [13]
    };

    const input = shallow(<Input {...props} />);

    const preventDefault = jest.fn();

    input.find(InputField).simulate("keydown", { keyCode: 13, preventDefault });

    expect(preventDefault).toHaveBeenCalled();

    input.find(InputField).simulate("keydown", { which: 13, preventDefault });

    expect(preventDefault).toHaveBeenCalledTimes(2);
  });

  describe("_onKeyDown", () => {
    it("should invoke onKeyDown when keyCode is different then disableKeys", () => {
      const props = {
        onChange: jest.fn(),
        onKeyDown: jest.fn(),
        type: "submit",
        name: "input",
        placeholder: "My input",
        valid: null,
        disableKeys: 13
      };

      const e = {
        keyCode: 1,
        which: 1,
        preventDefault: jest.fn()
      };

      const instance = shallow(<Input {...props} />).instance();

      instance._onKeyDown(e);

      expect(props.onKeyDown).toHaveBeenCalledTimes(1);
    });

    it("should invoke onKeyDown when keyCode is different then disableKeys", () => {
      const props = {
        onChange: jest.fn(),
        onKeyDown: jest.fn(),
        type: "submit",
        name: "input",
        placeholder: "My input",
        valid: null,
        disableKeys: [13]
      };

      const e = {
        keyCode: 13,
        which: 13,
        preventDefault: jest.fn()
      };

      const instance = shallow(<Input {...props} />).instance();

      instance._onKeyDown(e);

      expect(props.onKeyDown).not.toHaveBeenCalled();
    });
  });

  it("should trigger onFocus and onBlur prop", () => {
    const props = {
      onChange: () => {},
      onKeyDown: jest.fn(),
      type: "submit",
      name: "input",
      placeholder: "My input",
      valid: null,
      onFocus: () => {},
      onBlur: () => {},
      toolTip: () => {}
    };

    const input = shallow(<Input {...props} />);

    const inputField = input.find(InputField);

    inputField.props().onFocus();

    expect(input.instance().state.isFocused).toBeTruthy();

    inputField.props().onBlur();

    expect(input.instance().state.isFocused).toBeFalsy();
  });

  it("should trigger onFocus and onBlur prop using mask", () => {
    const props = {
      onChange: () => {},
      type: "submit",
      name: "input",
      label: "label",
      maskType: "datetime",
      icon: "Icon",
      valid: false,
      onFocus: () => {},
      onBlur: () => {},
      toolTip: () => {}
    };
    const input = shallow(<Input {...props} />);

    const inputField = input
      .find(MaskedInput)
      .props()
      .render({ current: "ref" }, props);

    inputField.props.onFocus();

    expect(input.instance().state.isFocused).toBeTruthy();

    inputField.props.onBlur();

    expect(input.instance().state.isFocused).toBeFalsy();
  });
});
