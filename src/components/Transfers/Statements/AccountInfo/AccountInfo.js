import React from "react";
import { formatDocument } from "../../../../utils/formatNumber";
import { iconBankName } from "../../../../utils/getIconBankName";
import { translate } from "../../../../utils/i18n";
import Icon from "../../../common/Icon";

import {
  AccountInfoWrapper,
  Title,
  BankTitle,
  BankCode,
  BankName,
  Label,
  Text,
  Info,
  BankInfo,
  GridWrapper
} from "./styles";

function AccountInfo({ accountInfo, title, dataTest }) {
  const agencyNumberWithZeros = branchNumber => {
    const number = branchNumber.toString();
    if (number) {
      if (number.length === 4) return number;
      if (number.length === 3) return `0${number}`;
      if (number.length === 2) return `00${number}`;
      if (number.length === 1) return `000${number}`;
    }
  };

  const bankCodeWithZeros = bankCode => {
    const number = bankCode.toString();
    if (number) {
      if (number.length === 3) return number;
      if (number.length === 2) return `0${number}`;
      if (number.length === 1) return `00${number}`;
    }
  };

  return (
    <AccountInfoWrapper>
      <Title className="receiverAccount">{title}</Title>
      <BankInfo>
        <Icon
          type={iconBankName(accountInfo.bankCode)}
          width="40"
          height="40"
        />
        <BankTitle data-test={`BankInfo_${dataTest}`}>
          <BankCode>
            {bankCodeWithZeros(accountInfo.bankCode)} -{" "}
            <BankName>{accountInfo.bankName}</BankName>
          </BankCode>
        </BankTitle>
      </BankInfo>
      <GridWrapper>
        <Info>
          <Label>{translate("VOUCHER_FULL_NAME")}</Label>
          <Text>{accountInfo.name}</Text>
        </Info>
        <Info>
          <Label>
            {accountInfo.document && accountInfo.document.toString().length > 11
              ? "CNPJ"
              : "CPF"}
          </Label>
          <Text>{formatDocument(accountInfo.document)}</Text>
        </Info>
        <Info>
          <Label>{translate("VOUCHER_AGENCY")}</Label>
          <Text data-test={`VoucherAgency_${dataTest}`}>
            {agencyNumberWithZeros(accountInfo.branch)}
          </Text>
        </Info>
        <Info>
          <Label>{translate("VOUCHER_CASH_ACCOUNT")}</Label>
          <Text data-test={`VoucherCashAccount_${dataTest}`}>
            {accountInfo.cashAccount}
          </Text>
        </Info>
      </GridWrapper>
    </AccountInfoWrapper>
  );
}

export default AccountInfo;
