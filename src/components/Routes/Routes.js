import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import loadable from "loadable-components";

import "../../styles/settings/fonts";
import "../../assets/vendor/reset.css";
import "../../styles/generic";

import history from "../../services/history";
import Login from "../Login";
import PermissionDenied from "../common/PermissionDenied";
import { checkIfHasAccess, checkUserType } from "../common/CanAccess/CanAccess";

import store from "../../utils/store";
import { hotjarId } from "../../utils/hotjarFun";

import {
  GET_CONTRACT,
  GET_TRANSACTIONS,
  GET_POSITION,
  GET_DOCUMENTS,
  CREATE_REGISTRATO,
  GET_PERSON_REGISTRATION,
  CREATE_EFT,
  APPROVE_EFT,
  GET_EFT,
  CREATE_APPROVE_EFT,
  CREATE_TRANSACTION,
  GET_STATEMENT,
  GET_CREDIT_PORTFOLIO,
  CORPORATION,
  INDIVIDUAL,
  INVESTMENT_PRODUCTS_LIST_URL,
  INVESTMENT_FUNDS_URL,
  INVESTMENT_FUNDS_ROLE,
  INVESTMENT_FIXED_INCOME_ROLE,
  INVESTMENT_FIXED_INCOME_URL,
  GET_CONSENTS,
  NEW_CONSENTS,
  SHIPMENTS_RETURN,
  SHIPMENTS_UPLOAD,
  VALIDATION_FILE,
  INTERNATIONAL_TRANSFER,
  GET_SUITABILITY_FORM,
  OFFSHORE,
  GET_RECEIVABLES_REPORTS,
  GET_PORTABILITIES
} from "../../utils/constants";
import { userIsLoaded } from "../../utils/user";
import { Context } from "../common/OffshoreSelect/offshoreContext";

const Summary = loadable(() => import("../Summary"));
const Overview = loadable(() => import("../Overview"));
const OverviewOffShore = loadable(() => import("../OverViewOffShore"));
const FixedIncomeTransactions = loadable(() =>
  import("../Transactions/FixedIncome")
);
const FundsTransactions = loadable(() => import("../Transactions/Funds"));
const EquitiesTransactions = loadable(() => import("../Transactions/Equities"));
const AccountTransactions = loadable(() => import("../Transactions/Account"));
const Exchange = loadable(() => import("../Exchange"));
const SignedExchange = loadable(() => import("../Exchange/SignedExchange"));
const InternationalTransfer = loadable(() =>
  import("../Exchange/InternationalTransfer")
);
const History = loadable(() => import("../Exchange/History"));
const SendMoney = loadable(() => import("../Exchange/SendMoney"));
const Position = loadable(() => import("../Position"));
const Account = loadable(() => import("../Position/Account"));
const FixedIncome = loadable(() => import("../Position/FixedIncome"));
const Funds = loadable(() => import("../Position/Funds"));
const FundsPrevious = loadable(() => import("../Position/FundsPrevious"));
const Equities = loadable(() => import("../Position/Equities"));
const Layout = loadable(() => import("../common/Layout"));
const NotFound = loadable(() => import("../common/NotFound"));
const SignConfirmation = loadable(() => import("../common/SignConfirmation"));
const UserInfo = loadable(() => import("../common/UserInfo"));
const CreatePassword = loadable(() => import("../CreatePassword"));
const RecoverPassword = loadable(() => import("../RecoverPassword"));
const EmailSent = loadable(() => import("../SentMail"));
const Documents = loadable(() => import("../Documents"));
const TransfersDashboard = loadable(() => import("../Transfers/Dashboard"));
const Statements = loadable(() => import("../Transfers/Statements"));
const StatementsOffShore = loadable(() => import("../Transfers/OffShoreStatements"));
const Suitability = loadable(() => import("../Suitability"));
const SuitabilityModal = loadable(() =>
  import("../Suitability/SuitabilityModal")
);
const RegistrationData = loadable(() => import("../RegistrationData"));
const Registrato = loadable(() => import("../Registrato"));
const Terms = loadable(() => import("../Terms"));
const Home = loadable(() => import("../Home"));
const MfaBoarding = loadable(() => import("../MfaBoarding"));
const MfaBoardingExchange = loadable(() => import("../MfaBoardingExchange"));
const WithdrawLca = loadable(() => import("../Position/WithdrawLca"));
const Credit = loadable(() => import("../Credit"));
const ApproveNewTerms = loadable(() => import("../ApproveNewTerms"));
const IndividualWireTransfer = loadable(() =>
  import("../Transfers/IndividualWireTransfer")
);
const InvestmentFunds = loadable(() => import("../InvestmentProducts/Funds"));
const InvestmentFixedIncome = loadable(() =>
  import("../InvestmentProducts/FixedIncome")
);
const InvestmentProducts = loadable(() => import("../InvestmentProducts"));
const Consent = loadable(() => import("../OpenBanking/Consent"));
const Shares = loadable(() => import("../OpenBanking/Shares"));
const NewConsent = loadable(() => import("../OpenBanking/NewConsent"));
const GenericNotification = loadable(() => import("../GenericNotification"));
const ShipmentsReports = loadable(() => import("../Shipments/ShipmentReports"));
const ReturnShipments = loadable(() => import("../Shipments/ReturnShipments"));
const UploadShipments = loadable(() => import("../Shipments/UploadShipments"));
const FileValidation = loadable(() => import("../Shipments/FileValidation"));
const InvestmentsPortability = loadable(() => import("../InvestmentsPortability"));
const PortabilityRequest = loadable(() => import("../InvestmentsPortability/PortabilityRequest"));

