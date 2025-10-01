import React from "react";
import { shallow } from "enzyme";
import ButtonResponsive from "./ButtonResponsive";

describe("ButtonResponsive Unit Test", () => {
  it("should match snapShot", () => {
    expect(shallow(<ButtonResponsive />)).toMatchSnapshot();
  });
});
