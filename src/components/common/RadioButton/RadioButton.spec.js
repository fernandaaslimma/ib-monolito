import React from "react";
import { shallow, mount } from "enzyme";

import RadioButton from "./RadioButton";

describe("RadioButton component", () => {
  const props = {
    label: ["label 1", "label 2"],
    onChange: jest.fn()
  };

  it("should match snapshot", () => {
    expect(shallow(<RadioButton {...props} />)).toMatchSnapshot();
  });

  it("should change function", () => {
    const component = mount(<RadioButton {...props} />);
    component.find("input").prop("onChange")();

    expect(props.onChange).toHaveBeenCalled();
  });
});
