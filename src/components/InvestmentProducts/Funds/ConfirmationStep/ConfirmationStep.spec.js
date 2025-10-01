import React from "react";
import { shallow } from "enzyme";
import ConfirmationStep from "./ConfirmationStep";
import { Button, Icon } from "react-bocombbm-components";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import { ReadTerm } from "./styles";
import Checkbox from "../../../common/Checkbox/Checkbox";
import {
  TYPE_PRODUCT_FUNDS,
  TYPE_PRODUCT_FUNDS_UNSUITABLE
} from "../../../../utils/constants";
import HideableValue from "../../../common/HideableValue";

jest.mock("../../../../utils/openFile");

const API = {
  id: 1,
  name: "BAHIA AM MARAÚ FEEDER BOCOM BBM FIC MULTIMERCADO",
  cnpj: "29.733.842/0001-34",
  description: null,
  manager: "Bahia Asset Management",
  administrator: null,
  minimumBalance: 20000,
  minimumTransaction: 10000,
  initialInvestment: 20000,
  riskProfile: "Moderate",
  riskProfileLabel: "Moderado",
  returns: {
    twelveMonths: null,
    year: null,
    thirtySixMonths: null,
    fortyEightMonths: null,
    sinceInception: null
  },
  class: "Hedge Funds",
  classLabel: "Multimercado",
  subscription: {
    type: "Corrido",
    conversionDays: 20,
    settlementDays: 1
  },
  redemption: {
    type: "Corrido",
    conversionDays: 1,
    settlementDays: 0
  },
  benchmark: "CDI",
  quotaDate: "2020-12-21",
  administrationFee: 0.2,
  performanceFee: 0.2,
  inceptionDate: null,
  remunerationDetails: {
    autonomousAgent: null,
    distributor: {
      description: "Remuneração recebida pelo distribuidor: ",
      helpDescription:
        "De acordo coma norma xpto ... essas são as remunerações aferidas pelo distribuidor em caso de aplicação nese fundo",
      remunerations: [
        {
          description: "Perncentual da taxa de Administração: ",
          value: "10% ao ano",
          helpValueField: "Detalhes sobre como é feito o calculo da remuneração"
        },
        {
          description: "Perncentual da taxa de Perfomance: ",
          value: "10% ao ano",
          helpValueField: "Detalhes sobre como é feito o calculo da remuneração"
        }
      ]
    }
  }
};

const thisProps = {
  stepForward: jest.fn(),
  currentStep: 4,
  stepBack: jest.fn()
};

const props = {
  serverTime: jest.fn()
};

const termsToSign = {
  id: 145,
  productId: 1,
  idempotencyKey: "2b92510a-40e6-4a1e-9857-4741c5852e62",
  investmentValue: 40000.0,
  status: "AWAITING_APPROVAL",
  terms: [
    {
      name: "Term of adhesion BOCOM BBM CORPORATE CREDIT 60 FIC FIM CP",
      type: TYPE_PRODUCT_FUNDS,
      url:
        "https://api.bocombbm.com.br/productterms/fundos/adesao_37322143000120.pdf",
      id: 48
    },
    {
      name: "Non Compliance Term - Fixed Income",
      type: TYPE_PRODUCT_FUNDS_UNSUITABLE,
      url:
        "https://api.bocombbm.com.br/noncomplianceterms/fundos/desenquadramento_rf_mod.pdf",
      id: 250
    }
  ]
};

const termAdhesionToSign = {
  id: 145,
  productId: 1,
  idempotencyKey: "2b92510a-40e6-4a1e-9857-4741c5852e62",
  investmentValue: 40000.0,
  status: "AWAITING_APPROVAL",
  terms: [
    {
      name: "Term of adhesion BOCOM BBM CORPORATE CREDIT 60 FIC FIM CP",
      type: TYPE_PRODUCT_FUNDS,
      url:
        "https://api.bocombbm.com.br/productterms/fundos/adesao_37322143000120.pdf",
      id: 48
    }
  ]
};

const termNonComplianceToSign = {
  id: 145,
  productId: 1,
  idempotencyKey: "2b92510a-40e6-4a1e-9857-4741c5852e62",
  investmentValue: 40000.0,
  status: "AWAITING_APPROVAL",
  terms: [
    {
      name: "Non Compliance Term - Fixed Income",
      type: TYPE_PRODUCT_FUNDS_UNSUITABLE,
      url:
        "https://api.bocombbm.com.br/noncomplianceterms/fundos/desenquadramento_rf_mod.pdf",
      id: 250
    }
  ]
};

