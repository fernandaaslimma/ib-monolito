FORMAT: 1A

## Pendencies Verification [/clientdocumentsubmission/v1/subscriptions/pendencies]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### GET [GET]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          [
          ]

### Subscriptions Funds Verification [/torfunds/v1/subscriptions]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### POST [POST]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          {
              "id": 145,
              "productId": 1,
              "idempotencyKey": "2b92510a-40e6-4a1e-9857-4741c5852e62",
              "investmentValue": 40000.0,
              "status": "AWAITING_APPROVAL",
              "terms": [
                  {
                      "name": "Term of adhesion BOCOM BBM CORPORATE CREDIT 60 FIC FIM CP",
                      "type": "productTerms",
                      "url": "https://api.bocombbm.com.br/productterms/fundos/adesao_37322143000120.pdf",
                      "id": 48
                  },
                  {
                      "name": "Non Compliance Term - Fixed Income",
                      "type": "unsuitableTerms",
                      "url": "https://api.bocombbm.com.br/noncomplianceterms/fundos/desenquadramento_rf_mod.pdf",
                      "id": 250
                  }
              ]
          }


### Subscriptions Fixed Income Verification [/torfixedincome/v1/subscriptions]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### POST [POST]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          {
              "id": 3109,
              "productId": 2,
              "investmentValue": 10.0,
              "account": {
                  "id": 61492,
                  "bankCode": "107",
                  "branch": "2",
                  "number": "308635"
              },
              "subscriptionDate": "2021-06-22",
              "idempotencyKey": "29a9ea3b-9aeb-441a-9abc-3e1a791e340f",
              "status": "Awaiting Approval",
              "terms": [
                  {
                      "name": "Term of adhesion BOCOM BBM CORPORATE CREDIT 60 FIC FIM CP",
                      "type": "productTerms",
                      "url": "https://api.bocombbm.com.br/productterms/fundos/adesao_37322143000120.pdf",
                      "id": 48
                  },
                  {
                      "name": "Non Compliance Term - Fixed Income",
                      "type": "unsuitableTerms",
                      "url": "https://api.bocombbm.com.br/noncomplianceterms/fundos/desenquadramento_rf_mod.pdf",
                      "id": 250
                  }
              ]
          }



### Subscriptions Funds Verification [/torfunds/v1/subscriptions/{id}/confirm]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### POST [PUT]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          {
              "id": 145,
              "productId": 1,
              "idempotencyKey": "2b92510a-40e6-4a1e-9857-4741c5852e62",
              "investmentValue": 40000.0,
              "status": "AWAITING_APPROVAL",
              "terms": [
                  {
                      "name": "Term of adhesion BOCOM BBM CORPORATE CREDIT 60 FIC FIM CP",
                      "type": "productTerms",
                      "url": "https://api.bocombbm.com.br/productterms/fundos/adesao_37322143000120.pdf",
                      "id": 48
                  },
                  {
                      "name": "Non Compliance Term - Fixed Income",
                      "type": "unsuitableTerms",
                      "url": "https://api.bocombbm.com.br/noncomplianceterms/fundos/desenquadramento_rf_mod.pdf",
                      "id": 250
                  }
              ]
          }

### Subscriptions Fixed Income Verification [/torfixedincome/v1/subscriptions/3109/confirm]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### POST [PUT]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          {
              "id": 145,
              "productId": 1,
              "idempotencyKey": "2b92510a-40e6-4a1e-9857-4741c5852e62",
              "investmentValue": 40000.0,
              "status": "AWAITING_APPROVAL",
              "terms": [
                  {
                      "name": "Term of adhesion BOCOM BBM CORPORATE CREDIT 60 FIC FIM CP",
                      "type": "productTerms",
                      "url": "https://api.bocombbm.com.br/productterms/fundos/adesao_37322143000120.pdf",
                      "id": 48
                  },
                  {
                      "name": "Non Compliance Term - Fixed Income",
                      "type": "unsuitableTerms",
                      "url": "https://api.bocombbm.com.br/noncomplianceterms/fundos/desenquadramento_rf_mod.pdf",
                      "id": 250
                  }
              ]
          }

### Redemptions register [/torfunds/v1/redemptions]

### OPTIONS [OPTIONS]

+ Response 201 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### POST [POST]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          {
              "id": 1,
              "productId": 1,
              "productDocument": "72.843.373/0001-35",
              "productName": "FUNDO ABC",
              "redemptionValue": 100.27,
              "fullRedemption": true,
              "redemptionDate": "2021-04-28",
              "idempotencyKey": "9F4D7ACF-CE78-4414-AB1D-DD93CE97B064",
              "status": "pending",
              "message": "Error Processing Request.",
              "showErrorToUser": true,
              "errors": [
                  {
                      "code": "12",
                      "title": "Daily limit",
                      "message": "It was not possible to carry out the redemption.\n\n For your safety, contact your banker to carry out the transaction."
                  }
              ]
          }

### Redemptions register [/torfixedincome/v1/redemptions]

### OPTIONS [OPTIONS]

+ Response 201 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### POST [POST]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          {
              "id": 1,
              "productId": 1,
              "productDocument": "72.843.373/0001-35",
              "productName": "FUNDO ABC",
              "redemptionValue": 100.27,
              "fullRedemption": true,
              "redemptionDate": "2021-04-28",
              "idempotencyKey": "9F4D7ACF-CE78-4414-AB1D-DD93CE97B064",
              "status": "pending",
              "message": "Error Processing Request.",
              "showErrorToUser": true,
              "errors": [
                  {
                      "code": "12",
                      "title": "Daily limit",
                      "message": "It was not possible to carry out the redemption.\n\n For your safety, contact your banker to carry out the transaction."
                  }
              ]
          }

### Redemptions Confirm [/torfunds/v1/redemptions/{id}/confirm]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### PUT [PUT]

+ Response 204 (_/_)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

### DownloadCNAB [/client/6455/cashaccounts/statement/cnab]

### OPTIONS [OPTIONS]

+ Response 204 (application/octet-stream)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### GET [GET]

+ Response 200 (application/octet-stream)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS
          Content-Disposition: attachment; filename="ExtratoCnab.txt"


  + Body

          MTA3MDAwMDFFMDQwMTAzMyAxMDAwNzA0MTcxNzYxNTUgICAgICAgICAgICAgICAgICAgIDAwMDAyIDMwMzg5NCAgICAgIDIgSmFjb2IgQWZmb25zZWNhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDExMDgyMDIxMDAwMDAwMDAwMDAwMDAwMDAwQ0ZCUkwwMDAwMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCjEwNzAwMDEzMDAwMDFFICAgMTAwMDcwNDE3MTc2MTU1ICAgICAgICAgICAgICAgICAgICAwMDAwMiAzMDM4OTQgICAgICAyIEphY29iIEFmZm9uc2VjYSAgICAgICAgICAgICAgICAgICAgIENEUzAwICAgICAgICAgICAgICAgICAgICBOMDIwNjIwMjEwMjA2MjAyMTAwMDAwMDAwMDAxMzk1ODcyMEMyMTggICAgUkVTR0FURSBERSBGVU5ET1MgICAgICAgIFBST1ZJU09SSU8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIAoxMDcwMDAxMzAwMDAyRSAgIDEwMDA3MDQxNzE3NjE1NSAgICAgICAgICAgICAgICAgICAgMDAwMDIgMzAzODk0ICAgICAgMiBKYWNvYiBBZmZvbnNlY2EgICAgICAgICAgICAgICAgICAgICBDRFMwMCAgICAgICAgICAgICAgICAgICAgTjA0MDYyMDIxMDQwNjIwMjEwMDAwMDAwMDAwMjM4OTIzNTBDMjE4ICAgIFJFU0dBVEUgREUgRlVORE9TICAgICAgICBQUk9WSVNPUklPICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKMTA3MDAwMTMwMDAwM0UgICAxMDAwNzA0MTcxNzYxNTUgICAgICAgICAgICAgICAgICAgIDAwMDAyIDMwMzg5NCAgICAgIDIgSmFjb2IgQWZmb25zZWNhICAgICAgICAgICAgICAgICAgICAgQ0RTMDAgICAgICAgICAgICAgICAgICAgIE4wNDA2MjAyMTA0MDYyMDIxMDAwMDAwMDAwMDEzOTkwMjgyQzIxOCAgICBSRVNHQVRFIERFIEZVTkRPUyAgICAgICAgUFJPVklTT1JJTyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCjEwNzAwMDEzMDAwMDRFICAgMTAwMDcwNDE3MTc2MTU1ICAgICAgICAgICAgICAgICAgICAwMDAwMiAzMDM4OTQgICAgICAyIEphY29iIEFmZm9uc2VjYSAgICAgICAgICAgICAgICAgICAgIENEUzAwICAgICAgICAgICAgICAgICAgICBOMDQwNjIwMjEwNDA2MjAyMTAwMDAwMDAwMDAxMzk3NDU3NkMyMTggICAgUkVTR0FURSBERSBGVU5ET1MgICAgICAgIFBST1ZJU09SSU8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIAoxMDcwMDAxMzAwMDA1RSAgIDEwMDA3MDQxNzE3NjE1NSAgICAgICAgICAgICAgICAgICAgMDAwMDIgMzAzODk0ICAgICAgMiBKYWNvYiBBZmZvbnNlY2EgICAgICAgICAgICAgICAgICAgICBDRFMwMCAgICAgICAgICAgICAgICAgICAgTjA0MDYyMDIxMDQwNjIwMjEwMDAwMDAwMDAwMDQ5OTQwMTFDMjE4ICAgIFJFU0dBVEUgREUgRlVORE9TICAgICAgICBQUk9WSVNPUklPICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKMTA3MDAwMTMwMDAwNkUgICAxMDAwNzA0MTcxNzYxNTUgICAgICAgICAgICAgICAgICAgIDAwMDAyIDMwMzg5NCAgICAgIDIgSmFjb2IgQWZmb25zZWNhICAgICAgICAgICAgICAgICAgICAgQ0RTMDAgICAgICAgICAgICAgICAgICAgIE4wNDA2MjAyMTA0MDYyMDIxMDAwMDAwMDAwMDI2NjIzNDI5QzIxOCAgICBSRVNHQVRFIERFIEZVTkRPUyAgICAgICAgUFJPVklTT1JJTyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCjEwNzAwMDEzMDAwMDdFICAgMTAwMDcwNDE3MTc2MTU1ICAgICAgICAgICAgICAgICAgICAwMDAwMiAzMDM4OTQgICAgICAyIEphY29iIEFmZm9uc2VjYSAgICAgICAgICAgICAgICAgICAgIENEUzAwICAgICAgICAgICAgICAgICAgICBOMDQwNjIwMjEwNDA2MjAyMTAwMDAwMDAwMDAxMzk0OTQyM0MyMTggICAgUkVTR0FURSBERSBGVU5ET1MgICAgICAgIFBST1ZJU09SSU8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIAoxMDcwMDAxMzAwMDA4RSAgIDEwMDA3MDQxNzE3NjE1NSAgICAgICAgICAgICAgICAgICAgMDAwMDIgMzAzODk0ICAgICAgMiBKYWNvYiBBZmZvbnNlY2EgICAgICAgICAgICAgICAgICAgICBDRFMwMCAgICAgICAgICAgICAgICAgICAgTjA3MDYyMDIxMDcwNjIwMjEwMDAwMDAwMDAwMDI0NjU5ODJDMjE4ICAgIFJFU0dBVEUgREUgRlVORE9TICAgICAgICBQUk9WSVNPUklPICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKMTA3MDAwMTMwMDAwOUUgICAxMDAwNzA0MTcxNzYxNTUgICAgICAgICAgICAgICAgICAgIDAwMDAyIDMwMzg5NCAgICAgIDIgSmFjb2IgQWZmb25zZWNhICAgICAgICAgICAgICAgICAgICAgQ0RTMDAgICAgICAgICAgICAgICAgICAgIE4wNzA2MjAyMTA3MDYyMDIxMDAwMDAwMDAwMDAzODY4MTI1QzIxOCAgICBSRVNHQVRFIERFIEZVTkRPUyAgICAgICAgUFJPVklTT1JJTyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCjEwNzAwMDEzMDAwMTBFICAgMTAwMDcwNDE3MTc2MTU1ICAgICAgICAgICAgICAgICAgICAwMDAwMiAzMDM4OTQgICAgICAyIEphY29iIEFmZm9uc2VjYSAgICAgICAgICAgICAgICAgICAgIENEUzAwICAgICAgICAgICAgICAgICAgICBOMDcwNjIwMjEwNzA2MjAyMTAwMDAwMDAwMDAwNjA1NjkxNUMyMTggICAgUkVTR0FURSBERSBGVU5ET1MgICAgICAgIFBST1ZJU09SSU8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIAoxMDcwMDAxMzAwMDExRSAgIDEwMDA3MDQxNzE3NjE1NSAgICAgICAgICAgICAgICAgICAgMDAwMDIgMzAzODk0ICAgICAgMiBKYWNvYiBBZmZvbnNlY2EgICAgICAgICAgICAgICAgICAgICBDRFMwMCAgICAgICAgICAgICAgICAgICAgTjA3MDYyMDIxMDcwNjIwMjEwMDAwMDAwMDAwMDI0NzgxNTZDMjE4ICAgIFJFU0dBVEUgREUgRlVORE9TICAgICAgICBQUk9WSVNPUklPICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKMTA3MDAwMTMwMDAxMkUgICAxMDAwNzA0MTcxNzYxNTUgICAgICAgICAgICAgICAgICAgIDAwMDAyIDMwMzg5NCAgICAgIDIgSmFjb2IgQWZmb25zZWNhICAgICAgICAgICAgICAgICAgICAgQ0RTMDAgICAgICAgICAgICAgICAgICAgIE4wNzA2MjAyMTA3MDYyMDIxLTAwMDAwMDAwMTMxNjkyMDk4RDEyNSAgICBSRVNHQVRFIERFIEZVTkRPUyAgICAgICAgUFJPVklTT1JJTyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCjEwNzk5OTk1ICAgICAgICAgMTAwMDcwNDE3MTc2MTU1ICAgICAgICAgICAgICAgICAgICAwMDAwMiAzMDM4OTQgICAgICAyICAgICAgICAgICAgICAgICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNzA2MjAyMS0wMDAwMDAwMDEzMTY5MjA5OERGMDAwMDE0LTAwMDAwMDAwMTMxNjkyMDk4MDAwMDAwMDAwMTI2MjUxOTY5


### Pending Transactions [/torfunds/v1/pendingtransactions]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### GET [GET]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          [
            {
              "id": 2692,
              "type": "subscription",
              "typeLabel": "Aplicação",
              "idempotencyKey": "3E1A83FA-9441-44D8-AD13-4C007E540C71",
              "transactionValue": 20000.02,
              "transactionDate": "2021-05-28",
              "product": {
                "id": 5,
                "name": "BAHIA AM FIC MULTIMERCADO",
                "riskProfile": "Conservative",
                "riskProfileLabel": "Conservador",
                "classType": "Fixed Income",
                "classTypeLabel": "Renda Fixa"
              }
            },
            {
              "id": 2693,
              "type": "subscription",
              "typeLabel": "Aplicação",
              "idempotencyKey": "0B6887B0-CDA2-4B99-9B4C-9538A92CF98D",
              "transactionValue": 20000.03,
              "transactionDate": "2021-03-10",
              "product": {
                "id": 5,
                "name": "BAHIA AM FI RENDA FIXA REFERENCIADO DI",
                "riskProfile": "Conservative",
                "riskProfileLabel": "Conservador",
                "classType": "Fixed Income",
                "classTypeLabel": "Renda Fixa"
              }
            },
            {
              "id": 2694,
              "type": "subscription",
              "typeLabel": "Aplicação",
              "idempotencyKey": "3E1A83FA-9441-44D8-AD13-4C007E540C71",
              "transactionValue": 20000.04,
              "transactionDate": "2021-03-10",
              "product": {
                "id": 5,
                "name": "BAHIA AM FI RENDA FIXA REFERENCIADO DI",
                "riskProfile": "Conservative",
                "riskProfileLabel": "Conservador",
                "classType": "Fixed Income",
                "classTypeLabel": "Renda Fixa"
              }
            },
            {
              "id": 2695,
              "type": "subscription",
              "typeLabel": "Aplicação",
              "idempotencyKey": "0B6887B0-CDA2-4B99-9B4C-9538A92CF98D",
              "transactionValue": 20000.05,
              "transactionDate": "2021-03-10",
              "product": {
                "id": 5,
                "name": "BAHIA AM FI RENDA FIXA REFERENCIADO DI",
                "riskProfile": "Conservative",
                "riskProfileLabel": "Conservador",
                "classType": "Fixed Income",
                "classTypeLabel": "Renda Fixa"
              }
            },
            {
              "id": 2696,
              "type": "subscription",
              "typeLabel": "Aplicação",
              "idempotencyKey": "0B6887B0-CDA2-4B99-9B4C-9538A92CF98D",
              "transactionValue": 20000.06,
              "transactionDate": "2021-03-11",
              "product": {
                "id": 5,
                "name": "BAHIA AM FI RENDA FIXA REFERENCIADO DI",
                "riskProfile": "Conservative",
                "riskProfileLabel": "Conservador",
                "classType": "Fixed Income",
                "classTypeLabel": "Renda Fixa"
              }
            },
            {
              "id": 2696,
              "type": "subscription",
              "typeLabel": "Aplicação",
              "idempotencyKey": "0B6887B0-CDA2-4B99-9B4C-9538A92CF98D",
              "transactionValue": 20000.12,
              "transactionDate": "2021-03-12",
              "product": {
                "id": 5,
                "name": "BAHIA AM FI RENDA FIXA REFERENCIADO DI",
                "riskProfile": "Conservative",
                "riskProfileLabel": "Conservador",
                "classType": "Fixed Income",
                "classTypeLabel": "Renda Fixa"
              }
            },
            {
              "id": 2697,
              "type": "subscription",
              "typeLabel": "Aplicação",
              "idempotencyKey": "0B6887B0-CDA2-4B99-9B4C-9538A92CF98D",
              "transactionValue": 20000.13,
              "transactionDate": "2021-03-12",
              "product": {
                "id": 5,
                "name": "BAHIA AM FI RENDA FIXA REFERENCIADO DI",
                "riskProfile": "Conservative",
                "riskProfileLabel": "Conservador",
                "classType": "Fixed Income",
                "classTypeLabel": "Renda Fixa"
              }
            }
          ]


