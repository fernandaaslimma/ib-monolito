import React from "react";
import { shallow } from "enzyme";

import BankLogo from "./BankLogo";

describe("BankLogo component", () => {
  it("should match snapshot", () => {
    expect(shallow(<BankLogo />)).toMatchSnapshot();
  });

  it("should match snapshot with primaryColor", () => {
    expect(shallow(<BankLogo primaryColor="orange" />)).toMatchSnapshot();
  });

  it("should match snapshot with secondaryColor", () => {
    expect(shallow(<BankLogo secondaryColor="orange" />)).toMatchSnapshot();
  });
});
