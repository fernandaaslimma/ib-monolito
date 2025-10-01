FORMAT: 1A

## lca approve MFA [/investmentmanagementbff/v1/api/fixedincome/lca/approve]

### OPTIONS [OPTIONS]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### POST [POST]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          {
              "transactions": [
                  {
                      "id": 2554,
                      "approved": true
                  },
                  {
                      "id": 2555,
                      "approved": true
                  }
              ],
              "approved": true
          }
