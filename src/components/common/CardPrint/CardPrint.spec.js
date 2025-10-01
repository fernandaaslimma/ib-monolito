import React from "react";
import { shallow } from "enzyme";

import CardPrint from "./CardPrint";

describe("CardPrint component", () => {
  it("should match snapshot with empty content", () => {
    expect(shallow(<CardPrint />)).toMatchSnapshot();
  });

  it("should match snapshot with title", () => {
    expect(shallow(<CardPrint title="ok" icon="Cash" />)).toMatchSnapshot();
  });

  it("should match snapshot with icon", () => {
    expect(shallow(<CardPrint icon="Cash" />)).toMatchSnapshot();
  });

  it("should match snapshot with title and icon", () => {
    expect(shallow(<CardPrint title="ok" icon="Cash" />)).toMatchSnapshot();
  });

  it("should match snapshot with children", () => {
    expect(
      shallow(
        <CardPrint title="ok" icon="Cash">
          bla
        </CardPrint>
      )
    ).toMatchSnapshot();
  });
});
