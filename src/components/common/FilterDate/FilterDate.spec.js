import { configure, fireEvent, render } from "@testing-library/react";
import React from "react";
import FilterDate from "./FilterDate";

configure({ testIdAttribute: "data-test" });

describe("Filter Date", () => {
  const props = {
    showFilter: true,
    closeFilter: jest.fn(),
    onFilter: jest.fn()
  };

  it("Should render all fields when showFilter to be true", () => {
    const { getByTestId } = render(<FilterDate {...props} />);
    expect(getByTestId("container")).toBeTruthy();
    expect(getByTestId("container-bottomSheetBack")).toBeTruthy();
    expect(getByTestId("selectLabel")).toBeTruthy();
    expect(getByTestId("specifcLabel")).toBeTruthy();
    expect(getByTestId("filterDateFrom")).toBeTruthy();
    expect(getByTestId("filterDateTo")).toBeTruthy();
    expect(getByTestId("radioButton_0")).toBeTruthy();
    expect(getByTestId("radioButton_1")).toBeTruthy();
    expect(getByTestId("radioButton_2")).toBeTruthy();
    expect(getByTestId("radioButton_3")).toBeTruthy();
    expect(getByTestId("filterButton")).toBeTruthy();
  });

  it("Should not render any field when showFilter to be false", () => {
    const { queryByTestId } = render(
      <FilterDate {...props} showFilter={false} />
    );
    expect(queryByTestId("container")).toBeFalsy();
    expect(queryByTestId("container-bottomSheetBack")).toBeFalsy();
    expect(queryByTestId("selectLabel")).toBeFalsy();
    expect(queryByTestId("specifcLabel")).toBeFalsy();
    expect(queryByTestId("filterDateFrom")).toBeFalsy();
    expect(queryByTestId("filterDateTo")).toBeFalsy();
    expect(queryByTestId("radioButton_0")).toBeFalsy();
    expect(queryByTestId("radioButton_1")).toBeFalsy();
    expect(queryByTestId("radioButton_2")).toBeFalsy();
    expect(queryByTestId("radioButton_3")).toBeFalsy();
    expect(queryByTestId("filterButton")).toBeFalsy();
  });

  it("should call onFilter when the filterButton got tapped", () => {
    const { getByTestId } = render(<FilterDate {...props} />);

    const filterButton = getByTestId("filterButton");
    fireEvent.click(filterButton);

    expect(props.onFilter).toHaveBeenCalled();
  });

  it("should call closeFilter when the container-bottomSheetBack got tapped", () => {
    const { getByTestId } = render(<FilterDate {...props} />);

    const background = getByTestId("container-bottomSheetBack");
    fireEvent.click(background);

    expect(props.closeFilter).toHaveBeenCalled();
  });
});
