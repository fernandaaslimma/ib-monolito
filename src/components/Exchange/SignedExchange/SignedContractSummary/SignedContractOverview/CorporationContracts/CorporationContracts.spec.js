import React from "react";
import { shallow } from "enzyme";

import CorporationContracts, {
  renderSignature,
  renderTime,
  parseSignatures
} from "./CorporationContracts";

const contract = {
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
};
const getContractFile = jest.fn();
const parsedSettlementDate = "settlement";
const formattedExchangeRate = "exchange";
const formattedForeignCurrency = "foreign";
const formattedLocalCurrency = "local";

jest.mock("../../../../../../utils/i18n", () => ({
  translate: id => id,
  getDateFieldPlaceholderByLocale: () => "MM/DD/YYYY",
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

describe("CorporationContracts component", () => {
  it("should match snapshot with default props", () => {
    expect(
      shallow(
        <CorporationContracts
          contract={contract}
          getContractFile={getContractFile}
          formatted={{
            parsedSettlementDate,
            formattedExchangeRate,
            formattedForeignCurrency,
            formattedLocalCurrency
          }}
        />
      )
    ).toMatchSnapshot();
  });
});

describe("renderTime", () => {
  it("should match snapshot", () => {
    const time = renderTime({ date: "10/10/2017" });
    const wrapper = shallow(time);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("renderSignature", () => {
  describe("with signaturesLength = 1", () => {
    it("should match snapshot", () => {
      const index = 0;
      const signaturesLength = 1;
      const signature = renderSignature(
        { date: "10/10/2017" },
        index,
        signaturesLength
      );
      const wrapper = shallow(signature);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("with signaturesLength = 2", () => {
    it("should match snapshot with index = 0", () => {
      const index = 0;
      const signaturesLength = 2;
      const signature = renderSignature(
        { date: "10/10/2017" },
        index,
        signaturesLength
      );
      const wrapper = shallow(signature);
      expect(wrapper).toMatchSnapshot();
    });

    it("should match snapshot with index = 1", () => {
      const index = 1;
      const signaturesLength = 2;
      const signature = renderSignature(
        { date: "10/10/2017" },
        index,
        signaturesLength
      );
      const wrapper = shallow(signature);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("with signaturesLength = 3", () => {
    it("should match snapshot with index = 0", () => {
      const index = 0;
      const signaturesLength = 3;
      const signature = renderSignature(
        { date: "10/10/2017" },
        index,
        signaturesLength
      );
      const wrapper = shallow(signature);
      expect(wrapper).toMatchSnapshot();
    });

    it("should match snapshot with index = 1", () => {
      const index = 1;
      const signaturesLength = 3;
      const signature = renderSignature(
        { date: "10/10/2017" },
        index,
        signaturesLength
      );
      const wrapper = shallow(signature);
      expect(wrapper).toMatchSnapshot();
    });

    it("should match snapshot with index = 2", () => {
      const index = 2;
      const signaturesLength = 3;
      const signature = renderSignature(
        { date: "10/10/2017" },
        index,
        signaturesLength
      );
      const wrapper = shallow(signature);
      expect(wrapper).toMatchSnapshot();
    });
  });
});

describe("parseSignatures", () => {
  it("should match snapshot with one signature", () => {
    const signatures = parseSignatures([
      { date: "10/10/2017T23:36", name: "name" }
    ]);
    const wrapper = signatures.map(shallow);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with two signatures", () => {
    const signatures = parseSignatures([
      { date: "10/10/2017T23:36", name: "name" },
      { date: "10/10/2017T23:36", name: "name" }
    ]);
    const wrapper = signatures.map(shallow);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with three signatures", () => {
    const signatures = parseSignatures([
      { date: "10/10/2017T23:36", name: "name" },
      { date: "10/10/2017T23:36", name: "name" },
      { date: "10/10/2017T23:36", name: "name" }
    ]);
    const wrapper = signatures.map(shallow);
    expect(wrapper).toMatchSnapshot();
  });
});
