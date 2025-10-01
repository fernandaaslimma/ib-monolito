import React from "react";
import FillStep from "./FillStep";
import { Input } from "react-bocombbm-components";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import IndividualWireTransfer from "../IndividualWireTransfer";

jest.mock("../../../../utils/validations/EFT");
jest.mock("../../../../utils/i18n");
jest.mock("moment", () => () => ({
  format: () => "hash",
  startOf: () => ({ diff: () => 1 })
}));

global.document.getElementById = function() {
  return {
    querySelectorAll: function() {
      return [Input, Input, Input, Input, Input];
    }
  };
};

const thisProps = { currentStep: 1 };

const context = {
  props: {
    userInfo: {
      givenName: "Yuri",
      surname: "Ramos",
      document: "11111111111",
      corpId: 111
    },
    accounts: [{ accountNumber: "12345678" }, { accountNumber: "87654321" }],
    nextAvailableDate: "xpto",
    availableDateRanges: [
      { maxEndTime: 1605124811000, minStartTime: 1605103211 }
    ],
    transferData: { value: "5000,00", date: "" },
    loading: false,
    handleUserInputFavoredDataBank: jest.fn(),
    handleUserInputFavoredData: jest.fn(),
    banksList: ["mock"],
    originAccount: {
      number: "87654321"
    },
    favoredData: {
      favored: "",
      CNPJ: "",
      bank: "",
      agency: "",
      account: "",
      verifyDigit: "",
      name: ""
    }
  },
  state: {
    accounts: [{ accountNumber: "12345678" }, { accountNumber: "87654321" }],
    commonValidToMoveOn: {
      date: false,
      ammount: false
    },
    originAccount: {
      number: "87654321"
    },
    isScheduled: false,
    inputedDate: "11/20/2020",
    validAsScheduled: true,
    selectedAccount: { accountNumber: "12345678" }
  },
  checkAvailabilitySchedule: jest.fn(),
  setStateValue: jest.fn(),
  changeCommonValidDate: jest.fn(),
  changeOriginAccount: jest.fn()
};

describe("FillStep component", () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };
  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });

  it("Should match snapshot", () => {
    const component = render(
      <IndividualWireTransfer value={context}>
        <FillStep {...thisProps} />
      </IndividualWireTransfer>
    );

    expect(component).toMatchSnapshot();
  });
});
