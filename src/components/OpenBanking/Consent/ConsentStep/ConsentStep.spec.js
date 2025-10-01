import React from "react";
import { render, screen, configure, fireEvent } from "@testing-library/react";
import ConsentStep from "./ConsentStep";
configure({ testIdAttribute: "data-test" });

let context = {
  props: {
    consentInfo: {
      status: "mock",
      organisationName: "mock-organisationName",
      resourceGroups: [
        {
          additionalInfos: [
            {
              key: "INTERNAL_ID",
              value: "1"
            }
          ],
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
          additionalInfos: [
            {
              key: "INTERNAL_ID",
              value: "1"
            }
          ],
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
          additionalInfos: [
            {
              key: "INTERNAL_ID",
              value: "1"
            }
          ],
          dataPermissions: [
            {
              detail: "Financiamentos",
              displayName: "Financiamentos",
              permissionCode: "FINANCINGS_READ"
            }
          ],
          displayName: "Operações de Crédito - Financiamentos"
        }
      ],
      loggedUser: {
        document: {
          identification: "mock-identification"
        }
      }
    },
    userInfo: {
      document: "12345667859",
      tenants: ["Corporation"]
    }
  },
  doLogout: jest.fn(),
  cancelConsent: jest.fn(),
  showNavigationMenu: jest.fn(),
  isConsentFlow: false,
  sharesList: false,
  specificOrganization: [{ CustomerFriendlyLogoUri: "mock-uri" }],
  state: {
    selectBottonSheetForbidden: false,
    cancelBottomSheet: false,
    consentFromParam: "mock-consentFromParam",
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
    ],
    consentNotPending: false,
    statusResource: [
      { type: "RESOURCE", status: false },
      { type: "LOAN", status: false }
    ],
    loadingConsentStep: false,
    canApprove: false
  },
  changeState: jest.fn(),
  isApplicant: jest.fn(),
  corporationConsentStatus: jest.fn(),
  checkStatusApplicant: jest.fn()
};
let props = {
  currentStep: 2,
  stepForward: jest.fn(),
  goToStep: jest.fn()
};
window.atob = jest.fn(() => '{"key": "INTERNAL_ID", "VALUE": "1"}');
describe("ConsentStep", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    React.useContext = jest.fn(() => context);
  });

  it("should match snapshot", () => {
    context.state.loadingConsentStep = true;
    expect(render(<ConsentStep {...props} />)).toMatchSnapshot();
  });
  describe("animatedBottomSheets", () => {
    beforeEach(() => {
      props.currentStep = 1;
      context.state.loadingConsentStep = true;
      context.state.selectBottonSheetForbidden = true;
    });
    it("should render with loading animated bottom sheet", () => {
      render(<ConsentStep {...props} />);
      const animatedBottomSheet = screen.getByTestId(
        "ab-confirmation-bottomSheetBack"
      );
      expect(fireEvent.click(animatedBottomSheet)).toBeTruthy();
    });
    it("should click on openBanking animatedBottomSheet", () => {
      render(<ConsentStep {...props} />);
      const animatedBottomSheet = screen.getByTestId(
        "ab-openbanking-bottomSheetBack"
      );
      expect(fireEvent.click(animatedBottomSheet)).toBeTruthy();
    });
  });
  it("should click on linkDetail and be redirected", () => {
    window.open = jest.fn();
    context.state.loadingConsentStep = false;
    context.isApplicant = jest.fn().mockReturnValue(true);
    render(<ConsentStep {...props} />);
    const linkDetails = screen.getByTestId("link-details");
    fireEvent.click(linkDetails);
    expect(window.open).toBeCalledWith(
      "https://openbankingbrasil.org.br/",
      "_blank"
    );
  });

  describe("icons", () => {
    it("should render icon-attention with corporationConsentStatus = true", () => {
      props.currentStep = 1;
      context.state.loadingConsentStep = true;
      context.state.selectBottonSheetForbidden = true;
      context.props.consentInfo.status = "PENDING";
      context.corporationConsentStatus = jest.fn(() => true);
      render(<ConsentStep {...props} />);
      const icon = screen.getByTestId("icon-attention");
      expect(icon).toBeTruthy();
    });
    it("should render icon-identifier with corporationConsentStatus = false", () => {
      props.currentStep = 1;
      context.state.loadingConsentStep = true;
      context.props.consentInfo.status = "PENDING";
      context.corporationConsentStatus = jest.fn(() => false);
      render(<ConsentStep {...props} />);
      const icon = screen.getByTestId("icon-identifier");
      expect(icon).toBeTruthy();
    });
  });
  describe("loadingConsentStep = false", () => {
    it("should show alert message when isApplicant = true", () => {
      context.state.loadingConsentStep = false;
      context.isApplicant = jest.fn().mockReturnValue(true);
      render(<ConsentStep {...props} />);
      const icon = screen.getAllByTestId(
        "checkboxOption_Microcrédito produtivo orientado"
      )[0];
      expect(fireEvent.change(icon)).toBeTruthy();
    });
    it("should click on cancel open banking button", async () => {
      context.state.loadingConsentStep = false;
      context.state.cancelBottomSheet = true;
      context.cancelConsent.mockResolvedValue();
      context.isApplicant = jest.fn().mockReturnValue(true);
      render(<ConsentStep {...props} />);
      const icon = screen.getByTestId("cancelOpenBankingButton");
      jest.runAllTimers();
      expect(fireEvent.click(icon)).toBeTruthy();
    });
    it("should click on cancel open banking button with no consentFromParam", async () => {
      context.state.loadingConsentStep = false;
      context.state.cancelBottomSheet = true;
      context.state.consentFromParam = [];
      context.isApplicant = jest.fn().mockReturnValue(true);
      render(<ConsentStep {...props} />);
      const icon = screen.getByTestId("cancelOpenBankingButton");
      jest.runAllTimers();
      expect(fireEvent.click(icon)).toBeTruthy();
    });
  });
  describe("continue and back buttons", () => {
    it("should trigger stepFoward function when click on continue button", () => {
      context.state.loadingConsentStep = false;
      context.isApplicant = jest.fn().mockReturnValue(true);
      render(<ConsentStep {...props} />);
      const nextButton = screen.getByTestId("continueButton");
      fireEvent.click(nextButton);
      expect(props.stepForward).toBeCalled();
    });
    it("should trigger cancelBottomSheet state when click on back button", () => {
      context.state.loadingConsentStep = false;
      context.isApplicant = jest.fn().mockReturnValue(true);
      render(<ConsentStep {...props} />);
      const backButton = screen.getByTestId("cancelButton");
      fireEvent.click(backButton);

      expect(context.changeState).toBeCalled();
    });
  });
});
