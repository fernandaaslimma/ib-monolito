import React from "react";
import { shallow } from "enzyme";

import Transactions from "./Transactions";
import RadioButtonRounded from "../../common/RadioButtonRounded";
import { Button, Input } from "react-bocombbm-components";

const props = {
  isEmptyFunds: false,
  isEmptyFixedIncome: false,
  isEmptyEquites: true,
  onFilter: jest.fn(),
  resetStates: jest.fn(),
  fundsIncomeTransactions: [
    {
      assetName: "IBIUNA HEDGE ST FEEDER I FIC MULTIMERCADO",
      assetType: "Funds",
      assetTypeLabel: "Fundos",
      date: "2021-05-14",
      grossValue: 47072.59,
      incomeTax: 0,
      iof: 0,
      netValue: 47072.59,
      type: "APLICAÇÃO"
    }
  ],
  fixedIncomeTransactions: [
    {
      assetName: "COMPROMISSADA",
      assetType: "FixedIncome",
      assetTypeLabel: "Renda Fixa",
      date: "2021-05-14",
      grossValue: 9811.56,
      incomeTax: 0,
      iof: 0,
      netValue: 9811.56,
      type: "COMPRA"
    }
  ],
  equityIncomeTransactions: [],
  totalCountFunds: 107,
  totalCountFixedIncome: 392,
  totalCountEquitesIncome: 0,
  seeMoreMovimentations: jest.fn(),
  loadingFunds: false,
  goToFilterFunds: undefined,
  filterButtonFillFunds: undefined,
  loadingFixedIncome: false,
  goToFilterFixedIncome: undefined,
  filterButtonFillFixedIncome: undefined,
  loadingEquityIncome: false,
  goToFilterEquityIncome: undefined,
  filterButtonFillEquityIncome: undefined,
  loadingFundsMovimentations: false,
  loadingFixedIncomeMovimentations: false,
  loadingEquitesIncomeMovimentations: false,
  futureDateFunds: false,
  futureDateFixedIncome: false,
  futureDateEquitesIncome: false,
  setPickedActive: jest.fn(),
  userInfo: {
    tenants: ["Individual"]
  },
};

describe("Funds Tab", () => {
  let setState, useStateSpy, useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementation(f => f());
  };
  beforeEach(() => {
    setState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(init => [init, setState]);

    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });

  it("should match snapshot ", () => {
    expect(shallow(<Transactions {...props} />)).toMatchSnapshot();
  });

  it("Should click in fund radio button", () => {
    const component = shallow(<Transactions {...props} />);
    component
      .find(RadioButtonRounded)
      .at(0)
      .prop("setValue")();
    expect(props.setPickedActive).toHaveBeenCalled();
  });

  it.skip("Should click in clendar button", () => {
    const component = shallow(<Transactions {...props} />);
    component
      .find(Button)
      .at(0)
      .prop("onClick")();
    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should click in 7 radio button", () => {
    const component = shallow(<Transactions {...props} />);
    component
      .find(RadioButtonRounded)
      .at(3)
      .prop("setValue")();
    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should insert date drom", () => {
    const component = shallow(<Transactions {...props} />);
    component
      .find(Input)
      .at(0)
      .prop("onChange")({ target: { value: "08/06/2021" } });
    expect(setState).toHaveBeenCalled();
  });
  it.skip("Should insert date to", () => {
    const component = shallow(<Transactions {...props} />);
    component
      .find(Input)
      .at(1)
      .prop("onChange")({ target: { value: "08/07/2021" } });
    expect(setState).toHaveBeenCalled();
  });
  it.skip("Should click in fund radio button", () => {
    const component = shallow(<Transactions {...props} />);
    component
      .find(Button)
      .at(2)
      .prop("onClick")();
    expect(setState).toHaveBeenCalled();
  });
});

// describe("Funds Tab with picked period", () => {
//   let setState, useStateSpy;
//   beforeEach(() => {
//     setState = jest.fn(() => "7 dias");
//     useStateSpy = jest.spyOn(React, "useState");
//     useStateSpy.mockImplementationOnce(init => [init, useState]);
//   });

//   it("Should click in", () => {
//     const component = shallow(<Transactions {...props} />);
//     component
//       .find(Button)
//       .at(3)
//       .prop("onClick")();
//     expect(setState).toHaveBeenCalled();
//   });
// });
