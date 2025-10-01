import React from "react";
import { render, configure } from "@testing-library/react";
import ProgressBar from "./ProgressBar";
configure({ testIdAttribute: "data-test" });

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

describe("ProgressBar component", () => {
  it("should match snapshot", () => {
    expect(render(<ProgressBar percentage={20} />)).toMatchSnapshot();
  });
});
