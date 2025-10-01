import React from "react";
import { shallow, mount } from "enzyme";

import RadioButtonRounded from "./RadioButtonRounded";

describe("RadioButtonRounded component", () => {
  const props = {
    radioName: "radioTest",
    itemKey: 0,
    selectedValue: false,
    setValue: jest.fn(),
    buttonValue: "Option"
  };

  it("should match snapshot", () => {
    expect(shallow(<RadioButtonRounded {...props} />)).toMatchSnapshot();
  });

  it("should change function", () => {
    const component = mount(<RadioButtonRounded {...props} />);
    component.find("input").simulate("change");

    expect(props.setValue).toBeCalledWith("Option");
  });
});
