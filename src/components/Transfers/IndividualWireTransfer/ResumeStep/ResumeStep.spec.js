import React from "react";
import { shallow } from "enzyme";
import ResumeStep from "./ResumeStep";
import deepClone from "../../../../utils/deepClone";
import { configure, fireEvent, render, screen } from "@testing-library/react";
import { InstanceContext } from "../IndividualWireTransfer";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

jest.mock("../../../../utils/validations/EFT", () => ({
  isToday: () => false
}));

const thisProps = {
  goToStep: jest.fn(),
  currentStep: 3
};

const props = {
  favoredData: {
    bank: "bla",
    agency: "001",
    account: "1111",
    verifyDigit: "0"
  },
  transferData: { value: "5000,00", date: "11/11/2020" }
};

const state = {
  selectedAccount: { name: "Yuari", document: "11111111111" }
};

const context = {
  state,
  props,
  resetClassAndStoreState: jest.fn()
};

const newContext = deepClone(context);
newContext.props.favoredData = null;
newContext.props.transferData = null;

describe("ResumeStep component", () => {
  it("Should match snapshpt", () => {
    const component = shallow(
      <InstanceContext.Provider value={context}>
        <ResumeStep {...thisProps} />
      </InstanceContext.Provider>
    );

    expect(component).toMatchSnapshot();
  });

  it("Should match snapshot without info", () => {
    const component = shallow(
      <InstanceContext.Provider value={newContext}>
        <ResumeStep {...thisProps} />
      </InstanceContext.Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it("should click on new tranfer button", () => {
    render(
      <InstanceContext.Provider value={context}>
        <ResumeStep {...thisProps} />
      </InstanceContext.Provider>
    );

    const component = screen.getByTestId("NewTransfer");
    fireEvent.click(component);

    expect(thisProps.goToStep).toHaveBeenCalledWith(1);
  });
});
