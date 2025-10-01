import React from "react";
import { shallow } from "enzyme";
import AmmountInput from "./AmmountInput";
import { Ammount } from "./styles";
import { Button } from "react-bocombbm-components";
import { animateCurrencyIncrement } from "../../../utils/currency";
import { cleanup } from "@testing-library/react";

jest.mock("../../../utils/currency");
afterEach(cleanup);

const props = {
  config: {
    ammountValue: "1000,00",
    available: 100.0,
    minimum: 10.0,
    invalidMessages: {
      aboveAvailable: "No game",
      belowMinimum: "So sorry"
    }
  },
  blockAddValues: undefined,
  onChange: jest.fn(),
  showTotalButton: true,
  increments: {
    ranges: [1000.0, 5000.0, 10000.0, 30000.0, 50000.0],
    totalLabel: "disponível"
  }
};

describe("AmmountInput component", () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();

    animateCurrencyIncrement.mockImplementation(
      (arg1, arg2, arg3, arg4, callback) => callback()
    );
  });

  it("Should match snapshpt", () => {
    const component = shallow(<AmmountInput {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("Match Snapshot with blockAddValues as true", () => {
    const newProps = { ...props, blockAddValues: true };
    const component = shallow(<AmmountInput {...newProps} />);
    expect(component).toMatchSnapshot();
  });

  it("Should change ammount", () => {
    const component = shallow(<AmmountInput {...props} />);
    const ammount = component.find(Ammount);
    ammount.prop("onChange")({
      target: { value: "150000,00" }
    });
    expect(props.onChange).toHaveBeenCalled();
  });

  it("Should trigger count", () => {
    const component = shallow(<AmmountInput {...props} />);
    component.find(Button).forEach(increment => {
      increment.prop("onClick")();
    });

    setTimeout(() => expect(props.onChange).toHaveBeenCalledTimes(6), 500);
  });
});
