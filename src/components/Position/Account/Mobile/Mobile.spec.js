import React from "react";
import { shallow } from "enzyme";

import Mobile from "./Mobile";

jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  getDateFieldPlaceholderByLocale: () => "MM/DD/YYYY",
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

describe("Mobile component", () => {
  it("should match snapshot with loading", () => {
    expect(shallow(<Mobile accounts={accounts} loading />)).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    expect(shallow(<Mobile accounts={accounts} />)).toMatchSnapshot();
  });

  it("should call default icon component", () => {
    const wrapper = shallow(<Mobile accounts={accounts} isEmpty />);
    expect(
      shallow(wrapper.find("DefaultContent").prop("Icon")())
    ).toMatchSnapshot();
  });
});
