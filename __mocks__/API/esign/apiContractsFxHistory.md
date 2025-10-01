FORMAT: 1A

## Foreing exchange - Contracts History [/esign/v1/api/Contracts/Fx/History]

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
