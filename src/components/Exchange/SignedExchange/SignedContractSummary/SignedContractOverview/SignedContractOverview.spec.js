import React from "react";
import { shallow } from "enzyme";

import SignedContractOverview, {
  renderDownloadContract
} from "./SignedContractOverview";

jest.mock("../../../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

describe("SignedContractOverview component", () => {
  it("should match snapshot with default props", () => {
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
    expect(
      shallow(<SignedContractOverview contract={contractProps} />)
    ).toMatchSnapshot();
  });

  it("should match snapshot with fxNature and signature props", () => {
    const contractProps = {
      contract: {
        contractId: "21332112XX",
        foreignAmount: 3212312,
        foreignCurrency: "USD",
        localAmount: 32132232,
        localCurrency: "BRL",
        tradeDate: "20/12/2017",
        type: "buy",
        rate: 2.333,
        fxNature: "nature",
        signatures: [{ name: "Name", date: "10/10/2010" }]
      }
    };
    expect(
      shallow(<SignedContractOverview contract={contractProps} />)
    ).toMatchSnapshot();
  });
});

describe("renderDownloadContract", () => {
  it("should match snapshot with isCorporation false", () => {
    const download = renderDownloadContract({
      onClick: jest.fn(),
      isCorporation: false
    });

    const wrapper = shallow(download);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with isCorporation true", () => {
    const download = renderDownloadContract({
      onClick: jest.fn(),
      isCorporation: true
    });

    const wrapper = shallow(download);
    expect(wrapper).toMatchSnapshot();
  });
});
