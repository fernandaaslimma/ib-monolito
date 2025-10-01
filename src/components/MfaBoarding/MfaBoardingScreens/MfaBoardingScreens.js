import React, { Component, Fragment } from "react";
import TypeSelection from "../TypeSelection";
import Success from "../Success";
import AppBbm from "../AppBbm";
import AppAuth from "../AppAuth";
import LaterRegistration from "../LaterRegistration";
import QrCode from "../QrCode";
import Header from "../../common/Modal/Header";
import ExitConfirmation from "../../common/ExitConfirmation";
import { redirect } from "../../../utils/redirect";
import { Wrapper } from "./styles";
import MfaValidation from "../MfaValidation";
import { MFABOARDING_NOTIFICATION_TYPE } from "../../../utils/constants";

class MfaBoardingScreens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      isExiting: false,
      loading: false
    };

    this.changeCurrentScreen = this.changeCurrentScreen.bind(this);
    this.changeisExiting = this.changeisExiting.bind(this);
    this.renderExitConfirmation = this.renderExitConfirmation.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSuccessClose = this.handleSuccessClose.bind(this);
    this.submitToken = this.submitToken.bind(this);
  }

  async changeCurrentScreen(newScreen) {
    if (newScreen === 4) {
      await this.createNewAuthFactor();
    }
    if (newScreen === 6) {
      await this.aproveNewAuthFactor();
    }
    this.setState({
      current: newScreen
    });
  }

  async createNewAuthFactor() {
    const { createAuthFactor } = this.props;
    const payload = {
      identityProvider: "ib",
      authFactorType: "totp",
      default: true,
      uri: "totp"
    };
    await createAuthFactor(payload);
  }

  async aproveNewAuthFactor() {
    const {
      aproveAuthFactor,
      authFactorResponse,
      authCodeResponse
    } = this.props;
    await aproveAuthFactor(
      authCodeResponse.id,
      authFactorResponse.authFactorID
    );
  }

  async submitToken(token) {
    const { activateAuthFactor, authFactorResponse } = this.props;
    await activateAuthFactor(token, authFactorResponse.authFactorID);
    return this.props.activatedAuthFactor;
  }

  changeisExiting(value) {
    this.setState({ isExiting: value });
  }

  renderExitConfirmation() {
    return (
      <Wrapper paddingLeft={80} paddingRight={80}>
        <ExitConfirmation
          onClickExit={() => this.handleClose()}
          onClickCancel={() => this.setState({ isExiting: false })}
        />
      </Wrapper>
    );
  }

  handleClose() {
    const {
      setNotificationStatus,
      closeModal,
      clearAuthFactorResponse
    } = this.props;
    closeModal();
    clearAuthFactorResponse();
    setNotificationStatus(MFABOARDING_NOTIFICATION_TYPE);
    this.props.changeFactorTogle(false);
    redirect("/home");
  }

  handleSuccessClose() {
    const {
      setNotificationStatus,
      closeModal,
      clearAuthFactorResponse,
      historyGoBack
    } = this.props;
    closeModal();
    clearAuthFactorResponse();
    setNotificationStatus(MFABOARDING_NOTIFICATION_TYPE);
    this.props.changeFactorTogle(false);
    historyGoBack();
  }

  render() {
    const { authFactorResponse, notification } = this.props;
    const { current, isExiting } = this.state;
    const onClickClose = isExiting
      ? false
      : () => this.setState({ isExiting: true });
    switch (current) {
      case 1:
        return (
          <Fragment>
            <Header
              onClickClose={onClickClose}
              data-test="MfaSelectionTypeExit"
            />
            {isExiting && this.renderExitConfirmation()}
            {!isExiting && (
              <Wrapper paddingLeft={131} paddingRight={131}>
                <TypeSelection
                  changeCurrentScreen={this.changeCurrentScreen}
                  notification={notification}
                />
              </Wrapper>
            )}
          </Fragment>
        );
      case 2:
        return (
          <Fragment>
            <Header dataTest="MfaAddpBbmBack" />
            {isExiting && this.renderExitConfirmation()}
            {!isExiting && (
              <Wrapper paddingLeft={194} paddingRight={194}>
                <LaterRegistration
                  changeCurrentScreen={this.changeCurrentScreen}
                  handleClose={this.handleClose}
                />
              </Wrapper>
            )}
          </Fragment>
        );

      case 3:
        return (
          <Fragment>
            <Header
              onClickBack={
                isExiting ? false : () => this.changeCurrentScreen(1)
              }
              dataTest="MfaAddpBbmBack"
            />
            {isExiting && this.renderExitConfirmation()}
            {!isExiting && (
              <Wrapper paddingLeft={131} paddingRight={131}>
                <AppBbm
                  changeCurrentScreen={this.changeCurrentScreen}
                  handleClose={this.handleSuccessClose}
                />
              </Wrapper>
            )}
          </Fragment>
        );
      case 4:
        return (
          <Fragment>
            <Header
              onClickBack={
                isExiting
                  ? false
                  : this.props.methodChanging
                  ? () => this.props.changeFactorTogle(false)
                  : () => this.changeCurrentScreen(1)
              }
              dataTest="MfaValidation"
            />

            {isExiting && this.renderExitConfirmation()}
            {!isExiting && (
              <Wrapper paddingLeft={120} paddingRight={120}>
                <MfaValidation
                  changeCurrentScreen={this.changeCurrentScreen}
                  props={this.props}
                  authFactorResponse={authFactorResponse}
                />
              </Wrapper>
            )}
          </Fragment>
        );
      case 5:
        return (
          <Fragment>
            <Header
              onClickBack={
                isExiting ? false : () => this.changeCurrentScreen(1)
              }
              onClickClose={onClickClose}
            />
            {isExiting && this.renderExitConfirmation()}
            {!isExiting && (
              <Wrapper
                paddingLeft={118}
                paddingRight={118}
                dataTest="MfaAddAuthBack"
              >
                <AppAuth changeCurrentScreen={this.changeCurrentScreen} />
              </Wrapper>
            )}
          </Fragment>
        );
      case 6:
        return (
          <Fragment>
            <Header
              onClickBack={
                isExiting ? false : () => this.changeCurrentScreen(5)
              }
              onClickClose={onClickClose}
              dataTest="qrCode-close"
            />
            {isExiting && this.renderExitConfirmation()}
            {!isExiting && (
              <Wrapper paddingLeft={120} paddingRight={120}>
                <QrCode
                  changeCurrentScreen={this.changeCurrentScreen}
                  openToastr={this.props.openToastr}
                  closeToastr={this.props.closeToastr}
                  activationURL={authFactorResponse.activationURL}
                  submitToken={this.submitToken}
                />
              </Wrapper>
            )}
          </Fragment>
        );
      case 7:
        return (
          <Fragment>
            <Header onClickClose={onClickClose} dataTest="MfaSuccessExit" />
            {isExiting && this.renderExitConfirmation()}
            {!isExiting && (
              <Wrapper paddingLeft={140} paddingRight={140}>
                <Success
                  changeCurrentScreen={this.changeCurrentScreen}
                  handleClose={this.handleSuccessClose}
                />
              </Wrapper>
            )}
          </Fragment>
        );
    }
  }
}
export default MfaBoardingScreens;
