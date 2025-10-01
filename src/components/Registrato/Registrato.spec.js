import React from "react";
import { mount } from "enzyme";

import Registrato from "./Registrato";

jest.mock("../../services/registrato", () => ({
  validateSecurityPhrase: p =>
    p === "invalid testing phrase" ? Promise.reject() : Promise.resolve()
}));

describe("Registrato component", () => {
  let props = {
    userInfo: {
      givenName: "Yuari",
      surname: "Ramos"
    }
  };

  const wrapper = mount(<Registrato {...props} />);

  it("should render Registrato with props", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should update state on user input", () => {
    wrapper.instance().handleUserInputFactory("securityCode")({
      target: { value: "testing phrase" }
    });
    expect(wrapper.state().securityCode).toBe("testing phrase");
  });

  it("should set success state to true on submit valid security code", done => {
    const successWrapper = mount(<Registrato {...props} />);
    wrapper.instance().handleUserInputFactory("securityCode")({
      target: { value: "testing phrase" }
    });
    successWrapper
      .instance()
      .submitSecurityCode({ preventDefault: () => {} })
      .then(() => {
        expect(successWrapper.state().success).toBe(true);
        expect(successWrapper.state().error).toBe(false);
        expect(successWrapper).toMatchSnapshot();
        done();
      });
  });

  it("should set error state to trye on submit invalid security code", done => {
    const errorWrapper = mount(<Registrato {...props} />);
    errorWrapper.instance().handleUserInputFactory("securityCode")({
      target: { value: "invalid testing phrase" }
    });
    errorWrapper
      .instance()
      .submitSecurityCode({ preventDefault: () => {} })
      .then(() => {
        expect(errorWrapper.state().success).toBe(false);
        expect(errorWrapper.state().error).toBe(true);
        expect(errorWrapper).toMatchSnapshot();
        done();
      });
  });
});