### Pending Transactions [/torfixedincome/v1/pendingtransactions]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### GET [GET]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          [
            {
              "id": 2,
              "type": "subscription",
              "typeLabel": "Subscription",
              "idempotencyKey": "06E801C5-39E7-4CA2-B7A9-29E0FF636099",
              "transactionValue": 2.0,
              "transactionDate": "2021-08-20",
              "product": {
                  "id": 2,
                  "name": "LCA 105% DI",
                  "riskProfile": "Aggressive",
                  "riskProfileLabel": "Agressivo",
                  "classType": "FixedIncome",
                  "classTypeLabel": "Renda Fixa"
              }
            },
            {
              "id": 2,
              "type": "subscription",
              "typeLabel": "Redemption",
              "idempotencyKey": "06E801C5-39E7-4CA2-B7A9-29E0FF636099",
              "transactionValue": 200000.02,
              "transactionDate": "2021-08-20",
              "product": {
                  "id": 2,
                  "name": "LCA 105% DI",
                  "riskProfile": "Aggressive",
                  "riskProfileLabel": "Agressivo",
                  "classType": "FixedIncome",
                  "classTypeLabel": "Renda Fixa"
              }
            }
          ]


### New Pending Transactions [/tor/v1/pendingtransactions]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### GET [GET]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          [
            {
              "id": 3122,
              "type": "subscription",
              "typeLabel": "Subscription",
              "idempotencyKey": "06E801C5-39E7-4CA2-B7A9-29E0FF636099",
              "transactionValue": 2.0,
              "transactionDate": "2021-07-02",
              "product": {
                  "id": 2,
                  "name": "LCA 105% DI",
                  "riskProfile": "Aggressive",
                  "riskProfileLabel": "Agressivo",
                  "classType": "FixedIncome",
                  "classTypeLabel": "Renda Fixa"
              }
            }
          ]

### Favored Accounts [/recipientaccountmanager/v1/RecipientAccount/cashaccount/6455/recipients]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### GET [GET]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          [
            {
              "name": "Jusefina Matilde",
              "document": "11111111111",
              "accounts": [
                {
                  "cashAccountId": 3,
                  "number": 24321,
                  "verifyingDigit": "5",
                  "branch": 21324,
                  "type": "CC",
                  "domain": 0,
                  "bankIspb": "0",
                  "bankName": "BANCO DO BRASIL S.A.",
                  "bankCode": "1",
                  "maxAmount": 10000.00
                },
                {
                  "cashAccountId": 3,
                  "number": 54321,
                  "verifyingDigit": "5",
                  "branch": 21324,
                  "type": "CC",
                  "domain": 0,
                  "bankIspb": "0",
                  "bankName": "BRADESCO S.A",
                  "bankCode": "237",
                  "maxAmount": 10000.00
                },
                {
                  "cashAccountId": 3,
                  "number": 64321,
                  "verifyingDigit": "5",
                  "branch": 21324,
                  "type": "CC",
                  "domain": 0,
                  "bankIspb": "0",
                  "bankName": "CAIXA ECONÔMICA FEDERAL (CEF)",
                  "bankCode": "104",
                  "maxAmount": 10000.00
                },
                {
                  "cashAccountId": 3,
                  "number": 94321,
                  "verifyingDigit": "5",
                  "branch": 21324,
                  "type": "CC",
                  "domain": 0,
                  "bankIspb": "0",
                  "bankName": "Banco sem icon",
                  "bankCode": "2",
                  "maxAmount": 10000.00
                }
              ]
            },
            {
              "name": "Maria Duartina",
              "document": "11111111112",
              "accounts": [
                {
                  "cashAccountId": 3,
                  "number": 74321,
                  "verifyingDigit": "5",
                  "branch": 21324,
                  "type": "CC",
                  "domain": 0,
                  "bankIspb": "0",
                  "bankName": "BANCO DO BRASIL S.A.",
                  "bankCode": "1",
                  "maxAmount": 10000.00
                }
              ]
            }
          ]


### Open Banking ASPSP - Consents [/open-banking/journey-aspsp/v1/shares/consents/urn:bocombbm:bb7b05b5-95ab-4ea7-aaff-52d6c2f549a4]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### GET [GET]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          {
             "businessEntity":{
                "document":{
                   "identification":"35764250000182",
                   "rel":"CNPJ"
                }
             },
             "consentId":"urn:bocombbm:bb7b05b5-95ab-4ea7-aaff-52d6c2f549a4",
             "shareId":"6166d1b2c1c0a24b8b81dd92",
             "organisationId":"4a7250ec-eac5-5d8f-b7eb-dc0e8e880203",
             "organisationName":"BCO BOCOM BBM S.A.",
             "createDateTime":"2021-10-13T12:31:46.023Z",
             "lastStatusUpdate":"2021-10-13T12:58:42.264Z",
             "expirationDateTime":"2022-10-13T12:31:43Z",
             "loggedUser":{
                "document":{
                   "identification":"93109924099",
                   "rel":"CPF"
                }
             },
             "resourceGroups":[
                {
                   "resourceGroupId":"616087ea43ed64462901ca7c",
                   "dataPermissions":[
                      {
                         "detail":"Dados da conta",
                         "displayName":"Contas",
                         "permissionCode":"ACCOUNTS_READ"
                      },
                      {
                         "detail":"Valor do saldo disponível",
                         "displayName":"Saldos",
                         "permissionCode":"ACCOUNTS_BALANCES_READ"
                      },
                      {
                         "detail":"Identificador, valor, data de lançamento e tipo da transação (TED, DOC, Pix, pagamento de boletos etc.), tipo de operação (crédito ou débito), identificacão do pagador ou recebedor e origem ou destino da transação",
                         "displayName":"Contas",
                         "permissionCode":"ACCOUNTS_TRANSACTIONS_READ"
                      },
                      {
                         "detail":"Valor do limite de cheque especial utilizado ou do adiantamento a depositante",
                         "displayName":"Limites",
                         "permissionCode":"ACCOUNTS_OVERDRAFT_LIMITS_READ"
                      }
                   ],
                   "displayName":"Contas",
                   "type":"ACCOUNT",
                   "resources":[
                      {
                         "resourceId":"73953a54-73e2-48c3-8e3c-618957cb153e",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"308833-8",
                         "additionalInfos":[
                            {
                               "key":"internalId",
                               "value":"63169"
                            },
                            {
                               "key":"branch",
                               "value":"2"
                            },
                            {
                               "key":"accountNumber",
                               "value":"308833"
                            },
                            {
                               "key":"verifyingDigit",
                               "value":"8"
                            }
                         ]
                      },
                      {
                         "resourceId":"66953a54-73e2-48c3-8e3c-618957cb1578",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"700833-2",
                         "additionalInfos":[
                            {
                               "key":"internalId",
                               "value":"70069"
                            },
                            {
                               "key":"branch",
                               "value":"2"
                            },
                            {
                               "key":"accountNumber",
                               "value":"700833"
                            },
                            {
                               "key":"verifyingDigit",
                               "value":"2"
                            }
                         ]
                      }
                   ]
                },
                {
                   "resourceGroupId":"616087f243ed64462901ca7d",
                   "dataPermissions":[
                      {
                         "detail":"Documentos de identificação - CPF, RG, etc",
                         "displayName":"Dados Cadastrais",
                         "permissionCode":"CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ"
                      },
                      {
                         "detail":"Renda, etc",
                         "displayName":"Informações complementares",
                         "permissionCode":"CUSTOMERS_PERSONAL_ADITTIONALINFO_READ"
                      },
                      {
                         "detail":"Documentos de identificação - CNPJ, etc",
                         "displayName":"Dados Cadastrais",
                         "permissionCode":"CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ"
                      },
                      {
                         "detail":"Faturamento, etc",
                         "displayName":"Informações complementares",
                         "permissionCode":"CUSTOMERS_BUSINESS_ADITTIONALINFO_READ"
                      }
                   ],
                   "displayName":"Dados Cadastrais",
                   "type":"CUSTOMER",
                   "additionalInfos":[

                   ],
                   "items":[

                   ]
                },
                {
                   "resourceGroupId":"616087f717e70675704ce5ff",
                   "dataPermissions":[
                      {
                         "detail":"Financiamentos de faturas",
                         "displayName":"Factura",
                         "permissionCode":"INVOICE_FINANCINGS_READ"
                      },
                      {
                         "detail":"Débito em conta corrente, boleto bancário, averbação em folha ou Pix",
                         "displayName":"Factura",
                         "permissionCode":"INVOICE_FINANCINGS_PAYMENTS_READ"
                      },
                      {
                         "detail":"Crédito rotativo, parcelamento de fatura, empréstimo, outros",
                         "displayName":"Factura",
                         "permissionCode":"INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ"
                      },
                      {
                         "detail":"Valores cobrados de juros remuneratórios por atraso no pagamento da fatura, multa por atraso no pagamento da fatura, juros de mora por atraso no pagamento da fatura, IOF, crédito rotativo, parcelamento de fatura, empréstimo e outros.",
                         "displayName":"Factura",
                         "permissionCode":"INVOICE_FINANCINGS_WARRANTIES_READ"
                      }
                   ],
                   "displayName":"Operações de Crédito - Direitos Creditórios Descontados",
                   "type":"INVOICE_FINANCING",
                   "additionalInfos":[

                   ],
                   "resources":[
                      {
                         "resourceId":"9ca68b07-f221-4b01-a429-82cbf70ca13a",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"Desconto de duplicatas",
                         "additionalInfos":[
                            {
                               "key":"codes",
                               "value":"0301"
                            }
                         ]
                      },
                      {
                         "resourceId":"e8c6ecb7-05cc-4934-ae73-545d2ab5a143",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"Desconto de cheques",
                         "additionalInfos":[
                            {
                               "key":"codes",
                               "value":"0302"
                            }
                         ]
                      },
                      {
                         "resourceId":"1159a717-a25c-4681-8218-07bcb12c059c",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"Antecipação de recebíveis de cartão de crédito",
                         "additionalInfos":[
                            {
                               "key":"codes",
                               "value":"0303"
                            }
                         ]
                      },
                      {
                         "resourceId":"20aba1c2-0b37-4b53-bdc2-de80c2e1bf9b",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"Desconto de nota promissória",
                         "additionalInfos":[
                            {
                               "key":"codes",
                               "value":"0398"
                            }
                         ]
                      },
                      {
                         "resourceId":"5804e23d-205e-4400-96d0-fc03c0cf5148",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"Desconto de nota promissória",
                         "additionalInfos":[
                            {
                               "key":"codes",
                               "value":"0399"
                            }
                         ]
                      }
                   ],
                   "items":[

                   ]
                },
                {
                   "resourceGroupId":"616087fd43ed64462901ca7e",
                   "dataPermissions":[
                      {
                         "detail":"Financiamentos",
                         "displayName":"Financings Read",
                         "permissionCode":"FINANCINGS_READ"
                      },
                      {
                         "detail":"Pagamentos dos financiamentos",
                         "displayName":"Contratos de crédito",
                         "permissionCode":"FINANCINGS_PAYMENTS_READ"
                      },
                      {
                         "detail":"Agendamento de Parcelas dos financiamentos",
                         "displayName":"Contratos de crédito",
                         "permissionCode":"FINANCINGS_SCHEDULED_INSTALMENTS_READ"
                      },
                      {
                         "detail":"Garantias dos financiamentos",
                         "displayName":"Contratos de crédito",
                         "permissionCode":"FINANCINGS_WARRANTIES_READ"
                      }
                   ],
                   "displayName":"Operações de Crédito - Financiamentos",
                   "type":"FINANCING",
                   "additionalInfos":[

                   ],
                   "resources":[
                      {
                         "resourceId":"785eb528-4a64-4266-90dd-e5d76167798f",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"Aquisições de bens móveis ",
                         "additionalInfos":[
                            {
                               "key":"codes",
                               "value":"0401,0402"
                            }
                         ]
                      },
                      {
                         "resourceId":"80f63b4c-6d6e-4e44-bb6b-abdb803ccac2",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"Microcrédito produtivo orientado",
                         "additionalInfos":[
                            {
                               "key":"codes",
                               "value":"0403"
                            }
                         ]
                      },
                      {
                         "resourceId":"2ea32279-b928-4111-b15e-0984ff256728",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"Rurais",
                         "additionalInfos":[
                            {
                               "key":"codes",
                               "value":"0801,0802,0803,0804"
                            }
                         ]
                      },
                      {
                         "resourceId":"e7ebcdab-6921-4541-9057-a0d0c9bb2490",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"Sistema Financeiro da Habilitação (SFH)",
                         "additionalInfos":[
                            {
                               "key":"codes",
                               "value":"0901"
                            }
                         ]
                      },
                      {
                         "resourceId":"551def68-1e0b-416a-af67-ad35ce446d45",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"Sistema Financeiro Imobiliário (SFI)",
                         "additionalInfos":[
                            {
                               "key":"codes",
                               "value":"0902"
                            }
                         ]
                      }
                   ],
                   "items":[

                   ]
                },
                {
                   "resourceGroupId":"6160880317e70675704ce600",
                   "dataPermissions":[
                      {
                         "detail":"Denominação, modalidade, CNPJ da fonte pagadora, número do contrato, modalidades contratadas, documento da instiuição fornecedora do crédito, número do contrato na instituição fornecedora do crédito e identificador padronizado do contrato (Ipoc)",
                         "displayName":"Contratos de crédito",
                         "permissionCode":"LOANS_READ"
                      },
                      {
                         "detail":"Valores das prestações pagas e a pagar",
                         "displayName":"Contratos de crédito",
                         "permissionCode":"LOANS_PAYMENTS_READ"
                      },
                      {
                         "detail":"Indexador, taxa pré e pós, periodicidade, tipo de juros, base de cálculo, informações adicionais, tipo de taxa",
                         "displayName":"Contratos de crédito",
                         "permissionCode":"LOANS_SCHEDULED_INSTALMENTS_READ"
                      },
                      {
                         "detail":"Tipo, subtipo e valor original da garantia",
                         "displayName":"Contratos de crédito",
                         "permissionCode":"LOANS_WARRANTIES_READ"
                      }
                   ],
                   "displayName":"Operações de Crédito - Empréstimos",
                   "type":"LOAN",
                   "additionalInfos":[

                   ],
                   "resources":[
                      {
                         "resourceId":"62432e4b-3959-4946-8019-2bb2fbe4ea2f",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"Crédito pessoal - consignado",
                         "additionalInfos":[
                            {
                               "key":"codes",
                               "value":"0202"
                            }
                         ]
                      },
                      {
                         "resourceId":"bbf47fff-791c-4b2d-9029-715f69814557",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"Crédito pessoal - sem consignação",
                         "additionalInfos":[
                            {
                               "key":"codes",
                               "value":"0203"
                            }
                         ]
                      },
                      {
                         "resourceId":"82df841b-c187-47c6-acc7-5a262e70dde8",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"Home equity",
                         "additionalInfos":[
                            {
                               "key":"codes",
                               "value":"0211"
                            }
                         ]
                      },
                      {
                         "resourceId":"26879bb3-e72a-4488-8185-bb8fd31ecb2c",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"Microcrédito",
                         "additionalInfos":[
                            {
                               "key":"codes",
                               "value":"0212"
                            }
                         ]
                      },
                      {
                         "resourceId":"6e147ebf-1c5f-4b40-a6a4-793c3676000d",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"Cheque especial",
                         "additionalInfos":[
                            {
                               "key":"codes",
                               "value":"0213"
                            }
                         ]
                      },
                      {
                         "resourceId":"e3adda38-b2f9-4ffc-a689-60ef05433a02",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"Conta garantida",
                         "additionalInfos":[
                            {
                               "key":"codes",
                               "value":"0214"
                            }
                         ]
                      },
                      {
                         "resourceId":"e21b78c7-4c77-484c-bcce-e15e19e64aba",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"Capital de giro",
                         "additionalInfos":[
                            {
                               "key":"codes",
                               "value":"0215,0216,0217"
                            }
                         ]
                      }
                   ],
                   "items":[

                   ]
                },
                {
                   "resourceGroupId":"6160880717e70675704ce601",
                   "dataPermissions":[
                      {
                         "detail":"Cartões de crédito da conta",
                         "displayName":"Limite",
                         "permissionCode":"CREDIT_CARDS_ACCOUNTS_READ"
                      },
                      {
                         "detail":"Valor total, data de vencimento, data do pagamento, valor do pagamento mínimo, parcelamento",
                         "displayName":"Factura",
                         "permissionCode":"CREDIT_CARDS_ACCOUNTS_BILLS_READ"
                      },
                      {
                         "detail":"Pagamento, tarifa, operações de crédito contratadas no cartão, estorno, cashback, outros",
                         "displayName":"Factura",
                         "permissionCode":"CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ"
                      },
                      {
                         "detail":"Indicador dos limites de titular, adicionais, virtuais e demais cartões, se houver",
                         "displayName":"Limite",
                         "permissionCode":"CREDIT_CARDS_ACCOUNTS_LIMITS_READ"
                      },
                      {
                         "detail":"Identificação da operação, tipo e status de transação, tipo da tarifa e de pagamento, identificador da parcela, tipo de operação de crédito contratada no cartão, moeda, taxa de conversão e identificador da transação na instituição financeira",
                         "displayName":"Transações",
                         "permissionCode":"CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ"
                      }
                   ],
                   "displayName":"Cartão de Crédito",
                   "type":"CREDIT_CARD_ACCOUNT",
                   "additionalInfos":[

                   ],
                   "items":[

                   ]
                },
                {
                   "resourceGroupId":"6160880e43ed64462901ca80",
                   "dataPermissions":[
                      {
                         "detail":"Adiantamento a depositantes",
                         "displayName":"Adiantamentos",
                         "permissionCode":"UNARRANGED_ACCOUNTS_OVERDRAFT_READ"
                      },
                      {
                         "detail":"Pagamentos dos adiantamentos a depositantes",
                         "displayName":"Adiantamentos",
                         "permissionCode":"UNARRANGED_ACCOUNTS_OVERDRAFT_PAYMENTS_READ"
                      },
                      {
                         "detail":"Agendamento de Parcelas dos adiantamentos a depositantes",
                         "displayName":"Adiantamentos",
                         "permissionCode":"UNARRANGED_ACCOUNTS_OVERDRAFT_SCHEDULED_INSTALMENTS_READ"
                      },
                      {
                         "detail":"Garantias dos adiantamentos a depositantes",
                         "displayName":"Adiantamentos",
                         "permissionCode":"UNARRANGED_ACCOUNTS_OVERDRAFT_WARRANTIES_READ"
                      }
                   ],
                   "displayName":"Operações de Crédito - Adiantamento a Depositantes",
                   "type":"UNARRANGED_ACCOUNT_OVERDRAFT",
                   "additionalInfos":[

                   ],
                   "resources":[
                      {
                         "resourceId":"4bdea684-a34d-4972-9d45-07953435d887",
                         "status":"PENDING_AUTHORISATION",
                         "displayName":"Adiantamentos a depositantes",
                         "additionalInfos":[
                            {
                               "key":"codes",
                               "value":"0101"
                            }
                         ]
                      }
                   ],
                   "items":[

                   ]
                },
                {
                   "resourceGroupId":"6160881143ed64462901ca81",
                   "dataPermissions":[
                      {
                         "detail":"Lista de recursos compartilhados",
                         "displayName":"Recursos",
                         "permissionCode":"RESOURCES_READ"
                      }
                   ],
                   "displayName":"Lista de recursos compartilhados",
                   "type":"RESOURCE",
                   "additionalInfos":[

                   ],
                   "items":[

                   ]
                }
             ],
             "approvers":[
                {
                   "status":"AWAITING_AUTHORISATION",
                   "approverId":"93109924099"
                },
                {
                   "status":"AWAITING_AUTHORISATION",
                   "approverId":"93109924099"
                }
             ],
             "shareType":"TRANSMITTING",
             "status":"ACTIVE",
             "additionalInfos":[
                {
                   "key":"JWE",
                   "value":"eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkEyNTZDQkMtSFM1MTIifQ.Z4O_zPEh5ciuA-toNr8_pISebe38XM6LoW-2RfSMahaKFVDNeeO8dv84GXJ1Qc0kotKnoxzec_Mmz9uBfTrOUvmfAx-2nWMPsIU3nIqyMWbkLQDrx9nKpnFk-E45RcmTb1ppmnpTrMSsbk27BedxygEd0YpiVGkh1uvCbXOOQ6jr2TnBWCUA3Y8RoVD5gq8CSRcidqQEVe3rOYwAy4bgOzImIJoQs2xYZRAxRj9i4VuGFwKSTcA2Ha7zhtStTW25YEyGYa5hyJOnza8Xns5TjA-05QJd23QLHv1_io5te5PWqa4KbbbgJ73uCa9XvHLbuF7bwi7rjo3i0JVPQ4n3Vw.ulCVwbDBXSQHNkCKKVgbKA.Nq1Ol0ImAGb94qSHLxz5Ro6en7ZuXQT1xZTW6HaA3ICX03-dqNTf6nPslQCjSnoy9GI5-g4n1btaivQc0RC5v-tZq_sQoFSavzQZACQs3UgNA0plILYfjXqF5BCyn1md25l_PuFyU6oMGwGOIeMG2k3gRtmCGey4eY3hItre4-4cLMmF--RyMr2RYNtJVtMaiWsaDrDH1zRXugSYv2nkcHvF2l-DfeFxylC-_gaCC0EAJEAUGqARbsUHto8wPXC_2wSf_Z8KXmcvWIvyj_WAdEH4FCCOdxmj8xjGi6MCHhucI6Mq8ek_bUaBquaizwbDAPMGs2IaLcBBi4IshOTaCE40dlNF1P5ktfUNQP04aCrr1O0IBWIOHyPMi1cdb7h8jgrv1gTE0Nu3OQnq3qfmozB66Qi3VjZr64ODwI5yVxqUccaqAfoNw2H69tzrnP87LQ83xQJyC7hm1XISypPD62NyGaB_q-GGrLzm33uNPS5Q6Shd6WkYcLmRbf0dOIRynX8oLzbCplrHGCnbkQIMesGsGhvk3ykn-MRbH9bax6WPYXMxJqF-j4ghTCiC4pnqiEL9TxsOJVW9izKAemHwPjNSG37nnfbKCsUy4VC3BVGie78F3Wzp-CovYqeQanlF2-1fx5O2yZ1iyQvUzwA50ilHzxVFpqNalAUIkTsM930m4912NZRlJ2WvD_h330j7H4tmIc9RYpt3VUq-IPz9k0ZOU0rvLxVcbXUkUnoGhBjJKDhTy5-AWm2lJ7wrwnqWPHXZow1k8gasqOZOQkUI8MwZJgwZCaWLgm8DY7J52Z1vbKfeod7ypqeXv7jsHGiO5ofhrsjMVV2a7if1oqcnN-wD9kHex4u6jPAklQybYUJfAhUNtJ3pCmVRzMVYcxuH4ukh04aLqITkNOo0hsCtkYHWCBuvS682hwap-WJAzxiFrNQbaZ9RbLTmazd82kswQZRr5H-q9or7dhPY4g_LC_vgOYZopPoP9scubuvj12hxcaMa-O2J4BUZ_pVrIyy5iD5Dqe5n-_GLkH7BXck2SjyGkhZzlzzMZ5f64nPYsImj7OWw7AKwkWxzkNecKuHskNdokJnKnBEj9XszUaPNUr7L1VSnLjeFVMXrT0pxxHYeppD-Zm8W36wTXnqjIx0dyVvorClKsOJD0ONdKCJH35zJkRMMOUn4HYODhaur-yGB5dL0f8wrfXi5vIc6nfOfYCVvy6oF69yNnMaKU086rkfKSzQN1TxkkdMu3L0FfSM27FPSVyJy1EuhhyCvIbGtbvBqqSCphr2u6pZG3UDrHKuVTZN6FOQN2YNC9CbK_lGFDrKF6G7I5paTXEVkOECPSMWnaXUETN6S1Zb8p4X9pDepLjPaIPxtqYUQk3sqypIMzYkh15QcQbSxmsvJJ_d4uXz3LdvplHh0DTNSR_WrWcgtOQu_IX8JAUtJge1qsvCqrnirvq8w1zlFjYpQJZKO-RWXgetExv92OoEecuClhC2ziudI6P8fZ7krDodinnLzvxbk1YFUOjJ-nZfKpmRTKENd1oXkYsAJKpzvuWpPRoOlQizCBQiWAwhsNb3ygS18KoMQswlmGhyf2N4xlxq-O5CvGaOBpp5VpWJ4ci2LxK-fRSqXnNPsW4AjTCML26Vxra4ET002rLN_s6I4-6EkYX2ouXJcWzKYeyce8fBkNCmpiaIxR7PbZbwKKfKeIWcOYcWzF4w7_hq0tiI13TUY_c8mbaedUkY1uz0xsI3QV1xtCcTVANrYYUfzfDmOKAyjcOB94gg_IKEH0zuk7TTWC2FFyh6SRtlrBjM6LpgDyO75lCgzb3fdGIbrmjMb2L3U3T1Kz4NYkZ1FE4xgSsMGPR3yfmT-qkkGirsVvxW50xd_ag4TollUjGWd48YS-o1jMeKbJanqgTH-4VXpEvBP8hAGeQ-unZYB5DvccHkRKamBGsVM2kFVUBZiZ6nprHl9ZDf97GMl_qGkCv9vO3scFk6vJg0Tn8AdMELxExH32RJWlwCF4Y5wCFiv3f95zQhsbSxonZ0NjHYKHU_eVesGagvit5TrXgU153_tYwWTIm9O9H8RMvdniMWUgaWG1qfxxaj28Q-AuK3q09mYDitCHPi5rak9h1TPtFjRNrBdRNkJx_nsSJHuGMrD5uAZIPjuS2Wgfz7IL4OK9s215uMYDFFM0hWgV3j2PWvYyFgiaTDE0JGu7j-kPRAkvsPTQldzG8zji-3P1KP9wQgHsM58no7Mtj69vd3Iudk01rIl2PSNEBZyFsrB_QKmTfZNL7_EOuUOSNdqWB_5yL5OZLmynBr9RkkRNSNKOH8HvvQz2HReyhJ1U-P4FoTaCWOd_N0TKu8G79vluqVlI5H1tZ9HQHFCcdgLiE93GqQj5RkEanbk8AF66ZJSiTn7yJECJ-sUM_M77OE8ezv1ltVsRQGWs6fYeKFDqDMo-WXZAdodQaC7GVK-xwmYdHimG9z5xxQGTagckgNO3b44fUHLTop2JDjznObGQAWSPfn-793FHVH_6Y0Kny1nc_fQtTpseEVCn45kuGgoQzi9xQ4TnoCuf6XQ9pN1LfP2IhnKjIfPMi61Wmdfap8EcUBkaiKsrmwvH0tvczFNZODYIFN8UCeHD1dfombR3BV_oKk1CTmc9aD7t8CXQPaCV8XJkHVfcLhoSLINVoZj0x_6Bn3tKQuy_LJUWQYkcD2H0lZrOc8OjX_AlnF8COGG8EcGRkaxvm5Bk-GjlS2t-qMarc29TMSCeuh3lgY9Hwb6IOKaU0tmp46-0uxTCH0z21OcwHZgHQjXZi9IJYFVLfCKbscJWkUX74MCvbnrSYYhX7tr7PvkuWeBd_TZ0QOW-hwtmZ2TbK-pzeLdTVvBhCF6rwnKrAL8MBSmXvvRSMnPFo06ukvaZxg1ASfnzQcPKdAVPfy2idjwD14ukYZgq2zqRqYF_10eCo7_Cwac2IKwYhRn8HDhq7a3hq4mYb8qmNdrf9F-ZM0rVl7RPTk3SLoMW-zTwQ5E.w14711EVJ2QQnZ2koPoRWs_0eF_X64Lniw4xYXRcPUU"
                }
             ],
             "deadLines":[
                {
                   "total":364,
                   "type":"DAYS",
                   "expirationDateTime":"2022-10-13T12:31:43Z"
                }
             ]
          }


