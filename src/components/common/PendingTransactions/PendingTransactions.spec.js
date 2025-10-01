import React from "react";
import { shallow } from "enzyme";

import PendingTransactions from "./PendingTransactions";

const pendingTransactions = [
  {
    id: 2692,
    type: "subscription",
    typeLabel: "Aplicação",
    idempotencyKey: "3E1A83FA-9441-44D8-AD13-4C007E540C71",
    transactionValue: 20000.0,
    transactionDate: "2021-03-11",
    product: {
      id: 5,
      name: "BAHIA AM FI RENDA FIXA REFERENCIADO DI",
      riskProfile: "Conservative",
      riskProfileLabel: "Conservador",
      classType: "Fixed Income",
      classTypeLabel: "Renda Fixa"
    }
  },
  {
    id: 2693,
    type: "subscription",
    typeLabel: "Aplicação",
    idempotencyKey: "0B6887B0-CDA2-4B99-9B4C-9538A92CF98D",
    transactionValue: 20000.01,
    transactionDate: "2021-03-11",
    product: {
      id: 5,
      name: "BAHIA AM FI RENDA FIXA REFERENCIADO DI",
      riskProfile: "Conservative",
      riskProfileLabel: "Conservador",
      classType: "Fixed Income",
      classTypeLabel: "Renda Fixa"
    }
  },
  {
    id: 2694,
    type: "subscription",
    typeLabel: "Aplicação",
    idempotencyKey: "796434E8-9DE8-42D2-A4F8-417628D9B12A",
    transactionValue: 20000.02,
    transactionDate: "2021-03-11",
    product: {
      id: 5,
      name: "BAHIA AM FI RENDA FIXA REFERENCIADO DI",
      riskProfile: "Conservative",
      riskProfileLabel: "Conservador",
      classType: "Fixed Income",
      classTypeLabel: "Renda Fixa"
    }
  },
  {
    id: 123,
    type: "subscription",
    typeLabel: "subscription",
    idempotencyKey: "0b5ecefd-c892-4fdf-a3ce-c77b9259d309",
    transactionValue: 123456.99,
    transactionDate: "2021-03-09",
    product: {
      id: 456,
      name: "BOCOM BBM CORPORATE CREDIT FIC MULTIMERCADO CRÉDITO PRIVADO",
      riskProfile: "Aggressive",
      riskProfileLabel: "Agressivo",
      classType: "HedgeFund",
      classTypeLabel: "Multimercado"
    }
  },
  {
    id: 124,
    type: "subscription",
    typeLabel: "subscription",
    idempotencyKey: "0b5ecefd-c892-4fdf-a3ce-c77b9259d309",
    transactionValue: 123456.99,
    transactionDate: "2021-03-10",
    product: {
      id: 456,
      name: "BOCOM BBM CORPORATE CREDIT FIC MULTIMERCADO CRÉDITO PRIVADO",
      riskProfile: "Aggressive",
      riskProfileLabel: "Agressivo",
      classType: "HedgeFund",
      classTypeLabel: "Multimercado"
    }
  },
  {
    id: 125,
    type: "subscription",
    typeLabel: "subscription",
    idempotencyKey: "0b5ecefd-c892-4fdf-a3ce-c77b9259d309",
    transactionValue: 123456.99,
    transactionDate: "2021-03-08",
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

describe("Pending transactions ", () => {
  it("should match snapshot mobile", () => {
    const props = {
      pendingTransactions: pendingTransactions
    };
    expect(shallow(<PendingTransactions {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot desktop", () => {
    const props = {
      pendingTransactions: pendingTransactions,
      mode: "desktop"
    };
    expect(shallow(<PendingTransactions {...props} />)).toMatchSnapshot();
  });
});
