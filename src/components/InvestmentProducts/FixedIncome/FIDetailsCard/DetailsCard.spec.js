import React from "react";
import { shallow } from "enzyme";
import DetailsCard from "./DetailsCard";

const thisProps = {
  list: {
    id: 1,
    minimumaApplication: 1000,
    maximumApplication: 500000,
    Tax: "102% DI",
    deadline: 12,
    liquidity: "Diária após 90 dias",
    IR: "Isento de IR"
  },
  title: "mock",
  bottomSpace: "20"
};

describe("DetailsCard component", () => {
  it("Should match snapshot", () => {
    const component = shallow(<DetailsCard {...thisProps} />);
    expect(component).toMatchSnapshot();
  });
});
