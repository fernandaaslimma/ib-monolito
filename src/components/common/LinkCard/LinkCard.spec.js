import React from "react";
import { shallow } from "enzyme";

import LinkCard from "./LinkCard";

describe("LinkCard component", () => {
  it("should render highlighted class when isCallToAction is truthy", () => {
    expect(
      shallow(
        <LinkCard
          iconType="FiLoader"
          to="/"
          anchorText="Click to go!"
          dataTest="LinkTo"
        >
          Text
        </LinkCard>
      )
    ).toMatchSnapshot();
  });
});
