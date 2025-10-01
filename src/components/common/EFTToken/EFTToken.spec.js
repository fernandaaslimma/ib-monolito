import React from "react";
import { shallow, mount } from "enzyme";
import EFTToken from "./EFTToken";
import Input from "../Input";
import { Button } from "react-bocombbm-components";
import Timer from "../Timer";
import { translate } from "../../../utils/i18n";

const props = {
  clearMFAToken: jest.fn(),
  clearMFATokenValidated: jest.fn(),
  handleMFAInputToken: jest.fn(),
  getMFAContent: jest.fn(),
  onMFAConfirmation: jest.fn(),
  onMFAError: jest.fn(),
  openToastr: jest.fn(),
  registerLater: jest.fn(),
  createAuthCodeParams: {
    payload: "exe",
    actionType: "exe"
  },
  getAuthFactors: jest.fn(() => Promise.resolve()),
  checkMFA: jest.fn(() => Promise.resolve()),
  authFactors: [
    {
      id: "847de684-3941-41ec-9eba-a961bc31d10e",
      defaultAuth: true,
      authUri: "totp",
      type: "totp",
      actions: [
        "wiretransfer",
        "passwordreset",
        "approvesuitability",
        "personRegistration.confirmInformation"
      ],
      activated: true,
      plataformIdentifier: null,
      approved: true
    },
    {
      id: "847de684-3941-41ec-9eba-a961bc31d10e",
      defaultAuth: false,
      authUri: "test@bocom.com.br",
      type: "mail",
      actions: [
        "wiretransfer",
        "passwordreset",
        "approvesuitability",
        "personRegistration.confirmInformation"
      ],
      activated: true,
      plataformIdentifier: null,
      approved: true
    }
  ]
};

