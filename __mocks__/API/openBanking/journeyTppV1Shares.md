FORMAT: 1A

## Open Finance - Journey TPP Shares [/open-banking/journey-tpp/v1/shares]

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
                "consentId":"urn:bocombbm:fd55fa01-dacf-4c71-a1b7-e4cb8363f0c6",
                "shareId":"61cc3d9fbb464d0cd4a45bed",
                "organisationId":null,
                "organisationName":null,
                "createDateTime":"2021-12-29T10:51:07.448Z",
                "lastStatusUpdate":"2021-12-29T10:52:54.25Z",
                "expirationDateTime":"2022-06-29T10:51:26.675Z",
                "businessEntity":{
                   "document":{
                      "identification":"09919706002170",
                      "rel":"CNPJ"
                   }
                },
                "loggedUser":{
                   "document":{
                      "identification":"68300919007",
                      "rel":"CPF"
                   }
                },
                "resourceGroups":[
                   {
                      "resourceGroupId":"6160881143ed64462901ca81",
                      "dataPermissions":[
                         {
                            "detail":"Lista de recursos compartilhados",
                            "displayName":"Leitura de recursos",
                            "permissionCode":"RESOURCES_READ"
                         }
                      ],
                      "resources":null,
                      "displayName":"Lista de recursos compartilhados",
                      "type":"RESOURCE"
                   },
                   {
                      "resourceGroupId":"61c9c7f0b07a7d02bef5a6cb",
                      "dataPermissions":[
                         {
                            "detail":"Razão social, endereço completo, CNPJ, número de registro no país de origem, telefone, e-mail, data de abertura da empresa, informações de sócios e administradores.",
                            "displayName":"Identificação da pessoa jurídica",
                            "permissionCode":"CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ"
                         },
                         {
                            "detail":"Nome completo e nome social, endereço completo, CPF, passaporte, telefone, e-mail, documento de identificação, filiação, data de nascimento, estado civil, sexo, nacionalidade, residência brasileira, documento estrangeiro.",
                            "displayName":"Identificação da pessoa natural",
                            "permissionCode":"CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ"
                         },
                         {
                            "detail":"Ramo de atuação, data de início de relacionamento, produtos contratados, representantes.",
                            "displayName":"Qualificação / Relações da pessoa jurídica",
                            "permissionCode":"CUSTOMERS_BUSINESS_ADITTIONALINFO_READ"
                         },
                         {
                            "detail":"Renda, profissão, informações de cônjuge, produtos contratados, representantes.",
                            "displayName":"Qualificação / Relações da pessoa natural",
                            "permissionCode":"CUSTOMERS_PERSONAL_ADITTIONALINFO_READ"
                         }
                      ],
                      "resources":null,
                      "displayName":"Dados Cadastrais",
                      "type":"CUSTOMER"
                   }
                ],
                "approvers":null,
                "shareType":"RECEIVING",
                "status":"ACTIVE",
                "deadlines":[
                   {
                      "total":6,
                      "type":"MONTHS",
                      "expirationDateTime":null
                   }
                ],
                "authorisationServer":{
                   "organisationId":"4a7250ec-eac5-5d8f-b7eb-dc0e8e880203",
                   "payloadSigningCertLocationUri":"https://auth-sandbox.hom.bocombbm.com.br/jans-auth/jwks",
                   "parentAuthorisationServerId":null,
                   "openIDDiscoveryDocument":"https://auth-sandbox.hom.bocombbm.com.br/jans-auth/.well-known/openid-configuration",
                   "customerFriendlyName":"BOCOM BBM",
                   "customerFriendlyDescription":"BOCOM BBM Sandbox 1",
                   "termsOfServiceUri":"https://www.bocombbm.com.br",
                   "autoRegistrationSupported":true,
                   "customerFriendlyLogoUri":"https://www.bocombbm.com.br/Logo_BOCOM_BBM_CMYK.svg",
                   "developerPortalUri":"https://portal-bancobbm.sensedia.com",
                   "authorisationServerId":"2c7f2ab1-9a3e-4021-9afe-7c4c796dfa9a"
                },
                "additionalInfos":[
                   {
                      "key":"INTERNAL_ID",
                      "value":"1"
                   }
                ],
                "isOverdue":false
             },
             {
                "consentId":"urn:bocombbm:54d03371-7aaa-4a21-b162-642415a81e4b",
                "shareId":"61cc3eb96d4733204ff30a54",
                "organisationId":null,
                "organisationName":null,
                "createDateTime":"2021-12-29T10:55:52.435Z",
                "lastStatusUpdate":"2021-12-29T10:57:29.352Z",
                "expirationDateTime":"2022-06-29T10:55:56.802Z",
                "businessEntity":{
                   "document":{
                      "identification":"09919706002170",
                      "rel":"CNPJ"
                   }
                },
                "loggedUser":{
                   "document":{
                      "identification":"68300919007",
                      "rel":"CPF"
                   }
                },
                "resourceGroups":[
                   {
                      "resourceGroupId":"6160881143ed64462901ca81",
                      "dataPermissions":[
                         {
                            "detail":"Lista de recursos compartilhados",
                            "displayName":"Leitura de recursos",
                            "permissionCode":"RESOURCES_READ"
                         }
                      ],
                      "resources":null,
                      "displayName":"Lista de recursos compartilhados",
                      "type":"RESOURCE"
                   },
                   {
                      "resourceGroupId":"61c9c7f0b07a7d02bef5a6cb",
                      "dataPermissions":[
                         {
                            "detail":"Razão social, endereço completo, CNPJ, número de registro no país de origem, telefone, e-mail, data de abertura da empresa, informações de sócios e administradores.",
                            "displayName":"Identificação da pessoa jurídica",
                            "permissionCode":"CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ"
                         },
                         {
                            "detail":"Nome completo e nome social, endereço completo, CPF, passaporte, telefone, e-mail, documento de identificação, filiação, data de nascimento, estado civil, sexo, nacionalidade, residência brasileira, documento estrangeiro.",
                            "displayName":"Identificação da pessoa natural",
                            "permissionCode":"CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ"
                         },
                         {
                            "detail":"Ramo de atuação, data de início de relacionamento, produtos contratados, representantes.",
                            "displayName":"Qualificação / Relações da pessoa jurídica",
                            "permissionCode":"CUSTOMERS_BUSINESS_ADITTIONALINFO_READ"
                         },
                         {
                            "detail":"Renda, profissão, informações de cônjuge, produtos contratados, representantes.",
                            "displayName":"Qualificação / Relações da pessoa natural",
                            "permissionCode":"CUSTOMERS_PERSONAL_ADITTIONALINFO_READ"
                         }
                      ],
                      "resources":null,
                      "displayName":"Dados Cadastrais",
                      "type":"CUSTOMER"
                   }
                ],
                "approvers":null,
                "shareType":"RECEIVING",
                "status":"ACTIVE",
                "deadlines":[
                   {
                      "total":6,
                      "type":"MONTHS",
                      "expirationDateTime":null
                   }
                ],
                "authorisationServer":{
                   "organisationId":"4a7250ec-eac5-5d8f-b7eb-dc0e8e880203",
                   "payloadSigningCertLocationUri":"https://auth-sandbox.hom.bocombbm.com.br/jans-auth/jwks",
                   "parentAuthorisationServerId":null,
                   "openIDDiscoveryDocument":"https://auth-sandbox.hom.bocombbm.com.br/jans-auth/.well-known/openid-configuration",
                   "customerFriendlyName":"BOCOM BBM",
                   "customerFriendlyDescription":"BOCOM BBM Sandbox 1",
                   "termsOfServiceUri":"https://www.bocombbm.com.br",
                   "autoRegistrationSupported":true,
                   "customerFriendlyLogoUri":"https://www.bocombbm.com.br/Logo_BOCOM_BBM_CMYK.svg",
                   "developerPortalUri":"https://portal-bancobbm.sensedia.com",
                   "authorisationServerId":"2c7f2ab1-9a3e-4021-9afe-7c4c796dfa9a"
                },
                "additionalInfos":[
                   {
                      "key":"INTERNAL_ID",
                      "value":"1"
                   }
                ],
                "isOverdue":false
             }
          ]

