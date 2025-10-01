import React from "react";
import { shallow } from "enzyme";

import StatementsCards from "./StatementsCards";
import TransferDetails from "../../TransferDetails";
import AnimatedBottonSheet from "../../../../common/AnimatedBottomSheet";
import { TRANSFER_SENT } from "../../../../../utils/constants";
import { Button } from "react-bocombbm-components/";
import { Line } from "./styles";

jest.mock("../../../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

jest.mock("../../../../../utils/formatDate", () => ({
  getShortDateStringFromEpoch: () => "Wed, 2nd Dec"
}));

const formatTitle = jest.fn(() => "TEXTO");
const maskValues = jest.fn(e => e);
const getBank = jest.fn(() => "BBM");

jest.mock("moment", () => () => ({
  diff: (value, parameter) => {
    if (parameter === "years" && value === "2020-12-02T12:33:54.271Z") {
      return 0;
    }
    if (parameter === "days" && value === "2020-12-02T12:33:54.271Z") {
      return 0;
    }
    if (parameter === "days" && value === "2020-12-03T12:33:54.271Z") {
      return 1;
    }
    return 2;
  },
  format: () => "2019"
}));

const futureEvents = {
  date: "2021-12-24",
  events: [
    {
      recipient: {
        saveRecipientAccount: false,
        name: "VITOR PICAZO",
        bankId: "237",
        bankName: "QUALITYWARE 1106",
        bankBranch: "6666",
        bankAccount: "77777777777",
        taxId: "07066237003300",
        document: "11111111111",
        number: "111"
      },
      approvers: [
        { approverId: "13798150028", name: "PJ 8", hasApproved: true }
      ],
      requiredApprovements: 1,
      transferOrderId: "0de4ce33-8cb5-11eb-ab2d-1e4c49dc1ef9",
      originAccount: "107 2 304983-9",
      dueDate: 1640354400000,
      amount: -0.5,
      status: "waitingSettlement",
      description: "Transferência agendada",
      date: "2021-12-24",
      settled: false
    }
  ]
};

const props = {
  maskValues,
  getBank,
  defaultCurrency: "R$",
  formatTitle,
  isFuture: false,
  item: {
    availableAmount: 2000,
    blockedAmount: 0,
    totalAmount: 1000,
    eventClass: TRANSFER_SENT,
    date: "2020-12-02T12:33:54.271Z",
    events: [
      {
        amount: -800.5,
        date: "2019-10-20T12:33:54.271Z",
        description: "TRANSFERÊNCIA ENTRE CONTAS DE MESMA TITULARIDADE",
        type: "Débito",
        settled: true,
        id: 0,
        eventClass: TRANSFER_SENT,
        counterParty: {
          partyName: "mock",
          partyDocument: "1",
          number: "111",
          bankCode: "480",
          accountNumber: "111",
          accountBranch: "111",
          verifyingDigit: "111",
          authenticationCode: "mock"
        }
      },
      {
        amount: -800.5,
        date: "2019-10-20T12:33:54.271Z",
        description: "TRANSFERÊNCIA ENTRE CONTAS DE MESMA TITULARIDADE",
        type: "Débito",
        settled: true,
        id: 1,
        eventClass: TRANSFER_SENT,
        counterParty: {
          partyName: "mock",
          partyDocument: "1",
          number: "111",
          bankCode: "480",
          accountNumber: "111",
          accountBranch: "111",
          verifyingDigit: "111",
          authenticationCode: "mock"
        }
      }
    ]
  },
  account: {
    account: 13335,
    accountNumber: "107 2 304983-9",
    totalBalance: 1113.15,
    blockedBalance: 0,
    availableBalance: 1113.15,
    verifyingDigit: "9",
    bankISPB: "15114366",
    date: "2021-06-15",
    bankCode: "107",
    branch: "2",
    number: "304983",
    name: "VITOR PICAZO",
    document: "07066237003300",
    bankName: "BANCO BOCOM BBM",
    cashAccount: "304974"
  }
};

describe("Statements Statements Cards", () => {
  it("should match snapshot today", () => {
    expect(shallow(<StatementsCards {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot yesterday", () => {
    props.item.date = "2020-12-03T12:33:54.271Z";
    expect(shallow(<StatementsCards {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot some day", () => {
    props.item.date = "2020-12-04T12:33:54.271Z";
    expect(shallow(<StatementsCards {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with last year", () => {
    props.item.date = "2019-12-04T12:33:54.271Z";
    expect(shallow(<StatementsCards {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with bloqued amout", () => {
    props.item.blockedAmount = 3000;
    expect(shallow(<StatementsCards {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot as future card", () => {
    const newProps = { ...props, isFuture: true, item: futureEvents };
    expect(shallow(<StatementsCards {...newProps} />)).toMatchSnapshot();
  });
});

describe("Testing buttons click", () => {
  it("should call animatedBottomSheet", () => {
    const component = shallow(<StatementsCards {...props} />);

    component
      .find(Line)
      .at(0)
      .simulate("click");
  });

  it("should close TransferDetails animatedBottomSheet", () => {
    const component = shallow(<StatementsCards {...props} />);

    component
      .find(AnimatedBottonSheet)
      .at(0)
      .prop("onClickInBack")();
  });

  it("should call renderVoucher callback", () => {
    const component = shallow(<StatementsCards {...props} />);

    component.find(TransferDetails).prop("renderVoucher")();

    expect(component).toMatchSnapshot();
  });

  it("should close VoucherWrapper animatedBottomSheet", () => {
    const component = shallow(<StatementsCards {...props} />);

    component
      .find(AnimatedBottonSheet)
      .at(1)
      .prop("onClickInBack")();
  });

  it("should call renderVoucher callback", () => {
    const component = shallow(<StatementsCards {...props} />);

    component.find(TransferDetails).prop("closeVoucher")();

    expect(component).toMatchSnapshot();
  });

  it("should close renderVoucher", () => {
    const component = shallow(<StatementsCards {...props} />);

    component.find(Button).simulate("click");

    expect(component).toMatchSnapshot();
  });
});
