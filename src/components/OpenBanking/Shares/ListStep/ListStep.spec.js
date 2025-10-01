import React from "react";
import { shallow } from "enzyme";
import ListStep from "./ListStep";
import { Card, AccessPortal } from "./styles";
import { OpenBankingSharesContext } from "../Shares";

delete window.open;

window.open = jest.fn();

let context = {
  state: { selectedTab: 1, loadingCurrentShares: false },
  props: {
    institutions: [
      {
        CustomerFriendlyLogoUri:
          "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
        OrganisationId: "mock id"
      }
    ],
    transmittedCurrentShares: [
      {
        organisationId: "mock id",
        authorisationServer: null,
        lastStatusUpdate: "2021-11-03T19:16:01.565Z",
        organisationName: "BCO BOCOM BBM S.A.",
        status: "ACTIVE"
      }
    ],
    receivedCurrentShares: [
      {
        organisationId: "mock id",
        authorisationServer: {
          customerFriendlyLogoUri:
            "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg"
        },
        customerFriendlyName: "BOCOM BBM",
        lastStatusUpdate: "2021-11-03T19:16:01.565Z",
        organisationName: "BCO BOCOM BBM S.A.",
        status: "PENDING"
      }
    ]
  },
  tagConf: {
    inactive: ["#D9E0E4", "#244859", "Desativado"],
    expired: ["#D9E0E4", "#244859", "Expirado"],
    pending: ["#FFD46A", "#80521B", "Pendente"],
    active: ["#CCE9E1", "#004933", "Ativo"]
  },
  formatDate: jest.fn(),
  setSelectedTab: jest.fn(),
  setSelectedBank: jest.fn(),
  capitalized: jest.fn()
};

const props = {
  stepForward: jest.fn()
};

describe("ListStep", () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementation(f => f());
  };
  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });

  it("should match snapshot", () => {
    expect(
      shallow(
        <OpenBankingSharesContext.Provider value={context}>
          <ListStep {...props} />
        </OpenBankingSharesContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it.skip("should call next step", () => {
    const component = shallow(<ListStep {...props} />);
    component
      .find(Card)
      .at(0)
      .simulate("click");
    expect(context.setSelectedBank).toHaveBeenCalled();
  });

  it.skip("should call citizen portal", () => {
    const component = shallow(<ListStep {...props} />);
    component.find(AccessPortal).simulate("click");
    expect(window.open).toHaveBeenCalled();
  });

  it("should match snapshot without list", () => {
    context.props.transmittedCurrentShares = [];
    expect(
      shallow(
        <OpenBankingSharesContext.Provider value={context}>
          <ListStep {...props} />
        </OpenBankingSharesContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with received shares", () => {
    expect(
      shallow(
        <OpenBankingSharesContext.Provider value={context}>
          <ListStep {...props} />
        </OpenBankingSharesContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with received shares", () => {
    context.state.loadingCurrentShares = true;
    expect(
      shallow(
        <OpenBankingSharesContext.Provider value={context}>
          <ListStep {...props} />
        </OpenBankingSharesContext.Provider>
      )
    ).toMatchSnapshot();
  });
});
