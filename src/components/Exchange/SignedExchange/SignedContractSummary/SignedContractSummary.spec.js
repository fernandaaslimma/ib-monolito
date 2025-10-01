import React from "react";
import { shallow } from "enzyme";

import SignedContractSummary from "./SignedContractSummary";

const contractProps = {
  contract: {
    contractId: "21332112XX",
    foreignAmount: 3212312,
    foreignCurrency: "USD",
    localAmount: 32132232,
    localCurrency: "BRL",
    tradeDate: "20/12/2017",
    type: "buy",
    rate: 2.333
  }
};

jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

describe("SignedContractSummary component", () => {
  it("should match snapshot with props", () => {
    expect(
      shallow(<SignedContractSummary contract={contractProps} />)
    ).toMatchSnapshot();
  });
});
