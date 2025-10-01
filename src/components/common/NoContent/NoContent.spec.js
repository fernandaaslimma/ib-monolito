import { configure, render } from "@testing-library/react";
import React from "react";
import NoContent from "./NoContent";

configure({ testIdAttribute: "data-test" });

describe("No Content", () => {
  const today = new Date();
  today.setDate(20);
  today.setFullYear(2024);
  today.setMonth(9);

  const props = {
    title: "Title",
    text: "Text",
    icon: "NoTransactions"
  };

  it("Should render all the fields", () => {
    const { getByTestId, getByText } = render(<NoContent {...props} />);
    expect(getByTestId("NoContent")).toBeTruthy();
    expect(getByTestId("icon")).toBeTruthy();
    expect(getByTestId("title")).toBeTruthy();
    expect(getByTestId("text")).toBeTruthy();
    expect(getByText("Title")).toBeTruthy();
    expect(getByText("Text")).toBeTruthy();
  });

  it("Should not render missing fields", () => {
    const { queryByTestId, getByTestId } = render(<NoContent />);
    expect(getByTestId("NoContent")).toBeTruthy();
    expect(queryByTestId("icon")).toBeFalsy();
    expect(queryByTestId("title")).toBeFalsy();
    expect(queryByTestId("text")).toBeFalsy();
  });
});
