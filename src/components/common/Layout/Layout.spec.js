import React from "react";
import { shallow } from "enzyme";

import Layout from "./Layout";

describe("Layout component", () => {
  it("should match snapshot with children", () => {
    expect(
      shallow(
        <Layout>
          <h1>children</h1>
        </Layout>
      )
    ).toMatchSnapshot();
  });
});
