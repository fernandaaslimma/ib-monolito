import React from "react";
import { shallow, mount } from "enzyme";
import Radio from "./Radio";

jest.mock("uuid", () => {
  return { v4: () => "12345-abcvbcvb-23ddfsfd-4444" };
});

describe("Radio component", () => {
  const props = {
    label: "label 1",
    onChange: jest.fn()
  };

  it("should match snapshot", () => {
    expect(shallow(<Radio {...props} />)).toMatchSnapshot();
  });

  it("should change function", () => {
    const component = mount(<Radio {...props} />);
    component.find("input").prop("onChange")();

    expect(props.onChange).toHaveBeenCalled();
  });
});
