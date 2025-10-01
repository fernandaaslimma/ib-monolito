import React from "react";
import { shallow } from "enzyme";
import MfaBoardingScreens from "./MfaBoardingScreens";
import ExitConfirmation from "../../common/ExitConfirmation";
import Header from "../../common/Modal/Header";
import { Wrapper } from "./styles";
import QrCode from "../QrCode";
import AppBbm from "../AppBbm";
import Success from "../Success";

jest.mock("../../../utils/redirect");
const redirectMock = require("../../../utils/redirect").redirect;

const props = {
  closeModal: jest.fn(),
  openToastr: jest.fn(),
  closeToastr: jest.fn(),
  createAuthFactor: jest.fn(),
  aproveAuthFactor: jest.fn(),
  activateAuthFactor: jest.fn(),
  setNotificationStatus: jest.fn(),
  clearAuthFactorResponse: jest.fn(),
  changeFactorTogle: jest.fn(),
  authFactorResponse: {
    authFactorID: "ID",
    activationURL: "URL"
  }
};

describe("MfaBoardingScreens component", () => {
  it("should match snapshot with props", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    wrapper.setState({
      current: 1,
      isExiting: false
    });
    expect(shallow(<MfaBoardingScreens {...props} />)).toMatchSnapshot();
  });

  it("should call changeisExiting and change the isExiting state", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "setState");
    wrapper.instance().changeisExiting(true);
    expect(spy).toHaveBeenCalledWith({ isExiting: true });
  });

  it("must call handleClose and execute closeModal", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    wrapper.instance().handleClose();
    expect(props.closeModal).toHaveBeenCalled();
  });
});

describe("MfaBoardingScreens component render switch 1", () => {
  it("should call changeCurrentScreen and change the current state", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "setState");
    wrapper.instance().changeCurrentScreen(1);
    expect(spy).toHaveBeenCalledWith({ current: 1 });
  });

  it("must call renderExitConfirmation confirm exit", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "renderExitConfirmation");
    const spy2 = jest.spyOn(wrapper.instance(), "handleClose");
    wrapper.setState({
      current: 1,
      isExiting: true
    });
    wrapper.find(ExitConfirmation).prop("onClickExit")();
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
    expect(props.setNotificationStatus).toHaveBeenCalled();
    expect(redirectMock).toHaveBeenCalledWith("/home");
  });

  it("must call renderExitConfirmation cancel exit", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "renderExitConfirmation");
    const spy2 = jest.spyOn(wrapper.instance(), "setState");
    wrapper.setState({
      current: 1,
      isExiting: true
    });
    wrapper.find(ExitConfirmation).prop("onClickCancel")();
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalledWith({ isExiting: false });
  });

  it("must call prop onClickClose of header", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "setState");
    wrapper.setState({
      current: 1,
      isExiting: false
    });
    wrapper.find(Header).prop("onClickClose")();
    expect(spy).toHaveBeenCalledWith({ isExiting: true });
  });
});

describe("MfaBoardingScreens component render switch 2", () => {
  it("should call changeCurrentScreen and change the current state", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "setState");
    wrapper.instance().changeCurrentScreen(2);
    expect(spy).toHaveBeenCalledWith({ current: 2 });
  });

  it("must call renderExitConfirmation confirm exit", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "renderExitConfirmation");
    const spy2 = jest.spyOn(wrapper.instance(), "handleClose");
    wrapper.setState({
      current: 2,
      isExiting: true
    });
    wrapper.find(ExitConfirmation).prop("onClickExit")();
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it("must call renderExitConfirmation cancel exit", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "renderExitConfirmation");
    const spy2 = jest.spyOn(wrapper.instance(), "setState");
    wrapper.setState({
      current: 2,
      isExiting: true
    });
    wrapper.find(ExitConfirmation).prop("onClickCancel")();
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalledWith({ isExiting: false });
  });
});

