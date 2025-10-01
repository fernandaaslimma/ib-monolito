import React from "react";
import { string } from "prop-types";

import { Wrapper, Separator, SummaryRow } from "./styles";

import DataItem from "../../DataItem";
import { translate } from "../../../../utils/i18n";

function ContractAccount({ bank, account, country, owner, swift, chips, aba }) {
  return (
    <Wrapper isIntermediaryAccount={!country}>
      <SummaryRow>
        <DataItem title={translate("BANK")} data={bank} />
      </SummaryRow>
      <SummaryRow>
        <DataItem title={translate("SWIFT")} data={swift} />
      </SummaryRow>
      <SummaryRow>
        <DataItem title={translate("CHIPS")} data={chips} />
      </SummaryRow>
      <SummaryRow>
        <DataItem title={translate("ABA")} data={aba} />
      </SummaryRow>
      {country && (
        <SummaryRow>
          <DataItem title={translate("COUNTRY")} data={country} />
        </SummaryRow>
      )}
      {owner && (
        <SummaryRow>
          <DataItem title={translate("OWNER")} data={owner} />
        </SummaryRow>
      )}
      <SummaryRow>
        <DataItem title={translate("ACCOUNT")} data={account} />
      </SummaryRow>
      <Separator />
    </Wrapper>
  );
}

ContractAccount.defaultProps = {
  bank: null,
  account: null,
  country: null,
  owner: null,
  swift: null,
  chips: null,
  aba: null
};

ContractAccount.propTypes = {
  bank: string,
  account: string,
  country: string,
  owner: string,
  swift: string,
  chips: string,
  aba: string
};

export default ContractAccount;
