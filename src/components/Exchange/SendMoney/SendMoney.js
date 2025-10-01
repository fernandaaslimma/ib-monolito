import React, { useState, useEffect, useRef, Fragment } from "react";
import { StepSlider } from "react-bocombbm-components";
import { InstanceContext } from "./sendMoneyContext";
import { ContainerBlue20, FooterButtonsContainer, Wrapper } from "./styles";
import Result from "./Result";
import SelectAccount from "./SelectAccount";
import Summary from "./Summary";
import SendMoneyForm from "./SendMoneyForm";
import WhoIsFavored from "./WhoIsFavored";
import Tab from "./components/Tab";
import TimerModal from "./components/TimerModal";
import { MODAL_TYPES } from "../../common/Modal/Modal";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import {
  FOREIGN_EXCHANGE,
  TYPE_AUTH_FACTOR_TOTP
} from "../../../utils/constants";
import { translate } from "../../../utils/i18n";
import { redirect } from "../../../utils/redirect";
import Error from "./Result/Error/Error";
import Button from "../../common/Button";
import DefaultShimmerLoading from "../../common/DefaultShimmerLoading";

const SendMoney = ({
  exchangeData,
  setSelectedAccount,
  setFavored,
  setSelectedOperationNature,
  error,
  getExchangeRecipientAccounts,
  exchangeRecipientAccounts,
  accounts,
  getAccounts,
  exchangeTransactionsSimulation,
  getExchangeTransactionsSimulation,
  cleanExchangeTransactionsSimulation,
  getExchangeTransactionsSimulationRate,
  exchangeTransactionsSimulationRate,
  setTransactionValues,
  getAuthFactors,
  authFactors,
  loading,
  registerExchangeOperation,
  getAvailableDateRanges,
  availableDateRanges,
  serverTime,
  openModal,
  closeModal,
  confirmExchangeTransaction,
  transactionEx,
  exchangeError,
  cleanExchangeTransaction,
  getExchangeTransactions,
  exchangeTransactions,
  cleanConfirmExchangeError
}) => {
  const steps = [SelectAccount, WhoIsFavored, SendMoneyForm, Summary, Result];

  const remainingTimeRef = useRef(__EXCHANGE_TIMER_DURATION__);
  const [timerRunning, setTimerRunning] = useState(false);
  const [modalClosed, setModalClosed] = useState(true);
  const [availabityHour, setAvailabityHour] = useState(false);
  const [loadTemp, setLoadTemp] = useState(true);

  const isMobileBrowser = window.matchMedia("(max-width: 760px)").matches;

  useEffect(() => {
    getAvailableDateRanges(FOREIGN_EXCHANGE);

    if (authFactors) return;

    const getAuthFactorsAsync = async () => {
      await getAuthFactors();
    };
    getAuthFactorsAsync();
  }, []);

  useEffect(() => {
    if (
      authFactors &&
      !authFactors.find(el => el.type === TYPE_AUTH_FACTOR_TOTP)
    ) {
      isMobileBrowser ? redirect("/mfaboardingEx") : redirect("/mfaboarding");
    }
  }, [authFactors]);

  useEffect(() => {
    if (availableDateRanges && serverTime) {
      const { startTime, endTime } = { ...availableDateRanges[0] };

      if (serverTime >= startTime && serverTime <= endTime) {
        setAvailabityHour(true);
      } else {
        setAvailabityHour(false);
      }
      setLoadTemp(false);
    }
  }, [availableDateRanges, serverTime]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timerRunning && remainingTimeRef.current > 0) {
        remainingTimeRef.current -= 1;
      } else if (timerRunning && exchangeTransactionsSimulation) {
        openModal({
          type: MODAL_TYPES.CUSTOM,
          overwriteDefaultButtons: true,
          children: function Modal() {
            Modal.displayName = "Modal";
            return <TimerModal handleCloseModal={handleCloseModal} />;
          }
        });
        setTimerRunning(false);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [remainingTimeRef, timerRunning]);

  useEffect(() => {
    return () => cleanExchangeTransactionsSimulation();
  }, []);

  const resetTimer = () => {
    setModalClosed(true);
    setTimerRunning(true);
    remainingTimeRef.current = __EXCHANGE_TIMER_DURATION__;
  };
  const stopTimer = () => {
    setTimerRunning(false);
  };

  const handleCloseModal = () => {
    resetTimer();
    cleanExchangeTransactionsSimulation();
    closeModal();
    setTimerRunning(false);
    setModalClosed(false);
  };

  return (
    <ErrorBoundary
      errorStatus={
        error && (error.status != 422 || !error.showErrorToUser) && error
      }
    >
      <Wrapper>
        {loadTemp ? (
          <DefaultShimmerLoading repeat={4} innerRepeat={2} />
        ) : !availabityHour ? (
          <Fragment>
            <ContainerBlue20>
              <Error
                mainMessage={translate("UNAVAILABLE_HOURS_EXCHANGE")}
                secondaryMessage={translate("UNAVAILABLE_HOURS_EXCHANGE_TEXT")}
              ></Error>
            </ContainerBlue20>
            <FooterButtonsContainer>
              <Button
                dataTest="CloseBtn"
                actionSecondary
                onClick={() => {
                  redirect("/exchanges/international-transfer");
                }}
                style={{ width: "100%" }}
              >
                {translate("BACK")}
              </Button>
            </FooterButtonsContainer>
          </Fragment>
        ) : (
          <div>
            <Tab title={translate("SEND_MONEY")} />
            <InstanceContext.Provider
              value={{
                exchangeData,
                setSelectedAccount,
                setFavored,
                setSelectedOperationNature,
                getExchangeRecipientAccounts,
                exchangeRecipientAccounts,
                accounts,
                getAccounts,
                exchangeTransactionsSimulation,
                getExchangeTransactionsSimulation,
                getExchangeTransactionsSimulationRate,
                exchangeTransactionsSimulationRate,
                setTransactionValues,
                cleanExchangeTransactionsSimulation,
                resetTimer,
                remainingTimeRef,
                timerRunning,
                loading,
                registerExchangeOperation,
                getAvailableDateRanges,
                availableDateRanges,
                modalClosed,
                serverTime,
                error,
                openModal,
                closeModal,
                confirmExchangeTransaction,
                transactionEx,
                exchangeError,
                cleanExchangeTransaction,
                stopTimer,
                getExchangeTransactions,
                exchangeTransactions,
                cleanConfirmExchangeError
              }}
            >
              <StepSlider steps={steps} />
            </InstanceContext.Provider>
          </div>
        )}
      </Wrapper>
    </ErrorBoundary>
  );
};

export default SendMoney;
