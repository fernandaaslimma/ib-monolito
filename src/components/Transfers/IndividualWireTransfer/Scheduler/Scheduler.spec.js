import React from "react";
import { shallow, mount } from "enzyme";
import deepClone from "../../../../utils/deepClone";
import Scheduler from "./Scheduler";
import { act } from "react-test-renderer";
import { isToday, checkDate } from "../../../../utils/validations/EFT";
import { isPtBR } from "../../../../utils/i18n";
import { Input } from "react-bocombbm-components";
import moment from "moment";
import { configure, fireEvent, render, screen } from "@testing-library/react";

configure({ testIdAttribute: "data-test" });
jest.mock("../../../../utils/validations/EFT");
jest.mock("../../../../utils/i18n");
jest.mock("uuid", () => {
  return { v4: () => "12345-abcvbcvb-23ddfsfd-4444" };
});

jest.mock("moment", () => jest.fn());
moment.mockImplementation(() => ({
  format: () => "hash",
  utcOffset: jest.fn().mockReturnThis(),
  startOf: () => ({ diff: () => 1 }),
  utc: jest.fn().mockReturnThis()
}));

const context = {
  props: {
    nextAvailableDate: "xpto",
    availableDateRanges: [
      { maxEndTime: 1605124811000, minStartTime: 1605103211 }
    ],
    transferData: { value: "5000,00", date: "" },
    loading: false,
    handleUserInputTranferDataDate: jest.fn(),
    getAvailableDateRanges: () => Promise.resolve()
  },
  state: {
    isScheduled: false,
    inputedDate: "11/20/2020",
    validAsScheduled: true
  },
  changeTransferDate: jest.fn(),
  checkAvailabilitySchedule: jest.fn(),
  setStateValue: jest.fn(),
  changeCommonValidDate: jest.fn()
};

describe("Scheduler component", () => {
  let setState, useStateSpy, useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    setState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(init => [init, setState]);
    React.useContext = jest.fn(() => context);

    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();

    isToday.mockImplementation(() => true);
    checkDate.mockImplementation(() => true);
    isPtBR.mockImplementation(() => true);
  });

  it.skip("Should match snapshot", () => {
    const component = shallow(<Scheduler />);
    expect(component).toMatchSnapshot();
  });

  it.skip("Should match snapshot not in pt-BR", () => {
    isPtBR.mockImplementation(() => false);
    const component = shallow(<Scheduler />);
    expect(component).toMatchSnapshot();
  });

  it.skip("Should match snapshot with scheduler and interact by focus", () => {
    const newContext = deepClone(context);
    newContext.state.isScheduled = true;
    newContext.state.validAsScheduled = true;
    isToday.mockImplementation(() => false);
    React.useContext = jest.fn(() => newContext);

    let component = mount(<Scheduler />);
    expect(component).toMatchSnapshot();

    act(() => {
      component.find(Input).prop("onFocus")();
    });
    component.update();
    expect(context.setStateValue).toHaveBeenCalled();
  });

  it.skip("should click on ButtonTransferToday", () => {
    render(<Scheduler />);
    const button = screen.getByTestId("ButtonTransferToday");
    fireEvent.click(button);
    expect(context.setStateValue).toHaveBeenCalled();
    expect(context.props.handleUserInputTranferDataDate).toHaveBeenCalled();
  });

  it.skip("should click on ButtonScheduledTransfer", () => {
    render(<Scheduler />);
    const button = screen.getByTestId("ButtonScheduledTransfer");
    fireEvent.click(button);
    expect(context.setStateValue).toHaveBeenCalled();
  });
});
