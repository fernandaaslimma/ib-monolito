FORMAT: 1A

## Foreing exchange - Pending Contracts [/esign/v1/api/Contracts/Fx]

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
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "001",
                  "type": "Buy",
                  "tradeDate": "2018-04-18",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "002",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro gdfgdsfhdfgsfgSantos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio sgddfgdfCosta",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigdsfggo Carvalho",
                                  "email": "pj_rfsodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andersdfgdfgdfon Frisone",
                                  "email": "pj_asfgndersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Rgdffdgdfgdfgamos",
                                  "email": "pj_yurasdiramos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigdfgdfgo Carvalho",
                                  "email": "pj_rofsdrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andersogdfgdfgn Frisone",
                                  "email": "pj_anderaafsonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_ydsuriramos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodridfgdfggo Carvalho",
                                  "email": "pj_rodasrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andersofdgdfgdn Frisone",
                                  "email": "pj_andeasrsonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Rfgdfgamos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "003",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "004",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "InProgress",
                          "recipients": [
                              {
                                  "status": "InProgress",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "005",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "InProgress",
                          "recipients": [
                              {
                                  "status": "InProgress",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "006",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "InProgress",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              },
                              {
                                  "status": "InProgress",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "007",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Matheus Lima",
                                  "email": "pj_matheuslima@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Pedro Quintino",
                                  "email": "pj_pedroquintino@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Barbara Schoen",
                                  "email": "pj_barbarashoen@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andre Mendes",
                                  "email": "pj_andremendes@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "008",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Matheus Lima",
                                  "email": "pj_matheuslima@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Pedro Quintino",
                                  "email": "pj_pedroquintino@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Barbara Schoen",
                                  "email": "pj_barbarashoen@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andre Mendes",
                                  "email": "pj_andremendes@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Matheus Lima",
                                  "email": "pj_matheuslima@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Pedro Quintino",
                                  "email": "pj_pedroquintino@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Barbara Schoen",
                                  "email": "pj_barbarashoen@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andre Mendes",
                                  "email": "pj_andremendes@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "009",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "010",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "011",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "012",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "013",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "014",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Matheus Lima",
                                  "email": "pj_matheuslima@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Pedro Quintino",
                                  "email": "pj_pedroquintino@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Barbara Schoen",
                                  "email": "pj_barbarashoen@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andre Mendes",
                                  "email": "pj_andremendes@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "015",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro gdfgdsfhdfgsfgSantos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio sgddfgdfCosta",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigdsfggo Carvalho",
                                  "email": "pj_rfsodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andersdfgdfgdfon Frisone",
                                  "email": "pj_asfgndersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Rgdffdgdfgdfgamos",
                                  "email": "pj_yurasdiramos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigdfgdfgo Carvalho",
                                  "email": "pj_rofsdrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andersogdfgdfgn Frisone",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_anderaafsonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_ydsuriramos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodridfgdfggo Carvalho",
                                  "email": "pj_rodasrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andersofdgdfgdn Frisone",
                                  "email": "pj_andeasrsonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Rfgdfgamos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Pedro Quintino",
                                  "email": "pj_pedroquintino@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Barbara Schoen",
                                  "email": "pj_barbarashoen@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andre Mendes",
                                  "email": "pj_andremendes@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Matheus Lima",
                                  "email": "pj_matheuslima@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "bank": {
                          "id": "341",
                          "name": "Itaú Unibanco S.A."
                      },
                      "branch": "854602",
                      "account": "708753-07",
                      "taxId": "123.456.789-01"
                  },
                  "contractId": "016",
                  "type": "Buy",
                  "tradeDate": "2018-04-18T12:18:44.3628354-03:00",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 30.227,
                  "localAmount": 58215808.24,
                  "foreignAmount": 1759689235.67048,
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 2,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Matheus Lima",
                                  "email": "pj_matheuslima@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Pedro Quintino",
                                  "email": "pj_pedroquintino@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Barbara Schoen",
                                  "email": "pj_barbarashoen@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andre Mendes",
                                  "email": "pj_andremendes@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "017",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Anderson Frisone",
                                  "email": "pj_andersonfrisone@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              },
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Matheus Lima",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_matheuslima@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpD",
                          "name": "grupo D",
                          "signOrder": 4,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Pedro Quintino",
                                  "email": "pj_pedroquintino@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Barbara Schoen",
                                  "email": "pj_barbarashoen@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Andre Mendes",
                                  "email": "pj_andremendes@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "018",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "019",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "020",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpD",
                          "name": "grupo D",
                          "signOrder": 4,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "021",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "022",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "023",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "024",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "025",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "026",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Rodrigo Carvalho",
                                  "email": "pj_rodrigocarvalho@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              },
              {
                  "destinationAccount": {
                      "name": "Gao Lin",
                      "country": "England",
                      "bank": {
                          "aba": "207485",
                          "chips": "643040",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "852264-82"
                  },
                  "intermediaryAccount": {
                      "bank": {
                          "aba": "148717",
                          "chips": "219189",
                          "swift": "asf",
                          "name": "Bank of Communications"
                      },
                      "account": "7125598-432 888924"
                  },
                  "contractId": "027",
                  "type": "Sell",
                  "tradeDate": "2018-06-21T14:11:07.0155323+00:00",
                  "localSettleDate": "2018-06-21T14:11:07.0172369+00:00",
                  "foreignSettleDate": "2018-06-21T12:11:07.0173068+00:00",
                  "event": "new",
                  "localCurrency": "BRL",
                  "foreignCurrency": "USD",
                  "rate": 3.3172,
                  "totalEffectiveRate": 3.3172,
                  "localAmount": 59361334.47,
                  "foreignAmount": 196913418.703884,
                  "fxNature": "9225-475102",
                  "relationShipType": "37596",
                  "groups": [
                      {
                          "id": "grpA",
                          "name": "grupo A",
                          "signOrder": 1,
                          "status": "Completed",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "Completed",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "signedAt": "2018-04-18T10:18:44.3645054-03:00",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpB",
                          "name": "grupo B",
                          "signOrder": 2,
                          "status": "InProgress",
                          "recipients": [
                              {
                                  "status": "InProgress",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      },
                      {
                          "id": "grpC",
                          "name": "grupo C",
                          "signOrder": 3,
                          "status": "Pending",
                          "recipients": [
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Ciro Santos",
                                  "email": "pj_cirosantos@bancobbm.com.br"
                              },
                              {
                                  "status": "Pending",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Julio Costa",
                                  "email": "pj_juliocosta@bancobbm.com.br"
                              },
                              {
                                  "status": "AlreadySigned",
                                  "embedded": false,
                                  "type": "GroupAssinante",
                                  "name": "Yuri Ramos",
                                  "email": "pj_yuriramos@bancobbm.com.br"
                              }
                          ]
                      }
                  ]
              }
          ]

## Foreing exchange - Pending Contracts - Proceed to Sign [/esign/v1/api/Contracts/Fx/{contractId}/Sign_Url]

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
              "url": "http://localhost:8080/exchanges/sign-confirmation?contractId=contractId&event=signing_complete",
              "returnUrl": "http://teste.com"
          }

## Foreing exchange - Pending Contracts - The contract was signed [/esign/v1/api/Contracts/Fx/{contractId}/Signed]

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
          }

## Foreing exchange - Contracts History - Download [/esign/v1/api/Contracts/Fx/{id}/Document_File]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### GET [GET]

+ Response 200 (application/octet-stream)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          content
