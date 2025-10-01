import React from "react";
import { shallow } from "enzyme";

import SignedExchange from "./SignedExchange";

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

describe("SignedExchange component", () => {
  let getSignedContractsMock;

  beforeEach(() => {
    getSignedContractsMock = jest.fn();
  });

  it("should match snapshot", () => {
    expect(
      shallow(<SignedExchange getSignedContracts={getSignedContractsMock} />)
    ).toMatchSnapshot();
  });

  it("should trigger Contract getSignedContracts once when mounting", () => {
    shallow(<SignedExchange getSignedContracts={getSignedContractsMock} />);

    expect(getSignedContractsMock).toHaveBeenCalledTimes(1);
  });

  it("should render contract list if signedContracts Object is fullfiled", () => {
    const component = shallow(
      <SignedExchange
        signedContracts={[{ contractId: "otherthing" }]}
        getSignedContracts={getSignedContractsMock}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
