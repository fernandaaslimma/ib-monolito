FORMAT: 1A

## MFA - ?? - ?? [/authcodesmanager/v1/users/authfactors/ib/pj_yuriramos@bancobbm.com.br?activated=true&approved=true]

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
              "id": "e80857d6-8f81-408d-84b8-90f49b302da7",
              "defaultAuth": false,
              "authUri": "pj_franciscogoncalez@bocombbm.com.br",
              "type": "mail",
              "actions": [
                "passwordreset",
                "approvemailfactor",
                "approvemobilefactor",
                "approveinvestment",
                "approvesuitability",
                "approvetotpfactor",
                "wiretransfer",
                "approveinvestment",
                "personRegistration.confirmInformation"
              ],
              "activated": false,
              "plataformIdentifier": null,
              "approved": true,
              "isSelf": true
            },
            {
              "id": "8c82c0e1-12c4-4ba2-b9b0-b3c01265c9d4",
              "defaultAuth": false,
              "authUri": "totp",
              "type": "totp",
              "actions": [
                "passwordreset",
                "approvemobilefactor",
                "approveinvestment",
                "approvesuitability",
                "personRegistration.confirmInformation"
              ],
              "activated": true,
              "plataformIdentifier": null,
              "approved": true,
              "isSelf": false
            },
            {
              "id": "8c82c0e1-12c4-4ba2-b9b0-b3c012651234",
              "defaultAuth": true,
              "authUri": "mobile",
              "type": "mobile",
              "actions": [
                "wiretransfer",
                "passwordreset",
                "approvesuitability",
                "personRegistration.confirmInformation"
              ],
              "activated": true,
              "plataformIdentifier": null,
              "approved": true,
              "isSelf": true
            }
          ]

## MFA - ?? - ?? [/authcodesmanager/v1/AuthFactors]

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
              "authFactorID": "29c6368f-cc9b-4458-8db9-b56e62b2f4d4",
              "activationURL": "otpauth://totp/BOCOM%20BBM:pj1@bocombbm.com.br?secret=XOSONHXJDCDGSC2YX5TIXL3OIE======&issuer=BOCOM%20BBM"
          }

## MFA - ?? - ?? [/authcodesmanager/v1/authfactors/{ID}/approve]

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

          true

## MFA - ?? - ?? [/authcodesmanager/v1/authfactors/{ID}/activate]

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

          true
