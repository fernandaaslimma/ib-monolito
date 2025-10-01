import React from "react";
import { shallow } from "enzyme";
import InvestmentProducts from "./InvestmentProducts";
import { Jumper } from "./styles";

jest.mock("../../utils/redirect");
const redirectMock = require("../../utils/redirect").redirect;

describe("InvestmentProducts component", () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementation(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });
  it("should match snapshot with loading", () => {
    expect(shallow(<InvestmentProducts />)).toMatchSnapshot();
  });

  it("should match invoke redirect", () => {
    const wrapper = shallow(<InvestmentProducts />);

    wrapper
      .find(Jumper)
      .at(0)
      .simulate("click");
    expect(redirectMock).toHaveBeenCalledWith(
      "/investments/products/fixed-income"
    );
  });

  it("should match invoke redirect", () => {
    const wrapper = shallow(<InvestmentProducts />);

    wrapper
      .find(Jumper)
      .at(1)
      .simulate("click");
    expect(redirectMock).toHaveBeenCalledWith("/investments/products/funds");
  });
});
