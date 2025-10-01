FORMAT: 1A

## lca details [/investmentmanagementbff/v1/api/fixedincome/lca/details]

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
             "total": 30700.0,
             "positionDetails": [
             {
                "positionId": "541758",
                "product": "LCA",
                "issuer": "CARLINDA Gantois BBM IB BOCOM",
                "issueDate": "2019-10-28",
                "maturityDate": "2020-10-29",
                "grossValue": 600.0,
                "netValue": 600.0,
                "quantity": 3.0,
                "unitPrice": 200.0,
                "formattedYield":"95.00% DI"
              },
              {
                "positionId": "541758",
                "product": "LCA",
                "issuer": "CARLINDA Gantois BBM IB BOCOM",
                "issueDate": "2019-10-28",
                "maturityDate": "2020-10-29",
                "grossValue": 600.0,
                "netValue": 600.0,
                "quantity": 3.0,
                "unitPrice": 200.0,
                "formattedYield":"95.00% DI"
              },
              {
                "positionId": "541764",
                "product": "LCA",
                "issuer": "CARLINDA Gantois",
                "issueDate": "2019-10-28",
                "maturityDate": "2020-10-29",
                "grossValue": 3200.0,
                "netValue": 3200.0,
                "quantity": 4.0,
                "unitPrice": 800.0,
                "formattedYield":"95.00% DI"
              },
              {
                "positionId": "541764",
                "product": "LCA",
                "issuer": "CARLINDA Gantois",
                "issueDate": "2019-10-28",
                "maturityDate": "2020-10-29",
                "grossValue": 3200.0,
                "netValue": 3200.0,
                "quantity": 4.0,
                "unitPrice": 800.0,
                "formattedYield":"95.00% DI"
              }
             ]
          }
