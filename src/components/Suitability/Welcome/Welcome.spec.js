import React from "react";
import { shallow } from "enzyme";

import Welcome from "./Welcome";
import Button from "../../common/Button";
import Link from "../../common/Link";

jest.mock("../../../utils/redirect");
const redirectMock = require("../../../utils/redirect").redirect;

describe("Welcome component", () => {
  let props;

  beforeEach(() => {
    props = {
      userInfo: {
        givenName: "Mock"
      },
      suitabilityInfo: "XPTO",
      closeModal: jest.fn(),
      openModal: jest.fn(),
      setNotificationStatus: jest.fn(),
      getSuitabilityInfo: jest.fn()
    };
  });

  it("should render welcome with props", () => {
    expect(shallow(<Welcome {...props} />)).toMatchSnapshot();
  });

  it("should trigger closeModal and do redirect after decline", () => {
    shallow(<Welcome {...props} />)
      .find(Button)
      .at(0)
      .simulate("click");

    expect(props.closeModal).toHaveBeenCalled();
    expect(props.setNotificationStatus).toHaveBeenCalled();
    expect(redirectMock).toHaveBeenCalledWith("/home");
  });

  it("should trigger closeModal and open a whole new modal after go on", () => {
    shallow(<Welcome {...props} />)
      .find(Link)
      .at(0)
      .simulate("click");

    expect(props.closeModal).toHaveBeenCalled();
    expect(props.openModal).toHaveBeenCalled();
  });
});
