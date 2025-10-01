import React from "react";
import { render } from "enzyme";

import ShimmerLoading from "./ShimmerLoading";

describe("ShimmerLoading component", () => {
  it("should match snapshot", () => {
    expect(render(<ShimmerLoading />)).toMatchSnapshot();
  });

  it("should match snapshot with index", () => {
    expect(render(<ShimmerLoading index={1} />)).toMatchSnapshot();
  });

  it("should match snapshot with inverse", () => {
    expect(render(<ShimmerLoading inverse />)).toMatchSnapshot();
  });

  it("should match snapshot with darker", () => {
    expect(render(<ShimmerLoading darker />)).toMatchSnapshot();
  });
});