### Open Banking ASPSP - Shares [/open-banking/journey-aspsp/v1/shares?organisationId={organisationId}]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS, PATCH

### GET [GET]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS, PATCH

  + Body

          [
              {
                  "businessEntity": {
                      "document": {
                          "identification": "35764250000182",
                          "rel": "CNPJ"
                      }
                  },
                  "consentId": "urn:bocombbm:bb7b05b5-95ab-4ea7-aaff-52d6c2f549a4",
                  "shareId": "6160882b53c5460b1fcb404f",
                  "organisationId": "4a7250ec-eac5-5d8f-b7eb-dc0e8e880203",
                  "organisationName": "BCO BOCOM BBM S.A.",
                  "createDateTime": "2021-10-08T18:04:27.313Z",
                  "lastStatusUpdate": "2021-10-08T18:06:21.124Z",
                  "expirationDateTime": "2022-10-08T18:04:23Z",
                  "loggedUser": {
                      "document": {
                          "identification": "93109924099",
                          "rel": "CPF"
                      }
                  },
                  "resourceGroups": [
                      {
                          "resourceGroupId": "616087ea43ed64462901ca7c",
                          "dataPermissions": [
                              {
                                  "detail": "Dados da conta",
                                  "displayName": "Contas",
                                  "permissionCode": "ACCOUNTS_READ"
                              },
                              {
                                  "detail": "Valor do saldo disponível",
                                  "displayName": "Saldos",
                                  "permissionCode": "ACCOUNTS_BALANCES_READ"
                              },
                              {
                                  "detail": "Identificador, valor, data de lançamento e tipo da transação (TED, DOC, Pix, pagamento de boletos etc.), tipo de operação (crédito ou débito), identificacão do pagador ou recebedor e origem ou destino da transação",
                                  "displayName": "Contas",
                                  "permissionCode": "ACCOUNTS_TRANSACTIONS_READ"
                              },
                              {
                                  "detail": "Valor do limite de cheque especial utilizado ou do adiantamento a depositante",
                                  "displayName": "Limites",
                                  "permissionCode": "ACCOUNTS_OVERDRAFT_LIMITS_READ"
                              }
                          ],
                          "displayName": "Contas",
                          "type": "ACCOUNT",
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "displayName": "Conta",
                                  "detail": "Conta",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ],
                                  "hidden": false
                              }
                          ]
                      },
                      {
                          "resourceGroupId": "616087f243ed64462901ca7d",
                          "dataPermissions": [
                              {
                                  "detail": "Documentos de identificação - CPF, RG, etc",
                                  "displayName": "Dados Cadastrais",
                                  "permissionCode": "CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ"
                              },
                              {
                                  "detail": "Renda, etc",
                                  "displayName": "Informações complementares",
                                  "permissionCode": "CUSTOMERS_PERSONAL_ADITTIONALINFO_READ"
                              },
                              {
                                  "detail": "Documentos de identificação - CNPJ, etc",
                                  "displayName": "Dados Cadastrais",
                                  "permissionCode": "CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ"
                              },
                              {
                                  "detail": "Faturamento, etc",
                                  "displayName": "Informações complementares",
                                  "permissionCode": "CUSTOMERS_BUSINESS_ADITTIONALINFO_READ"
                              }
                          ],
                          "displayName": "Dados Cadastrais",
                          "type": "CUSTOMER",
                          "additionalInfos": [],
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ]
                              },
                              {
                                  "resourceId": "7341f947-8c3d-4ced-a7e0-e8f20fd877f1",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "405060"
                                      }
                                  ]
                              }
                          ],
                          "items": []
                      },
                      {
                          "resourceGroupId": "616087f717e70675704ce5ff",
                          "dataPermissions": [
                              {
                                  "detail": "Financiamentos de faturas",
                                  "displayName": "Factura",
                                  "permissionCode": "INVOICE_FINANCINGS_READ"
                              },
                              {
                                  "detail": "Débito em conta corrente, boleto bancário, averbação em folha ou Pix",
                                  "displayName": "Factura",
                                  "permissionCode": "INVOICE_FINANCINGS_PAYMENTS_READ"
                              },
                              {
                                  "detail": "Crédito rotativo, parcelamento de fatura, empréstimo, outros",
                                  "displayName": "Factura",
                                  "permissionCode": "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ"
                              },
                              {
                                  "detail": "Valores cobrados de juros remuneratórios por atraso no pagamento da fatura, multa por atraso no pagamento da fatura, juros de mora por atraso no pagamento da fatura, IOF, crédito rotativo, parcelamento de fatura, empréstimo e outros.",
                                  "displayName": "Factura",
                                  "permissionCode": "INVOICE_FINANCINGS_WARRANTIES_READ"
                              }
                          ],
                          "displayName": "Operações de Crédito - Direitos Creditórios Descontados",
                          "type": "INVOICE_FINANCING",
                          "additionalInfos": [],
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ]
                              },
                              {
                                  "resourceId": "7341f947-8c3d-4ced-a7e0-e8f20fd877f1",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "405060"
                                      }
                                  ]
                              }
                          ],
                          "items": []
                      },
                      {
                          "resourceGroupId": "616087fd43ed64462901ca7e",
                          "dataPermissions": [
                              {
                                  "detail": "Financiamentos",
                                  "displayName": "Financings Read",
                                  "permissionCode": "FINANCINGS_READ"
                              },
                              {
                                  "detail": "Pagamentos dos financiamentos",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "FINANCINGS_PAYMENTS_READ"
                              },
                              {
                                  "detail": "Agendamento de Parcelas dos financiamentos",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "FINANCINGS_SCHEDULED_INSTALMENTS_READ"
                              },
                              {
                                  "detail": "Garantias dos financiamentos",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "FINANCINGS_WARRANTIES_READ"
                              }
                          ],
                          "displayName": "Operações de Crédito - Financiamentos",
                          "type": "FINANCING",
                          "additionalInfos": [],
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ]
                              },
                              {
                                  "resourceId": "7341f947-8c3d-4ced-a7e0-e8f20fd877f1",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "405060"
                                      }
                                  ]
                              }
                          ],
                          "items": []
                      },
                      {
                          "resourceGroupId": "6160880317e70675704ce600",
                          "dataPermissions": [
                              {
                                  "detail": "Denominação, modalidade, CNPJ da fonte pagadora, número do contrato, modalidades contratadas, documento da instiuição fornecedora do crédito, número do contrato na instituição fornecedora do crédito e identificador padronizado do contrato (Ipoc)",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "LOANS_READ"
                              },
                              {
                                  "detail": "Valores das prestações pagas e a pagar",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "LOANS_PAYMENTS_READ"
                              },
                              {
                                  "detail": "Indexador, taxa pré e pós, periodicidade, tipo de juros, base de cálculo, informações adicionais, tipo de taxa",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "LOANS_SCHEDULED_INSTALMENTS_READ"
                              },
                              {
                                  "detail": "Tipo, subtipo e valor original da garantia",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "LOANS_WARRANTIES_READ"
                              }
                          ],
                          "displayName": "Operações de Crédito - Empréstimos",
                          "type": "LOAN",
                          "additionalInfos": [],
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ]
                              },
                              {
                                  "resourceId": "7341f947-8c3d-4ced-a7e0-e8f20fd877f1",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "405060"
                                      }
                                  ]
                              }
                          ],
                          "items": []
                      },
                      {
                          "resourceGroupId": "6160880717e70675704ce601",
                          "dataPermissions": [
                              {
                                  "detail": "Cartões de crédito da conta",
                                  "displayName": "Limite",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_READ"
                              },
                              {
                                  "detail": "Valor total, data de vencimento, data do pagamento, valor do pagamento mínimo, parcelamento",
                                  "displayName": "Factura",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_BILLS_READ"
                              },
                              {
                                  "detail": "Pagamento, tarifa, operações de crédito contratadas no cartão, estorno, cashback, outros",
                                  "displayName": "Factura",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ"
                              },
                              {
                                  "detail": "Indicador dos limites de titular, adicionais, virtuais e demais cartões, se houver",
                                  "displayName": "Limite",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_LIMITS_READ"
                              },
                              {
                                  "detail": "Identificação da operação, tipo e status de transação, tipo da tarifa e de pagamento, identificador da parcela, tipo de operação de crédito contratada no cartão, moeda, taxa de conversão e identificador da transação na instituição financeira",
                                  "displayName": "Transações",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ"
                              }
                          ],
                          "displayName": "Cartão de Crédito",
                          "type": "CREDIT_CARD_ACCOUNT",
                          "additionalInfos": [],
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ]
                              },
                              {
                                  "resourceId": "7341f947-8c3d-4ced-a7e0-e8f20fd877f1",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "405060"
                                      }
                                  ]
                              }
                          ],
                          "items": []
                      },
                      {
                          "resourceGroupId": "6160880e43ed64462901ca80",
                          "dataPermissions": [
                              {
                                  "detail": "Adiantamento a depositantes",
                                  "displayName": "Adiantamentos",
                                  "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_READ"
                              },
                              {
                                  "detail": "Pagamentos dos adiantamentos a depositantes",
                                  "displayName": "Adiantamentos",
                                  "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_PAYMENTS_READ"
                              },
                              {
                                  "detail": "Agendamento de Parcelas dos adiantamentos a depositantes",
                                  "displayName": "Adiantamentos",
                                  "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_SCHEDULED_INSTALMENTS_READ"
                              },
                              {
                                  "detail": "Garantias dos adiantamentos a depositantes",
                                  "displayName": "Adiantamentos",
                                  "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_WARRANTIES_READ"
                              }
                          ],
                          "displayName": "Operações de Crédito - Adiantamento a Depositantes",
                          "type": "UNARRANGED_ACCOUNT_OVERDRAFT",
                          "additionalInfos": [],
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ]
                              },
                              {
                                  "resourceId": "7341f947-8c3d-4ced-a7e0-e8f20fd877f1",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "405060"
                                      }
                                  ]
                              }
                          ],
                          "items": []
                      },
                      {
                          "resourceGroupId": "6160881143ed64462901ca81",
                          "dataPermissions": [
                              {
                                  "detail": "Lista de recursos compartilhados",
                                  "displayName": "Recursos",
                                  "permissionCode": "RESOURCES_READ"
                              }
                          ],
                          "displayName": "Lista de recursos compartilhados",
                          "type": "RESOURCE",
                          "additionalInfos": [],
                          "items": []
                      }
                  ],
                  "approvers": [
                      {
                          "status": "AWAITING_AUTHORISATION",
                          "approverId": "93109924099"
                      }
                  ],
                  "shareType": "TRANSMITTING",
                  "status": "ACTIVE",
                  "additionalInfos": [
                      {
                          "key": "INTERNAL_ID",
                          "value": "XPTO001"
                      }
                  ],
                  "deadLines": [
                      {
                          "total": 364,
                          "type": "DAYS",
                          "expirationDateTime": "2022-10-08T18:04:23Z"
                      }
                  ]
              },
              {
                  "businessEntity": {
                      "document": {
                          "identification": "35764250000182",
                          "rel": "CNPJ"
                      }
                  },
                  "consentId": "urn:bocombbm:bb7b05b5-95ab-4ea7-aaff-52d6c2f549a4",
                  "shareId": "616089cd7a19e40fe9aab284",
                  "organisationId": "4a7250ec-eac5-5d8f-b7eb-dc0e8e880203",
                  "organisationName": "BCO BOCOM BBM S.A.",
                  "createDateTime": "2021-10-08T18:11:25.755Z",
                  "lastStatusUpdate": "2021-10-08T18:11:49.92Z",
                  "expirationDateTime": "2022-10-08T18:11:22Z",
                  "loggedUser": {
                      "document": {
                          "identification": "93109924099",
                          "rel": "CPF"
                      }
                  },
                  "resourceGroups": [
                      {
                          "resourceGroupId": "616087ea43ed64462901ca7c",
                          "dataPermissions": [
                              {
                                  "detail": "Dados da conta",
                                  "displayName": "Contas",
                                  "permissionCode": "ACCOUNTS_READ"
                              },
                              {
                                  "detail": "Valor do saldo disponível",
                                  "displayName": "Saldos",
                                  "permissionCode": "ACCOUNTS_BALANCES_READ"
                              },
                              {
                                  "detail": "Identificador, valor, data de lançamento e tipo da transação (TED, DOC, Pix, pagamento de boletos etc.), tipo de operação (crédito ou débito), identificacão do pagador ou recebedor e origem ou destino da transação",
                                  "displayName": "Contas",
                                  "permissionCode": "ACCOUNTS_TRANSACTIONS_READ"
                              },
                              {
                                  "detail": "Valor do limite de cheque especial utilizado ou do adiantamento a depositante",
                                  "displayName": "Limites",
                                  "permissionCode": "ACCOUNTS_OVERDRAFT_LIMITS_READ"
                              }
                          ],
                          "displayName": "Contas",
                          "type": "ACCOUNT",
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "displayName": "Conta",
                                  "detail": "Conta",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ],
                                  "hidden": false
                              }
                          ]
                      },
                      {
                          "resourceGroupId": "616087f243ed64462901ca7d",
                          "dataPermissions": [
                              {
                                  "detail": "Documentos de identificação - CPF, RG, etc",
                                  "displayName": "Dados Cadastrais",
                                  "permissionCode": "CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ"
                              },
                              {
                                  "detail": "Renda, etc",
                                  "displayName": "Informações complementares",
                                  "permissionCode": "CUSTOMERS_PERSONAL_ADITTIONALINFO_READ"
                              },
                              {
                                  "detail": "Documentos de identificação - CNPJ, etc",
                                  "displayName": "Dados Cadastrais",
                                  "permissionCode": "CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ"
                              },
                              {
                                  "detail": "Faturamento, etc",
                                  "displayName": "Informações complementares",
                                  "permissionCode": "CUSTOMERS_BUSINESS_ADITTIONALINFO_READ"
                              }
                          ],
                          "displayName": "Dados Cadastrais",
                          "type": "CUSTOMER",
                          "additionalInfos": [],
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ]
                              },
                              {
                                  "resourceId": "7341f947-8c3d-4ced-a7e0-e8f20fd877f1",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "405060"
                                      }
                                  ]
                              }
                          ],
                          "items": []
                      },
                      {
                          "resourceGroupId": "616087f717e70675704ce5ff",
                          "dataPermissions": [
                              {
                                  "detail": "Financiamentos de faturas",
                                  "displayName": "Factura",
                                  "permissionCode": "INVOICE_FINANCINGS_READ"
                              },
                              {
                                  "detail": "Débito em conta corrente, boleto bancário, averbação em folha ou Pix",
                                  "displayName": "Factura",
                                  "permissionCode": "INVOICE_FINANCINGS_PAYMENTS_READ"
                              },
                              {
                                  "detail": "Crédito rotativo, parcelamento de fatura, empréstimo, outros",
                                  "displayName": "Factura",
                                  "permissionCode": "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ"
                              },
                              {
                                  "detail": "Valores cobrados de juros remuneratórios por atraso no pagamento da fatura, multa por atraso no pagamento da fatura, juros de mora por atraso no pagamento da fatura, IOF, crédito rotativo, parcelamento de fatura, empréstimo e outros.",
                                  "displayName": "Factura",
                                  "permissionCode": "INVOICE_FINANCINGS_WARRANTIES_READ"
                              }
                          ],
                          "displayName": "Operações de Crédito - Direitos Creditórios Descontados",
                          "type": "INVOICE_FINANCING",
                          "additionalInfos": [],
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ]
                              },
                              {
                                  "resourceId": "7341f947-8c3d-4ced-a7e0-e8f20fd877f1",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "405060"
                                      }
                                  ]
                              }
                          ],
                          "items": []
                      },
                      {
                          "resourceGroupId": "616087fd43ed64462901ca7e",
                          "dataPermissions": [
                              {
                                  "detail": "Financiamentos",
                                  "displayName": "Financings Read",
                                  "permissionCode": "FINANCINGS_READ"
                              },
                              {
                                  "detail": "Pagamentos dos financiamentos",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "FINANCINGS_PAYMENTS_READ"
                              },
                              {
                                  "detail": "Agendamento de Parcelas dos financiamentos",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "FINANCINGS_SCHEDULED_INSTALMENTS_READ"
                              },
                              {
                                  "detail": "Garantias dos financiamentos",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "FINANCINGS_WARRANTIES_READ"
                              }
                          ],
                          "displayName": "Operações de Crédito - Financiamentos",
                          "type": "FINANCING",
                          "additionalInfos": [],
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ]
                              },
                              {
                                  "resourceId": "7341f947-8c3d-4ced-a7e0-e8f20fd877f1",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "405060"
                                      }
                                  ]
                              }
                          ],
                          "items": []
                      },
                      {
                          "resourceGroupId": "6160880317e70675704ce600",
                          "dataPermissions": [
                              {
                                  "detail": "Denominação, modalidade, CNPJ da fonte pagadora, número do contrato, modalidades contratadas, documento da instiuição fornecedora do crédito, número do contrato na instituição fornecedora do crédito e identificador padronizado do contrato (Ipoc)",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "LOANS_READ"
                              },
                              {
                                  "detail": "Valores das prestações pagas e a pagar",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "LOANS_PAYMENTS_READ"
                              },
                              {
                                  "detail": "Indexador, taxa pré e pós, periodicidade, tipo de juros, base de cálculo, informações adicionais, tipo de taxa",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "LOANS_SCHEDULED_INSTALMENTS_READ"
                              },
                              {
                                  "detail": "Tipo, subtipo e valor original da garantia",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "LOANS_WARRANTIES_READ"
                              }
                          ],
                          "displayName": "Operações de Crédito - Empréstimos",
                          "type": "LOAN",
                          "additionalInfos": [],
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ]
                              },
                              {
                                  "resourceId": "7341f947-8c3d-4ced-a7e0-e8f20fd877f1",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "405060"
                                      }
                                  ]
                              }
                          ],
                          "items": []
                      },
                      {
                          "resourceGroupId": "6160880717e70675704ce601",
                          "dataPermissions": [
                              {
                                  "detail": "Cartões de crédito da conta",
                                  "displayName": "Limite",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_READ"
                              },
                              {
                                  "detail": "Valor total, data de vencimento, data do pagamento, valor do pagamento mínimo, parcelamento",
                                  "displayName": "Factura",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_BILLS_READ"
                              },
                              {
                                  "detail": "Pagamento, tarifa, operações de crédito contratadas no cartão, estorno, cashback, outros",
                                  "displayName": "Factura",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ"
                              },
                              {
                                  "detail": "Indicador dos limites de titular, adicionais, virtuais e demais cartões, se houver",
                                  "displayName": "Limite",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_LIMITS_READ"
                              },
                              {
                                  "detail": "Identificação da operação, tipo e status de transação, tipo da tarifa e de pagamento, identificador da parcela, tipo de operação de crédito contratada no cartão, moeda, taxa de conversão e identificador da transação na instituição financeira",
                                  "displayName": "Transações",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ"
                              }
                          ],
                          "displayName": "Cartão de Crédito",
                          "type": "CREDIT_CARD_ACCOUNT",
                          "additionalInfos": [],
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ]
                              },
                              {
                                  "resourceId": "7341f947-8c3d-4ced-a7e0-e8f20fd877f1",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "405060"
                                      }
                                  ]
                              }
                          ],
                          "items": []
                      },
                      {
                          "resourceGroupId": "6160880e43ed64462901ca80",
                          "dataPermissions": [
                              {
                                  "detail": "Adiantamento a depositantes",
                                  "displayName": "Adiantamentos",
                                  "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_READ"
                              },
                              {
                                  "detail": "Pagamentos dos adiantamentos a depositantes",
                                  "displayName": "Adiantamentos",
                                  "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_PAYMENTS_READ"
                              },
                              {
                                  "detail": "Agendamento de Parcelas dos adiantamentos a depositantes",
                                  "displayName": "Adiantamentos",
                                  "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_SCHEDULED_INSTALMENTS_READ"
                              },
                              {
                                  "detail": "Garantias dos adiantamentos a depositantes",
                                  "displayName": "Adiantamentos",
                                  "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_WARRANTIES_READ"
                              }
                          ],
                          "displayName": "Operações de Crédito - Adiantamento a Depositantes",
                          "type": "UNARRANGED_ACCOUNT_OVERDRAFT",
                          "additionalInfos": [],
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ]
                              },
                              {
                                  "resourceId": "7341f947-8c3d-4ced-a7e0-e8f20fd877f1",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "405060"
                                      }
                                  ]
                              }
                          ],
                          "items": []
                      },
                      {
                          "resourceGroupId": "6160881143ed64462901ca81",
                          "dataPermissions": [
                              {
                                  "detail": "Lista de recursos compartilhados",
                                  "displayName": "Recursos",
                                  "permissionCode": "RESOURCES_READ"
                              }
                          ],
                          "displayName": "Lista de recursos compartilhados",
                          "type": "RESOURCE",
                          "additionalInfos": [],
                          "items": []
                      }
                  ],
                  "approvers": [
                      {
                          "status": "AWAITING_AUTHORISATION",
                          "approverId": "93109924099"
                      },
                      {
                          "status": "AWAITING_AUTHORISATION",
                          "approverId": "03109924099"
                      },
                      {
                          "status": "AUTHORIZED",
                          "approverId": "13109924099"
                      }
                  ],
                  "shareType": "TRANSMITTING",
                  "status": "ACTIVE",
                  "additionalInfos": [
                      {
                          "key": "INTERNAL_ID",
                          "value": "XPTO001"
                      }
                  ],
                  "deadLines": [
                      {
                          "total": 364,
                          "type": "DAYS",
                          "expirationDateTime": "2022-10-08T18:11:22Z"
                      }
                  ]
              },
              {
                  "businessEntity": {
                      "document": {
                          "identification": "35764250000182",
                          "rel": "CNPJ"
                      }
                  },
                  "consentId": "urn:bocombbm:bb7b05b5-95ab-4ea7-aaff-52d6c2f549a4",
                  "shareId": "61608e987a19e40fe9aab285",
                  "organisationId": "4a7250ec-eac5-5d8f-b7eb-dc0e8e880203",
                  "organisationName": "BCO BOCOM BBM S.A.",
                  "createDateTime": "2021-10-08T18:31:52.91Z",
                  "lastStatusUpdate": "2021-10-08T18:32:15.717Z",
                  "expirationDateTime": "2022-10-08T18:31:49Z",
                  "loggedUser": {
                      "document": {
                          "identification": "93109924099",
                          "rel": "CPF"
                      }
                  },
                  "resourceGroups": [
                      {
                          "resourceGroupId": "616087ea43ed64462901ca7c",
                          "dataPermissions": [
                              {
                                  "detail": "Dados da conta",
                                  "displayName": "Contas",
                                  "permissionCode": "ACCOUNTS_READ"
                              },
                              {
                                  "detail": "Valor do saldo disponível",
                                  "displayName": "Saldos",
                                  "permissionCode": "ACCOUNTS_BALANCES_READ"
                              },
                              {
                                  "detail": "Identificador, valor, data de lançamento e tipo da transação (TED, DOC, Pix, pagamento de boletos etc.), tipo de operação (crédito ou débito), identificacão do pagador ou recebedor e origem ou destino da transação",
                                  "displayName": "Contas",
                                  "permissionCode": "ACCOUNTS_TRANSACTIONS_READ"
                              },
                              {
                                  "detail": "Valor do limite de cheque especial utilizado ou do adiantamento a depositante",
                                  "displayName": "Limites",
                                  "permissionCode": "ACCOUNTS_OVERDRAFT_LIMITS_READ"
                              }
                          ],
                          "displayName": "Contas",
                          "type": "ACCOUNT",
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "displayName": "Conta",
                                  "detail": "Conta",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ],
                                  "hidden": false
                              }
                          ]
                      },
                      {
                          "resourceGroupId": "616087f243ed64462901ca7d",
                          "dataPermissions": [
                              {
                                  "detail": "Documentos de identificação - CPF, RG, etc",
                                  "displayName": "Dados Cadastrais",
                                  "permissionCode": "CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ"
                              },
                              {
                                  "detail": "Renda, etc",
                                  "displayName": "Informações complementares",
                                  "permissionCode": "CUSTOMERS_PERSONAL_ADITTIONALINFO_READ"
                              },
                              {
                                  "detail": "Documentos de identificação - CNPJ, etc",
                                  "displayName": "Dados Cadastrais",
                                  "permissionCode": "CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ"
                              },
                              {
                                  "detail": "Faturamento, etc",
                                  "displayName": "Informações complementares",
                                  "permissionCode": "CUSTOMERS_BUSINESS_ADITTIONALINFO_READ"
                              }
                          ],
                          "displayName": "Dados Cadastrais",
                          "type": "CUSTOMER",
                          "additionalInfos": [],
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ]
                              },
                              {
                                  "resourceId": "7341f947-8c3d-4ced-a7e0-e8f20fd877f1",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "405060"
                                      }
                                  ]
                              }
                          ],
                          "items": []
                      },
                      {
                          "resourceGroupId": "616087f717e70675704ce5ff",
                          "dataPermissions": [
                              {
                                  "detail": "Financiamentos de faturas",
                                  "displayName": "Factura",
                                  "permissionCode": "INVOICE_FINANCINGS_READ"
                              },
                              {
                                  "detail": "Débito em conta corrente, boleto bancário, averbação em folha ou Pix",
                                  "displayName": "Factura",
                                  "permissionCode": "INVOICE_FINANCINGS_PAYMENTS_READ"
                              },
                              {
                                  "detail": "Crédito rotativo, parcelamento de fatura, empréstimo, outros",
                                  "displayName": "Factura",
                                  "permissionCode": "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ"
                              },
                              {
                                  "detail": "Valores cobrados de juros remuneratórios por atraso no pagamento da fatura, multa por atraso no pagamento da fatura, juros de mora por atraso no pagamento da fatura, IOF, crédito rotativo, parcelamento de fatura, empréstimo e outros.",
                                  "displayName": "Factura",
                                  "permissionCode": "INVOICE_FINANCINGS_WARRANTIES_READ"
                              }
                          ],
                          "displayName": "Operações de Crédito - Direitos Creditórios Descontados",
                          "type": "INVOICE_FINANCING",
                          "additionalInfos": [],
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ]
                              },
                              {
                                  "resourceId": "7341f947-8c3d-4ced-a7e0-e8f20fd877f1",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "405060"
                                      }
                                  ]
                              }
                          ],
                          "items": []
                      },
                      {
                          "resourceGroupId": "616087fd43ed64462901ca7e",
                          "dataPermissions": [
                              {
                                  "detail": "Financiamentos",
                                  "displayName": "Financings Read",
                                  "permissionCode": "FINANCINGS_READ"
                              },
                              {
                                  "detail": "Pagamentos dos financiamentos",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "FINANCINGS_PAYMENTS_READ"
                              },
                              {
                                  "detail": "Agendamento de Parcelas dos financiamentos",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "FINANCINGS_SCHEDULED_INSTALMENTS_READ"
                              },
                              {
                                  "detail": "Garantias dos financiamentos",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "FINANCINGS_WARRANTIES_READ"
                              }
                          ],
                          "displayName": "Operações de Crédito - Financiamentos",
                          "type": "FINANCING",
                          "additionalInfos": [],
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ]
                              },
                              {
                                  "resourceId": "7341f947-8c3d-4ced-a7e0-e8f20fd877f1",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "405060"
                                      }
                                  ]
                              }
                          ],
                          "items": []
                      },
                      {
                          "resourceGroupId": "6160880317e70675704ce600",
                          "dataPermissions": [
                              {
                                  "detail": "Denominação, modalidade, CNPJ da fonte pagadora, número do contrato, modalidades contratadas, documento da instiuição fornecedora do crédito, número do contrato na instituição fornecedora do crédito e identificador padronizado do contrato (Ipoc)",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "LOANS_READ"
                              },
                              {
                                  "detail": "Valores das prestações pagas e a pagar",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "LOANS_PAYMENTS_READ"
                              },
                              {
                                  "detail": "Indexador, taxa pré e pós, periodicidade, tipo de juros, base de cálculo, informações adicionais, tipo de taxa",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "LOANS_SCHEDULED_INSTALMENTS_READ"
                              },
                              {
                                  "detail": "Tipo, subtipo e valor original da garantia",
                                  "displayName": "Contratos de crédito",
                                  "permissionCode": "LOANS_WARRANTIES_READ"
                              }
                          ],
                          "displayName": "Operações de Crédito - Empréstimos",
                          "type": "LOAN",
                          "additionalInfos": [],
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ]
                              },
                              {
                                  "resourceId": "7341f947-8c3d-4ced-a7e0-e8f20fd877f1",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "405060"
                                      }
                                  ]
                              }
                          ],
                          "items": []
                      },
                      {
                          "resourceGroupId": "6160880717e70675704ce601",
                          "dataPermissions": [
                              {
                                  "detail": "Cartões de crédito da conta",
                                  "displayName": "Limite",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_READ"
                              },
                              {
                                  "detail": "Valor total, data de vencimento, data do pagamento, valor do pagamento mínimo, parcelamento",
                                  "displayName": "Factura",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_BILLS_READ"
                              },
                              {
                                  "detail": "Pagamento, tarifa, operações de crédito contratadas no cartão, estorno, cashback, outros",
                                  "displayName": "Factura",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ"
                              },
                              {
                                  "detail": "Indicador dos limites de titular, adicionais, virtuais e demais cartões, se houver",
                                  "displayName": "Limite",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_LIMITS_READ"
                              },
                              {
                                  "detail": "Identificação da operação, tipo e status de transação, tipo da tarifa e de pagamento, identificador da parcela, tipo de operação de crédito contratada no cartão, moeda, taxa de conversão e identificador da transação na instituição financeira",
                                  "displayName": "Transações",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ"
                              }
                          ],
                          "displayName": "Cartão de Crédito",
                          "type": "CREDIT_CARD_ACCOUNT",
                          "additionalInfos": [],
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ]
                              },
                              {
                                  "resourceId": "7341f947-8c3d-4ced-a7e0-e8f20fd877f1",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "405060"
                                      }
                                  ]
                              }
                          ],
                          "items": []
                      },
                      {
                          "resourceGroupId": "6160880e43ed64462901ca80",
                          "dataPermissions": [
                              {
                                  "detail": "Adiantamento a depositantes",
                                  "displayName": "Adiantamentos",
                                  "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_READ"
                              },
                              {
                                  "detail": "Pagamentos dos adiantamentos a depositantes",
                                  "displayName": "Adiantamentos",
                                  "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_PAYMENTS_READ"
                              },
                              {
                                  "detail": "Agendamento de Parcelas dos adiantamentos a depositantes",
                                  "displayName": "Adiantamentos",
                                  "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_SCHEDULED_INSTALMENTS_READ"
                              },
                              {
                                  "detail": "Garantias dos adiantamentos a depositantes",
                                  "displayName": "Adiantamentos",
                                  "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_WARRANTIES_READ"
                              }
                          ],
                          "displayName": "Operações de Crédito - Adiantamento a Depositantes",
                          "type": "UNARRANGED_ACCOUNT_OVERDRAFT",
                          "additionalInfos": [],
                          "resources": [
                              {
                                  "resourceId": "25cac914-d8ae-6789-b215-650a6215820d",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "102030"
                                      }
                                  ]
                              },
                              {
                                  "resourceId": "7341f947-8c3d-4ced-a7e0-e8f20fd877f1",
                                  "status": "AVAILABLE",
                                  "additionalInfos": [
                                      {
                                          "key": "NUM_AGENCIA",
                                          "value": "1"
                                      },
                                      {
                                          "key": "NUM_CONTA",
                                          "value": "405060"
                                      }
                                  ]
                              }
                          ],
                          "items": []
                      },
                      {
                          "resourceGroupId": "6160881143ed64462901ca81",
                          "dataPermissions": [
                              {
                                  "detail": "Lista de recursos compartilhados",
                                  "displayName": "Recursos",
                                  "permissionCode": "RESOURCES_READ"
                              }
                          ],
                          "displayName": "Lista de recursos compartilhados",
                          "type": "RESOURCE",
                          "additionalInfos": [],
                          "items": []
                      }
                  ],
                  "approvers": [
                      {
                          "status": "AWAITING_AUTHORISATION",
                          "approverId": "93109924099"
                      }
                  ],
                  "shareType": "TRANSMITTING",
                  "status": "PENDING",
                  "additionalInfos": [
                      {
                          "key": "INTERNAL_ID",
                          "value": "XPTO001"
                      }
                  ],
                  "deadLines": [
                      {
                          "total": 364,
                          "type": "DAYS",
                          "expirationDateTime": "2022-10-08T18:31:49Z"
                      }
                  ]
              }
          ]

