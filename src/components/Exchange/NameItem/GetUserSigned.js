import React from "react";
import { isSelf } from "../../../utils/exchanges";
import { string, shape, arrayOf, bool } from "prop-types";
import { translate } from "../../../utils/i18n";
import { COMPLETED, SIGNED } from "../../../utils/constants";
import Icon from "../../common/Icon";
import { SignDate, SignerName, Info, Spacer } from "./styles";
import { strongGreen } from "../../../styles/settings";

import { formatDateWithHour } from "../../../utils/formatDate";
function GetUserSigned({ recipients }) {
  let isSelfRecipient = false;

  const recipientNameWithComplete = recipients.map(recipient => {
    if (recipient.status === COMPLETED || recipient.status === SIGNED) {
      isSelfRecipient = isSelf(recipient);
      return recipient.name;
    }
  });

  const recipientWithSignedDate = recipients.find(
    recipient => !!recipient.signedAt
  );

  return (
    <Info>
      <SignerName isSelf={isSelfRecipient}>
        {recipientNameWithComplete}{" "}
      </SignerName>
      <Spacer>
        <Icon type="Checked" color={strongGreen} data-test="signed" />
      </Spacer>{" "}
      {recipientWithSignedDate && (
        <SignDate>
          {translate("SIGNED_AT")}:{" "}
          {formatDateWithHour(recipientWithSignedDate.signedAt)}
        </SignDate>
      )}
    </Info>
  );
}
GetUserSigned.propTypes = {
  recipients: arrayOf(
    shape({
      email: string,
      embedded: bool,
      name: string,
      status: string,
      type: string
    })
  )
};
export default GetUserSigned;
