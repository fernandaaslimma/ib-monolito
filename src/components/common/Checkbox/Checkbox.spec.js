import React from "react";
import { shallow, mount } from "enzyme";

import Checkbox from "./Checkbox";

describe("Checkbox component", () => {
  const props = {
    label: "label 1",
    onChange: jest.fn()
  };

  it("should match snapshot", () => {
    expect(shallow(<Checkbox {...props} />)).toMatchSnapshot();
  });

  it("should change function", () => {
    const component = mount(<Checkbox {...props} />);
    component.find("input").prop("onChange")();

    expect(props.onChange).toHaveBeenCalled();
  });
});