### Open Banking ASPSP - Resources Update [/open-banking/journey-aspsp/v1/shares/{shareIdAspsp}/resources]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS, PATCH

### GET [PATCH]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS, PATCH

  + Body

          {
             "businessEntity":{
                "document":{
                   "identification":"35764250000182",
                   "rel":"CNPJ"
                }
             },
             "consentId":"urn:bocombbm:bb7b05b5-95ab-4ea7-aaff-52d6c2f549a4",
             "shareId":"615ca6478aeae63b8653bbd2",
             "organisationId":"4a7250ec-eac5-5d8f-b7eb-dc0e8e880203",
             "organisationName":"BCO BOCOM BBM S.A.",
             "createDateTime":"2021-10-05T19:23:51.194Z",
             "lastStatusUpdate":"2021-10-05T19:23:51.256Z",
             "expirationDateTime":"2022-10-05T19:23:49Z",
             "loggedUser":{
                "document":{
                   "identification":"93109924099",
                   "rel":"CPF"
                }
             },
             "resourceGroups":[
                {
                   "resourceGroupId":"614e493c12e0520e9346c2bd",
                   "dataPermissions":[
                      {
                         "detail":"Dados da conta",
                         "displayName":"Contas",
                         "permissionCode":"ACCOUNTS_READ"
                      },
                      {
                         "detail":"Valor do saldo disponível",
                         "displayName":"Saldos",
                         "permissionCode":"ACCOUNTS_BALANCES_READ"
                      },
                      {
                         "detail":"Identificador, valor, data de lançamento e tipo da transação (TED, DOC, Pix, pagamento de boletos etc.), tipo de operação (crédito ou débito), identificacão do pagador ou recebedor e origem ou destino da transação",
                         "displayName":"Contas",
                         "permissionCode":"ACCOUNTS_TRANSACTIONS_READ"
                      },
                      {
                         "detail":"Valor do limite de cheque especial utilizado ou do adiantamento a depositante",
                         "displayName":"Limites",
                         "permissionCode":"ACCOUNTS_OVERDRAFT_LIMITS_READ"
                      }
                   ],
                   "displayName":"Contas",
                   "type":"ACCOUNT",
                   "resources":[
                      {
                         "resourceId":"25cac914-d8ae-6789-b215-650a6215820d",
                         "status":"AVAILABLE",
                         "displayName":"Conta",
                         "detail":"Conta",
                         "additionalInfos":[
                            {
                               "key":"NUM_AGENCIA",
                               "value":"1"
                            },
                            {
                               "key":"NUM_CONTA",
                               "value":"102030"
                            }
                         ],
                         "hidden":false
                      }
                   ]
                },
                {
                   "resourceGroupId":"614e49414671807f9b241b7d",
                   "dataPermissions":[
                      {
                         "detail":"Documentos de identificação - CPF, RG, etc",
                         "displayName":"Dados Cadastrais",
                         "permissionCode":"CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ"
                      },
                      {
                         "detail":"Renda, etc",
                         "displayName":"Informações complementares",
                         "permissionCode":"CUSTOMERS_PERSONAL_ADITTIONALINFO_READ"
                      },
                      {
                         "detail":"Documentos de identificação - CNPJ, etc",
                         "displayName":"Dados Cadastrais",
                         "permissionCode":"CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ"
                      },
                      {
                         "detail":"Faturamento, etc",
                         "displayName":"Informações complementares",
                         "permissionCode":"CUSTOMERS_BUSINESS_ADITTIONALINFO_READ"
                      }
                   ],
                   "displayName":"Dados Cadastrais",
                   "type":"CUSTOMER",
                   "additionalInfos":[

                   ],
                   "resources":[
                      {
                         "resourceId":"25cac914-d8ae-6789-b215-650a6215820d",
                         "status":"AVAILABLE",
                         "additionalInfos":[
                            {
                               "key":"NUM_AGENCIA",
                               "value":"1"
                            },
                            {
                               "key":"NUM_CONTA",
                               "value":"102030"
                            }
                         ]
                      }
                   ],
                   "items":[

                   ]
                },
                {
                   "resourceGroupId":"614e49484671807f9b241b7e",
                   "dataPermissions":[
                      {
                         "detail":"Financiamentos de faturas",
                         "displayName":"Factura",
                         "permissionCode":"INVOICE_FINANCINGS_READ"
                      },
                      {
                         "detail":"Débito em conta corrente, boleto bancário, averbação em folha ou Pix",
                         "displayName":"Factura",
                         "permissionCode":"INVOICE_FINANCINGS_PAYMENTS_READ"
                      },
                      {
                         "detail":"Crédito rotativo, parcelamento de fatura, empréstimo, outros",
                         "displayName":"Factura",
                         "permissionCode":"INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ"
                      },
                      {
                         "detail":"Valores cobrados de juros remuneratórios por atraso no pagamento da fatura, multa por atraso no pagamento da fatura, juros de mora por atraso no pagamento da fatura, IOF, crédito rotativo, parcelamento de fatura, empréstimo e outros.",
                         "displayName":"Factura",
                         "permissionCode":"INVOICE_FINANCINGS_WARRANTIES_READ"
                      }
                   ],
                   "displayName":"Operações de Crédito - Direitos Creditórios Descontados",
                   "type":"INVOICE_FINANCING",
                   "additionalInfos":[

                   ],
                   "resources":[
                      {
                         "resourceId":"25cac914-d8ae-6789-b215-650a6215820d",
                         "status":"AVAILABLE",
                         "additionalInfos":[
                            {
                               "key":"NUM_AGENCIA",
                               "value":"1"
                            },
                            {
                               "key":"NUM_CONTA",
                               "value":"102030"
                            }
                         ]
                      }
                   ],
                   "items":[

                   ]
                },
                {
                   "resourceGroupId":"614e494d4671807f9b241b7f",
                   "dataPermissions":[
                      {
                         "detail":"Financiamentos",
                         "displayName":"Financings Read",
                         "permissionCode":"FINANCINGS_READ"
                      },
                      {
                         "detail":"Pagamentos dos financiamentos",
                         "displayName":"Contratos de crédito",
                         "permissionCode":"FINANCINGS_PAYMENTS_READ"
                      },
                      {
                         "detail":"Agendamento de Parcelas dos financiamentos",
                         "displayName":"Contratos de crédito",
                         "permissionCode":"FINANCINGS_SCHEDULED_INSTALMENTS_READ"
                      },
                      {
                         "detail":"Garantias dos financiamentos",
                         "displayName":"Contratos de crédito",
                         "permissionCode":"FINANCINGS_WARRANTIES_READ"
                      }
                   ],
                   "displayName":"Operações de Crédito - Financiamentos",
                   "type":"FINANCING",
                   "additionalInfos":[

                   ],
                   "resources":[
                      {
                         "resourceId":"25cac914-d8ae-6789-b215-650a6215820d",
                         "status":"AVAILABLE",
                         "additionalInfos":[
                            {
                               "key":"NUM_AGENCIA",
                               "value":"1"
                            },
                            {
                               "key":"NUM_CONTA",
                               "value":"102030"
                            }
                         ]
                      }
                   ],
                   "items":[

                   ]
                },
                {
                   "resourceGroupId":"614e495112e0520e9346c2be",
                   "dataPermissions":[
                      {
                         "detail":"Denominação, modalidade, CNPJ da fonte pagadora, número do contrato, modalidades contratadas, documento da instiuição fornecedora do crédito, número do contrato na instituição fornecedora do crédito e identificador padronizado do contrato (Ipoc)",
                         "displayName":"Contratos de crédito",
                         "permissionCode":"LOANS_READ"
                      },
                      {
                         "detail":"Valores das prestações pagas e a pagar",
                         "displayName":"Contratos de crédito",
                         "permissionCode":"LOANS_PAYMENTS_READ"
                      },
                      {
                         "detail":"Indexador, taxa pré e pós, periodicidade, tipo de juros, base de cálculo, informações adicionais, tipo de taxa",
                         "displayName":"Contratos de crédito",
                         "permissionCode":"LOANS_SCHEDULED_INSTALMENTS_READ"
                      },
                      {
                         "detail":"Tipo, subtipo e valor original da garantia",
                         "displayName":"Contratos de crédito",
                         "permissionCode":"LOANS_WARRANTIES_READ"
                      }
                   ],
                   "displayName":"Operações de Crédito - Empréstimos",
                   "type":"LOAN",
                   "additionalInfos":[

                   ],
                   "resources":[
                      {
                         "resourceId":"25cac914-d8ae-6789-b215-650a6215820d",
                         "status":"AVAILABLE",
                         "additionalInfos":[
                            {
                               "key":"NUM_AGENCIA",
                               "value":"1"
                            },
                            {
                               "key":"NUM_CONTA",
                               "value":"102030"
                            }
                         ]
                      }
                   ],
                   "items":[

                   ]
                },
                {
                   "resourceGroupId":"614e495612e0520e9346c2bf",
                   "dataPermissions":[
                      {
                         "detail":"Cartões de crédito da conta",
                         "displayName":"Limite",
                         "permissionCode":"CREDIT_CARDS_ACCOUNTS_READ"
                      },
                      {
                         "detail":"Valor total, data de vencimento, data do pagamento, valor do pagamento mínimo, parcelamento",
                         "displayName":"Factura",
                         "permissionCode":"CREDIT_CARDS_ACCOUNTS_BILLS_READ"
                      },
                      {
                         "detail":"Pagamento, tarifa, operações de crédito contratadas no cartão, estorno, cashback, outros",
                         "displayName":"Factura",
                         "permissionCode":"CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ"
                      },
                      {
                         "detail":"Indicador dos limites de titular, adicionais, virtuais e demais cartões, se houver",
                         "displayName":"Limite",
                         "permissionCode":"CREDIT_CARDS_ACCOUNTS_LIMITS_READ"
                      },
                      {
                         "detail":"Identificação da operação, tipo e status de transação, tipo da tarifa e de pagamento, identificador da parcela, tipo de operação de crédito contratada no cartão, moeda, taxa de conversão e identificador da transação na instituição financeira",
                         "displayName":"Transações",
                         "permissionCode":"CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ"
                      }
                   ],
                   "displayName":"Cartão de Crédito",
                   "type":"CREDIT_CARD_ACCOUNT",
                   "additionalInfos":[

                   ],
                   "resources":[
                      {
                         "resourceId":"25cac914-d8ae-6789-b215-650a6215820d",
                         "status":"AVAILABLE",
                         "additionalInfos":[
                            {
                               "key":"NUM_AGENCIA",
                               "value":"1"
                            },
                            {
                               "key":"NUM_CONTA",
                               "value":"102030"
                            }
                         ]
                      }
                   ],
                   "items":[

                   ]
                },
                {
                   "resourceGroupId":"614e495b12e0520e9346c2c0",
                   "dataPermissions":[
                      {
                         "detail":"Adiantamento a depositantes",
                         "displayName":"Adiantamentos",
                         "permissionCode":"UNARRANGED_ACCOUNTS_OVERDRAFT_READ"
                      },
                      {
                         "detail":"Pagamentos dos adiantamentos a depositantes",
                         "displayName":"Adiantamentos",
                         "permissionCode":"UNARRANGED_ACCOUNTS_OVERDRAFT_PAYMENTS_READ"
                      },
                      {
                         "detail":"Agendamento de Parcelas dos adiantamentos a depositantes",
                         "displayName":"Adiantamentos",
                         "permissionCode":"UNARRANGED_ACCOUNTS_OVERDRAFT_SCHEDULED_INSTALMENTS_READ"
                      },
                      {
                         "detail":"Garantias dos adiantamentos a depositantes",
                         "displayName":"Adiantamentos",
                         "permissionCode":"UNARRANGED_ACCOUNTS_OVERDRAFT_WARRANTIES_READ"
                      }
                   ],
                   "displayName":"Operações de Crédito - Adiantamento a Depositantes",
                   "type":"UNARRANGED_ACCOUNT_OVERDRAFT",
                   "additionalInfos":[

                   ],
                   "resources":[
                      {
                         "resourceId":"25cac914-d8ae-6789-b215-650a6215820d",
                         "status":"AVAILABLE",
                         "additionalInfos":[
                            {
                               "key":"NUM_AGENCIA",
                               "value":"1"
                            },
                            {
                               "key":"NUM_CONTA",
                               "value":"102030"
                            }
                         ]
                      }
                   ],
                   "items":[

                   ]
                },
                {
                   "resourceGroupId":"614e495e4671807f9b241b80",
                   "dataPermissions":[
                      {
                         "detail":"Lista de recursos compartilhados",
                         "displayName":"Recursos",
                         "permissionCode":"RESOURCES_READ"
                      }
                   ],
                   "displayName":"Lista de recursos compartilhados",
                   "type":"RESOURCE",
                   "additionalInfos":[

                   ],
                   "items":[

                   ]
                }
             ],
             "approvers":[
                {
                   "status":"AWAITING_AUTHORISATION",
                   "approverId":"93109924099"
                }
             ],
             "shareType":"TRANSMITTING",
             "status":"PENDING",
             "additionalInfos":[
                {
                   "key":"INTERNAL_ID",
                   "value":"XPTO001"
                }
             ],
             "deadLines":[
                {
                   "total":364,
                   "type":"DAYS",
                   "expirationDateTime":"2022-10-05T19:23:49Z"
                }
             ]
          }

