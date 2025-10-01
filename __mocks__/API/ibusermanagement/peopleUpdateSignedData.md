FORMAT: 1A

## Dados Cadastrais [/ibusermanagement/v1/people/updateSignedData_]

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
              "personalRegistrationDetails":
                  {
                      "personalReference":[
                          {
                              "name": "Paula Fernandez de Souza",
                              "kinship": "Cousin",
                              "telephone":"11-2982-0911"
                          },
                          {
                              "name": "Paula Fernandez de Souza 2",
                              "kinship": "Cousin",
                              "telephone":"11-2982-5500"
                          }
                      ],
                      "maritalStatusId":3,
                      "spouseData": [
                        {
                          "name": "Mariana Carvalho Lang",
                          "CPF":"134.987.430-88"
                        }
                      ]
                  },
              "contactAddressDetails": {
                  "address": "Rua brigadeiro Faria Limas, 124",
                  "complement": "casa 2",
                  "CEP": "22631-902",
                  "country": "Brazil",
                  "city": "São Paulo",
                  "state": "RJ"
              },
              "investmentDetails": {
              },
              "document": "12114474135",
              "givenName": "Yuari 11",
              "surname": "Ramos",
              "corpId": 66554
          }
