import React from "react";
import { shallow } from "enzyme";
import EFTApprove from "./EFTApprove";

const props = {
  closeModal: jest.fn(),
  onConfirm: jest.fn(),
  handleSaveAccount: jest.fn(),
  handleFavoredAccountButton: jest.fn(),
  header: {
    callback: jest.fn(),
    field: "val1"
  },
  data: {
    val1: "string"
  },
  userInfo: {
    document: "1"
  },
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
      name: "Yuri Ramos"
    },
    { name: "André Leitão" }
  ],
  currentAccount: {
    name: "Yuri",
    document: "11111111111"
  },
  pendency: {
    dueDate: "10/10/2021",
    recipient: {
      name: "Joao",
      taxId: "1"
    },
    approvers: [
      {
        approverId: "1",
        name: "Paulo"
      }
    ]
  }
};

describe("EFTApprove component", () => {
  it("should match snapshot", () => {
    expect(shallow(<EFTApprove {...props} />)).toMatchSnapshot();
  });

  it('should render an "EFTApprove" approve Button', () => {
    const wrapper = shallow(<EFTApprove {...props} />);
    expect(wrapper.find('Button[dataTest="Approve"]').length).toBe(1);
  });

  it('should render an "Tooltip" with datatest tooltipETFApprove', () => {
    const wrapper = shallow(<EFTApprove {...props} />);
    expect(wrapper.find('Tooltip[dataTest="tooltipETFApprove"]').length).toBe(
      1
    );
  });

  it('should render an "Checkbox" with datatest switchSaveAccount', () => {
    const wrapper = shallow(<EFTApprove {...props} />);
    expect(wrapper.find('Checkbox[dataTest="switchSaveAccount"]').length).toBe(
      1
    );
  });
});

describe("click simulation tests", () => {
  it("should close modal properly on Approve", () => {
    jest.spyOn(EFTApprove.prototype, "handleFavoredAccountButton");

    const wrapper = shallow(<EFTApprove {...props} />);
    wrapper.find('Button[dataTest="Approve"]').simulate("click");

    expect(wrapper.state()).toEqual({
      isLoading: false,
      switchChecked: undefined,
      switchDisabled: false,
      tooltipDisabled: true,
      messageTooltip: false
    });

    expect(EFTApprove.prototype.handleFavoredAccountButton.calledOnce);
  });
});
