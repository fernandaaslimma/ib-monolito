import React from "react";
import { shallow } from "enzyme";
import ConfirmationStep from "./ConfirmationStep";
import { Button } from "react-bocombbm-components";

delete window.location;

window.location = {
  assign: jest.fn()
};

let context = {
  props: {
    confirmConsentResponse: {
      finality: {
        displayName: "mock name"
      },
      authorisationServer: {
        customerFriendlyName: "mock name"
      },
      consentId: "12412414124124",
      deadLines: {
        expirationDateTime: "2022-06-21T15:11:12.47971Z"
      },
      expirationDateTime: "2022-06-21T15:11:12.47971Z",
      loggedUser: {
        document: {
          identification: "12345667859"
        }
      },
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
              detail: "contas e etc",
              displayName: "Contas",
              permissionCode: "ACCOUNTS_READ"
            }
          ],
          displayName: "Contas"
        }
      ]
    },
    isConsentFlowCancel: false,
    sharesList: false,
    isConsentFlow: true,
    userInfo: {
      document: "12345667859",
      tenants: ["Corporation"]
    },
    url: "mock url"
  },
  state: {
    selectAccountOriginBottomSheet: false,
    selectBottonSheetForbidden: false
  },
  corporationConsentStatus: jest.fn(() => {
    return { status: "ACTIVE" };
  }),
  changeState: jest.fn(),
  consolidatedConsent: jest.fn()
};

const props = {
  currentStep: 1
};

describe("ConfirmationStep", () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementation(f => f());
  };
  beforeEach(() => {
    jest.useFakeTimers();

    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();

    React.useContext = jest.fn(() => context);
  });

  it("should match snapshot", () => {
    const component = shallow(<ConfirmationStep {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("should redirect new consent page", () => {
    const component = shallow(<ConfirmationStep {...props} />);
    component
      .find(Button)
      .at(0)
      .simulate("click");
    expect(window.location.assign).toHaveBeenCalledWith(
      "/open-banking/new-consent"
    );
  });

  it("should redirect to home", () => {
    const component = shallow(<ConfirmationStep {...props} />);
    component
      .find(Button)
      .at(1)
      .simulate("click");
    expect(window.location.assign).toHaveBeenLastCalledWith("/home");
  });

  it("should match snapshot with loading true", () => {
    context.props.userInfo.document = "41241241241";
    React.useContext = jest.fn(() => context);
    const component = shallow(<ConfirmationStep {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("should match snapshot with user pj", () => {
    context.props.confirmConsentResponse.status = "PENDING";
    React.useContext = jest.fn(() => context);
    const component = shallow(<ConfirmationStep {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should match snapshot with ccancel flow", () => {
    context.props.isConsentFlowCancel = true;
    React.useContext = jest.fn(() => context);
    const component = shallow(<ConfirmationStep {...props} />);
    expect(component).toMatchSnapshot();
  });
});
