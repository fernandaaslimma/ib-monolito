FORMAT: 1A

## Asset position - Cash Accounts [/cashmanagement/v1/cashaccounts]

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
                "id":6455,
                "bankISPB":"15114366",
                "bankCode":"107",
                "branch":2,
                "number":304020,
                "verifyingDigit":"3",
                "holders":[
                   {
                      "id":20155,
                      "name":"Masisol Consultoria e vendas LTDA.",
                      "document":"53328506110111"
                   }
                ],
                "type":"CC"
             },
             {
                "id":6456,
                "bankISPB":"15114366",
                "bankCode":"108",
                "branch":2,
                "number":304021,
                "verifyingDigit":"4",
                "holders":[
                   {
                      "id":20156,
                      "name":"cliente2741",
                      "document":"53328506110112"
                   },
                   {
                      "id":20157,
                      "name":"cliente2742",
                      "document":"53328506112"
                   }
                ],
                "type":"CC"
             },
             {
                "id":6457,
                "bankISPB":"33485541",
                "bankCode":"231",
                "branch":2,
                "number":304020,
                "verifyingDigit":"3",
                "holders":[
                   {
                      "id":20155,
                      "name":"cliente2740",
                      "document":"53328506110113"
                   }
                ],
                "type":"CC"
             }
          ]

## Asset position - Cash Accounts - Balance [/cashmanagement/v1/cashaccounts/{id}/balance]

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

          {
             "date":"2018-05-04",
             "availableBalance":123.01,
             "blockedBalance":0.00,
             "totalBalance":123.01
          }

## Asset position - Cash Accounts - Balance [/cashmanagement/v1/cashaccounts/6455/balance]

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

          {
             "date":"2018-05-04",
             "availableBalance":600000009.01,
             "blockedBalance":0,
             "totalBalance":600000009.01
          }

## Statements - Events Base URL [/cashmanagement/v1/cashaccounts/6465/statement?dateFrom={date}&dateTo={date}&onlyDaysWithTransactions=true&showFutureTransactions=undefined]

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
            Access-Control-Expose-Headers: X-Total-Count,cache-control,X-Total-Pages,pragma
            X-Total-Count: 31
            X-Total-Pages: 200
            
    + Body

            [
                {
                  "availableAmount": 6828.57,
                  "blockedAmount": 0.00,
                  "totalAmount": 6828.57,
                  "date": "2021-03-17",
                  "events": [
                    {
                      "absAmount": 0.01,
                      "amount": -0.01,
                      "date": "2021-03-11",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": true,
                      "id": 12435981,
                      "eventClass": "TransferenciaEnviada",
                      "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                      "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "string",
                          "accountNumber": "string",
                          "accountBranch": "string",
                          "accountType": "string",
                          "bankISPB": "string",
                          "bankCode": "480",
                          "partyName": "Kimberly Kaminski Melo de Lima Henique",
                          "partyDocument": "11111111111"
                      }
                    }
                  ]
                },
                {
                  "availableAmount": 6828.58,
                  "blockedAmount": 0.00,
                  "totalAmount": 6828.58,
                  "date": "2021-03-16",
                  "events": [
                    {
                      "absAmount": 0.01,
                      "amount": -0.01,
                      "date": "2021-03-10",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": true,
                      "id": 12435937,
                      "eventClass": "TransferenciaEnviada",
                      "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                      "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "string",
                          "accountNumber": "string",
                          "accountBranch": "string",
                          "accountType": "string",
                          "bankISPB": "string",
                          "bankCode": "string",
                          "partyName": "Ricardo de Nobrega",
                          "partyDocument": "11111111111"
                      }
                    },
                    {
                      "absAmount": 1.11,
                      "amount": -1.11,
                      "date": "2021-03-10",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": true,
                      "id": 12435939,
                      "eventClass": "TransferenciaEnviada",
                      "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                      "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "string",
                          "accountNumber": "string",
                          "accountBranch": "string",
                          "accountType": "string",
                          "bankISPB": "string",
                          "bankCode": "string",
                          "partyName": "Josenildo Henrique da Silva Neto",
                          "partyDocument": "11111111111"
                      }
                    },
                    {
                      "absAmount": 0.01,
                      "amount": -0.01,
                      "date": "2021-03-10",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": true,
                      "id": 12435941
                    },
                    {
                      "absAmount": 0.01,
                      "amount": -0.01,
                      "date": "2021-03-10",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": true,
                      "id": 12435943
                    },
                    {
                      "absAmount": 0.01,
                      "amount": -0.01,
                      "date": "2021-03-10",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": true,
                      "id": 12435945
                    }
                  ]
                },
                {
                  "availableAmount": 6829.73,
                  "blockedAmount": 0.00,
                  "totalAmount": 6829.73,
                  "date": "2021-03-09",
                  "events": [
                    {
                      "absAmount": 0.32,
                      "amount": -0.32,
                      "date": "2021-03-09",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": true,
                      "id": 12435935
                    }
                  ]
                },
                {
                  "availableAmount": 6830.05,
                  "blockedAmount": 0.00,
                  "totalAmount": 6830.05,
                  "date": "2021-03-08",
                  "events": [
                    {
                      "absAmount": 0.01,
                      "amount": -0.01,
                      "date": "2021-03-08",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": true,
                      "id": 12435925
                    }
                  ]
                },
                {
                  "availableAmount": 6830.06,
                  "blockedAmount": 0.00,
                  "totalAmount": 6830.06,
                  "date": "2021-03-04",
                  "events": [
                    {
                      "absAmount": 0.01,
                      "amount": -0.01,
                      "date": "2021-03-04",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": true,
                      "id": 12435909
                    }
                  ]
                },
                {
                  "availableAmount": 6830.07,
                  "blockedAmount": 0.00,
                  "totalAmount": 6830.07,
                  "date": "2021-02-24",
                  "events": [
                    {
                      "absAmount": 0.05,
                      "amount": -0.05,
                      "date": "2021-02-24",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": true,
                      "id": 12435867
                    }
                  ]
                }
            ]
            
            
