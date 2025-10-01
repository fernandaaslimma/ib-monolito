FORMAT: 1A

## Asset position - Cash Accounts [/clientportfolio/v1/cashaccounts]

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
                      "document":"53328506110111"
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


## Asset position - Cash Accounts - Balance [/clientportfolio/v1/cashaccounts/6455/balance]

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
             "date":"2018-05-04",
             "availableBalance":600000009.01,
             "blockedBalance":0.00,
             "totalBalance":600000009.01
          }

## Asset position - Cash Accounts - Balance [/cashmanagement/v1/cashaccounts/6456/balance]

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
             "date":"2018-05-04",
             "availableBalance":456.01,
             "blockedBalance":0.00,
             "totalBalance":456.01
          }

## Asset position - Cash Accounts - Balance [/clientportfolio/v1/cashaccounts/6456/balance]

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
             "date":"2018-05-04",
             "availableBalance":456.01,
             "blockedBalance":0.00,
             "totalBalance":456.01
          }

## Transactions - Cash Accounts [/clientportfolio/v1/cashaccounts/{id}/events?dateFrom={dateFrom}&dateTo={dateTo}]

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
                  "amount": 6039.01,
                  "date": "2018-05-04",
                  "description": "string",
                  "type": "string",
                  "uri": "string"
              }
          ]

## Transactions - Cash Accounts [/clientportfolio/v1/cashaccounts/{id}/balance-history?date={date}]

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
              "date": "2018-05-04",
              "openBalance": 609.01,
              "closeBalance": 609.01
          }

## Transactions - Cash Accounts [/clientportfolio/v1/cashaccounts/6456/balance-history?date={date}]

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
              "date": "2018-05-04",
              "openBalance": 709.01,
              "closeBalance": 739.00
          }


## Transactions - Cash Accounts [/clientportfolio/v1/cashaccounts/6455/balance-history?date={date}]

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
              "date": "2018-05-04",
              "openBalance": 200.01,
              "closeBalance": 301.00
          }

## Get consolidated statements [/clientportfolio/v1/cashaccounts/1/balance-history]

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
              "content": [{
                  value: 100000,
              }]
          }
