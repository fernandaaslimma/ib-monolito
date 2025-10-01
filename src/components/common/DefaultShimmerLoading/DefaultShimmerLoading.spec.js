import React from "react";
import { shallow } from "enzyme";
import DefaultShimmerLoading from "./DefaultShimmerLoading";
describe("BankLogo component", () => {
  it("should match snapshot", () => {
    expect(shallow(<DefaultShimmerLoading />)).toMatchSnapshot();
  });
  it("should match snapshot with repeat", () => {
    expect(shallow(<DefaultShimmerLoading repeat={2} />)).toMatchSnapshot();
  });
  it("should match snapshot with innerRepeat", () => {
    expect(
      shallow(<DefaultShimmerLoading innerRepeat={3} />)
    ).toMatchSnapshot();
  });
});
