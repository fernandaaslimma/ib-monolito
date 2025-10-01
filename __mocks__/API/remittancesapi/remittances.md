FORMAT: 1A

## Remittances - Remittances [/remittancesapi/v1/Remittances]

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
              "remmitances": [
                      {
                              "generationDate": "2025-09-23T00:00:00",
                              "fileName": "example-400-237_pzt_04.rem",
                              "client": {
                                      "name": "EMPRESA AGRO É TECH AGRO É POP",
                                      "document": "09919706002170"
                              }
                      },
                      {
                              "generationDate": "2025-09-23T00:00:00",
                              "fileName": "example-400-237_pzt_06_cnpj_69779256000145.rem",
                              "client": {
                                      "name": "EMPRESA HOT WHEELS TOYS LTDA",
                                      "document": "69779256000145"
                              }
                      },
                      {
                              "generationDate": "2024-11-06T00:00:00",
                              "fileName": "96326676001110_3.rem",
                              "client": {
                                      "name": "NOME 002",
                                      "document": "07066237003300"
                              }
                      },
                      {
                              "generationDate": "2024-09-20T00:00:00",
                              "fileName": "9632676001110_4.rem",
                              "client": {
                                      "name": "NOME 002",
                                      "document": "07066237003300"
                              }
                      },
                      {
                              "generationDate": "2024-07-05T00:00:00",
                              "fileName": "aaaaaaaaaaaaaaa.rem",
                              "client": {
                                      "name": "NOME 002",
                                      "document": "07066237003300"
                              }
                      },
                      {
                              "generationDate": "2023-06-04T00:00:00",
                              "fileName": "888888888888888_1 - Copy - Copy.rem",
                              "client": {
                                      "name": "NOME 002",
                                      "document": "07066237003300"
                              }
                      },
                      {
                              "generationDate": "2022-11-29T00:00:00",
                              "fileName": "nome_cnab29112293300.rem",
                              "client": {
                                      "name": "TEST QA LTDA",
                                      "document": "07066237003300"
                              }
                      },
                      {
                              "generationDate": "2022-11-29T00:00:00",
                              "fileName": "nome_cnab291122102530.rem",
                              "client": {
                                      "name": "TEST QA LTDA",
                                      "document": "07066237003300"
                              }
                      },
                      {
                              "generationDate": "2022-11-23T00:00:00",
                              "fileName": "nome_cnab23112290208.rem",
                              "client": {
                                      "name": "TEST QA LTDA",
                                      "document": "07066237003300"
                              }
                      },
                      {
                              "generationDate": "2022-11-23T00:00:00",
                              "fileName": "nome_cnab23112294352.rem",
                              "client": {
                                      "name": "TEST QA LTDA",
                                      "document": "07066237003300"
                              }
                      }
              ],
              "pagination": {
                      "totalPages": 18,
                      "totalPageSize": 10,
                      "totalRecords": 177
              }
          }

### POST [POST]

+ Response 201 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          {
              "generationDate":"2022-09-21T00:00:00",
              "fileName":"TESTE_MANUAL_OK_ 210930121640.rem",
              "client": {
                      "name":"TEST QA LTDA",
                      "document":"07066237003300"
              }
          }

## Remittances - Remittances with filter [/remittancesapi/v1/Remittances?Page=1&PageSize=10&dateTo=2022-11-29&dateFrom=2022-11-29]

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
              "remmitances": [
                      {
                              "generationDate": "2022-11-29T00:00:00",
                              "fileName": "nome_cnab29112293300.rem",
                              "client": { "name": "TEST QA LTDA", "document": "07066237003300" }
                      },
                      {
                              "generationDate": "2022-11-29T00:00:00",
                              "fileName": "nome_cnab291122102530.rem",
                              "client": { "name": "TEST QA LTDA", "document": "07066237003300" }
                      }
              ],
              "pagination": {
                      "totalPages": 1,
                      "totalPageSize": 10,
                      "totalRecords": 2
              }
          }
