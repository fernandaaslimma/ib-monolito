import React from "react";
import { shallow } from "enzyme";
import * as redirect from "../../../utils/redirect";

import RegistrationDataFormResult from "./RegistrationDataFormResult";
import Button from "react-bocombbm-components/dist/Button";
import Header from "../../common/Modal/Header";

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

const props = {
  closeModal: jest.fn(),
  setNotificationStatus: jest.fn()
};

describe("Registration Data Form Result component", () => {
  it("should match snapshot", () => {
    expect(
      shallow(<RegistrationDataFormResult {...props} />)
    ).toMatchSnapshot();
  });

  it("should close modal and redirect to /home when clicking on close button", () => {
    const redirectSpy = jest.spyOn(redirect, "redirect");
    const wrapper = shallow(<RegistrationDataFormResult {...props} />);
    const close = wrapper.find(Button);

    close.simulate("click");

    expect(props.closeModal).toHaveBeenCalled();
    expect(redirect.redirect.calledOnce);
    expect(redirectSpy).toHaveBeenCalledWith("/home");
  });

  it("should close modal and redirect to /home when clicking on close button", () => {
    const redirectSpy = jest.spyOn(redirect, "redirect");
    const wrapper = shallow(<RegistrationDataFormResult {...props} />);
    const close = wrapper.find(Header);

    close.prop("onClickClose")();

    expect(props.closeModal).toHaveBeenCalled();
    expect(redirect.redirect.calledOnce);
    expect(redirectSpy).toHaveBeenCalledWith("/home");
  });
});
