import React from "react";
import { shallow } from "enzyme";

import ContractAccount from "./ContractAccount";

jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  isZhCN: () => false
}));

describe("ContractAccount component", () => {
  it("should match snapshot with empty values", () => {
    expect(shallow(<ContractAccount />)).toMatchSnapshot();
  });
  it("should match snapshot with values", () => {
    expect(
      shallow(
        <ContractAccount
          bank="BBM"
          account="12321"
          country="China"
          owner="Bruce Lee"
          swift="21839"
          chips="21839"
          aba="21839"
        />
      )
    ).toMatchSnapshot();
  });
});
