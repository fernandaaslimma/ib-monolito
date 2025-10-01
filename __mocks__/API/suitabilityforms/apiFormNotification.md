FORMAT: 1A

## suitability notification - ?? - ?? [/suitabilityforms/v1/api/Form/notification]

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
                  "type": "SuitabilityForms",
                  "parameters": {
                     "formId": 1
                  }
              }
          ]
