FORMAT: 1A
HOST1: http://private-4e4df-mockapiibcs.apiary-mock.com
HOST2: http://private-8ad54e-mockapiibcs2.apiary-mock.com
HOST3: http://private-065b5-mockapiibcs3.apiary-mock.com
CORS1: http://localhost:9000
CORS2: http://40.121.58.75
CORS3: http://40.117.251.255

# mockapiibcs

INTRODUCTION

## Login [/spa/token]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### POST [POST]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
          ]

## Login impersonate [/spa/token/impersonate]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### POST [POST]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
          ]

## UserInfo [/ibusermanagement/v1/people/userinfo]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          {
              "id": "0456af76-76cf-4f7b-a7fc-a38f71879545",
              "document": "12114474135",
              "givenName": "Yuari",
              "surname": "Ramos",
              "impersonate": true,
              "corpId": 66554,
              "users": [
                  {
                      "id": "614b7d0f-e1ee-4524-89f6-83afe17370b1",
                      "mail": "pj_yuriramos@bancobbm.com.br",
                      "preferredLanguage": "pt-BR",
                      "authFactors": [
                          {
                              "authId": "mobile",
                              "defaultAuth": null,
                              "authUri": "VzZjbU1aSnJnZWRhb3JST09qMlFDS0FabmtZPQ==",
                              "authType": "android",
                              "authStatus": "1",
                              "authName": "6865252b-6609-4770-8cf2-775328ad39cf"
                          }
                      ],
                      "tenants": [
                          {
                              "code": "12114474135",
                              "name": "12114474135",
                              "id": "01a49e2b-02ac-46cf-8df1-b5a1972be22e",
                              "type": "Individual",
                              "portfolios": [
                                  {
                                      "code": "12114474135",
                                      "name": "12114474135",
                                      "id": "81f86b66-e920-4623-a171-a7bcf13cf0d7",
                                      "roles": [
                                          "SignContract",
                                          "GetStatus",
                                          "GetContract",
                                          "GetTransactions",
                                          "GetPosition",
                                          "GetIndexes",
                                          "GetDocuments",
                                          "GetCashAccount",
                                          "clientportfolio_getindexes",
                                          "clientportfolio_getcashaccount",
                                          "clientportfolio_getposition",
                                          "clientportfolio_gettransaction",
                                          "esign_signcontract",
                                          "esign_getcontract",
                                          "CreateEFT",
                                          "ApproveEFT",
                                          "GetEFT"
                                      ]
                                  }
                              ]
                          }
                      ],
                      "active": true,
                      "pwdFailedAttempts": 0,
                      "pwdBlackList": []
                  }
              ]
          }

## Summary - Index [/clientportfolio/v1/consolidated/indexes/monthrates]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
              {
                  "date": "2018-04-30",
                  "index": "CDI",
                  "monthAcrrued": 0.52,
                  "yearAccrued": 2.11
              },
              {
                  "date": "2018-04-30",
                  "index": "DOLAR",
                  "monthAcrrued": 4.73,
                  "yearAccrued": 5.23
              },
              {
                  "date": "2018-04-30",
                  "index": "IBOV",
                  "monthAcrrued": 0.88,
                  "yearAccrued": 12.71
              },
              {
                  "date": "2018-04-30",
                  "index": "IGP-M",
                  "monthAcrrued": 0.57,
                  "yearAccrued": 2.05
              },
              {
                  "date": "2018-04-30",
                  "index": "IMA-B",
                  "monthAcrrued": -0.14,
                  "yearAccrued": 4.79
              },
              {
                  "date": "2018-04-30",
                  "index": "IPCA",
                  "monthAcrrued": 0.31,
                  "yearAccrued": 1.01
              },
              {
                  "date": "2018-04-30",
                  "index": "IRF-M",
                  "monthAcrrued": 0.47,
                  "yearAccrued": 4.25
              },
              {
                  "date": "2018-04-30",
                  "index": "Poupança",
                  "monthAcrrued": 0.5,
                  "yearAccrued": 2.02
              },
              {
                  "date": "2018-04-30",
                  "index": "SMLL",
                  "monthAcrrued": 2.37,
                  "yearAccrued": 6.5
              }
          ]

## Summary - Type of Assets [/clientportfolio/v1/consolidated/totals/position]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
              {
                  "assetType": "CashAccount",
                  "assetTypeLabel": "Cash Account",
                  "date": "2018-05-04",
                  "netBalance": 631409.01,
                  "grossBalance": 631409.01,
                  "grossResultBalance": 631409.01,
                  "portfolioShare": 26.75
              },
              {
                  "assetType": "FixedIncome",
                  "assetTypeLabel": "Fixed Income",
                  "date": "2018-05-04",
                  "netBalance": 1252738.63,
                  "grossBalance": 1252739.34,
                  "incomeTaxBalance": 0.71,
                  "iofBalance": 0,
                  "grossResultBalance": 134498.08,
                  "portfolioShare": 53.07
              },
              {
                  "assetType": "Funds",
                  "assetTypeLabel": "Funds",
                  "date": "2018-05-04",
                  "netBalance": 476773.52,
                  "grossBalance": 483106.57,
                  "incomeTaxBalance": 6333.05,
                  "iofBalance": 0,
                  "grossResultBalance": 38311.11,
                  "portfolioShare": 20.2
              }
          ]

## Summary - Asset Class [/clientportfolio/v1/consolidated/totals/position?groupBy=AssetClass]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
            {
              "assetClass": "CashAccount",
              "netBalance": 63109.01,
              "grossBalance": 63109.01,
              "grossResultBalance": 63109.01,
              "portfolioShare": 3.53
            },
            {
              "assetClass": "FixedIncome",
              "netBalance": 1410094.65,
              "grossBalance": 1410791.08,
              "incomeTaxBalance": 696.43,
              "iofBalance": 0,
              "grossResultBalance": 147754.36,
              "portfolioShare": 78.67
            },
            {
              "assetClass": "Multimarket",
              "netBalance": 319417.5,
              "grossBalance": 325054.83,
              "incomeTaxBalance": 5637.33,
              "iofBalance": 0,
              "grossResultBalance": 25054.83,
              "portfolioShare": 17.82
            }
          ]

## Summary - Latest transactions [/clientportfolio/v1/consolidated/transactions?limit=9&offset=0]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
             {
                "assetName":"107 2 304020-3",
                "type":"CRÉDITO",
                "date":"2018-05-03",
                "grossValue":13363.25,
                "netValue":13363.25
             },
             {
                "assetName":"107 2 304020-3",
                "type":"DÉBITO",
                "date":"2018-05-03",
                "grossValue":-13000.00,
                "netValue":-13000.00
             },
             {
                "assetName":"COMPROMISSADA",
                "type":"RESGATE ANTECIPADO",
                "date":"2018-05-03",
                "grossValue":-3343.68,
                "netValue":-3340.61,
                "incomeTax":3.07,
                "iof":0.00
             },
             {
                "assetName":"COMPROMISSADA",
                "type":"RESGATE ANTECIPADO",
                "date":"2018-05-03",
                "grossValue":-10029.14,
                "netValue":-10022.63,
                "incomeTax":6.51,
                "iof":0.00
             },
             {
                "assetName":"107 2 304020-3",
                "type":"DÉBITO",
                "date":"2018-04-16",
                "grossValue":-11000.22,
                "netValue":-11000.22
             },
             {
                "assetName":"COMPROMISSADA",
                "type":"COMPRA",
                "date":"2018-04-16",
                "grossValue":11000.22,
                "netValue":11000.22,
                "incomeTax":0.00,
                "iof":0.00
             },
             {
                "assetName":"107 2 304020-3",
                "type":"CRÉDITO",
                "date":"2018-04-13",
                "grossValue":10990.40,
                "netValue":10990.40
             },
             {
                "assetName":"107 2 304020-3",
                "type":"CRÉDITO",
                "date":"2018-04-09",
                "grossValue":3445.92,
                "netValue":3445.92
             },
             {
                "assetName":"107 2 304020-3",
                "type":"DÉBITO",
                "date":"2018-04-09",
                "grossValue":-3330.02,
                "netValue":-3330.02
             }
          ]

