import React from "react";
import { shallow } from "enzyme";
import DetailsStep from "./DetailsStep";
import ActionCard from "../../../common/ActionCard";
import { Button } from "react-bocombbm-components";

let context = {
  state: {
    selectedBank: {
      shareId: "61a045bf8b0d2f5b7cb69231",
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
      authorisationServer: null,
      lastStatusUpdate: "2021-11-03T19:16:01.565Z",
      organisationName: "BCO BOCOM BBM S.A.",
      status: "ACTIVE",
      loggedUser: {
        document: {
          identification: "11021550205"
        }
      },
      createDateTime: "2021-11-26T02:26:07.556Z",
      expirationDateTime: "2022-11-26T02:26:05Z"
    },
    endSharingBottomSheet: false,
    selectedTab: 1
  },
  props: {
    setIsApproveConsent: jest.fn(),
    setConsentId: jest.fn(),
    emptyRedirectUri: jest.fn(),
    populateSelectedConsentResources: jest.fn(),
    userInfo: {
      document: "11021550205",
      tenants: ["Individual"],
      roles: ["UpdateConsent"]
    },
    rejectConsentTransmitted: jest.fn(),
    rejectConsentReceived: jest.fn()
  },
  tagConf: {
    inactive: ["#D9E0E4", "#244859", "Desativado"],
    expired: ["#D9E0E4", "#244859", "Expirado"],
    pending: ["#FFD46A", "#80521B", "Pendente"],
    active: ["#CCE9E1", "#004933", "Ativo"]
  },
  formatDate: jest.fn(),
  capitalized: jest.fn(),
  changeState: jest.fn()
};

const props = {
  currentStep: 2,
  stepForward: jest.fn(),
  stepBack: jest.fn(),
  goToStep: jest.fn()
};

describe("DetailsStep", () => {
  beforeEach(() => {
    React.useContext = jest.fn(() => context);
  });

  it.skip("should match snapshot", () => {
    expect(shallow(<DetailsStep {...props} />)).toMatchSnapshot();
  });

  it.skip("should view consent data", () => {
    const component = shallow(<DetailsStep {...props} />);
    component
      .find(ActionCard)
      .at(0)
      .renderProp("actionClick")(props.stepForward);
    expect(props.stepForward).toHaveBeenCalled();
  });

  it.skip("should view option for cancel consent", () => {
    const component = shallow(<DetailsStep {...props} />);
    component
      .find(ActionCard)
      .at(1)
      .renderProp("actionClick")();
    expect(context.changeState).toHaveBeenCalled();
  });

  it.skip("should cancel consent transmitted", () => {
    const component = shallow(<DetailsStep {...props} />);
    component
      .find(Button)
      .at(1)
      .simulate("click");

    expect(context.props.rejectConsentTransmitted).toHaveBeenCalledWith(
      "61a045bf8b0d2f5b7cb69231"
    );
  });

  it.skip("should cancel consent received", () => {
    context.state.selectedTab = 2;
    const component = shallow(<DetailsStep {...props} />);
    component
      .find(Button)
      .at(1)
      .simulate("click");
    expect(context.props.rejectConsentReceived).toHaveBeenCalledWith(
      "61a045bf8b0d2f5b7cb69231"
    );
  });

  it.skip("should back to details consent", () => {
    const component = shallow(<DetailsStep {...props} />);
    component
      .find(Button)
      .at(2)
      .simulate("click");
    expect(context.changeState).toHaveBeenCalled();
  });

  it.skip("should match snapshot with status pending", () => {
    context.state.selectedBank.status = "PENDING";
    React.useContext = jest.fn(() => context);
    expect(shallow(<DetailsStep {...props} />)).toMatchSnapshot();
  });
  

  it.skip("should select option approve consent pf", () => {
    const component = shallow(<DetailsStep {...props} />);
    component
      .find(ActionCard)
      .at(1)
      .renderProp("actionClick")();
    expect(context.props.emptyRedirectUri).toHaveBeenCalled();
    expect(context.props.setIsApproveConsent).toHaveBeenCalled();
    expect(context.props.setConsentId).toHaveBeenCalled();
  });

  it.skip("should select option approve consent pj", () => {
    context.props.userInfo.tenants[0] = "Corporation";
    React.useContext = jest.fn(() => context);
    const component = shallow(<DetailsStep {...props} />);
    component
      .find(ActionCard)
      .at(1)
      .renderProp("actionClick")();
    expect(context.props.emptyRedirectUri).toHaveBeenCalled();
    expect(context.props.setIsApproveConsent).toHaveBeenCalled();
    expect(context.props.setConsentId).toHaveBeenCalled();
  });

  it.skip("should back to list consents", () => {
    const component = shallow(<DetailsStep {...props} />);
    component
      .find(Button)
      .at(0)
      .simulate("click");
    expect(props.stepBack).toHaveBeenCalled();
  });
});