import React from "react";
import { shallow } from "enzyme";
import { Button } from "react-bocombbm-components";
import ClickWrapper from "../../../utils/clickWrapper";
import TypeSelection from "./TypeSelection";
import { SelectionType } from "./styles";
import {
  MFABOARDING_PARAM_APP,
  MFABOARDING_PARAM_AUTH
} from "../../../utils/constants";

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
    expect(shallow(<TypeSelection {...props} />)).toMatchSnapshot();
  });

  it("should call changeCurrentScreen when clicked on register later", () => {
    const shallowComponent = shallow(<TypeSelection {...props} />);
    shallowComponent
      .find(ClickWrapper)
      .find(Button)
      .simulate("click");
    expect(props.changeCurrentScreen).toHaveBeenCalledWith(2);
  });

  it("should call changeCurrentScreen with type bocomBBMApp", () => {
    const newProps = {
      ...props,
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
    const shallowComponent = shallow(<TypeSelection {...newProps} />);

    shallowComponent
      .find(ClickWrapper)
      .find(SelectionType)
      .prop("onClick")();
    expect(props.changeCurrentScreen).toHaveBeenCalledWith(3);
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
    const shallowComponent = shallow(<TypeSelection {...newProps} />);

    shallowComponent
      .find(ClickWrapper)
      .find(SelectionType)
      .prop("onClick")();
    expect(props.changeCurrentScreen).toHaveBeenCalledWith(5);
  });
});
