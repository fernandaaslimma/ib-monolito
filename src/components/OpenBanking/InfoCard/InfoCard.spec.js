import React from "react";
import { shallow } from "enzyme";
import InfoCard from "./InfoCard";

const props = {
  children: "Mock children",
  title: {
    bigTitle: false,
    subTitle: false,
    tl: "Mock title",
    sl: "Mock sub title"
  }
};

describe("InfoCard", () => {
  it("should match snapshot", () => {
    expect(shallow(<InfoCard {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    props.title.bigTitle = true;
    props.title.subTitle = true;
    expect(shallow(<InfoCard {...props} />)).toMatchSnapshot();
  });
});
