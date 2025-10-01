import React, { Fragment, Component } from "react";
import { Redirect } from "react-router-dom";
import { shape, string, func, bool } from "prop-types";

import Icon from "../common/Icon";
import { translate, getLanguage } from "../../utils/i18n";
import Link from "../common/Link";
import Input from "../common/Input";
import getParam from "../../utils/getParamFromLocation";
import PasswordTooltip from "../common/PasswordTooltip";

import {
  Header,
  HeaderName,
  HeaderEmail,
  IconWrapper,
  Title,
  SubTitle,
  ButtonWrapper,
  FloatingText,
  ErrorMessage,
  HeaderSub
} from "./styles";

import { Wrapper, Content, Container } from "../Login/styles";

import VirtualKeyboard from "../common/VirtualKeyboard.old";
import { VOID } from "../../utils/constants";

export const isSubmitDisabled = createPassword => {
  return !(
    createPassword &&
    createPassword.password &&
    createPassword.document &&
    createPassword.passwordConfirmation &&
    createPassword.document.replace(/[^a-zA-Z0-9]/g, "").length >= 6 &&
    createPassword.password.length === 8 &&
    createPassword.passwordConfirmation.length === 8
  );
};

export const checkPasswordErrors = (password, passwordMatch) => {
  return password === undefined ? null : !(password || passwordMatch);
};

class CreatePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };

    this.submit = this.submit.bind(this);
  }

  componentDidUpdate() {
    const { createPasswordSuccess, createPassword } = this.props;
    const { isLoading } = this.state;

    if (
      isLoading &&
      (createPasswordSuccess === false ||
        JSON.stringify({}) !== JSON.stringify(createPassword.error))
    ) {
      this.setState({ isLoading: false });
    }
  }

  submit(e, otp, createPassword) {
    this.setState({ isLoading: true });
    this.props.handleUserSubmit(e, otp, createPassword);
  }

  verifySize(valueDocument) {
    return () => {
      if (!valueDocument) return false;
      let cleanValue = valueDocument.replace(/[^a-zA-Z0-9]/g, "");
      if (cleanValue.length >= 6 && cleanValue.length <= 15) return true;
      return false;
    };
  }

  render() {
    const {
      createPassword,
      handleUserInput,
      location,
      createPasswordSuccess,
      setLanguage
    } = this.props;

    const { isLoading } = this.state;

    const culture = getParam(location, "Culture");
    if (culture && culture !== getLanguage()) {
      setLanguage(culture);
    }

    const otp = getParam(location, "otp", true);
    const name = decodeURIComponent(getParam(location, "name"));
    const email = decodeURIComponent(getParam(location, "email"));

    if (createPasswordSuccess) {
      return <Redirect to={{ pathname: "/", search: `?email=${email}` }} />;
    }

    return (
      <Fragment>
        <Container>
          <Wrapper>
            <FloatingText>{translate("PASSWORD")}</FloatingText>
            <Header>
              <IconWrapper>
                <Icon type="BrandLogo" />
              </IconWrapper>
              <HeaderSub>
                <HeaderName>
                  {translate("WELCOME")} {name}
                </HeaderName>
                <HeaderEmail>{email}</HeaderEmail>
              </HeaderSub>
            </Header>
            <form noValidate>
              <Content>
                <Title>{translate("CREATE_YOUR_NEW_ACCESS_PASSWORD")}</Title>
                <SubTitle>
                  {translate("CREATE_A_NEW_PASSWORD_WITH_8_DIGITS")}
                </SubTitle>
                <Input
                  maskType="documents"
                  icon="PersonId"
                  onChange={handleUserInput}
                  value={createPassword.document}
                  type="text"
                  name="document"
                  autoComplete="document"
                  label={translate("DOCUMENT_RESET_PASSWORD")}
                  valid={this.verifySize(createPassword.document)}
                />
                <VirtualKeyboard.Input
                  render={() => (
                    <Input
                      icon="Lock"
                      onChange={handleUserInput}
                      value={createPassword.password}
                      type="password"
                      name="password"
                      autoComplete="new-password"
                      label={translate("NEW_PASSWORD")}
                      msgFocusInput={() => <PasswordTooltip />}
                      valid={checkPasswordErrors(
                        createPassword.error.password,
                        createPassword.error.passwordMatch
                      )}
                    />
                  )}
                />

                <VirtualKeyboard.Input
                  render={() => (
                    <Input
                      icon="Lock"
                      onChange={handleUserInput}
                      value={createPassword.passwordConfirmation}
                      type="password"
                      name="passwordConfirmation"
                      autoComplete="new-password"
                      label={translate("REPEAT_NEW_PASSWORD")}
                      valid={checkPasswordErrors(
                        createPassword.error.passwordConfirmation,
                        createPassword.error.passwordMatch
                      )}
                    />
                  )}
                />

                <ErrorMessage data-test="CreatePasswordError">
                  {(createPassword.error.password ||
                    createPassword.error.passwordConfirmation) &&
                    translate("PASSWORD_MUST_HAVE_8_DIGITS")}
                  {createPassword.error.passwordMatch &&
                    translate("PASSWORDS_DONT_MATCH")}
                  {createPassword.error.otp &&
                    translate(
                      "THIS_LINK_IS_NO_LONGER_VALID_FOR_RESETTING_YOUR_PASSWORD_THE_LINK_YOU_RECEIVED_HAS_EXPERIED_OR_YOU_MAY_HAVE_ALREADY_USED_IT"
                    )}
                  {createPassword.error.default &&
                    translate(
                      "UNABLE_TO_CREATE_PASSWORD_PLEASE_TRY_AGAIN_LATER"
                    )}
                  {createPassword.error.sequentialPasswords &&
                    translate("SEQUENTIAL_PASSWORDS_ARE_NOT_ALLOWED")}
                  {createPassword.error.birthdayOrSSN &&
                    translate(
                      "PASSWORDS_WITH_YOUR_BIRTHDATE_OR_SSN_ARE_NOT_ALLOWED"
                    )}
                  {createPassword.error.fourAlgarisms &&
                    translate(
                      "PASSWORDS_MUST_HAVE_AT_LEAST_4_DIFFERENT_ALGARISMS"
                    )}
                  {createPassword.error.infoUnmatch &&
                    translate("INFO_DONT_MATCH")}
                  {createPassword.error.retryLimitExceeded &&
                    translate("RETRY_LIMIT_EXCEEDED")}
                </ErrorMessage>
                <VirtualKeyboard />
                <ButtonWrapper>
                  <Link
                    href={VOID}
                    dataTest="CreatePasswordBtn"
                    onClick={e => this.submit(e, otp, createPassword)}
                    disabled={isSubmitDisabled(createPassword) || !!isLoading}
                    isCallToAction
                    loading={!!isLoading}
                  >
                    {translate("CREATE_PASSWORD")}
                  </Link>
                </ButtonWrapper>
              </Content>
            </form>
          </Wrapper>
        </Container>
      </Fragment>
    );
  }
}

CreatePassword.defaultProps = {
  createPasswordSuccess: null,
  createPassword: {
    password: "",
    passwordConfirmation: "",
    error: {}
  }
};

CreatePassword.propTypes = {
  createPasswordSuccess: bool,
  createPassword: shape({
    password: string,
    passwordConfirmation: string,
    error: shape({
      password: bool,
      passwordConfirmation: bool,
      passwordMatch: bool,
      otp: bool
    })
  }),
  handleUserSubmit: func.isRequired,
  handleUserInput: func.isRequired
};

export default CreatePassword;
