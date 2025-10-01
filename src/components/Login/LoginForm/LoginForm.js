import React, { Component } from "react";
import { func, shape, string } from "prop-types";

import { translate } from "../../../utils/i18n";
import { VOID } from "../../../utils/constants";

import Link from "../../common/Link";

import {
  checkValidEmail,
  checkValidPassword
} from "../../../utils/validations/login";

import VirtualKeyboard from "../../common/VirtualKeyboard";
import Input from "../../common/Input";
import { ButtonWrapper, ErrorMessage, FloatingText } from "./styles";

export const isValid = (loginError, isValidField) => {
  if (loginError === true) {
    return false;
  }
  return isValidField;
};

export const isDisabled = (isValidEmail, isValidPassword) => {
  return !(isValidEmail && isValidPassword);
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };

    this.submit = this.submit.bind(this);
  }

  onVirtualKeyboardKeyDown(value) {
    const { handleLoginPassword, login } = this.props;
    handleLoginPassword(login.password ? login.password + value : value);
    this.$password && this.$password.focus();
  }

  componentDidUpdate() {
    const { login } = this.props;
    const { isLoading } = this.state;

    if (isLoading && login.error) {
      this.setState({ isLoading: false });
    }
  }

  submit(e) {
    this.setState({ isLoading: true });
    this.props.handleUserSubmit(e);
  }

  render() {
    const { handleUserInput, login, handleLoginPassword } = this.props;

    const { isLoading } = this.state;

    const loginError = login.error && login.error.status === 401;
    const isValidEmail = checkValidEmail(login.email) || null;
    const isValidPassword = checkValidPassword(login.password) || null;

    return (
      <form noValidate>
        <Input
          icon="Email"
          onChange={handleUserInput}
          type="text"
          name="email"
          autoComplete="new-password"
          valid={() => isValid(loginError, isValidEmail)}
          value={login.email}
          label={translate("EMAIL")}
        />
        <Input
          icon="Lock"
          type="password"
          readOnly
          name="password"
          autoComplete="off"
          label={translate("PASSWORD")}
          innerRef={el => (this.$password = el)}
          valid={loginError ? false : () => isValidPassword}
          value={login.password}
        />
        <ErrorMessage>
          {loginError && translate("INCORRECT_EMAIL_OR_PASSWORD")}
        </ErrorMessage>
        <VirtualKeyboard
          onKeyDown={this.onVirtualKeyboardKeyDown.bind(this)}
          alwaysActive
          onErase={() => handleLoginPassword("")}
        />
        <ButtonWrapper>
          <Link
            href={VOID}
            dataTest="LoginBtn"
            onClick={this.submit}
            disabled={isDisabled(isValidEmail, isValidPassword) || !!isLoading}
            isCallToAction
            loading={!!isLoading}
          >
            {translate("ACCESS_MY_ACCOUNT")}
          </Link>
        </ButtonWrapper>{" "}
        <FloatingText>
          <Link
            to={"/recover-password"}
            anchor
            noSpan
            opacity={1}
            dataTest="ForgotPasswordLink"
          >
            {translate("FORGOT_MY_PASSWORD")}
          </Link>
        </FloatingText>
      </form>
    );
  }
}

LoginForm.defaultProps = {
  login: {}
};

LoginForm.propTypes = {
  login: shape({
    email: string,
    password: string
  }),
  handleUserSubmit: func.isRequired,
  getUserInfo: func,
  handleUserInput: func.isRequired
};

export default LoginForm;