describe("MfaBoardingScreens component render switch 3", () => {
  it("should call changeCurrentScreen and change the current state", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "setState");
    wrapper.instance().changeCurrentScreen(3);
    expect(spy).toHaveBeenCalledWith({ current: 3 });
  });

  it("must call renderExitConfirmation confirm exit", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "renderExitConfirmation");
    const spy2 = jest.spyOn(wrapper.instance(), "handleClose");
    wrapper.setState({
      current: 3,
      isExiting: true
    });
    wrapper.find(ExitConfirmation).prop("onClickExit")();
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it("must call renderExitConfirmation cancel exit", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "renderExitConfirmation");
    const spy2 = jest.spyOn(wrapper.instance(), "setState");
    wrapper.setState({
      current: 3,
      isExiting: true
    });
    wrapper.find(ExitConfirmation).prop("onClickCancel")();
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalledWith({ isExiting: false });
  });

  it("must call prop onClickBack of header", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "changeCurrentScreen");
    wrapper.setState({
      current: 3,
      isExiting: false
    });
    wrapper.find(Header).prop("onClickBack")();
    expect(spy).toHaveBeenCalled();
  });

  it("must call handleSuccessClose", () => {
    const newProps = {
      ...props,
      historyGoBack: jest.fn(),
      clearAuthFactorResponse: jest.fn()
    };
    const wrapper = shallow(<MfaBoardingScreens {...newProps} />);
    const spy = jest.spyOn(wrapper.instance(), "handleSuccessClose");
    wrapper.setState({
      current: 3,
      isExiting: false
    });
    wrapper.find(AppBbm).prop("handleClose")();
    expect(spy).toHaveBeenCalled();
    expect(props.setNotificationStatus).toHaveBeenCalledWith("MFABoarding");
    expect(props.clearAuthFactorResponse).toHaveBeenCalled();
    expect(newProps.historyGoBack).toHaveBeenCalled();
  });
});

describe("MfaBoardingScreens component render switch 4", () => {
  it("should call changeCurrentScreen and change the current state", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "createNewAuthFactor");
    wrapper.instance().changeCurrentScreen(4);
    expect(spy).toHaveBeenCalled;
  });

  it("must call renderExitConfirmation confirm exit", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "renderExitConfirmation");
    const spy2 = jest.spyOn(wrapper.instance(), "handleClose");
    wrapper.setState({
      current: 4,
      isExiting: true
    });
    wrapper.find(ExitConfirmation).prop("onClickExit")();
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it("must call renderExitConfirmation cancel exit", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "renderExitConfirmation");
    const spy2 = jest.spyOn(wrapper.instance(), "setState");
    wrapper.setState({
      current: 4,
      isExiting: true
    });
    wrapper.find(ExitConfirmation).prop("onClickCancel")();
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalledWith({ isExiting: false });
  });

  it("must call prop onClickBack of header", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "changeCurrentScreen");
    wrapper.setState({
      current: 4
    });
    wrapper.find(Header).prop("onClickBack")();
    expect(spy).toHaveBeenCalled();
  });
});

describe("MfaBoardingScreens component render switch 5", () => {
  it("should call changeCurrentScreen and change the current state", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "setState");
    wrapper.instance().changeCurrentScreen(5);
    expect(spy).toHaveBeenCalledWith({ current: 5 });
  });

  it("must call renderExitConfirmation confirm exit", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "renderExitConfirmation");
    const spy2 = jest.spyOn(wrapper.instance(), "handleClose");
    wrapper.setState({
      current: 5,
      isExiting: true
    });
    wrapper.find(ExitConfirmation).prop("onClickExit")();
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it("must call renderExitConfirmation cancel exit", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "renderExitConfirmation");
    const spy2 = jest.spyOn(wrapper.instance(), "setState");
    wrapper.setState({
      current: 5,
      isExiting: true
    });
    wrapper.find(ExitConfirmation).prop("onClickCancel")();
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalledWith({ isExiting: false });
  });

  it("must call prop onClickBack of header", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "changeCurrentScreen");
    wrapper.setState({
      current: 5,
      isExiting: false
    });
    wrapper.find(Header).prop("onClickBack")();
    expect(spy).toHaveBeenCalled();
  });

  it("must call prop onClickClose of header", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "setState");
    wrapper.setState({
      current: 5,
      isExiting: false
    });
    wrapper.find(Header).prop("onClickClose")();
    expect(spy).toHaveBeenCalledWith({ isExiting: true });
  });
});

