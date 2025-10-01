import React from "react";
import { shallow, mount } from "enzyme";

import { spy } from "sinon";

import EFTUnavailable from "./EFTUnavailable";
import { Button } from "react-bocombbm-components";

import { isPtBR } from "../../../utils/i18n";

const props = {
  closeModal: jest.fn(),
  onConfirm: jest.fn(),
  getAvailableDateRanges: jest.fn(),
  transferData: {
    date: "10/16/2020"
  },
  availableDateRanges: [{}],
  nextAvailableDate: "10/15/2020",
  dateInput: {
    focus: jest.fn(),
    blur: jest.fn()
  },
  handleUserInputTranferDataDate: jest.fn()
};

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  isZhCN: () => false,
  getDateFieldParserLocale: jest.fn(),
  getDayMonthFieldFormatterByLocale: jest.fn(),
  isPtBR: jest.fn()
}));

describe("EFTUnavailable component", () => {
  beforeEach(() => {
    isPtBR.mockImplementation(() => false);
  });
  it("should match snapshot with American language", () => {
    const wrapper = shallow(<EFTUnavailable {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with Brazilian language", () => {
    isPtBR.mockImplementation(() => true);

    const wrapper = shallow(<EFTUnavailable {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render an "EFTUnavailable" tag', () => {
    const wrapper = mount(<EFTUnavailable {...props} />);
    expect(wrapper.find("EFTUnavailable").length).toBe(1);
  });

  it("should close modal properly on handleSuggestDate", () => {
    spy(EFTUnavailable.prototype, "handleSuggestDate");

    const wrapper = shallow(<EFTUnavailable {...props} />);
    wrapper
      .find(Button)
      .at(1)
      .simulate("click");

    expect(EFTUnavailable.prototype.handleSuggestDate.calledOnce);

    expect(props.closeModal).toHaveBeenCalled();

    EFTUnavailable.prototype.handleSuggestDate.restore();
  });

  it("should close modal properly on handleSuggestAnotherDate", () => {
    spy(EFTUnavailable.prototype, "handleSuggestAnotherDate");

    const wrapper = shallow(<EFTUnavailable {...props} />);
    wrapper
      .find(Button)
      .at(0)
      .simulate("click");

    expect(EFTUnavailable.prototype.handleSuggestAnotherDate.calledOnce);

    expect(props.closeModal).toHaveBeenCalled();
    expect(props.dateInput.focus).toHaveBeenCalled();

    EFTUnavailable.prototype.handleSuggestAnotherDate.restore();
  });
});
