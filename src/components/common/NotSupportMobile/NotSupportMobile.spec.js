import React from "react";
import { render, screen, configure } from "@testing-library/react";
import NotSupportMobile from "./NotSupportMobile";

configure({ testIdAttribute: "data-test" });

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

describe("NotFound component", () => {
  it("should match snapshot", () => {
    expect(render(<NotSupportMobile />)).toMatchSnapshot();
  });
  it("should render mobileWarning icon", () => {
    render(<NotSupportMobile />);
    const icon = screen.getByTestId("icon-mobileWarning");
    expect(icon.getAttribute("color")).toBe("#374654");
  });
});
