import React from "react";
import { render, screen, configure } from "@testing-library/react";
import NotFound from "./NotFound";

configure({ testIdAttribute: "data-test" });
jest.mock("../Link", () => {
  const mock = () => <div>test</div>;
  return mock;
});
jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

describe("NotFound component", () => {
  it("should match snapshot", () => {
    expect(render(<NotFound />)).toMatchSnapshot();
  });
  it("should render notFound icon", () => {
    render(<NotFound />);
    const icon = screen.getByTestId("icon-notFound");
    expect(icon.getAttribute("color")).toBe("#374654");
  });
});
