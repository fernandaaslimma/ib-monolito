import React from "react";
import { shallow } from "enzyme";
import { Button } from "react-bocombbm-components";
import ClickWrapper from "../../../utils/clickWrapper";
import AppAuth from "./AppAuth";

const props = {
  current: 1,
  changeCurrentScreen: jest.fn()
};

describe("AppAuth component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<AppAuth {...props} />)).toMatchSnapshot();
  });

  it("should call changeCurrentScreen when clicked", () => {
    const shallowComponent = shallow(<AppAuth {...props} />);
    shallowComponent
      .find("Fragment")
      .find(ClickWrapper)
      .find(Button)
      .simulate("click");
    expect(props.changeCurrentScreen).toHaveBeenCalledWith(4);
  });
});