## Statements - Events [/cashmanagement/v1/cashaccounts/6456/statement?dateFrom=2019-11-16&dateTo=2020-03-02&limit=60&offset=0&onlyDaysWithTransactions=true]

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
            Access-Control-Expose-Headers: X-Total-Count,cache-control,X-Total-Pages,pragma
            X-Total-Count: 64
            X-Total-Pages: 29
            
    + Body

            [
                
            ]

## Statements - Events [/cashmanagement/v1/cashaccounts/6457/statement?dateFrom=2019-11-16&dateTo=2020-03-02&limit=60&offset=60&onlyDaysWithTransactions=true]

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
            Access-Control-Expose-Headers: X-Total-Count,cache-control,X-Total-Pages,pragma
            X-Total-Count: 64
            X-Total-Pages: 29
            
    + Body

            [
                
                 {
                    "availableAmount": 100020000,
                    "blockedAmount": 1000,
                    "totalAmount": 1000,
                    "date": "2019-12-20T12:33:54.271Z",
                    "events": [
                      {
                        "amount": -2000,
                        "date": "2019-12-20T12:33:54.271Z",
                        "description": "Transferência entre contas de mesma titularidade",
                        "type": "Débito",
                        "id": 0,
                        "eventClass": "TransferenciaEnviada",
                        "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "string",
                          "accountNumber": "string",
                          "accountBranch": "string",
                          "accountType": "string",
                          "bankISPB": "string",
                          "bankCode": "string",
                          "partyName": "Kimberly Kaminski Melo de Lima Henrique",
                          "partyDocument": "11111111111"
                        }
                      },
                      {
                        "amount": 8000,
                        "date": "2019-12-20T12:35:54.271Z",
                        "description": "TED",
                        "type": "Débito",
                        "id": 1,
                        "eventClass": "TransferenciaEnviada",
                        "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "string",
                          "accountNumber": "string",
                          "accountBranch": "string",
                          "accountType": "string",
                          "bankISPB": "string",
                          "bankCode": "string",
                          "partyName": "Kimberly Kaminski Melo de Lima Henrique",
                          "partyDocument": "11111111111"
                        }
                      },
                      {
                        "amount": 63358000,
                        "date": "2019-12-20T12:35:54.271Z",
                        "description": "TED",
                        "type": "Débito",
                        "id": 1,
                        "eventClass": "TransferenciaEnviada",
                        "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                        }
                      },
                      {
                        "amount": 8008000,
                        "date": "2019-12-20T12:35:54.271Z",
                        "description": "TED",
                        "type": "Débito",
                        "id": 1
                      },
                      {
                        "amount": 4608000,
                        "date": "2019-12-20T12:35:54.271Z",
                        "description": "TED",
                        "type": "Débito",
                        "id": 1
                      },
                      {
                        "amount": 2058000,
                        "date": "2019-12-20T12:35:54.271Z",
                        "description": "TED",
                        "type": "Débito",
                        "id": 1
                      }
                    ]
                 },
                 {
                    "availableAmount": 20000,
                    "blockedAmount": 1000,
                    "totalAmount": 1000,
                    "date": "2019-12-21T12:33:54.271Z",
                    "events": [
                      {
                        "amount": -100000000,
                        "date": "2019-12-21T12:33:54.271Z",
                        "description": "Transferência entre contas de mesma titularidade",
                        "type": "Débito",
                        "id": 0,
                        "eventClass": "TransferenciaEnviada",
                        "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                        }
                      },
                      {
                        "amount": 8000,
                        "date": "2019-12-21T12:35:54.271Z",
                        "description": "TED",
                        "type": "Débito",
                        "id": 1,
                        "eventClass": "TransferenciaEnviada",
                        "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                        }
                      },
                      {
                        "amount": 8000,
                        "date": "2019-12-21T12:35:54.271Z",
                        "description": "TED",
                        "type": "Débito",
                        "id": 1,
                        "eventClass": "TransferenciaEnviada",
                        "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                        }
                      }
                    ]
                 },
                 {
                    "availableAmount": 20000,
                    "blockedAmount": 1000,
                    "totalAmount": 1000,
                    "date": "2019-12-22T12:33:54.271Z",
                    "events": [
                      {
                        "amount": -2000,
                        "date": "2019-12-22T12:33:54.271Z",
                        "description": "Transferência entre contas de mesma titularidade",
                        "type": "Débito",
                        "id": 0,
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                        }
                      },
                      {
                        "amount": 8000,
                        "date": "2019-12-22T12:35:54.271Z",
                        "description": "TED",
                        "type": "Débito",
                        "id": 1,
                        "eventClass": "TransferenciaEnviada",
                        "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                        }
                      }
                    ]
                 },
                 {
                    "availableAmount": 20000,
                    "blockedAmount": 1000,
                    "totalAmount": 1000,
                    "date": "2019-12-23T12:33:54.271Z",
                    "events": [
                      {
                        "amount": -2000,
                        "date": "2019-12-23T12:33:54.271Z",
                        "description": "Transferência entre contas de mesma titularidade",
                        "type": "Débito",
                        "id": 0,
                        "eventClass": "TransferenciaEnviada",
                        "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                        }
                      },
                      {
                        "amount": 8000,
                        "date": "2019-12-23T12:35:54.271Z",
                        "description": "TED",
                        "type": "Débito",
                        "id": 1,
                        "eventClass": "TransferenciaEnviada",
                        "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                        }
                      }
                    ]
                 }
            ]
            

