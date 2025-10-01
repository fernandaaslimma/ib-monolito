import React from "react";
import { shallow } from "enzyme";
import ClickWrapper from "../../../utils/clickWrapper";
import { SelectionType } from "./styles";
import {
  MFABOARDING_PARAM_APP,
  MFABOARDING_PARAM_AUTH
} from "../../../utils/constants";
import TypeSelectionExchange from "./TypeSelectionExchange";

const props = {
  current: 1,
  changeCurrentScreen: jest.fn(),
  notification: {
    title: "Precisamos cadastrar um novo fator de autenticação",
    description: "Qual fator deseja cadastrar?",
    displayMethod: "PopUp",
    type: "MFABoarding",
    parameters: [
      {
        type: MFABOARDING_PARAM_APP,
        id: 1
      }
    ]
  }
};

describe("TypeSelection component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<TypeSelectionExchange {...props} />)).toMatchSnapshot();
  });

  it("should call changeCurrentScreen with type authenticatorApp", () => {
    const newProps = {
      ...props,
      notification: {
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
      }
    };
    const shallowComponent = shallow(<TypeSelectionExchange {...newProps} />);

    shallowComponent
      .find(ClickWrapper)
      .find(SelectionType)
      .prop("onClick")();
    expect(props.changeCurrentScreen).toHaveBeenCalledWith(2);
  });
});
