FORMAT: 1A

## Dados Cadastrais [/countries]

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
                "name": "Brazil",
                "code": "BRA",
                "id": 1
            },
            {
                "name": "United States of America",
                "code": "USA",
                "id": 2
            },
            {
                "name": "Spain",
                "code": "SPA",
                "id": 3
            },
            {
                "name": "Italy",
                "code": "ITA",
                "id": 4
            },
            {
                "name": "German",
                "code": "GER",
                "id": 5
            }
        ]
