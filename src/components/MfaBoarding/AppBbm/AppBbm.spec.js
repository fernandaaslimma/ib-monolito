import React from "react";
import { shallow } from "enzyme";
import { Button } from "react-bocombbm-components";
import AppBbm from "./AppBbm";
import ClickWrapper from "../../../utils/clickWrapper";

const props = {
  current: 1,
  changeCurrentScreen: jest.fn(),
  handleClose: jest.fn()
};

describe("AppAuth component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<AppBbm {...props} />)).toMatchSnapshot();
  });

  it("should call changeCurrentScreen when clicked", () => {
    const shallowComponent = shallow(<AppBbm {...props} />);
    shallowComponent
      .find("Fragment")
      .find(ClickWrapper)
      .find(Button)
      .first()
      .simulate("click");
    expect(props.handleClose).toHaveBeenCalled;
  });

  it("should call changeCurrentScreen when clicked", () => {
    const shallowComponent = shallow(<AppBbm {...props} />);
    shallowComponent
      .find(Button)
      .at(1)
      .simulate("click");
    expect(props.changeCurrentScreen).toHaveBeenCalledWith(2);
  });
});
