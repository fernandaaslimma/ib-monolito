import React from "react";
import { shallow } from "enzyme";
import { render, screen, fireEvent, configure } from "@testing-library/react";
import ChangeSharingStep from "./ChangeSharingStep";
import * as domUtils from "../../../../utils/dom";
configure({ testIdAttribute: "data-test" });

let context = {
  state: {
    loadingApi: false,
    selectDeadLineBottomSheet: false,
    selectAccountOriginBottomSheet: false,
    selectDataBottomSheet: false,
    loadingChangeStep: false,
    allStatusResource: [
      { type: "RESOURCE", status: false },
      { type: "LOAN", status: false }
    ],
    selectedDeadLine: {
      total: 6,
      type: "MONTHS",
      expirationDateTime: "2022-06-12T20:17:08.756222Z"
    },
    finalDataPermisson: [
      {
        permissionCode: "mock code",
        displayName: "mock name",
        detail: "detail code",
        type: "TYPE CODE",
        required: true,
        status: true
      },
      {
        permissionCode: "mock code",
        displayName: "mock name",
        detail: "detail code",
        type: "TYPE CODE",
        required: false,
        status: true
      },
      {
        permissionCode: "mock code",
        displayName: "mock name",
        detail: "detail code",
        type: "TYPE CODE",
        required: false,
        status: false
      }
    ],
    consentCreated: {
      shareId: "61b658cd03ff1c038c9a07ce",
      loggedUser: {
        document: {
          identification: "11021550205",
          rel: "CPF"
        }
      }
    },
    finalOptionalData: [
      {
        displayName: "teste",
        type: "testeType",
        dataPermissions: [
          {
            permissionCode: "mock code",
            displayName: "mock name",
            detail: "detail code",
            type: "TYPE CODE",
            required: true,
            status: true
          }
        ]
      },
      {
        displayName: "teste",
        type: "TYPE CODE",
        dataPermissions: [
          {
            permissionCode: "mock code",
            displayName: "mock name",
            detail: "detail code",
            type: "TYPE CODE",
            required: true,
            status: true
          }
        ]
      }
    ],
    consentLogo: "mock url",
    consentName: "mock name",
    selectShareOld: {
      additionalInfos: [],
      approvers: null,
      authorisationServer: {
        organisationId: "4a7250ec-eac5-5d8f-b7eb-dc0e8e880203",
        payloadSigningCertLocationUri:
          "https://auth-sandbox.hom.bocombbm.com.br/jans-auth/jwks",
        openIDDiscoveryDocument:
          "https://auth-sandbox.hom.bocombbm.com.br/jans-auth/.well-known/openid-configuration"
      },
      businessEntity: {},
      consentId: "urn:bocombbm:fde1028d-4ebd-4a71-b092-923d1ad55147",
      createDateTime: "2022-01-06T20:30:51.281Z",
      deadlines: [],
      expirationDateTime: "2023-01-06T20:30:56.383Z",
      lastStatusUpdate: "2022-01-06T20:32:09.519Z",
      loggedUser: {},
      organisationId: null,
      organisationName: null,
      resourceGroups: [],
      shareId: "61d7517c96ea2143bb855417",
      shareType: "RECEIVING",
      status: "ACTIVE"
    },
    newConsentCreated: null,
    finalRequiredData: []
  },
  changeState: jest.fn()
};

let props = {
  currentStep: 5,
  stepForward: jest.fn(),
  goToStep: jest.fn()
};

describe("ChangeSharingStep", () => {
  beforeEach(() => {
    React.useContext = jest.fn(() => context);
  });

  it.skip("should match snapshot", () => {
    expect(shallow(<ChangeSharingStep {...props} />)).toMatchSnapshot();
  });

  it.skip("should match snapshot with status active", () => {
    context.state.selectShareOld.status = "ACTIVE";
    React.useContext = jest.fn(() => context);
    expect(shallow(<ChangeSharingStep {...props} />)).toMatchSnapshot();
  });

  describe("back and continue butons", () => {
    it.skip("should click on back button", async () => {
      render(<ChangeSharingStep {...props} />);
      fireEvent.click(screen.getByTestId("backNewConsentButton"));
    });

    it.skip("should click on continue button", async () => {
      render(<ChangeSharingStep {...props} />);
      fireEvent.click(screen.getByTestId("continueNewConsentButton"));
    });
  });

  describe("useEffect", () => {
    it("should not scroll to top when currentStep is not 5", () => {
      const scrollToTopSpy = jest.spyOn(domUtils, "scrollToTop");
      shallow(<ChangeSharingStep {...props} currentStep={3} />);
      expect(scrollToTopSpy).not.toHaveBeenCalled();
    });
  });
});