## Asset position - Fixed Income [/clientportfolio/v1/fixedincome/position]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
             {
                "name":"CCB",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"CCB P - Pré",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"CCCB",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"CDB - Pós",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"CDB - Pré",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"COE-DÓLAR",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"COE-IBOVESPA",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"COMPROMISSADA",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"CRA - Pós",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"DEBÊNTURE - Pré",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"DPGE - Pós",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"LCI - Pós",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"LCI - Pré",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"LF - Pré",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"LFT",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"LTN",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"LTN - PRÉ",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"NP - Pós",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"NTN-BP",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"NTN-F",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"NTN-O - PRÉ",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"NTNO - Pré",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"CCB - Pós",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"CCCB - Pós",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"CDB Aplicacao Automatica",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"CRA",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"CRI",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"CRI - Pós",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"DEBÊNTURE - Pós",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"LCA - Pós",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"LCA - Pré",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"LETRA DE CÂMBIO - PÓS",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"LF - Pós",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"LFT - Pós",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"LFT-O - PRÉ",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"LFTO - Pré",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"LTN-O - Pré",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"LTNO - Pré",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"NP",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"NTN-B",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"NTN-B - Pós",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"NTNB-PRINCIPAL",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"NTN-C",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             },
             {
                "name":"NTN-F - Pré",
                "date":"2018-05-04",
                "netBalance":6682.47,
                "grossBalance":6688.98,
                "issuer":"ALGUM BANCO AI COM NOME MUITO GRANDE",
                "issueDate":"2018-04-09",
                "maturityDate":"2018-10-08",
                "investmentDate":"2018-04-09",
                "indexerRate":98.00,
                "indexer":"DI",
                "incomeTaxBalance":6.51,
                "iofBalance":0.00,
                "grossResultBalance":28.94,
                "portfolioShare":0.14
             }
          ]

## Asset position - Fixed Income - Total [/clientportfolio/v1/consolidated/totals/position?assetType=FixedIncome]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
              {
                  "assetType": "FixedIncome",
                  "assetTypeLabel": "Fixed Income",
                  "date": "2018-05-04",
                  "netBalance": 1252738.63,
                  "grossBalance": 1252739.34,
                  "incomeTaxBalance": 0.71,
                  "iofBalance": 0,
                  "grossResultBalance": 134498.08,
                  "portfolioShare": 72.41
              }
          ]

## Asset position - Equities [/clientportfolio/v1/equity/position]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
             {
                "name":"BBDC3 ON",
                "date":"2018-05-04",
                "netBalance":166775.11,
                "grossBalance":166775.11,
                "issueDate":"2017-08-25",
                "portfolioShare":3.56
             },
             {
                "name":"BBDC4 PN",
                "date":"2018-05-04",
                "netBalance":790779.00,
                "grossBalance":790779.00,
                "issueDate":"2017-08-25",
                "portfolioShare":16.86
             }
          ]

## Asset position - Equities - Total [/clientportfolio/v1/consolidated/totals/position?assetType=Equity]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
              {
                  "assetType": "Equity",
                  "assetTypeLabel": "Equity",
                  "date": "2018-05-04",
                  "netBalance": 957554.11,
                  "grossBalance": 957554.11,
                  "portfolioShare": 20.42
              }
          ]

## Asset position - Funds [/clientportfolio/v1/funds/position]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
              {
                  "name":"BAHIA AM FI REFERENCIADO DI",
                  "date":"2018-05-04",
                  "netBalance":62779.70,
                  "grossBalance":63017.79,
                  "investmentDate":"2016-05-05",
                  "incomeTaxBalance":238.09,
                  "iofBalance":0.00,
                  "grossResultBalance":11222.33,
                  "portfolioShare":3.63
              },
              {
                  "name":"BAHIA AM FI REFERENCIADO DI",
                  "date":"2018-05-04",
                  "netBalance":16300.12,
                  "grossBalance":16387.25,
                  "investmentDate":"2017-12-08",
                  "incomeTaxBalance":87.13,
                  "iofBalance":0.00,
                  "grossResultBalance":387.25,
                  "portfolioShare":0.94
              },
              {
                  "name":"BAHIA AM FI REFERENCIADO DI",
                  "date":"2018-05-04",
                  "netBalance":78276.20,
                  "grossBalance":78646.70,
                  "investmentDate":"2017-12-26",
                  "incomeTaxBalance":370.50,
                  "iofBalance":0.00,
                  "grossResultBalance":1646.70,
                  "portfolioShare":4.52
              },
              {
                  "name":"BAHIA AM MARAÚ FIC MULTIMERCADO",
                  "date":"2018-05-04",
                  "netBalance":319417.50,
                  "grossBalance":325054.83,
                  "investmentDate":"2017-12-08",
                  "incomeTaxBalance":5637.33,
                  "iofBalance":0.00,
                  "grossResultBalance":25054.83,
                  "portfolioShare":18.46
              }
          ]

## Asset position - Funds - Total [/clientportfolio/v1/consolidated/totals/position?assetType=Funds]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
              {
                  "assetType": "Funds",
                  "assetTypeLabel": "Funds",
                  "date": "2018-05-04",
                  "netBalance": 476773.52,
                  "grossBalance": 483106.57,
                  "incomeTaxBalance": 6333.05,
                  "iofBalance": 0,
                  "grossResultBalance": 38311.11,
                  "portfolioShare": 27.55
              }
          ]

## Asset position - Cash Accounts [/clientportfolio/v1/cashaccounts]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
             {
                "id":6455,
                "bankISPB":"15114366",
                "bankCode":"107",
                "branch":2,
                "number":304020,
                "verifyingDigit":"3",
                "holders":[
                   {
                      "id":20155,
                      "name":"cliente2740",
                      "document":"53328506110"
                   }
                ],
                "type":"CC"
             },
             {
                "id":6456,
                "bankISPB":"15114367",
                "bankCode":"108",
                "branch":2,
                "number":304021,
                "verifyingDigit":"4",
                "holders":[
                   {
                      "id":20156,
                      "name":"cliente2741",
                      "document":"53328506111"
                   },
                   {
                      "id":20157,
                      "name":"cliente2742",
                      "document":"53328506112"
                   }
                ],
                "type":"CC"
             }
          ]

