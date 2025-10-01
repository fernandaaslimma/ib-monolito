import React from "react";
import { shallow } from "enzyme";
import { spy } from "sinon";

import * as redirect from "../../../utils/redirect";
import Button from "../../common/Button";
import Link from "../../common/Link";
import SuitabilityFormResult from "./SuitabilityFormResult";

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  isPtBR: () => false
}));

jest.mock("../../../utils/store", () => ({
  getState: jest.fn()
}));

const props = {
  closeModal: jest.fn(),
  checkMFA: jest.fn(() => Promise.resolve()),
  getAuthFactors: jest.fn(() => Promise.resolve()),
  approveSuitability: jest.fn(() => Promise.resolve()),
  setNotificationStatus: jest.fn(() => Promise.resolve()),
  submitSuitabilityAnswers: jest.fn(() => Promise.resolve()),
  suitabilityResult: {
    profile: {
      name: "mock",
      description: "mock mock mock"
    }
  }
};

describe("SuitabilityForm component", () => {
  it("should match snapshot", () => {
    expect(shallow(<SuitabilityFormResult {...props} />)).toMatchSnapshot();
  });

  it("should close modal and redirect to /home when clicking on agree button", () => {
    const redirectSpy = spy(redirect, "redirect");

    const wrapper = shallow(<SuitabilityFormResult {...props} />);
    const agree = wrapper.find(Link).at(0);

    agree.simulate("click");

    props.setNotificationStatus().then(() => {
      expect(props.closeModal).toHaveBeenCalled();
      expect(redirect.redirect.calledOnce);
      expect(redirectSpy.getCalls()[0].args[0]).toBe("/home");

      redirect.redirect.restore();
    });
  });

  it("should close modal and hardRedirect to /suitability when clicking on redo button", () => {
    const redirectSpy = spy(redirect, "hardRedirect");

    const wrapper = shallow(<SuitabilityFormResult {...props} />);
    const redo = wrapper.find(Button).at(0);

    redo.simulate("click");

    expect(props.closeModal).toHaveBeenCalled();
    expect(redirect.hardRedirect.calledOnce);
    expect(redirectSpy.getCalls()[0].args[0]).toBe("/suitability");

    redirect.hardRedirect.restore();
  });

  it("should render the ExitConfirmation component correctly", () => {
    const wrapper = shallow(<SuitabilityFormResult {...props} />);
    const exitConfirmation = wrapper.instance().renderExitConfirmation();

    expect(exitConfirmation).toMatchSnapshot();
  });
});
