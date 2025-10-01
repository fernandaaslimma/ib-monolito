import React from "react";
import { shallow } from "enzyme";

import DataItem from "./DataItem";

describe("DataItem component", () => {
  it("should match snapshot", () => {
    expect(
      shallow(<DataItem title="Settlement date" data="10/12/2017" />)
    ).toMatchSnapshot();
  });
});
