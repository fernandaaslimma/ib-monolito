FORMAT: 1A

## Summary - Latest transactions [/clientportfolio/v1/consolidated/transactions?limit=9&offset=0]

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
