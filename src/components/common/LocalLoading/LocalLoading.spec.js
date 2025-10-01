import React from "react";
import { render } from "enzyme";

import LocalLoading from "./LocalLoading";

describe("LocalLoading component", () => {
  it("should match snapshot", () => {
    expect(render(<LocalLoading />)).toMatchSnapshot();
  });
});
