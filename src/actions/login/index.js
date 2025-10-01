import * as loginAPI from "../../services/login";
import {
  setAccessToken,
  setRefreshToken,
  setSessionExpirationTime
} from "../../utils/token";
import { checkViewContextAndRedirect } from "../../utils/fetchHandler";
import { translate } from "../../utils/i18n";

const actions = store => ({
  handleUserInput: (state, e) => {
    const { name, value } = e.target;
    return {
      login: {
        ...state.login,
        error: null,
        [name]: value.trim()
      }
    };
  },
  handleLoginPassword: (state, value) => {
    return {
      login: {
        ...state.login,
        password: value
      }
    };
  },
  handleMobileHash: (state, hash) => {
    return loginAPI
      .autoSignInFromMobileHash(hash)
      .then(resp => resp.json())
      .then(resp => {
        setAccessToken(resp.access_token);
        setRefreshToken(resp.refresh_token);
        setSessionExpirationTime(resp.session_expires_in);

        return {
          loginSuccess: true,
          login: {},
          skipLoading: false
        };
      })
      .catch(() => {
        checkViewContextAndRedirect();
      });
  },
  handleImpersonateHash: (state, hash) => {
    return loginAPI
      .autoSignInFromImpersonateHash(hash)
      .then(resp => resp.json())
      .then(resp => {
        setAccessToken(resp.access_token);
        setRefreshToken(resp.refresh_token);
        setSessionExpirationTime(resp.session_expires_in);

        return {
          loginSuccess: true,
          login: {},
          skipLoading: false
        };
      })
      .catch(() => {
        checkViewContextAndRedirect();
      });
  },
  handleUserSubmit: (state, e) => {
    e.preventDefault();
    store.setState({ skipLoading: true, pBase64: state.login.password });

    return loginAPI
      .signIn(state.login.email, state.login.password)
      .then(resp => resp.json())
      .then(resp => {
        setAccessToken(resp.access_token);
        setRefreshToken(resp.refresh_token);
        setSessionExpirationTime(resp.session_expires_in);

        localStorage.setItem("isGlobalMode", translate("OFFSHORE_BRAZIL"));
        return {
          loginSuccess: true,
          login: {},
          skipLoading: false
        };
      })
      .catch(error => {
        return {
          loginSuccess: false,
          skipLoading: false,
          login: {
            ...state.login,
            error
          }
        };
      });
  },
  getUserInfo: () => {
    return loginAPI
      .getUserData()
      .then(resp => resp.json())
      .then(resp => {
        return {
          userInfo: {
            givenName: resp.givenName,
            surname: resp.surname,
            tenantsMembers: resp.users[0].tenants?.[0] ? resp.users[0].tenants[0].portfolios[0].portfolioMembers : null,
            tenants: resp.users[0].tenants.map(tenant => tenant.type),
            email: resp.users[0].mail,
            tenantsCode: resp.users[0].tenants?.[0] ? resp.users[0].tenants[0].code : null,
            roles: resp.users[0].tenants?.[0] ? resp.users[0].tenants[0].portfolios[0].roles : null,
            portfolioCode: resp.users[0].tenants?.[0] ? resp.users[0].tenants[0].portfolios[0].code : null,
            preferredLanguage: resp.users[0].preferredLanguage,
            impersonate: resp.act,
            document: resp.document,
            corpId: resp.corpId,
            id: resp.users[0].id,
            employee: resp.employee,
            qualifiedInvestor: resp.qualifiedInvestor,
            personId: resp.id
          }
        };
      })
      .catch(() => {
        return { userInfo: null };
      });
  },
  updateEmail: (state, email) => {
    return {
      login: {
        ...state.login,
        email
      }
    };
  },
  clearLoginError: state => {
    return {
      login: {
        ...state.login,
        error: null
      }
    };
  },
  setJustLoggedIn: (_, loggedIn) => {
    return {
      justLoggedIn: loggedIn
    };
  }
});

export default actions;
