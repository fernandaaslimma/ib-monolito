import moment from "moment";
import React from "react";
import { Button } from "react-bocombbm-components";
import { TRANSFER_SENT } from "../../../../utils/constants"; //eslint-disable-line
import { translate } from "../../../../utils/i18n";
import Avatar from "../../../common/Avatar";

import {
  WrapperAnimated,
  AnimatedName,
  AnimatedDate,
  AnimatedAmount,
  ButtonContent
} from "./styles";

function TransferDetails({
  transferContent,
  maskValues,
  injectCurrency,
  renderVoucher,
  closeVoucher
}) {
  const formatDate = date => {
    if (date !== undefined) {
      const locale = moment().locale();
      return locale === "en"
        ? moment(date).format("MMM Do YYYY")
        : moment(date).format("DD MMM YYYY");
    }
  };
  return (
    <WrapperAnimated>
      <Avatar
        name={transferContent.receiverInfo.name}
        fontSize={18}
        avatarSize={64}
      />

      <AnimatedName>{transferContent.receiverInfo.name}</AnimatedName>
      <AnimatedDate>
        {formatDate(transferContent.transferInfo.date)}
      </AnimatedDate>
      <AnimatedAmount
        dataTest={"TransferDetailedAmount"}
        value={transferContent.transferInfo.amount}
      >
        {maskValues(injectCurrency(transferContent.transferInfo.amount))}
      </AnimatedAmount>

      {transferContent && (
        <ButtonContent>
          {transferContent.transferType === TRANSFER_SENT &&
          transferContent.receiverInfo &&
          transferContent.receiverInfo.name &&
          transferContent.receiverInfo.name.length > 0 ? (
            <Button
              dataTest="openVoucherButton"
              type="primary"
              onClick={() => renderVoucher()}
            >
              {translate("VIEW_BTN")}
            </Button>
          ) : (
            <Button
              dataTest="closeVoucherButton"
              type="outline"
              onClick={() => closeVoucher()}
            >
              {translate("CLOSE")}
            </Button>
          )}
        </ButtonContent>
      )}
    </WrapperAnimated>
  );
}

export default TransferDetails;
