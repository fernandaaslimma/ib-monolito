import React from "react";
import { string, number, shape, arrayOf } from "prop-types";

import { IconWrapper, DownloadLink } from "./styles";
import formatNumber from "../../../../../utils/formatNumber";
import Icon from "../../../../common/Icon";
import { white } from "../../../../../styles/settings";
import { VOID } from "../../../../../utils/constants";
import CorporationContracts from "./CorporationContracts";
import IndividualContracts from "./IndividualContracts";
import { formatDateToLocale } from "../../../../../utils/formatDate";

export function renderDownloadContract({ onClick, isCorporation = false }) {
  return (
    <DownloadLink
      isCorporation={isCorporation}
      id="SignedContractOverviewDownloadLink"
    >
      <a
        href={VOID}
        onClick={onClick}
        data-test="SignedContractOverview_Download"
      >
        <IconWrapper>
          <Icon type="Download" color={white} width="22" height="20" />
        </IconWrapper>
      </a>
    </DownloadLink>
  );
}

function SignedContractOverview({ contract, getContractFile, loading }) {
  const formattedForeignCurrency = formatNumber(contract.foreignAmount, {
    currency: contract.foreignCurrency,
    digits: 2
  });
  const formattedLocalCurrency = formatNumber(contract.localAmount, {
    currency: contract.localCurrency,
    digits: 2
  });
  const formattedExchangeRate = formatNumber(contract.rate);
  const parsedSettlementDate = formatDateToLocale(contract.tradeDate);

  if (contract.signatures && contract.signatures.length > 0) {
    return (
      <CorporationContracts
        contract={contract}
        getContractFile={getContractFile}
        formatted={{
          parsedSettlementDate,
          formattedExchangeRate,
          formattedForeignCurrency,
          formattedLocalCurrency
        }}
        loading={loading}
      />
    );
  }

  return (
    <IndividualContracts
      contract={contract}
      getContractFile={getContractFile}
      formatted={{
        parsedSettlementDate,
        formattedExchangeRate,
        formattedForeignCurrency,
        formattedLocalCurrency
      }}
      loading={loading}
    />
  );
}

SignedContractOverview.defaultProps = {
  contract: shape({
    contractId: null,
    foreignAmount: null,
    foreignCurrency: null,
    localAmount: null,
    localCurrency: null,
    tradeDate: null,
    type: null,
    rate: null,
    fxNature: null,
    signatures: []
  })
};

SignedContractOverview.propTypes = {
  contract: shape({
    contractId: string,
    foreignAmount: number,
    foreignCurrency: string,
    localAmount: number,
    localCurrency: string,
    tradeDate: string,
    type: string,
    rate: number,
    fxNature: string,
    signatures: arrayOf(shape({ name: string, date: string }))
  })
};

export default SignedContractOverview;