describe("EFTToken component", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      value: jest.fn(() => {
        return {
          matches: jest.fn(),
          addListener: jest.fn(),
          removeListener: jest.fn()
        };
      }),
      writable: true
    });
  });
  it("should match snapshot", () => {
    const wrapper = mount(<EFTToken {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot in web", () => {
    global.window.matchMedia = jest.fn(() => {
      return {
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn()
      };
    });
    const wrapper = mount(<EFTToken {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an "EFTToken" tag', () => {
    const wrapper = mount(<EFTToken {...props} />);
    expect(wrapper.find("EFTToken").length).toBe(1);
  });

  it("should render only loading component", () => {
    const wrapper = shallow(<EFTToken {...props} />, {
      disableLifecycleMethods: true
    });

    wrapper.setState({ contentLoaded: false });
    expect(wrapper).toMatchSnapshot();
  });

  it("should render EFToken totp component", () => {
    const wrapper = shallow(<EFTToken {...props} />, {
      disableLifecycleMethods: true
    });

    wrapper.setState({ authFactor: props.authFactors[0] });
    wrapper.setState({ contentLoaded: true });

    expect(wrapper).toMatchSnapshot();
  });

  it("should render EFToken email component", () => {
    const wrapper = shallow(<EFTToken {...props} />, {
      disableLifecycleMethods: true
    });

    wrapper.setState({ authFactor: props.authFactors[1] });
    wrapper.setState({ contentLoaded: true });

    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with a valid input token", () => {
    props.mfaTokenValidated = true;
    const wrapper = shallow(<EFTToken {...props} />);

    wrapper.setState({ authFactor: props.authFactors[0] });
    wrapper.setState({ contentLoaded: true });
    wrapper
      .find(Input)
      .at(0)
      .prop("valid")();

    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with a undefined and invalid input token", () => {
    props.mfaTokenValidated = undefined;
    const wrapper = shallow(<EFTToken {...props} />);

    wrapper.setState({ authFactor: props.authFactors[0] });
    wrapper.setState({ contentLoaded: true });
    wrapper
      .find(Input)
      .at(0)
      .prop("valid")();
    expect(wrapper).toMatchSnapshot();
  });

  it("should call checkMFA and enableConfirmButton when mfaToken is complete", () => {
    jest.spyOn(EFTToken.prototype, "handleConfirmButton");

    const wrapper = shallow(<EFTToken {...props} />);
    wrapper.setProps({ authFactor: props.authFactors[0] });
    wrapper.setProps({ mfaToken: "1234" });

    expect(EFTToken.prototype.handleConfirmButton.calledOnce);

    expect(wrapper.state()).toEqual({
      authFactor: [],
      contentLoaded: false,
      isLoading: false,
      relativeFactors: [],
      showTimeOut: false,
      validInput: false
    });
  });

  it("should unmount properly, clearing MFA data", () => {
    jest.spyOn(EFTToken.prototype, "componentWillUnmount");

    const wrapper = shallow(<EFTToken {...props} />);
    wrapper.unmount();

    expect(EFTToken.prototype.componentWillUnmount.calledOnce);
    expect(props.clearMFATokenValidated).toHaveBeenCalled();
    expect(props.clearMFAToken).toHaveBeenCalled();
  });

  it("should display Timer", () => {
    const wrapper = shallow(<EFTToken {...props} />);

    const spy = jest.spyOn(wrapper.instance(), "resetTimeOutStates");
    const spyState = jest.spyOn(wrapper.instance(), "setState");

    wrapper.setState({
      showTimeOut: true,
      authFactor: props.authFactors[1],
      contentLoaded: true
    });
    wrapper.find(Timer).prop("expirationAction")();
    expect(spy).toHaveBeenCalled();
    expect(spyState).toHaveBeenCalledWith({ showTimeOut: false });
  });

  it("should display sendAnotherToken and test it's click", () => {
    const wrapper = shallow(<EFTToken {...props} />);

    const spy = jest.spyOn(wrapper.instance(), "sendAnotherToken");
    const spyState = jest.spyOn(wrapper.instance(), "setState");
    const spyFunction = jest.spyOn(
      wrapper.instance(),
      "recreateAuthFactorCode"
    );

    wrapper.setState({
      showTimeOut: false,
      authFactor: props.authFactors[1],
      contentLoaded: true
    });
    wrapper
      .find(Button)
      .at(1)
      .simulate("click");
    expect(spy).toHaveBeenCalled();
    expect(spyState).toHaveBeenCalledWith({ showTimeOut: true });
    expect(props.openToastr).toHaveBeenCalledWith({
      text: translate("RESEND_TOKEN_EMAIL"),
      isBelow: false,
      isTop: true
    });
    expect(spyFunction).toHaveBeenCalled();
  });

  it("should display sendAnotherToken and test it's click with checkMfa resolved", () => {
    const wrapper = shallow(<EFTToken {...props} />);

    const spy = jest.spyOn(wrapper.instance(), "handleConfirmButton");
    const spyState = jest.spyOn(wrapper.instance(), "setState");

    wrapper.setState({
      showTimeOut: false,
      authFactor: props.authFactors[1],
      contentLoaded: true
    });
    wrapper
      .find(Button)
      .at(0)
      .simulate("click");
    expect(spy).toHaveBeenCalled();
    expect(spyState).toHaveBeenCalledWith({ isLoading: true });
    expect(props.checkMFA).toHaveBeenCalled();
  });

  it("should display sendAnotherToken and test it's click with checkMfa rejected", () => {
    const newProps = {
      ...props,
      checkMFA: jest.fn(() => Promise.reject("err"))
    };
    const wrapper = shallow(<EFTToken {...newProps} />);

    wrapper.setState({
      showTimeOut: false,
      authFactor: props.authFactors[1],
      contentLoaded: true,
      isLoading: false,
      validInput: true
    });

    const spy = jest.spyOn(wrapper.instance(), "handleConfirmButton");
    const spyState = jest.spyOn(wrapper.instance(), "setState");
    wrapper
      .find(Button)
      .at(0)
      .simulate("click");
    expect(spy).toHaveBeenCalled();
    expect(spyState).toHaveBeenCalledWith({ isLoading: true });
  });

  it("should call createAuthFactorCode defaultAuth false", () => {
    const newProps = {
      ...props,
      boardingMfa: true,
      authFactors: [
        {
          id: "847de684-3941-41ec-9eba-a961bc31d10e",
          defaultAuth: false,
          authUri: "totp",
          type: "totp",
          actions: [
            "wiretransfer",
            "passwordreset",
            "approvesuitability",
            "personRegistration.confirmInformation"
          ],
          activated: true,
          plataformIdentifier: null,
          approved: true
        },
        {
          id: "847de684-3941-41ec-9eba-a961bc31d10e",
          defaultAuth: false,
          authUri: "test@bocom.com.br",
          type: "mail",
          actions: [
            "wiretransfer",
            "passwordreset",
            "approvesuitability",
            "personRegistration.confirmInformation"
          ],
          activated: true,
          plataformIdentifier: null,
          approved: true
        }
      ]
    };
    const wrapper = shallow(<EFTToken {...newProps} />).instance();
    wrapper.createAuthFactorCode();
    setTimeout(async () => {
      await props.getAuthFactors();
    }, 1000);

    expect(wrapper).toMatchSnapshot();
  });

  it("should call createAuthFactorCode defaultAuth true", () => {
    const newProps = {
      ...props,
      boardingMfa: true,
      authFactors: [
        {
          id: "847de684-3941-41ec-9eba-a961bc31d10e",
          defaultAuth: true,
          authUri: "totp",
          type: "totp",
          actions: [
            "wiretransfer",
            "passwordreset",
            "approvesuitability",
            "personRegistration.confirmInformation"
          ],
          activated: true,
          plataformIdentifier: null,
          approved: true
        },
        {
          id: "847de684-3941-41ec-9eba-a961bc31d10e",
          defaultAuth: true,
          authUri: "test@bocom.com.br",
          type: "mail",
          actions: [
            "wiretransfer",
            "passwordreset",
            "approvesuitability",
            "personRegistration.confirmInformation"
          ],
          activated: true,
          plataformIdentifier: null,
          approved: true
        }
      ]
    };
    const wrapper = shallow(<EFTToken {...newProps} />).instance();
    wrapper.createAuthFactorCode();
    setTimeout(async () => {
      await props.getAuthFactors();
    }, 1000);

    expect(wrapper).toMatchSnapshot();
  });

  it("should change title with message", () => {
    const newProps = {
      ...props,
      title: "text",
      noMessage: false,
      message: "message"
    };
    const wrapper = shallow(<EFTToken {...newProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should change title without message", () => {
    const newProps = {
      ...props,
      title: "text",
      noMessage: true
    };
    const wrapper = shallow(<EFTToken {...newProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
