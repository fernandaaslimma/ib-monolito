import React from "react";
import { shallow } from "enzyme";
import AccountSelector from "./AccountSelector";
import Radio from "../Radio";
import { Button } from "react-bocombbm-components";

import store from "../../../utils/store";
import { INDIVIDUAL } from "../../../utils/constants";

jest.mock("../../../utils/store", () => ({
  getState: jest.fn()
}));

const props = {
  accounts: [
    { accountNumber: 123, availableBalance: 200.0, document: "11111111111111" },
    { accountNumber: 456, availableBalance: 200.0, document: "11111111111111" }
  ],
  onChange: jest.fn(),
  selectedAccountNumber: 345,
  withButton: false,
  isOpen: false
};

describe("Account Selector", () => {
  let setState, useStateSpy;
  beforeEach(() => {
    setState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(init => [init, setState]);

    store.getState.mockImplementation(() => ({
      userInfo: {
        tenants: [INDIVIDUAL]
      }
    }));
  });
  it("should match snapshot closed", () => {
    expect(shallow(<AccountSelector {...props} />)).toMatchSnapshot();
  });

  it("Should change account", () => {
    const shallowComponent = shallow(<AccountSelector {...props} />);

    shallowComponent
      .find(Radio)
      .at(1)
      .prop("onChange")({ target: { value: props.accounts[1] } });

    expect(shallowComponent).toMatchSnapshot();
  });

  it("Should select account with button", () => {
    const newProps = { ...props, withButton: true };
    const shallowComponent = shallow(<AccountSelector {...newProps} />);

    shallowComponent
      .find(Radio)
      .at(1)
      .prop("onChange")({ target: { value: props.accounts[1] } });

    expect(shallowComponent).toMatchSnapshot();
  });

  it("Should select account with button", () => {
    const newProps = { ...props, withButton: true };
    const shallowComponent = shallow(<AccountSelector {...newProps} />);

    shallowComponent
      .find(Radio)
      .at(1)
      .prop("onChange")({ target: { value: props.accounts[1] } });
    shallowComponent.find(Button).simulate("click");
    expect(shallowComponent).toMatchSnapshot();
  });
});
