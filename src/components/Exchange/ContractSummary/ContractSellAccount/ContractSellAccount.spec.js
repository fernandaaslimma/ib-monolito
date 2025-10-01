import React from "react";
import { shallow } from "enzyme";

import ContractSellAccount from "./ContractSellAccount";

jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  isZhCN: () => false
}));

describe("ContractSellAccount component", () => {
  it("should match snapshot with empty values", () => {
    expect(shallow(<ContractSellAccount />)).toMatchSnapshot();
  });
  it("should match snapshot with values", () => {
    expect(
      shallow(
        <ContractSellAccount
          bank="BBM"
          owner="Bruce Lee"
          bankId="2312HJ"
          agency="3213"
          account="12321"
          document="102.392.238-22"
        />
      )
    ).toMatchSnapshot();
  });
});
