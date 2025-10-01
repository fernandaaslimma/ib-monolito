import React, { Fragment } from "react";
import { generate } from "shortid";
import { string, number, shape, arrayOf, func } from "prop-types";
import ShimmerLoading from "../../../../../common/ShimmerLoading";
import formatDate, { formatHour } from "../../../../../../utils/formatDate";
import {
  Wrapper,
  Content,
  SummaryRow,
  SignatureText,
  SignatureDate,
  Separator
} from "../styles";
import { renderDownloadContract } from "../SignedContractOverview";
import { translate } from "../../../../../../utils/i18n";
import DataItem from "../../../../DataItem";
import Hide from "../../../../../common/Hide/Hide";

export function renderTime(signature) {
  return (
    <SignatureDate>
      (
      {`${formatDate(signature.date)} ${translate("AT")} ${formatHour(
        signature.date
      )}`}
      )
    </SignatureDate>
  );
}

export function renderSignature(signature, index, signaturesLength) {
  if (signaturesLength === 1) {
    return (
      <SignatureText key={generate()}>
        {signature.name} {renderTime(signature)}
      </SignatureText>
    );
  } else if (signaturesLength === 2) {
    let append = "";
    if (index === 0) {
      append = ` ${translate("AND")} `;
    }
    return (
      <SignatureText key={generate()}>
        {signature.name} {renderTime(signature)}
        {append}
      </SignatureText>
    );
  } else if (signaturesLength >= 3) {
    let append = "";
    if (signaturesLength - index === 2) {
      append = ` ${translate("AND")} `;
    } else if (signaturesLength - index > 2) {
      append = ", ";
    }
    return (
      <SignatureText key={generate()}>
        {signature.name} {renderTime(signature)}
        {append}
      </SignatureText>
    );
  }
}

export function parseSignatures(signatures) {
  return signatures.map((signature, index) =>
    renderSignature(signature, index, signatures.length)
  );
}

function CorporationContracts({
  contract,
  getContractFile,
  formatted,
  loading
}) {
  if (loading) {
    return (
      <Fragment>
        <Hide below="md">
          <Wrapper>
            <Content left>
              <SummaryRow>
                <DataItem
                  title={translate("TRADE_DATE")}
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
                  title={translate("VALUE_OF_NATIONAL_CURRENCY")}
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
                  title={translate("VALUE_OF_FOREIGN_CURRENCY")}
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
                  title={translate("TYPE_OF_TRANSACTION")}
                  data={<ShimmerLoading />}
                />
              </SummaryRow>
            </Content>
            <Content right flexBasis={"auto"}>
              <SummaryRow paddingRight={"20"}>
                <DataItem title={"Signatures"} data={<ShimmerLoading />} />
              </SummaryRow>
            </Content>
          </Wrapper>
        </Hide>
        <Hide above="md">
          <Wrapper>
            <Content isCorporation>
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
              <SummaryRow>
                <DataItem
                  title={translate("NATURE_OF_EXCHANGE")}
                  data={<ShimmerLoading />}
                />
              </SummaryRow>
              <SummaryRow>
                <DataItem title={"Signatures"} data={<ShimmerLoading />} />
              </SummaryRow>
              <Separator order={4} />
              <Separator order={6} />
              <Separator order={7} />
              <Separator order={8} />
            </Content>
          </Wrapper>
        </Hide>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <Hide below="md">
        <Wrapper>
          <Content left>
            <SummaryRow>
              <DataItem
                title={translate("TRADE_DATE")}
                data={formatted.parsedSettlementDate}
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
                title={translate("VALUE_OF_NATIONAL_CURRENCY")}
                data={formatted.formattedLocalCurrency}
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
                title={translate("VALUE_OF_FOREIGN_CURRENCY")}
                data={formatted.formattedForeignCurrency}
              />
            </SummaryRow>
            <SummaryRow>
              <DataItem
                title={translate("NATURE_OF_EXCHANGE")}
                data={contract.fxNature}
              />
            </SummaryRow>
            <SummaryRow>
              <DataItem
                title={translate("TYPE_OF_TRANSACTION")}
                data={contract.type}
              />
            </SummaryRow>
          </Content>
          <Content right flexBasis={"auto"}>
            <SummaryRow paddingRight={"20"}>
              <DataItem
                title={"Signatures"}
                data={parseSignatures(contract.signatures)}
              />
            </SummaryRow>
          </Content>
          {renderDownloadContract({
            onClick: () => getContractFile(contract.contractId),
            isCorporation: true
          })}
        </Wrapper>
      </Hide>
      <Hide above="md">
        <Wrapper>
          <Content isCorporation>
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
            <SummaryRow>
              <DataItem
                title={translate("NATURE_OF_EXCHANGE")}
                data={contract.fxNature}
              />
            </SummaryRow>
            <SummaryRow>
              <DataItem
                title={"Signatures"}
                data={parseSignatures(contract.signatures)}
              />
            </SummaryRow>
            <Separator order={4} />
            <Separator order={6} />
            <Separator order={7} />
            <Separator order={8} />
          </Content>
          {renderDownloadContract({
            onClick: () => getContractFile(contract.contractId)
          })}
        </Wrapper>
      </Hide>
    </Fragment>
  );
}

CorporationContracts.propTypes = {
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
  }).isRequired,
  getContractFile: func.isRequired,
  formatted: shape({
    parsedSettlementDate: string,
    formattedForeignCurrency: string,
    formattedExchangeRate: string,
    formattedLocalCurrency: string
  }).isRequired
};

export default CorporationContracts;
