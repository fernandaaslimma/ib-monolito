import React from "react";
import { shallow } from "enzyme";
import MfaBoarding from "./MfaBoarding";
import {
  MFABOARDING_PARAM_APP,
  MFABOARDING_PARAM_AUTH
} from "../../utils/constants";

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
  ]
};

describe("Success component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<MfaBoarding {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with props without MFABoarding type", () => {
    // Necessary test so .reduce() can enter the if path
    const newProps = {
      ...props,
      notification: [
        {
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
        }
      ]
    };
    expect(shallow(<MfaBoarding {...newProps} />)).toMatchSnapshot();
  });

  it("Should use notification array when notification doesnt exists", () => {
    const newProps = {
      ...props,
      notification: undefined
    };
    expect(shallow(<MfaBoarding {...newProps} />)).toMatchSnapshot();
  });
});
