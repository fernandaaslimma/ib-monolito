import React from "react";
import { shallow } from "enzyme";
import ShowMoreLess from "./ShowMoreLess";

describe("ShowMoreLess component", () => {
  it("should match snapshot with empty content", () => {
    const wrapper = shallow(<ShowMoreLess />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot props", () => {
    const wrapper = shallow(
      <ShowMoreLess key={1} dataTest="dataTest">
        <div>children</div>
      </ShowMoreLess>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
