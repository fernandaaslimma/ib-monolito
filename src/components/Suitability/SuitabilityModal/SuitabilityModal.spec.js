import React from "react";
import { shallow } from "enzyme";

import SuitabilityModal from "../SuitabilityModal";
const props = {
  openModal: jest.fn(),
  setNotificationStatus: jest.fn(),
  getAuthFactors: jest.fn(),
  authFactors: [
    {
      id: "67f61d5d-3560-4121-ab16-222f614dfbc3",
      defaultAuth: false,
      authUri: "RnhJWW9sYSt3RkVvdlhOUU0yZnpKVkdWV3ZvPQ==",
      type: "mobile",
      actions: [
        "authregistration",
        "passwordreset",
        "wiretransfer",
        "SuitabilityForms"
      ],
      activated: true,
      plataformIdentifier: "6865252b-6609-4770-8cf2-775328ad39cf"
    },
    {
      id: "kjhdsakjhgaf-dkjhbvdjk564-h",
      defaultAuth: false,
      authUri: "21956309602",
      type: "sms",
      actions: ["authregistration", "passwordreset", "SuitabilityForms"],
      activated: true,
      plataformIdentifier: null
    },
    {
      id: "s56456-bdsvdas-455wq",
      defaultAuth: true,
      authUri: "pj_yuriramos@bancobbm.com.br",
      type: "mail",
      actions: ["authregistration", "passwordreset", "SuitabilityForms"],
      activated: true,
      plataformIdentifier: null
    }
  ]
};

describe("Suitability component", () => {
  let withNotificationProps;

  beforeEach(() => {
    withNotificationProps = {
      ...props,
      openModal(config) {
        config.children();
      },
      notification: [
        {
          type: "SuitabilityForms"
        }
      ]
    };
  });

  it("should render Suitability with props", () => {
    expect(
      shallow(
        <SuitabilityModal {...withNotificationProps} notification={null} />
      )
    ).toMatchSnapshot();
  });

  it("should render Suitability with props and notification", () => {
    expect(
      shallow(<SuitabilityModal {...withNotificationProps} />)
    ).toMatchSnapshot();
  });

  it("should open modal popup", () => {
    const newProps = {
      ...props,
      openModal(config) {
        config.children();
      }
    };
    expect(shallow(<SuitabilityModal {...newProps} />)).toMatchSnapshot();
  });

  it("should render Suitability Form modal with props", () => {
    expect(
      shallow(<SuitabilityModal {...withNotificationProps} />)
    ).toMatchSnapshot();
  });

  it("should render RegistrationData Form modal without acionts", () => {
    const newProps = {
      ...props,
      authFactors: [
        {
          id: "67f61d5d-3560-4121-ab16-222f614dfbc3",
          defaultAuth: false,
          authUri: "RnhJWW9sYSt3RkVvdlhOUU0yZnpKVkdWV3ZvPQ==",
          type: "mobile",
          actions: ["authregistration", "passwordreset", "wiretransfer"],
          activated: true,
          plataformIdentifier: "6865252b-6609-4770-8cf2-775328ad39cf"
        },
        {
          id: "kjhdsakjhgaf-dkjhbvdjk564-h",
          defaultAuth: false,
          authUri: "21956309602",
          type: "sms",
          actions: ["authregistration", "passwordreset"],
          activated: true,
          plataformIdentifier: null
        },
        {
          id: "s56456-bdsvdas-455wq",
          defaultAuth: true,
          authUri: "pj_yuriramos@bancobbm.com.br",
          type: "mail",
          actions: ["authregistration", "passwordreset"],
          activated: true,
          plataformIdentifier: null
        }
      ],
      openModal(config) {
        config.children();
      }
    };

    shallow(<SuitabilityModal {...newProps} />).instance();
    expect(shallow(<SuitabilityModal {...newProps} />)).toMatchSnapshot();
  });

  it("should render Suitability Welcome modal with props", () => {
    expect(
      shallow(<SuitabilityModal {...withNotificationProps} />)
    ).toMatchSnapshot();
  });
});
