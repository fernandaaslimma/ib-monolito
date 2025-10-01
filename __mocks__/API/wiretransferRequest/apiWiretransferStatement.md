FORMAT: 1A

## Transfer - ?? - ?? [/wiretransferrequest/v1/api/wiretransfer/statement]

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

          {
            "content":
              [
                {
                  "transferOrderId": "038b4bdf-41d9-11e9-8a7e-0a580af4038f",
                  "originAccount": "2 304020-3",
                  "requiredApprovements": 2,
                  "dueDate": 1552676400000,
                  "recipient": {
                    "name": "冠廷",
                    "bankId": "12",
                    "bankName": "Nubank",
                    "bankBranch": "121",
                    "bankAccount": "123",
                    "taxId": "12345678912",
                    "newRecipient": true,
                    "saveAccount": true
                  },
                  "ammount": 100000000000,
                  "approvers": [
                    {
                      "approverId": "12114474135",
                      "name": "Yuari",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    },
                    {
                      "approverId": "78901153009",
                      "name": "nome2",
                      "hasApproved": false,
                      "permissionToSaveAccount": false
                    },
                    {
                      "approverId": "13798150028",
                      "name": "PJ 8",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    },
                    {
                      "approverId": "59054246081",
                      "name": "nome3",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    }
                  ],
                  "status": "pendingApprovement"
                },
                {
                  "transferOrderId": "038b4bdf-41d9-11e9-8a7e-0a580af4038f",
                  "originAccount": "2 304020-3",
                  "requiredApprovements": 2,
                  "dueDate": 1552676400000,
                  "recipient": {
                    "name": "冠廷",
                    "bankId": "12",
                    "bankName": "Nubank",
                    "bankBranch": "121",
                    "bankAccount": "123",
                    "taxId": "12345678912",
                    "newRecipient": true,
                    "saveAccount": true
                  },
                  "ammount": 100000000000,
                  "approvers": [
                    {
                      "approverId": "2323213213213",
                      "name": "meu pai",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    },
                    {
                      "approverId": "78901153009",
                      "name": "zona norte",
                      "hasApproved": true,
                      "permissionToSaveAccount": false
                    },
                    {
                      "approverId": "13798150028",
                      "name": "madureira",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    },
                    {
                      "approverId": "59054246081",
                      "name": "corotinho",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    }
                  ],
                  "status": "pendingApprovement"
                },
                {
                  "transferOrderId": "06449fb0-41d9-11e9-8a7e-0a580af4038f",
                  "originAccount": "2 304020-3",
                  "requiredApprovements": 2,
                  "dueDate": 1552676400000,
                  "recipient": {
                    "name": "冠廷",
                    "bankId": "12",
                    "bankName": "Nubank",
                    "bankBranch": "121",
                    "bankAccount": "123",
                    "taxId": "12345678912",
                    "newRecipient": true,
                    "saveAccount": true
                  },
                  "ammount": 100000000000,
                  "approvers": [
                    {
                      "approverId": "68300919007",
                      "name": "teste nome",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    },
                    {
                      "approverId": "78901153009",
                      "name": "nome2",
                      "hasApproved": false,
                      "permissionToSaveAccount": false
                    },
                    {
                      "approverId": "13798150028",
                      "name": "PJ 8",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    },
                    {
                      "approverId": "59054246081",
                      "name": "nome3",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    }
                  ],
                  "status": "expired"
                },
                {
                  "transferOrderId": "06ecedd0-41d9-11e9-8a7e-0a580af4038f",
                  "originAccount": "2 304020-3",
                  "requiredApprovements": 2,
                  "dueDate": 1552676400000,
                  "recipient": {
                    "name": "冠廷",
                    "bankId": "12",
                    "bankName": "Nubank",
                    "bankBranch": "121",
                    "bankAccount": "123",
                    "taxId": "12345678912",
                    "newRecipient": true,
                    "saveAccount": true
                  },
                  "ammount": 100000000000,
                  "approvers": [
                    {
                      "approverId": "68300919007",
                      "name": "teste nome",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    },
                    {
                      "approverId": "78901153009",
                      "name": "nome2",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    },
                    {
                      "approverId": "13798150028",
                      "name": "PJ 8",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    },
                    {
                      "approverId": "59054246081",
                      "name": "nome3",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    }
                  ],
                  "status": "reproved"
                },
                {
                  "transferOrderId": "06ecedd0-41d9-11e9-8a7e-0a580af4038f",
                  "originAccount": "2 304020-3",
                  "requiredApprovements": 2,
                  "dueDate": 1552676400000,
                  "recipient": {
                    "name": "冠廷",
                    "bankId": "12",
                    "bankName": "Nubank",
                    "bankBranch": "121",
                    "bankAccount": "123",
                    "taxId": "12345678912",
                    "newRecipient": true,
                    "saveAccount": true
                  },
                  "ammount": 100000000000,
                  "approvers": [
                    {
                      "approverId": "68300919007",
                      "name": "teste nome",
                      "hasApproved": false,
                      "permissionToSaveAccount": false
                    },
                    {
                      "approverId": "78901153009",
                      "name": "nome2",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    },
                    {
                      "approverId": "13798150028",
                      "name": "PJ 8",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    },
                    {
                      "approverId": "59054246081",
                      "name": "nome3",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    }
                  ],
                  "status": "canceled"
                },
                {
                  "transferOrderId": "079e1590-41d9-11e9-8a7e-0a580af4038f",
                  "originAccount": "2 304020-3",
                  "requiredApprovements": 2,
                  "dueDate": 1552676400000,
                  "recipient": {
                    "name": "冠廷",
                    "bankId": "12",
                    "bankName": "Nubank",
                    "bankBranch": "121",
                    "bankAccount": "123",
                    "taxId": "12345678912",
                    "newRecipient": true,
                    "saveAccount": true
                  },
                  "ammount": 100000000000,
                  "approvers": [
                    {
                      "approverId": "68300919007",
                      "name": "teste nome",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    },
                    {
                      "approverId": "78901153009",
                      "name": "nome2",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    },
                    {
                      "approverId": "13798150028",
                      "name": "PJ 8",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    },
                    {
                      "approverId": "59054246081",
                      "name": "nome3",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    }
                  ],
                  "status": "waitingSettlement"
                },
                {
                  "transferOrderId": "084d6890-41d9-11e9-8a7e-0a580af4038f",
                  "originAccount": "2 304020-3",
                  "requiredApprovements": 2,
                  "dueDate": 1552676400000,
                  "recipient": {
                    "name": "冠廷",
                    "bankId": "12",
                    "bankName": "Nubank",
                    "bankBranch": "121",
                    "bankAccount": "123",
                    "taxId": "12345678912",
                    "newRecipient": true,
                    "saveAccount": true
                  },
                  "ammount": 100000000000,
                  "approvers": [
                    {
                      "approverId": "68300919007",
                      "name": "teste nome",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    },
                    {
                      "approverId": "78901153009",
                      "name": "nome2",
                      "hasApproved": false,
                      "permissionToSaveAccount": true
                    },
                    {
                      "approverId": "13798150028",
                      "name": "PJ 8",
                      "hasApproved": false,
                      "permissionToSaveAccount": false
                    },
                    {
                      "approverId": "59054246081",
                      "name": "nome3",
                      "hasApproved": false,
                      "permissionToSaveAccount": false
                    }
                  ],
                  "status": "settled"
                }
              ],
            "statusCode": 200,
            "messages": [
            "string"
            ]
          }
