import React from "react";
import { shallow } from "enzyme";
import NewConsent from "./NewConsent";
const props = {
  state: {
    selectBottonSheetForbidden: false,
    loading: false,
    selectAccountOriginBottomSheet: false,
    selectedInstitutionBottonSheet: false,
    selectDataBottomSheet: false,
    selectDeadLineBottomSheet: false,
    selectAccountCNPJBottomSheet: false,
    selectedDeadLine: {
      total: null
    },
    selectFinalDeadLine: {
      total: null
    },
    loadingNewConsentStep: false,
    selectCNPJ: "",
    selectFinalCNPJ: ""
  },
  changeState: jest.fn(),
  getInstituion: jest.fn(),
  createShare: jest.fn()
};
describe("Success component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<NewConsent {...props} />)).toMatchSnapshot();
  });
  it("change the changeState", () => {
    const shallowComponent = shallow(<NewConsent {...props} />);
    const spy = jest.spyOn(shallowComponent.instance(), "setState");
    shallowComponent.instance().changeState([], 1);
    expect(spy).toHaveBeenCalled();
  });
});