const withRouteConfig = ({ userInfo, roles, anyRole, userType }) => Component =>
  function WrappedComponent(props) {
    emptyStoreError();
    if (!userIsLoaded()) {
      return null;
    }
    const hasAccess = userType
      ? checkIfHasAccess(userInfo, roles, anyRole) &&
      checkUserType(userInfo, userType)
      : checkIfHasAccess(userInfo, roles, anyRole);

    if (hasAccess) {
      return <Component {...props} />;
    }
    return <PermissionDenied />;
  };

const emptyStoreError = () => store.setState({ error: null });

const POSITION_FIRST_ROUTE = "/position/fixed-income";
const TRANSACTIONS_FIRST_ROUTE = "/transactions/fixed-income";
const EXCHANGES_FIRST_ROUTE = "/exchanges/unsigned";
const TRANSFERS_DASHBOARD_FIRST_ROUTE = "/cashaccounts/dashboard";

const Routes = ({
  initStateIfEmpty = () => { },
  userInfo = {},
  setIsGlobalMode = () => { },
  isGlobalMode
}) => {
  useEffect(() => {
    initStateIfEmpty();

    Summary.load();
    Overview.load();
    OverviewOffShore.load();
    FixedIncomeTransactions.load();
    FixedIncome.load();
    Exchange.load();
    Layout.load();
    UserInfo.load();
    TransfersDashboard.load();
  }, []);

  useEffect(() => {
    initStateIfEmpty();

    if (history.location.pathname === POSITION_FIRST_ROUTE) {
      Funds.load();
      Equities.load();
      Account.load();
    } else if (history.location.pathname === TRANSACTIONS_FIRST_ROUTE) {
      FundsTransactions.load();
      EquitiesTransactions.load();
      AccountTransactions.load();
    } else if (history.location.pathname === EXCHANGES_FIRST_ROUTE) {
      SignedExchange.load();
    } else if (history.location.pathname === TRANSFERS_DASHBOARD_FIRST_ROUTE) {
      TransfersDashboard.load();
    }
  });

  if (userInfo && userInfo.id) {
    const {
      personId,
      id,
      tenants,
      qualifiedInvestor,
      employee,
      corpId,
      roles
    } = userInfo;
    const type = tenants.length > 1 ? "both" : tenants[0];
    const hjInfo = {
      personId: personId,
      type: type,
      qualifiedInvestor: qualifiedInvestor,
      employee: employee,
      corpId: `${corpId}`,
      rolesText: roles?.join(",")
    };
    hotjarId(id, hjInfo);
  }

  const summaryRoute = withRouteConfig({
    userInfo,
    roles: [GET_TRANSACTIONS, GET_POSITION]
  });

  const overviewRoute = withRouteConfig({
    userInfo,
    roles: [GET_TRANSACTIONS, GET_POSITION]
  });

  const documentsRoute = withRouteConfig({
    userInfo,
    roles: [GET_DOCUMENTS]
  });

  const consentsRoute = withRouteConfig({
    userInfo,
    roles: [GET_CONSENTS]
  });

  const newConsentsRoute = withRouteConfig({
    userInfo,
    roles: [NEW_CONSENTS]
  });

  const UploadShipmentsRoute = withRouteConfig({
    userInfo,
    roles: [SHIPMENTS_UPLOAD]
  });

  const ValidationFileRoute = withRouteConfig({
    userInfo,
    roles: [VALIDATION_FILE]
  });

  const ShipmentsRoute = withRouteConfig({
    userInfo,
    roles: [SHIPMENTS_RETURN]
  });

  const ShipmentsReportsRoute = withRouteConfig({
    userInfo,
    roles: [GET_RECEIVABLES_REPORTS]
  });

  const defaultRoute = withRouteConfig({
    userInfo,
    roles: []
  });

  const transfersDashboardRoute = withRouteConfig({
    userInfo,
    roles: [CREATE_EFT, CREATE_APPROVE_EFT, APPROVE_EFT, GET_EFT],
    anyRole: true,
    userType: CORPORATION
  });

  const individualWireTransferRoute = withRouteConfig({
    userInfo,
    roles: [CREATE_EFT, CREATE_APPROVE_EFT, APPROVE_EFT, GET_EFT],
    anyRole: true,
    userType: INDIVIDUAL
  });

  const statementsRoute = withRouteConfig({
    userInfo,
    roles: [GET_STATEMENT]
  });

  const transactionsRoute = withRouteConfig({
    userInfo,
    roles: [GET_TRANSACTIONS]
  });

  const exchangesRoute = withRouteConfig({
    userInfo,
    roles: [GET_CONTRACT]
  });

  const exchangesRoutePF = withRouteConfig({
    userInfo,
    roles: [INTERNATIONAL_TRANSFER],
    userType: INDIVIDUAL
  });

  const positionsRoute = withRouteConfig({
    userInfo,
    roles: [GET_POSITION]
  });

  const lcaWithdrawRoute = withRouteConfig({
    userInfo,
    roles: [GET_POSITION, CREATE_TRANSACTION],
    anyRole: true
  });

  const registratoRoute = withRouteConfig({
    userInfo,
    roles: [CREATE_REGISTRATO]
  });

  const personRegistrationRoute = withRouteConfig({
    userInfo,
    roles: [GET_PERSON_REGISTRATION]
  });

  const creditRoute = withRouteConfig({
    userInfo,
    roles: [GET_CREDIT_PORTFOLIO]
  });

  const investmentsRoute = withRouteConfig({
    userInfo,
    roles: [INVESTMENT_FUNDS_ROLE, INVESTMENT_FIXED_INCOME_ROLE],
    anyRole: true
  });

  const investmentsFundsRoute = withRouteConfig({
    userInfo,
    roles: [INVESTMENT_FUNDS_ROLE]
  });

  const investmentsFixedIncomeRoute = withRouteConfig({
    userInfo,
    roles: [INVESTMENT_FIXED_INCOME_ROLE]
  });

  const suitabilityRoute = withRouteConfig({
    userInfo,
    roles: [GET_SUITABILITY_FORM]
  });

  const globalRoute = withRouteConfig({
    userInfo,
    roles: [OFFSHORE]
  });

  const investmentsPortabilityRoute = withRouteConfig({
    userInfo,
    roles: [GET_PORTABILITIES]
  });

  const [currentCoin, setCurrentCoin] = useState("USD");
  const [offshoreAccount, setOffshoreAccount] = useState();

  const brasilRoutes = () => {
    return (
      <>
        {/* INVESTMENTS */}
        <Route
          path="/investments/overview-previous"
          render={summaryRoute(Summary)}
        />

        <Route
          path="/investments/positions/fixed-income"
          exact
          render={positionsRoute(FixedIncome)}
        />
        <Route
          path="/investments/positions/equities"
          render={positionsRoute(Equities)}
        />
        <Route
          path="/investments/positions/funds"
          render={positionsRoute(Funds)}
        />
        <Route
          path="/investments/positions/funds-previous"
          render={positionsRoute(FundsPrevious)}
        />
        <Route
          path="/investments/transactions/fixed-income"
          render={transactionsRoute(FixedIncomeTransactions)}
        />
        <Route
          path="/investments/transactions/equities"
          render={transactionsRoute(EquitiesTransactions)}
        />
        <Route
          path="/investments/transactions/funds"
          render={transactionsRoute(FundsTransactions)}
        />
        <Route
          path={INVESTMENT_PRODUCTS_LIST_URL}
          render={investmentsRoute(InvestmentProducts)}
        />

        <Route
          path={INVESTMENT_FUNDS_URL}
          render={investmentsFundsRoute(InvestmentFunds)}
        />

        <Route
          path={INVESTMENT_FIXED_INCOME_URL}
          render={investmentsFixedIncomeRoute(InvestmentFixedIncome)}
        />

        {/* CASH ACCOUNTS */}
        <Route
          path="/cashaccounts/dashboard"
          render={transfersDashboardRoute(TransfersDashboard)}
        />

        <Route
          path="/cashaccounts/wiretransfer"
          render={individualWireTransferRoute(IndividualWireTransfer)}
        />

        {/*EXCHANGES*/}
        <Route
          path="/exchanges/unsigned"
          render={exchangesRoute(Exchange)}
          data-test="pendingContracts"
        />
        <Route
          path="/exchanges/signed"
          render={exchangesRoute(SignedExchange)}
          data-test="contractHistory"
        />
        <Route
          path="/exchanges/international-transfer"
          exact
          render={exchangesRoutePF(InternationalTransfer)}
          data-test="internationalTransfer"
        />
        <Route
          path="/exchanges/international-transfer/history"
          render={exchangesRoutePF(History)}
          data-test="internationalTransferHistory"
        />
        <Route
          path="/exchanges/sign-confirmation"
          render={exchangesRoute(SignConfirmation)}
        />
        <Route
          path="/exchanges/international-transfer/send-money"
          render={exchangesRoutePF(SendMoney)}
          data-test="internationalTransferSendMoney"
        />

        {/*ROUTES BY URL ONLY INIT*/}
        <Route
          path="/transactions/account"
          render={transactionsRoute(AccountTransactions)}
        />
        <Route path="/position/account" render={positionsRoute(Account)} />
        <Route
          path="/investments/positions/fixed-income/withdrawal"
          exact
          render={lcaWithdrawRoute(WithdrawLca)}
        />
        {/*ROUTES BY URL ONLY END*/}

        <Route
          path="/reports"
          render={documentsRoute(Documents)}
        />

        <Route
          path="/credit"
          component={creditRoute(Credit)}
        />
        <Route
          exact
          path="/investments-portability"
          component={investmentsPortabilityRoute(InvestmentsPortability)}
        />
        <Route
          path="/investments-portability/portability-request"
          component={investmentsPortabilityRoute(PortabilityRequest)}
        />
        <Route
          path="/registrato"
          render={registratoRoute(Registrato)}
        />
        <Route
          path="/mfaboarding"
          render={defaultRoute(MfaBoarding)}
        />
        <Route
          path="/mfaboardingEx"
          render={defaultRoute(MfaBoardingExchange)}
        />
        <Route
          path="/approve-new-terms"
          render={defaultRoute(ApproveNewTerms)}
        />

        <Route
          exact
          path="/open-banking/consent"
          component={consentsRoute(Consent)}
        />

        <Route
          exact
          path="/open-banking/my-shares"
          component={consentsRoute(Shares)}
        />

        <Route
          exact
          path="/open-banking/new-consent"
          component={newConsentsRoute(NewConsent)}
        />

        <Route
          exact
          path="/notification"
          component={defaultRoute(GenericNotification)}
        />
        <Route
          exact
          path="/shipments/report"
          component={ShipmentsReportsRoute(ShipmentsReports)}
        />
        <Route
          exact
          path="/shipments/returns"
          component={ShipmentsRoute(ReturnShipments)}
        />
        <Route
          exact
          path="/shipments/upload"
          component={UploadShipmentsRoute(UploadShipments)}
        />
        <Route
          exact
          path="/shipments/validation"
          component={ValidationFileRoute(FileValidation)}
        />
      </>
    );
  };

  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/create-password" component={CreatePassword} />
      <Route exact path="/recover-password" component={RecoverPassword} />
      <Route exact path="/email-sent" component={EmailSent} />
      <Route>
        <Context.Provider
          value={{
            currentCoin,
            setCurrentCoin,
            offshoreAccount,
            setOffshoreAccount,
            isGlobalMode,
            setIsGlobalMode
          }}
        >
          <Layout>
            <UserInfo>
              <Switch>
                {isGlobalMode ? (
                  <Route
                    path="/investments/overview"
                    exact
                    render={globalRoute(OverviewOffShore)}
                  />) : (<Route
                    path="/investments/overview"
                    render={overviewRoute(Overview)}
                  />)}

                {isGlobalMode ? (
                  <Route
                    path="/cashaccounts/statements"
                    render={globalRoute(StatementsOffShore)}
                  />) : (
                  <Route
                    path="/cashaccounts/statements"
                    render={statementsRoute(Statements)}
                  />
                )}


                <Route path="/terms" component={Terms} />
                <Route
                  path="/registrationData"
                  render={personRegistrationRoute(RegistrationData)}
                />
                <Route
                  exact
                  path="/suitability"
                  render={suitabilityRoute(Suitability)}
                />
                <Route
                  path="/suitability/form"
                  render={suitabilityRoute(SuitabilityModal)}
                />
                <Route path="/home" component={Home} />

                {isGlobalMode ? (
                  <Route
                    path="/investments/positions"
                    exact
                    render={globalRoute(Position)}
                  />
                ) : (
                  brasilRoutes()
                )}

                <Route component={NotFound} />
              </Switch>
            </UserInfo>
          </Layout>
        </Context.Provider>
      </Route>
    </Switch>
  );
};

export default Routes;