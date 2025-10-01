/* eslint-disable react/display-name */
import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  UserContextMenu,
  Header as Head,
  NavigationMenu
} from "react-bocombbm-components";
import {
  LoaderArea,
  ChangeLanguageContainer,
  DesktopContent,
  NavigationMenuWrapper,
  HeadWrapper,
  PagenameContainer,
  PageMenu,
  PageSubMenu
} from "./styles";

import { translate } from "../../../utils/i18n";
import ChangeLanguage from "../ChangeLanguage";
import { MODAL_TYPES } from "../Modal/Modal";

import { redirect } from "../../../utils/redirect";
import { checkViewContextAndRedirect } from "../../../utils/fetchHandler";
import { checkIfHasAccess, checkUserType } from "../CanAccess/CanAccess";
import Hide from "../../common/Hide";

import {
  GET_TRANSACTIONS,
  GET_POSITION,
  GET_CONTRACT,
  GET_DOCUMENTS,
  CREATE_EFT,
  CREATE_APPROVE_EFT,
  APPROVE_EFT,
  GET_EFT,
  GET_PERSON_REGISTRATION,
  GET_TERMS,
  GET_NOTIFICATIONS,
  GET_STATEMENT,
  CORPORATION,
  INDIVIDUAL,
  INVESTMENT_PRODUCTS_LIST_URL,
  INVESTMENT_FUNDS_ROLE,
  INVESTMENT_FIXED_INCOME_ROLE,
  GET_CONSENTS,
  NEW_CONSENTS,
  SHIPMENTS_RETURN,
  SHIPMENTS_UPLOAD,
  VALIDATION_FILE,
  RECEIVABLES,
  INTERNATIONAL_TRANSFER,
  PRIVATEACCOUNT,
  TRANSACTIONALACCOUNT,
  GET_SUITABILITY_FORM,
  GET_RECEIVABLES_REPORTS
} from "../../../utils/constants";
import Menu from "../Menu";
import { rem } from "../../../styles/tools";
import history from "../../../services/history";
import LogoutContent from "./LogoutContent";
import { Context } from "../OffshoreSelect/offshoreContext";

export function userName(userInfo) {
  if (userInfo && userInfo.givenName) {
    return userInfo.givenName;
  }
  return translate("USER");
}

