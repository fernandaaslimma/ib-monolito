import React from "react";
import { shallow } from "enzyme";

import ContractSummary from "./ContractSummary";

const ContractSummaryProps = {
  contractId: "21332112XX",
  foreignAmount: 3212312,
  foreignCurrency: "USD",
  fxNature: "0921810923",
  localAmount: 32132232,
  localCurrency: "BRL",
  tradeDate: "20/12/2017",
  type: "buy",
  totalEffectiveRate: 2.333,
  destinationAccount: {
    account: "213223",
    bank: {
      aba: "2312",
      chips: "231",
      name: "BBM",
      swift: "333"
    },
    country: "China",
    name: "Bruce Lee"
  },
  intermediaryAccount: {
    account: "13231",
    bank: {
      aba: "567",
      chips: "657",
      name: "BBM",
      swift: "321"
    }
  },
  signUrl: "/",
  requestAjustmentUrl: "/"
};

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

describe("ContractSummary component", () => {
  it("should match snapshot", () => {
    expect(
      shallow(
        <ContractSummary
          {...ContractSummaryProps}
          requestAjustmentUrl="/"
          signUrl="/"
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot as a buy summary", () => {
    expect(
      shallow(<ContractSummary {...ContractSummaryProps} />)
    ).toMatchSnapshot();
  });

  it("should match snapshot as a sell summary", () => {
    expect(
      shallow(<ContractSummary {...ContractSummaryProps} type="sell" />)
    ).toMatchSnapshot();
  });
});
