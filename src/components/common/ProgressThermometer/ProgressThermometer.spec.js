import React from "react";
import { shallow } from "enzyme";

import ProgressThermometer from "./ProgressThermometer";

describe("Button component", () => {
  it("should match snapshot", () => {
    expect(
      shallow(<ProgressThermometer steps={4} fill={2} msDelay={300} />)
    ).toMatchSnapshot();
  });

  it("should match snapshot with dataTest", () => {
    expect(
      shallow(
        <ProgressThermometer
          steps={4}
          fill={2}
          dataTest="thermometer"
          msDelay={300}
        />
      )
    ).toMatchSnapshot();
  });
});
