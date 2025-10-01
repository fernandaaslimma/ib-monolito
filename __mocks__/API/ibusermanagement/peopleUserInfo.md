FORMAT: 1A

## UserInfo [/ibusermanagement/v1/people/userinfo]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### GET [GET]

```js
// To use PF user change the "type" key to "Individual" for PJ "Corporation"
// "type": "Corporation"
// "type": "Individual"

// To change the type of MFA verification change "type" key to "totp" or "email"
// "type": "totp"
// "type": "email"
```


+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          {
              "id": "adc650a7-1d38-4311-aec2-e6f84f8b4d09",
              "document": "33803233062",
              "givenName": "Teste Ted",
              "surname": "Pf",
              "corpId": 62808,
              "birthDate": null,
                  "users": [{
                  "id": "477a70d7-a92d-4fd0-8d8b-1db3ef521f2a",
                  "mail": "pj_yuriramos@bancobbm.com.br",
                  "preferredLanguage": "pt-BR",
                  "authFactors": [{
                      "id": "8c82c0e1-12c4-4ba2-b9b0-b3c01265c9d4",
                      "defaultAuth": false,
                      "authUri": "totp",
                      "type": "totp",
                      "actions": [
                          "passwordreset",
                          "approvemobilefactor",
                          "approveinvestment",
                          "approvesuitability",
                          "personRegistration.confirmInformation"
                      ],
                      "activated": true,
                      "plataformIdentifier": null,
                      "approved": true,
                      "isSelf": false
                  }],
                      "tenants": [{
                          "code": "33803233062",
                           "name": "TENANT TESTE 49070053004",
                           "id": "E1D39AAC-5E3F-462C-ADD0-D7F8DA87E2B8",
                           "type": "Individual",
                              "portfolios": [{
                                  "code": "33803233062",
                                  "name": "PORTFOLIO TESTE 33803233062",
                                  "id": "ED947B08-D13A-4E9D-B034-F5D2191A3426",
                                  "roles": ["RevokeConsents", "GetConsents", "CreateConsents", "ApproveConsents", "GetNotifications", "DeclineConsents", "ActivateAuthFactor", "ApproveAuthFactor", "CreateAuthCode", "ConsumeAuthCode", "CreateAuthFactor", "CreateAuthFactorActivated", "ApproveAuthCode", "GetUserAuthFactors", "GetClientTermsNotifications", "GetDocuments", "GetContract", "CreateTotpMFADevice", "GetCashAccount", "UpdatePersonRegistration", "GetAllRecipientsForAccount", "SignContract", "GetTerms", "CreateRegistrato", "GetRepresentation", "GetAccountManager", "GetForm", "CreateFixedIncomeTransaction", "GetPersonRegistration", "GetPosition", "SaveAnswer", "AcceptAgreementTerms", "GetIndexes", "CreateApproveEFT", "CreateTotpMFADevice11", "ApproveTransaction", "CreateFundTransaction", "GetStatement", "CreateTransaction", "CreateApproveThirdPartyEFT", "GetTransactions", "GetEFT", "GetPortfolioPositionCashUpdated", "ConfirmPersonRegistration", "TransferRemittanceFiles","ACtivityTesteRemittance", "Receivables"],
                                  "companies": null,
                                  "portfolioMembers": [{
                                      "document": "33803233062",
                                      "corpId": 62808
                                  }]
                              }],
                              "companies": null
                      }],
                      "userStatus": "previouslyOnHistory",
                      "userApprovals": null
                  }],
              "act": null,
              "employee": false,
              "qualifiedInvestor": false
          }
