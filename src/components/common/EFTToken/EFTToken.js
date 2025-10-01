import React, { Component } from "react";
import { func } from "prop-types";
import Icon from "../Icon";
import Input from "../Input";
import { translate } from "../../../utils/i18n";
import { starifyMail, starifyTelephone } from "../../../utils/starify";
import { telephoneMask } from "../../../utils/masks";
import { conformToMask } from "react-text-mask";
import SelectMethod from "./SelectMethod";
import { Button } from "react-bocombbm-components";
import {
  EFTModalWrapper,
  IconWrapper,
  Title,
  Message,
  ErrorMessage,
  FooterContainer,
  Padding,
  Disclaimer,
  Identificator,
  LinksWrapper,
  Loader,
  MfaWrapper,
  ButtonWrapper
} from "./styles";
import Timer from "../Timer";
import ClickWrapper from "../../../utils/clickWrapper";

class EFTToken extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      contentLoaded: false,
      validInput: false,
      relativeFactors: [],
      authFactor: [],
      showTimeOut: false
    };

    this.resetTimeOutStates = this.resetTimeOutStates.bind(this);
    this.sendAnotherToken = this.sendAnotherToken.bind(this);
    this.handleConfirmButton = this.handleConfirmButton.bind(this);
    this.changeCurrentMethod = this.changeCurrentMethod.bind(this);
    this.ref = React.createRef();
  }

  selectMFAMethod() {
    //this.setState({ methodChanging: true });
    this.props.changeFactorTogle(true);
  }

  async changeCurrentMethod(receivedMethodId) {
    await this.recreateAuthFactorCode(receivedMethodId);
    const receivedMethod = this.state.relativeFactors.filter(
      method => method.id === receivedMethodId
    );
    this.setState({ authFactor: receivedMethod[0] });
    this.props.changeFactorTogle(false);
  }

  sendAnotherToken() {
    this.setState({ showTimeOut: true });

    const { openToastr } = this.props;
    openToastr({
      text: translate("RESEND_TOKEN_EMAIL"),
      isBelow: false,
      isTop: true
    });
    this.recreateAuthFactorCode(this.state.authFactor.id);
  }

  async recreateAuthFactorCode(authFactorId) {
    const {
      createAuthCode,
      createAuthCodeParams,
      handleMFAInputClean,
      saveAccount
    } = this.props;
    const { payload, actionType } = createAuthCodeParams;

    await createAuthCode(payload, actionType, authFactorId, saveAccount);
    handleMFAInputClean();
  }

  async createAuthFactorCode() {
    const {
      getAuthFactors,
      createAuthCode,
      createAuthCodeParams,
      saveAccount
    } = this.props;
    const { payload, actionType } = createAuthCodeParams;

    await getAuthFactors();

    const relativeFactors = await this.props.authFactors.filter(factor => {
      if (factor.type === "mobile") {
        return false;
      }
      if (factor.actions.includes(actionType)) {
        return true;
      }
    });

    const authFactor = relativeFactors.reduce((acc, auth) => {
      if (auth.defaultAuth === true) {
        return auth;
      }
      return acc;
    });

    await createAuthCode(payload, actionType, authFactor.id, saveAccount);

    if (this.props.authFactors.length > 0) {
      this.setState({
        contentLoaded: true,
        authFactor: authFactor,
        relativeFactors: relativeFactors
      });
    }
  }

  async componentDidMount() {
    await this.props.changeFactorTogle(false);
    await this.createAuthFactorCode();
  }

  componentWillUnmount() {
    this.props.clearMFAToken();
    this.props.clearMFATokenValidated();
  }

  resetTimeOutStates() {
    this.setState({
      showTimeOut: false
    });
  }

  handleInputChange(...e) {
    this.setState({
      validInput: false
    });
    this.props.handleMFAInputToken(...e);
  }

  handleConfirmButton() {
    this.setState({ isLoading: true });

    this.props
      .checkMFA()
      .then(data => {
        this.props.onMFAConfirmation(data);
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          validInput: true
        });
        this.props.onMFAError(err);
      });
  }

  getMFAContent() {
    const { type, authUri } = this.state.authFactor;
    const dict = {
      mail: {
        icon: "Email",
        disclaimer: ` ${translate("MFA_EMAIL_DISCLAIMER")}`,
        indentificator: authUri ? starifyMail(authUri) : null,
        disclaimer2: ` ${translate("MFA_EMAIL_DISCLAIMER_2")}`,
        iconWidth: "96",
        iconHeight: "96",
        type
      },
      sms: {
        icon: "Sms",
        disclaimer: translate("MFA_SMS_DISCLAIMER"),
        indentificator: authUri
          ? conformToMask(starifyTelephone(authUri), telephoneMask)
              .conformedValue
          : null,
        type
      },
      mobile: {
        icon: "Smartphone",
        disclaimer: translate("MFA_APP_DISCLAIMER_1"),
        indentificator: translate("MFA_APP_DISCLAIMER_APP"),
        disclaimer2: translate("MFA_APP_DISCLAIMER_3"),
        iconWidth: "56",
        iconHeight: "100",
        type
      },
      totp: {
        icon: "MfaAuthenticator",
        disclaimer: translate("MFA_TOTP_DISCLAIMER"),
        iconWidth: "96",
        iconHeight: "96",
        type
      }
    };

    return dict[type];
  }

  renderContent() {
    const { mfaTokenValidated, mfaToken } = this.props;
    const { isLoading, contentLoaded, showTimeOut } = this.state;
    const enableMFAChange = this.state.relativeFactors.length > 1;

    if (!contentLoaded) {
      return <Loader />;
    }

    const {
      icon,
      disclaimer,
      disclaimer2,
      indentificator,
      iconWidth = "89",
      iconHeight = "58",
      type
    } = this.getMFAContent();

    return (
      <MfaWrapper>
        <IconWrapper>
          <Icon width={iconWidth} height={iconHeight} type={icon} />
        </IconWrapper>
        <Padding>
          <Disclaimer data-test="methodDisclaimer">
            {disclaimer}
            {indentificator && <Identificator>{indentificator}</Identificator>}
            {disclaimer2 && <span> {disclaimer2}</span>}
          </Disclaimer>
        </Padding>

        <ButtonWrapper>
          {type !== "mobile" && (
            <Input
              icon="Lock"
              onChange={e => this.handleInputChange(e)}
              type="password"
              name="token"
              valid={() => mfaTokenValidated}
              value={mfaToken}
              label={translate("TOKEN")}
              tinyLabels
              disableKeys={[13]}
              dataTest="TransactionTokenField"
              disabled={isLoading}
              innerRef={this.ref}
              inputMode={
                window.matchMedia("(max-width: 760px)").matches
                  ? "numeric"
                  : "text"
              }
            />
          )}

          <ErrorMessage
            data-test={`ModalFeedbackMsg${mfaTokenValidated === false ||
              this.state.validInput}`}
            visible={mfaTokenValidated === false || this.state.validInput}
          >
            {translate("TOKEN_ERROR_MESSAGE")}
          </ErrorMessage>
          {type !== "mobile" && (
            <ClickWrapper>
              <Button
                spacing={{ top: "xs", bottom: "s" }}
                id="Confirm"
                type="conclusive"
                block
                onClick={() => this.handleConfirmButton()}
                disabled={mfaToken.length < 1 || !contentLoaded}
                loading={!!isLoading}
                dataTest="Confirm"
              >
                {translate("MFA_CONFIRM_BTN")}
              </Button>
            </ClickWrapper>
          )}
        </ButtonWrapper>
        <FooterContainer>
          <LinksWrapper>
            {enableMFAChange && (
              <ClickWrapper>
                <Button
                  type="text"
                  spacing={{
                    top: "xs",
                    bottom: "none",
                    right: "none",
                    left: "none"
                  }}
                  small
                  dataTest="selectMFAMethod"
                  onClick={() => this.selectMFAMethod()}
                >
                  {translate("CHANGE_MFA_METHOD_START_BUTTON")}
                </Button>
              </ClickWrapper>
            )}

            {type === "mail" ? (
              showTimeOut ? (
                <ClickWrapper>
                  <Timer
                    startTimer={showTimeOut}
                    timeLeft={30}
                    expirationAction={() => this.resetTimeOutStates()}
                  />
                </ClickWrapper>
              ) : (
                <ClickWrapper>
                  <Button
                    type="text"
                    spacing={{ top: "xs", bottom: "none" }}
                    small
                    dataTest="ResendToken"
                    onClick={() => this.sendAnotherToken()}
                  >
                    {translate("MFA_RESEND_TOKEN")}
                  </Button>
                </ClickWrapper>
              )
            ) : null}
          </LinksWrapper>
        </FooterContainer>
      </MfaWrapper>
    );
  }

  render() {
    const { type } = this.state.authFactor;
    const methodsToSelect = this.state.relativeFactors.filter(
      method => method.type != type
    );
    const { title, noMessage, message } = this.props;
    return !this.props.methodChanging ? (
      <EFTModalWrapper>
        <div>
          {title ? (
            <Title>{title}</Title>
          ) : (
            <Title>{translate("MFA_TITLE")}</Title>
          )}
          {noMessage ? null : message ? (
            <Message>{message}</Message>
          ) : (
            <Message>{translate("MFA_MESSAGE")}</Message>
          )}

          {this.renderContent()}
        </div>
      </EFTModalWrapper>
    ) : (
      <EFTModalWrapper>
        <div>
          <Title>{translate("CHANGE_MFA_METHOD_TITLE")}</Title>
          {noMessage ? null : message ? (
            <Message>{message}</Message>
          ) : (
            <Message>{translate("CHANGE_MFA_METHOD_MESSAGE")}</Message>
          )}

          <MfaWrapper>
            <SelectMethod
              methods={methodsToSelect}
              changeCurrentMethod={this.changeCurrentMethod}
            />
          </MfaWrapper>
        </div>
      </EFTModalWrapper>
    );
  }
}

EFTToken.defaultProps = {
  mfaToken: "",
  //Default onMFAError function in case of not be sended
  //Best point to implement global MFA error treathment
  onMFAError: () => {}
};

EFTToken.propTypes = {
  onMFAConfirmation: func.isRequired,
  onMFAError: func.isRequired
};

export default EFTToken;
