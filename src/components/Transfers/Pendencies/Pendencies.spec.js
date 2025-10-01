import React from "react";
import { shallow } from "enzyme";
// eslint-disable-next-line import/named
import Pendencies from "./Pendencies";

const props = {
  approveEFT: jest.fn(() => Promise.resolve("mock")),
  openModal: jest.fn(),
  openToastr: jest.fn(),
  denyEFT: jest.fn(),
  getTransferById: jest.fn(),
  loadTransfers: jest.fn(),
  getAuthFactors: jest.fn(),
  setNotificationStatus: jest.fn(),
  createAuthCode: jest.fn(),
  changeFactorTogle: jest.fn(),
  closeModal: jest.fn(),
  checkMFA: jest.fn(),
  loading: false,
  isAfterCreation: false,
  userInfo: {
    email: "string",
    roles: ["ApproveEFT"]
  },
  authFactors: [
    {
      id: "67f61d5d-3560-4121-ab16-222f614dfbc3",
      defaultAuth: false,
      authUri: "RnhJWW9sYSt3RkVvdlhOUU0yZnpKVkdWV3ZvPQ==",
      type: "mobile",
      actions: ["authregistration", "passwordreset"],
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
        "SuitabilityForms",
        "wiretransfer"
      ],
      activated: true,
      plataformIdentifier: null
    }
  ],
  pendencies: {
    content: [
      {
        transferOrderId: "string",
        originAccount: "string",
        dueDate: 123,
        bankBranch: "string",
        bankAccount: "string",
        recipient: {
          name: "string",
          bankId: "string",
          bankName: "string",
          bankAccount: "string",
          taxId: "string"
        },
        ammount: 123,
        approvers: [
          {
            approverId: "string",
            name: "string",
            hasApproved: false
          }
        ]
      }
    ]
  }
};

describe("Pendencies", () => {
  it("should match snapshot", () => {
    expect(shallow(<Pendencies {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot - empty state", () => {
    const newProps = {
      isEmpty: true
    };

    const allProps = { ...props, ...newProps };

    expect(shallow(<Pendencies {...allProps} />)).toMatchSnapshot();
  });

  it("should find a Desktop component", () => {
    const desktop = shallow(<Pendencies {...props} />);
    expect(desktop.find("Desktop").length).toBe(1);
  });

  it("should find a table displaying all of the transfers", () => {
    const wrapper = shallow(<Pendencies {...props} />);
    expect(
      wrapper
        .find('Container[data-test="ETFcreator"]')
        .find("Row")
        .find("Column").length
    ).toBe(0);
  });

  it("should validate user as creator and approver", () => {
    const userInfo = {
      roles: ["CreateApproveEFT"]
    };
    const shallowComponent = shallow(
      <Pendencies {...props} userInfo={userInfo} />
    );

    expect(shallowComponent.instance().isEFTCreatorApprover()).toBeTruthy();
  });

  it("should update eftData as creator and approver and invoke token modal", () => {
    const addProps = {
      userInfo: {
        roles: ["CreateApproveEFT"]
      },
      pendencies: {}
    };
    const shallowComponent = shallow(<Pendencies {...props} {...addProps} />);
    const spyTokenModal = jest.spyOn(shallowComponent.instance(), "tokenModal");

    shallowComponent.setProps({
      isAfterCreation: true,
      createEFTData: {
        content: { transferOrderId: "111" }
      }
    });
    shallowComponent.update();

    expect(spyTokenModal).toHaveBeenCalledWith("111", "approve");
  });

  it("should update eftData as creator and approver and invoke token modal", () => {
    const newProps = {
      ...props,
      authFactors: [
        {
          id: "67f61d5d-3560-4121-ab16-222f614dfbc3",
          defaultAuth: false,
          authUri: "RnhJWW9sYSt3RkVvdlhOUU0yZnpKVkdWV3ZvPQ==",
          type: "mobile",
          actions: ["authregistration", "passwordreset"],
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
          actions: ["authregistration", "passwordreset", "SuitabilityForms"],
          activated: true,
          plataformIdentifier: null
        }
      ],
      userInfo: {
        roles: ["CreateApproveEFT"]
      },
      pendencies: {},
      currentTransfer: {
        recipient: {
          name: "Eva GUILHERME",
          bankId: "747",
          bankName: "Ajinomoto 3090",
          bankBranch: "7637",
          bankAccount: "974723",
          taxId: "44489261006395"
        },
        approvers: [
          { approverId: "68300919007", name: "PJ 4", hasApproved: false },
          { approverId: "78901153009", name: "PJ 5", hasApproved: false },
          { approverId: "13798150028", name: "PJ 8", hasApproved: true },
          { approverId: "59054246081", name: "PJ 6", hasApproved: false }
        ],
        transferOrderId: "9d3b69dd-5d68-11ea-9065-161107e619aa",
        originAccount: "107 3 900002-8",
        dueDate: 1583881200000,
        amount: 43803.69,
        status: "pendingApprovement"
      }
    };

    const shallowComponent = shallow(<Pendencies {...newProps} />);
    const spyTokenModal = jest.spyOn(shallowComponent.instance(), "tokenModal");

    shallowComponent.instance().getTransferInfomation("111");

    shallowComponent.setProps({
      isAfterCreation: true,
      createEFTData: {
        content: { transferOrderId: "111" }
      }
    });
    shallowComponent.update();

    expect(spyTokenModal).toHaveBeenCalledWith("111", "approve");
    //expect(spygetTransferInfomation).toHaveBeenCalledWith("111", "approve");
  });

  it("should close modal", () => {
    const shallowComponent = shallow(<Pendencies {...props} />);
    shallowComponent.instance().handleClose();

    expect(props.changeFactorTogle).toHaveBeenCalledWith(false);
    expect(props.closeModal).toHaveBeenCalled();
  });

  it("should invoke approveFromMobileCallback", async () => {
    const shallowComponent = shallow(<Pendencies {...props} />);
    shallowComponent.instance().approveFromMobileCallback("mock");

    expect(props.approveEFT).toHaveBeenCalledWith(undefined, "mock", false);
    await props
      .approveEFT()
      .then(() => expect(props.loadTransfers).toHaveBeenCalled());
  });
  it("should render with props correctly", () => {
    const mockProps = {
      openModal: jest.fn(),
      openToastr: jest.fn(),
      approveEFT: jest.fn(),
      denyEFT: jest.fn(),
      loadTransfers: jest.fn(),
      serverTime: new Date()
    };

    const wrapper = shallow(<Pendencies {...mockProps} />);
    const componentInstance = wrapper.instance();

    expect(componentInstance.props.openModal).toBe(mockProps.openModal);
    expect(componentInstance.props.openToastr).toBe(mockProps.openToastr);
    expect(componentInstance.props.approveEFT).toBe(mockProps.approveEFT);
    expect(componentInstance.props.denyEFT).toBe(mockProps.denyEFT);
    expect(componentInstance.props.loadTransfers).toBe(mockProps.loadTransfers);
    expect(componentInstance.props.serverTime).toBe(mockProps.serverTime);
  });
});
