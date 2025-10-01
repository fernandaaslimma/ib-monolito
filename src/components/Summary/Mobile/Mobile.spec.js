import React from "react";
import { shallow } from "enzyme";

import Mobile from "./Mobile";
import Button from "react-bocombbm-components/dist/Button";
import { INVESTMENT_PRODUCTS_LIST_URL } from "../../../utils/constants";

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => {},
  isZhCN: () => false,
  isPtBR: () => true,
  getDateFieldPlaceholderByLocale: () => "DD/MM/YYYY"
}));
jest.mock("../../../utils/redirect");
const hardRedirectMock = require("../../../utils/redirect").redirect;

const indexes = [
  {
    index: "CDI",
    monthAcrrued: 0.3,
    yearAccrued: 12.7
  },
  {
    index: "Dolar",
    monthAcrrued: 0.7,
    yearAccrued: 10.7
  }
];

const transactions = [
  {
    date: "2017-01-01",
    grossValue: 123.123,
    type: "Ativo",
    assetName: "LCI"
  }
];

const consolidatedPosition = [
  {
    name: "Fixed Income",
    netBalance: 123213.2,
    grossBalance: 12.3,
    portfolioShare: 23
  }
];

const consolidatedAssets = [
  {
    assetClass: "Fixed Income",
    netBalance: 123213.2,
    grossBalance: 12.3,
    portfolioShare: 23
  }
];
const pendingTransactions2 = [
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
  }
];
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

describe("Summary Mobile component", () => {
  it("should update state on transitionEnd", () => {
    const wrapper = shallow(
      <Mobile
        indexes={indexes}
        consolidatedPosition={consolidatedPosition}
        consolidatedAssets={consolidatedAssets}
        transactions={transactions}
        pendingTransactions={pendingTransactions}
      />
    );

    expect(wrapper.state()).toEqual({ activeChart: 0 });

    wrapper.instance().onTransactionEnd(123);

    expect(wrapper.state()).toEqual({ activeChart: 123 });
  });

  it("should redirect to investments", () => {
    const wrapper = shallow(
      <Mobile
        indexes={indexes}
        consolidatedPosition={consolidatedPosition}
        consolidatedAssets={consolidatedAssets}
        transactions={transactions}
        pendingTransactions={pendingTransactions2}
      />
    );

    wrapper.find(Button).simulate("click");

    expect(hardRedirectMock).toHaveBeenCalledWith(INVESTMENT_PRODUCTS_LIST_URL);
  });
});
