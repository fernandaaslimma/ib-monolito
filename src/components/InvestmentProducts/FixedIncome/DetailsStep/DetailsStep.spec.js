import React from "react";
import { shallow } from "enzyme";
import DetailsStep from "./DetailsStep";
import { Button } from "react-bocombbm-components";
import { SUITABILITY_NOTIFICATION_TYPE } from "../../../../utils/constants";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
jest.mock("../../../../utils/redirect");
const redirectMock = require("../../../../utils/redirect").redirect;
redirectMock.mockImplementation(() => jest.fn());

const thisProps = {
  stepForward: jest.fn(),
  currentStep: 2,
  stepBack: jest.fn()
};

let context = {
  changeState: jest.fn(),
  verifyPendencies: jest.fn(),
  resetSubscriptionPendencie: jest.fn(),
  props: {
    availableDateRanges: [
      { maxEndTime: 1610060400000, minStartTime: 1610024400000 }
    ],
    getAuthFactors: jest.fn(),
    authFactors: [
      {
        id: "e80857d6-8f81-408d-84b8-90f49b302da7",
        defaultAuth: true,
        authUri: "pj_franciscogoncalez@bocombbm.com.br",
        type: "mail",
        actions: [],
        activated: true,
        plataformIdentifier: null,
        approved: true,
        isSelf: true
      },
      {
        id: "8c82c0e1-12c4-4ba2-b9b0-b3c012651234",
        defaultAuth: false,
        authUri: "mobile",
        type: "mobile",
        actions: ["wiretransfer", "passwordreset", "approvesuitability"],
        activated: true,
        plataformIdentifier: null,
        approved: true,
        isSelf: false
      }
    ],
    serverTime: 1625220000000
  },
  state: {
    selectedProduct: {
      id: 1,
      issuer: "Banco BOCOM BBM",
      issuerCnpj: "15.114.366/0002-40",
      riskProfile: "Conservative",
      riskProfileLabel: "Conservador",
      minimumSubscription: 1000,
      maximumSubscription: 500000,
      product: "LCA",
      productLabel: "LCA",
      yieldLabel: "102% DI",
      yieldIndex: "DI",
      yieldPercentual: 102,
      fixedRate: 0,
      liquidityDate: "2021-12-20",
      maturityDate: "2023-12-01",
      monthsToMaturity: 12,
      liquidityLabel: "Diária após 90 dias",
      incomeTaxLabel: "Isento de IR",
      monthsToMaturityLabel: "3 meses"
    },
    typeOfFundPendencie: "",
    route: "",
    isBottomSheetUpdate: false
  },
  colors: {
    moderado: "#E3F1D4",
    adressivo: "#E2DCF5",
    conservador: "#DAE6F2"
  }
};

describe("DetailsStep component", () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementation(f => f());
  };
  beforeEach(() => {
    React.useContext = jest.fn(() => context);
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
    redirectMock.mockImplementation(jest.fn());
  });
  it.skip("Should match snapshot", () => {
    const component = shallow(<DetailsStep {...thisProps} />);
    expect(component).toMatchSnapshot();
  });
  it.skip("Should match snapshot with suitability pendencie", () => {
    context.state.typeOfFundPendencie = SUITABILITY_NOTIFICATION_TYPE;
    React.useContext = jest.fn(() => context);
    const component = shallow(<DetailsStep {...thisProps} />);
    expect(component).toMatchSnapshot();
  });
  it.skip("Should match snapshot and current step equals to one", () => {
    const newProps = { ...thisProps, currentStep: 1 };
    context.state.clickedToContinue = true;
    expect(context.changeState).toHaveBeenCalledWith(
      "isBottomSheetUpdate",
      true
    );

    expect(shallow(<DetailsStep {...newProps} />)).toMatchSnapshot();
  });
  it.skip("Should match snapshot with clickedToContinue as true and have no auth factors", () => {
    context.state.clickedToContinue = true;
    React.useContext = jest.fn(() => context);
    const component = shallow(<DetailsStep {...thisProps} />);
    expect(context.changeState).toHaveBeenCalledWith(
      "isBottomSheetUpdate",
      true
    );
    expect(component).toMatchSnapshot();
  });
  it.skip("Should match snapshot with clickedToContinue as true and have auth factors", () => {
    context.state.clickedToContinue = true;
    context.props.authFactors[0].actions = ["approveinvestment"];

    React.useContext = jest.fn(() => context);
    const component = shallow(<DetailsStep {...thisProps} />);
    expect(context.changeState).toHaveBeenCalledWith(
      "isBottomSheetUpdate",
      true
    );
    expect(component).toMatchSnapshot();
  });
  it.skip("Should trigger stepBack", () => {
    const component = shallow(<DetailsStep {...thisProps} />);
    component
      .find(Button)
      .at(0)
      .simulate("click");
    expect(thisProps.stepBack).toMatchSnapshot();
  });
  it.skip("Should trigger stepForward", () => {
    const component = shallow(<DetailsStep {...thisProps} />);
    component
      .find(Button)
      .at(1)
      .simulate("click");
    expect(thisProps.stepForward).toMatchSnapshot();
  });

  it.skip("typeOfFundPendencie is suitability", () => {
    const component = shallow(<DetailsStep {...thisProps} />);
    component
      .find(Button)
      .at(1)
      .simulate("click");
    expect(thisProps.stepForward).toMatchSnapshot();
  });

  it.skip("shoud close bottomsheet and reset pendencies when click outside of modal", () => {
    const component = shallow(<DetailsStep {...thisProps} />);
    component
      .find(AnimatedBottonSheet)
      .at(0)
      .prop("onClickInBack")();
    expect(context.resetSubscriptionPendencie).toHaveBeenCalled();
  });
  it.skip("shoud close bottomsheet and reset pendencies when click button", () => {
    const component = shallow(<DetailsStep {...thisProps} />);
    component
      .find(Button)
      .at(2)
      .simulate("click");
    expect(context.resetSubscriptionPendencie).toHaveBeenCalled();
  });
  it.skip("shoud close bottomsheet and reset pendencies when click button", () => {
    const component = shallow(<DetailsStep {...thisProps} />);
    component
      .find(Button)
      .at(3)
      .simulate("click");
    expect(component).toMatchSnapshot();
  });
});
