import React from "react";
import { shallow } from "enzyme";
import { ButtonTag } from "./actionElements";

describe("actionElements component", () => {
  it("should render a button with default props", () => {
    expect(shallow(<ButtonTag />).type()).toEqual("button");
  });
});
