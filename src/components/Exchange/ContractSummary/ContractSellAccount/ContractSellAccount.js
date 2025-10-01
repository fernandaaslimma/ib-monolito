import React from "react";
import { string, bool } from "prop-types";

import { Wrapper, Separator, SummaryRow } from "./styles";

import DataItem from "../../DataItem";
import { translate } from "../../../../utils/i18n";
import ShimmerLoading from "../../../common/ShimmerLoading";

function ContractSellAccount({
  bank,
  owner,
  bankId,
  agency,
  account,
  document,
  loading
}) {
  if (loading) {
    return (
      <Wrapper>
        <SummaryRow>
          <DataItem title={translate("BANK")} data={<ShimmerLoading />} />
        </SummaryRow>
        <SummaryRow>
          <DataItem title={translate("BANK")} data={<ShimmerLoading />} />
        </SummaryRow>
        <SummaryRow>
          <DataItem title={translate("AGENCY")} data={<ShimmerLoading />} />
        </SummaryRow>
        <SummaryRow>
          <DataItem title={translate("ACCOUNT")} data={<ShimmerLoading />} />
        </SummaryRow>
        <SummaryRow>
          <DataItem title={translate("OWNER")} data={<ShimmerLoading />} />
        </SummaryRow>
        <SummaryRow>
          <DataItem title={translate("SSN")} data={<ShimmerLoading />} />
        </SummaryRow>
        <Separator />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <SummaryRow>
        <DataItem title={translate("BANK")} data={bank} />
      </SummaryRow>
      <SummaryRow>
        <DataItem title={translate("BANK")} data={bankId} />
      </SummaryRow>
      <SummaryRow>
        <DataItem title={translate("AGENCY")} data={agency} />
      </SummaryRow>
      <SummaryRow>
        <DataItem title={translate("ACCOUNT")} data={account} />
      </SummaryRow>
      <SummaryRow>
        <DataItem title={translate("OWNER")} data={owner} />
      </SummaryRow>
      <SummaryRow>
        <DataItem title={translate("SSN")} data={document} />
      </SummaryRow>
      <Separator />
    </Wrapper>
  );
}

ContractSellAccount.defaultProps = {
  loading: null,
  bank: null,
  owner: null,
  bankId: null,
  agency: null,
  account: null,
  document: null
};

ContractSellAccount.propTypes = {
  loading: bool,
  bank: string,
  owner: string,
  bankId: string,
  agency: string,
  account: string,
  document: string
};

export default ContractSellAccount;
