import { configure, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import DetailsStep from "./index";
configure({ testIdAttribute: "data-test" });

jest.mock("../../../common/DefaultShimmerLoading", () => {
  const defaultShimmerLoadingMock = () => {
    const MockName = "default-shimmer-loading";
    return <MockName data-test="default-shimmer-loading" />;
  };
  return defaultShimmerLoadingMock;
});
let props = {
  stepForward: jest.fn(),
  stepBack: jest.fn()
};
let context = {
  state: {
    consentCreated: false,
    consentLogo: "mock",
    consentName: "mock",
    finalRequiredData: [
      {
        displayName: "mock",
        type: "mock",
        dataPermissions: [
          {
            permissionCode: "mock",
            displayName: "mock",
            detail: "mock",
            type: "mock",
            required: false,
            status: false
          }
        ]
      }
    ],
    finalOptionalData: [
      {
        displayName: "mock",
        type: "mock",
        dataPermissions: [
          {
            permissionCode: "mock",
            displayName: "mock",
            detail: "mock",
            type: "mock",
            required: false,
            status: false
          }
        ]
      }
    ],
    finalDataPermisson: [
      {
        permissionCode: "mock",
        displayName: "mock",
        detail: "mock",
        type: "mock",
        required: false,
        status: false
      }
    ],
    selectDataBottomSheet: false,
    selectDeadLineBottomSheet: "mock",
    selectedDeadLine: "mock",
    selectFinalDeadLine: "mock",
    loadingNewConsentStep: false,
    allStatusResource: [
      {
        type: "mock",
        status: "mock"
      }
    ]
  },
  changeState: jest.fn()
};
describe("DetailsStep", () => {
  beforeEach(() => {
    React.useContext = jest.fn(() => context);
  });
  it("should match snapshot", () => {
    expect(render(<DetailsStep {...props} />)).toMatchSnapshot();
  });
  it("should render default shimmer loading with loadingNewConsentStep true", () => {
    context.state.loadingNewConsentStep = true;
    render(<DetailsStep {...props} />);
    expect(screen.queryByTestId("default-shimmer-loading")).not.toBeNull();
  });
  it("should render with consentCreated", () => {
    context.state.consentCreated = {
      deadLines: [
        {
          total: 2
        },
        {
          total: 3
        }
      ],
      resourceGroups: [
        {
          displayName: "mock",
          type: "mock",
          dataPermissions: [
            {
              permissionCode: "mock",
              displayName: "mock",
              detail: "mock",
              type: "mock",
              required: false,
              status: false
            }
          ]
        }
      ]
    };
    expect(render(<DetailsStep {...props} />)).toMatchSnapshot();
  });
  it("should click on checkbox OPEN_BANKING_NEW_CONSENT_SELECT_ALL", async () => {
    context.state.finalRequiredData = null;
    context.state.consentCreated = {
      deadLines: [
        {
          total: 2
        },
        {
          total: 3
        }
      ],
      resourceGroups: [
        {
          displayName: "mock",
          type: "mock",
          dataPermissions: [
            {
              permissionCode: "mock",
              displayName: "mock",
              detail: "mock",
              type: "mock",
              required: false,
              status: false
            }
          ]
        }
      ]
    };
    render(<DetailsStep {...props} />);
    await setTimeout(() => {
      fireEvent.change(screen.getByTestId("switchSaveAccount"));
      fireEvent.change(screen.getByTestId("dataPermission-0"));
    }, 2000);
  });
});
