import React from "react";
import formatDate from "../../../../utils/formatDate";
import { translate } from "../../../../utils/i18n";

import {
  VoucherContent,
  VoucherTitle,
  VoucherDate,
  VoucherLine,
  VoucherAmount,
  VoucherAmountDisclaimer,
  AuthCode,
  GridWrapper,
  Info
} from "./styles";
import formatNumber from "../../../../utils/formatNumber";
import AccountInfo from "../AccountInfo/AccountInfo";
import { Title } from "../AccountInfo/styles";

function Voucher({
  transferContent,
  defaultCurrency,
  isOpenVoucherBottomSheet = true,
  desktop = false
}) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    !desktop && ref.current.scrollIntoView(true);
  }, [desktop]);

  const formatValues = value => formatNumber(Math.abs(value), { digits: 2 });

  return (
    <div ref={ref}>
      <VoucherContent dataTest={"VoucherWrapper"}>
        <GridWrapper>
          <Info>
            <VoucherTitle dataTest={"VoucherTitle"}>
              {translate("DEFAULT_TRANSFER_VOUCHER_TITLE")}
            </VoucherTitle>
            <VoucherDate>
              {formatDate(transferContent.transferInfo.date)}
            </VoucherDate>
          </Info>
          <Info>
            <VoucherAmountDisclaimer>
              {translate("VOUCHER_TRANSFER_VALUE")}
            </VoucherAmountDisclaimer>
            <VoucherAmount data-test="VoucherAmount">{`${defaultCurrency} ${formatValues(
              transferContent.transferInfo.amount
            )}`}</VoucherAmount>
          </Info>
        </GridWrapper>

        {!desktop && <VoucherLine />}
        {isOpenVoucherBottomSheet && (
          <AccountInfo
            dataTest="Destination"
            accountInfo={transferContent.receiverInfo}
            title={translate("VOUCHER_DESTINATION_ACCOUNT")}
            desktop={true}
          />
        )}
        <VoucherLine />
        {isOpenVoucherBottomSheet && (
          <AccountInfo
            dataTest="Origin"
            accountInfo={transferContent.senderInfo}
            title={translate("VOUCHER_ORIGIN_ACCOUNT")}
          />
        )}
        <VoucherLine />

        <Title>{translate("VOUCHER_AUTH_CODE")}</Title>
        <AuthCode data-test={"AuthCode"}>
          {transferContent.transferInfo.authenticationCode}
        </AuthCode>
      </VoucherContent>
    </div>
  );
}

export default Voucher;
