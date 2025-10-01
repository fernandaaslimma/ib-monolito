FORMAT: 1A

## Remittances + Validator [/remittancesapi/v1/Validator]

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
              "header": {
              "errorLine": 1,
              "errorMessages": [
                "Valor errado encontrado na posição 2.  Ao invés de '2', deveria ser '1'",
                "Valor errado encontrado na posição 3.  Ao invés de 'RETORNO', deveria ser 'REMESSA'",
                "Valor errado encontrado na posição 12.  Ao invés de 'COBRAN�A', deveria ser 'COBRANCA'",
                "Valor deve ser '033' ao invés de '107'",
                "Valor errado encontrado na posição 80.  Ao invés de 'BANCO BBM', deveria ser 'SANTANDER'",
                "Valor errado encontrado na posição 101.  Ao invés de '01600000', deveria ser 'em branco'",
                "Valor errado encontrado na posição 109.  Ao invés de '00', deveria ser 'MX'",
                "Valor errado encontrado na posição 118.  Ao invés de '                                                                                                                                                                                                                                                                      070322', deveria ser 'em branco'"
              ]
              },
              "titles": [],
              "trailer": {
                  "errorLine": null,
                  "errorMessages": ["NumeroSequencialRegistroTrailer"]
              },
              "genericErros": {
                  "errorLine": null,
                  "errorMessages": [
                    "Não é possível analisar '          'em TransacaoRemessa.DescontoBonificacaoDia na linha 2: posição 83; linha 3: posição 83;",
                    "Não é possível analisar '509301'em TransacaoRemessa.DataVencimentoTitulo na linha 2: posição 121;",
                    "Não é possível analisar '   'em TransacaoRemessa.BancoCobranca na linha 2: posição 140; linha 3: posição 140;",
                    "Não é possível analisar '220000'em TransacaoRemessa.DataEmissaoTitulo na linha 2: posição 151; linha 3: posição 151;",
                    "Não é possível analisar '  0000'em TransacaoRemessa.DataLimiteDesconto na linha 2: posição 174; linha 3: posição 174;",
                    "Não é possível analisar '                                                            'em TransacaoRemessa.SacadorAvalista na linha 2: posição 335; linha 3: posição 335;",
                    "Não é possível analisar '503501'em TransacaoRemessa.DataVencimentoTitulo na linha 3: posição 121;"
                  ]
              },
              "cnabInfo": {
                  "cnpj": "",
                  "companyCode": "00000000000005103165",
                  "companyName": "NOME 296",
                  "generatedAt": "140322",
                  "sequentialRemittanceNumber": "74",
                  "issueTicket": false
              },
              "validFile": false
          }

## Remittances + Validator [/remittancesapi/v1/Validator/cnablayouts]

### OPTIONS [OPTIONS]

+ Response 204 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


### POST [GET]

+ Response 200 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          [
            {
              "layoutType": "BOCOMBBMCnab400",
              "name": "Bocom BBM CNAB 400 - Santander",
              "layoutManualUrl": "https://api.dev.bocombbm.com.br/productterms/cobranca/Manual%20Layout%20BOCOM%20BBM%20CNAB400%20Santander.pdf"
            },
            {
              "layoutType": "BOCOMBBMCnab444",
              "name": "Bocom BBM CNAB 444 - Santander",
              "layoutManualUrl": "https://api.dev.bocombbm.com.br/productterms/cobranca/Manual%20Layout%20BOCOM%20BBM%20CNAB444%20Santander.pdf"
            }
          ]