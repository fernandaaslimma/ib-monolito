import { shallow } from "enzyme";
import React from "react";
import { translate } from "../../../../utils/i18n";
import AccountInfo from "./AccountInfo";

jest.mock("../../../../utils/i18n", () => {
  return {
    translate: id => id,
    getLanguage: () => "en-US",
    isZhCN: () => false,
    getDateFieldPlaceholderByLocale: () => "MM/DD/YYYY"
  };
});

const receiverAccount = {
  accountId: 12436220,
  accountVerifyingDigit: "8",
  accountNumber: "12312",
  accountBranch: "1231",
  accountType: "CC",
  bankISPB: "60746948",
  bankCode: "2370",
  partyName: "VITOR PICAZO",
  partyDocument: "07066237003300",
  name: "VITOR PICAZO",
  document: "07066237003",
  branch: "1231",
  cashAccount: "12312-8",
  bankName: "QUALITYWARE 1106"
};

const senderAccount = {
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
};

describe("AccountInfo component", () => {
  it("should render correctly the destination account info", () => {
    const component = shallow(
      <AccountInfo
        title={translate("VOUCHER_DESTINATION_ACCOUNT")}
        accountInfo={receiverAccount}
      />
    );
    expect(component).toMatchSnapshot();
  });
  it("should render correctly the sender account info", () => {
    const component = shallow(
      <AccountInfo
        title={translate("VOUCHER_ORIGIN_ACCOUNT")}
        accountInfo={senderAccount}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
