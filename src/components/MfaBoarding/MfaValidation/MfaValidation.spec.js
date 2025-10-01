import React from "react";
import { shallow } from "enzyme";
import MfaValidation from "./MfaValidation";
import EFTToken from "../../common/EFTToken";
import Button from "react-bocombbm-components/dist/Button";
const props = {
  props: { mfaTokenValidated: undefined },
  changeCurrentScreen: jest.fn(),
  preventDefault: jest.fn(),
  authFactorResponse: {
    authFactorID: "29c6368f-cc9b-4458-8db9-b56e62b2f4d4",
    activationURL:
      "otpauth://totp/BOCOM%20BBM:pj1@bocombbm.com.br?secret=XOSONHXJDCDGSC2YX5TIXL3OIE======&issuer=BOCOM%20BBM"
  }
};

describe("MfaValidation component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<MfaValidation {...props} />)).toMatchSnapshot();
  });

  it("should call changeCurrentPage onMFAConfirmation", () => {
    const shallowComponent = shallow(<MfaValidation {...props} />);
    shallowComponent.find(EFTToken).prop("onMFAConfirmation")();
    expect(props.changeCurrentScreen).toHaveBeenCalledWith(6);
  });

  it("should call changeCurrentPage onMFAConfirmation", () => {
    const shallowComponent = shallow(<MfaValidation {...props} />);
    shallowComponent.find(EFTToken).prop("onMFAError")();
    expect(shallowComponent).toMatchSnapshot();
  });

  it("should call changeCurrentScreen on click Button", () => {
    const shallowComponent = shallow(<MfaValidation {...props} />);
    shallowComponent.find(Button).simulate("click");
    expect(props.changeCurrentScreen).toHaveBeenCalledWith(2);
  });
});
