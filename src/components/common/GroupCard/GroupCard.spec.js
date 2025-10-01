import React from "react";
import { shallow } from "enzyme";

import GroupCard from "./GroupCard";

describe("Card component", () => {
  it("should match snapshot with empty content", () => {
    expect(shallow(<GroupCard />)).toMatchSnapshot();
  });

  it("should match snapshot with title", () => {
    expect(shallow(<GroupCard title="ok" icon="Cash" />)).toMatchSnapshot();
  });

  it("should match snapshot with icon", () => {
    expect(shallow(<GroupCard icon="Cash" />)).toMatchSnapshot();
  });

  it("should match snapshot with title and icon", () => {
    expect(shallow(<GroupCard title="ok" icon="Cash" />)).toMatchSnapshot();
  });

  it("should match snapshot with children", () => {
    expect(
      shallow(
        <GroupCard title="ok" icon="Cash">
          bla
        </GroupCard>
      )
    ).toMatchSnapshot();
  });
});
