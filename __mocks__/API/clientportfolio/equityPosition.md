FORMAT: 1A

## Asset position - Equities [/clientportfolio/v1/equity/position]

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
                "name":"BBDC3 ON",
                "date":"2018-05-04",
                "netBalance":166775.11,
                "grossBalance":166775.11,
                "issueDate":"2017-08-25",
                "portfolioShare":3.56,
                "quantity": null
             },
             {
                "name":"BBDC4 PN",
                "date":"2018-05-04",
                "netBalance":790779.00,
                "grossBalance":790779.00,
                "issueDate":"2017-08-25",
                "portfolioShare":16.86,
                "quantity": 12
             }
          ]