### Open Banking ASPSP - Confirmation [/open-banking/journey-aspsp/v1/shares/{shareIdAspsp}/confirmations]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### PUT [PUT]

+ Response 302 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          []


### Open Banking ASPSP - Declination [/open-banking/journey-aspsp/v1/shares/{shareIdAspsp}/declines]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### PUT [PUT]

+ Response 302 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          []

### Open Banking TPP - Atualiza Escopo [/open-banking/journey-tpp/v1/shares/{shareIdTpp}]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS, PATCH


### GET [GET]

+ Response 302 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          [
              {
                  "businessEntity": {
                      "document": {
                          "identification": "35764250000182",
                          "rel": "CNPJ"
                      }
                  },
                  "shareId": "6166d1a3a164ca1a52cab77c",
                  "authorisationServer": {
                      "organisationId": "4a7250ec-eac5-5d8f-b7eb-dc0e8e880203",
                      "payloadSigningCertLocationUri": "https://auth-sandbox.hom.bocombbm.com.br/jans-auth/jwks",
                      "parentAuthorisationServerId": null,
                      "notificationWebhook": null,
                      "notificationWebhookStatus": null,
                      "openIDDiscoveryDocument": "https://auth-sandbox.hom.bocombbm.com.br/jans-auth/.well-known/openid-configuration",
                      "customerFriendlyName": "BOCOM BBM",
                      "customerFriendlyDescription": "BOCOM BBM Sandbox",
                      "termsOfServiceUri": "https://www.bocombbm.com.br",
                      "autoRegistrationSupported": true,
                      "customerFriendlyLogoUri": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
                      "developerPortalUri": "https://portal-bancobbm.sensedia.com",
                      "authorisationServerId": "2c7f2ab1-9a3e-4021-9afe-7c4c796dfa9a"
                  },
                  "createDateTime": "2021-10-13T12:31:29.184Z",
                  "lastStatusUpdate": "2021-10-13T12:31:29.184Z",
                  "loggedUser": {
                      "document": {
                          "identification": "93109924099",
                          "rel": "CPF"
                      }
                  },
                  "resourceGroups": [
                      {
                          "resourceGroupId": "616087ea43ed64462901ca7c",
                          "dataPermissions": [
                              {
                                  "detail": "Dados da conta",
                                  "displayName": "Contas",
                                  "permissionCode": "ACCOUNTS_READ",
                                  "required": false
                              },
                              {
                                  "detail": "Valor do saldo disponível",
                                  "displayName": "Saldos",
                                  "permissionCode": "ACCOUNTS_BALANCES_READ",
                                  "required": false
                              },
                              {
                                  "detail": "Identificador, valor, data de lançamento e tipo da transação (TED, DOC, Pix, pagamento de boletos etc.), tipo de operação (crédito ou débito), identificacão do pagador ou recebedor e origem ou destino da transação",
                                  "displayName": "Transações",
                                  "permissionCode": "ACCOUNTS_TRANSACTIONS_READ",
                                  "required": false
                              },
                              {
                                  "detail": "Valor do limite de cheque especial utilizado ou do adiantamento a depositante",
                                  "displayName": "Limites",
                                  "permissionCode": "ACCOUNTS_OVERDRAFT_LIMITS_READ",
                                  "required": false
                              }
                          ],
                          "displayName": "Contas",
                          "type": "ACCOUNT"
                      },
                      {
                          "resourceGroupId": "616087f243ed64462901ca7d",
                          "dataPermissions": [
                              {
                                  "detail": "Documentos de identificação - CPF, RG, etc",
                                  "displayName": "Identificação da pessoa natural",
                                  "permissionCode": "CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ",
                                  "required": true
                              },
                              {
                                  "detail": "Renda, etc",
                                  "displayName": "Qualificação / Relações da pessoa natural",
                                  "permissionCode": "CUSTOMERS_PERSONAL_ADITTIONALINFO_READ",
                                  "required": true
                              },
                              {
                                  "detail": "Documentos de identificação - CNPJ, etc",
                                  "displayName": "Identificação da pessoa jurídica",
                                  "permissionCode": "CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ",
                                  "required": true
                              },
                              {
                                  "detail": "Faturamento, etc",
                                  "displayName": "Qualificação / Relações da pessoa jurídica",
                                  "permissionCode": "CUSTOMERS_BUSINESS_ADITTIONALINFO_READ",
                                  "required": true
                              }
                          ],
                          "displayName": "Dados Cadastrais",
                          "type": "CUSTOMER",
                          "additionalInfos": [],
                          "items": []
                      },
                      {
                          "resourceGroupId": "616087f717e70675704ce5ff",
                          "dataPermissions": [
                              {
                                  "detail": "Financiamentos de faturas",
                                  "displayName": "Contratos",
                                  "permissionCode": "INVOICE_FINANCINGS_READ",
                                  "required": false
                              },
                              {
                                  "detail": "Débito em conta corrente, boleto bancário, averbação em folha ou Pix",
                                  "displayName": "Pagamentos",
                                  "permissionCode": "INVOICE_FINANCINGS_PAYMENTS_READ",
                                  "required": false
                              },
                              {
                                  "detail": "Crédito rotativo, parcelamento de fatura, empréstimo, outros",
                                  "displayName": "Parcelas / Prestações",
                                  "permissionCode": "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ",
                                  "required": false
                              },
                              {
                                  "detail": "Valores cobrados de juros remuneratórios por atraso no pagamento da fatura, multa por atraso no pagamento da fatura, juros de mora por atraso no pagamento da fatura, IOF, crédito rotativo, parcelamento de fatura, empréstimo e outros.",
                                  "displayName": "Garantias",
                                  "permissionCode": "INVOICE_FINANCINGS_WARRANTIES_READ",
                                  "required": false
                              }
                          ],
                          "displayName": "Operações de Crédito - Direitos Creditórios Descontados",
                          "type": "INVOICE_FINANCING",
                          "additionalInfos": [],
                          "items": []
                      },
                      {
                          "resourceGroupId": "616087fd43ed64462901ca7e",
                          "dataPermissions": [
                              {
                                  "detail": "Financiamentos",
                                  "displayName": "Contratos",
                                  "permissionCode": "FINANCINGS_READ",
                                  "required": false
                              },
                              {
                                  "detail": "Pagamentos dos financiamentos",
                                  "displayName": "Pagamentos",
                                  "permissionCode": "FINANCINGS_PAYMENTS_READ",
                                  "required": false
                              },
                              {
                                  "detail": "Agendamento de Parcelas dos financiamentos",
                                  "displayName": "Parcelas / Prestações",
                                  "permissionCode": "FINANCINGS_SCHEDULED_INSTALMENTS_READ",
                                  "required": false
                              },
                              {
                                  "detail": "Garantias dos financiamentos",
                                  "displayName": "Garantias",
                                  "permissionCode": "FINANCINGS_WARRANTIES_READ",
                                  "required": false
                              }
                          ],
                          "displayName": "Operações de Crédito - Financiamentos",
                          "type": "FINANCING",
                          "additionalInfos": [],
                          "items": []
                      },
                      {
                          "resourceGroupId": "6160880317e70675704ce600",
                          "dataPermissions": [
                              {
                                  "detail": "Denominação, modalidade, CNPJ da fonte pagadora, número do contrato, modalidades contratadas, documento da instiuição fornecedora do crédito, número do contrato na instituição fornecedora do crédito e identificador padronizado do contrato (Ipoc)",
                                  "displayName": "Contratos",
                                  "permissionCode": "LOANS_READ",
                                  "required": false
                              },
                              {
                                  "detail": "Valores das prestações pagas e a pagar",
                                  "displayName": "Pagamentos",
                                  "permissionCode": "LOANS_PAYMENTS_READ",
                                  "required": false
                              },
                              {
                                  "detail": "Indexador, taxa pré e pós, periodicidade, tipo de juros, base de cálculo, informações adicionais, tipo de taxa",
                                  "displayName": "Parcelas / Prestações",
                                  "permissionCode": "LOANS_SCHEDULED_INSTALMENTS_READ",
                                  "required": false
                              },
                              {
                                  "detail": "Tipo, subtipo e valor original da garantia",
                                  "displayName": "Garantias",
                                  "permissionCode": "LOANS_WARRANTIES_READ",
                                  "required": false
                              }
                          ],
                          "displayName": "Operações de Crédito - Empréstimos",
                          "type": "LOAN",
                          "additionalInfos": [],
                          "items": []
                      },
                      {
                          "resourceGroupId": "6160880717e70675704ce601",
                          "dataPermissions": [
                              {
                                  "detail": "Cartões de crédito da conta",
                                  "displayName": "Cartões de Crédito",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_READ",
                                  "required": true
                              },
                              {
                                  "detail": "Valor total, data de vencimento, data do pagamento, valor do pagamento mínimo, parcelamento",
                                  "displayName": "Faturas",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_BILLS_READ",
                                  "required": false
                              },
                              {
                                  "detail": "Pagamento, tarifa, operações de crédito contratadas no cartão, estorno, cashback, outros",
                                  "displayName": "Transações por Fatura",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ",
                                  "required": false
                              },
                              {
                                  "detail": "Indicador dos limites de titular, adicionais, virtuais e demais cartões, se houver",
                                  "displayName": "Limites",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_LIMITS_READ",
                                  "required": false
                              },
                              {
                                  "detail": "Identificação da operação, tipo e status de transação, tipo da tarifa e de pagamento, identificador da parcela, tipo de operação de crédito contratada no cartão, moeda, taxa de conversão e identificador da transação na instituição financeira",
                                  "displayName": "Transações",
                                  "permissionCode": "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ",
                                  "required": false
                              }
                          ],
                          "displayName": "Cartão de Crédito",
                          "type": "CREDIT_CARD_ACCOUNT",
                          "additionalInfos": [],
                          "items": []
                      },
                      {
                          "resourceGroupId": "6160880e43ed64462901ca80",
                          "dataPermissions": [
                              {
                                  "detail": "Adiantamento a depositantes",
                                  "displayName": "Contratos",
                                  "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_READ",
                                  "required": false
                              },
                              {
                                  "detail": "Pagamentos dos adiantamentos a depositantes",
                                  "displayName": "Pagamentos",
                                  "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_PAYMENTS_READ",
                                  "required": false
                              },
                              {
                                  "detail": "Agendamento de Parcelas dos adiantamentos a depositantes",
                                  "displayName": "Parcelas / Prestações",
                                  "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_SCHEDULED_INSTALMENTS_READ",
                                  "required": false
                              },
                              {
                                  "detail": "Garantias dos adiantamentos a depositantes",
                                  "displayName": "Garantias",
                                  "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_WARRANTIES_READ",
                                  "required": false
                              }
                          ],
                          "displayName": "Operações de Crédito - Adiantamento a Depositantes",
                          "type": "UNARRANGED_ACCOUNT_OVERDRAFT",
                          "additionalInfos": [],
                          "items": []
                      },
                      {
                          "resourceGroupId": "6160881143ed64462901ca81",
                          "dataPermissions": [
                              {
                                  "detail": "Lista de recursos compartilhados",
                                  "displayName": "Leitura de recursos",
                                  "permissionCode": "RESOURCES_READ",
                                  "required": true
                              }
                          ],
                          "displayName": "Lista de recursos compartilhados",
                          "type": "RESOURCE",
                          "additionalInfos": [],
                          "items": []
                      }
                  ],
                  "shareType": "RECEIVING",
                  "status": "PENDING",
                  "additionalInfos": [
                      {
                          "key": "INTERNAL_ID",
                          "value": "4dbc2fad-1692-43b0-9d86-a51ad395c342"
                      }
                  ],
                  "finality": {
                      "displayName": "Compartilhamento de Dados",
                      "finalityId": "3c866276-aa07-434d-beb7-8e859a70ecf7"
                  },
                  "deadLines": [
                      {
                          "total": 6,
                          "type": "MONTHS",
                          "expirationDateTime": "2022-04-13T12:31:29.476Z"
                      },
                      {
                          "total": 12,
                          "type": "MONTHS",
                          "expirationDateTime": "2022-10-13T12:31:29.476Z"
                      }
                  ]
              }
          ]

