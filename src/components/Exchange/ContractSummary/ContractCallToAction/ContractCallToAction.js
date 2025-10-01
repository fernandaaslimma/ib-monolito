import React from "react";
import { string, func, bool, shape } from "prop-types";

import { Wrapper } from "./styles";

import Link from "../../../common/Link";
import { translate } from "../../../../utils/i18n";
import { VOID } from "../../../../utils/constants";

function ContractCallToAction({
  contractId,
  sign,
  signLoadingId,
  width,
  isPending,
  marginTop,
  group
}) {
  return (
    <Wrapper data-test="signButton" marginTop={marginTop}>
      <Link
        href={VOID}
        onClick={() => sign(contractId, group && group.id)}
        isCallToAction
        disabled={!!signLoadingId}
        loading={signLoadingId && signLoadingId === contractId}
        width={width}
        isPending={isPending}
        data-test="link"
      >
        {translate("PROCEED_TO_SIGN")}
      </Link>
    </Wrapper>
  );
}

ContractCallToAction.propTypes = {
  group: shape({
    id: string
  }),
  contractId: string.isRequired,
  signLoadingId: string,
  sign: func.isRequired,
  width: string,
  isPending: bool,
  marginTop: string
};

export default ContractCallToAction;
