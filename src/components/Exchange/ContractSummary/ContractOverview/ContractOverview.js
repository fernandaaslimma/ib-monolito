import React from "react";
import { string, number, oneOfType, bool } from "prop-types";

import { Wrapper, Separator, SummaryRow } from "./styles";

import DataItem from "../../DataItem";
import { translate } from "../../../../utils/i18n";
import formatNumber from "../../../../utils/formatNumber";
import { BUY } from "../../../../utils/constants";
import ShimmerLoading from "../../../common/ShimmerLoading";

function ContractOverview({
  typeOfExchange,
  settlementDate,
  valueOfForeignCurrency,
  valueOfNationalCurrency,
  natureOfExchange,
  localCurrency,
  foreignCurrency,
  exchangeRate,
  loading
}) {
  if (loading) {
    return (
      <Wrapper>
        <SummaryRow>
          <DataItem
            title={translate("TYPE_OF_TRANSACTION")}
            data={<ShimmerLoading />}
          />
        </SummaryRow>
        <SummaryRow>
          <DataItem title={translate("CURRENCY")} data={<ShimmerLoading />} />
        </SummaryRow>
        <SummaryRow>
          <DataItem
            title={translate("VALUE_OF_FOREIGN_CURRENCY")}
            data={<ShimmerLoading />}
          />
        </SummaryRow>
        <SummaryRow>
          <DataItem
            title={translate("VALUE_OF_NATIONAL_CURRENCY")}
            data={<ShimmerLoading />}
          />
        </SummaryRow>
        <SummaryRow>
          <DataItem
            title={translate("NATURE_OF_EXCHANGE")}
            data={<ShimmerLoading />}
          />
        </SummaryRow>
        <SummaryRow>
          <DataItem
            title={translate("EXCHANGE_RATE")}
            data={<ShimmerLoading />}
          />
        </SummaryRow>
        <SummaryRow>
          <DataItem title={translate("TRADE_DATE")} data={<ShimmerLoading />} />
        </SummaryRow>
        <Separator />
        <Separator />
      </Wrapper>
    );
  }

  const isBuy = typeOfExchange === BUY;
  const formattedForeignCurrency = formatNumber(valueOfForeignCurrency, {
    currency: foreignCurrency,
    digits: 2
  });
  const formattedLocalCurrency = formatNumber(valueOfNationalCurrency, {
    currency: localCurrency,
    digits: 2
  });
  const formattedExchangeRate = formatNumber(exchangeRate);

  return (
    <Wrapper isBuy={isBuy}>
      <SummaryRow>
        <DataItem
          title={translate("TYPE_OF_TRANSACTION")}
          data={typeOfExchange}
        />
      </SummaryRow>
      <SummaryRow>
        <DataItem title={translate("CURRENCY")} data={foreignCurrency} />
      </SummaryRow>
      <SummaryRow>
        <DataItem
          title={translate("VALUE_OF_FOREIGN_CURRENCY")}
          data={formattedForeignCurrency}
        />
      </SummaryRow>
      <SummaryRow>
        <DataItem
          title={translate("VALUE_OF_NATIONAL_CURRENCY")}
          data={formattedLocalCurrency}
        />
      </SummaryRow>
      <SummaryRow>
        <DataItem
          title={translate("NATURE_OF_EXCHANGE")}
          data={natureOfExchange}
        />
      </SummaryRow>
      <SummaryRow>
        <DataItem
          title={translate("EXCHANGE_RATE")}
          data={formattedExchangeRate}
        />
      </SummaryRow>
      <SummaryRow>
        <DataItem title={translate("TRADE_DATE")} data={settlementDate} />
      </SummaryRow>
      <Separator />
      <Separator />
    </Wrapper>
  );
}

ContractOverview.defaultProps = {
  loading: false,
  typeOfExchange: null,
  settlementDate: null,
  valueOfForeignCurrency: null,
  valueOfNationalCurrency: null,
  natureOfExchange: null,
  localCurrency: null,
  foreignCurrency: null,
  exchangeRate: null
};

ContractOverview.propTypes = {
  loading: bool,
  typeOfExchange: string,
  settlementDate: string,
  valueOfForeignCurrency: oneOfType([string, number]),
  valueOfNationalCurrency: oneOfType([string, number]),
  natureOfExchange: string,
  localCurrency: string,
  foreignCurrency: string,
  exchangeRate: number
};

export default ContractOverview;
