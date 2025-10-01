import React, { useState, useEffect, useContext, Fragment } from "react";
import { AlertMessage } from "react-bocombbm-components";
import { InstanceContext } from "../sendMoneyContext";
import {
  FooterButtonsContainer,
  ValueTitle,
  ValueContainer,
  ValueText,
  CurrencyContainer,
  CurrencyTitle,
  ExchangeContainer,
  AmmountWrapper,
  AccTitle,
  ValuesContainer,
  BalanceContainer,
  Container,
  InfoContent,
  InfoContentBold,
  AlertMessageWrapper,
  InfoContentError,
  ButtonWrapper,
  InfoContentErrorBold,
  InfoContainerError
} from "./styles";
import Dropdown from "../components/Dropdown";
import Timer from "../components/Timer";
import ExchangeInput from "../components/ExchangeInput";
import Button from "../../../common/Button";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import DefaultShimmerLoading from "../../../common/DefaultShimmerLoading";
import { FOREIGN_EXCHANGE, BRL } from "../../../../utils/constants.js";
import formatNumber, { unFormatNumber } from "../../../../utils/formatNumber";
import { getLanguage, translate } from "../../../../utils/i18n";
import { rem } from "../../../../styles/tools";

let timeoutId = null;
const exchangeBRLLimit = 150000;

