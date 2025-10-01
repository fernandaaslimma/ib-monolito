import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";
import { InputField, Tooltip } from "./styles";

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

  it("should match snapshot with currency mask", () => {
    const props = {
      onChange: () => {},
      type: "submit",
      name: "input",
      placeholder: "My input",
      valid: null,
      maskType: "currency"
    };
    expect(shallow(<Input {...props} />)).toMatchSnapshot();
  });
  it("should match snapshot with prefix", () => {
    const props = {
      onChange: () => {},
      type: "text",
      name: "input",
      placeholder: "My input",
      prefix: "$"
    };
    expect(shallow(<Input {...props} />)).toMatchSnapshot();
  });
  it("should match snapshot with datetime mask", () => {
    const props = {
      onChange: () => {},
      type: "submit",
      name: "input",
      placeholder: "My input",
      valid: null,
      maskType: "datetime"
    };
    expect(shallow(<Input {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with datetime mask", () => {
    const props = {
      onChange: () => {},
      type: "submit",
      name: "input",
      placeholder: "My input",
      valid: null,
      maskType: "cpfcnpj"
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
        disableKeys: [13]
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
  describe("inside components", () => {
    it("tooltip", () => {
      const props = {
        onChange: () => {},
        type: "submit",
        name: "input",
        placeholder: "My input",
        valid: null,
        toolTip: jest.fn()
      };
      const wrapper = shallow(<Input {...props} />);
      expect(wrapper.find(Tooltip).length).toBe(1);
    });
  });
});
