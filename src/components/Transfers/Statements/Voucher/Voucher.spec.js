import React from "react";
import { mount } from "enzyme";
import Voucher from "./Voucher";

jest.mock("../../../../utils/formatDate", () => ({
  __esModule: true, // this property makes it work
  default: date => date,
  getShortDateStringFromEpoch: () => "Wed, 2nd Dec",
  formatDate: date => date
}));

const props = {
  transferContent: {
    transferInfo: {
      absAmount: 1913.13,
      amount: 1913.13,
      date: "2021-02-16",
      description: "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
      type: "Débito",
      settled: true,
      eventClass: "TransferenciaEnviada",
      id: 12435889,
      counterParty: {
        accountId: 0,
        accountVerifyingDigit: "string",
        accountNumber: "string",
        accountBranch: "string",
        accountType: "string",
        bankISPB: "string",
        bankCode: "string",
        partyName: "Jane Lucia",
        partyDocument: "string"
      }
    },
    receiverInfo: {
      accountId: 0,
      accountVerifyingDigit: "string",
      accountNumber: "string",
      accountBranch: "string",
      accountType: "string",
      bankISPB: "string",
      bankCode: "string",
      partyName: "Jane Lucia",
      partyDocument: "string",
      name: "Jane Lucia",
      document: "string",
      branch: "string",
      cashAccount: "string-X",
      bankName: ""
    },
    senderInfo: {
      account: 6455,
      accountNumber: "107 2 304020-3",
      totalBalance: 60009.01,
      blockedBalance: 0,
      availableBalance: 60009.01,
      verifyingDigit: "3",
      bankISPB: "15114366",
      date: "2018-05-04",
      bankCode: "107",
      branch: 2,
      number: 304020,
      name: "cliente2740",
      document: "53328506110",
      bankName: "BANCO BOCOM BBM",
      cashAccount: "304020-3"
    },
    transferType: "TransferenciaEnviada"
  },
  defaultCurrency: "USD",
  isOpenVoucherBottomSheet: true,
  desktop: true
};

describe("Voucher component", () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };
  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });
  it("Should render component to match snapshot", () => {
    const scrollIntoView = jest.fn();
    const useRefSpy = jest
      .spyOn(React, "useRef")
      .mockReturnValueOnce({ current: { scrollIntoView } });

    const component = mount(<Voucher {...props} />);
    expect(component).toMatchSnapshot();
    expect(useRefSpy).toHaveBeenCalled();
  });
});
