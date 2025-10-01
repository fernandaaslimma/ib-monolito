import React from "react";
import { act } from "react-dom/test-utils";
import { shallow } from "enzyme";
import NewConsentStep from "./NewConsentStep";
import { AccountBalance, TitleAccounts, LinkDetails } from "./styles";

let context = {
  state: {
    selectAccountOriginBottomSheet: false,
    selectedInstitutionBottonSheet: false,
    selectSpecificInstitutionNames: false,
    loadingNewConsentSte: false,
    finalInstitutions: [
      {
        OrganisationId: "f7817b3c-c319-575f-8896-727c1b12cfda",
        AuthorisationServerId: "8da36d54-f4ea-4814-ac9a-f08dd2e1f03e",
        CustomerFriendlyLogoUri:
          "https://investimentos.bb.com.br/recursos/images/Investimentos_logo.svg",
        CustomerFriendlyName: "Carteira BB - HM"
      },
      {
        OrganisationId: "9415f224-9f58-56b5-af4c-085b4438e4eb",
        AuthorisationServerId: "8da36d54-f4ea-4814-ac9a-f08dd2e1f03e",
        CustomerFriendlyLogoUri:
          "https://investimentos.bb.com.br/recursos/images/Investimentos_logo.svg",
        CustomerFriendlyName: "Carteira BB - HM"
      }
    ],
    selectedObjective: {
      displayName: "",
      finalityId: ""
    },
    selectFinalCNPJ: "",
    selectedInstitution: {
      CustomerFriendlyLogoUri: "url logo",
      CustomerFriendlyName: "name"
    }
  },
  props: {
    institutions: [
      {
        OrganisationId: "f7817b3c-c319-575f-8896-727c1b12cfda",
        AuthorisationServerId: "8da36d54-f4ea-4814-ac9a-f08dd2e1f03e",
        CustomerFriendlyLogoUri:
          "https://investimentos.bb.com.br/recursos/images/Investimentos_logo.svg",
        CustomerFriendlyName: "Carteira BB - HM"
      },
      {
        OrganisationId: "9415f224-9f58-56b5-af4c-085b4438e4eb",
        AuthorisationServerId: "8da36d54-f4ea-4814-ac9a-f08dd2e1f03e",
        CustomerFriendlyLogoUri:
          "https://investimentos.bb.com.br/recursos/images/Investimentos_logo.svg",
        CustomerFriendlyName: "Carteira BB - HM"
      },
      {
        OrganisationId: "f7817b3c-c319-575f-8896-727c1b12cfda",
        AuthorisationServerId: "8da36d54-f4ea-4814-ac9a-f08dd2e1f03e",
        CustomerFriendlyLogoUri:
          "https://investimentos.bb.com.br/recursos/images/Investimentos_logo.svg",
        CustomerFriendlyName: "Carteira BB - HM"
      },
      {
        OrganisationId: "9415f224-9f58-56b5-af4c-085b4438e4eb",
        AuthorisationServerId: "8da36d54-f4ea-4814-ac9a-f08dd2e1f03e",
        CustomerFriendlyLogoUri:
          "https://investimentos.bb.com.br/recursos/images/Investimentos_logo.svg",
        CustomerFriendlyName: "Carteira BB - HM"
      }
    ],
    specificOrganization: [
      {
        CustomerFriendlyName: "Banco do Brasil"
      },
      {
        CustomerFriendlyName: "Investimentos BB - HM"
      },
      {
        CustomerFriendlyName: "Carteira BB - HM"
      }
    ],
    userInfo: {
      tenants: ["Corporation"],
      document: "3657938596",
      tenantsMembers: [{ document: "algum cnpj" }, { document: " outro" }]
    }
  },
  changeState: jest.fn(),
  getInstituion: jest.fn(),
  createShare: jest.fn()
};

const props = {
  stepForward: jest.fn()
};

describe("NewConsentStep", () => {
  let useEffect, setState, useStateSpy;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };
  beforeEach(() => {
    jest.useFakeTimers();

    setState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(init => [init, setState]);

    React.useContext = jest.fn(() => context);
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });
  it.skip("should match snapshot", () => {
    expect(shallow(<NewConsentStep {...props} />)).toMatchSnapshot();
  });

  it("should view institution", () => {
    const component = shallow(<NewConsentStep {...props} />);
    component
      .find(AccountBalance)
      .at(1)
      .simulate("click");
    expect(context.changeState).toHaveBeenCalled();
  });

  it("should view institution info", () => {
    const component = shallow(<NewConsentStep {...props} />);
    act(() => {
      jest.runOnlyPendingTimers();
    });
    component.update();
    component
      .find(LinkDetails)
      .at(0)
      .simulate("click");
    expect(context.getInstituion).toHaveBeenCalled();
    expect(context.changeState).toHaveBeenCalled();
  });

  it("should match snapshot institution info and back to chose intitutions", () => {
    context.state.selectSpecificInstitutionNames = true;
    React.useContext = jest.fn(() => context);
    const component = shallow(<NewConsentStep {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("should select institution", () => {
    const component = shallow(<NewConsentStep {...props} />);
    act(() => {
      jest.runOnlyPendingTimers();
    });
    component.update();
    component
      .find(TitleAccounts)
      .at(0)
      .simulate("click");
    expect(context.changeState).toHaveBeenCalled();
  });
  it("should select institution", () => {
    const component = shallow(<NewConsentStep {...props} />);
    act(() => {
      jest.runOnlyPendingTimers();
    });
    component.update();
    component
      .find(TitleAccounts)
      .at(0)
      .simulate("click");
    expect(context.changeState).toHaveBeenCalled();
  });
});
