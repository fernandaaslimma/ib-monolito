import React from "react";
import { render } from "enzyme";

import Hide from "./Hide";

describe("Hide component", () => {
  it("should match snapshot changing class", () => {
    expect(render(<Hide>Text</Hide>)).toMatchSnapshot();
  });

  it("should match snapshot changing class", () => {
    expect(render(<Hide below="md">Text</Hide>)).toMatchSnapshot();
  });

  it("should match snapshot changing class", () => {
    expect(render(<Hide above="md">Text</Hide>)).toMatchSnapshot();
  });
});
