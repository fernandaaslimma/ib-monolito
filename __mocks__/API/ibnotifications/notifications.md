FORMAT: 1A

## ib notification - [/ibnotifications/v1/notifications]

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
                  "description":"We made some changes to the terms and conditions of use.",
                  "title":"Changing the terms and conditions of use",
                  "type":"ApproveTerms",
                  "displayMethod":"PopUp",
                  "parameters":[
                      {
                          "type":"url",
                          "url":"https:\/\/api.bocombbm.com.br\/productterms\/Termo%20de%20Ades%C3%A3o%20-%20Internet%20Banking.pdf",
                          "id":null
                      },
                      {
                          "type":"termId",
                          "url":null,
                          "id":1
                      }
                  ]
              }
          ]
