import React from "react";
import { mount, shallow } from "enzyme";
import Home from "./Home";
import {
  SUITABILITY_NOTIFICATION_TYPE,
  REGISTRATION_DATA_NOTIFICATION_TYPE,
  MFABOARDING_NOTIFICATION_TYPE,
  MFABOARDING_PARAM_APP,
  MFABOARDING_PARAM_AUTH,
  APPROVE_TERMS_TYPE
} from "../../utils/constants";

jest.mock("../../utils/i18n", () => ({
  translate: id => id,
  isZhCN: () => false,
  getLanguage: () => "en-US"
}));

jest.mock("../../utils/redirect");
const redirectMock = require("../../utils/redirect").redirect;

describe("Home component", () => {
  let props;
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

  beforeEach(() => {
    props = {
      setOpenBankingInfoConfirmation: jest.fn(),
      setNotificationSelect: jest.fn(),
      getNotification: jest.fn(),
      userInfo: { preferredLanguage: null },
      notification: [
        {
          title: "Precisamos cadastrar um novo fator de autenticação",
          description: "Qual fator deseja cadastrar?",
          displayMethod: "PopUp",
          type: "MFABoarding",
          parameters: [
            {
              type: MFABOARDING_PARAM_APP,
              id: 1
            },
            {
              type: MFABOARDING_PARAM_AUTH,
              id: 2
            }
          ]
        },
        {
          type: "SuitabilityForms",
          parameters: {
            formId: 1
          }
        },
        {
          type: "PersonRegistrationForms"
        }
      ],
      setLanguage: jest.fn(),
      setJustLoggedIn: jest.fn(),
      getUserInfo: jest.fn(() =>
        Promise.resolve({ preferredLanguage: "pt-BR" })
      ),
      isNavigationMenuShown: true,
      showNavigationMenu: jest.fn(),
      store: {
        getState: jest.fn(() => ({
          notificated: {
            SuitabilityForms: false,
            PersonRegistrationForms: false,
            MfaBoarding: false
          }
        }))
      }
    };
  });

  it("should match snapshot", () => {
    expect(mount(<Home {...props} />)).toMatchSnapshot();
  });

  it("should redirect to suitability in mobile even if has notification of mfaboarding ", () => {
    const mfaProps = {
      ...props,
      store: {
        getState: jest.fn(() => ({
          notificated: {
            MfaBoarding: false,
            SuitabilityForms: true,
            PersonRegistrationForms: true
          }
        }))
      },
      notification: [
        {
          type: MFABOARDING_NOTIFICATION_TYPE
        },
        {
          type: SUITABILITY_NOTIFICATION_TYPE
        }
      ]
    };

    const shallowComponent = shallow(<Home {...mfaProps} />);

    shallowComponent.setState({ loaded: true, notOpenBankingFlow: true });
    shallowComponent.update();
    expect(redirectMock).toHaveBeenCalledWith("/suitability/form");
  });

  it("should redirect to mfaboarding if has notification of mfaboarding", () => {
    global.window.matchMedia = jest.fn(() => {
      return {
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn()
      };
    });
    const mfaProps = {
      ...props,
      store: {
        getState: jest.fn(() => ({
          notificated: {
            MfaBoarding: false,
            SuitabilityForms: true,
            PersonRegistrationForms: true
          }
        }))
      },
      notification: [
        {
          type: MFABOARDING_NOTIFICATION_TYPE
        }
      ]
    };

    const shallowComponent = shallow(<Home {...mfaProps} />);

    shallowComponent.setState({ loaded: true, notOpenBankingFlow: true });
    shallowComponent.update();
    expect(redirectMock).toHaveBeenCalledWith("/mfaboarding");
  });

  it("should redirect to suitability if has notification of suitability", () => {
    const suityProps = {
      ...props,
      store: {
        getState: jest.fn(() => ({
          notificated: {
            MfaBoarding: true,
            SuitabilityForms: false,
            PersonRegistrationForms: true
          }
        }))
      },
      notification: [
        {
          type: SUITABILITY_NOTIFICATION_TYPE
        }
      ]
    };

    const shallowComponent = shallow(<Home {...suityProps} />);

    shallowComponent.setState({ loaded: true, notOpenBankingFlow: true });
    shallowComponent.update();
    expect(redirectMock).toHaveBeenCalledWith("/suitability/form");
  });

  it("should redirect to registrationData if has notification of registration", () => {
    const regProps = {
      ...props,
      store: {
        getState: jest.fn(() => ({
          notificated: {
            MfaBoarding: true,
            SuitabilityForms: true,
            PersonRegistrationForms: false
          }
        }))
      },
      notification: [
        {
          type: REGISTRATION_DATA_NOTIFICATION_TYPE
        }
      ]
    };

    const shallowComponent = shallow(<Home {...regProps} />);

    shallowComponent.setState({ loaded: true, notOpenBankingFlow: true });
    shallowComponent.update();
    expect(redirectMock).toHaveBeenCalledWith("/registrationData");
  });

  it("should redirect to approveTerms if has notification of terms", () => {
    const regProps = {
      ...props,
      store: {
        getState: jest.fn(() => ({
          notificated: {
            MfaBoarding: true,
            SuitabilityForms: true,
            PersonRegistrationForms: false
          }
        }))
      },
      notification: [
        {
          type: APPROVE_TERMS_TYPE
        }
      ]
    };

    const shallowComponent = shallow(<Home {...regProps} />);

    shallowComponent.setState({ loaded: true, notOpenBankingFlow: true });
    shallowComponent.update();
    expect(props.setNotificationSelect).toHaveBeenCalled();
    expect(redirectMock).toHaveBeenCalledWith("/registrationData");
  });

  it("should not notificate user", () => {
    const newProps = {
      ...props,
      store: {
        getState: jest.fn(() => ({
          notificated: {
            MfaBoarding: true,
            SuitabilityForms: true,
            PersonRegistrationForms: true
          }
        }))
      }
    };

    const shallowComponent = shallow(<Home {...newProps} />);

    shallowComponent.setState({ loaded: true, notOpenBankingFlow: true });
    shallowComponent.update();
    expect(shallowComponent).toMatchSnapshot();
  });

  it("should invoke setLanguage if preferred language are updated", () => {
    const shallowComponent = shallow(<Home {...props} />);

    shallowComponent.setState({ loaded: true, notOpenBankingFlow: true });
    shallowComponent.setProps({ userInfo: { preferredLanguage: "en-US" } });
    expect(props.setLanguage).toHaveBeenCalledWith("en-US");
  });
});
