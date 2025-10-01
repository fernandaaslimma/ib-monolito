import React from "react";
import { shallow } from "enzyme";

import Tooltip from "./Tooltip";

global.document.getElementById = function() {
  return {
    getBoundingClientRect: function() {
      return {
        height: 300
      };
    }
  };
};

describe("Tooltip component", () => {
  it("should match snapshot with texts", () => {
    expect(shallow(<Tooltip texts={["text 1", "text 2"]} />)).toMatchSnapshot();
  });

  it("should match snapshot with position", () => {
    expect(shallow(<Tooltip position={"UP"} />)).toMatchSnapshot();
  });

  it("should match snapshot with children", () => {
    expect(
      shallow(
        <Tooltip>
          <h1>test</h1>
        </Tooltip>
      )
    ).toMatchSnapshot();
  });

  describe("state", () => {
    it("It has an initial state", () => {
      const wrapper = shallow(<Tooltip />);
      expect(wrapper.state("height")).toBe(300);
    });
  });
});
