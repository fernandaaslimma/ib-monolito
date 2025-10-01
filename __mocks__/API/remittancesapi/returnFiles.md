FORMAT: 1A

## Remittances - returnFiles [/remittancesapi/v1/returnFiles]

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
              "receivables": [
                      {
                              "id": 1059,
                              "generationDate": "2022-08-29T00:00:00",
                              "fileName": "Retorno_Fosters-home-IF_595230862374.888888888888888_1 - Copy - Copy (16) - .ret",
                              "client": { "name": "NOME 002", "document": "07066237003300" }
                      },
                      {
                              "id": 1057,
                              "generationDate": "2022-08-08T00:00:00",
                              "fileName": "888888888888888_1 - Copy - Copy (11).ret",
                              "client": { "name": "NOME 002", "document": "07066237003300" }
                      },
                      {
                              "id": 1056,
                              "generationDate": "2022-08-08T00:00:00",
                              "fileName": "888888888888888_1 - Copy - Copy (15).ret",
                              "client": { "name": "NOME 002", "document": "07066237003300" }
                      },
                      {
                              "id": 1055,
                              "generationDate": "2022-08-08T00:00:00",
                              "fileName": "888888888888888_1 - Copy - Copy (3).ret",
                              "client": { "name": "NOME 002", "document": "07066237003300" }
                      },
                      {
                              "id": 1052,
                              "generationDate": "2022-08-08T00:00:00",
                              "fileName": "888888888888888_1 - Copy - Copy (7).ret",
                              "client": { "name": "NOME 002", "document": "07066237003300" }
                      },
                      {
                              "id": 1051,
                              "generationDate": "2022-08-08T00:00:00",
                              "fileName": "888888888888888_1 - Copy - Copy (13).ret",
                              "client": { "name": "NOME 002", "document": "07066237003300" }
                      },
                      {
                              "id": 1050,
                              "generationDate": "2022-08-08T00:00:00",
                              "fileName": "888888888888888_1 - Copy (5).ret",
                              "client": { "name": "NOME 002", "document": "07066237003300" }
                      },
                      {
                              "id": 1049,
                              "generationDate": "2022-08-08T00:00:00",
                              "fileName": "888888888888888_1 - Copy - Copy (17).ret",
                              "client": { "name": "NOME 002", "document": "07066237003300" }
                      },
                      {
                              "id": 1047,
                              "generationDate": "2022-08-08T00:00:00",
                              "fileName": "888888888888888_1 - Copy - Copy (12).ret",
                              "client": { "name": "NOME 002", "document": "07066237003300" }
                      },
                      {
                              "id": 1046,
                              "generationDate": "2022-08-08T00:00:00",
                              "fileName": "888888888888888_1 - Copy (4).ret",
                              "client": { "name": "NOME 002", "document": "07066237003300" }
                      }
              ],
              "pagination": {
                      "totalPages": 6,
                      "totalPageSize": 10,
                      "totalRecords": 58
              }
          }


## Remittances - returnFiles with filter [/remittancesapi/v1/returnFiles?Page=1&PageSize=10&dateTo=2022-08-29&dateFrom=2022-08-29]

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
              "receivables": [{
                  "id": 1059,
                  "generationDate": "2022-08-29T00:00:00",
                  "fileName": "Retorno_Fosters-home-IF_595230862374.888888888888888_1 - Copy - Copy (16) - .ret",
                  "client": { "name": "NOME 002", "document": "07066237003300" }
              }],
              "pagination": { "totalPages": 1, "totalPageSize": 10, "totalRecords": 1 }
          }
