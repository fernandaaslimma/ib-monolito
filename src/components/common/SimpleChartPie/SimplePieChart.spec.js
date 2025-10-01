import React from "react";
import { shallow } from "enzyme";

import SimplePieChart from "./SimplePieChart";

describe("SimplePieChart component", () => {
  it("should match snapshot with name", () => {
    expect(
      shallow(
        <SimplePieChart
          dataTest="Test"
          color="red"
          background="#D9E0E4"
          width={48}
          percentage={0}
        />
      )
    ).toMatchSnapshot();
  });
});
