import React from "react";
import { render } from "enzyme";

import Loading from "./Loading";

describe("Loading component", () => {
  it("should match snapshot", () => {
    expect(render(<Loading />)).toMatchSnapshot();
  });
});