### POST [POST]

+ Response 201 (application/json)

  + Headers

          Access-Control-Allow-Credentials: true
          Access-Control-Allow-Origin: http://localhost:9000
          Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS


  + Body

          {
                "businessEntity": {
                  "document": { "identification": "09919706002170", "rel": "CNPJ" }
                },
                "shareId": "639382ccefb8f63d1d66b009",
                "authorisationServer": {
                  "organisationId": "4a7250ec-eac5-5d8f-b7eb-dc0e8e880203",
                  "payloadSigningCertLocationUri": "https://auth-sandbox.hom.bocombbm.com.br/jans-auth/jwks",
                  "openIDDiscoveryDocument": "https://auth-sandbox.hom.bocombbm.com.br/jans-auth/.well-known/openid-configuration",
                  "customerFriendlyName": "BOCOM BBM",
                  "customerFriendlyDescription": "BOCOM BBM Sandbox 1",
                  "termsOfServiceUri": "https://www.bocombbm.com.br",
                  "autoRegistrationSupported": true,
                  "customerFriendlyLogoUri": "https://www.bocombbm.com.br/A2_BocomBBM_CMYK.svg",
                  "developerPortalUri": "https://portal-bancobbm.sensedia.com",
                  "authorisationServerId": "2c7f2ab1-9a3e-4021-9afe-7c4c796dfa9a"
                },
                "createDateTime": "2022-12-09T18:47:40.894782Z",
                "lastStatusUpdate": "2022-12-09T18:47:40.894784Z",
                "loggedUser": {
                  "document": { "identification": "55231549037", "rel": "CPF" }
                },
                "resourceGroups": [
                  {
                    "resourceGroupId": "62fc22fa98df3e4fcae49952",
                    "dataPermissions": [
                      {
                        "detail": "Informações da conta.",
                        "displayName": "Contas",
                        "items": ["Dados da conta"],
                        "permissionCode": "ACCOUNTS_READ",
                        "required": true
                      },
                      {
                        "detail": "Informações da conta, saldo disponível, saldo bloqueado, outros saldos.",
                        "displayName": "Saldos",
                        "items": ["Saldos"],
                        "permissionCode": "ACCOUNTS_BALANCES_READ",
                        "required": true
                      },
                      {
                        "detail": "Informações da conta, detalhes da transação.",
                        "displayName": "Transações",
                        "items": ["Transações"],
                        "permissionCode": "ACCOUNTS_TRANSACTIONS_READ",
                        "required": true
                      },
                      {
                        "detail": "Informações da conta, limite utilizado.",
                        "displayName": "Limites",
                        "items": [],
                        "permissionCode": "ACCOUNTS_OVERDRAFT_LIMITS_READ",
                        "required": true
                      }
                    ],
                    "displayName": "Contas",
                    "type": "ACCOUNT",
                    "additionalInfos": [
                      {
                        "key": "displayConfig",
                        "value": "eyJjYXRlZ29yeSI6IkNvbnRhcyIsImdyb3VwcyI6W3sibmFtZSI6IlNhbGRvIiwicGVybWlzc2lvbnMiOlsiQUNDT1VOVFNfUkVBRCIsIkFDQ09VTlRTX0JBTEFOQ0VTX1JFQUQiXSwicmVxdWlyZWQiOnRydWV9LHsibmFtZSI6IkxpbWl0ZXMiLCJwZXJtaXNzaW9ucyI6WyJBQ0NPVU5UU19SRUFEIiwiQUNDT1VOVFNfT1ZFUkRSQUZUX0xJTUlUU19SRUFEIl0sInJlcXVpcmVkIjp0cnVlfSx7Im5hbWUiOiJFeHRyYXRvcyIsInBlcm1pc3Npb25zIjpbIkFDQ09VTlRTX1JFQUQiLCJBQ0NPVU5UU19UUkFOU0FDVElPTlNfUkVBRCJdLCJyZXF1aXJlZCI6dHJ1ZX1dfQ=="
                      }
                    ],
                    "items": []
                  },
                  {
                    "resourceGroupId": "62fc238edc3e571e9a9a3041",
                    "dataPermissions": [
                      {
                        "detail": "Datas de vencimento das parcelas, quantidade total de parcelas, quantidade de parcelas pagas, quantidade de parcelas remanescente.",
                        "displayName": "Parcelas / Prestações",
                        "permissionCode": "LOANS_SCHEDULED_INSTALMENTS_READ",
                        "required": true
                      },
                      {
                        "detail": "Dados dos pagamentos do contrato, dados dos pagamentos das tarifas, dados dos pagamentos dos encargos.",
                        "displayName": "Pagamentos",
                        "permissionCode": "LOANS_PAYMENTS_READ",
                        "required": true
                      },
                      {
                        "detail": "Tipo da garantia, valor original da garantia, moeda da garantia.",
                        "displayName": "Garantias",
                        "permissionCode": "LOANS_WARRANTIES_READ",
                        "required": true
                      },
                      {
                        "detail": "Dados dos contratos de empréstimo, data da contratação, data do recebimento do crédito, valor do crédito, data de vencimento, período recorrente dos pagamentos, data de vencimento da primeira parcela, prazo total, taxas de juros, Custo Efetivo Total, sistema de amortização, tarifas, sigla identificadora da tarifa, valor da tarifa, moeda, encargos, número do documento da instituição consignante.",
                        "displayName": "Contratos",
                        "permissionCode": "LOANS_READ",
                        "required": true
                      }
                    ],
                    "displayName": "Operações de Crédito - Empréstimos",
                    "type": "LOAN",
                    "additionalInfos": [
                      {
                        "key": "displayConfig",
                        "value": "eyJjYXRlZ29yeSI6Ik9wZXJhw6fDtWVzIGRlIENyw6lkaXRvIiwiZ3JvdXBzIjpbeyJuYW1lIjoiRGFkb3MgZG8gQ29udHJhdG8iLCJwZXJtaXNzaW9ucyI6WyJMT0FOU19SRUFEIiwiTE9BTlNfUEFZTUVOVFNfUkVBRCIsIkxPQU5TX1NDSEVEVUxFRF9JTlNUQUxNRU5UU19SRUFEIiwiTE9BTlNfV0FSUkFOVElFU19SRUFEIl0sInJlcXVpcmVkIjp0cnVlfV19"
                      }
                    ],
                    "items": []
                  },
                  {
                    "resourceGroupId": "6160881143ed64462901ca81",
                    "dataPermissions": [
                      {
                        "detail": "Lista de recursos compartilhados",
                        "displayName": "Leitura de recursos",
                        "permissionCode": "RESOURCES_READ",
                        "required": true
                      }
                    ],
                    "displayName": "Lista de recursos compartilhados",
                    "type": "RESOURCE",
                    "additionalInfos": [],
                    "items": []
                  },
                  {
                    "resourceGroupId": "62fc23d898df3e4fcae49953",
                    "dataPermissions": [
                      {
                        "detail": "Dados do pagamento do contrato, dados do pagamento das tarifas, dados do pagamento dos encargos.",
                        "displayName": "Pagamentos",
                        "permissionCode": "FINANCINGS_PAYMENTS_READ",
                        "required": true
                      },
                      {
                        "detail": "Tipo da garantia, valor original da garantia, moeda da garantia.",
                        "displayName": "Garantias",
                        "permissionCode": "FINANCINGS_WARRANTIES_READ",
                        "required": true
                      },
                      {
                        "detail": "Datas de vencimento das parcelas, quantidade total de parcelas, quantidade de parcelas pagas, quantidade de parcelas remanescente.",
                        "displayName": "Parcelas / Prestações",
                        "permissionCode": "FINANCINGS_SCHEDULED_INSTALMENTS_READ",
                        "required": true
                      },
                      {
                        "detail": "Dados dos contratos de financiamento, data da contratação, data do recebimento do crédito, valor do crédito, data de vencimento, período recorrente dos pagamentos, data de vencimento da primeira parcela, prazo total, taxas de juros, Custo Efetivo Total, sistema de amortização, tarifas, sigla identificadora da tarifa, valor da tarifa, moeda, encargos, número do documento da instituição consignante.",
                        "displayName": "Contratos",
                        "permissionCode": "FINANCINGS_READ",
                        "required": true
                      }
                    ],
                    "displayName": "Operações de Crédito - Financiamento",
                    "type": "FINANCING",
                    "additionalInfos": [
                      {
                        "key": "displayConfig",
                        "value": "eyJjYXRlZ29yeSI6Ik9wZXJhw6fDtWVzIGRlIENyw6lkaXRvIiwiZ3JvdXBzIjpbeyJuYW1lIjoiRGFkb3MgZG8gQ29udHJhdG8iLCJwZXJtaXNzaW9ucyI6WyJGSU5BTkNJTkdTX1JFQUQiLCJGSU5BTkNJTkdTX1BBWU1FTlRTX1JFQUQiLCJGSU5BTkNJTkdTX1NDSEVEVUxFRF9JTlNUQUxNRU5UU19SRUFEIiwiRklOQU5DSU5HU19XQVJSQU5USUVTX1JFQUQiXSwicmVxdWlyZWQiOnRydWV9XX0="
                      }
                    ],
                    "items": []
                  },
                  {
                    "resourceGroupId": "62fc241698df3e4fcae49954",
                    "dataPermissions": [
                      {
                        "detail": "Datas de vencimento das parcelas, quantidade total de parcelas, quantidade de parcelas pagas, quantidade de parcelas remanescente.",
                        "displayName": "Parcelas / Prestações",
                        "permissionCode": "INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ",
                        "required": true
                      },
                      {
                        "detail": "Dados dos contratos de direitos creditórios descontados, data da contratação, data do recebimento do crédito, valor do crédito, data de vencimento, período recorrente dos pagamentos, data de vencimento da primeira parcela, prazo total, taxas de juros, Custo Efetivo Total, sistema de amortização, tarifas, sigla identificadora da tarifa, valor da tarifa, moeda, encargos, número do documento da instituição consignante.",
                        "displayName": "Contratos",
                        "permissionCode": "INVOICE_FINANCINGS_READ",
                        "required": true
                      },
                      {
                        "detail": "Dados do pagamento do contrato, dados do pagamento das tarifas, dados do pagamento dos encargos.",
                        "displayName": "Pagamentos",
                        "permissionCode": "INVOICE_FINANCINGS_PAYMENTS_READ",
                        "required": true
                      },
                      {
                        "detail": "Tipo da garantia, valor original da garantia, moeda da garantia.",
                        "displayName": "Garantias",
                        "permissionCode": "INVOICE_FINANCINGS_WARRANTIES_READ",
                        "required": true
                      }
                    ],
                    "displayName": "Operações de Crédito - Direitos Creditórios Descontados",
                    "type": "INVOICE_FINANCING",
                    "additionalInfos": [
                      {
                        "key": "displayConfig",
                        "value": "eyJjYXRlZ29yeSI6Ik9wZXJhw6fDtWVzIGRlIENyw6lkaXRvIiwiZ3JvdXBzIjpbeyJuYW1lIjoiRGFkb3MgZG8gQ29udHJhdG8iLCJwZXJtaXNzaW9ucyI6WyJJTlZPSUNFX0ZJTkFOQ0lOR1NfUkVBRCIsIklOVk9JQ0VfRklOQU5DSU5HU19QQVlNRU5UU19SRUFEIiwiSU5WT0lDRV9GSU5BTkNJTkdTX1NDSEVEVUxFRF9JTlNUQUxNRU5UU19SRUFEIiwiSU5WT0lDRV9GSU5BTkNJTkdTX1dBUlJBTlRJRVNfUkVBRCJdLCJyZXF1aXJlZCI6dHJ1ZX1dfQ=="
                      }
                    ],
                    "items": []
                  },
                  {
                    "resourceGroupId": "61dda9928e40ac55713942a7",
                    "dataPermissions": [
                      {
                        "detail": "UNARRANGED_ACCOUNTS_OVERDRAFT_PAYMENTS_READ",
                        "displayName": "Pagamentos",
                        "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_PAYMENTS_READ",
                        "required": true
                      },
                      {
                        "detail": "UNARRANGED_ACCOUNTS_OVERDRAFT_SCHEDULED_INSTALMENTS_READ",
                        "displayName": "Parcelas / Prestações",
                        "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_SCHEDULED_INSTALMENTS_READ",
                        "required": true
                      },
                      {
                        "detail": "UNARRANGED_ACCOUNTS_OVERDRAFT_WARRANTIES_READ",
                        "displayName": "Garantias",
                        "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_WARRANTIES_READ",
                        "required": true
                      },
                      {
                        "detail": "UNARRANGED_ACCOUNTS_OVERDRAFT_READ",
                        "displayName": "Contratos",
                        "permissionCode": "UNARRANGED_ACCOUNTS_OVERDRAFT_READ",
                        "required": true
                      }
                    ],
                    "displayName": "Adiantamento a Depositante",
                    "type": "UNARRANGED_ACCOUNT_OVERDRAFT",
                    "additionalInfos": [],
                    "items": []
                  },
                  {
                    "resourceGroupId": "61e0b676f8724844c7b82134",
                    "dataPermissions": [
                      {
                        "detail": "Razão social, endereço completo, CNPJ, número de registro no país de origem, telefone, e-mail, data de abertura da empresa, informações de sócios e administradores.",
                        "displayName": "Identificação da pessoa jurídica",
                        "permissionCode": "CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ",
                        "required": true
                      },
                      {
                        "detail": "Ramo de atuação, data de início de relacionamento, produtos contratados, representantes.",
                        "displayName": "Qualificação / Relações da pessoa jurídica",
                        "permissionCode": "CUSTOMERS_BUSINESS_ADITTIONALINFO_READ",
                        "required": true
                      }
                    ],
                    "displayName": "Dados Cadastrais",
                    "type": "CUSTOMER",
                    "additionalInfos": [
                      {
                        "key": "displayConfig",
                        "value": "eyJjYXRlZ29yeSI6IkNhZGFzdHJvIiwiZ3JvdXBzIjpbeyJuYW1lIjoiRGFkb3MgQ2FkYXN0cmFpcyBQRiIsInBlcm1pc3Npb25zIjpbIkNVU1RPTUVSU19QRVJTT05BTF9JREVOVElGSUNBVElPTlNfUkVBRCJdLCJyZXF1aXJlZCI6dHJ1ZX0seyJuYW1lIjoiSW5mb3JtYcOnw7VlcyBjb21wbGVtZW50YXJlcyBQRiIsInBlcm1pc3Npb25zIjpbIkNVU1RPTUVSU19QRVJTT05BTF9BRElUVElPTkFMSU5GT19SRUFEIl0sInJlcXVpcmVkIjp0cnVlfSx7Im5hbWUiOiJEYWRvcyBDYWRhc3RyYWlzIFBKIiwicGVybWlzc2lvbnMiOlsiQ1VTVE9NRVJTX0JVU0lORVNTX0lERU5USUZJQ0FUSU9OU19SRUFEIl0sInJlcXVpcmVkIjp0cnVlfSx7Im5hbWUiOiJJbmZvcm1hw6fDtWVzIGNvbXBsZW1lbnRhcmVzIFBKIiwicGVybWlzc2lvbnMiOlsiQ1VTVE9NRVJTX0JVU0lORVNTX0FESVRUSU9OQUxJTkZPX1JFQUQiXSwicmVxdWlyZWQiOnRydWV9XX0="
                      }
                    ],
                    "items": []
                  }
                ],
                "shareType": "RECEIVING",
                "status": "PENDING",
                "additionalInfos": [{ "key": "INTERNAL_ID", "value": "1" }],
                "finality": {
                  "displayName": "Viabilizar a oferta personalizada ao cliente de produtos e serviços financeiros.",
                  "finalityId": "2"
                },
                "deadLines": [
                  {
                    "total": 6,
                    "type": "MONTHS",
                    "expirationDateTime": "2023-06-09T18:47:40.955753Z"
                  },
                  {
                    "total": 12,
                    "type": "MONTHS",
                    "expirationDateTime": "2023-12-09T18:47:40.955766Z"
                  }
                ]
          }
