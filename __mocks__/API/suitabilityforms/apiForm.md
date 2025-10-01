FORMAT: 1A

## suitability form - ?? - ?? [/suitabilityforms/v1/api/Form]

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

          {
              "formId": 1
          }

## suitability questions - ?? - ?? [/suitabilityforms/v1/api/Form/1/lastVersion/questions]

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
              "id": 1,
              "steps": [
                  {
                      "step": 1,
                      "data": {
                          "title": "Qual é a composição atual de seu Patrimônio em %?",
                          "components": [
                              {
                                  "id": 1,
                                  "step": 1,
                                  "title": "Fundos de Investimento de Renda Fixa e Referenciado DI, Poupança, Títulos Públicos e Conta Corrente"
                              },
                              {
                                  "id": 2,
                                  "step": 2,
                                  "title": "Fundos de Investimento de Renda Fixa Crédito Privado (incluindo FIDICs e Fundos de Crédito)"
                              },
                              {
                                  "id": 3,
                                  "step": 3,
                                  "title": "Ações e Fundos de Investimento em Ações"
                              },
                              {
                                  "id": 4,
                                  "step": 4,
                                  "title": "Títulos Bancários (CDBs/ LFs / LCA/LCIs etc)"
                              },
                              {
                                  "id": 5,
                                  "step": 5,
                                  "title": "Títulos Privados Corporativos (Debêntures / CRIs / CRAs/ LFs)"
                              },
                              {
                                  "id": 6,
                                  "step": 6,
                                  "title": "Fundos de Investimento Multimercado"
                              },
                              {
                                  "id": 7,
                                  "step": 7,
                                  "title": "Fundos de Previdência"
                              },
                              {
                                  "id": 8,
                                  "step": 8,
                                  "title": "Patrimônio Imobilizado: Imóveis / automóveis etc"
                              },
                              {
                                  "id": 9,
                                  "step": 9,
                                  "title": "Outros"
                              }
                          ],
                          "id": 1,
                          "className": "PercentageComposition"
                      }
                  },
                  {
                      "step": 2,
                      "data": {
                          "title": "Qual é o número de seus dependentes financeiros?",
                          "options": [
                              {
                                  "id": 1,
                                  "step": 1,
                                  "value": "Um"
                              },
                              {
                                  "id": 2,
                                  "step": 2,
                                  "value": "Dois"
                              },
                              {
                                  "id": 3,
                                  "step": 3,
                                  "value": "Três"
                              },
                              {
                                  "id": 4,
                                  "step": 4,
                                  "value": "Mais de Três"
                              }
                          ],
                          "id": 2,
                          "className": "SingleChoice"
                      }
                  }
              ]
          }
