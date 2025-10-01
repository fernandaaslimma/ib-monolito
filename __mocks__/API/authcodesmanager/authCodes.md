FORMAT: 1A

## MFA - ?? - ?? [/authcodesmanager/v1/authcodes]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS

### POST [POST]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          {
              "id": "6815d193-a55b-42c2-a0ef-9f24732ed584",
              "type": "oob",
              "authFactorId": "kjhdsakjhgaf-dkjhbvdjk564-h",
              "actionType": "passwordreset",
              "payload": {
                  "agent": "Chrome",
                  "id": "kj198fas-jbcsa982-biqa90",
                  "local": "Rio de Janeiro + Brasil"
              }
          }

## MFA - ?? - ?? [/authcodesmanager/v1/authcodes/{ID}/approve]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS
          Access-Control-Expose-Headers: X-Message-Authentication-Code

### PUT [PUT]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS
          Access-Control-Expose-Headers: X-Message-Authentication-Code
          X-Message-Authentication-Code: jasdjasdjasd2312342


  + Body

          {
          "resp":"321321"
          }
