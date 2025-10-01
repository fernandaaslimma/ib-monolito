import React from "react";
import { shallow, mount } from "enzyme";
import SuitabilityForm from "./SuitabilityForm";
import RadioButton from "../../common/RadioButton";
import SingleChoiceListInput from "../../common/SingleChoiceListInput";

import {
  PERCENTAGE_COMPOSITION,
  SINGLE_CHOICE,
  SINGLE_CHOICE_LIST,
  SUITABILITY_NOTIFICATION_TYPE,
  TABLE_SINGLE_CHOICE
} from "../../../utils/constants";
import ExitConfirmation from "../../common/ExitConfirmation";
import Header from "../../common/Modal/Header";
import ContentBySteps from "../../common/ContentBySteps";

import createStore from "redux-zero";
import { Provider } from "redux-zero/react";
import CompositeInput from "../../common/CompositeInput";

const store = createStore();

jest.mock("../../../utils/token");
jest.mock("../../../services/login");
jest.mock("../../../utils/fetchHandler");
jest.mock("../../../utils/redirect");

const refreshTokenMock = require("../../../services/login").refreshToken;
const setAccessTokenMock = require("../../../utils/token").setAccessToken;
const setRefreshTokenMock = require("../../../utils/token").setRefreshToken;
const checkViewContextAndRedirectMock = require("../../../utils/fetchHandler")
  .checkViewContextAndRedirect;

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  isPtBR: () => false
}));

const answers = { mock1: "mock", mock2: "mock" };

const props = {
  suitabilityFormData: {
    id: 1,
    steps: [
      {
        step: 1,
        data: {
          title: "Qual é o número de seus dependentes financeiros?",
          options: [
            {
              id: 1,
              step: 1,
              value: "Um"
            },
            {
              id: 2,
              step: 2,
              value: "Dois"
            }
          ],
          id: 1,
          className: "SingleChoice"
        }
      },
      {
        step: 2,
        data: {
          title: "Qual é a composição atual de seu Patrimônio em %?",
          components: [
            {
              id: 1,
              step: 1,
              title:
                "Fundos de Investimento de Renda Fixa e Referenciado DI, Poupança, Títulos Públicos e Conta Corrente"
            },
            {
              id: 2,
              step: 2,
              title:
                "Fundos de Investimento de Renda Fixa Crédito Privado (incluindo FIDICs e Fundos de Crédito)"
            }
          ],
          id: 2,
          className: "PercentageComposition"
        }
      },
      {
        step: 3,
        data: {
          title:
            "Qual das composições de carteira abaixo você optaria por colocar seu dinheiro?",
          columns: [
            "Investimento de Risco Baixo",
            "Investimento de Risco Intermediário",
            "Investimento de Risco Elevado"
          ],
          options: [
            {
              id: 1,
              step: 1,
              value: ["100%", "0%", "0%"]
            },
            {
              id: 2,
              step: 2,
              value: ["70%", "20%", "10%"]
            }
          ],
          id: 3,
          className: "TableSingleChoice"
        }
      },
      {
        step: 4,
        data: {
          title:
            "Você possui experiência de investimento em algum dos ativos abaixo?",
          questions: [
            {
              step: 1,
              question: {
                title:
                  "Fundos de Investimento de Renda Fixa e Referenciado DI; Títulos Públicos, Poupança e Conta Corrente",
                options: [
                  {
                    id: 1,
                    step: 1,
                    value: "Não"
                  },
                  {
                    id: 2,
                    step: 2,
                    value: "Alguma"
                  }
                ],
                id: 1,
                className: "SingleChoice"
              }
            },
            {
              step: 2,
              question: {
                title:
                  "Fundos de Investimento de Renda Fixa Crédito Privado (incluindo FIDICs e Fundos de Crédito)",
                options: [
                  {
                    id: 1,
                    step: 1,
                    value: "Não"
                  },
                  {
                    id: 2,
                    step: 2,
                    value: "Alguma"
                  }
                ],
                id: 2,
                className: "SingleChoice"
              }
            }
          ],
          id: 4,
          className: "SingleChoiceList"
        }
      },
      {
        step: 5,
        data: {
          title: "Qual é o número de seus dependentes financeiros?",
          id: 1,
          className: "noChoice"
        }
      }
    ]
  },
  notification: [
    {
      type: SUITABILITY_NOTIFICATION_TYPE,
      parameters: {
        formId: 1
      }
    }
  ],
  onClickExit: jest.fn(),
  onClickClose: jest.fn(),
  suitabilityForm: {
    formId: 1
  },
  getSuitabilityFormData: jest.fn(),
  getSuitabilityFormId: jest.fn(() => Promise.resolve()),
  getSuitabilityResult: jest.fn(() => Promise.resolve()),
  closeModal: jest.fn(),
  setNotificationStatus: jest.fn(),
  openModal(config) {
    config.children();
  }
};

