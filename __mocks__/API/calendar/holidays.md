FORMAT: 1A

## Calendar - holiday [/calendar/v1/holidays?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD]

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
                  "date": "2019-04-19",
                  "name": "Sexta-Feira Santa",
                  "unavailableServices":["wireTransfer","stocks"]
              },
              {
                  "date": "2019-04-21",
                  "name": "Tiradentes",
                  "unavailableServices":["wireTransfer","stocks"]
              },
              {
                  "date": "2019-04-21",
                  "name": "Páscoa",
                  "unavailableServices":["wireTransfer","stocks" ]
              },
              {
                  "date": "2019-11-20",
                  "name": "Consciência Negra",
                  "unavailableServices":["stocks"]
              }
          ]
