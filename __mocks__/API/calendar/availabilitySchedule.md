FORMAT: 1A

## Calendar - availabilityschedule - false [/calendar/v1/availabilityschedule?date=2021-02-10&service=wireTransfer]

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
                  "date": "2021-28-05",
                  "service": "wireTransfer",
                  "serverTime": 1622196000000,
                  "periods":[
                      {
                          "startTime": 1622192400000,
                          "endTime": 1622224800000
                      }
                  ]
              }
          ]

## Calendar - availabilityschedule - false [/calendar/v1/availabilityschedule?service=funds]

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
                  "date": "2021-28-05",
                  "service": "funds",
                  "serverTime": 1625220000000,
                  "periods":[
                      {
                          "startTime": 1625212800000,
                          "endTime": 1625256000000
                      }
                  ]
              }
          ]


## Calendar - availabilityschedule - Fixed Income [/calendar/v1/availabilityschedule?service=FixedIncome]

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
                  "date": "2021-20-08",
                  "service": "FixedIncome",
                  "serverTime": 1629464684000,
                  "periods":[
                      {
                          "startTime": 1629446684000,
                          "endTime": 1629500684000
                      }
                  ]
              }
          ]