describe("SuitabilityForm component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<SuitabilityForm {...props} />)).toMatchSnapshot();
  });

  it("should call getSuitabilityFormId", () => {
    shallow(<SuitabilityForm {...props} />);
    expect(props.getSuitabilityFormId).toHaveBeenCalled();
  });

  it("should call getSuitabilityFormData", () => {
    shallow(<SuitabilityForm {...props} />);
    expect(props.getSuitabilityFormData).toHaveBeenCalledWith(1);
  });
});

// This is one big describe with a forEach loop to test all buildContent cases
describe("SuitabilityForm renderDinamicContent cases", () => {
  // Mount component with mocked store
  const component = mount(
    <Provider store={store}>
      <SuitabilityForm {...props} />
    </Provider>
  );
  // for each className, test the switch case
  props.suitabilityFormData.steps.forEach(index => {
    describe(`case ${index["data"].className}`, () => {
      it(`should render dynamic content`, () => {
        const spyRenderDinamicContent = jest.spyOn(
          component.find(SuitabilityForm).instance(),
          "renderDinamicContent"
        );

        component
          .find(ContentBySteps)
          .at(0)
          .renderProp("renderStepData")(index["data"], index["step"]);

        expect(spyRenderDinamicContent).toHaveBeenCalledWith(
          index["data"],
          index["step"]
        );
      });

      if (index["data"].className === SINGLE_CHOICE) {
        it(`should call onChange in RadioButton`, () => {
          const spyOnChange = jest.spyOn(
            component.find(SuitabilityForm).instance(),
            "onChange"
          );
          component
            .find(RadioButton)
            .at(index["step"])
            .prop("onChange")();

          expect(spyOnChange).toHaveBeenCalledWith(2, {
            $type:
              "SuitabilityForms.DTO.Answers.SingleChoiceAnswer, SuitabilityForms",
            className: "SingleChoiceAnswer",
            id: 1,
            stepId: "step_1"
          });
        });
      } else if (index["data"].className === TABLE_SINGLE_CHOICE) {
        it(`should call onChange in RadioButton`, () => {
          const spyOnChange = jest.spyOn(
            component.find(SuitabilityForm).instance(),
            "onChange"
          );
          component
            .find(RadioButton)
            .at(index["step"])
            .prop("onChange")();

          expect(spyOnChange).toHaveBeenCalledWith(2, {
            $type:
              "SuitabilityForms.DTO.Answers.TableSingleChoiceAnswer, SuitabilityForms",
            className: "TableSingleChoiceAnswer",
            id: 3,
            stepId: "step_3"
          });
        });
      } else if (index["data"].className === PERCENTAGE_COMPOSITION) {
        it(`should call changeComposite in CompositeInput`, () => {
          const spyChangeComposite = jest.spyOn(
            component.find(SuitabilityForm).instance(),
            "changeComposite"
          );

          component
            .find(CompositeInput)
            .at(0)
            .prop("changeComposite")(answers, true);

          expect(spyChangeComposite).toHaveBeenCalledWith(
            { mock1: "mock", mock2: "mock" },
            true,
            "step_2",
            2
          );
        });
        it(`should call changeFormModel in CompositeInput`, () => {
          const spyChangeFormModel = jest.spyOn(
            component.find(SuitabilityForm).instance(),
            "changeFormModel"
          );
          component
            .find(CompositeInput)
            .at(0)
            .prop("changeComposite")(answers, true);

          expect(spyChangeFormModel).toHaveBeenCalledWith({
            $type:
              "SuitabilityForms.DTO.Answers.PercentageCompositionAnswer, SuitabilityForms",
            className: "PercentageCompositionAnswer",
            components: { mock1: "mock", mock2: "mock" },
            questionId: 2
          });
        });
        it(`should call setState after changeFormModel`, () => {
          const spySetState = jest.spyOn(SuitabilityForm.prototype, "setState");
          component
            .find(CompositeInput)
            .at(0)
            .prop("changeComposite")(answers, true);

          expect(spySetState).toHaveBeenCalledWith({
            currentStep: 1,
            formModel: [
              {
                $type:
                  "SuitabilityForms.DTO.Answers.SingleChoiceAnswer, SuitabilityForms",
                className: "SingleChoiceAnswer",
                questionId: 1,
                selectedOptionId: 2
              },
              {
                $type:
                  "SuitabilityForms.DTO.Answers.PercentageCompositionAnswer, SuitabilityForms",
                className: "PercentageCompositionAnswer",
                components: { mock1: "mock", mock2: "mock" },
                questionId: 2
              }
            ],
            isExiting: false,
            loading: false
          });
        });
      } else if (index["data"].className === SINGLE_CHOICE_LIST) {
        it(`should call changeChoiceList in CompositeInput`, () => {
          const spyChangeChoiceList = jest.spyOn(
            component.find(SuitabilityForm).instance(),
            "changeChoiceList"
          );

          component
            .find(SingleChoiceListInput)
            .at(0)
            .prop("changeChoiceList")(false, answers);

          expect(spyChangeChoiceList).toHaveBeenCalledWith(
            false,
            { mock1: "mock", mock2: "mock" },
            4,
            "step_4"
          );
        });
        it(`should call changeFormModel in changeChoiceList`, () => {
          const spyChangeFormModel = jest.spyOn(
            component.find(SuitabilityForm).instance(),
            "changeFormModel"
          );
          component
            .find(SingleChoiceListInput)
            .at(0)
            .prop("changeChoiceList")(false, answers);

          expect(spyChangeFormModel).toHaveBeenCalledWith({
            $type:
              "SuitabilityForms.DTO.Answers.SingleChoiceListAnswer, SuitabilityForms",
            answers: { mock1: "mock", mock2: "mock" },
            className: "SingleChoiceListAnswer",
            questionId: 4
          });
        });
      }
    });
  });
});

