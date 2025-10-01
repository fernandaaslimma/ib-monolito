import React, { Fragment, Component } from "react";
import { Redirect } from "react-router-dom";
import Icon from "../common/Icon/";
import Link from "../common/Link";
import { string, func, shape, bool } from "prop-types";
import { translate } from "../../utils/i18n";
import { checkValidEmail } from "../../utils/validations/login";
import { isInternetExplorer } from "../../utils/getNavigator";
import { preflightForInternetExplorer } from "../../services/login";

import Input from "../common/Input";
import Button from "../common/Button";
import {
  Header,
  IconWrapper,
  Title,
  ButtonWrapper,
  BackButtonWrapper,
  Subtitle
} from "./styles";

import { Wrapper, Content, Container } from "../Login/styles";

class RecoverPassword extends Component {
  constructor(props) {
    super(props);

    this.isSubmitDisabled = this.isSubmitDisabled.bind(this);
    this.isValidEmail = this.isValidEmail.bind(this);
  }
  componentWillMount() {
    /*
    This request is required for Internet Explorer only
    It makes a preflight request without the headers.
    */
    if (isInternetExplorer()) {
      preflightForInternetExplorer();
    }
  }

  isSubmitDisabled(isValidEmail, email) {
    return isValidEmail && email.length < 4;
  }

  isValidEmail(email) {
    return checkValidEmail(email) || null;
  }

  render() {
    const {
      handleUserInputRecoverPassword,
      recoverPassword,
      handleUserSubmit,
      cleanPasswordSuccess,
      recoverPasswordSuccess
    } = this.props;
    if (recoverPasswordSuccess) {
      return (
        <Redirect
          to={{
            pathname: "/email-sent",
            search: `?email=${recoverPassword.email}`
          }}
        />
      );
    }
    return (
      <Fragment>
        <Container>
          <Wrapper data-test="RecoverPassword">
            <Header>
              <IconWrapper>
                <Icon type="BrandLogo" />
              </IconWrapper>
            </Header>
            <Content>
              <Title>{translate("RECOVER_PASSWORD")}</Title>
              <Subtitle>{translate("INSERT_EMAIL_TO_SEND_PASSWORD")}</Subtitle>
              <form onSubmit={handleUserSubmit} noValidate>
                <Input
                  icon="Email"
                  type="text"
                  name="email"
                  onChange={handleUserInputRecoverPassword}
                  autoComplete="new-password"
                  dataTest="RecoveryEmail"
                  label={translate("EMAIL")}
                  value={recoverPassword.email}
                  valid={() => this.isValidEmail(recoverPassword.email)}
                />
                <ButtonWrapper>
                  <Button
                    disabled={!this.isValidEmail(recoverPassword.email)}
                    opacity={0.5}
                    dataTest="SendButton"
                    isCallToAction
                    width="180"
                    type="submit"
                  >
                    {translate("SEND")}
                  </Button>
                </ButtonWrapper>
                <BackButtonWrapper>
                  <Link
                    to={"/"}
                    anchor
                    noSpan
                    opacity={1}
                    dataTest="BackToHomeScreen"
                    onClick={cleanPasswordSuccess}
                  >
                    {translate("BACK_TO_LOGIN")}
                  </Link>
                </BackButtonWrapper>
              </form>
            </Content>
          </Wrapper>
        </Container>
      </Fragment>
    );
  }
}

RecoverPassword.defaultProps = {
  recoverPassword: {
    email: ""
  },
  recoverPasswordSuccess: false
};

RecoverPassword.propTypes = {
  handleUserInputRecoverPassword: func.isRequired,
  handleUserSubmit: func.isRequired,
  recoverPassword: shape({
    email: string
  }),
  recoverPasswordSuccess: bool
};

export default RecoverPassword;
