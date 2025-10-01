import React, { Fragment, Component } from "react";
import { func, shape, string, bool } from "prop-types";
import Icon from "../common/Icon/";
import { translate, getLanguage } from "../../utils/i18n";
import { isInternetExplorer } from "../../utils/getNavigator";
import { preflightForInternetExplorer } from "../../services/login";
import LoginForm from "./LoginForm";
import getQueryParam from "../../utils/getQueryParam";
import { redirect } from "../../utils/redirect";

import {
  MOBILE_HASH_PREFIX,
  IMPERSONATE_HASH_PREFIX,
  PT_BR,
  EN_US,
  ZH_CN
} from "../../utils/constants";

import {
  Wrapper,
  Header,
  IconWrapper,
  Title,
  FloatingText,
  Content,
  Container
} from "./styles";

function clearCultureLocation(culture) {
  window.location = window.location.href.replace(`?Culture=${culture}`, "");
}

function hasMobileHash(hash) {
  return hash.includes(MOBILE_HASH_PREFIX);
}

function hasImpersonateHash(hash) {
  return hash.includes(IMPERSONATE_HASH_PREFIX);
}

class Login extends Component {
  componentWillMount() {
    /*
      This request is required for Internet Explorer only
      It makes a preflight request without the headers.
    */
    if (isInternetExplorer()) {
      preflightForInternetExplorer();
    }
  }

  componentDidMount() {
    const {
      openToastr,
      updateEmail,
      setLanguage,
      clearLanguageWithoutClearSessionStorage,
      setOpenBankingInfo
    } = this.props;

    const scope = getQueryParam(location, "scope");
    const intent_id = getQueryParam(location, "intent_id");
    const redirect_uri = getQueryParam(location, "redirect_uri");
    const state = getQueryParam(location, "state");

    let openBankingReceivedInfo = {
      scope,
      intent_id,
      redirect_uri,
      state
    };

    scope &&
      intent_id &&
      redirect_uri &&
      setOpenBankingInfo(openBankingReceivedInfo, location);

    const email = getQueryParam(location, "email");
    const validCultures = [PT_BR, EN_US, ZH_CN];

    setTimeout(() => {
      if (email) {
        updateEmail(email);
        openToastr({
          text: translate("YOUR_PASSWORD_HAS_BEEN_SUCCESSFULLY_REGISTERED"),
          isBelow: false,
          isTop: true
        });
      }
    }, 500);

    const culture = getQueryParam(location, "Culture");

    if (
      culture &&
      validCultures.includes(culture) &&
      culture !== getLanguage()
    ) {
      setLanguage(culture);
      clearLanguageWithoutClearSessionStorage();
      clearCultureLocation(culture);
    }

    culture && clearCultureLocation(culture);
  }

  render() {
    const {
      loginSuccess,
      clearLoginError,
      login,
      openModal,
      location,
      handleMobileHash,
      handleImpersonateHash,
      setJustLoggedIn
    } = this.props;

    const mobileHash = hasMobileHash(location.hash);
    const impersonateHash = hasImpersonateHash(location.hash);

    const state = getQueryParam(location, "state", true);
    const code = getQueryParam(location, "code", true);
    const error = getQueryParam(location, "error", true);

    if (loginSuccess) {
      if ((state && code) || (state && error)) {
        setJustLoggedIn(true);
        redirect(`/home/${location.hash}`);
        return null;
      } else {
        setJustLoggedIn(true);
        redirect("/home");
        return null;
      }
    }

    if (login.error && openModal && login.error.status !== 401) {
      openModal({
        title: translate(
          "WE_ARE_SORRY_BUT_WE_WERE_UNABLE_TO_SERVICE_YOUR_REQUEST"
        ),
        icon: "Attention",
        description: [
          translate(
            "THE_SERVICE_IS_TEMPORARILY_UNAVAILABLE_AND_OUR_ENGINEERS_ARE_WORKING_QUICKLY_TO_RESOLVE_THE_ISSUE"
          ),
          translate("TRY_AGAIN_LATER")
        ],
        onClose: () => clearLoginError()
      });
    }

    if (mobileHash && !loginSuccess) {
      handleMobileHash(location.hash.split(MOBILE_HASH_PREFIX).pop()).then(
        () => {
          redirect("/home");
        }
      );
      return "";
    }

    if (impersonateHash && !loginSuccess) {
      handleImpersonateHash(
        location.hash.split(IMPERSONATE_HASH_PREFIX).pop()
      ).then(() => {
        redirect("/home");
      });
      return "";
    }

    return (
      <Fragment>
        <Container>
          <Wrapper data-test="Login">
            <FloatingText>{translate("LOGIN")}</FloatingText>
            <Header>
              <IconWrapper>
                <Icon type="BrandLogo" />
              </IconWrapper>
            </Header>
            <Content>
              <Title>{translate("SIGN_IN_TO_YOUR_ACCOUNT_BELOW")}</Title>
              <LoginForm />
            </Content>
          </Wrapper>
        </Container>
      </Fragment>
    );
  }
}

Login.defaultProps = {
  login: {},
  loginSuccess: false
};

Login.propTypes = {
  login: shape({
    email: string,
    password: string
  }),
  loginSuccess: bool,
  handleMobileHash: func.isRequired,
  handleImpersonateHash: func.isRequired,
  handleUserSubmit: func.isRequired,
  getUserInfo: func,
  handleUserInput: func.isRequired,
  openModal: func.isRequired,
  openToastr: func.isRequired,
  updateEmail: func.isRequired
};

export default Login;