const SendMoneyForm = ({ stepForward, stepBack, currentStep, goToStep }) => {
  const {
    exchangeData,
    exchangeTransactionsSimulation,
    getExchangeTransactionsSimulation,
    cleanExchangeTransactionsSimulation,
    setTransactionValues,
    resetTimer,
    getAvailableDateRanges,
    availableDateRanges,
    modalClosed,
    serverTime,
    setSelectedOperationNature
  } = useContext(InstanceContext);

  const [loading, setLoading] = useState(false); // eslint-disable-line
  const [availabityHour, setAvailabityHour] = useState(false);
  const [exchangeBRLLimitError, setExchangeBRLLimitError] = useState(false);
  const [error, setError] = useState({ showError: false, message: "" });
  const [isValidBRLLimit, setIsValidBRLLimit] = useState(true);

  const [payload, setPayload] = useState({
    originCurrency: "BRL",
    targetCurrency: "",
    originTotal: null,
    targetTotal: null,
    type: "sell",
    nature: null
  });

  useEffect(() => {
    if (availableDateRanges && serverTime) {
      const { startTime, endTime } = { ...availableDateRanges[0] };

      if (serverTime >= startTime && serverTime <= endTime) {
        setAvailabityHour(true);
      } else {
        setAvailabityHour(false);
      }
    }
  }, [availableDateRanges, serverTime]);

  useEffect(() => {
    if (currentStep === 3) {
      setPayload({
        ...payload,
        originTotal: null,
        targetTotal: null
      });
      setPayload({
        ...payload,
        targetCurrency: exchangeData.favored.currency.code,
        nature:
          exchangeData.favored.fxNatures.length === 1
            ? exchangeData.favored.fxNatures[0].code
            : null,
        originCurrency: "BRL",
        type: "sell"
      });
      setSelectedOperationNature(
        exchangeData.favored.fxNatures.length === 1
          ? exchangeData.favored.fxNatures[0]
          : null
      );
    }
  }, [currentStep]);

  useEffect(() => {
    if (exchangeTransactionsSimulation) {
      resetTimer();
      if (
        exchangeTransactionsSimulation.origin.total >
        exchangeData.selectedAccount.availableBalance
      ) {
        setError({
          showError: true,
          message: translate("INSUFFICIENT_AMMOUNT_MESSAGE_EXCHANGE")
        });
      } else if (exchangeTransactionsSimulation.origin.total < 1) {
        setError({ showError: true, message: translate("EXCHANGE_MIN_VALUE") });
      }
    }
  }, [exchangeTransactionsSimulation]);

  useEffect(() => {
    if (!modalClosed) {
      goToStep(3);
      setPayload({
        ...payload,
        originTotal: null,
        targetTotal: null
      });
    }
  }, [modalClosed]);

  const handleGetData = (value, type) => {
    setError({ showError: false });
    setIsValidBRLLimit(true);
    cleanExchangeTransactionsSimulation();

    type === "origin" &&
      setPayload({ ...payload, originTotal: value, targetTotal: null });
    type === "target" &&
      setPayload({ ...payload, targetTotal: value, originTotal: null });

    if (value !== translate("EXCHANGE_INITAL_VALUE")) {
      if (currentStep === 3) {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
          getAvailableDateRanges(FOREIGN_EXCHANGE);
          type === "origin" &&
            getExchangeTransactionsSimulation({
              ...payload,
              originTotal: unFormatNumber(value, {
                digits: 2
              })
            });
          type === "target" &&
            getExchangeTransactionsSimulation({
              ...payload,
              targetTotal: unFormatNumber(value, {
                digits: 2
              })
            });
        }, 1500);
      }
    }
  };

  const handleStepBack = () => {
    cleanExchangeTransactionsSimulation();
    setPayload({ originTotal: null, targetTotal: null });
    stepBack();
  };

  const handleStepFoward = () => {
    if (exchangeTransactionsSimulation.origin.total > exchangeBRLLimit) {
      setExchangeBRLLimitError(true);
      setIsValidBRLLimit(false);
      return;
    }
    setTransactionValues(exchangeTransactionsSimulation);
    stepForward();
  };

  const handleChangeCurrency = currency => {
    if (!currency) return;
    setPayload({ ...payload, targetCurrency: currency.code });
  };

  const handleChangeReason = reason => {
    if (!reason) return;
    setPayload({ ...payload, nature: reason.code });
    setSelectedOperationNature(reason);
  };

  const mountMessageWithAvailabilityTime = () => {
    const startTime = "09h30";
    const endTime = "18h00";

    return (
      <InfoContent>
        {translate("EXCHANGE_ALERT_MESSAGE")}
        <InfoContentBold>{startTime}</InfoContentBold>
        {translate("FUNDS_CANT_INVEST_MSG2")}
        <InfoContentBold>{endTime}</InfoContentBold>
        {translate("FUNDS_CANT_INVEST_MSG3")}
      </InfoContent>
    );
  };

  const mountMessageLimitUSDError = () => {
    return (
      <InfoContainerError>
        <InfoContentError>
          {translate("EXCHANGE_LIMIT_ERROR_MESSAGE_PART_1")}
          <InfoContentErrorBold>
            {translate("EXCHANGE_LIMIT_ERROR_MESSAGE_PART_2")}
          </InfoContentErrorBold>
          {translate("EXCHANGE_LIMIT_ERROR_MESSAGE_PART_3")}
        </InfoContentError>
      </InfoContainerError>
    );
  };

  return (
    <Fragment>
      {loading ? (
        <DefaultShimmerLoading repeat={4} innerRepeat={2} />
      ) : (
        <Container>
          <CurrencyContainer>
            <CurrencyTitle data-test="titleCurrency">
              {translate("EXCHANGE_CURRENCY_TO_CONVERT")}
            </CurrencyTitle>
            <Dropdown
              dataTest="dropDownCurrency"
              options={
                exchangeData && exchangeData.favored
                  ? [exchangeData.favored.currency]
                  : []
              }
              optionsKey={"name"}
              iconLeft
              label={translate("SELECT_CURRENCY")}
              disabled={true}
              iconLabel={
                exchangeData && exchangeData.favored
                  ? exchangeData.favored.currency.code
                  : ""
              }
              onChange={value => handleChangeCurrency(value)}
            />
          </CurrencyContainer>

          <CurrencyContainer>
            <CurrencyTitle data-test="titleNature">
              {translate("EXCHANGE_TYPE_OPERATION")}
            </CurrencyTitle>
            <Dropdown
              dataTest="dropDownReason"
              optionsKey={"description"}
              options={
                exchangeData &&
                exchangeData.favored != undefined &&
                exchangeData.favored.fxNatures
              }
              label={translate("EXCHANGE_SELECT_TYPE_OPERATION")}
              onChange={value => handleChangeReason(value)}
            />
          </CurrencyContainer>

          {exchangeData &&
            exchangeData.favored &&
            exchangeData.favored.currency &&
            payload.nature && (
              <Fragment>
                <ExchangeContainer>
                  <AmmountWrapper>
                    <AccTitle>
                      {translate("EXCHANGE_VALUE_TO_TRANSFER")}
                    </AccTitle>
                    <ExchangeInput
                      dataTest="ExchangeInputTarget"
                      value={
                        exchangeTransactionsSimulation
                          ? formatNumber(
                              exchangeTransactionsSimulation.target.total,
                              { digits: 2 }
                            )
                          : payload.targetTotal
                      }
                      icon={
                        exchangeData && exchangeData.favored
                          ? exchangeData.favored.currency.code
                          : ""
                      }
                      currency={
                        exchangeData && exchangeData.favored
                          ? exchangeData.favored.currency.code
                          : ""
                      }
                      isValid={
                        !isValidBRLLimit ? isValidBRLLimit : !error.showError
                      }
                      invalidMessage={""}
                      iconRight={true}
                      onChange={value => handleGetData(value, "target")}
                    />
                  </AmmountWrapper>

                  <AmmountWrapper>
                    <AccTitle accTitleStyle={`margin-top: 18px`}>
                      {translate("EXCHANGE_VALUE_TO_PAY")}
                    </AccTitle>
                    <ExchangeInput
                      dataTest="ExchangeInputOrigin"
                      value={
                        exchangeTransactionsSimulation
                          ? formatNumber(
                              exchangeTransactionsSimulation.origin.total,
                              { digits: 2 }
                            )
                          : payload.originTotal
                      }
                      icon={"FlagBR"}
                      isValid={
                        !isValidBRLLimit ? isValidBRLLimit : !error.showError
                      }
                      invalidMessage={
                        !isValidBRLLimit
                          ? translate("EXCHANGE_TRANSACTION_DAILY_LIMIT")
                          : error.message
                      }
                      iconRight={true}
                      onChange={value => handleGetData(value, "origin")}
                      currency={BRL}
                    />
                    <BalanceContainer>
                      <ValueTitle>{translate("EXCHANGE_BALANCE")}: </ValueTitle>
                      <ValueText>
                        {translate("EXCHANGE_BRL_CURRENCY")}{" "}
                        {exchangeData &&
                          formatNumber(
                            exchangeData.selectedAccount.availableBalance,
                            { digits: 2 }
                          )}
                      </ValueText>
                    </BalanceContainer>
                  </AmmountWrapper>

                  <ValuesContainer>
                    <ValueContainer>
                      <ValueTitle>{translate("EXCHANGE_PRICE")}: </ValueTitle>
                      <ValueText>
                        {translate("EXCHANGE_BRL_CURRENCY")}{" "}
                        {exchangeTransactionsSimulation
                          ? exchangeTransactionsSimulation.currencyRate.currencyRateValue.toLocaleString(
                              getLanguage(),
                              {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 20
                              }
                            )
                          : translate("EXCHANGE_INITAL_VALUE")}
                      </ValueText>
                    </ValueContainer>
                    <ValueContainer>
                      <ValueTitle>{translate("EXCHANGE_FEES")}: </ValueTitle>
                      <ValueText>
                        {translate("EXCHANGE_BRL_CURRENCY")}{" "}
                        {exchangeTransactionsSimulation
                          ? formatNumber(
                              exchangeTransactionsSimulation.fees.find(
                                item => item.type.toLowerCase() === "spread"
                              ).amount,
                              { digits: 2 }
                            )
                          : translate("EXCHANGE_INITAL_VALUE")}
                      </ValueText>
                    </ValueContainer>
                    <ValueContainer>
                      <ValueTitle>{translate("EXCHANGE_IOF")}: </ValueTitle>
                      <ValueText>
                        {translate("EXCHANGE_BRL_CURRENCY")}{" "}
                        {exchangeTransactionsSimulation
                          ? formatNumber(
                              exchangeTransactionsSimulation.fees.find(
                                item => item.type.toLowerCase() === "iof"
                              ).amount,
                              { digits: 2 }
                            )
                          : translate("EXCHANGE_INITAL_VALUE")}
                      </ValueText>
                    </ValueContainer>
                    <ValueContainer>
                      <ValueTitle>
                        {translate("TOTAL_EFFECTIVE_VALUE")}:{" "}
                      </ValueTitle>
                      <ValueText>
                        {translate("EXCHANGE_BRL_CURRENCY")}{" "}
                        {exchangeTransactionsSimulation
                          ? formatNumber(
                              exchangeTransactionsSimulation.totalEffectiveRate,
                              { digits: 2 }
                            )
                          : translate("EXCHANGE_INITAL_VALUE")}
                      </ValueText>
                    </ValueContainer>
                  </ValuesContainer>
                </ExchangeContainer>

                <AlertMessageWrapper>
                  <AlertMessage
                    icon="Attention"
                    type="neutral"
                    spacing={{
                      top: "m",
                      bottom: "none",
                      right: "s",
                      left: "s"
                    }}
                  >
                    {mountMessageWithAvailabilityTime()}
                  </AlertMessage>
                </AlertMessageWrapper>

                {exchangeTransactionsSimulation && (
                  <Timer dataTest="ExchangeTimer" />
                )}

                <AnimatedBottonSheet
                  isOpen={exchangeBRLLimitError}
                  velocity={0.3}
                  head={{ title: translate("EXCHANGE_TRANSACTION_LIMIT") }}
                >
                  {mountMessageLimitUSDError()}
                  <ButtonWrapper>
                    <Button
                      style={{
                        minWidth: rem(120)
                      }}
                      actionSecondary
                      onClick={() => setExchangeBRLLimitError(false)}
                    >
                      {translate("FIXED_INCOME_WITHDRAWAL_UNDERSTOOD")}
                    </Button>
                  </ButtonWrapper>
                </AnimatedBottonSheet>

                <FooterButtonsContainer>
                  <Button
                    dataTest="BackButton"
                    type="outline"
                    onClick={handleStepBack}
                    margin={{ r: 16 }}
                    style={{
                      width: "100%"
                    }}
                  >
                    {translate("BACK")}
                  </Button>
                  <Button
                    dataTest="ContinueButton"
                    actionSecondary
                    onClick={handleStepFoward}
                    disabled={
                      exchangeTransactionsSimulation &&
                      availabityHour &&
                      payload.nature &&
                      payload.targetCurrency
                        ? exchangeTransactionsSimulation.origin.total >
                            exchangeData.selectedAccount.availableBalance ||
                          exchangeTransactionsSimulation.origin.total < 1
                        : true
                    }
                    style={{
                      width: "100%"
                    }}
                  >
                    {translate("OPEN_BANKING_CONTINUE")}
                  </Button>
                </FooterButtonsContainer>
              </Fragment>
            )}
        </Container>
      )}
    </Fragment>
  );
};

export default SendMoneyForm;
