import React from "react";
import { shallow } from "enzyme";
import ResumeStep from "./ResumeStep";
import { isPtBR } from "../../../../utils/i18n";
import { InstanceContext } from "../fundsContext";
import { configure, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  isZhCN: () => false,
  isPtBR: jest.fn(),
  getDateFieldPlaceholderByLocale: jest.fn(),
  getSufixFormatHourByLocate: jest.fn()
}));

jest.mock("../../../../utils/redirect");
const redirectMock = require("../../../../utils/redirect").redirect;
redirectMock.mockImplementation(() => jest.fn());

const API = {
  id: 1,
  name: "BAHIA AM MARAÚ FEEDER BOCOM BBM FIC MULTIMERCADO",
  cnpj: "29.733.842/0001-34",
  description: null,
  manager: "Bahia Asset Management",
  administrator: null,
  minimumBalance: 20000,
  minimumTransaction: 10000,
  initialInvestment: 20000,
  riskProfile: "Moderate",
  riskProfileLabel: "Moderado",
  returns: {
    twelveMonths: null,
    year: null,
    thirtySixMonths: null,
    fortyEightMonths: null,
    sinceInception: null
  },
  class: "Hedge Funds",
  classLabel: "Multimercado",
  subscription: {
    type: "Corrido",
    conversionDays: 20,
    settlementDays: 1
  },
  redemption: {
    type: "Corrido",
    conversionDays: 1,
    settlementDays: 0
  },
  benchmark: "CDI",
  quotaDate: "2020-12-21",
  administrationFee: 0.2,
  performanceFee: 0.2,
  inceptionDate: null
};

const thisProps = {
  currentStep: 5
};

const context = {
  props: {
    openToastr: jest.fn(),
    availableDateRanges: [
      {
        startTime: 1558951200000,
        endTime: 1558972800000
      }
    ]
  },
  state: {
    selectedFund: API,
    investmentValue: "24,00"
  }
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

  it("Should match snapshot with isPtBr as false", () => {
    isPtBR.mockImplementation(() => false);

    const component = shallow(
      <InstanceContext.Provider value={context}>
        <ResumeStep {...thisProps} />
      </InstanceContext.Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it("Should match snapshot with currentScreen not 5", () => {
    const newProps = { ...thisProps, currentStep: 4 };
    const component = shallow(
      <InstanceContext.Provider value={newProps}>
        <ResumeStep {...thisProps} />
      </InstanceContext.Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it("Should go to investments", () => {
    render(
      <InstanceContext.Provider value={context}>
        <ResumeStep {...thisProps} />
      </InstanceContext.Provider>
    );

    const component = screen.getByTestId("concludeButton");
    fireEvent.click(component);
    expect(redirectMock).toHaveBeenCalled();
  });
});