## Asset position - Cash Accounts - Balance [/clientportfolio/v1/cashaccounts/{id}/balance]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          {
             "date":"2018-05-04",
             "availableBalance":123.01,
             "blockedBalance":0.00,
             "totalBalance":123.01
          }

## Asset position - Cash Accounts - Balance [/clientportfolio/v1/cashaccounts/6455/balance]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          {
             "date":"2018-05-04",
             "availableBalance":123.01,
             "blockedBalance":0.00,
             "totalBalance":123.01
          }

## Asset position - Cash Accounts - Balance [/clientportfolio/v1/cashaccounts/6455/balance]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS


  - Body

          {
             "date":"2018-05-04",
             "availableBalance":609.01,
             "blockedBalance":0.00,
             "totalBalance":609.01
          }

## Asset position - Cash Accounts - Balance [/clientportfolio/v1/cashaccounts/6456/balance]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS


  - Body

          {
             "date":"2018-05-04",
             "availableBalance":456.01,
             "blockedBalance":0.00,
             "totalBalance":456.01
          }

## Transactions - Fixed Income [/clientportfolio/v1/fixedincome/transactions?dateFrom=&dateTo=&limit=10&offset=0]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS
          Access-Control-Expose-Headers: X-Total-Count,cache-control,X-Total-Pages,pragma
          X-Total-Count: 283
          X-Total-Pages: 29

  - Body

          [
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"COMPROMISSADA",
                "type":"RESGATE ANTECIPADO",
                "date":"2018-05-03",
                "grossValue":-3343.68,
                "netValue":-3340.61,
                "incomeTax":3.07,
                "iof":0.00
             },
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"COMPROMISSADA",
                "type":"RESGATE ANTECIPADO",
                "date":"2018-05-03",
                "grossValue":-10029.14,
                "netValue":-10022.63,
                "incomeTax":6.51,
                "iof":0.00
             },
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"COMPROMISSADA",
                "type":"COMPRA",
                "date":"2018-04-16",
                "grossValue":11000.22,
                "netValue":11000.22,
                "incomeTax":0.00,
                "iof":0.00
             },
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"COMPROMISSADA",
                "type":"VENCIMENTO",
                "date":"2018-04-09",
                "grossValue":-3453.18,
                "netValue":-3445.91,
                "incomeTax":7.27,
                "iof":0.00
             },
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"COMPROMISSADA",
                "type":"COMPRA",
                "date":"2018-04-09",
                "grossValue":3330.02,
                "netValue":3330.02,
                "incomeTax":0.00,
                "iof":0.00
             },
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"LCA - Pós",
                "type":"RESGATE ANTECIPADO",
                "date":"2018-04-06",
                "grossValue":-9465.13,
                "netValue":-9465.13,
                "incomeTax":0.00,
                "iof":0.00
             },
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"COMPROMISSADA",
                "type":"RESGATE ANTECIPADO",
                "date":"2018-03-05",
                "grossValue":-10298.62,
                "netValue":-10290.52,
                "incomeTax":8.10,
                "iof":0.00
             },
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"COMPROMISSADA",
                "type":"COMPRA",
                "date":"2018-02-09",
                "grossValue":13683.52,
                "netValue":13683.52,
                "incomeTax":0.00,
                "iof":0.00
             },
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"LCA - Pós",
                "type":"VENCIMENTO",
                "date":"2018-01-19",
                "grossValue":-209985.28,
                "netValue":-209985.28,
                "incomeTax":0.00,
                "iof":0.00
             },
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"LCA - Pós",
                "type":"EMISSÃO",
                "date":"2018-01-19",
                "grossValue":209985.28,
                "netValue":209985.28,
                "incomeTax":0.00,
                "iof":0.00
             }
          ]

## Transactions - Fixed Income [/clientportfolio/v1/fixedincome/transactions?dateFrom=&dateTo=&limit=10&offset=10]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS
          Access-Control-Expose-Headers: X-Total-Count,cache-control,X-Total-Pages,pragma
          X-Total-Count: 283
          X-Total-Pages: 29

  - Body

          [
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"LCA - Pós",
                "type":"VENCIMENTO",
                "date":"2017-12-26",
                "grossValue":-129317.33,
                "netValue":-129317.33,
                "incomeTax":0.00,
                "iof":0.00
             },
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"LCA - Pós",
                "type":"EMISSÃO",
                "date":"2017-12-26",
                "grossValue":77197.67,
                "netValue":77197.67,
                "incomeTax":0.00,
                "iof":0.00
             },
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"DEBÊNTURE - Pós",
                "type":"REPASSE DE JUROS",
                "date":"2017-12-15",
                "grossValue":-16346.10,
                "netValue":-16346.10,
                "incomeTax":0.00,
                "iof":0.00
             },
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"CRA",
                "type":"REPASSE DE JUROS",
                "date":"2017-12-12",
                "grossValue":-4289.04,
                "netValue":-4289.04,
                "incomeTax":0.00,
                "iof":0.00
             },
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"COMPROMISSADA",
                "type":"RESGATE ANTECIPADO",
                "date":"2017-12-08",
                "grossValue":-69839.12,
                "netValue":-69286.80,
                "incomeTax":552.32,
                "iof":0.00
             },
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"COMPROMISSADA",
                "type":"RESGATE ANTECIPADO",
                "date":"2017-12-08",
                "grossValue":-93270.00,
                "netValue":-92623.85,
                "incomeTax":646.15,
                "iof":0.00
             },
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"COMPROMISSADA",
                "type":"RESGATE ANTECIPADO",
                "date":"2017-12-08",
                "grossValue":-46684.07,
                "netValue":-46375.96,
                "incomeTax":308.11,
                "iof":0.00
             },
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"COMPROMISSADA",
                "type":"RESGATE ANTECIPADO",
                "date":"2017-12-08",
                "grossValue":-53025.90,
                "netValue":-52760.60,
                "incomeTax":265.30,
                "iof":0.00
             },
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"COMPROMISSADA",
                "type":"RESGATE ANTECIPADO",
                "date":"2017-12-08",
                "grossValue":-3362.81,
                "netValue":-3354.03,
                "incomeTax":8.78,
                "iof":0.00
             },
             {
                "assetType":"FixedIncome",
                "assetTypeLabel":"Renda Fixa",
                "assetName":"COMPROMISSADA",
                "type":"RESGATE ANTECIPADO",
                "date":"2017-12-08",
                "grossValue":-259119.72,
                "netValue":-258443.03,
                "incomeTax":676.69,
                "iof":0.00
             }
          ]

