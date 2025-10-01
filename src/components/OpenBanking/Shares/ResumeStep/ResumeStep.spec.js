import React from "react";
import { shallow } from "enzyme";
import ResumeStep from "./ResumeStep";
import { AccountBalance } from "./styles";
import { Button } from "react-bocombbm-components";

let context = {
  state: {
    selectedBank: {
      approvers: [
        {
          approverId: "11021550205",
          status: "AWAITING_AUTHORISATION"
        },
        {
          approverId: "11021550205@11021550205@11021550205",
          status: "AWAITING_AUTHORISATION"
        }
      ],
      status: "ACTIVE",
      resourceGroups: [
        {
          dataPermissions: [
            {
              detail: "Financiamentos",
              displayName: "Financiamentos",
              permissionCode: "FINANCINGS_READ"
            }
          ],
          displayName: "Operações de Crédito - Financiamentos",
          resources: [
            {
              displayName: "Microcrédito produtivo orientado"
            },
            {
              displayName: "Microcrédito produtivo orientado"
            },
            {
              displayName: "Microcrédito produtivo orientado"
            }
          ]
        },
        {
          dataPermissions: [
            {
              detail: "Financiamentos",
              displayName: "Financiamentos",
              permissionCode: "FINANCINGS_READ"
            }
          ],
          displayName: "Operações de Crédito - Financiamentos",
          resources: [
            {
              displayName: "Microcrédito produtivo orientado"
            }
          ]
        },
        {
          dataPermissions: [
            {
              detail: "Financiamentos",
              displayName: "Financiamentos",
              permissionCode: "FINANCINGS_READ"
            }
          ],
          displayName: "Operações de Crédito - Financiamentos"
        }
      ]
    },
    selectAccountOriginBottomSheet: false
  },
  changeState: jest.fn(),
  corporationConsentStatus: jest.fn()
};

const props = {
  currentStep: 3,
  stepBack: jest.fn()
};

describe("Resumestep", () => {
  beforeEach(() => {
    React.useContext = jest.fn(() => context);
  });

  it("should match snapshot", () => {
    expect(shallow(<ResumeStep {...props} />)).toMatchSnapshot();
  });

  it("should view resources", () => {
    const component = shallow(<ResumeStep {...props} />);
    component
      .find(AccountBalance)
      .at(0)
      .simulate("click");
    expect(context.changeState).toHaveBeenCalled();
  });

  it("should match snapshot with pending approver pj", () => {
    context.state.selectedBank.status = "PENDING";
    React.useContext = jest.fn(() => context);
    expect(shallow(<ResumeStep {...props} />)).toMatchSnapshot();
  });

  it("should back to details consent", () => {
    const component = shallow(<ResumeStep {...props} />);
    component
      .find(Button)
      .at(0)
      .simulate("click");
    expect(props.stepBack).toHaveBeenCalled();
  });
});
