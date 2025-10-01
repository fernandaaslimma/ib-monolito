import React, { Component } from "react";
import { translate } from "../../utils/i18n";
import Icon from "../../components/common/Icon";
import DefaultContent from "../../components/common/DefaultContent";
import Button from "../../components/common/Button";
import { Content, LinkText, SecondaryText, Wrapper } from "./styles";

class ErrorProccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconType: "Warning",
      primaryText: "WE_ARE_SORRY_BUT_WE_WERE_UNABLE_TO_SERVICE_YOUR_REQUEST",
      customizedMessage: (
        <SecondaryText>
          {translate(
            "THE_SERVICE_IS_TEMPORARILY_UNAVAILABLE_AND_OUR_ENGINEERS_ARE_WORKING_QUICKLY_TO_RESOLVE_THE_ISSUE"
          )}
          <LinkText href={translate("CONTACT_LINK_URL")}>
            {translate("CONTACT_LINK_URL")}
          </LinkText>
        </SecondaryText>
      ),
      showGoHome: true,
      goPath: undefined,
      messageFromBackend: false
    };
  }

  async componentDidMount() {
    const { errorStatus } = this.props;

    if (errorStatus && typeof errorStatus.json === "function") {
      errorStatus.json().then(response => {
        if (
          response.statusCode === 404 &&
          response.messages[0] === "Approvement Flow Not Found."
        ) {
          this.setState({
            iconType: "WarnDocument",
            primaryText: "ERROR_PROCESS_PROCURATION_ERROR_TITLE",
            secondaryTexts: [
              translate("ERROR_PROCESS_PROCURATION_ERROR_MSG_1"),
              translate("ERROR_PROCESS_PROCURATION_ERROR_MSG_2")
            ],
            showGoHome: true,
            goPath: "/cashaccounts/dashboard",
            buttonMessage: "ERROR_PROCESS_BUTTON_MESSAGE"
          });
          return;
        }
      });
    }

    if (errorStatus && errorStatus.showErrorToUser === true) {
      const secondaryTexts = errorStatus.errors[0].message.split("\n\n");

      this.setState({
        primaryText: errorStatus.errors[0].title,
        secondaryTexts: secondaryTexts,
        messageFromBackend: true
      });
      return;
    }

    if (errorStatus && errorStatus.typeError) {
      switch (errorStatus.typeError) {
        case "Offline":
          this.setState({
            iconType: "ConnectionLost",
            primaryText: "LOOKS_LIKE_YOU_ARE_OUT_OF_CONNECTION",
            secondaryTexts: [
              translate("CHECK_YOUR_INTERNET_AND_TRY_TO_RECONNECT")
            ],
            showGoHome: false
          });
          break;

        default:
      }
    } else {
      return;
    }
  }

  render() {
    const { goHome } = this.props;
    const {
      messageFromBackend,
      primaryText,
      secondaryTexts,
      iconType,
      showGoHome,
      goPath,
      buttonMessage,
      customizedMessage
    } = this.state;

    return (
      <Wrapper>
        <DefaultContent
          data-test="error-boundary"
          minHeight="593"
          paddingTop={80}
          marginBottom={30}
          Icon={() => <Icon type={iconType} />}
          primaryText={
            messageFromBackend ? primaryText : translate(primaryText)
          }
          secondaryTexts={secondaryTexts}
          customizedMessage={customizedMessage}
        >
          <Content>
            {showGoHome ? (
              <Button
                dataTest="button-not-found"
                onClick={() => goHome(goPath)}
                width={200}
                actionSecondary={true}
              >
                {buttonMessage
                  ? translate(buttonMessage)
                  : translate("BACK_TO_HOME_SCREEN")}
              </Button>
            ) : null}
          </Content>
        </DefaultContent>
      </Wrapper>
    );
  }
}

export default ErrorProccess;
