import React from "react";
import { shallow } from "enzyme";
import GenericNotification from "./GenericNotification";

jest.mock("../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  getDateFieldPlaceholderByLocale: () => "MM/DD/YYYY"
}));

jest.mock("../../utils/redirect");
const redirectMock = require("../../utils/redirect").redirect;

const props = {
  notification: [
    {
      description:
        "Você tem um consentimento de compartilhamento de dados pendente de aprovação",
      title: "Open Banking - Consentimento Pendente",
      type: "navigateTo",
      displayMethod: "PopUp",
      id: "11043ff8-2530-4e7b-9191-d31d2cbc8370",
      parameters: [
        {
          type: "buttonLabel",
          value: "Seguir para autorização"
        },
        {
          type: "url",
          value:
            "/open-banking/consent?intent_id=urn:bocombbm:bb7b05b5-95ab-4ea7-aaff-52d6c2f549a4"
        }
      ]
    }
  ],
  openModal(config) {
    config.children();
  },
  notificated: {},
  closeModal: jest.fn(),
  setNotificationStatus: jest.fn()
};

describe("test", () => {
  it("Should match snapshot", () => {
    expect(shallow(<GenericNotification {...props} />)).toMatchSnapshot();
  });

  //   it("Should match snapshot without parameters", () => {
  //     const newProps = {
  //       ...props,
  //       notification: [
  //         {
  //           title: "Alteração dos termos e condições de uso",
  //           description:
  //             "Realizamos algumas mudanças nos itens de  Confidencialidade das informações dos usuários e Garantias, responsabilidades e danos dos termos e condições de Uso.",
  //           displayMethod: "PopUp",
  //           type: "navigatedTo",
  //           id: "111"
  //         }
  //       ]
  //     };
  //     const component = shallow(<GenericNotification {...newProps} />);
  //     const spy = jest.spyOn(component.instance(), "openModalApproveConsent");

  //     expect(spy).toHaveBeenCalled();
  //     // expect(props.setNotificationStatus).toHaveBeenCalledWith("111");
  //     // expect(redirectMock).toHaveBeenCalledWith("/home");
  //   });

  it("Should use notification from state", () => {
    const newProps = {
      ...props,
      notification: []
    };
    const component = shallow(<GenericNotification {...newProps} />);

    expect(component).toMatchSnapshot();
  });

  //TODO: This test needs to be updated later
  it("Should test navigatedTo", () => {
    const component = shallow(<GenericNotification {...props} />);

    component.instance().navigatedTo("url");

    expect(props.closeModal).toHaveBeenCalled();
    expect(redirectMock).toHaveBeenCalledWith("url");
    expect(props.setNotificationStatus).toHaveBeenCalledWith(
      "11043ff8-2530-4e7b-9191-d31d2cbc8370"
    );
  });

  it("Should test changeState", () => {
    const component = shallow(<GenericNotification {...props} />);
    const spy = jest.spyOn(component.instance(), "setState");

    component.instance().changeState({ test: 111 });

    expect(spy).toHaveBeenCalledWith({ test: 111 });
  });

  it("Should test handleClose", () => {
    const component = shallow(<GenericNotification {...props} />);

    component.instance().handleClose();

    expect(props.closeModal).toHaveBeenCalled();
  });

  it("Should change isExiting to true", () => {
    const component = shallow(<GenericNotification {...props} />);
    const spy = jest.spyOn(component.instance(), "setState");

    component.setState({
      isExiting: false
    });

    component.instance().onClickClose();

    expect(spy).toHaveBeenCalledWith({ isExiting: true });

    expect(component).toMatchSnapshot();
  });

  it("Should change isExiting to false", () => {
    const component = shallow(<GenericNotification {...props} />);
    const spy = jest.spyOn(component.instance(), "setState");

    component.setState({
      isExiting: true
    });

    component.instance().onClickClose();

    expect(spy).toHaveBeenCalledWith({ isExiting: false });

    expect(component).toMatchSnapshot();
  });
});