## Statements - Events [/cashmanagement/v1/cashaccounts/6455/statement?dateFrom={date}&dateTo={date}&limit=90&offset=0&onlyDaysWithTransactions=true&showFutureTransactions=true]

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
            Access-Control-Expose-Headers: X-Total-Count,cache-control,X-Total-Pages,pragma
            X-Total-Count: 64
            X-Total-Pages: 29
            
    + Body

            [
                {
                  "availableAmount": 0.00,
                  "blockedAmount": 0.00,
                  "totalAmount": -3981.89,
                  "date": "2021-03-18",
                  "events": [
                    {
                      "absAmount": 12.42,
                      "amount": -12.42,
                      "date": "2021-03-25",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435901,
                      "recipient": {
                        "name": "Jane Lucia"
                      }
                    },
                    {
                      "absAmount": 12.42,
                      "amount": -12.42,
                      "date": "2021-03-25",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435901,
                      "recipient": {
                        "name": "Jane Lucia"
                      }
                    },
                    {
                      "absAmount": 12.42,
                      "amount": -12.42,
                      "date": "2021-03-25",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435901,
                      "recipient": {
                        "name": "Jane Lucia"
                      }
                    }
                  ]
                },
                {
                  "availableAmount": 0.00,
                  "blockedAmount": 0.00,
                  "totalAmount": -3981.89,
                  "date": "2021-03-18",
                  "events": [
                    {
                      "absAmount": 12.42,
                      "amount": -12.42,
                      "date": "2021-03-25",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435901,
                      "recipient": {
                        "name": "Jane Lucia"
                      }
                    }
                  ]
                },
                {
                  "availableAmount": 0.00,
                  "blockedAmount": 0.00,
                  "totalAmount": -3981.89,
                  "date": "2021-03-18",
                  "events": [
                    {
                      "absAmount": 12.42,
                      "amount": -12.42,
                      "date": "2021-03-25",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435901,
                      "recipient": {
                        "name": "Jane Lucia"
                      }
                    }
                  ]
                },
                {
                  "availableAmount": 0.00,
                  "blockedAmount": 0.00,
                  "totalAmount": -3981.89,
                  "date": "2021-03-18",
                  "events": [
                    {
                      "absAmount": 12.42,
                      "amount": -12.42,
                      "date": "2021-03-25",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435901,
                      "recipient": {
                        "name": "Jane Lucia"
                      }
                    }
                  ]
                },
                {
                  "availableAmount": 0.00,
                  "blockedAmount": 0.00,
                  "totalAmount": -3981.89,
                  "date": "2021-03-18",
                  "events": [
                    {
                      "absAmount": 12.42,
                      "amount": -12.42,
                      "date": "2021-03-25",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435901,
                      "recipient": {
                        "name": "Jane Lucia"
                      }
                    }
                  ]
                },
                {
                  "availableAmount": 0.00,
                  "blockedAmount": 0.00,
                  "totalAmount": -3981.89,
                  "date": "2021-03-18",
                  "events": [
                    {
                      "absAmount": 12.42,
                      "amount": -12.42,
                      "date": "2021-03-25",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435901,
                      "recipient": {
                        "name": "Jane Lucia"
                      }
                    }
                  ]
                },
                {
                  "availableAmount": 0.00,
                  "blockedAmount": 0.00,
                  "totalAmount": -3981.89,
                  "date": "2021-03-18",
                  "events": [
                    {
                      "absAmount": 12.42,
                      "amount": -12.42,
                      "date": "2021-03-25",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435901,
                      "recipient": {
                        "name": "Jane Lucia"
                      }
                    }
                  ]
                },
                {
                  "availableAmount": 0.00,
                  "blockedAmount": 0.00,
                  "totalAmount": -3981.89,
                  "date": "2021-03-18",
                  "events": [
                    {
                      "absAmount": 12.42,
                      "amount": -12.42,
                      "date": "2021-03-25",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435901,
                      "recipient": {
                        "name": "Jane Lucia"
                      }
                    }
                  ]
                },
                {
                  "availableAmount": 0.00,
                  "blockedAmount": 0.00,
                  "totalAmount": -3981.89,
                  "date": "2021-03-18",
                  "events": [
                    {
                      "absAmount": 12.42,
                      "amount": -12.42,
                      "date": "2021-03-25",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435901,
                      "recipient": {
                        "name": "Jane Lucia"
                      }
                    }
                  ]
                },
                {
                  "availableAmount": 0.00,
                  "blockedAmount": 0.00,
                  "totalAmount": -3981.89,
                  "date": "2021-03-18",
                  "events": [
                    {
                      "absAmount": 12.42,
                      "amount": -12.42,
                      "date": "2021-03-25",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435901,
                      "recipient": {
                        "name": "Jane Lucia"
                      }
                    }
                  ]
                },
                {
                  "availableAmount": 0.00,
                  "blockedAmount": 0.00,
                  "totalAmount": -3957.05,
                  "date": "2021-04-18",
                  "events": [
                    {
                      "absAmount": 1913.13,
                      "amount": 1913.13,
                      "date": "2021-02-16",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435889
                    },
                    {
                      "absAmount": 1913.13,
                      "amount": 1913.13,
                      "date": "2021-02-16",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435889
                    },{
                      "absAmount": 1913.13,
                      "amount": 1913.13,
                      "date": "2021-02-16",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435889
                    },{
                      "absAmount": 1913.13,
                      "amount": 1913.13,
                      "date": "2021-02-16",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435889
                    }
                  ]
                },
                {
                  "availableAmount": 0.00,
                  "blockedAmount": 0.00,
                  "totalAmount": -3957.05,
                  "date": "2021-04-18",
                  "events": [
                    {
                      "absAmount": 1913.13,
                      "amount": 1913.13,
                      "date": "2021-02-16",
                      "description": "Transferência Recebida",
                      "type": "Débito",
                      "settled": true,
                      "eventClass": "TransferenciaRecebida",
                      "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                      "id": 12435889,
                      "counterParty": {
                         "accountId": 0,
                         "accountVerifyingDigit": "1",
                         "accountNumber": "11111",
                         "accountBranch": "2",
                         "accountType": "string",
                         "bankISPB": "33485541",
                         "bankCode": "1",
                         "partyName": "Jane Lucia",
                         "partyDocument": "11111111111"
                        }
                    },
                    {
                      "absAmount": 12.38,
                      "amount": -12.38,
                      "date": "2021-03-24",
                      "description": "Transferência Enviada",
                      "type": "Débito",
                      "settled": false,
                      "eventClass": "TransferenciaEnviada",
                      "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                      "id": 12435897,
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                        }
                    },
                    {
                      "absAmount": 120.41,
                      "amount": -120.41,
                      "date": "2021-03-24",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435899,
                        "eventClass": "TransferenciaEnviada",
                        "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                      }
                    },
                    {
                      "absAmount": 120.41,
                      "amount": -120.41,
                      "date": "2021-03-24",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435899,
                        "eventClass": "TransferenciaEnviada",
                        "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                      }
                    },
                    {
                      "absAmount": 120.41,
                      "amount": -120.41,
                      "date": "2021-03-24",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435899,
                        "eventClass": "TransferenciaEnviada",
                        "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                      }
                    },
                    {
                      "absAmount": 120.41,
                      "amount": -120.41,
                      "date": "2021-03-24",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435899,
                        "eventClass": "TransferenciaEnviada",
                        "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                      }
                    },
                    {
                      "absAmount": 120.41,
                      "amount": -120.41,
                      "date": "2021-03-24",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435899,
                        "eventClass": "TransferenciaEnviada",
                        "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                      }
                    }
                  ]
                },
                {
                  "availableAmount": 0.00,
                  "blockedAmount": 0.00,
                  "totalAmount": -3957.05,
                  "date": "2021-04-18",
                  "events": [
                    {
                      "absAmount": 1913.13,
                      "amount": 1913.13,
                      "date": "2021-02-16",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435889
                    }
                  ]
                },
                {
                  "availableAmount": 0.00,
                  "blockedAmount": 0.00,
                  "totalAmount": -3957.05,
                  "date": "2021-04-18",
                  "events": [
                    {
                      "absAmount": 1913.13,
                      "amount": 1913.13,
                      "date": "2021-02-16",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435889
                    },
                    {
                      "absAmount": 12.38,
                      "amount": -12.38,
                      "date": "2021-03-24",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE DIFERENTES TITULARIDADES",
                      "type": "Débito",
                      "settled": false,
                      "id": 12435897
                    },
                    {
                      "absAmount": 120.41,
                      "amount": -120.41,
                      "date": "2021-03-24",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": true,
                      "id": 12435899
                    }
                  ]
                },
                {
                  "availableAmount": 0.00,
                  "blockedAmount": 0.00,
                  "totalAmount": -3957.05,
                  "date": "2021-04-18",
                  "events": [
                    {
                      "absAmount": 1913.13,
                      "amount": 1913.13,
                      "date": "2021-02-16",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": false,
                      "eventClass": "TransferenciaEnviada",
                      "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                      "id": 12435889,
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                        }
                    },
                    {
                      "absAmount": 12.38,
                      "amount": -12.38,
                      "date": "2021-03-24",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE DIFERENTES TITULARIDADES",
                      "type": "Débito",
                      "settled": false,
                      "eventClass": "TransferenciaEnviada",
                      "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                      "id": 12435897,
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                        }
                    },
                    {
                      "absAmount": 120.41,
                      "amount": -120.41,
                      "date": "2021-03-24",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": true,
                      "eventClass": "TransferenciaEnviada",
                      "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                      "id": 12435899,
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                        }
                    },
                    {
                      "absAmount": 120.41,
                      "amount": -120.41,
                      "date": "2021-03-24",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": true,
                      "eventClass": "TransferenciaEnviada",
                      "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                      "id": 12435899,
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                        }
                    },
                    {
                      "absAmount": 120.41,
                      "amount": -120.41,
                      "date": "2021-03-24",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": true,
                      "eventClass": "TransferenciaEnviada",
                      "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                      "id": 12435899,
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                        }
                    },
                    {
                      "absAmount": 120.41,
                      "amount": -120.41,
                      "date": "2021-03-24",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": true,
                      "eventClass": "TransferenciaEnviada",
                      "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                      "id": 12435899,
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                        }
                    },
                    {
                      "absAmount": 120.41,
                      "amount": -120.41,
                      "date": "2021-03-24",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": true,
                      "eventClass": "TransferenciaEnviada",
                      "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                      "id": 12435899,
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                        }
                    },
                    {
                      "absAmount": 120.41,
                      "amount": -120.41,
                      "date": "2021-03-24",
                      "description": "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
                      "type": "Débito",
                      "settled": true,
                      "eventClass": "TransferenciaEnviada",
                      "authenticationCode": "5ae6da2c-f624-4d4d-97f6-b1550f3ebe96",
                      "id": 12435899,
                        "counterParty": {
                          "accountId": 0,
                          "accountVerifyingDigit": "1",
                          "accountNumber": "11111",
                          "accountBranch": "2",
                          "accountType": "string",
                          "bankISPB": "33485541",
                          "bankCode": "1",
                          "partyName": "Jane Lucia",
                          "partyDocument": "11111111111"
                        }
                    }
                  ]
                }
            ]
            
