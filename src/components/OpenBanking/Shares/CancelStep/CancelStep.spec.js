import React from "react";
import { shallow } from "enzyme";
import CancelStep from "./CancelStep";
import { Button } from "react-bocombbm-components";

jest.mock("../../../../utils/redirect");

delete window.location;

window.location = {
  assign: jest.fn()
};

let context = {
  state: { selectedBank: { consentId: 1111, organisationName: "Banco BBM" } }
};

const props = {
  currentStep: 4
};

describe("CancelStep", () => {
  beforeEach(() => {
    React.useContext = jest.fn(() => context);
  });
  it("should match snapshot", () => {
    expect(shallow(<CancelStep {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot will null", () => {
    const newProps = { currentStep: 2 };
    expect(shallow(<CancelStep {...newProps} />)).toMatchSnapshot();
  });

  it("should redirect to my-shares", () => {
    const component = shallow(<CancelStep {...props} />);
    component
      .find(Button)
      .at(0)
      .simulate("click");
    expect(window.location.assign).toHaveBeenCalledWith(
      "/open-banking/my-shares"
    );
  });
});