describe("MfaBoardingScreens component render switch 6", () => {
  it("should call changeCurrentScreen and change the current state", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "aproveNewAuthFactor");
    wrapper.instance().changeCurrentScreen(6);
    expect(spy).toHaveBeenCalled;
  });

  it("must call renderExitConfirmation confirm exit", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "renderExitConfirmation");
    const spy2 = jest.spyOn(wrapper.instance(), "handleClose");
    wrapper.setState({
      current: 6,
      isExiting: true
    });
    wrapper.find(ExitConfirmation).prop("onClickExit")();
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it("must call renderExitConfirmation cancel exit", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "renderExitConfirmation");
    const spy2 = jest.spyOn(wrapper.instance(), "setState");
    wrapper.setState({
      current: 6,
      isExiting: true
    });
    wrapper.find(ExitConfirmation).prop("onClickCancel")();
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalledWith({ isExiting: false });
  });

  it("must call prop onClickBack of header", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "changeCurrentScreen");
    wrapper.setState({
      current: 6
    });
    wrapper.find(Header).prop("onClickBack")();
    expect(spy).toHaveBeenCalled();
  });

  it("must call prop onClickClose of header", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "setState");
    wrapper.setState({
      current: 6
    });
    wrapper.find(Header).prop("onClickClose")();
    expect(spy).toHaveBeenCalledWith({ isExiting: true });
  });

  it("must call prop submitToken", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "submitToken");
    wrapper.setState({
      current: 6,
      isExiting: false
    });
    wrapper
      .find(Wrapper)
      .find(QrCode)
      .prop("submitToken")();
    expect(spy).toHaveBeenCalled();
  });
});

describe("MfaBoardingScreens component render switch 7", () => {
  it("should call changeCurrentScreen and change the current state", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "setState");
    wrapper.instance().changeCurrentScreen(7);
    expect(spy).toHaveBeenCalledWith({ current: 7 });
  });

  it("must call renderExitConfirmation confirm exit", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "renderExitConfirmation");
    const spy2 = jest.spyOn(wrapper.instance(), "handleClose");
    wrapper.setState({
      current: 7,
      isExiting: true
    });
    wrapper.find(ExitConfirmation).prop("onClickExit")();
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it("must call renderExitConfirmation cancel exit", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "renderExitConfirmation");
    const spy2 = jest.spyOn(wrapper.instance(), "setState");
    wrapper.setState({
      current: 7,
      isExiting: true
    });
    wrapper.find(ExitConfirmation).prop("onClickCancel")();
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalledWith({ isExiting: false });
  });

  it("must call prop onClickClose of header", () => {
    const wrapper = shallow(<MfaBoardingScreens {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "handleClose");
    wrapper.setState({
      current: 7
    });
    wrapper.find(Header).prop("onClickClose")();
    expect(spy).toHaveBeenCalled;
  });

  it("must call handleSuccessClose", () => {
    const newProps = {
      ...props,
      historyGoBack: jest.fn(),
      clearAuthFactorResponse: jest.fn()
    };
    const wrapper = shallow(<MfaBoardingScreens {...newProps} />);
    const spy = jest.spyOn(wrapper.instance(), "handleSuccessClose");
    wrapper.setState({
      current: 7,
      isExiting: false
    });
    wrapper.find(Success).prop("handleClose")();
    expect(spy).toHaveBeenCalled();
    expect(props.setNotificationStatus).toHaveBeenCalledWith("MFABoarding");
    expect(props.clearAuthFactorResponse).toHaveBeenCalled();
    expect(newProps.historyGoBack).toHaveBeenCalled();
  });
});
