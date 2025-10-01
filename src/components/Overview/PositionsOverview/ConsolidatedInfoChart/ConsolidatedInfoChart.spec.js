import { mount } from "enzyme";
import { render } from "@testing-library/react";
import React from "react";
import ConsolidatedInfoChart from "./ConsolidatedInfoChart";
import { ClickableItem } from "./styles";

const props = {
  hideValues: true,
  total: 10000,
  callback: jest.fn(),
  isOffShore: false,
  iconType: "USD"
};
const newProps = { ...props, hideValues: false };

describe("ConsolidatedInfoChart", () => {
  it("should match snapshot", () => {
    expect(mount(<ConsolidatedInfoChart {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot when offShore is true", () => {
    expect(mount(<ConsolidatedInfoChart {...{ ...props, isOffShore: true}} />)).toMatchSnapshot();
  });

  it("should test rerender for React.memo", () => {
    const { rerender } = render(<ConsolidatedInfoChart {...props} />);
    rerender(<ConsolidatedInfoChart {...newProps} />);
  });

  it("should call callback with hideValues as true", () => {
    const wrapper = mount(<ConsolidatedInfoChart {...props} />);
    wrapper.find(ClickableItem).simulate("click");
    expect(props.callback).toHaveBeenCalled();
  });

  it("should call callback with hideValues as false", () => {
    const wrapper = mount(<ConsolidatedInfoChart {...newProps} />);
    wrapper.find(ClickableItem).simulate("click");
    expect(props.callback).toHaveBeenCalled();
  });

  it("should render component when offShore is true", () => {
    const wrapper = mount(<ConsolidatedInfoChart {...{ ...props, isOffShore: true}} />);
    const offSoreFlag = wrapper.find('[data-testid="flagIcon"]')
    expect(offSoreFlag.exists()).toBe(true);
  });
});
