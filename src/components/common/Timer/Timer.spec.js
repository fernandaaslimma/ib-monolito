import React from "react";
import { render, screen, configure, fireEvent } from "@testing-library/react";
import Timer from "./Timer";
configure({ testIdAttribute: "data-test" });
jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));
let props = {
  timeLeft: 1,
  expirationAction: jest.fn(),
  startTimer: false
};
describe("PendingOperations component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  it("should match snapshot", () => {
    expect(render(<Timer {...props} />)).toMatchSnapshot();
  });
  it("should trigger componentDidUpdate", async () => {
    const { rerender } = render(<Timer {...props} />);

    props.startTimer = true;
    props.timeLeft = 2;
    rerender(<Timer {...props} />);
    jest.runAllTimers();
  });
  it("should trigger expirationAction", async () => {
    const { rerender } = render(<Timer {...props} />);
    props.startTimer = true;
    props.timeLeft = 0;
    rerender(<Timer {...props} />);
    expect(props.expirationAction).toBeCalled;
  });
  it("should click on button (nothing should happen)", async () => {
    render(<Timer {...props} />);

    const button = screen.getByTestId("Button");
    expect(fireEvent.click(button)).toBeTruthy;
  });
});
