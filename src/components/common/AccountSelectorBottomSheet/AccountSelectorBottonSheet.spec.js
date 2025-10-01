import React from "react";
import { shallow } from "enzyme";

import AccountSelectorBottonSheet from "./AccountSelectorBottomSheet";
import Icon from "react-bocombbm-components/dist/Icon";

const changeAccount = jest.fn(e => e);

const thisProps = {
  accounts: [
    {
      availableBalance: "100000000",
      accountNumber: "9720001"
    },
    {
      availableBalance: "100000000",
      accountNumber: "9584001"
    }
  ],
  selectedAccount: {
    availableBalance: "100000000",
    accountNumber: "9584001"
  },
  changeAccount
};

describe("Animated Botton Sheet", () => {
  let setState, useStateSpy;
  beforeEach(() => {
    setState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(init => [init, setState]);
  });

  it("should match snapshot", () => {
    expect(
      shallow(<AccountSelectorBottonSheet {...thisProps} />)
    ).toMatchSnapshot();
  });

  it.skip("should change visible parameter of AnimattedBottomSheet", () => {
    const component = shallow(<AccountSelectorBottonSheet {...thisProps} />);

    component
      .find(Icon)
      .at(0)
      .simulate("click");
    expect(setState).toHaveBeenCalled();
  });

  it.skip("should change visible parameter of AccountBalance", () => {
    const component = shallow(<AccountSelectorBottonSheet {...thisProps} />);

    component
      .find(Icon)
      .at(1)
      .simulate("click");
    expect(setState).toHaveBeenCalled();
  });
});
