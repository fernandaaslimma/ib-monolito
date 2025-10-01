import React from "react";
import { shallow } from "enzyme";

import Disclaimer from "./Disclaimer";

describe("Disclaimer component", () => {
  it("should match snapshot", () => {
    expect(shallow(<Disclaimer />)).toMatchSnapshot();
  });

  it("should match snapshot with text", () => {
    expect(shallow(<Disclaimer text="disclaimer text" />)).toMatchSnapshot();
  });
});
