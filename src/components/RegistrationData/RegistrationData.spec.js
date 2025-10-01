import React from "react";
import { mount } from "enzyme";

import RegistrationData from "./RegistrationData";

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
      actions: [
        "authregistration",
        "passwordreset",
        "PersonRegistrationForms",
        "SuitabilityForms"
      ],
      activated: true,
      plataformIdentifier: null
    },
    {
      id: "290ca878-3080-4848-b388-3dffaaab243d",
      defaultAuth: true,
      authUri: "totp",
      type: "totp",
      actions: [
        "wiretransfer",
        "passwordreset",
        "approvesuitability",
        "personRegistration.confirmInformation",
        "approvemobilefactor",
        "approveinvestment"
      ],
      activated: true,
      plataformIdentifier: null,
      approved: true,
      isSelf: false
    }
  ]
};

describe("RegistrationData component", () => {
  it("should render RegistrationData with props", () => {
    expect(mount(<RegistrationData {...props} />)).toMatchSnapshot();
  });

  it("should open modal popup", () => {
    mount(<RegistrationData {...props} />);

    expect(props.openModal).toHaveBeenCalled();
  });

  it("should render RegistrationData Form modal with props", () => {
    const newProps = {
      ...props,
      openModal(config) {
        config.children();
      }
    };

    mount(<RegistrationData {...newProps} />).instance();
    expect(mount(<RegistrationData {...newProps} />)).toMatchSnapshot();
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
          actions: [
            "personRegistration.confirmInformation",
            "passwordreset",
            "wiretransfer"
          ],
          activated: true,
          plataformIdentifier: "6865252b-6609-4770-8cf2-775328ad39cf",
          aproved: true
        },
        {
          id: "kjhdsakjhgaf-dkjhbvdjk564-h",
          defaultAuth: false,
          authUri: "21956309602",
          type: "sms",
          actions: ["personRegistration.confirmInformation", "passwordreset"],
          activated: true,
          plataformIdentifier: null,
          aproved: true
        },
        {
          id: "s56456-bdsvdas-455wq",
          defaultAuth: true,
          authUri: "pj_yuriramos@bancobbm.com.br",
          type: "mail",
          actions: [
            "personRegistration.confirmInformation",
            "passwordreset",
            "SuitabilityForms"
          ],
          activated: true,
          plataformIdentifier: null,
          aproved: true
        }
      ]
    };

    mount(<RegistrationData {...newProps} />).instance();
    expect(mount(<RegistrationData {...newProps} />)).toMatchSnapshot();
  });

  it("should render RegistrationData Welcome modal with props", () => {
    const props = {
      notification: { value: "mock" },
      openModal(config) {
        config.children();
      }
    };

    mount(<RegistrationData {...props} />).instance();
    expect(mount(<RegistrationData {...props} />)).toMatchSnapshot();
  });
});
