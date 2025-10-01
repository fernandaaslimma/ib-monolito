import React from "react";
import { shallow } from "enzyme";
import Shares from "./Shares";
import { translate } from "../../../utils/i18n";
import ListStep from "./ListStep";
import ResumeStep from "./ResumeStep";
import CancelStep from "./CancelStep";
import ChangeSharingStep from "./ChangeSharingStep";
import ConfirmStep from "./ConfirmStep";
import RedirectStep from "./RedirectStep";
import DetailsStep from "./DetailsStep";

const props = {
  state: {
    loading: false,
    selectedTab: 0,
    selectedBank: null,
    endSharingBottomSheet: false,
    changeSharingBottomSheet: false,
    renewSharingBottomSheet: false,
    loadingCurrentShares: true,
    resumeEndSharing: false,
    organisationId: null,
    selectAccountOriginBottomSheet: false,
    selectedInstitutionBottonSheet: false,
    previusStep: null,
    selectDeadLineBottomSheet: false,
    loadingChangeStep: false,
    selectedConsentResources: null,
    selectShareOld: null,
    newConsentCreated: null,
    payloadToNewConsent: null,
    getTransmittedCurrentShares: () => Promise.resolve(),
    getReceivedCurrentShares: () => Promise.resolve(),
    getInstitutions: () => Promise.resolve()
  }
};

