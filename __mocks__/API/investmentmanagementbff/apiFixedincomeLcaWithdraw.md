FORMAT: 1A

## lca withdraw [/investmentmanagementbff/v1/api/fixedincome/lca/withdraw]

### OPTIONS [OPTIONS]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### POST [POST]

+ Response 201 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          {
              "message": "Error Processing Request.",
               "showErrorToUser": true,
               "errors": [
                  {
                      "code": "12",
                      "title": "Daily limit",
                      "message": "It was not possible to carry out the redemption.\n\nFor your safety, contact your banker to carry out the transaction."
                  }
              ],
              "statusCode": 201,
              "message": "successful withdrawal",
              "payload": {
                  "type": "Resgate",
                  "date": "2020-03-27",
                  "totalGrossValue": 5646608.13,
                  "totalNetValue": 5646608.13,
                  "account": {
                    "bankCode": "107",
                    "branch": "2",
                    "id": 6017,
                    "number": "300202",
                    "verifyingDigit": "6"
                  },
                  "investmentDetails": [
                  {
                      "yieldIndex": "DI",
                      "yieldPercentual": 95,
                      "investmentId": 3170,
                      "positionId": "541470",
                      "product": "LCA",
                      "issuer": "CARLINDA Gantois",
                      "issueDate": "2019-09-06",
                      "maturityDate": "2020-09-04",
                      "grossValue": 1007324.83,
                      "netValue": 1007324.83,
                      "quantity": 1000,
                      "unitPrice": 1007.32483,
                      "yieldType": "PÓS",
                      "formattedYield": "95.00% DI"
                  }
                  ]
              }
          }
