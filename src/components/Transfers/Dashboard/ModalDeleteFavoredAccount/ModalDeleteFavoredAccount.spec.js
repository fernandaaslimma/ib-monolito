import React from "react";
import { shallow } from "enzyme";
import ModalDeleteFavoredAccount from "./ModalDeleteFavoredAccount";

const props = {
  onDelete: jest.fn(),
  closeModal: jest.fn(),
  favoredList: {
    id: 111,
    document: "07066237003300",
    name: "VITOR PICAZO",
    account: {
      bankCode: "231",
      bankName: "BANCO BOAVISTA INTERATLANTICO S.A.",
      branch: "1111",
      id: 165,
      number: "1111",
      verifyingDigit: "1"
    }
  }
};

describe("ModalDeleteFavoredAccount component", () => {
  it("should match snapshot", () => {
    expect(shallow(<ModalDeleteFavoredAccount />)).toMatchSnapshot();
  });

  it("should match snapshot with props", () => {
    expect(shallow(<ModalDeleteFavoredAccount {...props} />)).toMatchSnapshot();
  });
});
