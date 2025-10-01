FORMAT: 1A

### Get Funds Show Closed Funds [/torfunds/v1/funds?ShowClosedFunds=true]

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
                  "name": "BOCOM BBM 1",
                  "cnpj": "37.322.143/0001-20",
                  "description": "Aplica, no mínimo, 95% de seus recursos em cotas de fundos de diversas classes, sem o compromisso de concentração em fator de risco específico.",
                  "manager": "BOCOM BBM CCVM",
                  "administrator": "BEM DTVM",
                  "custodian": "Banco Bradesco",
                  "minimumBalance": 20000,
                  "minimumTransaction": 10000,
                  "initialInvestment": 20000,
                  "riskProfile": "Moderate",
                  "riskProfileLabel": "Moderado",
                  "qualifiedInvestor": true,
                  "allowedSubscriptions": false,
                  "notAllowedSubscriptionsMessage": "Fundo só permite aplicações por investidor qualificado.",
                  "returns": {
                      "twelveMonths": null,
                      "year": null,
                      "twentyFourMonths": null,
                      "thirtySixMonths": null,
                      "fortyEightMonths": null,
                      "sinceInception": 0.66021
                  },
                  "classType": "Credit Funds",
                  "classTypeLabel": "Fundos de Crédito",
                  "subscription": {
                      "type": "Útil",
                      "conversionDays": 0,
                      "settlementDays": 0
                  },
                  "redemption": {
                      "type": "Corrido",
                      "conversionDays": 60,
                      "settlementDays": 61
                  },
                  "benchmark": "Não definido",
                  "quotaDate": "2021-01-05",
                  "administrationFee": 0.006,
                  "performanceFee": null,
                  "inceptionDate": "2020-07-06",
                  "monthActivity": 13
              },
              {
                  "id": 2,
                  "name": "BOCOM BBM 2",
                  "cnpj": "39.997.948/0001-07",
                  "description": "Aplica seus recursos, principalmente, em cotas do BOCOM BBM CHINA FIA IE, CNPJ: 39.997.943/0001-76.",
                  "manager": "BOCOM BBM CCVM",
                  "administrator": "BEM DTVM",
                  "custodian": "Banco Bradesco",
                  "minimumBalance": 1000,
                  "minimumTransaction": 1000,
                  "initialInvestment": 1000,
                  "riskProfile": "Aggressive",
                  "riskProfileLabel": "Agressivo",
                  "qualifiedInvestor": true,
                  "allowedSubscriptions": true,
                  "notAllowedSubscriptionsMessage": "",
                  "returns": {
                      "twelveMonths": null,
                      "year": null,
                      "twentyFourMonths": null,
                      "thirtySixMonths": null,
                      "fortyEightMonths": null,
                      "sinceInception": 1.88709
                  },
                  "classType": "Equity",
                  "classTypeLabel": "Renda Variável",
                  "subscription": {
                      "type": "Útil",
                      "conversionDays": 0,
                      "settlementDays": 0
                  },
                  "redemption": {
                      "type": "Útil",
                      "conversionDays": 5,
                      "settlementDays": 6
                  },
                  "benchmark": "Não definido",
                  "quotaDate": "2021-01-05",
                  "administrationFee": 0.004,
                  "performanceFee": null,
                  "inceptionDate": "2020-12-23",
                  "monthActivity": 0
              },
              {
                  "id": 3,
                  "name": "BAHIA AM LONG BIASED FIC MULTIMERCADO",
                  "cnpj": "40.122.253/0001-52",
                  "description": "Aplica, no mínimo, 95% de seus recursos em cotas do BOCOM BBM ESG INVESTIMENTO NO EXTERIOR FI AÇÕES, CNPJ: 40.108.393/0001-76.",
                  "manager": "BOCOM BBM CCVM",
                  "administrator": "BOCOM BBM 3 CHIN ZEN IP 444 DTVM",
                  "custodian": "Banco Bradesco",
                  "minimumBalance": 1000,
                  "minimumTransaction": 1000,
                  "initialInvestment": 1000,
                  "riskProfile": "Aggressive",
                  "riskProfileLabel": "Agressivo",
                  "qualifiedInvestor": false,
                  "allowedSubscriptions": true,
                  "notAllowedSubscriptionsMessage": "",
                  "returns": {
                      "twelveMonths": 1.2,
                      "year": 1000,
                      "twentyFourMonths": 1000,
                      "thirtySixMonths": 1000,
                      "fortyEightMonths": 1,
                      "sinceInception": -0.37912
                  },
                  "classType": "Equity",
                  "classTypeLabel": "Renda Variável",
                  "subscription": {
                      "type": "Útil",
                      "conversionDays": 0,
                      "settlementDays": 0
                  },
                  "redemption": {
                      "type": "Útil",
                      "conversionDays": 5,
                      "settlementDays": 6
                  },
                  "benchmark": "Não definido",
                  "quotaDate": "2021-01-05",
                  "administrationFee": 0.004,
                  "performanceFee": null,
                  "inceptionDate": "2020-12-23",
                  "monthActivity": 13
              },
              {
                  "id": 6,
                  "name": "BAHIA AM FIC MULTIMERCADO",
                  "cnpj": "09.528.698/0001-97",
                  "description": "Aplica seus recursos principalmente em cotas de fundos de investimento geridos pela gestora e administrados pelo administrador. Pode investir em ativos financeiros negociados no exterior.",
                  "manager": "Bahia Asset Management",
                  "administrator": "BEM DTVM",
                  "custodian": "Banco Bradesco",
                  "minimumBalance": 2500,
                  "minimumTransaction": 5000,
                  "initialInvestment": 20000,
                  "riskProfile": "Moderate",
                  "riskProfileLabel": "Moderado",
                  "qualifiedInvestor": false,
                  "allowedSubscriptions": true,
                  "notAllowedSubscriptionsMessage": "",
                  "returns": {
                    "twelveMonths": -0.39549515,
                    "year": -0.14577717,
                    "twentyFourMonths": 6.868543,
                    "thirtySixMonths": 16.381308,
                    "fortyEightMonths": 33.652203,
                    "sinceInception": 737.7081
                  },
                  "classType": "Hedge Funds",
                  "classTypeLabel": "Multimercado",
                  "subscription": {
                    "type": "Útil",
                    "conversionDays": 0,
                    "settlementDays": 0
                  },
                  "redemption": {
                    "type": "Corrido",
                    "conversionDays": 20,
                    "settlementDays": 1
                  },
                  "benchmark": "CDI",
                  "quotaDate": "2021-01-28",
                  "administrationFee": 1.37,
                  "performanceFee": 20,
                  "inceptionDate": "2008-05-23"
              },
              {
                  "id": 3,
                  "name": "BOCOM BBM 3 CHIN ZEN IP 444",
                  "closedFund": false,
                  "cnpj": "40.122.253/0001-52",
                  "description": "Aplica, no mínimo, 95% de seus recursos em cotas do BOCOM BBM ESG INVESTIMENTO NO EXTERIOR FI AÇÕES, CNPJ: 40.108.393/0001-76.",
                  "manager": "BOCOM BBM CCVM",
                  "administrator": "BOCOM BBM 3 CHIN ZEN IP 444 DTVM",
                  "custodian": "Banco Bradesco",
                  "minimumBalance": 1000,
                  "minimumTransaction": 1000,
                  "initialInvestment": 1000,
                  "riskProfile": "Aggressive",
                  "riskProfileLabel": "Agressivo",
                  "qualifiedInvestor": true,
                  "allowedSubscriptions": true,
                  "notAllowedSubscriptionsMessage": "Este fundo está fechado para investimentos.",
                  "returns": {
                      "twelveMonths": 1.2,
                      "year": 1000,
                      "twentyFourMonths": 1000,
                      "thirtySixMonths": 1000,
                      "fortyEightMonths": 1,
                      "sinceInception": -0.37912
                  },
                  "classType": "Equity",
                  "classTypeLabel": "Renda Variável",
                  "subscription": {
                      "type": "Útil",
                      "conversionDays": 0,
                      "settlementDays": 0
                  },
                  "redemption": {
                      "type": "Útil",
                      "conversionDays": 5,
                      "settlementDays": 6
                  },
                  "benchmark": "Não definido",
                  "quotaDate": "2021-01-05",
                  "administrationFee": 0.004,
                  "performanceFee": null,
                  "inceptionDate": "2020-12-23",
                  "monthActivity": 13
              },
              {
                  "id": 6,
                  "name": "BAHIA AM FIC MULTIMERCADO",
                  "closedFund": true,
                  "cnpj": "09.528.698/0001-97",
                  "description": "Aplica seus recursos principalmente em cotas de fundos de investimento geridos pela gestora e administrados pelo administrador. Pode investir em ativos financeiros negociados no exterior.",
                  "manager": "Bahia Asset Management",
                  "administrator": "BEM DTVM",
                  "custodian": "Banco Bradesco",
                  "minimumBalance": 2500,
                  "minimumTransaction": 5000,
                  "initialInvestment": 20000,
                  "riskProfile": "Moderate",
                  "riskProfileLabel": "Moderado",
                  "qualifiedInvestor": true,
                  "allowedSubscriptions": true,
                  "notAllowedSubscriptionsMessage": "Este fundo está fechado para investimentos.",
                  "returns": {
                    "twelveMonths": -0.39549515,
                    "year": -0.14577717,
                    "twentyFourMonths": 6.868543,
                    "thirtySixMonths": 16.381308,
                    "fortyEightMonths": 33.652203,
                    "sinceInception": 737.7081
                  },
                  "classType": "Hedge Funds",
                  "classTypeLabel": "Multimercado",
                  "subscription": {
                    "type": "Útil",
                    "conversionDays": 0,
                    "settlementDays": 0
                  },
                  "redemption": {
                    "type": "Corrido",
                    "conversionDays": 20,
                    "settlementDays": 1
                  },
                  "benchmark": "CDI",
                  "quotaDate": "2021-01-28",
                  "administrationFee": 1.37,
                  "performanceFee": 20,
                  "inceptionDate": "2008-05-23"
              }
          ]

