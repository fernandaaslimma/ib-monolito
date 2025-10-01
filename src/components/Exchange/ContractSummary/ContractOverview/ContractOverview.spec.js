import React from "react";
import { shallow } from "enzyme";

import ContractOverview from "./ContractOverview";

jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

describe("ContractOverview component", () => {
  it("should match snapshot with empty values", () => {
    expect(shallow(<ContractOverview />)).toMatchSnapshot();
  });
  it("should match snapshot with values", () => {
    expect(
      shallow(
        <ContractOverview
          typeOfExchange="buy"
          settlementDate="01/01/2018"
          localCurrency="USD"
          foreignCurrency="BRL"
          valueOfForeignCurrency={12321321321}
          valueOfNationalCurrency={23123312213}
          natureOfExchange="some nature"
          exchangeRate={3.213223}
        />
      )
    ).toMatchSnapshot();
  });
});
