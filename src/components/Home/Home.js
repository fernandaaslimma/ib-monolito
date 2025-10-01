import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { func } from "prop-types";

import {
  GET_CONTRACT,
  GET_TRANSACTIONS,
  GET_POSITION,
  SUITABILITY_NOTIFICATION_TYPE,
  REGISTRATION_DATA_NOTIFICATION_TYPE,
  GET_EFT,
  MFABOARDING_NOTIFICATION_TYPE,
  GET_STATEMENT,
  CORPORATION,
  INDIVIDUAL,
  NEW_CONSENTS,
  APPROVE_TERMS_TYPE
} from "../../utils/constants";
import CanAccess from "../common/CanAccess";
import { redirect } from "../../utils/redirect";
import DefaultShimmerLoading from "../common/DefaultShimmerLoading";
import { getLanguage } from "../../utils/i18n";
import getQueryParam from "../../utils/getQueryParam";
import NoRoleScreen from "../common/NoRoleScreen";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      isMobileApp: typeof MOBILEAPP_Logout === "function"
    };
  }

  async componentDidMount() {
    const {
      getNotification,
      setLanguage,
      justLoggedIn,
      setJustLoggedIn,
      notification
    } = this.props;

    if (
      (justLoggedIn === true && !this.props.userInfo.preferredLanguage) ||
      (this.state.isMobileApp && !this.props.userInfo.preferredLanguage)
    ) {
      !notification && (await getNotification());
      justLoggedIn === true && setJustLoggedIn(false);
    } else if (
      (justLoggedIn === true &&
        getLanguage() !== this.props.userInfo.preferredLanguage) ||
      (this.state.isMobileApp &&
        getLanguage() !== this.props.userInfo.preferredLanguage)
    ) {
      setLanguage(this.props.userInfo.preferredLanguage);
      !notification && (await getNotification());
      justLoggedIn === true && setJustLoggedIn(false);
    } else if (
      (justLoggedIn === true &&
        getLanguage() === this.props.userInfo.preferredLanguage) ||
      (this.state.isMobileApp &&
        getLanguage() === this.props.userInfo.preferredLanguage)
    ) {
      !notification && (await getNotification());
      justLoggedIn === true && setJustLoggedIn(false);
    }

    this.setState({ loaded: true });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.userInfo &&
      this.props.userInfo.preferredLanguage &&
      !prevProps.userInfo.preferredLanguage
    ) {
      this.props.setLanguage(this.props.userInfo.preferredLanguage);
    }
  }

  render() {
    const { loaded } = this.state;
    const {
      notification,
      store,
      isConsentFlow,
      isConsentFlowConfirmation,
      isConsentFlowCancel,
      setOpenBankingInfoConfirmation,
      setNotificationSelect,
      userInfo
    } = this.props;
    const { notificated } = store.getState();
    const isMobileBrowser = window.matchMedia("(max-width: 760px)").matches;
    const defaultRedirects = (
      userInfo?.tenants?.length <= 0 && userInfo?.roles === null ?
        (<Fragment>
          <NoRoleScreen />
        </Fragment>) :
        (<Fragment>
          <CanAccess roles={[NEW_CONSENTS]} tenants={[CORPORATION, INDIVIDUAL]}>
            <Redirect to="/open-banking/new-consent" />
          </CanAccess>
          <CanAccess roles={[GET_CONTRACT]} tenants={[CORPORATION, INDIVIDUAL]}>
            <Redirect to="/exchanges/unsigned" />
          </CanAccess>
          <CanAccess
            roles={[GET_TRANSACTIONS]}
            tenants={[CORPORATION, INDIVIDUAL]}
          >
            <Redirect to="/investments/transactions/fixed-income" />
          </CanAccess>
          <CanAccess roles={[GET_POSITION]} tenants={[CORPORATION, INDIVIDUAL]}>
            <Redirect to="/investments/positions/fixed-income" />
          </CanAccess>
          <CanAccess roles={[GET_EFT]} tenants={[CORPORATION, INDIVIDUAL]}>
            <Redirect to="/cashaccounts/dashboard" />
          </CanAccess>
          <CanAccess
            roles={[GET_TRANSACTIONS, GET_POSITION]}
            tenants={[INDIVIDUAL]}
          >
            <Redirect to="/investments/overview" />
          </CanAccess>
          <CanAccess roles={[GET_STATEMENT]} tenants={[CORPORATION]}>
            <Redirect to="/cashaccounts/statements" />
          </CanAccess>
        </Fragment>)
    );

    const code = getQueryParam(location, "code", true);
    const state = getQueryParam(location, "state", true);
    const id_token = getQueryParam(location, "id_token", true);
    const session_state = getQueryParam(location, "session_state", true);
    const error = getQueryParam(location, "error", true);

    let openBankingReceivedInfoConfirmation = {
      state,
      code,
      id_token,
      session_state,
      error
    };

    setOpenBankingInfoConfirmation(
      openBankingReceivedInfoConfirmation,
      location
    );

    if (loaded) {
      if (isConsentFlow || isConsentFlowConfirmation || isConsentFlowCancel) {
        redirect("/open-banking/consent");
        return false;
      }

      if (
        notification &&
        (!notificated[MFABOARDING_NOTIFICATION_TYPE] ||
          !notificated[SUITABILITY_NOTIFICATION_TYPE] ||
          !notificated[REGISTRATION_DATA_NOTIFICATION_TYPE])
      ) {
        const allNotificated = notification.every(item => {
          if (
            item.type === "MFABoarding" &&
            !notificated[MFABOARDING_NOTIFICATION_TYPE] &&
            !this.state.isMobileApp &&
            !isMobileBrowser
          ) {
            redirect("/mfaboarding");
            return false;
          }
          if (
            item.type === "SuitabilityForms" &&
            !notificated[SUITABILITY_NOTIFICATION_TYPE] &&
            (typeof MOBILEAPP_Logout !== "function" ||
              __SHOW_SUITABILITY_CONTENT_MOBILE__ === "true")
          ) {
            redirect("/suitability/form");
            return false;
          }
          if (
            item.type === "PersonRegistrationForms" &&
            !notificated[REGISTRATION_DATA_NOTIFICATION_TYPE]
          ) {
            redirect("/registrationData");
            return false;
          }
          if (item.type === APPROVE_TERMS_TYPE && !notificated[`${APPROVE_TERMS_TYPE}${item?.parameters?.find(x => x?.type === "termId")?.id}`]) {
            setNotificationSelect(item?.parameters?.find(x => x?.type === "termId")?.id);
            redirect("/approve-new-terms");
            return false;
          }

          if (item.type === "navigateTo" && !notificated[`${item.id}`]) {
            redirect("/notification");
            return false;
          }
          return true;
        });
        if (allNotificated) {
          return defaultRedirects;
        }
      } else {
        return defaultRedirects;
      }
    }
    return <DefaultShimmerLoading repeat={2} innerRepeat={3} />;
  }
}

Home.propTypes = {
  getUserInfo: func.isRequired
};

export default Home;
