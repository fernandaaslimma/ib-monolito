import React from "react";
import { shallow } from "enzyme";
import Tag from "./Tag";

describe("Tag component", () => {
  it("should match snapshot", () => {
    expect(shallow(<Tag />)).toMatchSnapshot();
  });
});
