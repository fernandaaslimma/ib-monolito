import React from "react";
import { shallow } from "enzyme";
import RedirectStep from "./RedirectStep";
import store from "../../../../utils/store";
import { act } from "react-dom/test-utils";
import { OpenBankingConsentContext } from "../Consent";

jest.mock("../../../../utils/store", () => ({
  setState: jest.fn()
}));

const context = {
  props: {
    setIsApproveConsent: false,
    cancelResponse: { url: "mock" },
    approveConsentResponse: { url: "mock" },
    cancelConsentResponse: null,
    consentInfo: {
      organisationName: "Mock name"
    },
    specificOrganization: [
      {
        CustomerFriendlyLogoUri: "Mock url"
      }
    ]
  },
  state: {
    cancelFlow: false
  }
};

const props = {
  currentStep: 3,
  stepForward: jest.fn(),
  goToStep: jest.fn()
};

describe("RedirectStep", () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };
  beforeEach(() => {
    jest.useFakeTimers();
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });
  it.skip("should match snapshot and redirect after approve consent", () => {
    const component = shallow(
      <OpenBankingConsentContext.Provider value={context}>
        <RedirectStep {...props} />
      </OpenBankingConsentContext.Provider>
    );
    expect(component).toMatchSnapshot();
    act(() => {
      jest.runOnlyPendingTimers();
    });
    component.update();
    expect(store.setState).toHaveBeenCalled();
  });

  it.skip("should match snapshot and redirect after cancel consent", () => {
    context.props.cancelConsentResponse = { url: "mock" };
    context.props.approveConsentResponse = null;
    const component = shallow(
      <OpenBankingConsentContext.Provider value={context}>
        <RedirectStep {...props} />
      </OpenBankingConsentContext.Provider>
    );
    expect(component).toMatchSnapshot();
    act(() => {
      jest.runOnlyPendingTimers();
    });
    component.update();
    expect(store.setState).toHaveBeenCalled();
  });

  it("should match snapshot with generic informations", () => {
    context.props.consentInfo = null;
    context.props.specificOrganization = null;

    const component = shallow(
      <OpenBankingConsentContext.Provider value={context}>
        <RedirectStep {...props} />
      </OpenBankingConsentContext.Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
