import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  Container,
  ContainerBlue20,
  ContainerSumary,
  ContainerCurrency,
  InfoContainer,
  ButtonWrapper,
  SpanCurrency,
  SpanCurrencyValue,
  SpanTitle,
  InfoSpan
} from "./styles";
import Timer from "../components/Timer";
import { InstanceContext } from "../sendMoneyContext";
import { SpanSubtitle, SpanValue, FooterButtonsContainer } from "../styles";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import Button from "../../../common/Button";
import EFTToken from "../../../common/EFTToken";
import Header from "../../../common/Modal/Header";
import { MODAL_TYPES } from "../../../common/Modal/Modal";
import { EFTTokenMfaWrapper } from "../../../InvestmentProducts/Funds/styles";
import { APPROVE_FOREIGN_EXCHANGE } from "../../../../utils/constants";
import formatNumber from "../../../../utils/formatNumber";
import {
  getDateFieldPlaceholderByLocale,
  getLanguage,
  translate
} from "../../../../utils/i18n";
import { rem } from "../../../../styles/tools";
import moment from "moment";

const Summary = ({ stepBack, stepForward }) => {
  const {
    exchangeData,
    registerExchangeOperation,
    error,
    openModal,
    closeModal,
    confirmExchangeTransaction,
    transactionEx,
    stopTimer
  } = useContext(InstanceContext);

  const [errorModal, setErrorModal] = useState(null);

  const onConfirm = async () => {
    try {
      await confirmExchangeTransaction();
      stopTimer();
      closeModal();
      stepForward();
    } catch (error) {
      closeModal();
      return { error };
    }
  };

  const showMfaConfirmation = () => {
    openModal({
      type: MODAL_TYPES.CUSTOM,
      overwriteDefaultButtons: true,
      // eslint-disable-next-line react/display-name
      children: () => (
        <Fragment>
          <Header onClickClose={() => closeModal()} dataTest="MfaAddpBbmBack" />
          <EFTTokenMfaWrapper>
            <EFTToken
              onConfirm={onConfirm}
              onMFAConfirmation={() => onConfirm()}
              onMFAError={() => {}}
              createAuthCodeParams={{
                actionType: APPROVE_FOREIGN_EXCHANGE,
                payload: transactionEx
              }}
            />
          </EFTTokenMfaWrapper>
        </Fragment>
      )
    });
  };

  useEffect(() => {
    if (transactionEx && transactionEx.id) {
      showMfaConfirmation();
    }
  }, [transactionEx]);

  const handleSubmit = () => {
    const requestBody = {
      recipient: {
        name: exchangeData.favored.name,
        account: {
          number: exchangeData.favored.account.number,
          bank: {
            name: exchangeData.favored.account.bank.name,
            swift: exchangeData.favored.account.bank.swift,
            intermediary: {
              number: exchangeData.favored.account.bank.intermediary.number,
              bank: {
                name: exchangeData.favored.account.bank.intermediary.bank.name,
                swift: exchangeData.favored.account.bank.intermediary.bank.swift
              }
            }
          }
        }
      },
      origin: {
        account: {
          bankCode: exchangeData.selectedAccount.bankCode,
          branch: exchangeData.selectedAccount.branch,
          id: exchangeData.selectedAccount.account,
          number:
            exchangeData.selectedAccount.number +
            exchangeData.selectedAccount.verifyingDigit
        },
        settleDate: exchangeData.transactionValues.origin.settleDate,
        amount: exchangeData.transactionValues.origin.amount,
        currency: exchangeData.transactionValues.origin.currency,
        total: exchangeData.transactionValues.origin.total
      },
      target: {
        amount: exchangeData.transactionValues.target.amount,
        currency: exchangeData.transactionValues.target.currency,
        total: exchangeData.transactionValues.target.total,
        settleDate: exchangeData.transactionValues.target.settleDate
      },
      fxNature: exchangeData.selectedOperationNature,
      totalEffectiveRate: exchangeData.transactionValues.totalEffectiveRate,
      transactionType: exchangeData.transactionValues.type,
      currencyRate: {
        currencyRateId:
          exchangeData.transactionValues.currencyRate.currencyRateId,
        currencyRateValue:
          exchangeData.transactionValues.currencyRate.currencyRateValue
      }
    };
    registerExchangeOperation(requestBody);
  };

  useEffect(() => {
    if (error && error.status === 422 && error.showErrorToUser) {
      setErrorModal({
        title: error.errors[0].title,
        message: error.errors[0].message.split("\n\n")
      });
      return;
    }
  }, [error]);

  return (
    <Fragment>
      <ContainerBlue20>
        <Container>
          <ContainerSumary>
            <SpanTitle data-test="TitleSummary">
              {translate("EXCHANGE_SUMMARY")}
            </SpanTitle>

            <SpanSubtitle data-test="ExchangeValueTitle">
              {translate("EXCHANGE_VALUE_TO_CONVERT")}
            </SpanSubtitle>

            {exchangeData && exchangeData.transactionValues && (
              <ContainerCurrency>
                <SpanCurrency data-test="ExchangeCurrency">
                  {exchangeData.transactionValues.target.currency}
                </SpanCurrency>

                <SpanCurrencyValue data-test="ExchangeValue">
                  {formatNumber(exchangeData.transactionValues.target.total, {
                    digits: 2
                  })}
                </SpanCurrencyValue>
              </ContainerCurrency>
            )}

            <SpanSubtitle data-test="ExchangeBeneficiary">
              {translate("EXCHANGE_BENEFICIARY")}
            </SpanSubtitle>

            {exchangeData && exchangeData.favored && (
              <SpanValue data-test="ExchangeFavoredName">
                {exchangeData.favored.name}
              </SpanValue>
            )}

            {exchangeData && exchangeData.favored && (
              <SpanValue data-test="ExchangeFavoredAccountNumber">
                {translate("EXCHANGE_ACCOUNT") +
                  " " +
                  exchangeData.favored.account.number}
              </SpanValue>
            )}

            {exchangeData && exchangeData.favored && (
              <SpanValue data-test="ExchangeBankName">
                {translate("EXCHANGE_BANK") +
                  " " +
                  exchangeData.favored.account.bank.name}
              </SpanValue>
            )}

            {exchangeData && exchangeData.favored && (
              <SpanValue data-test="ExchangeSwiftCode">
                {translate("SWIFTCode") +
                  " " +
                  exchangeData.favored.account.bank.swift}
              </SpanValue>
            )}

            <SpanSubtitle data-test="ExchangeAccountDebit">
              {translate("EXCHANGE_ACCOUNT_TO_DEBIT")}
            </SpanSubtitle>

            {exchangeData && exchangeData.selectedAccount && (
              <SpanValue data-test="AccountNumber">
                {exchangeData.selectedAccount.accountNumber}
              </SpanValue>
            )}

            <SpanSubtitle data-test="ExchangeTotalAmount">
              {translate("EXCHANGE_TOTAL_AMOUNT_DEBIT")}
            </SpanSubtitle>

            {exchangeData && exchangeData.transactionValues && (
              <SpanValue data-test="ExchangeValueCoin">
                {exchangeData.transactionValues.origin.currency}{" "}
                {formatNumber(exchangeData.transactionValues.origin.total, {
                  digits: 2
                })}
              </SpanValue>
            )}

            {exchangeData && exchangeData.selectedOperationNature && (
              <SpanSubtitle data-test="ExchangeTypeOperation">
                {translate("EXCHANGE_TYPE_OPERATION")}
              </SpanSubtitle>
            )}

            {exchangeData && exchangeData.selectedOperationNature && (
              <SpanValue data-test="ExchangeNature">
                {exchangeData.selectedOperationNature.description}
              </SpanValue>
            )}

            <SpanSubtitle data-test="ExchangePrice">
              {translate("EXCHANGE_PRICE")}
            </SpanSubtitle>

            {exchangeData && exchangeData.transactionValues && (
              <SpanValue data-test="ExchangeValuePrice">
                {exchangeData.transactionValues.origin.currency}{" "}
                {exchangeData.transactionValues.currencyRate.currencyRateValue.toLocaleString(
                  getLanguage(),
                  {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 20
                  }
                )}
              </SpanValue>
            )}

            <SpanSubtitle data-test="ExchangeFEES">
              {translate("EXCHANGE_FEES")}
            </SpanSubtitle>

            {exchangeData && exchangeData.transactionValues && (
              <SpanValue data-test="ExchangeValueFEES">
                {exchangeData.transactionValues.origin.currency}{" "}
                {formatNumber(
                  exchangeData.transactionValues.fees.find(
                    item => item.type.toLowerCase() === "spread"
                  ).amount,
                  { digits: 2 }
                )}
              </SpanValue>
            )}

            <SpanSubtitle data-test="ExchangeIOF">
              {translate("EXCHANGE_IOF")}
            </SpanSubtitle>

            {exchangeData && exchangeData.transactionValues && (
              <SpanValue data-test="ExchangeValueIOF">
                {exchangeData.transactionValues.origin.currency}{" "}
                {formatNumber(
                  exchangeData.transactionValues.fees.find(
                    item => item.type.toLowerCase() === "iof"
                  ).amount,
                  { digits: 2 }
                )}
              </SpanValue>
            )}

            <SpanSubtitle data-test="ExchangeVET">
              {translate("EXCHANGE_VET")}
            </SpanSubtitle>

            {exchangeData && exchangeData.transactionValues && (
              <SpanValue data-test="ExchangeValueVET">
                {exchangeData.transactionValues.origin.currency}{" "}
                {exchangeData &&
                  formatNumber(
                    exchangeData.transactionValues.totalEffectiveRate,
                    { digits: 2 }
                  )}
              </SpanValue>
            )}

            <SpanSubtitle data-test="ExchangeDateDebit">
              {translate("EXCHANGE_DATE_DEBIT")}
            </SpanSubtitle>

            {exchangeData && exchangeData.transactionValues && (
              <SpanValue data-test="ExchangeDateDebitValue">
                {moment(
                  exchangeData.transactionValues.origin.settleDate
                ).format(getDateFieldPlaceholderByLocale())}
              </SpanValue>
            )}

            <SpanSubtitle data-test="ExchangeDateCredit">
              {translate("EXCHANGE_DATE_CREDIT")}
            </SpanSubtitle>

            {exchangeData && exchangeData.transactionValues && (
              <SpanValue data-test="ExchangeDateCreditValue">
                {moment(
                  exchangeData.transactionValues.target.settleDate
                ).format(getDateFieldPlaceholderByLocale())}
              </SpanValue>
            )}
          </ContainerSumary>
        </Container>
      </ContainerBlue20>

      <AnimatedBottonSheet
        isOpen={errorModal}
        velocity={0.3}
        head={{ title: errorModal && errorModal.title }}
      >
        <InfoContainer>
          {errorModal &&
            errorModal.message.map((text, index) => (
              <InfoSpan key={index}>{text}</InfoSpan>
            ))}
        </InfoContainer>
        <ButtonWrapper>
          <Button
            style={{
              width: "100%",
              minWidth: rem(120)
            }}
            actionSecondary
            onClick={() => {
              setErrorModal(null);
            }}
          >
            {translate("FIXED_INCOME_WITHDRAWAL_UNDERSTOOD")}
          </Button>
        </ButtonWrapper>
      </AnimatedBottonSheet>

      <Timer dataTest="ExchangeTimer" />

      <FooterButtonsContainer>
        <Button
          dataTest="BackButtonSummary"
          type="outline"
          onClick={() => {
            stepBack();
          }}
          margin={{ r: 16 }}
          style={{
            width: "100%"
          }}
        >
          {translate("BACK")}
        </Button>
        <Button
          dataTest="ContinueButtonSummary"
          actionSecondary
          onClick={handleSubmit}
          style={{
            width: "100%"
          }}
        >
          {translate("SEND")}
        </Button>
      </FooterButtonsContainer>
    </Fragment>
  );
};

export default Summary;
