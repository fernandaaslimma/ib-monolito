import React from "react";
import { shallow } from "enzyme";

import GetUserSigned from "./GetUserSigned";

const defaultProps = {
  recipients: [
    {
      email: "email@gmail.com",
      embedded: false,
      name: "name",
      status: "Completed",
      type: "type"
    }
  ]
};

describe("GetUserSigned component", () => {
  it("defaultProps", () => {
    const wrapper = shallow(
      <GetUserSigned recipients={defaultProps.recipients} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
