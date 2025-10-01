import React from "react";
import { shallow } from "enzyme";

import PasswordTooltip from "./PasswordTooltip";

describe("PasswordTooltip component", () => {
  it("should match snapshot", () => {
    expect(shallow(<PasswordTooltip />)).toMatchSnapshot();
  });

  it("should never update", () => {
    const wrapper = shallow(<PasswordTooltip />);
    wrapper.setProps({ test: "value" });

    const shouldUpdate = wrapper.instance().shouldComponentUpdate();
    expect(shouldUpdate).toBe(false);
  });
});
