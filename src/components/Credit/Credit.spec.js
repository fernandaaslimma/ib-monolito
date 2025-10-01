import React from "react";
import { shallow } from "enzyme";
import Credit from "./Credit";
import DefaultContent from "../common/DefaultContent";

jest.mock("../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  getDateFieldPlaceholderByLocale: () => "MM/DD/YYYY"
}));

export const crediContracts = [
  {
    id: "24016",
    number: "1234567890",
    product: "CCB",
    paymentMethod: "TED",
    rates: {
      annual: 10.5,
      nominal: 20.5,
      effective: 30
    },
    date: "2019-11-16T12:33:54.271Z",
    tenure: {
      total: 200,
      remaining: 10
    }
  }
];

export const installmentBalances = [
  {
    referenceDate: "2018-11-16T12:33:54.271Z",
    maturityDate: "2018-11-16T12:33:54.271Z",
    principalValue: 50000.0,
    monetaryAdjustmentValue: 150000,
    interestValue: 200000,
    latePaymentCommisionValue: 5000,
    iofValue: 20000,
    defaultInterestValue: 100000,
    fineValue: 150000,
    totalValue: 1000000000
  }
];

const getContracts = jest.fn(() => Promise.resolve());
const getInstallmentBalances = jest.fn(() => Promise.resolve());

describe("Credit component", () => {
  it("should match snapshot", () => {
    const component = shallow(
      <Credit creditContracts={crediContracts} getContracts={getContracts} />
    );
    expect(component).toMatchSnapshot();
  });

  it("should match snapshot with empty state", () => {
    const component = shallow(
      <Credit creditContracts={[]} getContracts={getContracts} />
    );
    expect(component).toMatchSnapshot();
  });

  it("should pass through empty state default icon", () => {
    const component = shallow(
      <Credit creditContracts={[]} getContracts={getContracts} />
    );
    component.setState({ isEmpty: true });

    component.find(DefaultContent).prop("Icon")();
    expect(component).toMatchSnapshot();
  });

  it("should go back to contracts", () => {
    const setStateSpy = jest.spyOn(Credit.prototype, "setState");
    const component = shallow(
      <Credit creditContracts={[]} getContracts={getContracts} />
    );
    component.instance().backToContracts();

    expect(setStateSpy).toHaveBeenCalledWith({ position: 0 });
  });

  it("should click and go to contract detail", () => {
    const setStateSpy = jest.spyOn(Credit.prototype, "setState");
    const component = shallow(
      <Credit
        creditContracts={crediContracts}
        getContracts={getContracts}
        getInstallmentBalances={getInstallmentBalances}
      />
    );
    component
      .instance()
      .rowClick({ number: "12345", date: "2018-11-16T12:33:54.271Z" })
      .then(() => expect(setStateSpy).toHaveBeenCalledTimes(2));
  });
});
