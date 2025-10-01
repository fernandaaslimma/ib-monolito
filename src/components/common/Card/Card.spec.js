import React from "react";
import { shallow } from "enzyme";

import Card from "./Card";

describe("Card component", () => {
  it("should match snapshot with empty content", () => {
    expect(shallow(<Card />)).toMatchSnapshot();
  });

  it("should match snapshot with title", () => {
    expect(shallow(<Card title="ok" icon="Cash" />)).toMatchSnapshot();
  });

  it("should match snapshot with icon", () => {
    expect(shallow(<Card icon="Cash" />)).toMatchSnapshot();
  });

  it("should match snapshot with title and icon", () => {
    expect(shallow(<Card title="ok" icon="Cash" />)).toMatchSnapshot();
  });

  it("should match snapshot with children", () => {
    expect(
      shallow(
        <Card title="ok" icon="Cash">
          bla
        </Card>
      )
    ).toMatchSnapshot();
  });
});
