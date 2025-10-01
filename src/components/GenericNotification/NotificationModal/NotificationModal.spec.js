import React from "react";
import { shallow } from "enzyme";
import NotificationModal from "./NotificationModal";
import Header from "../../common/Modal/Header/Header";
import { Button } from "react-bocombbm-components";
import ExitConfirmation from "../../common/ExitConfirmation";

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  getDateFieldPlaceholderByLocale: () => "MM/DD/YYYY"
}));

const props = {
  notification: {
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
  },
  isExiting: false,
  renderExitConfirmation: jest.fn(),
  onClickClose: jest.fn(),
  navigatedTo: jest.fn(),
  changeState: jest.fn(),
  handleClose: jest.fn()
};

describe("test", () => {
  it("Should match snapshot", () => {
    expect(shallow(<NotificationModal {...props} />)).toMatchSnapshot();
  });

  //   it("Should click close modal", () => {
  //     const newProps = {
  //       ...props
  //     };
  //     const component = shallow(<NotificationModal {...newProps} />);

  //     component.find(Header).prop("onClickClose")();

  //     expect(props.onClickClose).toHaveBeenCalled();
  //   });

  it("Should click close modal", () => {
    const component = shallow(<NotificationModal {...props} />);

    component.find(Header).prop("onClickClose")();

    expect(props.onClickClose).toHaveBeenCalled();
  });

  it("Should render ExitConfirmation and exit", () => {
    const newProps = {
      ...props,
      isExiting: true
    };
    const component = shallow(<NotificationModal {...newProps} />);

    component.find(ExitConfirmation).prop("onClickExit")();

    expect(props.handleClose).toHaveBeenCalled();
  });

  it("Should render ExitConfirmation and cancel", () => {
    const newProps = {
      ...props,
      isExiting: true
    };
    const component = shallow(<NotificationModal {...newProps} />);

    component.find(ExitConfirmation).prop("onClickCancel")();

    expect(props.changeState).toHaveBeenCalledWith({ isExiting: false });
  });

  it("Should click to go to url", () => {
    const component = shallow(<NotificationModal {...props} />);

    component.find(Button).simulate("click");

    expect(props.navigatedTo).toHaveBeenCalledWith(
      "/open-banking/consent?intent_id=urn:bocombbm:bb7b05b5-95ab-4ea7-aaff-52d6c2f549a4"
    );
  });
});
