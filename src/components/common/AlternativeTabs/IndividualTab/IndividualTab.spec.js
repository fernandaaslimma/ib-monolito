import { configure, fireEvent, render } from "@testing-library/react";
import React from "react";
import IndividualTab from "./IndividualTab";

configure({ testIdAttribute: "data-test" });

describe("Individual Tabs", () => {
  const props = {
    tab: {
      title: "Tab0",
      Content: () => <span data-test="tab0Content">Tab0 content</span>
    },
    selected: true,
    setCurrentTab: jest.fn()
  };

  const missingProps = {
    tab: {
      title: "",
      Content: () => <span data-test="tab0Content">Tab0 content</span>
    },
    selected: true,
    setCurrentTab: jest.fn()
  };

  it("Should render all fields", () => {
    const { getByTestId, getByText } = render(<IndividualTab {...props} />);

    expect(getByTestId("individualTab")).toBeTruthy();
    expect(getByTestId("title")).toBeTruthy();
    expect(getByText("Tab0")).toBeTruthy();
  });

  it("Should not render missing fields", () => {
    const { getByTestId, queryByText, queryByTestId } = render(
      <IndividualTab {...missingProps} />
    );

    expect(getByTestId("individualTab")).toBeTruthy();
    expect(queryByTestId("title")).toBeFalsy();
    expect(queryByText("Tab0")).toBeFalsy();
  });

  it("Should call setCurrentTab when tab got tapped", () => {
    const { getByTestId } = render(<IndividualTab {...props} />);

    const tab = getByTestId("individualTab");
    fireEvent.click(tab);

    expect(props.setCurrentTab).toHaveBeenCalled();
  });
});
