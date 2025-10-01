import { shallow } from "enzyme";
import React from "react";
import Consent from "./Consent";
const props = {
  state: {
    selectBottonSheetForbidden: false,
    cancelBottomSheet: false,
    selectAccountOriginBottomSheet: false,
    consentFromParam: "",
    selectedAccount: null,
    setResource: false,
    cancelFlow: false,
    consentNotPending: false,
    loadingConsentStep: true,
    statusResource: null,
    allStatusResource: false,
    canApprove: true
  }
};
describe("Success component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<Consent {...props} />)).toMatchSnapshot();
  });
  it("change the changeState", () => {
    const shallowComponent = shallow(<Consent {...props} />);
    const spy = jest.spyOn(shallowComponent.instance(), "setState");
    shallowComponent.instance().changeState([], 1);
    expect(spy).toHaveBeenCalled();
  });
  it("should update the state with modified resources when calling selectAllOptions", () => {
    const consentInfo = {
      resourceGroups: [
        {
          type: "type1",
          resources: [
            { resourceId: "1", status: false },
            { resourceId: "2", status: false }
          ]
        },
        {
          type: "type2",
          resources: [
            { resourceId: "3", status: false },
            { resourceId: "4", status: false }
          ]
        }
      ]
    };
    const wrapper = shallow(<Consent consentInfo={consentInfo} />);

    wrapper.instance().selectAllOptions();

    expect(wrapper.state("statusResource")).toEqual([
      { resourceId: "1", type: "type1", status: true },
      { resourceId: "2", type: "type1", status: true },
      { resourceId: "3", type: "type2", status: true },
      { resourceId: "4", type: "type2", status: true }
    ]);
    expect(wrapper.state("clientResources")).toEqual([
      { resourceId: "1", type: "type1", status: true },
      { resourceId: "2", type: "type1", status: true },
      { resourceId: "3", type: "type2", status: true },
      { resourceId: "4", type: "type2", status: true }
    ]);
  });
  it("should update the state with modified resources when calling saveResources", () => {
    const consentInfo = {
      resourceGroups: [
        {
          type: "type1",
          resources: [
            { resourceId: "1", status: false },
            { resourceId: "2", status: false }
          ]
        },
        {
          type: "type2",
          resources: [
            { resourceId: "3", status: false },
            { resourceId: "4", status: false }
          ]
        }
      ]
    };
    const wrapper = shallow(<Consent consentInfo={consentInfo} />);

    wrapper.instance().saveResources();

    expect(wrapper.state("1")).toEqual({
      resourceId: "1",
      type: "type1",
      status: true
    });
    expect(wrapper.state("2")).toEqual({
      resourceId: "2",
      type: "type1",
      status: true
    });
    expect(wrapper.state("3")).toEqual({
      resourceId: "3",
      type: "type2",
      status: true
    });
    expect(wrapper.state("4")).toEqual({
      resourceId: "4",
      type: "type2",
      status: true
    });

    expect(wrapper.state("setResource")).toBe(true);
  });
  it("should return true if the document matches the identification in consentInfo", () => {
    const userInfo = {
      document: "12345678900"
    };

    const consentInfo = {
      loggedUser: {
        document: {
          identification: "12345678900"
        }
      }
    };

    const wrapper = shallow(
      <Consent userInfo={userInfo} consentInfo={consentInfo} />
    );

    const result = wrapper.instance().isApplicant();

    expect(result).toBe(true);
  });

  it("should return false if the document does not match the identification in consentInfo", () => {
    const userInfo = {
      document: "12345678900"
    };

    const consentInfo = {
      loggedUser: {
        document: {
          identification: "98765432100"
        }
      }
    };

    const wrapper = shallow(
      <Consent userInfo={userInfo} consentInfo={consentInfo} />
    );

    const result = wrapper.instance().isApplicant();

    expect(result).toBe(false);
  });
});
describe("corporationConsentStatus", () => {
  it("should return false when all conditions are false", () => {
    const props = {
      consentInfo: null,
      confirmConsent: false,
      confirmConsentResponse: null,
      userInfo: {
        document: "12345678900",
        tenants: ["Individual"]
      }
    };

    const wrapper = shallow(<Consent {...props} />);

    const result = wrapper.instance().corporationConsentStatus();

    expect(result).toBe(false);
  });
});

describe("findResource", () => {
  it("should return the correct status for a given ID", () => {
    const component = shallow(<Consent />);
    component.setState({
      resource1: { status: true },
      resource2: { status: false },
      resource3: { status: true }
    });

    expect(component.instance().findResource("resource1")).toBe(true);
    expect(component.instance().findResource("resource2")).toBe(false);
    expect(component.instance().findResource("resource3")).toBe(true);
  });
});

describe("chengeStatusResource", () => {
  it("should toggle the status of the resource for a given ID", () => {
    const component = shallow(<Consent />);
    component.setState({
      resource1: { status: true },
      resource2: { status: false },
      resource3: { status: true }
    });

    component.instance().chengeStatusResource("resource1");
    expect(component.state("resource1").status).toBe(false);

    component.instance().chengeStatusResource("resource2");
    expect(component.state("resource2").status).toBe(true);

    component.instance().chengeStatusResource("resource3");
    expect(component.state("resource3").status).toBe(false);
  });
});
