import React from "react";
import { shallow } from "enzyme";
import { Button } from "react-bocombbm-components";
import ClickWrapper from "../../../utils/clickWrapper";
import QrCode from "./QrCode";
import { Wrapper, FormWrapper } from "./styles";
import Input from "../../common/Input";

const props = {
  current: 6,
  submitToken: jest.fn(),
  changeCurrentScreen: jest.fn(),
  handleConfirmButton: jest.fn(),
  openToastr: jest.fn(),
  closeToastr: jest.fn(),
  activatedAuthFactor: true
};

describe("QrCode component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<QrCode {...props} />)).toMatchSnapshot();
  });

  it("should call handleConfirmButton when clicked", () => {
    const shallowComponent = shallow(<QrCode {...props} />);
    props.submitToken.mockReturnValue(true);

    shallowComponent
      .find(Wrapper)
      .find(FormWrapper)
      .find(ClickWrapper)
      .find(Button)
      .simulate("click");

    expect(props.handleConfirmButton).toHaveBeenCalled;
  });

  it("should submitToken return false", () => {
    const shallowComponent = shallow(<QrCode {...props} />);
    props.submitToken.mockReturnValue(false);

    shallowComponent
      .find(Wrapper)
      .find(FormWrapper)
      .find(ClickWrapper)
      .find(Button)
      .simulate("click");

    expect(props.handleConfirmButton).toHaveBeenCalled;
  });

  it("should submitToken", () => {
    const shallowComponent = shallow(<QrCode {...props} />);
    const input = shallowComponent.find(Input);
    input.prop("onChange")({ target: { value: "mock" } });

    expect(shallowComponent).toMatchSnapshot();
  });
});