### PATCH [PATCH]

+ Response 302 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          [
              {
                "redirect_uri": "http://localhost:8080/?client_id=39f9fc48-2a28-4025-b029-d347916177f6&scope=accounts%20customers%20invoice-financings%20financings%20loans%20credit-cards-accounts%20unarranged-accounts-overdraft%20resources%20openid%20consent:urn:bocombbm:bb7b05b5-95ab-4ea7-aaff-52d6c2f549a4&request=eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.p8KB2OaHsMGU8jDYtprzAMgaIXtrm0ppW8en1PlYy0th9WdTSJft-BZW5lSGcnKDKYbQDBGZNPJivevIdKbrjQq-XJIudm7eFauuOqYACWBiCUR8Gp4S49NYdQuJeMzo6OWOtbRYu88uhHZR6kF607VhFzewu3lIso2EhV16XcWyQUwBfd6tzz6AMrHE92v-HA91MsFpvFG7yelWC8E6m-tQMcApPkCY6Wo1z-0RyODkgAoKF3eHnv8zpTxoLH-x3N4AGtTv0-h_nsXtZBiUK2T_ei6jlQwgqqCRRLm-8o84XTBlQmgwUR0-gOjFFntVEqXWCPQ3eSuWMsm7D6NjZg.c8jeMBL546ljqPTe.u-5jMtGBA1RgMKYU50VMpXtfbFjUqtkq53FdmM5_bg48MUdM76ZubFLk8T5P9qxVPJ-J40i3K3Fe7fZgalLl19uzMuX2VMvU7krxjfyZGX8H8L2xmJSobmDfNNdtHXOozrcChlhouiL44Z8C0qO79qI-st5DhhRzVU78spSVY-BSwuP6JIe37fE4nNrx6Oq1p0pDkNKb7CXmurbyaws9u2aIveTGOJbGfqhdZksdm2Xj1bok-oVeqa0RvCpM2xsAbExk8YVnmr2K62ITBzvVRRO41sR8FooA8eUxsy-V25-2STxTKhK2MgZmdfPAftJUxBCkDBtwjPSuMR_MvMT7yArAPkFyH3CXpgUYNbJvqiOWWAgflc4f3QbMswBGHT2Tjjv6UiqBCu7A3XHhdMmu8kdMSYAlj2zRWhRRhgijOALgdjlcM_oOOxM2GZ-KatCzQsya4_T1pVDL6iX2gpWUl-CUsuewisYodXXUdqkMCbXZDGuxo7M1OSSnzhMtua7lEPOQNrPwOmflgjVt8mb0JnSPiO6BHntujF-JzuLJUIUEi-_3TPcFC9W75zLGp1fPZ5ajmmvdhD9VK-NNavMHKZGjKZrmsK8YHCy9ZdOyEtRoBNdArbTjpMKfUGxmUAyj_WZTN9NLNvFJRrj-xwhXyu_864S1y8St4jQqhdtHzgELurBft9DNdScll49uTyIAbps_Qjzl_4HwO4W4asC-PkgdGJI_9PquCTZy-lBD2NwmqFdKlQ-siCFg8ygUdph5QktN6MRYB_lZbzAZPrqQoYjCBkiwraSWuBbpw_R7j2uttiXunxrFW_tjvPeVpJ1DbENWqiouiDzIKVqfh11oH0TBAg9T-BUAyU0hXnw1n-H0cbFUVc4c2hhUpOIgyo5IVWUC3wvXGExlCxERM6wFq-IizSg1WSyvnG1XfeHAu2nO3bG1kmSlGzqg9uedAwxCYusy1wUsw2Ihifu3gPPsPdl7mgH2oE9dL7ycIqH0DJncq619fKcE9XOx3P4ldy4b2Vr_UNNJf0NqshAIF9muskIrtgKFjV6-9BUzVZqstxgzSwE2ek3ytNLSqcbuJ-zr4rD-UXvFhWwSaXHjQVGrG9zTsgcRR1Xk-yPbkoupA5UVJLSXKHvb734BpWWfTp_yGMonF1MSjzYan9eFzxXojhCPcL2RDoyVHcqEttnCmga2ENuoeXnM-bH5uheSoyVEDoXZ8s0Bo3MDPZar_vzAWQFeYQ3ojWxZ8yC_cZ_hFP2mSd8JRkQBDYDx7LpOL2KtTVD1h_jHuQD3urAIITwO22i4RDZ3mfQ0BLAHawQXyNvNAAEcWggCIapdNP6YglV5MqrKyR0yXiDU_XnGdfnbMPBREC-E0XZ0Ngsnq6Sn35HYD-1PiVUnLIrLRCC2xW-NZ7A_q58jqo5wot1qg59yfjX10ohiq86spJfGwncPEf-WVDhaDlEJwb6zoNUy8aR_HYerFNG_os7d37cDGPBptBh22ALmOz_GcW5WW7d-t61Nqx8_yb8yrGoj7jLcefqa9W8scDu1TP87i86Kf05TNBT9rpLfCHXPUveOzXJ-AKd2jYC9pvut3I-RD5GfVX8awiNPDO1y86DuNj-u340ke63RJkpO3KyaNdciwCqfgS8IspJtNsmQ8wDMffo7Ecktx6Flt1A8zIwjanZuFtbMCfQSXsPhC4sPkTcfBGSy0nymmcCGT3czcUKwkFM-9bpYHJIQWXOKcoEeubUHEwK2cciDo9cdIESKHducQfIpGkedAaSTxOaOz7S0m9H62O1LMaLZDemt7k-jMeXmmkIz0Ms_TnuFFdAwTDafTzVJK-xGc0zAMgahOud9NZnsbd7kR6-PjDy8FE5SvEBe-fvndZOMcT6xGa1f3bQV0G5hDvTtSe1EIXP_rHGkn5q18Zs1oRErKjHmtqj4ROZQo9Ww4LjWsw0WXAQkPhPNAVPotFJRMS5A3xeBQVXy1vLvVbmaPIRnNym3-ZC5mUYtQDDdE09cr2FQAUNWpxMRIffIpxMfoP2Jsc902o6Fda4yWRMKe0TSIg22LSgvjaLrB3Vh3i663l1gjzGqiYld3KVWiDUCfI_zN6CKAU7bL7TiLNLqtKHzSTK0E0kzPILRmeIdckYhZ1VGGNCf7PDA8EbuLHdbiG9lQcg79y3J_j5PJbWVYUIAVVtg7RP38q4IwC-daiJBR3Rn7282lH0RSWrsMaMVFD59JaX2GpcEqnBJQZO2QlfUXzwU._o23y3IbZqepwjE_Hbllfg&response_type=code%20id_token&state=4dffa4dadc87926a067f1938505ab66c59bf280fb8bc157376f979c30066f750&redirect_uri=https://auth-sandbox.hom.bocombbm.com.br/open-banking/redirect/v1/bank-callback&nonce=d95bf902a0215a41c6044f34219f96c0f382bd2804d5319cf9dc43df1dfd92a0",
                "request_id": "4dffa4dadc87926a067f1938505ab66c59bf280fb8bc157376f979c30066f750",
                "nonce": "d95bf902a0215a41c6044f34219f96c0f382bd2804d5319cf9dc43df1dfd92a0",
                "state": "4dffa4dadc87926a067f1938505ab66c59bf280fb8bc157376f979c30066f750"
              }
          ]




