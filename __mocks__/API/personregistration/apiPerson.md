FORMAT: 1A

## Dados Cadastrais [/personregistration/v1/api/person]

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
              "content": {
              "id": 123,
              "personalRegistrationDetails": {
                "name": "João da Silva",
                "cpf": "12114474135",
                "documentType": "RG",
                "documentNumber": "111111111",
                "documentIssuingBody": "DETRAN RJ",
                "documentDateOfIssue": "2010-05-20",
                "gender": "M",
                "birthCountry": "Brasil",
                "birthState": "RJ",
                "birthCity": "Rio de Janeiro",
                "dateOfBirth": "1990-05-20",
                "parentsNames": {
                  "fathersName": "José da Silva",
                  "mothersName": "Maria da Silva"
                },
                "maritalStatus": null,
                "spouse": {
                  "spouseCpf": "12345678910",
                  "spouseName": "Maria Rosa"
                }
              },
              "contacts": {
                "addresses": [
                  {
                    "type": "commercial",
                    "address": "",
                    "number": "",
                    "complement": "",
                    "cep": "",
                    "country": "",
                    "city": "",
                    "state": "",
                    "district": ""
                  },
                  {
                    "type": "home",
                    "address": "blabla",
                    "number": "43",
                    "complement": "43",
                    "cep": "44444444",
                    "country": "Brasil",
                    "city": "fafafa",
                    "state": "faf",
                    "district": "fafa"
                  }
                ],
                "telephones": [
                  {
                    "type": "home",
                    "ddd": 11,
                    "number": "33330911"
                  },
                  {
                    "type": "commercial",
                    "ddd": 11,
                    "number": "33330911"
                  },
                  {
                    "type": "blabla",
                    "ddd": 11,
                    "number": "33330911"
                  },
                  {
                    "type": "blabla",
                    "ddd": 11,
                    "number": "33330911"
                  }
                ],
                "emails": [
                  {
                    "type": "personal",
                    "address": "joaosilva@gmail."
                  },
                  {
                    "type": "commercial",
                    "address": "joaosilva@gmail."
                  }
                ]
              },
              "investmentDetails": {
                "sourceOfFunds": [
                  {
                    "name": "work",
                    "text": "Trabalho",
                    "value": true
                  },
                  {
                    "name": "inheritance",
                    "text": "Herança",
                    "value": false
                  },
                  {
                    "name": "donation",
                    "text": "Doação",
                    "value": false
                  },
                  {
                    "name": "others",
                    "text": "Outros, especificar",
                    "value": true,
                    "additionalValue": "outra origem"
                  }
                ],
                "estimatedEquity": {
                  "rangeId": null,
                  "exactValue": null,
                  "rangeOptions": [
                    {
                      "id": 1,
                      "min": 0,
                      "max": 0
                    },
                    {
                      "id": 2,
                      "min": 1,
                      "max": 20000.0
                    },
                    {
                      "id": 6,
                      "min": 50000.01,
                      "max": 100000.0
                    },
                    {
                      "id": 3,
                      "min": 10000000.01,
                      "max": 10000000000.0
                    },
                    {
                      "id": 4,
                      "min": 10000.01,
                      "max": 3000000.01
                    },
                    {
                      "id": 5,
                      "min": 3000.01,
                      "max": 30000.02
                    }
                  ]
                },
                "liquidAssets": {
                  "stocks": {
                    "rangeId": 1,
                    "rangeOptions": [
                      {
                        "id": 1,
                        "min": 0,
                        "max": 0
                      },
                      {
                        "id": 2,
                        "min": 1,
                        "max": 3455.0
                      }
                    ]
                  },
                  "funds": {
                    "rangeId": 2,
                    "rangeOptions": [
                      {
                        "id": 1,
                        "min": 0,
                        "max": 0
                      },
                      {
                        "id": 2,
                        "min": 1,
                        "max": 3455.0
                      },
                      {
                        "id": 3,
                        "min": 50000.01,
                        "max": 100000.0
                      }
                    ]
                  },
                  "bonds": {
                    "rangeId": 3,
                    "rangeOptions": [
                      {
                        "id": 1,
                        "min": 0,
                        "max": 0
                      },
                      {
                        "id": 2,
                        "min": 1,
                        "max": 3455.0
                      },
                      {
                        "id": 3,
                        "min": 10000000.01,
                        "max": 10000000000.0
                      },
                      {
                        "id": 4,
                        "min": 10000.01,
                        "max": 3000000.01
                      },
                      {
                        "id": 5,
                        "min": 3000.01,
                        "max": 30000.02
                      }
                    ]
                  },
                  "savings": {
                    "rangeId": 4,
                    "rangeOptions": [
                      {
                        "id": 1,
                        "min": 0,
                        "max": 0
                      },
                      {
                        "id": 2,
                        "min": 1,
                        "max": 3455.0
                      },
                      {
                        "id": 3,
                        "min": 10000000.01,
                        "max": 10000000000.0
                      },
                      {
                        "id": 4,
                        "min": 10000.01,
                        "max": 3000000.01
                      }
                    ]
                  }
                },
                "fixedAssets": {
                  "realProperty": {
                    "rangeId": 5,
                    "rangeOptions": [
                      {
                        "id": 1,
                        "min": 0,
                        "max": 0
                      },
                      {
                        "id": 2,
                        "min": 1,
                        "max": 3455.0
                      },
                      {
                        "id": 6,
                        "min": 50000.01,
                        "max": 100000.0
                      },
                      {
                        "id": 7,
                        "min": 100000.01,
                        "max": null
                      },
                      {
                        "id": 3,
                        "min": 10000000.01,
                        "max": 10000000000.0
                      },
                      {
                        "id": 4,
                        "min": 10000.01,
                        "max": 3000000.01
                      },
                      {
                        "id": 5,
                        "min": 3000.01,
                        "max": 30000.02
                      }
                    ]
                  },
                  "personalProperty": {
                    "rangeId": 6,
                    "rangeOptions": [
                      {
                        "id": 1,
                        "min": 0,
                        "max": 0
                      },
                      {
                        "id": 2,
                        "min": 1,
                        "max": 3455.0
                      },
                      {
                        "id": 6,
                        "min": 50000.01,
                        "max": 100000.0
                      },
                      {
                        "id": 7,
                        "min": 100000.01,
                        "max": null
                      },
                      {
                        "id": 3,
                        "min": 10000000.01,
                        "max": 10000000000.0
                      },
                      {
                        "id": 4,
                        "min": 10000.01,
                        "max": 3000000.01
                      },
                      {
                        "id": 5,
                        "min": 3000.01,
                        "max": 30000.02
                      }
                    ]
                  }
                },
                "estimatedAnnualIncome": {
                  "bonusesAndCommissions": {
                    "rangeId": 1,
                    "exactValue": null,
                    "rangeOptions": [
                      {
                        "id": 1,
                        "min": 0,
                        "max": 0
                      },
                      {
                        "id": 2,
                        "min": 1,
                        "max": 3455.0
                      },
                      {
                        "id": 6,
                        "min": 50000.01,
                        "max": 100000.0
                      },
                      {
                        "id": 7,
                        "min": 100000.01,
                        "max": null
                      },
                      {
                        "id": 3,
                        "min": 10000000.01,
                        "max": 10000000000.0
                      },
                      {
                        "id": 4,
                        "min": 10000.01,
                        "max": 3000000.01
                      },
                      {
                        "id": 5,
                        "min": 3000.01,
                        "max": 30000.02
                      }
                    ]
                  },
                  "salary": {
                    "rangeId": 5,
                    "exactValue": null,
                    "rangeOptions": [
                      {
                        "id": 1,
                        "min": 0,
                        "max": 0
                      },
                      {
                        "id": 2,
                        "min": 1,
                        "max": 3455.0
                      },
                      {
                        "id": 6,
                        "min": 50000.01,
                        "max": 100000.0
                      },
                      {
                        "id": 7,
                        "min": 100000.01,
                        "max": null
                      },
                      {
                        "id": 3,
                        "min": 10000000.01,
                        "max": 10000000000.0
                      },
                      {
                        "id": 4,
                        "min": 10000.01,
                        "max": 3000000.01
                      },
                      {
                        "id": 5,
                        "min": 3000.01,
                        "max": 30000.02
                      }
                    ]
                  },
                  "others": {
                    "rangeId": 3,
                    "exactValue": null,
                    "rangeOptions": [
                      {
                        "id": 1,
                        "min": 0,
                        "max": 0
                      },
                      {
                        "id": 2,
                        "min": 1,
                        "max": 2
                      },
                      {
                        "id": 3,
                        "min": 2.01,
                        "max": 3
                      }
                    ]
                  }
                },
                "rangeOptions": [
                  {
                    "id": 1,
                    "min": 0,
                    "max": 0
                  },
                  {
                    "id": 2,
                    "min": 1,
                    "max": 3455.0
                  },
                  {
                    "id": 6,
                    "min": 50000.01,
                    "max": 100000.0
                  },
                  {
                    "id": 7,
                    "min": 100000.01,
                    "max": null
                  },
                  {
                    "id": 3,
                    "min": 10000000.01,
                    "max": 10000000000.0
                  },
                  {
                    "id": 4,
                    "min": 10000.01,
                    "max": 3000000.01
                  },
                  {
                    "id": 5,
                    "min": 3000.01,
                    "max": 30000.02
                  }
                ]
              }
              }
          }
