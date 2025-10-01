import React from "react";
import { shallow } from "enzyme";
import { Button } from "react-bocombbm-components";
import ResumeStep from "./ResumeStep";

let context = {
  props: {
    updateShareScope: jest.fn(),
    userInfo: {
      givenName: "givn name mock",
      surname: "sur name mock",
      document: "4234234234",
      tenants: [{ type: "Corporation" }]
    }
  },
  state: {
    loadingApi: false,
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
    consentLogo: "mock url",
    consentName: "mock name"
  },
  changeState: jest.fn(),
  createShare: jest.fn()
};

const props = {
  currentStep: 3,
  stepForward: jest.fn(),
  stepBack: jest.fn()
};

describe("ResumeStep", () => {
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
    expect(shallow(<ResumeStep {...props} />)).toMatchSnapshot();
  });

  it.skip("should step back", () => {
    const component = shallow(<ResumeStep {...props} />);
    component
      .find(Button)
      .at(0)
      .simulate("click");
    expect(props.stepBack).toHaveBeenCalled();
  });
});
