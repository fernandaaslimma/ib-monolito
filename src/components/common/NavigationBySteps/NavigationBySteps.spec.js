import React from "react";
import { shallow } from "enzyme";

import NavigationBySteps from "./NavigationBySteps";
import { Item } from "./styles";

let props;
beforeEach(() => {
  props = {
    length: 10,
    active: 1,
    goToStep: jest.fn(),
    navigable: true
  };
});

describe("NavigationBySteps component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<NavigationBySteps {...props} />)).toMatchSnapshot();
  });

  describe("goToStep", () => {
    it("should call active index update", () => {
      const component = shallow(<NavigationBySteps {...props} />);
      // const instance = component.instance();

      component
        .find(Item)
        .at(0)
        .simulate("click");

      expect(props.goToStep).toBeCalledWith(1);
    });
  });
});
