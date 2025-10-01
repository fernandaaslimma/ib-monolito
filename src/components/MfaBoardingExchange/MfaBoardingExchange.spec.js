import React from "react";
import { shallow } from "enzyme";
import { MFABOARDING_PARAM_AUTH } from "../../utils/constants";
import MfaBoardingExchange from "./MfaBoardingExchange";

const props = {
  openModal: jest.fn(),
  getNotification: jest.fn(),
  notification: [
    {
      title: "Precisamos cadastrar um novo fator de autenticação",
      description: "Qual fator deseja cadastrar?",
      displayMethod: "PopUp",
      type: "MFABoarding",
      parameters: [
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
  ]
};

describe("Success component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<MfaBoardingExchange {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with props without MFABoarding type", () => {
    const newProps = {
      ...props,
      notification: [
        {
          type: "MFABoarding",
          parameters: [
            {
              type: MFABOARDING_PARAM_AUTH,
              id: 2
            }
          ]
        },
        {
          type: "MFABoarding",
          parameters: [
            {
              type: MFABOARDING_PARAM_AUTH,
              id: 2
            }
          ]
        },
        {
          type: "MFABoarding",
          parameters: [
            {
              type: MFABOARDING_PARAM_AUTH,
              id: 2
            }
          ]
        }
      ]
    };
    expect(shallow(<MfaBoardingExchange {...newProps} />)).toMatchSnapshot();
  });

  it("Should use notification array when notification doesnt exists", () => {
    const newProps = {
      ...props,
      notification: undefined
    };
    expect(shallow(<MfaBoardingExchange {...newProps} />)).toMatchSnapshot();
  });
});
