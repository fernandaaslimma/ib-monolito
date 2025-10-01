FORMAT: 1A

## Asset position - Funds [/clientportfolio/v1/funds/position]

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
                "investmentDate": "2020-11-20",
                "quantity": 249981.89575,
                "fundCnpj": "39.281.341/0001-18",
                "assetType": "Funds",
                "assetTypeLabel": "Fundos",
                "assetClass": "Multimercados",
                "name": "A1 HEDGE FEEDER I FIC MULTIMERCADO",
                "date": "2021-03-01",
                "investmentValue": 235922.91,
                "netBalance": 242922.91,
                "grossBalance": 242922.91,
                "incomeTaxBalance": 0.00,
                "iofBalance": 0.00,
                "grossResultBalance": -7058.99,
                "portfolioShare": 10.30
              },
              {
                "quantity": 6962.113302,
                "fundCnpj": "09.528.698/0001-97",
                "assetType": "Funds",
                "assetTypeLabel": "Fundos",
                "assetClass": "Renda Variável",
                "name": "BAHIA AM FIC MULTIMERCAD",
                "date": "2021-03-01",
                "investmentValue": 235922.91,
                "netBalance": 16215.36,
                "grossBalance": 16830.43,
                "incomeTaxBalance": 615.07,
                "iofBalance": 0.00,
                "grossResultBalance": 4100.51,
                "portfolioShare": 0.69
              },
              {
                "investmentDate": "2019-07-10",
                "quantity": 33283.916226999994,
                "fundCnpj": "40.122.253/0001-52",
                "assetType": "Funds",
                "assetTypeLabel": "Fundos",
                "assetClass": "Renda Variável",
                "name": "BAHIA AM LONG BIASED FIC MULTIMERCADO",
                "date": "2021-03-01",
                "investmentValue": 235922.91,
                "netBalance": 78892.34,
                "grossBalance": 80461.57,
                "incomeTaxBalance": 1569.23,
                "iofBalance": 0.00,
                "grossResultBalance": 10461.57,
                "portfolioShare": 3.34
              },
              {
                "investmentDate": "2018-11-29",
                "quantity": 44280.497158,
                "fundCnpj": "29.733.842/0001-34",
                "assetType": "Funds",
                "assetTypeLabel": "Fundos",
                "assetClass": "Multimercados",
                "name": "BAHIA AM MARAÚ FEEDER BOCOM BBM FIC MULTIMERCADO",
                "date": "2021-03-01",
                "investmentValue": 235922.91,
                "netBalance": 50410.95,
                "grossBalance": 50618.83,
                "incomeTaxBalance": 207.88,
                "iofBalance": 0.00,
                "grossResultBalance": 5646.27,
                "portfolioShare": 2.14
              },
              {
                "investmentDate": "2019-07-10",
                "quantity": 92014.589914,
                "fundCnpj": "29.733.842/0001-34",
                "assetType": "Funds",
                "assetTypeLabel": "Fundos",
                "assetClass": "Multimercados",
                "name": "BAHIA AM MARAÚ FEEDER BOCOM BBM FIC MULTIMERCADO",
                "date": "2021-03-01",
                "investmentValue": 235922.91,
                "netBalance": 104641.02,
                "grossBalance": 105185.61,
                "incomeTaxBalance": 544.59,
                "iofBalance": 0.00,
                "grossResultBalance": 4500.42,
                "portfolioShare": 4.44
              }
          ]
