import { configure, render, waitFor } from "@testing-library/react";
import React from "react";
import OverviewOffShore from "./OverviewOffShore";
import "@testing-library/jest-dom";
import { Context } from '../common/OffshoreSelect/offshoreContext';

configure({ testIdAttribute: "data-test" });

jest.mock("../../utils/i18n", () => ({
    translate: id => id,
    getLanguage: () => "en-US",
    isZhCN: () => false,
    getDateFieldPlaceholderByLocale: () => "MM/DD/YYYY"
  }));
  

let props = {
    error: null,
    userInfo: {
        givenName: "Teste Ted",
        surname: "Pf",
        tenantsMembers: [
            {
                document: "33803233062",
                corpId: 62808
            }
        ],
        tenants: [
            "Individual"
        ],
        email: "teste_ted_pf@bocombbm.com.br",
        tenantsCode: "33803233062",
        roles: [
            "RevokeConsents",
            "GetConsents",
            "CreateConsents",
            "ApproveConsents",
            "GetNotifications",
            "GetOpenbankingEFTNotifications",
            "DeclineConsents",
            "ActivateAuthFactor",
            "ApproveAuthFactor",
            "CreateAuthCode",
            "ConsumeAuthCode",
            "CreateAuthFactor",
            "CreateAuthFactorActivated",
            "ApproveAuthCode",
            "GetUserAuthFactors",
            "GetClientTermsNotifications",
            "GetDocuments",
            "GetInvestmentFunds",
            "InsertRecipientForAccount",
            "GetClientProfile",
            "CreateAuth",
            "GetContract",
            "CreateTotpMFADevice",
            "GetOffshoreAccounts",
            "GetCashAccount",
            "UpdatePersonRegistration",
            "GetAllRecipientsForAccount",
            "SignContract",
            "GetTerms",
            "CreateRegistrato",
            "GetForm",
            "GetFixedIncomeTransactions",
            "CreateFixedIncomeTransaction",
            "GetPersonRegistration",
            "GetPosition",
            "SaveAnswer",
            "AcceptAgreementTerms",
            "GetFixedIncomeProducts",
            "GetIndexes",
            "GetStatus",
            "CreateApproveEFT",
            "ApproveTransaction",
            "CreateFundTransaction",
            "GetStatement",
            "GlobalVision",
            "GetPortfolioPositionCashUpdated1",
            "CreateTransaction",
            "CreateApproveThirdPartyEFT",
            "GetTransactions",
            "GetEFT",
            "GetPortfolioPositionCashUpdated",
            "ConfirmPersonRegistration",
            "InternationalTransfer",
            "ValidateRemittanceFile"
        ],
        portfolioCode: "33803233062",
        preferredLanguage: "pt-BR",
        impersonate: null,
        document: "33803233062",
        corpId: 62808,
        id: "477a70d7-a92d-4fd0-8d8b-1db3ef521f2a",
        employee: false,
        qualifiedInvestor: false,
        personId: "adc650a7-1d38-4311-aec2-e6f84f8b4d09"
    },
    getInvestimentPositionOffShore: jest.fn(),
    positionsOffShore: [
        {
            grossBalance: 230570.67,
            currency: "USD",
            date: "2024-07-04",
            assetType: "TimeDeposit",
            assetTypeLabel: "Time Deposit",
            portfolioShare: 10,
            assets: [
                {
                    name: "TIME DEPOSIT BOCOM BBM 60",
                    notionalBalance: 68984.23,
                    accruedBalance: 77000,
                    accruedInterest: 500000,
                    yieldIndex: "SOFR",
                    yieldFixedRate: 12,
                    yieldLabel: "SOFR +",
                    applicationDate: "2024-08-04",
                    positionDate: "2024-08-10",
                    maturityDate: "2025-07-04",
                    portfolioShare: 15
                }
            ]
        },
        {
            grossBalance: 1444018.45,
            currency: "CNY",
            date: "2024-07-04",
            assetType: "TimeDeposit",
            assetTypeLabel: "Time Deposit",
            portfolioShare: 20,
            assets: [
                {
                    name: "TIME DEPOSIT BOCOM BBM 30",
                    notionalBalance: 30000,
                    accruedBalance: 1231564,
                    accruedInterest: 10000,
                    yieldIndex: "SOFR",
                    yieldFixedRate: 12,
                    yieldLabel: "SOFR + 12.0%",
                    applicationDate: "2024-07-04",
                    positionDate: "2024-07-04",
                    maturityDate: "2024-07-04",
                    portfolioShare: 40,
                },
                {
                    name: "TIME DEPOSIT BOCOM BBM 30",
                    notionalBalance: 30000,
                    accruedBalance: 1231564,
                    accruedInterest: 10000,
                    yieldIndex: "SOFR",
                    yieldFixedRate: 12,
                    yieldLabel: "SOFR + 12.0%",
                    applicationDate: "2024-07-04",
                    positionDate: "2024-07-04",
                    maturityDate: "2024-07-04",
                    portfolioShare: 25,
                }
            ]
        },
        {
            grossBalance: 700000,
            currency: "EUR",
            date: "2024-07-04",
            assetType: "TimeDeposit",
            assetTypeLabel: "Time Deposit",
            portfolioShare: 35,
            assets: [
                {
                    name: "TIME DEPOSIT BOCOM BBM 40",
                    notionalBalance: 30000,
                    accruedBalance: 200000,
                    accruedInterest: 10000,
                    yieldIndex: "SOFR",
                    yieldFixedRate: 12,
                    yieldLabel: "SOFR + 12.0%",
                    applicationDate: "2024-07-04",
                    positionDate: "2024-07-04",
                    maturityDate: "2024-07-04",
                    portfolioShare: 15,
                }
            ]
        }
    ],
    getAccountsOffShore: jest.fn(),
    accountsOffShore: [
        {
            accountNumber: "100014-5",
            currency: [
                {
                    code: "USD"
                },
                {
                    code: "CNY"
                },
                {
                    code: "EUR"
                }
            ],
            balances: [
                {
                    availableBalance: 120000,
                    date: "",
                    currency: "USD"
                },
                {
                    availableBalance: 120000,
                    date: "",
                    currency: "CNY"
                },
                {
                    availableBalance: 120000,
                    date: "",
                    currency: "EUR"
                }
            ]
        }
    ],
    loading: false
}

let context = {
    currentCoin: "CNY"
}

describe("OverviewOffShore Tests", () => {
    it("Should render components when load is false", async () => {
        var screen = render(
            <Context.Provider value={context}>
                <OverviewOffShore {...props} />
            </Context.Provider>
        );

        expect(screen.getByTestId("donutChatOffShore")).toBeInTheDocument();

        await waitFor(() => {
            expect(props.getInvestimentPositionOffShore).toHaveBeenCalled();
            expect(props.getAccountsOffShore).toHaveBeenCalled();
        });
    });
});
