import React from "react";
import { shallow } from "enzyme";
import Summary from "./Summary";

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

describe("Summary component", () => {
  let props;

  beforeEach(() => {
    props = {
      getIndexes: jest.fn(),
      getTransactions: jest.fn(),
      getConsolidatedPosition: jest.fn(),
      getConsolidatedAssets: jest.fn(),
      getPendingTransactions: jest.fn(),
      indexes,
      consolidatedPosition,
      consolidatedAssets,
      transactions,
      pendingTransactions
    };
  });

  it("should match snapshot", () => {
    expect(shallow(<Summary {...props} />)).toMatchSnapshot();
  });

  it("should invoke getIndexes", () => {
    shallow(<Summary {...props} />);
    expect(props.getIndexes).toHaveBeenCalledTimes(1);
  });

  it("should invoke getTransactions", () => {
    shallow(<Summary {...props} />);
    expect(props.getTransactions).toHaveBeenCalledTimes(1);
  });

  it("should invoke getConsolidatedPosition", () => {
    shallow(<Summary {...props} />);
    expect(props.getConsolidatedPosition).toHaveBeenCalledTimes(1);
  });

  it("should invoke getConsolidatedAssets", () => {
    shallow(<Summary {...props} />);
    expect(props.getConsolidatedAssets).toHaveBeenCalledTimes(1);
  });

  it("should invoke getPendingTransactions", () => {
    shallow(<Summary {...props} />);
    expect(props.getPendingTransactions).toHaveBeenCalledTimes(1);
  });
});
