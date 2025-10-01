FORMAT: 1A

## Banks List - Cash Management [/cashmanagement/v1/banks]

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
                "code":"231",
                "name":"BANCO BOAVISTA INTERATLANTICO S.A.",
                "ispb":"33485541"
             },
             {
                "code":"237",
                "name":"BANCO BRADESCO S.A.",
                "ispb":"60746948"
             },
             {
                "code":"291",
                "name":"BANCO DE CREDITO NACIONAL S.A.",
                "ispb":"60898723"
             },
             {
                "code":"48",
                "name":"Banco Bemge",
                "ispb":"60811723"
             },
             {
                "code":"47",
                "name":"BANCO DO ESTADO DE SERGIPE S.A.",
                "ispb":"13009717"
             },
             {
                "code":"392",
                "name":"BANCO MERCANTIL FINASA S.A.",
                "ispb":"61065421"
             }
          ]
