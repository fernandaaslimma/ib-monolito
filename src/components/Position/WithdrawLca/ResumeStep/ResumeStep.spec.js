import React from "react";
import { shallow } from "enzyme";
import ResumeStep from "./ResumeStep";
import { InstanceContext } from "../withdrawLcaContext";
import { configure, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

jest.mock("../../../../utils/redirect");

const redirectMock = require("../../../../utils/redirect").redirect;
const thisProps = {
  goToStep: jest.fn(),
  currentStep: 3
};

const props = {
  serverTime: null,
  responseLcaDetails: [
    {
      positionId: "541758",
      product: "LCA",
      issuer: "CARLINDA Gantois",
      issueDate: "2019-10-28",
      maturityDate: "2020-10-29",
      grossValue: 600,
      netValue: 600,
      quantity: 3,
      unitPrice: 200
    },
    {
      positionId: "541761",
      product: "LCA",
      issuer: "CARLINDA Gantois",
      issueDate: "2019-10-28",
      maturityDate: "2020-10-29",
      grossValue: 4900,
      netValue: 4900,
      quantity: 7,
      unitPrice: 700
    },
    {
      positionId: "541764",
      product: "LCA",
      issuer: "CARLINDA Gantois",
      issueDate: "2019-10-28",
      maturityDate: "2020-10-29",
      grossValue: 3200,
      netValue: 3200,
      quantity: 4,
      unitPrice: 800
    },
    {
      positionId: "541765",
      product: "LCA",
      issuer: "CARLINDA Gantois",
      issueDate: "2019-10-28",
      maturityDate: "2020-10-29",
      grossValue: 3200,
      netValue: 3200,
      quantity: 5,
      unitPrice: 800
    },
    {
      positionId: "541761",
      product: "LCA",
      issuer: "CARLINDA Gantois",
      issueDate: "2019-10-28",
      maturityDate: "2020-10-29",
      grossValue: 4900,
      netValue: 4900,
      quantity: 7,
      unitPrice: 700
    },
    {
      positionId: "541764",
      product: "LCA",
      issuer: "CARLINDA Gantois",
      issueDate: "2019-10-28",
      maturityDate: "2020-10-29",
      grossValue: 3200,
      netValue: 3200,
      quantity: 4,
      unitPrice: 800
    }
  ]
};

const state = {
  valueToBeRescued: 2
};

const context = {
  props,
  state,
  resetStates: jest.fn()
};

describe("ResumeStep component", () => {
  it("Should match snapshpt", () => {
    const component = shallow(
      <InstanceContext.Provider value={context}>
        <ResumeStep {...thisProps} />
      </InstanceContext.Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it("should click on close button", () => {
    render(
      <InstanceContext.Provider value={context}>
        <ResumeStep {...thisProps} />
      </InstanceContext.Provider>
    );

    const component = screen.getByTestId("closeResume");

    fireEvent.click(component);
    expect(redirectMock).toHaveBeenCalledWith("/home");
  });
});
