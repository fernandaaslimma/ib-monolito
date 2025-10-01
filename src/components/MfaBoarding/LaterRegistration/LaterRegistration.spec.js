import React from "react";
import { shallow } from "enzyme";
import LaterRegistration from "./LaterRegistration";
import { Button } from "react-bocombbm-components";

const props = {
  current: 1,
  changeCurrentScreen: jest.fn(),
  handleClose: jest.fn()
};

describe("AppAuth component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<LaterRegistration {...props} />)).toMatchSnapshot();
  });

  it("should call changeCurrentScreen when clicked", () => {
    const shallowComponent = shallow(<LaterRegistration {...props} />);
    shallowComponent
      .find(Button)
      .at(0)
      .simulate("click");
    expect(props.changeCurrentScreen).toHaveBeenCalledWith(1);
  });

  it("should call changeisExiting when clicked", () => {
    const shallowComponent = shallow(<LaterRegistration {...props} />);
    shallowComponent
      .find(Button)
      .at(1)
      .simulate("click");
    expect(props.handleClose).toHaveBeenCalled();
  });
});
