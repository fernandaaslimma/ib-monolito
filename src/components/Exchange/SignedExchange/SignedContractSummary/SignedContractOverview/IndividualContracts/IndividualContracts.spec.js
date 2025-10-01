import React from "react";
import { mount, shallow } from "enzyme";

import IndividualContracts from "./IndividualContracts";

jest.mock("../../../../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

const contract = {
  contractId: "21332112XX",
  foreignAmount: 3212312,
  foreignCurrency: "USD",
  localAmount: 32132232,
  localCurrency: "BRL",
  tradeDate: "20/12/2017",
  type: "buy",
  rate: 2.333
};
const getContractFile = jest.fn();
const parsedSettlementDate = "settlement";
const formattedExchangeRate = "exchange";
const formattedForeignCurrency = "foreign";
const formattedLocalCurrency = "local";

describe("IndividualContracts component", () => {
  it("should match snapshot with default props", () => {
    expect(
      shallow(
        <IndividualContracts
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

  it("should be able to click at each DownloadContract", () => {
    const wrapper = mount(
      <IndividualContracts
        contract={contract}
        getContractFile={getContractFile}
        formatted={{
          parsedSettlementDate,
          formattedExchangeRate,
          formattedForeignCurrency,
          formattedLocalCurrency
        }}
      />
    );

    const downloadWrapper = wrapper.find("#SignedContractOverviewDownloadLink");

    mount(downloadWrapper.get(0))
      .find("a")
      .simulate("click");
    mount(downloadWrapper.get(1))
      .find("a")
      .simulate("click");
    mount(downloadWrapper.get(2))
      .find("a")
      .simulate("click");
    mount(downloadWrapper.get(3))
      .find("a")
      .simulate("click");
  });
});
