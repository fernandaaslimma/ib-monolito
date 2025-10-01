import React from "react";
import { shallow } from "enzyme";
import ConfirmStep from "./ConfirmStep";
import Button from "react-bocombbm-components/dist/Button";

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

let context = {
  props: {
    shareResourcesPatchTpp: jest.fn(),
    rejectConsentReceived: jest.fn(),
    shareResourcesPatch: jest.fn(),
    aproveConsent: jest.fn(),
    userInfo: {
      tenants: ["Individual"]
    },
    openBankingReceivedInfo: {
      redirect_uri: "mock uri"
    },
    specificOrganization: [
      {
        CustomerFriendlyLogoUri: "Mock url"
      }
    ]
  },
  state: {
    newConsentCreated: {
      organisationName: "Mock Name",
      expirationDateTime: "2022-11-26T02:26:05Z",
      shareId: "61a045bf8b0d2f5b7cb69231",
      loggedUser: {
        document: {
          identification: "11021550205"
        }
      },
      authorisationServer: {
        customerFriendlyLogoUri: "http://localhost/logo.svg"
      },
      finality: {
        displayName: "MOTIVO DE CREDITO"
      },
      status: "ACTIVE",
      approvers: [
        {
          approverId: "11021550205",
          status: "AWAITING_AUTHORISATION"
        },
        {
          approverId: "11021550205@11021550205@11021550205",
          status: "AWAITING_AUTHORISATION"
        }
      ]
    },
    payloadToNewConsent: {
      dataPermissions: [
        {
          permissionCode: "CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ",
          displayName: "Identificação da pessoa natural"
        },
        {
          permissionCode: "CUSTOMERS_PERSONAL_ADITTIONALINFO_READ",
          displayName: "Qualificação / Relações da pessoa natural"
        }
      ],
      deadLine: {
        total: 6,
        type: "MONTHS"
      },
      redirectUri: "http://localhost/home"
    },
    loadingApi: false,
    clientResources: [
      {
        resourceId: "mock id",
        type: "mock type",
        status: true
      },
      {
        resourceId: "mock id",
        type: "mock type",
        status: true
      },
      {
        resourceId: "mock id",
        type: "mock type",
        status: true
      }
    ]
  },
  changeState: jest.fn()
};

const props = {
  currentStep: 6,
  stepForward: jest.fn(),
  goToStep: jest.fn(),
  stepBack: jest.fn()
};

describe("ConfirmStep", () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };
  beforeEach(() => {
    React.useContext = jest.fn(() => context);
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });
  it.skip("should match snapshot", () => {
    expect(shallow(<ConfirmStep {...props} />)).toMatchSnapshot();
  });

  it.skip("should click  option approve conset", async () => {
    const component = shallow(<ConfirmStep {...props} />);
    component
      .find(Button)
      .at(1)
      .simulate("click");
    await Promise.resolve();
    expect(context.changeState).toHaveBeenCalled();
    expect(context.props.shareResourcesPatchTpp).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalled();
  });

  it.skip("should click  back button and go to step", () => {
    const component = shallow(<ConfirmStep {...props} />);
    component
      .find(Button)
      .at(0)
      .simulate("click");
    expect(props.goToStep).toHaveBeenCalled();
  });
});