const context = {
  props,
  state: {
    selectedFund: API,
    selectedAccount: { accountNumber: "123456", availableBalance: 20000 },
    hasTerms: termsToSign,
    signed: true,
    investmentValue: "24,00"
  },
  createOperationFunction: jest.fn(),
  approveTerm: jest.fn(),
  downloadFile: jest.fn(),
  isMobile: jest.fn(),
  goToLinkRoute: jest.fn(),
  checkFundIsInMoviment: jest.fn()
};

const context2 = {
  props,
  state: {
    selectedFund: API,
    selectedAccount: { accountNumber: "123456", availableBalance: 20000 },
    hasTerms: termAdhesionToSign,
    signed: true,
    investmentValue: "24,00"
  },
  createOperationFunction: jest.fn(),
  approveTerm: jest.fn()
};

const context3 = {
  props,
  state: {
    selectedFund: API,
    selectedAccount: { accountNumber: "123456", availableBalance: 20000 },
    hasTerms: termNonComplianceToSign,
    signed: true,
    investmentValue: "24,00"
  },
  createOperationFunction: jest.fn(),
  approveTerm: jest.fn()
};

describe("ConfirmationStep component", () => {
  let setState, useStateSpy, useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementation(f => f());
  };
  beforeEach(() => {
    setState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(init => [init, setState]);
    React.useContext = jest.fn(() => context);

    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });

  it.skip("Should match snapshot", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    expect(component).toMatchSnapshot();
  });

  it.skip("Should match snapshot with screen 3", () => {
    const newProps = { ...thisProps, currentStep: 3 };
    const component = shallow(<ConfirmationStep {...newProps} />);
    expect(component).toMatchSnapshot();
  });

  it.skip("Should Change Value Visibility to false", () => {
    const component = shallow(
      <ConfirmationStep {...thisProps}>
        <HideableValue hide={true} />
      </ConfirmationStep>
    );

    component.find(Icon).simulate("click");

    expect(component).toMatchSnapshot();
  });

  it.skip("Should Change Value Visibility to true", () => {
    const component = shallow(
      <ConfirmationStep {...thisProps}>
        <HideableValue hide={false} />
      </ConfirmationStep>
    );

    component.find(Icon).simulate("click");

    expect(component).toMatchSnapshot();
  });

  it.skip("Should render component with one term to approve (adhesion)", () => {
    React.useContext = jest.fn(() => context2);

    const component = shallow(<ConfirmationStep {...thisProps} />);
    expect(component).toMatchSnapshot();
  });

  it.skip("Should render component with one term to approve (non compliance)", () => {
    React.useContext = jest.fn(() => context3);

    const component = shallow(<ConfirmationStep {...thisProps} />);
    expect(component).toMatchSnapshot();
  });

  it.skip("Should render modal", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    component
      .find(Button)
      .at(0)
      .simulate("click");
    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should click outside modal", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    component
      .find(AnimatedBottonSheet)
      .at(0)
      .prop("onClickInBack")();
    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should declare that has read term(s)", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    component
      .find(ReadTerm)
      .at(0)
      .simulate("click");
    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should declare that has read term(s)", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    component
      .find(ReadTerm)
      .at(1)
      .simulate("click");
    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should check Checkbox", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    component.find(Checkbox).prop("onChange")({ target: { checked: true } });
    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should go to checkFundIsInMoviment modal", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    component
      .find(Button)
      .at(1)
      .simulate("click");
    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should go to approve term func", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    component
      .find(Button)
      .at(2)
      .simulate("click");
    expect(context.approveTerm).toHaveBeenCalledWith(thisProps.goToStep);
  });

  it.skip("Should click outside modal 2", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    component
      .find(AnimatedBottonSheet)
      .at(1)
      .prop("onClickInBack")();
    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should close the modal", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    component
      .find(Button)
      .at(3)
      .simulate("click");
    expect(setState).toHaveBeenCalled();
  });

  it.skip("Should close the modal and go to createOperationFunction func", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    component
      .find(Button)
      .at(4)
      .simulate("click");
    expect(setState).toHaveBeenCalled();
    expect(context.createOperationFunction).toHaveBeenCalledWith(
      thisProps.goToStep
    );
  });

  it.skip("Should click outside modal 2", () => {
    const component = shallow(<ConfirmationStep {...thisProps} />);
    component
      .find(AnimatedBottonSheet)
      .at(1)
      .prop("onClickInBack")();
    expect(setState).toHaveBeenCalled();
  });
});
