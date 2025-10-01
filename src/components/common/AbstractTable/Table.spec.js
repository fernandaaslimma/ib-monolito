import React from "react";
import { shallow } from "enzyme";
// eslint-disable-next-line import/no-named-as-default
import Table from "./Table";

describe("Table", () => {
  it("should match snapshot", () => {
    expect(shallow(<Table />)).toMatchSnapshot();
  });
});