## Get Funds [/torfunds/v1/funds?ShowClosedFunds=false]

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
                  "name": "BOCOM BBM 1",
                  "cnpj": "37.322.143/0001-20",
                  "description": "Aplica, no mínimo, 95% de seus recursos em cotas de fundos de diversas classes, sem o compromisso de concentração em fator de risco específico.",
                  "manager": "BOCOM BBM CCVM",
                  "administrator": "BEM DTVM",
                  "custodian": "Banco Bradesco",
                  "minimumBalance": 20000,
                  "minimumTransaction": 10000,
                  "initialInvestment": 20000,
                  "riskProfile": "Moderate",
                  "riskProfileLabel": "Moderado",
                  "qualifiedInvestor": "true",
                  "allowedSubscriptions": false,
                  "notAllowedSubscriptionsMessage": "Fundo só permite aplicações por investidor qualificado.",
                  "returns": {
                      "twelveMonths": null,
                      "year": null,
                      "twentyFourMonths": null,
                      "thirtySixMonths": null,
                      "fortyEightMonths": null,
                      "sinceInception": 0.66021
                  },
                  "classType": "Credit Funds",
                  "classTypeLabel": "Fundos de Crédito",
                  "subscription": {
                      "type": "Útil",
                      "conversionDays": 0,
                      "settlementDays": 0
                  },
                  "redemption": {
                      "type": "Corrido",
                      "conversionDays": 60,
                      "settlementDays": 61
                  },
                  "benchmark": "Não definido",
                  "quotaDate": "2021-01-05",
                  "administrationFee": 0.006,
                  "performanceFee": null,
                  "inceptionDate": "2020-07-06",
                  "monthActivity": 13
              },
              {
                  "id": 2,
                  "name": "BOCOM BBM 2",
                  "cnpj": "39.997.948/0001-07",
                  "description": "Aplica seus recursos, principalmente, em cotas do BOCOM BBM CHINA FIA IE, CNPJ: 39.997.943/0001-76.",
                  "manager": "BOCOM BBM CCVM",
                  "administrator": "BEM DTVM",
                  "custodian": "Banco Bradesco",
                  "minimumBalance": 1000,
                  "minimumTransaction": 1000,
                  "initialInvestment": 1000,
                  "riskProfile": "Aggressive",
                  "riskProfileLabel": "Agressivo",
                  "qualifiedInvestor": "true",
                  "allowedSubscriptions": true,
                  "notAllowedSubscriptionsMessage": "",
                  "returns": {
                      "twelveMonths": null,
                      "year": null,
                      "twentyFourMonths": null,
                      "thirtySixMonths": null,
                      "fortyEightMonths": null,
                      "sinceInception": 1.88709
                  },
                  "classType": "Equity",
                  "classTypeLabel": "Renda Variável",
                  "subscription": {
                      "type": "Útil",
                      "conversionDays": 0,
                      "settlementDays": 0
                  },
                  "redemption": {
                      "type": "Útil",
                      "conversionDays": 5,
                      "settlementDays": 6
                  },
                  "benchmark": "Não definido",
                  "quotaDate": "2021-01-05",
                  "administrationFee": 0.004,
                  "performanceFee": null,
                  "inceptionDate": "2020-12-23",
                  "monthActivity": 0
              },
              {
                  "id": 3,
                  "name": "BOCOM BBM 3 CHIN ZEN IP 444",
                  "cnpj": "40.122.253/0001-52",
                  "description": "Aplica, no mínimo, 95% de seus recursos em cotas do BOCOM BBM ESG INVESTIMENTO NO EXTERIOR FI AÇÕES, CNPJ: 40.108.393/0001-76.",
                  "manager": "BOCOM BBM CCVM",
                  "administrator": "BOCOM BBM 3 CHIN ZEN IP 444 DTVM",
                  "custodian": "Banco Bradesco",
                  "minimumBalance": 1000,
                  "minimumTransaction": 1000,
                  "initialInvestment": 1000,
                  "riskProfile": "Aggressive",
                  "riskProfileLabel": "Agressivo",
                  "qualifiedInvestor": "false",
                  "allowedSubscriptions": true,
                  "notAllowedSubscriptionsMessage": "",
                  "returns": {
                      "twelveMonths": 1.2,
                      "year": 1000,
                      "twentyFourMonths": 1000,
                      "thirtySixMonths": 1000,
                      "fortyEightMonths": 1,
                      "sinceInception": -0.37912
                  },
                  "classType": "Equity",
                  "classTypeLabel": "Renda Variável",
                  "subscription": {
                      "type": "Útil",
                      "conversionDays": 0,
                      "settlementDays": 0
                  },
                  "redemption": {
                      "type": "Útil",
                      "conversionDays": 5,
                      "settlementDays": 6
                  },
                  "benchmark": "Não definido",
                  "quotaDate": "2021-01-05",
                  "administrationFee": 0.004,
                  "performanceFee": null,
                  "inceptionDate": "2020-12-23",
                  "monthActivity": 13
              },
              {
                  "id": 6,
                  "name": "BAHIA AM FIC MULTIMERCADO",
                  "cnpj": "09.528.698/0001-97",
                  "description": "Aplica seus recursos principalmente em cotas de fundos de investimento geridos pela gestora e administrados pelo administrador. Pode investir em ativos financeiros negociados no exterior.",
                  "manager": "Bahia Asset Management",
                  "administrator": "BEM DTVM",
                  "custodian": "Banco Bradesco",
                  "minimumBalance": 2500,
                  "minimumTransaction": 5000,
                  "initialInvestment": 20000,
                  "riskProfile": "Moderate",
                  "riskProfileLabel": "Moderado",
                  "qualifiedInvestor": false,
                  "allowedSubscriptions": true,
                  "notAllowedSubscriptionsMessage": "",
                  "returns": {
                    "twelveMonths": -0.39549515,
                    "year": -0.14577717,
                    "twentyFourMonths": 6.868543,
                    "thirtySixMonths": 16.381308,
                    "fortyEightMonths": 33.652203,
                    "sinceInception": 737.7081
                  },
                  "classType": "Hedge Funds",
                  "classTypeLabel": "Multimercado",
                  "subscription": {
                    "type": "Útil",
                    "conversionDays": 0,
                    "settlementDays": 0
                  },
                  "redemption": {
                    "type": "Corrido",
                    "conversionDays": 20,
                    "settlementDays": 1
                  },
                  "benchmark": "CDI",
                  "quotaDate": "2021-01-28",
                  "administrationFee": 1.37,
                  "performanceFee": 20,
                  "inceptionDate": "2008-05-23"
              }
          ]
