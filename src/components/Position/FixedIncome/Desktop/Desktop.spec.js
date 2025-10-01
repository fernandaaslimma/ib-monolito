import React from "react";
import { shallow } from "enzyme";

import Desktop from "./Desktop";
import { Button } from "react-bocombbm-components";

const pendingTransactions = [
  {
    id: 123,
    type: "subscription",
    typeLabel: "subscription",
    idempotencyKey: "0b5ecefd-c892-4fdf-a3ce-c77b9259d309",
    transactionValue: 123456.99,
    transactionDate: "2021-02-22",
    product: {
      id: 456,
      name: "BOCOM BBM CORPORATE CREDIT FIC MULTIMERCADO CRÉDITO PRIVADO",
      riskProfile: "Moderate",
      riskProfileLabel: "Moderado",
      classType: "HedgeFund",
      classTypeLabel: "Multimercado"
    }
  },
  {
    id: 123,
    type: "subscription",
    typeLabel: "subscription",
    idempotencyKey: "0b5ecefd-c892-4fdf-a3ce-c77b9259d309",
    transactionValue: 123456.99,
    transactionDate: "2021-02-17",
    product: {
      id: 456,
      name: "BOCOM BBM CORPORATE CREDIT FIC MULTIMERCADO CRÉDITO PRIVADO",
      riskProfile: "Aggressive",
      riskProfileLabel: "Agressivo",
      classType: "HedgeFund",
      classTypeLabel: "Multimercado"
    }
  }
];

const fixedIncome = [
  {
    name: "name",
    date: "12/12",
    issuer: "issuer",
    maturityDate: "12/12",
    iofBalance: 0,
    netBalance: 123,
    grossResultBalance: 123,
    grossBalance: 123,
    incomeTaxBalance: 1,
    portfolioShare: 123,
    indexer: "di",
    indexerRate: "12"
  }
];

const totalFixedIncome = [
  {
    assetType: "FixedIncome",
    assetTypeLabel: "Fixed Income",
    date: "2018-05-04",
    grossBalance: 264209.54,
    grossResultBalance: 15557.26,
    incomeTaxBalance: 0,
    iofBalance: 0,
    netBalance: 264209.54,
    portfolioShare: 72.59
  }
];

const props = {
  pendingTransactions,
  fixedIncome,
  totalFixedIncome,
  verifyOnGoingTransactions: jest.fn(),
  userInfo: {
    givenName: "givenName",
    email: "mail@mail.com",
    surname: "surname",
    roles: ["CreateTransaction"],
    preferredLanguage: "en-US"
  }
};

describe("Mobile component", () => {
  it("should match snapshot", () => {
    const loadingProps = { ...props, isEmpty: true };
    expect(shallow(<Desktop {...loadingProps} />)).toMatchSnapshot();
  });
  it("should redirect to ", () => {
    const totalLcaProps = { ...props, totalLca: 2 };

    const component = shallow(<Desktop {...totalLcaProps} />);

    component.find(Button).simulate("click");

    expect(props.verifyOnGoingTransactions).toHaveBeenCalled();
  });
});
