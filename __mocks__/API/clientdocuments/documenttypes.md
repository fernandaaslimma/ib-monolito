FORMAT: 1A

## Documents - ?? - ?? [/clientdocuments/v1/documenttypes]

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
                  "typeId": "Carteira Consolidada Mensal",
                  "name"  : "Monthly Statement"
              },
              {
                  "typeId": "Informe de Rendimentos",
                  "name"  : "Earnings Report"
              },
              {
                  "typeId": "Sem Dados",
                  "name"  : "No Data"
              }
          ]
