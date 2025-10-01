FORMAT: 1A

## Transfer - Dashboard - New Transfer Confirmation [/wiretransferrequest/v1/api/wiretransfer/approvement/flow]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

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
              "content": {
                  "quantity": 2,
                  "approvers": [
                      {
                          "uid": "98300919007",
                          "name": "Yuari",
                          "permissionToSaveAccount": true
                      },
                      {
                          "uid": "68300919007",
                          "name": "teste nome",
                          "permissionToSaveAccount": true
                      },
                      {
                          "uid": "78901153009",
                          "name": "nome2",
                          "permissionToSaveAccount": true
                      },
                      {
                          "uid": "59054246081",
                          "name": "nome3",
                          "permissionToSaveAccount": true
                      }
                  ]
              },
              "statusCode": 200,
              "messages": []
          }

### GET [GET]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          {
              "content": {
                  "quantity": 2,
                  "approvers": [
                      {
                          "uid": "68300919007",
                          "name": "teste nome"
                      },
                      {
                          "uid": "78901153009",
                          "name": "nome2"
                      },
                      {
                          "uid": "59054246081",
                          "name": "nome3"
                      }
                  ]
              },
              "statusCode": 200,
              "messages": []
          }