const Header = ({
  doLogout,
  openModal,
  closeModal,
  getAccounts,
  userInfo,
  isNavigationMenuShown,
  showNavigationMenu,
  accounts,
  openToastr,
  getInvestorProfile,
  investorProfile
}) => {
  const [currentMenuLabel, setCurrentMenuLabel] = useState("");
  const [currentSubMenuLabel, setCurrentSubMenuLabel] = useState("");
  const [config, setConfig] = useState([]);
  const [avatarConfig, setAvatarConfig] = useState([]);

  const { isGlobalMode } = useContext(Context);

  const logoutHandler = () => {
    openModal({
      type: MODAL_TYPES.PAGE_AS_MODAL,
      width: "auto",
      children: () => (
        <LogoutContent
          doLogout={() =>
            doLogout().then(() => {
              checkViewContextAndRedirect();
            })
          }
          closeModal={() => closeModal()}
        />
      )
    });
  };

  const mobileAditionalAction = {
    label: translate("ACCOUNT_LOGOUT"),
    icon: "Logout",
    action: logoutHandler
  };

  const redirectTo = path => {
    redirect(path);
  };

  const setGlobalMenu = () => {
    setConfig([
      {
        label: userInfo.givenName,
        icon: "Avatar",
        allowed: true,
        mobileOnly: true,
        routeLink: "/user_menu",
        subRouteLink: "/suitability",
        subtitle: investorProfile && translate("SUITABILITY_VIEW_PROFILE"),
        profileLabel: investorProfile,
        secondLevelLabel: translate("MY_PROFILE"),
        style: { padding: rem(16), marginTop: rem(24) },
        bankName: "107 - BOCOM BBM SA",
        accountNumber: accounts.length > 0 ? accounts[0].number : "",
        accountBranch: accounts.length > 0 ? accounts[0].branch : "",
        accountVerifyingDigit:
          accounts.length > 0 ? accounts[0].verifyingDigit : "",
        subItems: [
          {
            label: translate("REGISTRATION_DATA"),
            icon: "RegisterData",
            allowed: checkIfHasAccess(userInfo, [GET_PERSON_REGISTRATION]),
            alternativeLink: "/registrationData",
            routeLink: "/user_menu/test"
          },
          {
            label: translate("INVESTOR_PROFILE"),
            icon: "InvestorProfile",
            alternativeLink: "/suitability",
            routeLink: "/user_menu/test2",
            allowed: checkIfHasAccess(userInfo, [
              GET_NOTIFICATIONS,
              GET_SUITABILITY_FORM
            ])
          },
          {
            label: translate("TERMS"),
            icon: "MenuReports",
            allowed: checkIfHasAccess(userInfo, [GET_TERMS]),
            alternativeLink: "/terms",
            routeLink: "/user_menu/test3"
          }
        ]
      },
      {
        label: translate("CASH_ACCOUNT"),
        routeLink: "/cashaccounts/statements",
        dataTest: "Navbar_CashAccounts",
        icon: "MenuCashAccount",
        style: { marginTop: rem(16) },
        allowed: checkIfHasAccess(userInfo, [GET_STATEMENT])
      },
      {
        label: translate("INVESTMENTS"),
        routeLink: "/investments",
        dataTest: "Navbar_Investments",
        icon: "MenuInvestments",
        allowed: checkIfHasAccess(
          userInfo,
          [GET_TRANSACTIONS, GET_POSITION],
          true
        ),
        subItems: [
          {
            label: translate("OVERVIEW"),
            routeLink: "/investments/overview",
            dataTest: "SubnavTab-0",
            icon: "SubMenuOverView",
            allowed: checkIfHasAccess(userInfo, [
              GET_TRANSACTIONS,
              GET_POSITION
            ])
          },
          {
            label: translate("POSITIONS"),
            routeLink: "/investments/positions",
            dataTest: "SubnavTab-1",
            icon: "SubMenuPosition",
            allowed: checkIfHasAccess(userInfo, [GET_POSITION])
          }
        ]
      }
    ]);
  };

  const setMenuBrasil = () => {
    setConfig([
      {
        label: userInfo.givenName,
        icon: "Avatar",
        allowed: true,
        mobileOnly: true,
        routeLink: "/user_menu",
        subRouteLink: "/suitability",
        subtitle: investorProfile && translate("SUITABILITY_VIEW_PROFILE"),
        profileLabel: investorProfile,
        secondLevelLabel: translate("MY_PROFILE"),
        style: { padding: rem(16), marginTop: rem(24) },
        bankName: "107 - BOCOM BBM SA",
        accountNumber: accounts.length > 0 ? accounts[0].number : "",
        accountBranch: accounts.length > 0 ? accounts[0].branch : "",
        accountVerifyingDigit:
          accounts.length > 0 ? accounts[0].verifyingDigit : "",
        subItems: [
          {
            label: translate("REGISTRATION_DATA"),
            icon: "RegisterData",
            allowed: checkIfHasAccess(userInfo, [GET_PERSON_REGISTRATION]),
            alternativeLink: "/registrationData",
            routeLink: "/user_menu/test"
          },
          {
            label: translate("INVESTOR_PROFILE"),
            icon: "InvestorProfile",
            alternativeLink: "/suitability",
            routeLink: "/user_menu/test2",
            allowed: checkIfHasAccess(userInfo, [
              GET_NOTIFICATIONS,
              GET_SUITABILITY_FORM
            ])
          },
          {
            label: translate("TERMS"),
            icon: "MenuReports",
            allowed: checkIfHasAccess(userInfo, [GET_TERMS]),
            alternativeLink: "/terms",
            routeLink: "/user_menu/test3"
          }
        ]
      },
      {
        label: translate("CASH_ACCOUNT"),
        routeLink: "/cashaccounts",
        dataTest: "Navbar_CashAccounts",
        icon: "MenuCashAccount",
        style: { marginTop: rem(16) },
        allowed: checkIfHasAccess(
          userInfo,
          [CREATE_EFT, CREATE_APPROVE_EFT, APPROVE_EFT, GET_EFT, GET_STATEMENT],
          true
        ),
        subItems: [
          {
            label: translate("TRANSFER"),
            routeLink: "/cashaccounts/dashboard",
            icon: "SubMenuTransfers",
            dataTest: "SubnavTab-0",
            allowed:
              checkIfHasAccess(
                userInfo,
                [CREATE_EFT, CREATE_APPROVE_EFT, APPROVE_EFT, GET_EFT],
                true
              ) && checkUserType(userInfo, CORPORATION)
          },
          {
            label: translate("TRANSFER"),
            routeLink: "/cashaccounts/wiretransfer",
            icon: "SubMenuTransfers",
            dataTest: "SubnavTab-1",
            allowed:
              checkIfHasAccess(
                userInfo,
                [CREATE_EFT, CREATE_APPROVE_EFT, APPROVE_EFT, GET_EFT],
                true
              ) && checkUserType(userInfo, INDIVIDUAL)
          },
          {
            label: translate("STATEMENTS"),
            routeLink: "/cashaccounts/statements",
            dataTest: "subnavTabStatements",
            icon: "SubMenuStatements",
            allowed: checkIfHasAccess(userInfo, [GET_STATEMENT])
          }
        ]
      },
      {
        label: translate("INVESTMENTS"),
        routeLink: "/investments",
        dataTest: "Navbar_Investments",
        icon: "MenuInvestments",
        allowed: checkIfHasAccess(
          userInfo,
          [GET_TRANSACTIONS, GET_POSITION],
          true
        ),
        subItems: [
          {
            label: translate("OVERVIEW"),
            routeLink: "/investments/overview",
            dataTest: "SubnavTab-0",
            icon: "SubMenuOverView",
            allowed: checkIfHasAccess(userInfo, [
              GET_TRANSACTIONS,
              GET_POSITION
            ])
          },
          {
            label: translate("POSITIONS"),
            routeLink: "/investments/positions",
            dataTest: "SubnavTab-1",
            icon: "SubMenuPosition",
            allowed: checkIfHasAccess(userInfo, [GET_POSITION]),
            subItems: [
              {
                label: translate("FIXED_INCOME"),
                routeLink: "/investments/positions/fixed-income",
                dataTest: "ThirdnavTab-0",
                allowed: true,
                icon: "SubMenuFixedIncome"
              },
              {
                label: translate("EQUITIES"),
                routeLink: "/investments/positions/equities",
                dataTest: "ThirdnavTab-1",
                allowed: true,
                icon: "SubMenuEquities"
              },
              {
                label: translate("FUNDS"),
                routeLink: "/investments/positions/funds",
                dataTest: "ThirdnavTab-2",
                allowed: true,
                icon: "SubMenuFunds"
              }
            ]
          },
          {
            label: translate("INVESTMENT_PRODUCTS"),
            routeLink: INVESTMENT_PRODUCTS_LIST_URL,
            icon: "MenuInvestments",
            allowed: checkIfHasAccess(
              userInfo,
              [INVESTMENT_FUNDS_ROLE, INVESTMENT_FIXED_INCOME_ROLE],
              true
            ),
            dataTest: "SubnavTab-3"
          }
        ]
      },
      {
        label: translate("FOREIGN_EXCHANGE"),
        routeLink: "/exchanges",
        dataTest: "Navbar_Exchanges",
        icon: "MenuExchange",
        allowed: checkIfHasAccess(userInfo, [GET_CONTRACT]),
        subItems: [
          {
            label: translate("PENDING_CONTRACTS"),
            routeLink: "/exchanges/unsigned",
            icon: "SubMenuPendingContracts",
            dataTest: "PendingContracts",
            allowed: true
          },
          {
            label: translate("CONTRACT_HISTORY"),
            routeLink: "/exchanges/signed",
            icon: "MenuReports",
            dataTest: "ContractHistory",
            allowed: true
          },
          {
            label: translate("INTERNATIONAL_TRANSFER"),
            routeLink: "/exchanges/international-transfer",
            icon: "SubMenuInternationalTransfer",
            dataTest: "InternationalTransfer",
            allowed:
              checkIfHasAccess(userInfo, [INTERNATIONAL_TRANSFER]) &&
              checkUserType(userInfo, INDIVIDUAL)
          }
        ]
      },
      {
        label: translate("REPORTS"),
        routeLink: "/reports",
        dataTest: "Navbar_Reports",
        icon: "MenuReports",
        style: { marginTop: rem(24) },
        allowed: checkIfHasAccess(userInfo, [GET_DOCUMENTS])
      },
      {
        label: translate("REMITTANCES_CREDIT"),
        routeLink: "/shipments",
        icon: "MenuShipments",
        dataTest: "Navbar_shipments",
        allowed: checkIfHasAccess(userInfo, [RECEIVABLES]),
        subItems: [
          {
            label: translate("REMITTANCES_UPLOAD_HEADER_SUB_ITEM"),
            routeLink: "/shipments/upload",
            icon: "SubMenuRemittance",
            dataTest: "Sub_Navbar_Remittances_Upload",
            allowed: checkIfHasAccess(userInfo, [SHIPMENTS_UPLOAD])
          },
          {
            label: translate("REMITTANCES_DOWNLOAD_HEADER_SUB_ITEM"),
            routeLink: "/shipments/returns",
            icon: "SubMenuReturns",
            dataTest: "Sub_Navbar_Remittances_Returns",
            allowed: checkIfHasAccess(userInfo, [SHIPMENTS_RETURN])
          },
          {
            label: translate("REPORTS"),
            routeLink: "/shipments/report",
            icon: "SubMenuRemittance",
            dataTest: "Sub_Navbar_Remittances_Reports",
            allowed: checkIfHasAccess(userInfo, [GET_RECEIVABLES_REPORTS])
          },
          {
            label: translate("REMITTANCES_UPLOAD_VALIDATION_MENO"),
            routeLink: "/shipments/validation",
            icon: "SubMenuFileValidation",
            dataTest: "Sub_Navbar_File_Validation",
            allowed: checkIfHasAccess(userInfo, [VALIDATION_FILE])
          }
        ]
      },
      {
        label: translate("OPEN_BANKING"),
        routeLink: "/open-banking",
        dataTest: "Navbar_Open_Banking",
        icon: "MenuOpenFinance",
        allowed: checkIfHasAccess(userInfo, [GET_CONSENTS]),
        subItems: [
          {
            label: translate("OPEN_BANKING_SHARES_MENU"),
            routeLink: "/open-banking/my-shares",
            icon: "SubMenuShares",
            dataTest: "Open_Banking_My_Shares",
            allowed: checkIfHasAccess(userInfo, [GET_CONSENTS])
          },
          {
            label: translate("OPEN_BANKING_NEW_CONSENT_MENU"),
            routeLink: "/open-banking/new-consent",
            icon: "SubMenuNewConsent",
            dataTest: "Open_Banking_New_Consent",
            allowed: checkIfHasAccess(userInfo, [NEW_CONSENTS])
          }
        ]
      }
    ]);
  };

  const setConstants = () => {
    if (isGlobalMode) {
      setGlobalMenu();
    } else {
      setMenuBrasil();
    }
  };

  useEffect(() => {
    if (accounts) {
      setConstants();
    }
  }, [accounts, investorProfile, isGlobalMode]);

  const getInitialInfo = async () => {
    if (checkIfHasAccess(userInfo, [GET_NOTIFICATIONS, GET_SUITABILITY_FORM])) {
      await getInvestorProfile();
    }
    getAccounts(null, false, [PRIVATEACCOUNT, TRANSACTIONALACCOUNT]);
  };

  useEffect(() => {
    if (userInfo.roles) {
      getInitialInfo();
    }

    if (userInfo?.tenants?.length <= 0 && userInfo?.roles === null) {
      setAvatarConfig([{ mobileAditionalAction }]);
    }
  }, [userInfo]);

  useEffect(() => {
    if (config.length > 0) {
      getRouteName(history.location.pathname);

      setAvatarConfig([
        {
          label: translate("REGISTRATION_DATA"),
          icon: "Person",
          routeLink: "/registrationData",
          allowed: checkIfHasAccess(userInfo, [GET_PERSON_REGISTRATION]),
          dataTest: "userContextMyData"
        },
        {
          label: translate("INVESTOR_PROFILE"),
          icon: "Suitability",
          routeLink: "/suitability",
          allowed: checkIfHasAccess(userInfo, [GET_NOTIFICATIONS]),
          dataTest: "userContextSuitability"
        },
        {
          label: translate("TERMS"),
          icon: "Terms",
          routeLink: "/terms",
          allowed: checkIfHasAccess(userInfo, [GET_TERMS]),
          dataTest: "userContextTerms"
        },
        {
          label: translate("ACCOUNT_LOGOUT"),
          icon: "Logout",
          alternFunc: logoutHandler,
          dataTest: "userLogout"
        }
      ]);
    }
  }, [config]);

  useEffect(() => {
    if (avatarConfig.length > 0) {
      if (avatarConfig.filter(item => item.allowed === true).length === 0) {
        setAvatarConfig([
          {
            label: translate("ACCOUNT_LOGOUT"),
            icon: "Logout",
            alternFunc: logoutHandler,
            dataTest: "userLogout"
          }
        ]);
      }

      if (
        config?.[0]?.subItems?.filter(item => item.allowed === true).length ===
        0
      ) {
        const newConfig = config;
        delete newConfig[0].subItems;
        setConfig(newConfig);
      }
    }
  }, [avatarConfig]);

  useEffect(() => {
    getRouteName(history.location.pathname);
  }, [history.location.pathname]);

  const getRouteName = route => {
    const menu = config.find(el => el.routeLink === route);

    if (menu) {
      setCurrentMenuLabel(menu.secondLevelLabel || menu.label);
      setCurrentSubMenuLabel("");
    } else {
      config.forEach(item => {
        if (item.subItems) {
          const subMenu = item.subItems.find(
            subItem =>
              subItem.routeLink === route || subItem.alternativeLink === route
          );
          if (subMenu) {
            setCurrentMenuLabel(item.secondLevelLabel || item.label);
            setCurrentSubMenuLabel(subMenu.label);
          }
        }
      });
    }
  };

  return (
    <Fragment>
      <Hide below="md">
        <LoaderArea />
      </Hide>
      <Hide below="md" dataTest="hideComponent">
        <HeadWrapper>
          <Head data-test="Header">
            <ChangeLanguageContainer>
              <ChangeLanguage />
            </ChangeLanguageContainer>
            <Hide below="md">
              <DesktopContent>
                <UserContextMenu
                  userInfo={{ name: userName(userInfo) }}
                  avatarConfig={avatarConfig}
                  goToRoute={redirectTo}
                />
              </DesktopContent>
            </Hide>
          </Head>
        </HeadWrapper>
      </Hide>
      <Fragment>
        <Hide above="md">
          {!isNavigationMenuShown && currentMenuLabel && (
            <PagenameContainer>
              <PageMenu currentSubMenuLabel={currentSubMenuLabel}>
                {currentMenuLabel}
              </PageMenu>
              <PageSubMenu>{currentSubMenuLabel}</PageSubMenu>
            </PagenameContainer>
          )}
        </Hide>
        <Hide below="md">
          <NavigationMenuWrapper>
            <NavigationMenu
              config={config}
              goToRoute={redirectTo}
              dataTest="navigationMenu"
              hasHeader
              currentRoute={history.location.pathname}
              mobileAditionalAction={mobileAditionalAction}
            />
          </NavigationMenuWrapper>
        </Hide>
        <Hide above="md">
          <Menu
            showNavigationMenu={showNavigationMenu}
            isNavigationMenuShown={isNavigationMenuShown}
            config={config}
            goToRoute={redirectTo}
            dataTest="navigationMenu"
            currentRoute={history.location.pathname}
            mobileAditionalAction={mobileAditionalAction}
            openToastr={openToastr}
          />
        </Hide>
      </Fragment>
    </Fragment>
  );
};

export default Header;
