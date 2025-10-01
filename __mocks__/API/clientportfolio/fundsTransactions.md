FORMAT: 1A

## Transactions - Funds [/clientportfolio/v1/funds/transactions?dateFrom=&dateTo=&limit=10&offset=0]

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
          Access-Control-Expose-Headers: X-Total-Count,cache-control,X-Total-Pages,pragma
          X-Total-Count: 283
          X-Total-Pages: 29


  + Body

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