## Statements - Balance History Base URL [/cashmanagement/v1/cashaccounts/6455/balance-history]

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
            Access-Control-Expose-Headers: X-Total-Count,cache-control,X-Total-Pages,pragma
            X-Total-Count: 31
            X-Total-Pages: 29
            
    + Body

            [
                {
                    "availableBalance": 430000,
                    "blockedBalance": 400000,
                    "totalBalance": 35000,
                    "date": "2019-12-02"
                },
                {
                    "availableBalance": 430000,
                    "blockedBalance": 400000,
                    "totalBalance": 35000,
                    "date": "2019-12-03"
                },
                {
                    "availableBalance": 430000,
                    "blockedBalance": 400000,
                    "totalBalance": 35000,
                    "date": "2019-12-04"
                },
                {
                    "availableBalance": 430000,
                    "blockedBalance": 400000,
                    "totalBalance": 35000,
                    "date": "2019-12-05"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-06"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-07"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-08"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-09"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-10"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-11"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-12"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-13"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-14"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-15"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-16"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-17"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-18"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-19"
                }
                
            ]


## Statements - Balance History [/cashmanagement/v1/cashaccounts/6455/balance-history?dateFrom=2019-12-02&dateTo=2019-12-19]

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
            Access-Control-Expose-Headers: X-Total-Count,cache-control,X-Total-Pages,pragma
            X-Total-Count: 31
            X-Total-Pages: 29
            
    + Body

            [
                {
                    "availableBalance": 430000,
                    "blockedBalance": 400000,
                    "totalBalance": 35000,
                    "date": "2019-12-02"
                },
                {
                    "availableBalance": 430000,
                    "blockedBalance": 400000,
                    "totalBalance": 35000,
                    "date": "2019-12-03"
                },
                {
                    "availableBalance": 430000,
                    "blockedBalance": 400000,
                    "totalBalance": 35000,
                    "date": "2019-12-04"
                },
                {
                    "availableBalance": 430000,
                    "blockedBalance": 400000,
                    "totalBalance": 35000,
                    "date": "2019-12-05"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-06"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-07"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-08"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-09"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-10"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-11"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-12"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-13"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-14"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-15"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-16"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-17"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-18"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-19"
                }
                
                
            ]
            
