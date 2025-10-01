import { shallow } from "enzyme";
import React from "react";
import { Button } from "react-bocombbm-components";

import TransferDetails from "./TransferDetails";

const props = {
  maskValues: jest.fn(),
  getBank: jest.fn(),
  formatTitle: jest.fn(),
  injectCurrency: jest.fn(),
  renderVoucher: jest.fn(),
  closeVoucher: jest.fn(),
  transferContent: {
    receiverInfo: {
      amount: -800.5,
      date: "2019-10-20T12:33:54.271Z",
      description: "TRANSFERÊNCIA ENTRE CONTAS DE MESMA TITULARIDADE",
      type: "Débito",
      id: 0,
      counterParty: {
        partyName: "mock",
        partyDocument: "1",
        authenticationCode: "mock"
      }
    },
    senderInfo: {
      amount: -800.5,
      date: "2019-10-20T12:33:54.271Z",
      description: "TRANSFERÊNCIA ENTRE CONTAS DE MESMA TITULARIDADE",
      type: "Débito",
      id: 0,
      counterParty: {
        partyName: "mock",
        partyDocument: "1",
        authenticationCode: "mock"
      }
    },
    transferInfo: {
      amount: -800.5,
      date: "2019-10-20T12:33:54.271Z",
      description: "TRANSFERÊNCIA ENTRE CONTAS DE MESMA TITULARIDADE",
      type: "Débito",
      id: 0,
      counterParty: {
        partyName: "mock",
        partyDocument: "1",
        authenticationCode: "mock"
      }
    }
  }
};

describe("TransferDetails component", () => {
  it("should match snapshot", () => {
    const component = shallow(<TransferDetails {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("should call close detailed transfer modal", () => {
    const component = shallow(<TransferDetails {...props} />);

    component
      .find(Button)
      .at(0)
      .simulate("click");

    expect(props.closeVoucher).toHaveBeenCalled();
  });
});