describe("SuitabilityForm Form Model State", () => {
  it("should change an already input answer in form model state", () => {
    const state = {
      formModel: [
        {
          id: 50,
          value: "mock"
        }
      ]
    };

    const shallowComponent = shallow(<SuitabilityForm {...props} />);
    shallowComponent.setState(state);
    shallowComponent.update();

    const spyStateChange = jest.spyOn(shallowComponent.instance(), "setState");
    shallowComponent.instance().changeFormModel({ id: 50, value: "mock_2" });
    expect(spyStateChange).toBeCalledWith({
      currentStep: 1,
      formModel: [{ id: 50, value: "mock_2" }],
      isExiting: false,
      loading: true
    });
  });
});

describe("SuitabilityForm Exit Confirmation", () => {
  it("should have been clicked to close", () => {
    const shallowComponent = shallow(<SuitabilityForm {...props} />);
    shallowComponent.find(Header).prop("onClickClose")();

    expect(shallowComponent.state().isExiting).toBe(true);
  });

  it("should fire handle close when exit the confirmation exit modal", () => {
    const shallowComponent = shallow(<SuitabilityForm {...props} />);
    shallowComponent.setState({ isExiting: true });

    shallowComponent.find(ExitConfirmation).prop("onClickCancel")();
    expect(shallowComponent.state().isExiting).toBe(false);
  });
});

describe("SuitabilityForm Exit Confirmation", () => {
  const shallowComponent = shallow(<SuitabilityForm {...props} />);
  shallowComponent.setState({ isExiting: true });

  shallowComponent.find(ExitConfirmation).prop("onClickExit")();
});

describe("SuitabilityForm Open Suitability Result", () => {
  it("should render SuitabilityResult modal with props", () => {
    const instanceComponent = shallow(
      <SuitabilityForm {...props} />
    ).instance();

    instanceComponent.suitabilityNotification = {
      parameters: {
        formId: 1
      }
    };

    instanceComponent.openSuitabilityFormResult();
    expect(props.getSuitabilityResult).toHaveBeenCalled();

    props.getSuitabilityResult().then(() => {
      expect(props.closeModal).toHaveBeenCalled();
    });
  });

  describe("SuitabilityForm setRefreshToken", () => {
    let refreshSpy;

    beforeEach(() => {
      setAccessTokenMock.mockImplementation(() => {});
      setRefreshTokenMock.mockImplementation(() => {});
    });

    it("should set access and refresh tokens", () => {
      refreshSpy = jest.fn(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              access_token: "access",
              refresh_token: "refresh"
            })
        })
      );
      refreshTokenMock.mockImplementation(refreshSpy);

      const instanceComponent = shallow(
        <SuitabilityForm {...props} />
      ).instance();

      instanceComponent.onStepJump();

      refreshTokenMock().then(() => {
        expect(setAccessTokenMock).toHaveBeenCalled();
        expect(setRefreshTokenMock).toHaveBeenCalled();
      });
    });

    it("should checkViewContext and Redirect", () => {
      refreshSpy = jest.fn(() => Promise.reject());
      refreshTokenMock.mockImplementation(refreshSpy);
      checkViewContextAndRedirectMock.mockImplementation(jest.fn());

      const instanceComponent = shallow(
        <SuitabilityForm {...props} />
      ).instance();

      instanceComponent.onStepJump();

      refreshTokenMock().catch(() => {
        expect(checkViewContextAndRedirectMock).toHaveBeenCalled();
      });
    });
  });
});
