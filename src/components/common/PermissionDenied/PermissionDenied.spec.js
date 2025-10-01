import React from "react";
import { render, screen, configure } from "@testing-library/react";
import PermissionDenied from "./PermissionDenied";

configure({ testIdAttribute: "data-test" });

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

describe("PermissionDenied component", () => {
  it("should match snapshot", () => {
    expect(render(<PermissionDenied />)).toMatchSnapshot();
  });
  it("should render PermissionDenied icon", () => {
    render(<PermissionDenied />);
    const icon = screen.getByTestId("icon-attention");
    expect(icon.getAttribute("color")).toBe("#374654");
  });
});
