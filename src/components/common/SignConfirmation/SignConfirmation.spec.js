import React from "react";
import { shallow } from "enzyme";

import SignConfirmation from "./SignConfirmation";

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

jest.mock("../../../services/contracts");

const { markAsSigned } = require("../../../services/contracts");

const resetContractsMock = jest.fn();

describe("SignConfirmation component", () => {
  let markAsSignedSpy;

  beforeEach(() => {
    markAsSignedSpy = jest.fn();
    markAsSigned.mockImplementation(markAsSignedSpy);
  });

  it("should match snapshot", () => {
    expect(
      shallow(<SignConfirmation resetContracts={resetContractsMock} />)
    ).toMatchSnapshot();
    expect(markAsSigned).not.toHaveBeenCalled();
  });

  it("should invoke resetContracts", () => {
    shallow(<SignConfirmation resetContracts={resetContractsMock} />);
    expect(resetContractsMock).toHaveBeenCalledWith();
  });

  it("should match snapshot with props", () => {
    const contractId = "1";
    const props = {
      location: {
        search: `?contractId=${contractId}&event=signing_complete`
      }
    };
    expect(
      shallow(
        <SignConfirmation {...props} resetContracts={resetContractsMock} />
      )
    ).toMatchSnapshot();
    expect(markAsSigned).toHaveBeenCalledWith(contractId);
  });

  it("should render the DefaultContent component with the correct props", () => {
    const wrapper = shallow(
      <SignConfirmation resetContracts={resetContractsMock} />
    );

    const defaultContentProps = wrapper.find("DefaultContent").props();

    expect(defaultContentProps["data-test"]).toBe("SignConfirmation");
    expect(defaultContentProps["Icon"]).toEqual(expect.any(Function));
    expect(defaultContentProps["primaryText"]).toBe("THE_CONTRACT_WAS_SIGNED");
  });
});
