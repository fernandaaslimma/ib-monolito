import React from "react";
import { shallow } from "enzyme";

import SentMail from "./SentMail";

describe("RecoverPassword component", () => {
  it("should match snapshot", () => {
    expect(shallow(<SentMail />)).toMatchSnapshot();
  });
});
