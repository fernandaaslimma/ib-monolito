import React from "react";
import { render, screen, configure, fireEvent } from "@testing-library/react";
import PendingOperations from "./PendingOperations";

configure({ testIdAttribute: "data-test" });
jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

describe("PendingOperations component", () => {
  it("should match snapshot", () => {
    expect(render(<PendingOperations />)).toMatchSnapshot();
  });
  it("should clcik in progress movements", () => {
    const { rerender } = render(
      <PendingOperations dataTest="testing" printContext={false} />
    );
    const progressMovements = screen.getByTestId("testing");
    expect(fireEvent.click(progressMovements)).toBeTruthy();
    rerender(<PendingOperations dataTest="testing" printContext={false} />);
    const animatedBottomSheet = screen.getByTestId(
      "animatedBottomSheet-onClickInBack"
    );
    expect(fireEvent.click(animatedBottomSheet)).toBeTruthy();
  });
});
