import React from "react";
import { shallow } from "enzyme";
import ActionCard from "./ActionCard";
import { WrapperCard } from "./styles";

const props = {
  title: "title",
  text: "text",
  actionClick: jest.fn(),
  dataTest: "data-test"
};

describe("ActionCard", () => {
  it("should match snapshot", () => {
    expect(shallow(<ActionCard {...props} />)).toMatchSnapshot();
  });

  it("should call actionClick when clicked on card", () => {
    const component = shallow(<ActionCard {...props} />);

    component.find(WrapperCard).simulate("click");

    expect(props.actionClick).toHaveBeenCalled();
  });
});