### Open Banking TPP - Shares [/open-banking/journey-tpp/v1/shares]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS, PATCH

### POST [POST]

+ Response 302 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          [
              {
                  "businessEntity": {
                    "document": {
                      "identification": "35764250000182",
                      "rel": "CNPJ"
                    }
                  },
                  "shareId": "6166d1a3a164ca1a52cab77c",
                  "authorisationServer": {
                    "organisationId": "4a7250ec-eac5-5d8f-b7eb-dc0e8e880203",
                    "payloadSigningCertLocationUri": "https://auth-sandbox.hom.bocombbm.com.br/jans-auth/jwks",
                    "parentAuthorisationServerId": null,
                    "notificationWebhook": null,
                    "notificationWebhookStatus": null,
                    "openIDDiscoveryDocument": "https://auth-sandbox.hom.bocombbm.com.br/jans-auth/.well-known/openid-configuration",
                    "customerFriendlyName": "BOCOM BBM",
                    "customerFriendlyDescription": "BOCOM BBM Sandbox",
                    "termsOfServiceUri": "https://www.bocombbm.com.br",
                    "autoRegistrationSupported": true,
                    "customerFriendlyLogoUri": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
                    "developerPortalUri": "https://portal-bancobbm.sensedia.com",
                    "authorisationServerId": "2c7f2ab1-9a3e-4021-9afe-7c4c796dfa9a"
                  },
                  "createDateTime": "2021-10-13T12:31:29.184393Z",
                  "lastStatusUpdate": "2021-10-13T12:31:29.1844Z",
                  "loggedUser": {
                    "document": {
                      "identification": "93109924099",
                      "rel": "CPF"
                    }
                  },
                  "resourceGroups": [
                    {
                      "resourceGroupId": "616087ea43ed64462901ca7c",
                      "dataPermissions": [
                        {
                          "detail": "Dados da conta",
                          "displayName": "Contas",
                          "permissionCode": "ACCOUNTS_READ",
                          "required": false
                        },
                        {
                          "detail": "Valor do saldo disponível",
                          "displayName": "Saldos",
                          "permissionCode": "ACCOUNTS_BALANCES_READ",
                          "required": false
                        },
                        {
                          "detail": "Identificador, valor, data de lançamento e tipo da transação (TED, DOC, Pix, pagamento de boletos etc.), tipo de operação (crédito ou débito), identificacão do pagador ou recebedor e origem ou destino da transação",
                          "displayName": "Transações",
                          "permissionCode": "ACCOUNTS_TRANSACTIONS_READ",
                          "required": false
                        },
                        {
                          "detail": "Valor do limite de cheque especial utilizado ou do adiantamento a depositante",
                          "displayName": "Limites",
                          "permissionCode": "ACCOUNTS_OVERDRAFT_LIMITS_READ",
                          "required": false
                        }
                      ],
                      "displayName": "Contas",
                      "type": "ACCOUNT"
                    },
                    {
                      "resourceGroupId": "616087f243ed64462901ca7d",
                      "dataPermissions": [
                        {
                          "detail": "Documentos de identificação - CPF, RG, etc",
                          "displayName": "Identificação da pessoa natural",
                          "permissionCode": "CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ",
                          "required": true
                        },
                        {
                          "detail": "Renda, etc",
                          "displayName": "Qualificação / Relações da pessoa natural",
                          "permissionCode": "CUSTOMERS_PERSONAL_ADITTIONALINFO_READ",
                          "required": true
                        },
                        {
                          "detail": "Documentos de identificação - CNPJ, etc",
                          "displayName": "Identificação da pessoa jurídica",
                          "permissionCode": "CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ",
                          "required": true
                        },
                        {
                          "detail": "Faturamento, etc",
                          "displayName": "Qualificação / Relações da pessoa jurídica",
                          "permissionCode": "CUSTOMERS_BUSINESS_ADITTIONALINFO_READ",
                          "required": true
                        }
                      ],
                      "displayName": "Dados Cadastrais",
                      "type": "CUSTOMER",
                      "additionalInfos": [

                      ],
                      "items": [

                      ]
                    },
                    {
                      "resourceGroupId": "616087f717e70675704ce5ff",
                      "dataPermissions": [
                        {
                          "detail": "Financiamentos de faturas",
                          "displayName": "Contratos",
                          "permissionCode": "INVOICE_FINANCINGS_READ",
                          "required": false
                        },
                        {
                          "detail": "Débito em conta corrente, boleto bancário, averbação em folha ou Pix",
                          "displayName": "Pagamentos",
                          "permissionCode": "INVOICE_FINANCINGS_PAYMENTS_READ",
                          "required": false
                        },
                        {
                          "detail": "Crédito rotativo, parcelamento de fatura, empréstimo, outros",
                          "displayName": "Parcelas / Prestações",
                          "permissionCode": "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ",
                          "required": false
                        },
                        {
                          "detail": "Valores cobrados de juros remuneratórios por atraso no pagamento da fatura, multa por atraso no pagamento da fatura, juros de mora por atraso no pagamento da fatura, IOF, crédito rotativo, parcelamento de fatura, empréstimo e outros.",
                          "displayName": "Garantias",
                          "permissionCode": "INVOICE_FINANCINGS_WARRANTIES_READ",
                          "required": false
                        }
                      ],
                      "displayName": "Operações de Crédito - Direitos Creditórios Descontados",
                      "type": "INVOICE_FINANCING",
                      "additionalInfos": [

                      ],
                      "items": [

                      ]
                    },
                    {
                      "resourceGroupId": "616087fd43ed64462901ca7e",
                      "dataPermissions": [
                        {
                          "detail": "Financiamentos",
                          "displayName": "Contratos",
                          "permissionCode": "FINANCINGS_READ",
                          "required": false
                        },
                        {
                          "detail": "Pagamentos dos financiamentos",
                          "displayName": "Pagamentos",
                          "permissionCode": "FINANCINGS_PAYMENTS_READ",
                          "required": false
                        },
                        {
                          "detail": "Agendamento de Parcelas dos financiamentos",
                          "displayName": "Parcelas / Prestações",
                          "permissionCode": "FINANCINGS_SCHEDULED_INSTALMENTS_READ",
                          "required": false
                        },
                        {
                          "detail": "Garantias dos financiamentos",
                          "displayName": "Garantias",
                          "permissionCode": "FINANCINGS_WARRANTIES_READ",
                          "required": false
                        }
                      ],
                      "displayName": "Operações de Crédito - Financiamentos",
                      "type": "FINANCING",
                      "additionalInfos": [

                      ],
                      "items": [

                      ]
                    },
                    {
                      "resourceGroupId": "6160880317e70675704ce600",
                      "dataPermissions": [
                        {
                          "detail": "Denominação, modalidade, CNPJ da fonte pagadora, número do contrato, modalidades contratadas, documento da instiuição fornecedora do crédito, número do contrato na instituição fornecedora do crédito e identificador padronizado do contrato (Ipoc)",
                          "displayName": "Contratos",
                          "permissionCode": "LOANS_READ",
                          "required": false
                        },
                        {
                          "detail": "Valores das prestações pagas e a pagar",
                          "displayName": "Pagamentos",
                          "permissionCode": "LOANS_PAYMENTS_READ",
                          "required": false
                        },
                        {
                          "detail": "Indexador, taxa pré e pós, periodicidade, tipo de juros, base de cálculo, informações adicionais, tipo de taxa",
                          "displayName": "Parcelas / Prestações",
                          "permissionCode": "LOANS_SCHEDULED_INSTALMENTS_READ",
                          "required": false
                        },
                        {
                          "detail": "Tipo, subtipo e valor original da garantia",
                          "displayName": "Garantias",
                          "permissionCode": "LOANS_WARRANTIES_READ",
                          "required": false
                        }
                      ],
                      "displayName": "Operações de Crédito - Empréstimos",
                      "type": "LOAN",
                      "additionalInfos": [

                      ],
                      "items": [

                      ]
                    },
                    {
                      "resourceGroupId": "6160880717e70675704ce601",
                      "dataPermissions": [
                        {
                          "detail": "Cartões de crédito da conta",
                          "displayName": "Cartões de Crédito",
                          "permissionCode": "CREDIT_CARDS_ACCOUNTS_READ",
                          "required": true
                        },
                        {
                          "detail": "Valor total, data de vencimento, data do pagamento, valor do pagamento mínimo, parcelamento",
                          "displayName": "Faturas",
                          "permissionCode": "CREDIT_CARDS_ACCOUNTS_BILLS_READ",
                          "required": false
                        },
                        {
                          "detail": "Pagamento, tarifa, operações de crédito contratadas no cartão, estorno, cashback, outros",
                          "displayName": "Transações por Fatura",
                          "permissionCode": "CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ",
                          "required": false
                        },
                        {
                          "detail": "Indicador dos limites de titular, adicionais, virtuais e demais cartões, se houver",
                          "displayName": "Limites",
                          "permissionCode": "CREDIT_CARDS_ACCOUNTS_LIMITS_READ",
                          "required": false
                        },
                        {
                          "detail": "Identificação da operação, tipo e status de transação, tipo da tarifa e de pagamento, identificador da parcela, tipo de operação de crédito contratada no cartão, moeda, taxa de conversão e identificador da transação na instituição financeira",
                          "displayName": "Transações",
                          "permissionCode": "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ",
                          "required": false
                        }
                      ],
                      "displayName": "Cartão de Crédito",
                      "type": "CREDIT_CARD_ACCOUNT",
                      "additionalInfos": [

                      ],
                      "items": [

                      ]
                    },
                    {
                      "resourceGroupId": "6160880e43ed64462901ca80",
                      "dataPermissions": [
                        {
                          "detail": "Adiantamento a depositantes",
                          "displayName": "Contratos",
                          "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_READ",
                          "required": false
                        },
                        {
                          "detail": "Pagamentos dos adiantamentos a depositantes",
                          "displayName": "Pagamentos",
                          "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_PAYMENTS_READ",
                          "required": false
                        },
                        {
                          "detail": "Agendamento de Parcelas dos adiantamentos a depositantes",
                          "displayName": "Parcelas / Prestações",
                          "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_SCHEDULED_INSTALMENTS_READ",
                          "required": false
                        },
                        {
                          "detail": "Garantias dos adiantamentos a depositantes",
                          "displayName": "Garantias",
                          "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_WARRANTIES_READ",
                          "required": false
                        }
                      ],
                      "displayName": "Operações de Crédito - Adiantamento a Depositantes",
                      "type": "UNARRANGED_ACCOUNT_OVERDRAFT",
                      "additionalInfos": [

                      ],
                      "items": [

                      ]
                    },
                    {
                      "resourceGroupId": "6160881143ed64462901ca81",
                      "dataPermissions": [
                        {
                          "detail": "Lista de recursos compartilhados",
                          "displayName": "Leitura de recursos",
                          "permissionCode": "RESOURCES_READ",
                          "required": true
                        }
                      ],
                      "displayName": "Lista de recursos compartilhados",
                      "type": "RESOURCE",
                      "additionalInfos": [

                      ],
                      "items": [

                      ]
                    }
                  ],
                  "shareType": "RECEIVING",
                  "status": "PENDING",
                  "additionalInfos": [
                    {
                      "key": "INTERNAL_ID",
                      "value": "4dbc2fad-1692-43b0-9d86-a51ad395c342"
                    }
                  ],
                  "finality": {
                    "displayName": "Compartilhamento de Dados",
                    "finalityId": "3c866276-aa07-434d-beb7-8e859a70ecf7"
                  },
                  "deadLines": [
                    {
                      "total": 6,
                      "type": "MONTHS",
                      "expirationDateTime": "2022-04-13T12:31:29.476447Z"
                    },
                    {
                      "total": 12,
                      "type": "MONTHS",
                      "expirationDateTime": "2022-10-13T12:31:29.476494Z"
                    }
                  ]
              }
          ]

