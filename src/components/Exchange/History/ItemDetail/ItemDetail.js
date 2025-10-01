import React, { useContext } from "react";
import FooterButtons from "../../../common/FooterButtons";
import {
  getDateFieldPlaceholderByLocale,
  getLanguage,
  translate
} from "../../../../utils/i18n";
import { redirect } from "../../../../utils/redirect";
import {
  Container,
  Currency,
  Span,
  Subtitle,
  Title,
  Value,
  ValueContainer
} from "./styles";
import { Context } from "../exchangeHistoryContext";
import formatNumber from "../../../../utils/formatNumber";
import moment from "moment";
import { rem } from "../../../../styles/tools";

const ItemDetail = ({ stepBack }) => {
  const { currentItem } = useContext(Context);

  return (
    <div>
      {currentItem && (
        <div>
          <Container data-test="container">
            <Title data-test="exchangeSummary">
              {translate("EXCHANGE_SUMMARY")}
            </Title>
            <Subtitle data-test="convertedValue">
              {translate("CONVERTED_VALUE")}
            </Subtitle>
            <ValueContainer>
              <Currency data-test="currency">
                {currentItem.target.currency}
              </Currency>
              <Value data-test="value">
                {formatNumber(currentItem.target.total, { digits: 2 })}
              </Value>
            </ValueContainer>
            <Subtitle data-test="beneficiaryLabel">
              {translate("EXCHANGE_BENEFICIARY")}
            </Subtitle>
            <Span data-test="beneficiaryName">
              {currentItem.target.name && currentItem.target.name}
            </Span>
            <div style={{ marginTop: rem(8) }}>
              <Span data-test="beneficiaryAccount">
                {translate("EXCHANGE_ACCOUNT")}{" "}
              </Span>
              {currentItem.target.account.number && (
                <Span>{currentItem.target.account.number}</Span>
              )}
            </div>
            <div style={{ marginTop: rem(8) }}>
              <Span data-test="beneficiaryBank">
                {translate("EXCHANGE_BANK")}{" "}
              </Span>
              {currentItem.target.account.bank.name && (
                <Span>{currentItem.target.account.bank.name}</Span>
              )}
            </div>
            <div style={{ marginTop: rem(8) }}>
              <Span data-test="beneficiarySwift">
                {translate("SWIFTCode")}{" "}
              </Span>
              {currentItem.target.account.bank.swift && (
                <Span>{currentItem.target.account.bank.swift}</Span>
              )}
            </div>
            <Subtitle data-test="debitedAccountLabel">
              {translate("EXCHANGE_HISTORY_DEBITED_ACCOUNT")}
            </Subtitle>
            <Span data-test="debitedAccountNumber">
              {currentItem.origin.account.bankCode}{" "}
              {currentItem.origin.account.branch}{" "}
              {currentItem.origin.account.number.slice(
                -currentItem.origin.account.number.length,
                -1
              )}
              -{currentItem.origin.account.number.slice(-1)}
            </Span>
            <Subtitle data-test="amountDebited">
              {translate("AMOUNT_DEBITED")}
            </Subtitle>
            <Span data-test="originalCurrency">{`${
              currentItem.origin.currency
            } ${formatNumber(currentItem.origin.total, { digits: 2 })}`}</Span>
            <Subtitle data-test="fxNatureLabel">
              {translate("EXCHANGE_TYPE_OPERATION")}
            </Subtitle>
            <Span data-test="fxNature">{currentItem.fxNature.description}</Span>
            <Subtitle data-test="rateLabel">
              {translate("EXCHANGE_PRICE")}
            </Subtitle>
            <Span data-test="rate">
              {`${
                currentItem.origin.currency
              } ${currentItem.ratesAndFees.currencyConversionRate.toLocaleString(
                getLanguage(),
                {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 20
                }
              )}`}
            </Span>
            <Subtitle data-test="feesLabel">
              {translate("EXCHANGE_FEES")}
            </Subtitle>
            <Span data-test="fees">
              {`${currentItem.origin.currency} ${formatNumber(
                currentItem.ratesAndFees.totalSpread,
                { digits: 2 }
              )}`}
            </Span>
            <Subtitle data-test="iofLabel">
              {translate("EXCHANGE_IOF")}
            </Subtitle>
            <Span data-test="iof">
              {`${currentItem.origin.currency} ${formatNumber(
                currentItem.ratesAndFees.totalIOF,
                { digits: 2 }
              )}`}
            </Span>
            <Subtitle data-test="vetLabel">
              {translate("TOTAL_EFFECTIVE_VALUE")}
            </Subtitle>
            <Span data-test="vet">
              {`${currentItem.origin.currency} ${formatNumber(
                currentItem.ratesAndFees.totalEffectiveRate,
                { digits: 2 }
              )}`}
            </Span>
            <Subtitle data-test="debitedDateLabel">
              {translate("EXCHANGE_HISTORY_DEBIT_DATE")}
            </Subtitle>
            <Span data-test="debitedDate">
              {moment(currentItem.origin.settleDate).format(
                getDateFieldPlaceholderByLocale()
              )}
            </Span>
            <Subtitle data-test="creditedDateLabel">
              {translate("EXCHANGE_HISTORY_CREDIT_DATE")}
            </Subtitle>
            <Span data-test="creditedDate">
              {moment(currentItem.target.settleDate).format(
                getDateFieldPlaceholderByLocale()
              )}
            </Span>
          </Container>
          <FooterButtons
            dataTest="footerButtons"
            secondButton={translate("SEND_MONEY")}
            onClickFirst={() => stepBack()}
            onClickSecond={() =>
              redirect("/exchanges/international-transfer/send-money")
            }
          />
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
