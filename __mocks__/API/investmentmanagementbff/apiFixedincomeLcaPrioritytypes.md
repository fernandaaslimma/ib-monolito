FORMAT: 1A

## lca priority types [/investmentmanagementbff/v1/api/fixedincome/lca/prioritytypes]

### OPTIONS [OPTIONS]

+ Response 200 (application/json)

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
                  "name": "Priority by Earlier Maturity Date"
              },
              {
                  "id": 2,
                  "name": "Yield"
              }
          ]
