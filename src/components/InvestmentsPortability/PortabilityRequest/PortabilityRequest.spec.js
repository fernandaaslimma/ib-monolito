import React from "react";
import { render, screen, configure } from "@testing-library/react";
import PortabilityRequest from "./PortabilityRequest";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

jest.mock("react-bocombbm-components", () => ({
  StepSlider: jest.fn(() => <div data-test="step-slider">StepSlider</div>),
  Hide: jest.fn(({ children }) => <div>{children}</div>),
}));

jest.mock("../../ErrorBoundary/ErrorBoundary", () => jest.fn(({ children }) => <div>{children}</div>));
jest.mock("../../common/NotSupportMobile", () => jest.fn(() => <div data-test="not-support-mobile">NotSupportMobile</div>));

describe("PortabilityRequest Component", () => {
  const mockProps = {
    loading: false,
    error: null,
    getInstitutions: jest.fn(),
    institutions: [],
    setCustodianAccounts: jest.fn(),
    custodianAccounts: [],
    setSelectedInstitutions: jest.fn(),
    selectedInstitutions: [],
    getPositions: jest.fn(),
    positions: [],
  };

  it("renders the ErrorBoundary component", () => {
    render(<PortabilityRequest {...mockProps} />);
    expect(ErrorBoundary).toHaveBeenCalled();
  });

  it("renders NotSupportMobile when viewport is below 'md'", () => {
    render(<PortabilityRequest {...mockProps} />);
    expect(screen.getByTestId("not-support-mobile")).toBeInTheDocument();
  });

  it("renders StepSlider when viewport is above 'md'", () => {
    render(<PortabilityRequest {...mockProps} />);
    expect(screen.getByTestId("step-slider")).toBeInTheDocument();
  });

  it("renders the Wrapper component", () => {
    const { container } = render(<PortabilityRequest {...mockProps} />);
    expect(container.querySelector("div")).toBeInTheDocument();
  });
});