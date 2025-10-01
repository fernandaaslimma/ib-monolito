import React from "react";
import { shallow } from "enzyme";
import Checkbox from "../../common/Checkbox";
import ApproveTermsModal from "./ApproveTermsModal";
import Header from "../../common/Modal/Header/Header";
import Button from "../../common/Button";

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  getDateFieldPlaceholderByLocale: () => "MM/DD/YYYY"
}));

let props = {
  notification: {
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
  checked: false,
  isExiting: false,
  renderExitConfirmation: jest.fn(),
  onClickClose: jest.fn(),
  handleChangeCheckbox: jest.fn(),
  acceptTerms: jest.fn(),
  viewTerms: jest.fn()
};

describe("test", () => {
  it("Should match snapshot", () => {
    expect(shallow(<ApproveTermsModal {...props} />)).toMatchSnapshot();
  });

  it("Should click close modal", () => {
    const newProps = {
      ...props
    };
    const component = shallow(<ApproveTermsModal {...newProps} />);

    component.find(Header).prop("onClickClose")();

    expect(props.onClickClose).toHaveBeenCalled();
  });

  it("Should click close modal", () => {
    const newProps = {
      ...props,
      isExiting: true
    };
    shallow(<ApproveTermsModal {...newProps} />);

    expect(props.renderExitConfirmation).toHaveBeenCalledWith(props.notification.parameters);
  });

  it("Should change checkbox", () => {
    const component = shallow(<ApproveTermsModal {...props} />);

    component
      .find(Checkbox)
      .at(0)
      .prop("onChange")({ target: { checked: true } });
    expect(props.handleChangeCheckbox).toHaveBeenCalled();
  });

  it("Should call viewTerms", () => {
    const component = shallow(<ApproveTermsModal {...props} />);

    component
      .find(Button)
      .at(0)
      .simulate("click");
    expect(props.viewTerms).toHaveBeenCalled();
  });

  it("Should call acceptTerm", () => {
    const component = shallow(<ApproveTermsModal {...props} />);

    component
      .find(Button)
      .at(1)
      .simulate("click");
    expect(props.acceptTerms).toHaveBeenCalledWith(props.notification.parameters, true);
  });

  it("Should call rejectTerm", () => {
    props.notification.displayMethod = "PopUpBlockingWithRejection";
    const component = shallow(<ApproveTermsModal {...props} />);

    component
      .find(Button)
      .at(2)
      .simulate("click");
    expect(props.acceptTerms).toHaveBeenCalledWith(props.notification.parameters, false);
  });
});
