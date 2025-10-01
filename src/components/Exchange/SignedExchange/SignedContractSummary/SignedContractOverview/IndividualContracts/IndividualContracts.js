import React from "react";
import { string, number, shape, func } from "prop-types";
import ShimmerLoading from "../../../../../common/ShimmerLoading";
import { Wrapper, Content, SummaryRow, Separator } from "../styles";
import { renderDownloadContract } from "../SignedContractOverview";
import { translate } from "../../../../../../utils/i18n";
import DataItem from "../../../../DataItem";
import Hide from "../../../../../common/Hide/Hide";

function IndividualContracts({
  contract,
  getContractFile,
  formatted,
  loading
}) {
  if (loading) {
    return (
      <Wrapper>
        <Hide below="md">
          <Content>
            <SummaryRow>
              <DataItem
                title={translate("TYPE_OF_TRANSACTION")}
                data={<ShimmerLoading />}
              />
            </SummaryRow>
            <SummaryRow>
              <DataItem
                title={translate("VALUE_OF_FOREIGN_CURRENCY")}
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
              <DataItem
                title={translate("CURRENCY")}
                data={<ShimmerLoading />}
              />
            </SummaryRow>
            <SummaryRow>
              <DataItem
                title={translate("TRADE_DATE")}
                data={<ShimmerLoading />}
              />
            </SummaryRow>
            <SummaryRow>
              <DataItem
                title={translate("VALUE_OF_NATIONAL_CURRENCY")}
                data={<ShimmerLoading />}
              />
            </SummaryRow>
          </Content>
        </Hide>
        <Hide above="md">
          <Content>
            <SummaryRow>
              <DataItem
                title={translate("TYPE_OF_TRANSACTION")}
                data={<ShimmerLoading />}
              />
            </SummaryRow>
            <SummaryRow>
              <DataItem
                title={translate("TRADE_DATE")}
                data={<ShimmerLoading />}
              />
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
                title={translate("EXCHANGE_RATE")}
                data={<ShimmerLoading />}
              />
            </SummaryRow>
            <SummaryRow>
              <DataItem
                title={translate("CURRENCY")}
                data={<ShimmerLoading />}
              />
            </SummaryRow>
            <Separator />
            <Separator />
          </Content>
        </Hide>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Hide below="md">
        <Content>
          <SummaryRow>
            <DataItem
              title={translate("TYPE_OF_TRANSACTION")}
              data={contract.type}
            />
          </SummaryRow>
          <SummaryRow>
            <DataItem
              title={translate("VALUE_OF_FOREIGN_CURRENCY")}
              data={formatted.formattedForeignCurrency}
            />
          </SummaryRow>
          <SummaryRow>
            <DataItem
              title={translate("EXCHANGE_RATE")}
              data={formatted.formattedExchangeRate}
            />
          </SummaryRow>
          <SummaryRow>
            <DataItem
              title={translate("CURRENCY")}
              data={contract.foreignCurrency}
            />
          </SummaryRow>
          <SummaryRow>
            <DataItem
              title={translate("TRADE_DATE")}
              data={formatted.parsedSettlementDate}
            />
          </SummaryRow>
          <SummaryRow>
            <DataItem
              title={translate("VALUE_OF_NATIONAL_CURRENCY")}
              data={formatted.formattedLocalCurrency}
            />
          </SummaryRow>
        </Content>
        {renderDownloadContract({
          onClick: () => getContractFile(contract.contractId)
        })}
      </Hide>
      <Hide above="md">
        <Content>
          <SummaryRow>
            <DataItem
              title={translate("TYPE_OF_TRANSACTION")}
              data={contract.type}
            />
          </SummaryRow>
          <SummaryRow>
            <DataItem
              title={translate("TRADE_DATE")}
              data={formatted.parsedSettlementDate}
            />
          </SummaryRow>
          <SummaryRow>
            <DataItem
              title={translate("VALUE_OF_FOREIGN_CURRENCY")}
              data={formatted.formattedForeignCurrency}
            />
          </SummaryRow>
          <SummaryRow>
            <DataItem
              title={translate("VALUE_OF_NATIONAL_CURRENCY")}
              data={formatted.formattedLocalCurrency}
            />
          </SummaryRow>
          <SummaryRow>
            <DataItem
              title={translate("EXCHANGE_RATE")}
              data={formatted.formattedExchangeRate}
            />
          </SummaryRow>
          <SummaryRow>
            <DataItem
              title={translate("CURRENCY")}
              data={contract.foreignCurrency}
            />
          </SummaryRow>
          <Separator />
          <Separator />
        </Content>
        {renderDownloadContract({
          onClick: () => getContractFile(contract.contractId)
        })}
      </Hide>
    </Wrapper>
  );
}

IndividualContracts.propTypes = {
  contract: shape({
    contractId: string,
    foreignAmount: number,
    foreignCurrency: string,
    localAmount: number,
    localCurrency: string,
    tradeDate: string,
    type: string,
    rate: number
  }).isRequired,
  getContractFile: func.isRequired,
  formatted: shape({
    parsedSettlementDate: string,
    formattedForeignCurrency: string,
    formattedExchangeRate: string,
    formattedLocalCurrency: string
  }).isRequired
};

export default IndividualContracts;
