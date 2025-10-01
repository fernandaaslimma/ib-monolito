import React from "react";
import { shallow } from "enzyme";
import ApproveNewTerms from "./ApproveNewTerms";

jest.mock("../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  getDateFieldPlaceholderByLocale: () => "MM/DD/YYYY"
}));

jest.mock("../../utils/redirect");
const redirectMock = require("../../utils/redirect").redirect;

const termsInfo = [
  {
    type: "url",
    url:
      "https://bocombbm.blob.core.windows.net/termos-de-produto/Termo de Adesão - Internet Banking.pdf"
  },
  {
    type: "termId",
    id: 12314
  }
];

const toastMessageReturn = (textMessage) => (
  {
    text: textMessage,
    isBelow: false,
    isTop: true,
    timeout: 3000
  }
)

let props = {
  notification: [
    {
      title: "Alteração dos termos e condições de uso",
      description:
        "Realizamos algumas mudanças nos itens de  Confidencialidade das informações dos usuários e Garantias, responsabilidades e danos dos termos e condições de Uso.",
      displayMethod: "PopUp",
      type: "ApproveTerms",
      parameters: [
        {
          type: "url",
          url:
            "https://bocombbm.blob.core.windows.net/termos-de-produto/Termo de Adesão - Internet Banking.pdf"
        },
        {
          type: "termId",
          id: 12314
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
  notificatedId: 12314,
  openModal(config) {
    config.children();
  },
  closeModal: jest.fn(),
  openToastr: jest.fn(),
  closeToastr: jest.fn(),
  setNotificationStatus: jest.fn(),
  approveNewTerms: jest.fn(),
  enableToastrTimeout: jest.fn(),
  cancelToastrTimeout: jest.fn()
};

describe("test", () => {
  it("Should match snapshot", () => {
    expect(shallow(<ApproveNewTerms {...props} />)).toMatchSnapshot();
  });

  it("Should match snapshot without parameters", () => {
    const newProps = {
      ...props,
      notification: [
        {
          title: "Alteração dos termos e condições de uso",
          description:
            "Realizamos algumas mudanças nos itens de  Confidencialidade das informações dos usuários e Garantias, responsabilidades e danos dos termos e condições de Uso.",
          displayMethod: "PopUp",
          type: "ApproveTerms"
        }
      ]
    };
    expect(shallow(<ApproveNewTerms {...newProps} />)).toMatchSnapshot();
  });

  it("Should use notification from state", () => {
    const newProps = {
      ...props,
      notification: []
    };
    const component = shallow(<ApproveNewTerms {...newProps} />);

    expect(component).toMatchSnapshot();
  });

  //TODO: This test needs to be updated later
  it("Should test exit", () => {
    const component = shallow(<ApproveNewTerms {...props} />);

    component.instance().renderExitConfirmation();

    expect(component).toMatchSnapshot();
  });

  it("Should test handleClose", () => {
    const component = shallow(<ApproveNewTerms {...props} />);

    component.instance().handleClose(termsInfo);

    expect(props.closeModal).toHaveBeenCalled();
    expect(props.setNotificationStatus).toHaveBeenCalledWith(`ApproveTerms${termsInfo?.find(element => element?.type === "termId")?.id}`);
  });

  it("Should accept terms", async () => {
    const component = shallow(<ApproveNewTerms {...props} />);

    await component.instance().acceptTerms(termsInfo, true);

    expect(props.approveNewTerms).toHaveBeenCalledWith({
      accepted: true,
      termId: 12314
    });
    expect(props.closeModal).toHaveBeenCalled();
    expect(props.setNotificationStatus).toHaveBeenCalledWith(`ApproveTerms${termsInfo?.find(element => element?.type === "termId")?.id}`);
    expect(props.openToastr).toHaveBeenCalledWith(toastMessageReturn("TOASTR_ACCEPTED_NEW_TERMS"));
    expect(redirectMock).toHaveBeenCalledWith("/home");
  });

  it("Should reject terms", async () => {
    const component = shallow(<ApproveNewTerms {...props} />);

    await component.instance().acceptTerms(termsInfo, false);

    expect(props.approveNewTerms).toHaveBeenCalledWith({
      accepted: false,
      termId: 12314
    });
    expect(props.closeModal).toHaveBeenCalled();
    expect(props.setNotificationStatus).toHaveBeenCalledWith(`ApproveTerms${termsInfo?.find(element => element?.type === "termId")?.id}`);
    expect(props.openToastr).toHaveBeenCalledWith(toastMessageReturn("TOASTR_REJECT_NEW_TERMS"));
    expect(redirectMock).toHaveBeenCalledWith("/home");
  });

  //TODO: This test needs to be updated later
  it("Should select the Checkbox as checked", () => {
    const component = shallow(<ApproveNewTerms {...props} />);

    const spy = jest.spyOn(component.instance(), "setState");
    component.instance().handleChangeCheckbox({ target: { checked: true } });

    expect(spy).toHaveBeenCalledWith({ checked: true });

    expect(component).toMatchSnapshot();
  });

  it("Should select the Checkbox as checked", () => {
    const newProps = {
      ...props,
      checked: true
    };
    const component = shallow(<ApproveNewTerms {...newProps} />);
    const spy = jest.spyOn(component.instance(), "setState");

    component.instance().handleChangeCheckbox({ target: { checked: false } });

    expect(spy).toHaveBeenCalledWith({ checked: false });

    expect(component).toMatchSnapshot();
  });

  //TODO: This test needs to be updated later
  it("Should trigger viewTerms", () => {
    const component = shallow(<ApproveNewTerms {...props} />);

    component.instance().viewTerms();

    expect(component).toMatchSnapshot();
  });

  it("Should change isExiting to true", () => {
    const component = shallow(<ApproveNewTerms {...props} />);
    const spy = jest.spyOn(component.instance(), "setState");

    component.setState({
      isExiting: false
    });

    component.instance().onClickClose();

    expect(props.closeToastr).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith({ isExiting: true });

    expect(component).toMatchSnapshot();
  });

  it("Should change isExiting to false", () => {
    const component = shallow(<ApproveNewTerms {...props} />);
    const spy = jest.spyOn(component.instance(), "setState");

    component.setState({
      isExiting: true
    });

    component.instance().onClickClose();

    expect(spy).toHaveBeenCalledWith({ isExiting: false });

    expect(component).toMatchSnapshot();
  });
});
