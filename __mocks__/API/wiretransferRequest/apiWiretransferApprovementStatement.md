FORMAT: 1A

## Transfer - ?? - ?? [/wiretransferrequest/v1/api/wiretransfer/approvement/statement]

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
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "approverId": "12114474135",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "approverId": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "approverId": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": true
                          },
                          {
                              "approverId": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": true
                          },
                          {
                              "approverId": "andre.mendes@bancobbm.com.br",
                              "name": "André Mendes",
                              "hasApproved": true
                          },
                          {
                              "approverId": "pedro.quintino@bancobbm.com.br",
                              "name": "Pedro Quintino",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": true
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "andre.mendes@bancobbm.com.br",
                              "name": "André Mendes",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "086b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 200,
                      "approvers":
                      [
                          {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "086b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 201,
                      "approvers":
                      [
                          {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "outrousuario@bancobbm.com.br",
                              "name": "Outro Usuario",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "086b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 201,
                      "approvers":
                      [
                          {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "outrousuario@bancobbm.com.br",
                              "name": "Outro Usuario",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 202,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": false
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 202,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": true
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": false
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 202,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": true
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": false
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": true
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "086b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 200,
                      "approvers":
                      [
                          {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "086b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 201,
                      "approvers":
                      [
                          {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "outrousuario@bancobbm.com.br",
                              "name": "Outro Usuario",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "086b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 201,
                      "approvers":
                      [
                          {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "outrousuario@bancobbm.com.br",
                              "name": "Outro Usuario",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 202,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": false
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 202,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": true
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": false
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 202,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": true
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": false
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": true
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "086b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 200,
                      "approvers":
                      [
                          {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "086b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 201,
                      "approvers":
                      [
                          {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "outrousuario@bancobbm.com.br",
                              "name": "Outro Usuario",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "086b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 201,
                      "approvers":
                      [
                          {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "outrousuario@bancobbm.com.br",
                              "name": "Outro Usuario",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 202,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": false
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 202,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": true
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": false
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 202,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": true
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": false
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": false
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": false
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": true
                          }
                      ]
                  },
                  {
                      "transferOrderId": "986b0d3b-d3cd-11e8-b0cf-0a580af40160",
                      "originAccount": "23004311",
                      "requiredApprovements": 2,
                      "dueDate": 1541618551000,
                      "recipient":
                      {
                          "name": "GT Logística de transporte Ltda 2",
                          "bankId": "9978",
                          "bankName": "Banco Santander",
                          "bankBranch": "1916",
                          "bankAccount": "7844121",
                          "taxId": "12932522710"
                      },
                      "ammount": 203,
                      "approvers":
                      [
                           {
                              "id": "jsonFagundes@bancobbm.com.br",
                              "name": "Json Fagundes",
                              "hasApproved": false
                          },
                          {
                              "id": "eduardo.souza@bancobbm.com.br",
                              "name": "Eduardo Souza",
                              "hasApproved": true
                          },
                          {
                              "id": "lucas.fraga@bancobbm.com.br",
                              "name": "Lucas Fraga",
                              "hasApproved": true
                          },
                          {
                              "id": "matheus.souza@bancobbm.com.br",
                              "name": "Matheus Souza",
                              "hasApproved": true
                          }
                      ]
                  }
              ],
              "statusCode": 200,
              "messages": [
              "string"
              ]
          }
