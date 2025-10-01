import React from "react";
import { shallow } from "enzyme";
import ConclusionStep from "./ConclusionStep";
import { Button } from "react-bocombbm-components";

jest.mock("../../../../utils/redirect");

delete window.location;

window.location = {
  assign: jest.fn()
};

let context = {
  props: {
    showNavigationMenu: jest.fn(),
    consentInfo: { consentId: 1111, organisationName: "Banco BBM" }
  }
};

const props = {
  currentStep: 4
};

describe("ConclusionStep", () => {
  beforeEach(() => {
    React.useContext = jest.fn(() => context);
  });
  it("should match snapshot", () => {
    expect(shallow(<ConclusionStep {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot will null", () => {
    const newProps = { currentStep: 2 };
    expect(shallow(<ConclusionStep {...newProps} />)).toMatchSnapshot();
  });

  it("should redirect to home", () => {
    const component = shallow(<ConclusionStep {...props} />);
    component
      .find(Button)
      .at(0)
      .simulate("click");
    expect(window.location.assign).toHaveBeenCalledWith("/home");
  });

  it("should redirect to shares", () => {
    const component = shallow(<ConclusionStep {...props} />);
    component
      .find(Button)
      .at(1)
      .simulate("click");
    expect(window.location.assign).toHaveBeenCalledWith(
      "/open-banking/my-shares"
    );
  });
});
