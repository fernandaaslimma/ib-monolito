FORMAT: 1A

## Get Fixed Income [/torfixedincome/v1/products]

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
                  "id": 1,
                  "issuer": "Banco BOCOM BBM",
                  "issuerCnpj": "15.114.366/0002-40",
                  "riskProfile": "Conservador",
                  "riskProfileLabel": "Conservador",
                  "minimumSubscription": 1000,
                  "maximumSubscription": 500000,
                  "product": "LCA",
                  "productLabel": "LCA",
                  "yieldLabel": "102% DI",
                  "yieldIndex": "DI",
                  "yieldPercentual": 102,
                  "fixedRate": 0,
                  "liquidityDate": "2021-12-20",
                  "maturityDate": "2023-12-01",
                  "monthsToMaturity": 12,
                  "liquidityLabel": "Diária após 90 dias",
                  "incomeTaxLabel": "Isento de IR",
                  "monthsToMaturityLabel": "3 meses"
              },
              {
                  "id": 2,
                  "issuer": "Banco BOCOM BBM",
                  "issuerCnpj": "15.114.366/0002-40",
                  "riskProfile": "Conservador",
                  "riskProfileLabel": "Conservador",
                  "minimumSubscription": 1000,
                  "maximumSubscription": 500000,
                  "product": "LCA",
                  "productLabel": "LCA",
                  "yieldLabel": "105% DI",
                  "yieldIndex": "DI",
                  "yieldPercentual": 105,
                  "fixedRate": 0,
                  "liquidityDate": "2023-12-01",
                  "maturityDate": "2023-12-01",
                  "monthsToMaturity": 896,
                  "liquidityLabel": "No vencimento",
                  "incomeTaxLabel": "Isento de IR",
                  "monthsToMaturityLabel": "3 meses"
              }
          ]
