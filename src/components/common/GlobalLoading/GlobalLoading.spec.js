import React from "react";
import { render } from "enzyme";

import GlobalLoading from "./GlobalLoading";

describe("GlobalLoading component", () => {
  it("should match snapshot", () => {
    expect(render(<GlobalLoading />)).toMatchSnapshot();
  });

  it("should match snapshot with an opened GlobalLoading", () => {
    expect(render(<GlobalLoading loading={true} />)).toMatchSnapshot();
  });
});
