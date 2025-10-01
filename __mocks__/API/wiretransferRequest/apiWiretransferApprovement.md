FORMAT: 1A

## Transfer - ?? - ?? [/wiretransferrequest/v1/api/wiretransfer/{requistionId}/approvement/true/save/true]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### PUT [PUT]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body


            {
              "statusCode": 200,
              "messages": [
                "string"
              ]
            }

## Transfer - ?? - ?? [/wiretransferrequest/v1/api/wiretransfer/{requistionId}/approvement/true/save/false]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### PUT [PUT]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body


            {
              "statusCode": 200,
              "messages": [
                "string"
              ]
            }

## Transfer - ?? - ?? [/wiretransferrequest/v1/api/wiretransfer/038b4bdf-41d9-11e9-8a7e-0a580af4038f/approvement/true]

### OPTIONS [OPTIONS]

+ Response 400 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### GET [GET]

+ Response 400 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          {
              "content": {
                  "recipient": {
                      "name": "Eva GUILHERME",
                      "bankId": "747",
                      "bankName": "Ajinomoto 3090",
                      "bankBranch": "7637",
                      "bankAccount": "974723",
                      "taxId": "44489261006395"
                  },
                  "approvers": [
                      {
                          "approverId": "68300919007",
                          "name": "PJ 4",
                          "hasApproved": false
                      },
                      {
                          "approverId": "78901153009",
                          "name": "PJ 5",
                          "hasApproved": false
                      },
                      {
                          "approverId": "13798150028",
                          "name": "PJ 8",
                          "hasApproved": true
                      },
                      {
                          "approverId": "59054246081",
                          "name": "PJ 6",
                          "hasApproved": false
                      }
                  ],
                  "transferOrderId": "9d3b69dd-5d68-11ea-9065-161107e619aa",
                  "originAccount": "107 3 900002-8",
                  "dueDate": 1583881200000,
                  "amount": 43803.69,
                  "status": "pendingApprovement"
              },
              "statusCode": 200,
              "messages": []
          }

## Transfer - ?? - ?? [/wiretransferrequest/v1/api/wiretransfer/{requistionId}/approvement/false/save/true]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### PUT [PUT]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body


            {
              "statusCode": 200,
              "messages": [
                "string"
              ]
            }

## Transfer - ?? - ?? [/wiretransferrequest/v1/api/wiretransfer/{requistionId}/approvement/false/save/false]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### PUT [PUT]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body


            {
              "statusCode": 200,
              "messages": [
                "string"
              ]
            }
