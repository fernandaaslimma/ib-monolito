import React from "react";
import { shallow } from "enzyme";

import Desktop from "./Desktop";

jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => {},
  isZhCN: () => false
}));

const accounts = [
  {
    id: 123,
    accountNumber: "123 123-1",
    date: "12/12",
    blockedBalance: 123123,
    availableBalance: 123123,
    totalBalance: 123123
  }
];

describe("Desktop component", () => {
  it("should match snapshot with loading", () => {
    expect(shallow(<Desktop accounts={accounts} loading />)).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    expect(shallow(<Desktop accounts={accounts} />)).toMatchSnapshot();
  });

  it("should call default icon component", () => {
    const wrapper = shallow(<Desktop accounts={accounts} isEmpty />);
    expect(
      shallow(wrapper.find("DefaultContent").prop("Icon")())
    ).toMatchSnapshot();
  });
});
