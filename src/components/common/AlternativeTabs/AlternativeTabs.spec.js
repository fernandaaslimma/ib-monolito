import { configure, fireEvent, render } from "@testing-library/react";
import React from "react";
import AlternativeTabs from "./AlternativeTabs";

configure({ testIdAttribute: "data-test" });

describe("Alternative Tabs", () => {
  const props = {
    tabs: [
      {
        title: "Tab0",
        Content: () => <span data-test="tab0Content">Tab0 content</span>
      },
      {
        title: "Tab1",
        Content: () => <span data-test="tab1Content">Tab1 content</span>
      }
    ],
    setSelectedTab: jest.fn()
  };

  const missingProps = {
    tabs: [
      {
        title: "",
        Content: ""
      },
      {
        title: "",
        Content: ""
      }
    ],
    setSelectedTab: jest.fn()
  };

  it("Should render alternative tabs fields", () => {
    const { getByTestId, getByText, queryByTestId, queryByText } = render(
      <AlternativeTabs {...props} />
    );

    expect(getByTestId("alternativeTabsContainer")).toBeTruthy();
    expect(getByTestId("individualTab0")).toBeTruthy();
    expect(getByTestId("individualTab1")).toBeTruthy();
    expect(getByText("Tab0")).toBeTruthy();
    expect(getByText("Tab1")).toBeTruthy();
    expect(getByTestId("contentContainer")).toBeTruthy();
    expect(getByTestId("tab0Content")).toBeTruthy();
    expect(getByText("Tab0 content")).toBeTruthy();
    expect(queryByTestId("tab1Content")).toBeFalsy();
    expect(queryByText("Tab1 content")).toBeFalsy();
  });

  it("Should not render missing fields", () => {
    const { getByTestId, queryByTestId, queryByText } = render(
      <AlternativeTabs {...missingProps} />
    );

    expect(getByTestId("alternativeTabsContainer")).toBeTruthy();
    expect(getByTestId("individualTab0")).toBeTruthy();
    expect(getByTestId("individualTab1")).toBeTruthy();
    expect(queryByText("Tab0")).toBeFalsy();
    expect(queryByText("Tab1")).toBeFalsy();
    expect(getByTestId("contentContainer")).toBeTruthy();
    expect(queryByTestId("tab0Content")).toBeFalsy();
    expect(queryByText("Tab0 content")).toBeFalsy();
  });

  it("Should change current tab", () => {
    const { getByTestId, getByText, queryByTestId, queryByText } = render(
      <AlternativeTabs {...props} />
    );

    const tab0 = getByTestId("individualTab0");
    const tab1 = getByTestId("individualTab1");

    expect(getByTestId("tab0Content")).toBeTruthy();
    expect(getByText("Tab0 content")).toBeTruthy();
    expect(queryByTestId("tab1Content")).toBeFalsy();
    expect(queryByText("Tab1 content")).toBeFalsy();

    fireEvent.click(tab1);

    expect(queryByTestId("tab0Content")).toBeFalsy();
    expect(queryByText("Tab0 content")).toBeFalsy();
    expect(getByTestId("tab1Content")).toBeTruthy();
    expect(getByText("Tab1 content")).toBeTruthy();

    fireEvent.click(tab0);

    expect(getByTestId("tab0Content")).toBeTruthy();
    expect(getByText("Tab0 content")).toBeTruthy();
    expect(queryByTestId("tab1Content")).toBeFalsy();
    expect(queryByText("Tab1 content")).toBeFalsy();
  });
});
