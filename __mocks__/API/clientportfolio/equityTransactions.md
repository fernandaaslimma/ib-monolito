FORMAT: 1A

## Transactions - Equities [/clientportfolio/v1/equity/transactions?dateFrom=&dateTo=&limit=10&offset=0]

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