## Transactions - Equities [/clientportfolio/v1/equity/transactions?dateFrom=&dateTo=&limit=10&offset=0]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS
          Access-Control-Expose-Headers: X-Total-Count,cache-control,X-Total-Pages,pragma
          X-Total-Count: 283
          X-Total-Pages: 29

  - Body

          [
              {
                  "assetType": "Equity",
                  "assetTypeLabel": "Equity",
                  "assetName": "BBDC3 ON",
                  "type": "PURCHASE",
                  "date": "2018-04-02",
                  "grossValue": 0,
                  "netValue": 0
              },
              {
                  "assetType": "Equity",
                  "assetTypeLabel": "Equity",
                  "assetName": "BBDC4 PN",
                  "type": "PURCHASE",
                  "date": "2018-04-02",
                  "grossValue": 0,
                  "netValue": 0
              },
              {
                  "assetType": "Equity",
                  "assetTypeLabel": "Equity",
                  "assetName": "BBDC4 PN",
                  "type": "SALE",
                  "date": "2018-01-10",
                  "grossValue": -17425,
                  "netValue": -17425
              },
              {
                  "assetType": "Equity",
                  "assetTypeLabel": "Equity",
                  "assetName": "BBDC4 PN",
                  "type": "SALE",
                  "date": "2018-01-10",
                  "grossValue": -2438.1,
                  "netValue": -2438.1
              },
              {
                  "assetType": "Equity",
                  "assetTypeLabel": "Equity",
                  "assetName": "BBDC4 PN",
                  "type": "SALE",
                  "date": "2017-12-20",
                  "grossValue": -19788,
                  "netValue": -19788
              },
              {
                  "assetType": "Equity",
                  "assetTypeLabel": "Equity",
                  "assetName": "BBDC3 ON",
                  "type": "PURCHASE",
                  "date": "2017-05-02",
                  "grossValue": 0,
                  "netValue": 0
              },
              {
                  "assetType": "Equity",
                  "assetTypeLabel": "Equity",
                  "assetName": "BBDC4 PN",
                  "type": "PURCHASE",
                  "date": "2017-05-02",
                  "grossValue": 0,
                  "netValue": 0
              },
              {
                  "assetType": "Equity",
                  "assetTypeLabel": "Equity",
                  "assetName": "BBDC3 ON",
                  "type": "PURCHASE",
                  "date": "2016-04-18",
                  "grossValue": 0,
                  "netValue": 0
              },
              {
                  "assetType": "Equity",
                  "assetTypeLabel": "Equity",
                  "assetName": "BBDC4 PN",
                  "type": "PURCHASE",
                  "date": "2016-04-18",
                  "grossValue": 0,
                  "netValue": 0
              },
              {
                  "assetType": "Equity",
                  "assetTypeLabel": "Equity",
                  "assetName": "BBDC3 ON",
                  "type": "PURCHASE",
                  "date": "2015-03-27",
                  "grossValue": 0,
                  "netValue": 0
              }
          ]

## Transactions - Funds [/clientportfolio/v1/funds/transactions?dateFrom=&dateTo=&limit=10&offset=0]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS
          Access-Control-Expose-Headers: X-Total-Count,cache-control,X-Total-Pages,pragma
          X-Total-Count: 283
          X-Total-Pages: 29

  - Body

          [
             {
                "assetType":"Funds",
                "assetTypeLabel":"Funds",
                "assetName":"BAHIA AM FI REFERENCIADO DI",
                "type":"PARTIAL REDEMPTION",
                "date":"2018-02-06",
                "grossValue":-11066.18,
                "netValue":-11000.00,
                "incomeTax":66.18,
                "iof":0.00
             },
             {
                "assetType":"Funds",
                "assetTypeLabel":"Funds",
                "assetName":"BAHIA AM FI REFERENCIADO DI",
                "type":"PARTIAL REDEMPTION",
                "date":"2018-01-10",
                "grossValue":-12062.44,
                "netValue":-12000.00,
                "incomeTax":62.44,
                "iof":0.00
             },
             {
                "assetType":"Funds",
                "assetTypeLabel":"Funds",
                "assetName":"BAHIA AM FI REFERENCIADO DI",
                "type":"SUBSCRIPTION",
                "date":"2017-12-26",
                "grossValue":77000.00,
                "netValue":77000.00,
                "incomeTax":0.00,
                "iof":0.00
             },
             {
                "assetType":"Funds",
                "assetTypeLabel":"Funds",
                "assetName":"BAHIA AM FI REFERENCIADO DI",
                "type":"SUBSCRIPTION",
                "date":"2017-12-08",
                "grossValue":16000.00,
                "netValue":16000.00,
                "incomeTax":0.00,
                "iof":0.00
             },
             {
                "assetType":"Funds",
                "assetTypeLabel":"Funds",
                "assetName":"BAHIA AM MARAÚ FIC MULTIMERCADO",
                "type":"SUBSCRIPTION",
                "date":"2017-12-08",
                "grossValue":300000.00,
                "netValue":300000.00,
                "incomeTax":0.00,
                "iof":0.00
             },
             {
                "assetType":"Funds",
                "assetTypeLabel":"Funds",
                "assetName":"BAHIA AM FI REFERENCIADO DI",
                "type":"REDEMPTION - INCOME TAX",
                "date":"2017-11-30",
                "grossValue":-516.26,
                "netValue":0.00,
                "incomeTax":516.25,
                "iof":0.00
             },
             {
                "assetType":"Funds",
                "assetTypeLabel":"Funds",
                "assetName":"BAHIA AM FI REFERENCIADO DI",
                "type":"REDEMPTION - INCOME TAX",
                "date":"2017-05-31",
                "grossValue":-674.99,
                "netValue":0.00,
                "incomeTax":674.99,
                "iof":0.00
             },
             {
                "assetType":"Funds",
                "assetTypeLabel":"Funds",
                "assetName":"BAHIA AM FI REFERENCIADO DI",
                "type":"REDEMPTION - INCOME TAX",
                "date":"2016-11-30",
                "grossValue":-742.85,
                "netValue":0.00,
                "incomeTax":742.85,
                "iof":0.00
             },
             {
                "assetType":"Funds",
                "assetTypeLabel":"Funds",
                "assetName":"BAHIA AM FI REFERENCIADO DI",
                "type":"FULL REDEMPTION",
                "date":"2016-08-26",
                "grossValue":-46006.21,
                "netValue":-45628.99,
                "incomeTax":377.22,
                "iof":0.00
             },
             {
                "assetType":"Funds",
                "assetTypeLabel":"Funds",
                "assetName":"BAHIA AM FI REFERENCIADO DI",
                "type":"REDEMPTION - INCOME TAX",
                "date":"2016-05-31",
                "grossValue":-411.80,
                "netValue":0.00,
                "incomeTax":411.80,
                "iof":0.00
             }
          ]

## Transactions - Cash Accounts [/clientportfolio/v1/cashaccounts/{id}/events?dateFrom={dateFrom}&dateTo={dateTo}]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
              {
                  "amount": 6039.01,
                  "date": "2018-05-04",
                  "description": "string",
                  "type": "string",
                  "uri": "string"
              }
          ]

## Transactions - Cash Accounts [/clientportfolio/v1/cashaccounts/{id}/balance-history?date={date}]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          {
              "date": "2018-05-04",
              "openBalance": 609.01,
              "closeBalance": 609.01
          }