### GET [GET]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          [
              {
                "businessEntity": {
                  "document": {
                    "identification": "35764250000182",
                    "rel": "CNPJ"
                  }
                },
                "shareId": "6160810443ed64462901ca67",
                "authorisationServer": {
                  "organisationId": "4a7250ec-eac5-5d8f-b7eb-dc0e8e880203",
                  "payloadSigningCertLocationUri": "https://auth-sandbox.hom.bocombbm.com.br/jans-auth/jwks",
                  "parentAuthorisationServerId": null,
                  "notificationWebhook": null,
                  "notificationWebhookStatus": null,
                  "openIDDiscoveryDocument": "https://auth-sandbox.hom.bocombbm.com.br/jans-auth/.well-known/openid-configuration",
                  "customerFriendlyName": "BOCOM BBM",
                  "customerFriendlyDescription": "BOCOM BBM Sandbox",
                  "termsOfServiceUri": "https://www.bocombbm.com.br",
                  "autoRegistrationSupported": true,
                  "customerFriendlyLogoUri": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
                  "developerPortalUri": "https://portal-bancobbm.sensedia.com",
                  "authorisationServerId": "2c7f2ab1-9a3e-4021-9afe-7c4c796dfa9a"
                },
                "createDateTime": "2021-10-08T17:33:53.871Z",
                "lastStatusUpdate": "2021-10-08T17:33:53.871Z",
                "loggedUser": {
                  "document": {
                    "identification": "93109924099",
                    "rel": "CPF"
                  }
                },
                "resourceGroups": [

                ],
                "shareType": "RECEIVING",
                "status": "PENDING",
                "additionalInfos": [
                  {
                    "key": "INTERNAL_ID",
                    "value": "6f844b7e-7b9d-4b91-bb2e-9db912cd3ecf"
                  }
                ],
                "finality": {
                  "displayName": "Compartilhamento de Dados",
                  "finalityId": "3c866276-aa07-434d-beb7-8e859a70ecf7"
                },
                "deadLines": [
                  {
                    "total": 6,
                    "type": "MONTHS",
                    "expirationDateTime": "2022-04-08T17:33:53.979Z"
                  },
                  {
                    "total": 12,
                    "type": "MONTHS",
                    "expirationDateTime": "2022-10-08T17:33:53.979Z"
                  }
                ]
              },
              {
                "businessEntity": {
                  "document": {
                    "identification": "35764250000182",
                    "rel": "CNPJ"
                  }
                },
                "shareId": "616087cd17e70675704ce5fd",
                "authorisationServer": {
                  "organisationId": "4a7250ec-eac5-5d8f-b7eb-dc0e8e880203",
                  "payloadSigningCertLocationUri": "https://auth-sandbox.hom.bocombbm.com.br/jans-auth/jwks",
                  "parentAuthorisationServerId": null,
                  "notificationWebhook": null,
                  "notificationWebhookStatus": null,
                  "openIDDiscoveryDocument": "https://auth-sandbox.hom.bocombbm.com.br/jans-auth/.well-known/openid-configuration",
                  "customerFriendlyName": "BOCOM BBM",
                  "customerFriendlyDescription": "BOCOM BBM Sandbox",
                  "termsOfServiceUri": "https://www.bocombbm.com.br",
                  "autoRegistrationSupported": true,
                  "customerFriendlyLogoUri": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
                  "developerPortalUri": "https://portal-bancobbm.sensedia.com",
                  "authorisationServerId": "2c7f2ab1-9a3e-4021-9afe-7c4c796dfa9a"
                },
                "createDateTime": "2021-10-08T18:02:50.954Z",
                "lastStatusUpdate": "2021-10-08T18:02:50.954Z",
                "loggedUser": {
                  "document": {
                    "identification": "93109924099",
                    "rel": "CPF"
                  }
                },
                "resourceGroups": [

                ],
                "shareType": "RECEIVING",
                "status": "PENDING",
                "additionalInfos": [
                  {
                    "key": "INTERNAL_ID",
                    "value": "3066e5f0-a9b1-44c7-bcf6-b32c8be11967"
                  }
                ],
                "finality": {
                  "displayName": "Compartilhamento de Dados",
                  "finalityId": "3c866276-aa07-434d-beb7-8e859a70ecf7"
                },
                "deadLines": [
                  {
                    "total": 6,
                    "type": "MONTHS",
                    "expirationDateTime": "2022-04-08T18:02:51.129Z"
                  },
                  {
                    "total": 12,
                    "type": "MONTHS",
                    "expirationDateTime": "2022-10-08T18:02:51.129Z"
                  }
                ]
              },
              {
                "businessEntity": {
                  "document": {
                    "identification": "35764250000182",
                    "rel": "CNPJ"
                  }
                },
                "consentId": "urn:bocombbm:bb7b05b5-95ab-4ea7-aaff-52d6c2f549a4",
                "shareId": "6160882517e70675704ce602",
                "authorisationServer": {
                  "organisationId": "4a7250ec-eac5-5d8f-b7eb-dc0e8e880203",
                  "payloadSigningCertLocationUri": "https://auth-sandbox.hom.bocombbm.com.br/jans-auth/jwks",
                  "parentAuthorisationServerId": null,
                  "notificationWebhook": null,
                  "notificationWebhookStatus": null,
                  "openIDDiscoveryDocument": "https://auth-sandbox.hom.bocombbm.com.br/jans-auth/.well-known/openid-configuration",
                  "customerFriendlyName": "BOCOM BBM",
                  "customerFriendlyDescription": "BOCOM BBM Sandbox",
                  "termsOfServiceUri": "https://www.bocombbm.com.br",
                  "autoRegistrationSupported": true,
                  "customerFriendlyLogoUri": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
                  "developerPortalUri": "https://portal-bancobbm.sensedia.com",
                  "authorisationServerId": "2c7f2ab1-9a3e-4021-9afe-7c4c796dfa9a"
                },
                "createDateTime": "2021-10-08T18:04:19.875Z",
                "expirationDateTime": "2022-10-08T18:04:23.145Z",
                "lastStatusUpdate": "2021-10-08T18:04:27.116Z",
                "loggedUser": {
                  "document": {
                    "identification": "93109924099",
                    "rel": "CPF"
                  }
                },
                "resourceGroups": [
                  {
                    "resourceGroupId": "616087ea43ed64462901ca7c",
                    "dataPermissions": [
                      {
                        "detail": "Dados da conta",
                        "displayName": "Contas",
                        "permissionCode": "ACCOUNTS_READ",
                        "required": false
                      },
                      {
                        "detail": "Valor do saldo disponível",
                        "displayName": "Saldos",
                        "permissionCode": "ACCOUNTS_BALANCES_READ",
                        "required": false
                      },
                      {
                        "detail": "Identificador, valor, data de lançamento e tipo da transação (TED, DOC, Pix, pagamento de boletos etc.), tipo de operação (crédito ou débito), identificacão do pagador ou recebedor e origem ou destino da transação",
                        "displayName": "Transações",
                        "permissionCode": "ACCOUNTS_TRANSACTIONS_READ",
                        "required": false
                      },
                      {
                        "detail": "Valor do limite de cheque especial utilizado ou do adiantamento a depositante",
                        "displayName": "Limites",
                        "permissionCode": "ACCOUNTS_OVERDRAFT_LIMITS_READ",
                        "required": false
                      }
                    ],
                    "displayName": "Contas",
                    "type": "ACCOUNT"
                  },
                  {
                    "resourceGroupId": "616087f243ed64462901ca7d",
                    "dataPermissions": [
                      {
                        "detail": "Documentos de identificação - CPF, RG, etc",
                        "displayName": "Identificação da pessoa natural",
                        "permissionCode": "CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ",
                        "required": true
                      },
                      {
                        "detail": "Renda, etc",
                        "displayName": "Qualificação / Relações da pessoa natural",
                        "permissionCode": "CUSTOMERS_PERSONAL_ADITTIONALINFO_READ",
                        "required": true
                      },
                      {
                        "detail": "Documentos de identificação - CNPJ, etc",
                        "displayName": "Identificação da pessoa jurídica",
                        "permissionCode": "CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ",
                        "required": true
                      },
                      {
                        "detail": "Faturamento, etc",
                        "displayName": "Qualificação / Relações da pessoa jurídica",
                        "permissionCode": "CUSTOMERS_BUSINESS_ADITTIONALINFO_READ",
                        "required": true
                      }
                    ],
                    "displayName": "Dados Cadastrais",
                    "type": "CUSTOMER",
                    "additionalInfos": [

                    ],
                    "items": [

                    ]
                  },
                  {
                    "resourceGroupId": "616087f717e70675704ce5ff",
                    "dataPermissions": [
                      {
                        "detail": "Financiamentos de faturas",
                        "displayName": "Contratos",
                        "permissionCode": "INVOICE_FINANCINGS_READ",
                        "required": false
                      },
                      {
                        "detail": "Valores cobrados de juros remuneratórios por atraso no pagamento da fatura, multa por atraso no pagamento da fatura, juros de mora por atraso no pagamento da fatura, IOF, crédito rotativo, parcelamento de fatura, empréstimo e outros.",
                        "displayName": "Garantias",
                        "permissionCode": "INVOICE_FINANCINGS_WARRANTIES_READ",
                        "required": false
                      },
                      {
                        "detail": "Crédito rotativo, parcelamento de fatura, empréstimo, outros",
                        "displayName": "Parcelas / Prestações",
                        "permissionCode": "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ",
                        "required": false
                      },
                      {
                        "detail": "Débito em conta corrente, boleto bancário, averbação em folha ou Pix",
                        "displayName": "Pagamentos",
                        "permissionCode": "INVOICE_FINANCINGS_PAYMENTS_READ",
                        "required": false
                      }
                    ],
                    "displayName": "Operações de Crédito - Direitos Creditórios Descontados",
                    "type": "INVOICE_FINANCING",
                    "additionalInfos": [

                    ],
                    "items": [

                    ]
                  },
                  {
                    "resourceGroupId": "616087fd43ed64462901ca7e",
                    "dataPermissions": [
                      {
                        "detail": "Financiamentos",
                        "displayName": "Contratos",
                        "permissionCode": "FINANCINGS_READ",
                        "required": false
                      },
                      {
                        "detail": "Garantias dos financiamentos",
                        "displayName": "Garantias",
                        "permissionCode": "FINANCINGS_WARRANTIES_READ",
                        "required": false
                      },
                      {
                        "detail": "Agendamento de Parcelas dos financiamentos",
                        "displayName": "Parcelas / Prestações",
                        "permissionCode": "FINANCINGS_SCHEDULED_INSTALMENTS_READ",
                        "required": false
                      },
                      {
                        "detail": "Pagamentos dos financiamentos",
                        "displayName": "Pagamentos",
                        "permissionCode": "FINANCINGS_PAYMENTS_READ",
                        "required": false
                      }
                    ],
                    "displayName": "Operações de Crédito - Financiamentos",
                    "type": "FINANCING",
                    "additionalInfos": [

                    ],
                    "items": [

                    ]
                  },
                  {
                    "resourceGroupId": "6160880317e70675704ce600",
                    "dataPermissions": [
                      {
                        "detail": "Denominação, modalidade, CNPJ da fonte pagadora, número do contrato, modalidades contratadas, documento da instiuição fornecedora do crédito, número do contrato na instituição fornecedora do crédito e identificador padronizado do contrato (Ipoc)",
                        "displayName": "Contratos",
                        "permissionCode": "LOANS_READ",
                        "required": false
                      },
                      {
                        "detail": "Tipo, subtipo e valor original da garantia",
                        "displayName": "Garantias",
                        "permissionCode": "LOANS_WARRANTIES_READ",
                        "required": false
                      },
                      {
                        "detail": "Indexador, taxa pré e pós, periodicidade, tipo de juros, base de cálculo, informações adicionais, tipo de taxa",
                        "displayName": "Parcelas / Prestações",
                        "permissionCode": "LOANS_SCHEDULED_INSTALMENTS_READ",
                        "required": false
                      },
                      {
                        "detail": "Valores das prestações pagas e a pagar",
                        "displayName": "Pagamentos",
                        "permissionCode": "LOANS_PAYMENTS_READ",
                        "required": false
                      }
                    ],
                    "displayName": "Operações de Crédito - Empréstimos",
                    "type": "LOAN",
                    "additionalInfos": [

                    ],
                    "items": [

                    ]
                  },
                  {
                    "resourceGroupId": "6160880717e70675704ce601",
                    "dataPermissions": [
                      {
                        "detail": "Cartões de crédito da conta",
                        "displayName": "Cartões de Crédito",
                        "permissionCode": "CREDIT_CARDS_ACCOUNTS_READ",
                        "required": true
                      },
                      {
                        "detail": "Valor total, data de vencimento, data do pagamento, valor do pagamento mínimo, parcelamento",
                        "displayName": "Faturas",
                        "permissionCode": "CREDIT_CARDS_ACCOUNTS_BILLS_READ",
                        "required": false
                      },
                      {
                        "detail": "Pagamento, tarifa, operações de crédito contratadas no cartão, estorno, cashback, outros",
                        "displayName": "Transações por Fatura",
                        "permissionCode": "CREDIT_CARDS_ACCOUNTS_BILLS_TRANSACTIONS_READ",
                        "required": false
                      },
                      {
                        "detail": "Indicador dos limites de titular, adicionais, virtuais e demais cartões, se houver",
                        "displayName": "Limites",
                        "permissionCode": "CREDIT_CARDS_ACCOUNTS_LIMITS_READ",
                        "required": false
                      },
                      {
                        "detail": "Identificação da operação, tipo e status de transação, tipo da tarifa e de pagamento, identificador da parcela, tipo de operação de crédito contratada no cartão, moeda, taxa de conversão e identificador da transação na instituição financeira",
                        "displayName": "Transações",
                        "permissionCode": "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ",
                        "required": false
                      }
                    ],
                    "displayName": "Cartão de Crédito",
                    "type": "CREDIT_CARD_ACCOUNT",
                    "additionalInfos": [

                    ],
                    "items": [

                    ]
                  },
                  {
                    "resourceGroupId": "6160880e43ed64462901ca80",
                    "dataPermissions": [
                      {
                        "detail": "Adiantamento a depositantes",
                        "displayName": "Contratos",
                        "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_READ",
                        "required": false
                      },
                      {
                        "detail": "Garantias dos adiantamentos a depositantes",
                        "displayName": "Garantias",
                        "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_WARRANTIES_READ",
                        "required": false
                      },
                      {
                        "detail": "Agendamento de Parcelas dos adiantamentos a depositantes",
                        "displayName": "Parcelas / Prestações",
                        "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_SCHEDULED_INSTALMENTS_READ",
                        "required": false
                      },
                      {
                        "detail": "Pagamentos dos adiantamentos a depositantes",
                        "displayName": "Pagamentos",
                        "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_PAYMENTS_READ",
                        "required": false
                      }
                    ],
                    "displayName": "Operações de Crédito - Adiantamento a Depositantes",
                    "type": "UNARRANGED_ACCOUNT_OVERDRAFT",
                    "additionalInfos": [

                    ],
                    "items": [

                    ]
                  },
                  {
                    "resourceGroupId": "6160881143ed64462901ca81",
                    "dataPermissions": [
                      {
                        "detail": "Lista de recursos compartilhados",
                        "displayName": "Leitura de recursos",
                        "permissionCode": "RESOURCES_READ",
                        "required": true
                      }
                    ],
                    "displayName": "Lista de recursos compartilhados",
                    "type": "RESOURCE",
                    "additionalInfos": [

                    ],
                    "items": [

                    ]
                  }
                ],
                "shareType": "RECEIVING",
                "status": "PENDING",
                "additionalInfos": [
                  {
                    "key": "INTERNAL_ID",
                    "value": "40375c6f-6750-4020-b94f-c6897525dc33"
                  }
                ],
                "finality": {
                  "displayName": "Compartilhamento de Dados",
                  "finalityId": "3c866276-aa07-434d-beb7-8e859a70ecf7"
                },
                "deadLines": [
                  {
                    "total": 12,
                    "type": "MONTHS",
                    "expirationDateTime": null
                  }
                ]
              }
          ]
