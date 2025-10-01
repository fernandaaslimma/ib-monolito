import React from "react";
import { shallow, mount } from "enzyme";
import EFTConfirmation from "./EFTConfirmation";

const props = {
  userInfo: {
    givenName: "Yuri Ramos"
  },
  closeModal: jest.fn(),
  onConfirm: jest.fn(),
  transferData: {
    date: "01/01/2019",
    value: "2321312"
  },
  favoredData: {
    favored: "GTL Logística de transporte",
    CNPJ: "59.272.491/0001-72",
    bank: "Itaú Unibanco",
    agency: "8230-2",
    account: "19323-2",
    verifyDigit: "0"
  },
  originAccount: {
    number: "106 2 300431-1"
  },
  approvers: [
    {
      name: "Yuri Ramos",
      permissionToSaveAccount: true
    },
    { name: "André Leitão", permissionToSaveAccount: true }
  ],
  currentAccount: {
    name: "Yuri",
    document: "11111111111"
  }
};

describe("EFTConfirmation component", () => {
  it("should match snapshot", () => {
    expect(shallow(<EFTConfirmation {...props} />)).toMatchSnapshot();
  });

  it('should render an "EFTConfirmation" tag', () => {
    expect(shallow(<EFTConfirmation {...props} />)).toMatchSnapshot();
    expect(
      mount(<EFTConfirmation {...props} />).find("EFTConfirmation").length
    ).toBe(1);
  });
});

describe("click simulation tests", () => {
  it("should close modal properly on confirm", () => {
    jest.spyOn(EFTConfirmation.prototype, "handleConfirmButton");
    const wrapper = shallow(<EFTConfirmation {...props} />);
    const confirmButton = wrapper.find('Button[dataTest="Confirm"]');
    confirmButton.simulate("click");

    expect(wrapper.state()).toEqual({
      isLoading: true,
      permissionToSaveAccount: true,
      saveFavoredAccount: false
    });

    expect(EFTConfirmation.prototype.handleConfirmButton.calledOnce);
    expect(props.onConfirm).toHaveBeenCalled();
  });
});
