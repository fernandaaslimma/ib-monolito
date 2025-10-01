import React from "react";
import { shallow } from "enzyme";
import ClickWrapper from "../../../utils/clickWrapper";
import Success from "./Success";
import { BackHomeButton } from "./styles";

const props = {
  handleClose: jest.fn()
};

describe("Success component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<Success {...props} />)).toMatchSnapshot();
  });

  it("should call redirect function when clicked", () => {
    const wrapper = shallow(<Success {...props} />);
    wrapper
      .find(ClickWrapper)
      .find(BackHomeButton)
      .at(0)
      .simulate("click");

    expect(props.handleClose).toHaveBeenCalled();
  });
});
