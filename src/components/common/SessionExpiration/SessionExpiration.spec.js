import React from "react";
import { render, mount } from "enzyme";
import SessionExpiration from "./SessionExpiration";
import TimeExpirationAlert from "../TimeExpirationAlert";

jest.mock("../../../utils/redirect");
const hardRedirectMock = require("../../../utils/redirect").hardRedirect;

const props = {
  updateAccessAndRefreshToken: jest.fn()
};

describe("SessionExpiration component", () => {
  it("should match snapshot", () => {
    expect(render(<SessionExpiration {...props} />)).toMatchSnapshot();
  });

  it("should call component update and set new state", () => {
    const shallowComponent = mount(<SessionExpiration {...props} />);

    const updateSpy = jest.spyOn(
      SessionExpiration.prototype,
      "componentDidUpdate"
    );
    shallowComponent.setState({ remaining: 59 });

    expect(updateSpy).toHaveBeenCalled();
  });

  it("should call hardRedirect when <TimeExpirationAlert> expirationAction is invoked", () => {
    const shallowComponent = mount(<SessionExpiration {...props} />);

    shallowComponent
      .find(TimeExpirationAlert)
      .props()
      .expirationAction();

    expect(hardRedirectMock).toHaveBeenCalled();
  });
});