## Statements - Balance History Base URL [/cashmanagement/v1/cashaccounts/6456/balance-history]

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
            Access-Control-Expose-Headers: X-Total-Count,cache-control,X-Total-Pages,pragma
            X-Total-Count: 31
            X-Total-Pages: 29
            
    + Body

            [
                {
                    "availableBalance": 430000,
                    "blockedBalance": 400000,
                    "totalBalance": 35000,
                    "date": "2019-12-10"
                },
                {
                    "availableBalance": 78000,
                    "blockedBalance": 20000,
                    "totalBalance": 67000,
                    "date": "2019-12-15"
                }
            ]
            
## Statements - Events Base URL [/cashmanagement/v1/cashaccounts/6456/events]

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
            Access-Control-Expose-Headers: X-Total-Count,cache-control,X-Total-Pages,pragma
            X-Total-Count: 31
            X-Total-Pages: 29
            
    + Body

            [
                {
                    "type": "Crédito",
                    "description": "Repasse cobrança",
                    "counterparty": "Bocom BBM S.A",
                    "amount": 86000,
                    "date": "2019-12-10"
                },
                {
                    "type": "Débito",
                    "description": "Transferência entre contas de mesma titularidade",
                    "counterparty": "Bocom BBM S.A",
                    "amount": -75000,
                    "date": "2019-12-15"
                }
            ]
            