import React, { Fragment, useEffect, useState } from "react";
import TypeSelectionExchange from "../TypeSelectionExchange";
import { Wrapper } from "./styles";
import Header from "../../common/Modal/Header";
import FirstStep from "../TutorialMfaExchange/FirstStep";
import SecondStep from "../TutorialMfaExchange/SecondStep";
import ThirdStep from "../TutorialMfaExchange/ThirdStep";
import FourthStep from "../TutorialMfaExchange/FourthStep";
import FiveStep from "../TutorialMfaExchange/FiveStep";
import SixthStep from "../TutorialMfaExchange/SixthStep";
import SevenStep from "../TutorialMfaExchange/SevenStep";
import ExitConfirmation from "../../common/ExitConfirmation";
import { MFABOARDING_NOTIFICATION_TYPE } from "../../../utils/constants";
import { redirect } from "../../../utils/redirect";
import MfaValidation from "../../MfaBoarding/MfaValidation";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

const MfaBoardingScreenExchange = ({
  setNotificationStatus,
  closeModal,
  clearAuthFactorResponse,
  changeFactorTogle,
  historyGoBack,
  notification,
  authFactorResponse,
  createAuthFactor,
  aproveAuthFactor,
  authCodeResponse,
  error
}) => {
  const [openModalClose, setOpenModalClose] = useState(false);
  const [secret, setSecret] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const INTERNAL_ERROR = 500;

  const renderExitConfirmation = () => {
    return (
      <Wrapper paddingLeft={80} paddingRight={80}>
        <ExitConfirmation
          onClickExit={() => handleClose()}
          onClickCancel={() => setOpenModalClose(false)}
        />
      </Wrapper>
    );
  };

  const onClickClose = openModalClose ? false : () => setOpenModalClose(true);

  const handleClose = () => {
    closeModal();
    clearAuthFactorResponse();
    setNotificationStatus(MFABOARDING_NOTIFICATION_TYPE);
    changeFactorTogle(false);
    redirect("/home");
  };

  const ReturnError = () => {
    return (
      <ErrorBoundary
        errorStatus={error}
        handleClose={handleClose}
        isMfaError={true}
      />
    );
  };

  const handleSuccessClose = () => {
    closeModal();
    clearAuthFactorResponse();
    setNotificationStatus(MFABOARDING_NOTIFICATION_TYPE);
    changeFactorTogle(false);
    historyGoBack();
  };

  const changeCurrentScreen = async newScreen => {
    if (newScreen === 3) {
      await aproveNewAuthFactor();
    }
    setCurrentPage(newScreen);
  };

  const aproveNewAuthFactor = async () => {
    await aproveAuthFactor(
      authCodeResponse.id,
      authFactorResponse.authFactorID
    );
  };

  const getNewAuthFactor = async () => {
    const payload = {
      identityProvider: "ib",
      authFactorType: "totp",
      default: true,
      uri: "totp"
    };
    await createAuthFactor(payload);
  };

  useEffect(() => {
    getNewAuthFactor();
  }, []);

  useEffect(() => {
    if (authFactorResponse) {
      setSecret(
        authFactorResponse.activationURL
          .split("secret")[1]
          .slice(1)
          .split("&")[0]
      );
    }
  }, [authFactorResponse]);

  switch (currentPage) {
    case 1:
      return error && error.status == INTERNAL_ERROR ? (
        ReturnError()
      ) : (
        <Fragment>
          <Header
            onClickClose={onClickClose}
            data-test="MfaSelectionTypeExit"
          />
          {openModalClose && renderExitConfirmation()}
          {!openModalClose && (
            <Wrapper paddingLeft={120} paddingRight={120}>
              <TypeSelectionExchange
                changeCurrentScreen={changeCurrentScreen}
                notification={notification}
              ></TypeSelectionExchange>
            </Wrapper>
          )}
        </Fragment>
      );
    case 2:
      return error && error.status == INTERNAL_ERROR ? (
        ReturnError()
      ) : (
        <Fragment>
          <Header
            onClickClose={onClickClose}
            data-test="MfaSelectionTypeExit"
            onClickBack={!onClickClose ? false : () => changeCurrentScreen(1)}
          />
          {openModalClose && renderExitConfirmation()}
          {!openModalClose && (
            <Wrapper paddingLeft={120} paddingRight={120}>
              <MfaValidation
                changeCurrentScreen={changeCurrentScreen}
                authFactorResponse={authFactorResponse}
                isMfaExchange={true}
              />
            </Wrapper>
          )}
        </Fragment>
      );
    case 3:
      return (
        <Fragment>
          <Header
            onClickClose={onClickClose}
            data-test="MfaSelectionTypeExit"
            onClickBack={!onClickClose ? false : () => changeCurrentScreen(2)}
          />
          {openModalClose && renderExitConfirmation()}
          {!openModalClose && (
            <Wrapper paddingLeft={120} paddingRight={120}>
              <FirstStep changeCurrentScreen={changeCurrentScreen}></FirstStep>
            </Wrapper>
          )}
        </Fragment>
      );
    case 4:
      return (
        <Fragment>
          <Header
            onClickClose={onClickClose}
            onClickBack={!onClickClose ? false : () => changeCurrentScreen(3)}
            data-test="MfaSelectionTypeExit"
          />
          {openModalClose && renderExitConfirmation()}
          {!openModalClose && (
            <Wrapper paddingLeft={120} paddingRight={120}>
              <SecondStep
                changeCurrentScreen={changeCurrentScreen}
              ></SecondStep>
            </Wrapper>
          )}
        </Fragment>
      );
    case 5:
      return (
        <Fragment>
          <Header
            onClickClose={onClickClose}
            onClickBack={!onClickClose ? false : () => changeCurrentScreen(4)}
            data-test="MfaSelectionTypeExit"
          />
          {openModalClose && renderExitConfirmation()}
          {!openModalClose && (
            <Wrapper paddingLeft={120} paddingRight={120}>
              <ThirdStep changeCurrentScreen={changeCurrentScreen}></ThirdStep>
            </Wrapper>
          )}
        </Fragment>
      );
    case 6:
      return (
        <Fragment>
          <Header
            onClickClose={onClickClose}
            onClickBack={!onClickClose ? false : () => changeCurrentScreen(5)}
            data-test="MfaSelectionTypeExit"
          />
          {openModalClose && renderExitConfirmation()}
          {!openModalClose && (
            <Wrapper paddingLeft={120} paddingRight={120}>
              <FourthStep
                secretKey={secret}
                changeCurrentScreen={changeCurrentScreen}
              ></FourthStep>
            </Wrapper>
          )}
        </Fragment>
      );
    case 7:
      return (
        <Fragment>
          <Header
            onClickClose={onClickClose}
            onClickBack={!onClickClose ? false : () => changeCurrentScreen(6)}
            data-test="MfaSelectionTypeExit"
          />
          {openModalClose && renderExitConfirmation()}
          {!openModalClose && (
            <Wrapper paddingLeft={120} paddingRight={120}>
              <FiveStep changeCurrentScreen={changeCurrentScreen}></FiveStep>
            </Wrapper>
          )}
        </Fragment>
      );
    case 8:
      return error &&
        (error.status == INTERNAL_ERROR || error.status == 406) ? (
        ReturnError()
      ) : (
        <Fragment>
          <Header
            onClickClose={onClickClose}
            onClickBack={!onClickClose ? false : () => changeCurrentScreen(7)}
            data-test="MfaSelectionTypeExit"
          />
          {openModalClose && renderExitConfirmation()}
          {!openModalClose && (
            <Wrapper paddingLeft={120} paddingRight={120}>
              <SixthStep
                changeCurrentScreen={changeCurrentScreen}
                authFactorResponse={authFactorResponse}
              ></SixthStep>
            </Wrapper>
          )}
        </Fragment>
      );
    case 9:
      return (
        <Fragment>
          <Header data-test="MfaSelectionTypeExit" />
          <Wrapper paddingLeft={120} paddingRight={120}>
            <SevenStep handleClose={handleSuccessClose}></SevenStep>
          </Wrapper>
        </Fragment>
      );
  }
};

export default MfaBoardingScreenExchange;