describe("Success component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<Shares {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with tagConf", () => {
    const newProps = {
      ...props,
      colorModal: jest.fn(),
      tagConf: {
        inactive: [
          "#D9E0E4",
          "#244859",
          translate("OPEN_BANKING_TAG_STATUS_INACTVE")
        ],
        expired: [
          "#D9E0E4",
          "#244859",
          translate("OPEN_BANKING_TAG_STATUS_EXPIRED")
        ],
        overdue: [
          "#D9E0E4",
          "#244859",
          translate("OPEN_BANKING_TAG_STATUS_OVERDUE")
        ],
        pending: [
          "#FFD46A",
          "#80521B",
          translate("OPEN_BANKING_TAG_STATUS_PENDING")
        ],
        active: [
          "#CCE9E1",
          "#004933",
          translate("OPEN_BANKING_TAG_STATUS_ACTIVE")
        ]
      }
    };
    expect(shallow(<Shares {...newProps} />)).toMatchSnapshot();
  });

  it("should match snapshot with steps", () => {
    const newProps = {
      ...props,
      colorModal: jest.fn(),
      steps: [
        ListStep,
        DetailsStep,
        ResumeStep,
        CancelStep,
        ChangeSharingStep,
        ConfirmStep,
        RedirectStep
      ]
    };
    expect(shallow(<Shares {...newProps} />)).toMatchSnapshot();
  });

  // it("should call componentDidMount and change the TESTE", () => {
  //   const shallowComponent = shallow(<Shares {...props} />);
  //   const spy =  jest.spyOn(shallowComponent.instance(), "setState");
  //   // jest.useFakeTimers();
  //   shallowComponent.instance().componentDidMount();
  //   expect(spy).toHaveBeenCalledWith({ loadingCurrentShares: false });

  // //   // const shallowComponent = new Shares(props);
  // //   // register(shallowComponent)
  // //   // const s = jest.fn();
  // //   // applyToAll(s)
  // //   // expect(s).toHaveBeenCalledWith(shallow);

  // //   // const beverage = new LaCroix('orange');
  // //   // register(beverage);
  // //   // const f = jest.fn();
  // //   // applyToAll(f);
  // //   // expect(f).toHaveBeenCalledWith(beverage);
  // });

  it("change the setSelectedTab", () => {
    const shallowComponent = shallow(<Shares {...props} />);
    const spy = jest.spyOn(shallowComponent.instance(), "setState");
    shallowComponent.instance().setSelectedTab(1);
    expect(spy).toHaveBeenCalledWith({ selectedTab: 1 });
  });

  it("change the setSelectedBank", () => {
    const newProps = {
      ...props,
      callback: jest.fn()
    };
    const shallowComponent = shallow(<Shares {...newProps} />);
    const spy = jest.spyOn(shallowComponent.instance(), "setState");
    shallowComponent.instance().setSelectedBank(0, newProps.callback);
    expect(spy).toHaveBeenCalledWith({ selectedBank: 0 });
    expect(newProps.callback).toHaveBeenCalled();
  });

  // it("must call populateSelectedConsentResources ", () => {
  //   const newProps = {
  //     ...props,
  //     dataPermissionsPayload : jest.fn(),
  //     resourceGroups : jest.fn(),
  //     deadlines  : jest.fn(),
  //   }

  //   const resourceGroupsMock = {
  //           resourceGroups: [
  //       {
  //         dataPermissions: [
  //           {
  //             detail: "Financiamentos",
  //             displayName: "Financiamentos",
  //             permissionCode: "FINANCINGS_READ"
  //           }
  //         ],
  //         displayName: "Operações de Crédito - Financiamentos",
  //         resources: [
  //           {
  //             displayName: "Microcrédito produtivo orientado"
  //           },
  //           {
  //             displayName: "Microcrédito produtivo orientado"
  //           },
  //           {
  //             displayName: "Microcrédito produtivo orientado"
  //           }
  //         ]
  //       },
  //       {
  //         dataPermissions: [
  //           {
  //             detail: "Financiamentos",
  //             displayName: "Financiamentos",
  //             permissionCode: "FINANCINGS_READ"
  //           }
  //         ],
  //         displayName: "Operações de Crédito - Financiamentos",
  //         resources: [
  //           {
  //             displayName: "Microcrédito produtivo orientado"
  //           }
  //         ]
  //       },
  //       {
  //         dataPermissions: [
  //           {
  //             detail: "contas e etc",
  //             displayName: "Contas",
  //             permissionCode: "ACCOUNTS_READ"
  //           }
  //         ],
  //         displayName: "Contas"
  //       }
  //     ]
  //   }
  //   const shallowComponent = shallow(<Shares {...newProps} />);
  //   const spy = jest.spyOn(shallowComponent.instance(), "populateSelectedConsentResources");
  //   shallowComponent.instance().populateSelectedConsentResources();
  //   expect(spy).toHaveBeenCalled();
  // });

  it("change the changeState", () => {
    const shallowComponent = shallow(<Shares {...props} />);
    const spy = jest.spyOn(shallowComponent.instance(), "setState");
    shallowComponent.instance().changeState([], 1);
    expect(spy).toHaveBeenCalled();
  });

  it("change the formatDate", () => {
    const shallowComponent = shallow(<Shares {...props} />);
    const spy = jest.spyOn(shallowComponent.instance(), "formatDate");
    shallowComponent.instance().formatDate("10/02/2003 - 12:30");
    expect(spy).toHaveBeenCalled();
  });

  it("change the capitalized", () => {
    const shallowComponent = shallow(<Shares {...props} />);
    const spy = jest.spyOn(shallowComponent.instance(), "capitalized");
    shallowComponent.instance().capitalized("opa");
    expect(spy).toHaveBeenCalled();
  });
  describe("Success component corporationConsentStatus", () => {
    it("change the userInfo", () => {
      const newProps = {
        ...props,
        userInfo: ""
      };
      const shallowComponent = shallow(<Shares {...newProps} />);
      const spy = jest.spyOn(
        shallowComponent.instance(),
        "corporationConsentStatus"
      );
      shallowComponent.instance().corporationConsentStatus();
      expect(spy).toHaveBeenCalled();
    });

    // it("change the checkLoggedUserApprove TESTE", () => {
    //   const newProps = {
    //     ...props,
    //     item:jest.fn(),
    //     selectedBank:jest.fn(),
    //   }
    //   const shallowComponent = shallow(<Shares {...newProps} />);
    //   const spy = jest.spyOn(shallowComponent.instance(), "setState");
    //   shallowComponent.instance().corporationConsentStatus();
    //   expect(spy).toHaveBeenCalledWith({checkLoggedUserApprove: null});
    // });
  });

  it("change the startRenewConsent", () => {
    const newProps = {
      ...props,
      newConsentCreated: jest.fn(),
      loadingChangeStep: true
    };
    const shallowComponent = shallow(<Shares {...newProps} />);
    const spy = jest.spyOn(shallowComponent.instance(), "setState");
    shallowComponent.instance().startRenewConsent();
    expect(spy).toHaveBeenCalled();
  });
  describe("Success component createRenewPayload", () => {
    it("change the createRenewPayload", () => {
      const newProps = {
        ...props,
        renewPayload: jest.fn(),
        deadLine: jest.fn(),
        redirectUri: jest.fn(),
        dataPermissions: jest.fn()
      };
      const shallowComponent = shallow(<Shares {...newProps} />);
      const spy = jest.spyOn(shallowComponent.instance(), "createRenewPayload");
      shallowComponent.instance().createRenewPayload();
      expect(spy).toHaveBeenCalled();
    });

    it.skip("change the renewPayload TESTE", async () => {
      const newProps = {
        ...props,
        renewPayload: jest.fn(),
        deadLine: jest.fn(),
        redirectUri: jest.fn(),
        dataPermissions: jest.fn()
      };
      const shallowComponent = shallow(<Shares {...newProps} />);
      const spy = jest.spyOn(shallowComponent.instance(), "setState");
      shallowComponent.instance().createRenewPayload();
      expect(spy).toHaveBeenCalledWith({
        payloadToNewConsent: newProps.renewPayload
      });
      expect(newProps.renewPayload).toHaveBeenCalled();
    });
  });

  it("change the createShare", () => {
    const newProps = {
      ...props,
      renewPayload: jest.fn(),
      authorisationServerId: jest.fn(),
      organisationId: jest.fn(),
      finality: jest.fn(),
      finalityId: jest.fn()
    };
    const shallowComponent = shallow(<Shares {...newProps} />);
    const spy = jest.spyOn(shallowComponent.instance(), "setState");
    shallowComponent.instance().createShare();
    expect(spy).toHaveBeenCalled();
  });

  // it("change the payload TESTE", () => {
  //   const newProps = {
  //     ...props,
  //     createShare: jest.fn(),
  //     authorisationServerId: jest.fn(),
  //     organisationId: jest.fn(),
  //     finalityId: jest.fn(),
  //     finality: jest.fn(),
  //     payload:{
  //       additionalInfos: [
  //         {
  //           key: "INTERNAL_ID",
  //           value: "1"
  //         }
  //       ],
  //       authorisationServer: {

  //       },
  //       businessEntity: {
  //         document: {
  //           rel: "CNPJ"
  //         }
  //       },
  //       finality: {
  //       },
  //       loggedUser: {
  //         document: {
  //           rel: "CPF"
  //         }
  //       }

  //     }
  //   }

  //   const shallowComponent = shallow(<Shares {...newProps} />);
  //   const spy = jest.spyOn(shallowComponent.instance(), "setState");
  //   shallowComponent.instance().createShare();
  //   expect(spy).toHaveBeenCalled();
  //     });

  it("change the createShare(payload) ", async () => {
    const newProps = {
      ...props,
      newConsentCreated: jest.fn(),
      consentCreated: jest.fn(),
      consentLogo: jest.fn(),
      consentName: jest.fn()
    };
    const shallowComponent = shallow(<Shares {...newProps} />);
    const spy = jest.spyOn(shallowComponent.instance(), "setState");
    shallowComponent.instance().createShare();
    expect(spy).toHaveBeenCalledWith({ loadingChangeStep: true });
  });
});
