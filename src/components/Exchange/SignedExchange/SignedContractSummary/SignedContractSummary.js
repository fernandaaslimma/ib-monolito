import React from "react";
import { string, number, shape, bool } from "prop-types";

import { SummaryWrapper, SummaryRow } from "./styles";
import Card from "../../../common/Card";
import SignedContractOverview from "./SignedContractOverview";
import { translate } from "../../../../utils/i18n";

function SignedContractSummary({ contract, loading }) {
  return (
    <SummaryWrapper data-test="SignedContract">
      <SummaryRow operation>
        <Card
          data-test={`Card-${contract.contractId}`}
          title={`${translate("CONTRACT")} ${contract.contractId}`}
          icon="Papers"
        >
          <SignedContractOverview contract={contract} loading={loading} />
        </Card>
      </SummaryRow>
    </SummaryWrapper>
  );
}

SignedContractSummary.defaultProps = {
  contract: shape({
    contractId: null,
    foreignAmount: null,
    foreignCurrency: null,
    localAmount: null,
    localCurrency: null,
    tradeDate: null,
    type: null,
    rate: null
  }),
  loading: true
};

SignedContractSummary.propTypes = {
  contract: shape({
    contractId: string,
    foreignAmount: number,
    foreignCurrency: string,
    localAmount: number,
    localCurrency: string,
    tradeDate: string,
    type: string,
    rate: number
  }),
  loading: bool
};

export default SignedContractSummary;
