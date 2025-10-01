FORMAT: 1A

## Summary - Type of Assets zh-CN [/clientportfolio/v1/consolidated/totals/position?Culture=zh-CN]

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
                "assetType": "CashAccount",
                "assetTypeLabel": "Cash Account",
                "date": "2018-05-04",
                "netBalance": 631409.01,
                "grossBalance": 631409.01,
                "incomeTaxBalance": 0.71,
                "iofBalance": 0,
                "grossResultBalance": 631409.01,
                "portfolioShare": 11.75
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

## Summary - Type of Assets pt-BR [/clientportfolio/v1/consolidated/totals/position?Culture=pt-BR]

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
                "assetType": "CashAccount",
                "assetTypeLabel": "Conta Corrente",
                "date": "2018-05-04",
                "netBalance": 631409.01,
                "grossBalance": 631409.01,
                "incomeTaxBalance": 0.71,
                "iofBalance": 0,
                "grossResultBalance": 631409.01,
                "portfolioShare": 21.75
            },
            {
                "assetType": "FixedIncome",
                "assetTypeLabel": "Renda Fixa",
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
                "assetTypeLabel": "Fundos",
                "date": "2018-05-04",
                "netBalance": 476773.52,
                "grossBalance": 483106.57,
                "incomeTaxBalance": 6333.05,
                "iofBalance": 0,
                "grossResultBalance": 38311.11,
                "portfolioShare": 20.2
            }
        ]

## Summary - Type of Assets en-US [/clientportfolio/v1/consolidated/totals/position?Culture=en-US]

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
                "assetType": "CashAccount",
                "assetTypeLabel": "Cash Account",
                "date": "2018-05-04",
                "netBalance": 631409.01,
                "grossBalance": 631409.01,
                "incomeTaxBalance": 0.71,
                "iofBalance": 0,
                "grossResultBalance": 631409.01,
                "portfolioShare": 2.75
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

## Summary - Asset Class - en-US [/clientportfolio/v1/consolidated/totals/position?groupBy=AssetClass&Culture=en-US]

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

## Summary - Asset Class - pt-BR [/clientportfolio/v1/consolidated/totals/position?groupBy=AssetClass&Culture=pt-BR]

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
            "assetClass": "Conta-corrente",
            "netBalance": 63109.01,
            "grossBalance": 63109.01,
            "grossResultBalance": 63109.01,
            "portfolioShare": 3.53
          },
          {
             "assetClass": "Renda Fixa",
            "netBalance": 1410094.65,
            "grossBalance": 1410791.08,
            "incomeTaxBalance": 696.43,
            "iofBalance": 0,
            "grossResultBalance": 147754.36,
            "portfolioShare": 78.67
          },
          {
            "assetClass": "Multimercados",
            "netBalance": 319417.5,
            "grossBalance": 325054.83,
            "incomeTaxBalance": 5637.33,
            "iofBalance": 0,
            "grossResultBalance": 25054.83,
            "portfolioShare": 17.82
          }
        ]

## Summary - Asset Class - zh-CN [/clientportfolio/v1/consolidated/totals/position?groupBy=AssetClass&Culture=zh-CN]

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

## Asset position - Fixed Income - Total [/clientportfolio/v1/consolidated/totals/position?assetType=FixedIncome]

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

## Asset position - Equities - Total [/clientportfolio/v1/consolidated/totals/position?assetType=Equity]

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
                  "assetType": "Equity",
                  "assetTypeLabel": "Equity",
                  "date": "2018-05-04",
                  "netBalance": 957554.11,
                  "grossBalance": 957554.11,
                  "portfolioShare": 20.42
              }
          ]

## Asset position - Funds - Total [/clientportfolio/v1/consolidated/totals/position?assetType=Funds]

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
                "assetType": "Funds",
                "assetTypeLabel": "Fundos",
                "date": "2021-03-01",
                "netBalance": 2288502.89,
                "grossBalance": 2304254.39,
                "incomeTaxBalance": 15751.50,
                "iofBalance": 0.00,
                "grossResultBalance": 86405.99,
                "portfolioShare": 97.02
              }
          ]
