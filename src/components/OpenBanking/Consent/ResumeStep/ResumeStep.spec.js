import React from "react";
import ResumeStep from "./ResumeStep";
import { OpenBankingConsentContext } from "../Consent";
import { configure, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

const context = {
  props: {
    consentInfo: {
      organisationName: "Mock Name",
      expirationDateTime: "2022-11-26T02:26:05Z",
      shareId: "61a045bf8b0d2f5b7cb69231",
      loggedUser: {
        document: {
          identification: "11021550205"
        }
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
  changeState: jest.fn(),
  isApplicant: jest.fn(),
  tagConf: {
    AWAITING_AUTHORISATION: ["#FFD46A", "#80521B", "Pendente"],
    REJECTED: ["#D9E0E4", "#244859", "Rejeitado"],
    AUTHORISED: ["#CCE9E1", "#004933", "Autorizado"]
  }
};

let props = {
  currentStep: 2,
  stepForward: jest.fn(),
  goToStep: jest.fn(),
  stepBack: jest.fn()
};

jest.mock("../../../common/Icon", () => {
  const iconMock = () => {
    const MockName = "mock-icon";
    return <MockName data-test="mock-icon" />;
  };
  return iconMock;
});

describe("ResumeStep", () => {
  it("should match snapshot", () => {
    expect(
      render(
        <OpenBankingConsentContext.Provider value={context}>
          <ResumeStep {...props} />
        </OpenBankingConsentContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("should show Icon when current step is different from 2", () => {
    props.currentStep = 1;
    render(
      <OpenBankingConsentContext.Provider value={context}>
        <ResumeStep {...props} />
      </OpenBankingConsentContext.Provider>
    );
    expect(screen.queryByTestId("mock-icon")).not.toBe(null);
  });

  describe("back and continue butons", () => {
    it("should click on back button", async () => {
      render(
        <OpenBankingConsentContext.Provider value={context}>
          <ResumeStep {...props} />
        </OpenBankingConsentContext.Provider>
      );
      expect(fireEvent.click(screen.getByTestId("backButton"))).toBe(true);
    });

    it("should click on consentConfirmButton button", async () => {
      render(
        <OpenBankingConsentContext.Provider value={context}>
          <ResumeStep {...props} />
        </OpenBankingConsentContext.Provider>
      );
      expect(fireEvent.click(screen.getByTestId("consentConfirmButton"))).toBe(
        true
      );
    });
  });
});