## Foreing exchange - Pending Contracts [/esign/v1/api/Contracts/Fx]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "001",
                  "type": "Buy",
                  "tradeDate": "2018-04-18",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "002",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro gdfgdsfhdfgsfgSantos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio sgddfgdfCosta",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigdsfggo Carvalho",
                                  "email": "pj_rfsodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andersdfgdfgdfon Frisone",
                                  "email": "pj_asfgndersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Rgdffdgdfgdfgamos",
                                  "email": "pj_yurasdiramos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigdfgdfgo Carvalho",
                                  "email": "pj_rofsdrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andersogdfgdfgn Frisone",
                                  "email": "pj_anderaafsonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_ydsuriramos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodridfgdfggo Carvalho",
                                  "email": "pj_rodasrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andersofdgdfgdn Frisone",
                                  "email": "pj_andeasrsonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Rfgdfgamos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "003",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "004",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "InProgress",
                          "recipients": [
                              {
                                  "status": "InProgress",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "005",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "InProgress",
                          "recipients": [
                              {
                                  "status": "InProgress",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "006",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "InProgress",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              },
                              {
                                  "status": "InProgress",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "007",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Matheus Lima",
                                  "email": "pj_matheuslima@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Pedro Quintino",
                                  "email": "pj_pedroquintino@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Barbara Schoen",
                                  "email": "pj_barbarashoen@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andre Mendes",
                                  "email": "pj_andremendes@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "008",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Matheus Lima",
                                  "email": "pj_matheuslima@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Pedro Quintino",
                                  "email": "pj_pedroquintino@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Barbara Schoen",
                                  "email": "pj_barbarashoen@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andre Mendes",
                                  "email": "pj_andremendes@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Matheus Lima",
                                  "email": "pj_matheuslima@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Pedro Quintino",
                                  "email": "pj_pedroquintino@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Barbara Schoen",
                                  "email": "pj_barbarashoen@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andre Mendes",
                                  "email": "pj_andremendes@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "009",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "010",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "011",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "012",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "013",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "014",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Matheus Lima",
                                  "email": "pj_matheuslima@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Pedro Quintino",
                                  "email": "pj_pedroquintino@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Barbara Schoen",
                                  "email": "pj_barbarashoen@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andre Mendes",
                                  "email": "pj_andremendes@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "015",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro gdfgdsfhdfgsfgSantos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio sgddfgdfCosta",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigdsfggo Carvalho",
                                  "email": "pj_rfsodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andersdfgdfgdfon Frisone",
                                  "email": "pj_asfgndersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Rgdffdgdfgdfgamos",
                                  "email": "pj_yurasdiramos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigdfgdfgo Carvalho",
                                  "email": "pj_rofsdrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andersogdfgdfgn Frisone",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_anderaafsonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_ydsuriramos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodridfgdfggo Carvalho",
                                  "email": "pj_rodasrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andersofdgdfgdn Frisone",
                                  "email": "pj_andeasrsonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Rfgdfgamos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Pedro Quintino",
                                  "email": "pj_pedroquintino@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Barbara Schoen",
                                  "email": "pj_barbarashoen@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andre Mendes",
                                  "email": "pj_andremendes@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Matheus Lima",
                                  "email": "pj_matheuslima@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "016",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 2,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Matheus Lima",
                                  "email": "pj_matheuslima@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Pedro Quintino",
                                  "email": "pj_pedroquintino@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Barbara Schoen",
                                  "email": "pj_barbarashoen@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andre Mendes",
                                  "email": "pj_andremendes@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "017",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              },
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Matheus Lima",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_matheuslima@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpD",
                          "name": "grupo D",
                          "signOrder": 4,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Pedro Quintino",
                                  "email": "pj_pedroquintino@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Barbara Schoen",
                                  "email": "pj_barbarashoen@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andre Mendes",
                                  "email": "pj_andremendes@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "018",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "019",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "020",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpD",
                          "name": "grupo D",
                          "signOrder": 4,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "021",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "022",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "023",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "024",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "025",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "026",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "027",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "InProgress",
                          "recipients": [
                              {
                                  "status": "InProgress",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              }
          ]

## Foreing exchange - Pending Contracts - Proceed to Sign [/esign/v1/api/Contracts/Fx/{contractId}/Sign_Url]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS


  - Body

          {
              "url": "http://localhost:9000/exchanges/sign-confirmation?contractId=contractId&event=signing_complete",
              "returnUrl": "http://teste.com"
          }

## Foreing exchange - Pending Contracts - The contract was signed [/esign/v1/api/Contracts/Fx/{contractId}/Signed]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: PUT, GET, OPTIONS

### PUT [PUT]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: PUT, OPTIONS


  - Body

          {
          }

## Foreing exchange - Contracts History [/esign/v1/api/Contracts/Fx/History]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS


  - Body

          [
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "027",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "InProgress",
                          "recipients": [
                              {
                                  "status": "InProgress",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              }
          ]

## Foreing exchange - Pending Contracts - Proceed to Sign [/esign/v1/api/Contracts/Fx/{contractId}/Sign_Url]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          {
              "url": "http://localhost:9000/exchanges/sign-confirmation?contractId=contractId&event=signing_complete",
              "returnUrl": "http://teste.com"
          }

## Foreing exchange - Pending Contracts - The contract was signed [/esign/v1/api/Contracts/Fx/{contractId}/Signed]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: PUT, GET, OPTIONS

### PUT [PUT]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: PUT, OPTIONS

  - Body

          {
          }

## Foreing exchange - Contracts History [/esign/v1/api/Contracts/Fx/History]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
              {
                 "contractId":"aaa",
                 "type":"Buy",
                 "tradeDate":"2018-04-18T12:18:44.3628354-03:00",
                 "localCurrency":"BRL",
                 "foreignCurrency":"USD",
                 "rate":30.227,
                 "localAmount":58215808.24,
                 "foreignAmount":1759689235.67048,
                 "fxNature":"Export os goods to the United States",
                 "signatures":[
                      {
                          "name":"Lucas Fragas",
                          "date":"2018-06-22T21:23"
                      },
                      {
                          "name":"Eduardo Souza",
                          "date":"2018-06-23T21:23"
                      }
                  ]
              },
              {
                  "contractId":"bbb",
                  "type":"Buy",
                  "tradeDate":"2018-02-21T14:34:47.7636946+00:00",
                  "localCurrency":"BRL",
                  "foreignCurrency":"JOD",
                  "rate":3.7903,
                  "localAmount":15123227.72,
                  "foreignAmount":57321570.027116
              },
              {
                 "contractId":"ccc",
                 "type":"Sell",
                 "tradeDate":"2018-04-18T12:18:44.3628354-03:00",
                 "localCurrency":"BRL",
                 "foreignCurrency":"USD",
                 "rate":30.227,
                 "localAmount":58215808.24,
                 "foreignAmount":1759689235.67048,
                 "fxNature":"Export os goods to the United States",
                 "signatures":[
                      {
                          "name":"Lucas Fragas",
                          "date":"2018-06-22T21:23"
                      },
                      {
                          "name":"Eduardo Souza",
                          "date":"2018-06-23T21:23"
                      },
                      {
                          "name":"Matheus Souza",
                          "date":"2018-06-23T21:23"
                      }
                  ]
              },
              {
                 "contractId":"ddd",
                 "type":"Buy",
                 "tradeDate":"2018-04-18T12:18:44.3628354-03:00",
                 "localCurrency":"BRL",
                 "foreignCurrency":"USD",
                 "rate":30.227,
                 "localAmount":58215808.24,
                 "foreignAmount":1759689235.67048,
                 "fxNature":"Export os goods to the United States",
                 "signatures":[
                      {
                          "name":"Lucas Fragas",
                          "date":"2018-06-22T21:23"
                      }
                  ]
              }
          ]

## Foreing exchange - Contracts History - Download [/esign/v1/api/Contracts/Fx/{id}/Document_File]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/octet-stream)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          content

## Transfer - Dashboard - New Transfer Confirmation [/powerattorney/v1/approvers/list]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS


  - Body

          {
              "quantity": "2",
              "approvers": [
                  {
                      "name": "Usuario PJ4",
                      "uid": "pj4@bocombbm.com.br"
                  },
                  {
                      "name": "Usuario PJ5",
                      "uid": "pj5@bocombbm.com.br"
                  },
                  {
                      "name": "Usuario PJ6",
                      "uid": "pj6@bocombbm.com.br"
                  },
                  {
                      "name": "Usuario PJ8",
                      "uid": "pj8@bocombbm.com.br"
                  }
              ]
          }

## Transfer - ?? - ?? [/wiretransferrequest/v1/api/wiretransfer]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### POST [POST]

- Response 201 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS


  - Body

          {
            "content": {
              "transferOrderId": "c3ea6b32-cc06-11e8-8f5e-0a580af40151",
              "approvers": [
                {
                  "approverId": "approverId",
                  "name": "name"
                }
              ]
            },
            "statusCode": 201,
            "messages": [
              "message"
            ]
          }

## Transfer - ?? - ?? [/wiretransferrequest/v1/api/wiretransfer/approvement/pending]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS


  - Body

          {
              "content":
              [
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "approverId": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": true
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "andre.mendes@bancobbm.com.br",
                              "name": "André Mendes",
                              "hasApproved": true
                          },
                          {
                              "id": "pedro.quintino@bancobbm.com.br",
                              "name": "Pedro Quintino",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": true
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "andre.mendes@bancobbm.com.br",
                              "name": "André Mendes",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "086b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 200,
                      "approvers":
                      [
                          {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "086b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 201,
                      "approvers":
                      [
                          {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "outrousuario@bancobbm.com.br",
                              "name": "Outro Usuario",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "086b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 201,
                      "approvers":
                      [
                          {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "outrousuario@bancobbm.com.br",
                              "name": "Outro Usuario",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 202,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": false
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 202,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": true
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": false
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 202,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": true
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": false
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": true
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "086b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 200,
                      "approvers":
                      [
                          {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "086b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 201,
                      "approvers":
                      [
                          {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "outrousuario@bancobbm.com.br",
                              "name": "Outro Usuario",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "086b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 201,
                      "approvers":
                      [
                          {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "outrousuario@bancobbm.com.br",
                              "name": "Outro Usuario",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 202,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": false
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 202,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": true
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": false
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 202,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": true
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": false
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": true
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "086b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 200,
                      "approvers":
                      [
                          {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "086b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 201,
                      "approvers":
                      [
                          {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "outrousuario@bancobbm.com.br",
                              "name": "Outro Usuario",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "086b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 201,
                      "approvers":
                      [
                          {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "outrousuario@bancobbm.com.br",
                              "name": "Outro Usuario",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 202,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": false
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 202,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": true
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": false
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 202,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": true
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": false
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": true
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": true
                          }
                      ]
                  }
              ],
              "statusCode": 200,
              "messages": [
              "string"
              ]
          }

## Transfer - ?? - ?? [/wiretransferrequest/v1/api/wiretransfer/{tedOrderId}/approvement/{approved}]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: PUT, OPTIONS

### PUT [PUT]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: PUT, OPTIONS


  - Body

          {
            "statusCode": 200,
            "messages": [
              "string"
            ]
          }

## Transfer - ?? - ?? [/wiretransferrequest/v1/api/wiretransfer/{requistionId}/approvement/true]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: PUT, OPTIONS

### PUT [PUT]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: PUT, OPTIONS


  - Body

          {
          }

## Transfer - ?? - ?? [/wiretransferrequest/v1/api/wiretransfer/{requistionId}/approvement/false]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: PUT, OPTIONS

### PUT [PUT]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: PUT, OPTIONS


  - Body

          {
          }

## Transfer - ?? - ?? [/authcodesmanager/v1/users/authfactors?user=pj_yuriramos@bancobbm.com.br&idp=ib]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS


  - Body

          [
              {
                  "id": "67f61d5d-3560-4121-ab16-222f614dfbc3",
                  "defaultAuth": false,
                  "authUri": "RnhJWW9sYSt3RkVvdlhOUU0yZnpKVkdWV3ZvPQ==",
                  "type": "mobile",
                  "actions": [
                      "authregistration",
                      "passwordreset",
                      "wiretransfer"
                  ],
                  "activated": true,
                  "plataformIdentifier": "6865252b-6609-4770-8cf2-775328ad39cf"
              },
              {
                  "id": "kjhdsakjhgaf-dkjhbvdjk564-h",
                  "defaultAuth": false,
                  "authUri": "21956309602",
                  "type": "sms",
                  "actions": [
                      "authregistration",
                      "passwordreset"
                  ],
                  "activated": true,
                  "plataformIdentifier": null
              },
              {
                  "id": "s56456-bdsvdas-455wq",
                  "defaultAuth": true,
                  "authUri": "pj_yuriramos@bancobbm.com.br",
                  "type": "mail",
                  "actions": [
                      "authregistration",
                      "passwordreset"
                  ],
                  "activated": true,
                  "plataformIdentifier": null
              }
          ]

## Transfer - ?? - ?? [/authcodesmanager/v1/authcodes]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, OPTIONS

### POST [POST]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: POST, OPTIONS


  - Body

          {
              "id": "6815d193-a55b-42c2-a0ef-9f24732ed584",
              "type": "oob",
              "authFactorId": "kjhdsakjhgaf-dkjhbvdjk564-h",
              "actionType": "passwordreset",
              "payload": {
                  "agent": "Chrome",
                  "id": "kj198fas-jbcsa982-biqa90",
                  "local": "Rio de Janeiro - Brasil"
              }
          }

## Transfer - ?? - ?? [/authcodesmanager/v1/authcodes/{ID}/approve]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: PUT, OPTIONS

### PUT [PUT]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: PUT, OPTIONS


  - Body

          {
          }

## Transfer - ?? - ?? [/test_docusign]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
              {
                  "typeId": "Carteira Consolidada Mensal",
                  "name"  : "Monthly Statement"
              },
              {
                  "typeId": "Informe de Rendimentos",
                  "name"  : "Earnings Report"
              },
              {
                  "typeId": "Sem Dados",
                  "name"  : "No Data"
              }
          ]

## Documents - ?? - ?? [/clientdocuments/v1/files?typeId=Carteira%20Consolidada%20Mensal]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
              {
                  "id": "Carteira Consolidada Mensal_2015",
                  "name": "2015",
                  "typeId": "Carteira Consolidada Mensal",
                  "lastWriteTime": "2018-12-14T18:43:17.0688198-02:00",
                  "creationTime": "2018-12-17T18:30:34.7869044-02:00"
              },
              {
                  "id": "Carteira Consolidada Mensal_2016",
                  "name": "2016",
                  "typeId": "Carteira Consolidada Mensal",
                  "lastWriteTime": "2018-12-14T18:43:17.0688198-02:00",
                  "creationTime": "2018-12-17T18:30:46.2676948-02:00"
              }
          ]

## Documents - ?? - ?? [/clientdocuments/v1/files?typeId=Informe%20de%20Rendimentos]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
              {
                  "id": "Informe de Rendimentos_2015-Banco",
                  "name": "2015-Banco",
                  "typeId": "Informe de Rendimentos",
                  "lastWriteTime": "2018-12-14T18:43:17.0688198-02:00",
                  "creationTime": "2018-12-17T18:31:05.7039242-02:00"
              },
              {
                  "id": "Informe de Rendimentos_2015-Corretora",
                  "name": "2015-Corretora",
                  "typeId": "Informe de Rendimentos",
                  "lastWriteTime": "2018-12-14T18:43:17.0688198-02:00",
                  "creationTime": "2018-12-17T18:31:21.9891758-02:00"
              },
              {
                  "id": "Informe de Rendimentos_2016",
                  "name": "2016",
                  "typeId": "Informe de Rendimentos",
                  "lastWriteTime": "2018-12-14T18:43:17.0688198-02:00",
                  "creationTime": "2018-12-17T18:31:32.409241-02:00"
              }
          ]

## Documents - ?? - ?? [/clientdocuments/v1/files?typeId=Sem%20Dados]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [

          ]

## Documents - ?? - ?? [/clientdocuments/v1/files/Carteira%20Consolidada%20Mensal_2015/download]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

### GET [GET]

- Response 200 (application/pdf)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          JVBERi0xLjMNCiXi48/TDQoNCjEgMCBvYmoNCjw8DQovVHlwZSAvQ2F0YWxvZw0KL091dGxpbmVzIDIgMCBSDQovUGFnZXMgMyAwIFINCj4+DQplbmRvYmoNCg0KMiAwIG9iag0KPDwNCi9UeXBlIC9PdXRsaW5lcw0KL0NvdW50IDANCj4+DQplbmRvYmoNCg0KMyAwIG9iag0KPDwNCi9UeXBlIC9QYWdlcw0KL0NvdW50IDINCi9LaWRzIFsgNCAwIFIgNiAwIFIgXSANCj4+DQplbmRvYmoNCg0KNCAwIG9iag0KPDwNCi9UeXBlIC9QYWdlDQovUGFyZW50IDMgMCBSDQovUmVzb3VyY2VzIDw8DQovRm9udCA8PA0KL0YxIDkgMCBSIA0KPj4NCi9Qcm9jU2V0IDggMCBSDQo+Pg0KL01lZGlhQm94IFswIDAgNjEyLjAwMDAgNzkyLjAwMDBdDQovQ29udGVudHMgNSAwIFINCj4+DQplbmRvYmoNCg0KNSAwIG9iag0KPDwgL0xlbmd0aCAxMDc0ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBBIFNpbXBsZSBQREYgRmlsZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIFRoaXMgaXMgYSBzbWFsbCBkZW1vbnN0cmF0aW9uIC5wZGYgZmlsZSAtICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjY0LjcwNDAgVGQNCigganVzdCBmb3IgdXNlIGluIHRoZSBWaXJ0dWFsIE1lY2hhbmljcyB0dXRvcmlhbHMuIE1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NTIuNzUyMCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDYyOC44NDgwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjE2Ljg5NjAgVGQNCiggdGV4dC4gQW5kIG1vcmUgdGV4dC4gQm9yaW5nLCB6enp6ei4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjA0Ljk0NDAgVGQNCiggbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDU5Mi45OTIwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNTY5LjA4ODAgVGQNCiggQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA1NTcuMTM2MCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBFdmVuIG1vcmUuIENvbnRpbnVlZCBvbiBwYWdlIDIgLi4uKSBUag0KRVQNCmVuZHN0cmVhbQ0KZW5kb2JqDQoNCjYgMCBvYmoNCjw8DQovVHlwZSAvUGFnZQ0KL1BhcmVudCAzIDAgUg0KL1Jlc291cmNlcyA8PA0KL0ZvbnQgPDwNCi9GMSA5IDAgUiANCj4+DQovUHJvY1NldCA4IDAgUg0KPj4NCi9NZWRpYUJveCBbMCAwIDYxMi4wMDAwIDc5Mi4wMDAwXQ0KL0NvbnRlbnRzIDcgMCBSDQo+Pg0KZW5kb2JqDQoNCjcgMCBvYmoNCjw8IC9MZW5ndGggNjc2ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBTaW1wbGUgUERGIEZpbGUgMiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIC4uLmNvbnRpbnVlZCBmcm9tIHBhZ2UgMS4gWWV0IG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NzYuNjU2MCBUZA0KKCBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY2NC43MDQwIFRkDQooIHRleHQuIE9oLCBob3cgYm9yaW5nIHR5cGluZyB0aGlzIHN0dWZmLiBCdXQgbm90IGFzIGJvcmluZyBhcyB3YXRjaGluZyApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY1Mi43NTIwIFRkDQooIHBhaW50IGRyeS4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NDAuODAwMCBUZA0KKCBCb3JpbmcuICBNb3JlLCBhIGxpdHRsZSBtb3JlIHRleHQuIFRoZSBlbmQsIGFuZCBqdXN0IGFzIHdlbGwuICkgVGoNCkVUDQplbmRzdHJlYW0NCmVuZG9iag0KDQo4IDAgb2JqDQpbL1BERiAvVGV4dF0NCmVuZG9iag0KDQo5IDAgb2JqDQo8PA0KL1R5cGUgL0ZvbnQNCi9TdWJ0eXBlIC9UeXBlMQ0KL05hbWUgL0YxDQovQmFzZUZvbnQgL0hlbHZldGljYQ0KL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcNCj4+DQplbmRvYmoNCg0KMTAgMCBvYmoNCjw8DQovQ3JlYXRvciAoUmF2ZSBcKGh0dHA6Ly93d3cubmV2cm9uYS5jb20vcmF2ZVwpKQ0KL1Byb2R1Y2VyIChOZXZyb25hIERlc2lnbnMpDQovQ3JlYXRpb25EYXRlIChEOjIwMDYwMzAxMDcyODI2KQ0KPj4NCmVuZG9iag0KDQp4cmVmDQowIDExDQowMDAwMDAwMDAwIDY1NTM1IGYNCjAwMDAwMDAwMTkgMDAwMDAgbg0KMDAwMDAwMDA5MyAwMDAwMCBuDQowMDAwMDAwMTQ3IDAwMDAwIG4NCjAwMDAwMDAyMjIgMDAwMDAgbg0KMDAwMDAwMDM5MCAwMDAwMCBuDQowMDAwMDAxNTIyIDAwMDAwIG4NCjAwMDAwMDE2OTAgMDAwMDAgbg0KMDAwMDAwMjQyMyAwMDAwMCBuDQowMDAwMDAyNDU2IDAwMDAwIG4NCjAwMDAwMDI1NzQgMDAwMDAgbg0KDQp0cmFpbGVyDQo8PA0KL1NpemUgMTENCi9Sb290IDEgMCBSDQovSW5mbyAxMCAwIFINCj4+DQoNCnN0YXJ0eHJlZg0KMjcxNA0KJSVFT0YNCg==

## suitability - ?? - ?? [/suitability]

### OPTIONS [OPTIONS]

- Response 204 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

### GET [GET]

- Response 200 (application/json)

  - Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, OPTIONS

  - Body

          [
            {
              "step": 1,
              "data": {
                "title": "Qual é o número de seus dependentes financeiros?",
                "options": [
                  {
                    "id": 1,
                    "step": 1,
                    "value": "Um"
                  },
                  {
                    "id": 2,
                    "step": 2,
                    "value": "Dois"
                  },
                  {
                    "id": 3,
                    "step": 3,
                    "value": "Três"
                  },
                  {
                    "id": 4,
                    "step": 4,
                    "value": "Mais de Três"
                  }
                ],
                "id": 1,
                "className": "SingleChoice"
              }
            },
            {
              "step": 2,
              "data": {
                "title": "Qual é a composição atual de seu Patrimônio em %?",
                "components": [
                  {
                    "id": 1,
                    "step": 1,
                    "title": "Fundos de Investimento de Renda Fixa e Referenciado DI, Poupança, Títulos Públicos e Conta Corrente"
                  },
                  {
                    "id": 2,
                    "step": 2,
                    "title": "Fundos de Investimento de Renda Fixa Crédito Privado (incluindo FIDICs e Fundos de Crédito)"
                  },
                  {
                    "id": 3,
                    "step": 3,
                    "title": "Ações e Fundos de Investimento em Ações"
                  },
                  {
                    "id": 4,
                    "step": 4,
                    "title": "Títulos Bancários (CDBs/ LFs / LCA/LCIs etc)"
                  },
                  {
                    "id": 5,
                    "step": 5,
                    "title": "Títulos Privados Corporativos (Debêntures / CRIs / CRAs/ LFs)"
                  },
                  {
                    "id": 6,
                    "step": 6,
                    "title": "Fundos de Investimento Multimercado"
                  },
                  {
                    "id": 7,
                    "step": 7,
                    "title": "Fundos de Previdência"
                  },
                  {
                    "id": 8,
                    "step": 8,
                    "title": "Patrimônio Imobilizado: Imóveis / automóveis etc"
                  },
                  {
                    "id": 9,
                    "step": 9,
                    "title": "Outros"
                  }
                ],
                "id": 2,
                "className": "PercentageComposition"
              }
            },
            {
              "step": 3,
              "data": {
                "title": "Qual das composições de carteira abaixo você optaria por colocar seu dinheiro?",
                "columns": [
                  "Investimento de Risco Baixo",
                  "Investimento de Risco Intermediário",
                  "Investimento de Risco Elevado"
                ],
                "options": [
                  {
                    "id": 1,
                    "step": 1,
                    "value": [
                      "100%",
                      "0%",
                      "0%"
                    ]
                  },
                  {
                    "id": 2,
                    "step": 2,
                    "value": [
                      "70%",
                      "20%",
                      "10%"
                    ]
                  },
                  {
                    "id": 3,
                    "step": 3,
                    "value": [
                      "50%",
                      "35%",
                      "15%"
                    ]
                  },
                  {
                    "id": 4,
                    "step": 4,
                    "value": [
                      "30%",
                      "50%",
                      "20%"
                    ]
                  },
                  {
                    "id": 5,
                    "step": 5,
                    "value": [
                      "10%",
                      "60%",
                      "30%"
                    ]
                  }
                ],
                "id": 3,
                "className": "TableSingleChoice"
              }
            },
            {
              "step": 4,
              "data": {
                "title": "Você possui experiência de investimento em algum dos ativos abaixo?",
                "questions": [
                  {
                    "step": 1,
                    "question": {
                      "title": "Fundos de Investimento de Renda Fixa e Referenciado DI; Títulos Públicos, Poupança e Conta Corrente",
                      "options": [
                        {
                          "id": 1,
                          "step": 1,
                          "value": "Não"
                        },
                        {
                          "id": 2,
                          "step": 2,
                          "value": "Alguma"
                        },
                        {
                          "id": 3,
                          "step": 3,
                          "value": "Sou experiente"
                        }
                      ],
                      "id": 1,
                      "className": "SingleChoice"
                    }
                  },
                  {
                    "step": 2,
                    "question": {
                      "title": "Fundos de Investimento de Renda Fixa Crédito Privado (incluindo FIDICs e Fundos de Crédito)",
                      "options": [
                        {
                          "id": 1,
                          "step": 1,
                          "value": "Não"
                        },
                        {
                          "id": 2,
                          "step": 2,
                          "value": "Alguma"
                        },
                        {
                          "id": 3,
                          "step": 3,
                          "value": "Sou experiente"
                        }
                      ],
                      "id": 2,
                      "className": "SingleChoice"
                    }
                  },
                  {
                    "step": 3,
                    "question": {
                      "title": "Ações e Fundos de Investimento em Ações",
                      "options": [
                        {
                          "id": 1,
                          "step": 1,
                          "value": "Não"
                        },
                        {
                          "id": 2,
                          "step": 2,
                          "value": "Alguma"
                        },
                        {
                          "id": 3,
                          "step": 3,
                          "value": "Sou experiente"
                        }
                      ],
                      "id": 3,
                      "className": "SingleChoice"
                    }
                  },
                  {
                    "step": 4,
                    "question": {
                      "title": "Títulos Bancários (CDBs/ LFs / LCAs/LCIs etc)",
                      "options": [
                        {
                          "id": 1,
                          "step": 1,
                          "value": "Não"
                        },
                        {
                          "id": 2,
                          "step": 2,
                          "value": "Alguma"
                        },
                        {
                          "id": 3,
                          "step": 3,
                          "value": "Sou experiente"
                        }
                      ],
                      "id": 4,
                      "className": "SingleChoice"
                    }
                  },
                  {
                    "step": 5,
                    "question": {
                      "title": "Títulos Privados Corporativos (Debêntures / CRIs / CRAs/ LFs))",
                      "options": [
                        {
                          "id": 1,
                          "step": 1,
                          "value": "Não"
                        },
                        {
                          "id": 2,
                          "step": 2,
                          "value": "Alguma"
                        },
                        {
                          "id": 3,
                          "step": 3,
                          "value": "Sou experiente"
                        }
                      ],
                      "id": 5,
                      "className": "SingleChoice"
                    }
                  },
                  {
                    "step": 6,
                    "question": {
                      "title": "Fundos de Investimento Multimercado",
                      "options": [
                        {
                          "id": 1,
                          "step": 1,
                          "value": "Não"
                        },
                        {
                          "id": 2,
                          "step": 2,
                          "value": "Alguma"
                        },
                        {
                          "id": 3,
                          "step": 3,
                          "value": "Sou experiente"
                        }
                      ],
                      "id": 6,
                      "className": "SingleChoice"
                    }
                  },
                  {
                    "step": 7,
                    "question": {
                      "title": "Fundos de Previdência",
                      "options": [
                        {
                          "id": 1,
                          "step": 1,
                          "value": "Não"
                        },
                        {
                          "id": 2,
                          "step": 2,
                          "value": "Alguma"
                        },
                        {
                          "id": 3,
                          "step": 3,
                          "value": "Sou experiente"
                        }
                      ],
                      "id": 7,
                      "className": "SingleChoice"
                    }
                  }
                ],
                "id": 4,
                "className": "SingleChoiceList"
              }
            }
          ]
