FORMAT: 1A

## Open Finance - Journey ASPSP Shares [/open-banking/journey-aspsp/v1/shares]

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
                    "consentId":"urn:bocombbm:97201fba-f9d5-4990-8757-d1595c700c94",
                    "shareId":"61b275556a5d932107b6de5b",
                    "organisationId":"4a7250ec-eac5-5d8f-b7eb-dc0e8e880203",
                    "organisationName":"BCO BOCOM BBM S.A.",
                    "createDateTime":"2021-12-09T21:29:57.508Z",
                    "lastStatusUpdate":"2021-12-09T21:29:57.539Z",
                    "expirationDateTime":"2022-12-09T21:29:55Z",
                    "businessEntity":{
                       "document":{
                          "identification":"09919706002170",
                          "rel":"CNPJ"
                       }
                    },
                    "loggedUser":{
                       "document":{
                          "identification":"13798150028",
                          "rel":"CPF"
                       }
                    },
                    "resourceGroups":[
                       {
                          "resourceGroupId":"61a5001867d8b23979873153",
                          "dataPermissions":[
                             {
                                "detail":"Faturamento, etc",
                                "displayName":"Informações complementares",
                                "permissionCode":"CUSTOMERS_BUSINESS_ADITTIONALINFO_READ"
                             },
                             {
                                "detail":"Renda, etc",
                                "displayName":"Informações complementares",
                                "permissionCode":"CUSTOMERS_PERSONAL_ADITTIONALINFO_READ"
                             },
                             {
                                "detail":"Documentos de identificação - CNPJ, etc",
                                "displayName":"Dados Cadastrais",
                                "permissionCode":"CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ"
                             },
                             {
                                "detail":"Documentos de identificação - CPF, RG, etc",
                                "displayName":"Dados Cadastrais",
                                "permissionCode":"CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ"
                             }
                          ],
                          "resources":null,
                          "displayName":"Dados Cadastrais",
                          "type":"CUSTOMER"
                       },
                       {
                          "resourceGroupId":"6160881143ed64462901ca81",
                          "dataPermissions":[
                             {
                                "detail":"Lista de recursos compartilhados",
                                "displayName":"Recursos",
                                "permissionCode":"RESOURCES_READ"
                             }
                          ],
                          "resources":null,
                          "displayName":"Lista de recursos compartilhados",
                          "type":"RESOURCE"
                       },
                       {
                          "resourceGroupId":"6172df2fef6f94758d355262",
                          "dataPermissions":[
                             {
                                "detail":"Débito em conta corrente, boleto bancário, averbação em folha ou Pix",
                                "displayName":"Pagamentos de Faturas",
                                "permissionCode":"INVOICE_FINANCINGS_PAYMENTS_READ"
                             },
                             {
                                "detail":"Financiamentos de faturas",
                                "displayName":"Financiamentos de faturas",
                                "permissionCode":"INVOICE_FINANCINGS_READ"
                             },
                             {
                                "detail":"Valores cobrados de juros remuneratórios por atraso no pagamento da fatura, multa por atraso no pagamento da fatura, juros de mora por atraso no pagamento da fatura, IOF, crédito rotativo, parcelamento de fatura, empréstimo e outros.",
                                "displayName":"Garantias de Financiamentos",
                                "permissionCode":"INVOICE_FINANCINGS_WARRANTIES_READ"
                             },
                             {
                                "detail":"Crédito rotativo, parcelamento de fatura, empréstimo, outros",
                                "displayName":"Parcelamento de fatura",
                                "permissionCode":"INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ"
                             }
                          ],
                          "resources":null,
                          "displayName":"Operações de Crédito - Direitos Creditórios Descontados",
                          "type":"INVOICE_FINANCING"
                       },
                       {
                          "resourceGroupId":"6172e030a3d88e3dbce27186",
                          "dataPermissions":[
                             {
                                "detail":"Pagamentos dos financiamentos",
                                "displayName":"Pagamentos dos financiamentos",
                                "permissionCode":"FINANCINGS_PAYMENTS_READ"
                             },
                             {
                                "detail":"Garantias dos financiamentos",
                                "displayName":"Garantias dos financiamentos",
                                "permissionCode":"FINANCINGS_WARRANTIES_READ"
                             },
                             {
                                "detail":"Financiamentos",
                                "displayName":"Financiamentos",
                                "permissionCode":"FINANCINGS_READ"
                             },
                             {
                                "detail":"Agendamento de Parcelas dos financiamentos",
                                "displayName":"Parcelas dos Financiamentos",
                                "permissionCode":"FINANCINGS_SCHEDULED_INSTALMENTS_READ"
                             }
                          ],
                          "resources":null,
                          "displayName":"Operações de Crédito - Financiamentos",
                          "type":"FINANCING"
                       },
                       {
                          "resourceGroupId":"6172e12aef6f94758d355263",
                          "dataPermissions":[
                             {
                                "detail":"Indexador, taxa pré e pós, periodicidade, tipo de juros, base de cálculo, informações adicionais, tipo de taxa",
                                "displayName":"Parcelas empréstimos",
                                "permissionCode":"LOANS_SCHEDULED_INSTALMENTS_READ"
                             },
                             {
                                "detail":"Valores das prestações pagas e a pagar",
                                "displayName":"Pagamentos empréstimos",
                                "permissionCode":"LOANS_PAYMENTS_READ"
                             },
                             {
                                "detail":"Tipo, subtipo e valor original da garantia",
                                "displayName":"Garantias Emprestimos",
                                "permissionCode":"LOANS_WARRANTIES_READ"
                             },
                             {
                                "detail":"Denominação, modalidade, CNPJ da fonte pagadora, número do contrato, modalidades contratadas, documento da instiuição fornecedora do crédito, número do contrato na instituição fornecedora do crédito e identificador padronizado do contrato (Ipoc)",
                                "displayName":"Empréstimos",
                                "permissionCode":"LOANS_READ"
                             }
                          ],
                          "resources":null,
                          "displayName":"Operações de Crédito - Empréstimos",
                          "type":"LOAN"
                       },
                       {
                          "resourceGroupId":"6172e183a3d88e3dbce27187",
                          "dataPermissions":[
                             {
                                "detail":"Adiantamento a depositantes",
                                "displayName":"Adiantamentos",
                                "permissionCode":"UNARRANGED_ACCOUNTS_OVERDRAFT_READ"
                             },
                             {
                                "detail":"Pagamentos dos adiantamentos a depositantes",
                                "displayName":"Pagamentos adiantamentos",
                                "permissionCode":"UNARRANGED_ACCOUNTS_OVERDRAFT_PAYMENTS_READ"
                             },
                             {
                                "detail":"Garantias dos adiantamentos a depositantes",
                                "displayName":"Garantias adiantamentos",
                                "permissionCode":"UNARRANGED_ACCOUNTS_OVERDRAFT_WARRANTIES_READ"
                             },
                             {
                                "detail":"Agendamento de Parcelas dos adiantamentos a depositantes",
                                "displayName":"Parcelas adiantamentos",
                                "permissionCode":"UNARRANGED_ACCOUNTS_OVERDRAFT_SCHEDULED_INSTALMENTS_READ"
                             }
                          ],
                          "resources":null,
                          "displayName":"Operações de Crédito - Adiantamento a Depositantes",
                          "type":"UNARRANGED_ACCOUNT_OVERDRAFT"
                       },
                       {
                          "resourceGroupId":"6172e28ea3d88e3dbce27188",
                          "dataPermissions":[
                             {
                                "detail":"Valor do saldo disponível",
                                "displayName":"Saldo Disponível",
                                "permissionCode":"ACCOUNTS_BALANCES_READ"
                             },
                             {
                                "detail":"Dados da conta",
                                "displayName":"Dados da conta",
                                "permissionCode":"ACCOUNTS_READ"
                             },
                             {
                                "detail":"Valor do limite de cheque especial utilizado ou do adiantamento a depositante",
                                "displayName":"Limites",
                                "permissionCode":"ACCOUNTS_OVERDRAFT_LIMITS_READ"
                             },
                             {
                                "detail":"Identificador, valor, data de lançamento e tipo da transação (TED, DOC, Pix, pagamento de boletos etc.), tipo de operação (crédito ou débito), identificacão do pagador ou recebedor e origem ou destino da transação",
                                "displayName":"Movimentações da conta",
                                "permissionCode":"ACCOUNTS_TRANSACTIONS_READ"
                             }
                          ],
                          "resources":null,
                          "displayName":"Contas",
                          "type":"ACCOUNT"
                       }
                    ],
                    "approvers":[
                       {
                          "status":"AWAITING_AUTHORISATION",
                          "approverId":"13798150028"
                       }
                    ],
                    "shareType":"TRANSMITTING",
                    "status":"PENDING",
                    "deadlines":[
                       {
                          "total":364,
                          "type":"DAYS",
                          "expirationDateTime":"2022-12-09T21:29:55Z"
                       }
                    ],
                    "authorisationServer":null,
                    "additionalInfos":null,
                    "isOverdue":false
                 },
                 {
                    "consentId":"urn:bocombbm:c8d699d5-0e6a-40e8-b0be-de34308d73ce",
                    "shareId":"61b9190d6be55c7a1f8f4424",
                    "organisationId":"4a7250ec-eac5-5d8f-b7eb-dc0e8e880203",
                    "organisationName":"BCO BOCOM BBM S.A.",
                    "createDateTime":"2021-12-14T22:22:05.531Z",
                    "lastStatusUpdate":"2021-12-22T17:50:45.643Z",
                    "expirationDateTime":"2022-12-14T22:22:04Z",
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
                          "resourceGroupId":"61a5001867d8b23979873153",
                          "dataPermissions":[
                             {
                                "detail":"Faturamento, etc",
                                "displayName":"Informações complementares",
                                "permissionCode":"CUSTOMERS_BUSINESS_ADITTIONALINFO_READ"
                             },
                             {
                                "detail":"Renda, etc",
                                "displayName":"Informações complementares",
                                "permissionCode":"CUSTOMERS_PERSONAL_ADITTIONALINFO_READ"
                             },
                             {
                                "detail":"Documentos de identificação - CNPJ, etc",
                                "displayName":"Dados Cadastrais",
                                "permissionCode":"CUSTOMERS_BUSINESS_IDENTIFICATIONS_READ"
                             },
                             {
                                "detail":"Documentos de identificação - CPF, RG, etc",
                                "displayName":"Dados Cadastrais",
                                "permissionCode":"CUSTOMERS_PERSONAL_IDENTIFICATIONS_READ"
                             }
                          ],
                          "resources":null,
                          "displayName":"Dados Cadastrais",
                          "type":"CUSTOMER"
                       },
                       {
                          "resourceGroupId":"6160881143ed64462901ca81",
                          "dataPermissions":[
                             {
                                "detail":"Lista de recursos compartilhados",
                                "displayName":"Recursos",
                                "permissionCode":"RESOURCES_READ"
                             }
                          ],
                          "resources":null,
                          "displayName":"Lista de recursos compartilhados",
                          "type":"RESOURCE"
                       },
                       {
                          "resourceGroupId":"6172df2fef6f94758d355262",
                          "dataPermissions":[
                             {
                                "detail":"Débito em conta corrente, boleto bancário, averbação em folha ou Pix",
                                "displayName":"Pagamentos de Faturas",
                                "permissionCode":"INVOICE_FINANCINGS_PAYMENTS_READ"
                             },
                             {
                                "detail":"Financiamentos de faturas",
                                "displayName":"Financiamentos de faturas",
                                "permissionCode":"INVOICE_FINANCINGS_READ"
                             },
                             {
                                "detail":"Valores cobrados de juros remuneratórios por atraso no pagamento da fatura, multa por atraso no pagamento da fatura, juros de mora por atraso no pagamento da fatura, IOF, crédito rotativo, parcelamento de fatura, empréstimo e outros.",
                                "displayName":"Garantias de Financiamentos",
                                "permissionCode":"INVOICE_FINANCINGS_WARRANTIES_READ"
                             },
                             {
                                "detail":"Crédito rotativo, parcelamento de fatura, empréstimo, outros",
                                "displayName":"Parcelamento de fatura",
                                "permissionCode":"INVOICE_FINANCINGS_SCHEDULED_INSTALMENTS_READ"
                             }
                          ],
                          "resources":[
                             {
                                "resourceId":"e8c6ecb7-05cc-4934-ae73-545d2ab5a143",
                                "status":"AVAILABLE",
                                "displayName":"Desconto de cheques",
                                "detail":null,
                                "hidden":true,
                                "additionalInfos":[
                                   {
                                      "key":"modalityCodes",
                                      "value":"0302"
                                   }
                                ]
                             },
                             {
                                "resourceId":"1159a717-a25c-4681-8218-07bcb12c059c",
                                "status":"AVAILABLE",
                                "displayName":"Antecipação de recebíveis de cartão de crédito",
                                "detail":null,
                                "hidden":true,
                                "additionalInfos":[
                                   {
                                      "key":"modalityCodes",
                                      "value":"0303"
                                   }
                                ]
                             }
                          ],
                          "displayName":"Operações de Crédito - Direitos Creditórios Descontados",
                          "type":"INVOICE_FINANCING"
                       },
                       {
                          "resourceGroupId":"6172e030a3d88e3dbce27186",
                          "dataPermissions":[
                             {
                                "detail":"Pagamentos dos financiamentos",
                                "displayName":"Pagamentos dos financiamentos",
                                "permissionCode":"FINANCINGS_PAYMENTS_READ"
                             },
                             {
                                "detail":"Garantias dos financiamentos",
                                "displayName":"Garantias dos financiamentos",
                                "permissionCode":"FINANCINGS_WARRANTIES_READ"
                             },
                             {
                                "detail":"Financiamentos",
                                "displayName":"Financiamentos",
                                "permissionCode":"FINANCINGS_READ"
                             },
                             {
                                "detail":"Agendamento de Parcelas dos financiamentos",
                                "displayName":"Parcelas dos Financiamentos",
                                "permissionCode":"FINANCINGS_SCHEDULED_INSTALMENTS_READ"
                             }
                          ],
                          "resources":[
                             {
                                "resourceId":"80f63b4c-6d6e-4e44-bb6b-abdb803ccac2",
                                "status":"AVAILABLE",
                                "displayName":"Microcrédito produtivo orientado",
                                "detail":null,
                                "hidden":true,
                                "additionalInfos":[
                                   {
                                      "key":"modalityCodes",
                                      "value":"0403"
                                   }
                                ]
                             }
                          ],
                          "displayName":"Operações de Crédito - Financiamentos",
                          "type":"FINANCING"
                       },
                       {
                          "resourceGroupId":"6172e12aef6f94758d355263",
                          "dataPermissions":[
                             {
                                "detail":"Indexador, taxa pré e pós, periodicidade, tipo de juros, base de cálculo, informações adicionais, tipo de taxa",
                                "displayName":"Parcelas empréstimos",
                                "permissionCode":"LOANS_SCHEDULED_INSTALMENTS_READ"
                             },
                             {
                                "detail":"Valores das prestações pagas e a pagar",
                                "displayName":"Pagamentos empréstimos",
                                "permissionCode":"LOANS_PAYMENTS_READ"
                             },
                             {
                                "detail":"Tipo, subtipo e valor original da garantia",
                                "displayName":"Garantias Emprestimos",
                                "permissionCode":"LOANS_WARRANTIES_READ"
                             },
                             {
                                "detail":"Denominação, modalidade, CNPJ da fonte pagadora, número do contrato, modalidades contratadas, documento da instiuição fornecedora do crédito, número do contrato na instituição fornecedora do crédito e identificador padronizado do contrato (Ipoc)",
                                "displayName":"Empréstimos",
                                "permissionCode":"LOANS_READ"
                             }
                          ],
                          "resources":[
                             {
                                "resourceId":"62432e4b-3959-4946-8019-2bb2fbe4ea2f",
                                "status":"AVAILABLE",
                                "displayName":"Crédito pessoal - consignado",
                                "detail":null,
                                "hidden":true,
                                "additionalInfos":[
                                   {
                                      "key":"modalityCodes",
                                      "value":"0202"
                                   }
                                ]
                             },
                             {
                                "resourceId":"bbf47fff-791c-4b2d-9029-715f69814557",
                                "status":"AVAILABLE",
                                "displayName":"Crédito pessoal - sem consignação",
                                "detail":null,
                                "hidden":true,
                                "additionalInfos":[
                                   {
                                      "key":"modalityCodes",
                                      "value":"0203"
                                   }
                                ]
                             },
                             {
                                "resourceId":"82df841b-c187-47c6-acc7-5a262e70dde8",
                                "status":"AVAILABLE",
                                "displayName":"Home equity",
                                "detail":null,
                                "hidden":true,
                                "additionalInfos":[
                                   {
                                      "key":"modalityCodes",
                                      "value":"0211"
                                   }
                                ]
                             },
                             {
                                "resourceId":"26879bb3-e72a-4488-8185-bb8fd31ecb2c",
                                "status":"AVAILABLE",
                                "displayName":"Microcrédito",
                                "detail":null,
                                "hidden":true,
                                "additionalInfos":[
                                   {
                                      "key":"modalityCodes",
                                      "value":"0212"
                                   }
                                ]
                             },
                             {
                                "resourceId":"6e147ebf-1c5f-4b40-a6a4-793c3676000d",
                                "status":"AVAILABLE",
                                "displayName":"Cheque especial",
                                "detail":null,
                                "hidden":true,
                                "additionalInfos":[
                                   {
                                      "key":"modalityCodes",
                                      "value":"0213"
                                   }
                                ]
                             },
                             {
                                "resourceId":"e3adda38-b2f9-4ffc-a689-60ef05433a02",
                                "status":"AVAILABLE",
                                "displayName":"Conta garantida",
                                "detail":null,
                                "hidden":true,
                                "additionalInfos":[
                                   {
                                      "key":"modalityCodes",
                                      "value":"0214"
                                   }
                                ]
                             },
                             {
                                "resourceId":"e21b78c7-4c77-484c-bcce-e15e19e64aba",
                                "status":"AVAILABLE",
                                "displayName":"Capital de giro",
                                "detail":null,
                                "hidden":true,
                                "additionalInfos":[
                                   {
                                      "key":"modalityCodes",
                                      "value":"0215,0216,0217"
                                   }
                                ]
                             }
                          ],
                          "displayName":"Operações de Crédito - Empréstimos",
                          "type":"LOAN"
                       },
                       {
                          "resourceGroupId":"6172e183a3d88e3dbce27187",
                          "dataPermissions":[
                             {
                                "detail":"Adiantamento a depositantes",
                                "displayName":"Adiantamentos",
                                "permissionCode":"UNARRANGED_ACCOUNTS_OVERDRAFT_READ"
                             },
                             {
                                "detail":"Pagamentos dos adiantamentos a depositantes",
                                "displayName":"Pagamentos adiantamentos",
                                "permissionCode":"UNARRANGED_ACCOUNTS_OVERDRAFT_PAYMENTS_READ"
                             },
                             {
                                "detail":"Garantias dos adiantamentos a depositantes",
                                "displayName":"Garantias adiantamentos",
                                "permissionCode":"UNARRANGED_ACCOUNTS_OVERDRAFT_WARRANTIES_READ"
                             },
                             {
                                "detail":"Agendamento de Parcelas dos adiantamentos a depositantes",
                                "displayName":"Parcelas adiantamentos",
                                "permissionCode":"UNARRANGED_ACCOUNTS_OVERDRAFT_SCHEDULED_INSTALMENTS_READ"
                             }
                          ],
                          "resources":[
                             {
                                "resourceId":"4bdea684-a34d-4972-9d45-07953435d887",
                                "status":"AVAILABLE",
                                "displayName":"Adiantamentos a depositantes",
                                "detail":null,
                                "hidden":true,
                                "additionalInfos":[
                                   {
                                      "key":"modalityCodes",
                                      "value":"0101"
                                   }
                                ]
                             }
                          ],
                          "displayName":"Operações de Crédito - Adiantamento a Depositantes",
                          "type":"UNARRANGED_ACCOUNT_OVERDRAFT"
                       },
                       {
                          "resourceGroupId":"6172e28ea3d88e3dbce27188",
                          "dataPermissions":[
                             {
                                "detail":"Valor do saldo disponível",
                                "displayName":"Saldo Disponível",
                                "permissionCode":"ACCOUNTS_BALANCES_READ"
                             },
                             {
                                "detail":"Dados da conta",
                                "displayName":"Dados da conta",
                                "permissionCode":"ACCOUNTS_READ"
                             },
                             {
                                "detail":"Valor do limite de cheque especial utilizado ou do adiantamento a depositante",
                                "displayName":"Limites",
                                "permissionCode":"ACCOUNTS_OVERDRAFT_LIMITS_READ"
                             },
                             {
                                "detail":"Identificador, valor, data de lançamento e tipo da transação (TED, DOC, Pix, pagamento de boletos etc.), tipo de operação (crédito ou débito), identificacão do pagador ou recebedor e origem ou destino da transação",
                                "displayName":"Movimentações da conta",
                                "permissionCode":"ACCOUNTS_TRANSACTIONS_READ"
                             }
                          ],
                          "resources":[
                             {
                                "resourceId":"48064ac5-deda-42bd-998b-259204f36e63",
                                "status":"AVAILABLE",
                                "displayName":"304641-4",
                                "detail":null,
                                "hidden":false,
                                "additionalInfos":[
                                   {
                                      "key":"internalId",
                                      "value":"10306"
                                   },
                                   {
                                      "key":"branch",
                                      "value":"2"
                                   },
                                   {
                                      "key":"accountNumber",
                                      "value":"304641"
                                   },
                                   {
                                      "key":"verifyingDigit",
                                      "value":"4"
                                   }
                                ]
                             }
                          ],
                          "displayName":"Contas",
                          "type":"ACCOUNT"
                       }
                    ],
                    "approvers":[
                       {
                          "status":"AUTHORISED",
                          "approverId":"68300919007"
                       },
                       {
                          "status":"AWAITING_AUTHORISATION",
                          "approverId":"6e076a2f-ccf4-45fe-a00d-44d9caa5778e@46634241000000@59054246081"
                       },
                       {
                          "status":"AUTHORISED",
                          "approverId":"6e076a2f-ccf4-45fe-a00d-44d9caa5778e@46634241000000@68300919007"
                       },
                       {
                          "status":"AWAITING_AUTHORISATION",
                          "approverId":"6e076a2f-ccf4-45fe-a00d-44d9caa5778e@46634241000000@13798150028"
                       },
                       {
                          "status":"AUTHORISED",
                          "approverId":"6e076a2f-ccf4-45fe-a00d-44d9caa5778e@46634241000000@78901153009"
                       }
                    ],
                    "shareType":"TRANSMITTING",
                    "status":"ACTIVE",
                    "deadlines":[
                       {
                          "total":364,
                          "type":"DAYS",
                          "expirationDateTime":"2022-12-14T22:22:04Z"
                       }
                    ],
                    "authorisationServer":null,
                    "additionalInfos":[
                       {
                          "key":"ConsentInitiator",
                          "value":"eyJDcGYiOiI2ODMwMDkxOTAwNyIsIlR5cGUiOiJDb3Jwb3JhdGlvbiIsIklkIjoiNmUwNzZhMmYtY2NmNC00NWZlLWEwMGQtNDRkOWNhYTU3NzhlQDQ2NjM0MjQxMDAwMDAwQDY4MzAwOTE5MDA3IiwiTmFtZSI6IlVzdWFyaW8gRW1wcmVzYSA0IDMzMyJ9"
                       },
                       {
                          "key":"ApproverCount",
                          "value":"2"
                       },
                       {
                          "key":"PowersOfAttorney",
                          "value":"W3siQ3BmIjoiNjgzMDA5MTkwMDciLCJUeXBlIjoiaW5kaXZpZHVhbCIsIklkIjoiNmUwNzZhMmYtY2NmNC00NWZlLWEwMGQtNDRkOWNhYTU3NzhlQDQ2NjM0MjQxMDAwMDAwQDY4MzAwOTE5MDA3IiwiTmFtZSI6IlBKIDQifSx7IkNwZiI6Ijc4OTAxMTUzMDA5IiwiVHlwZSI6ImluZGl2aWR1YWwiLCJJZCI6IjZlMDc2YTJmLWNjZjQtNDVmZS1hMDBkLTQ0ZDljYWE1Nzc4ZUA0NjYzNDI0MTAwMDAwMEA3ODkwMTE1MzAwOSIsIk5hbWUiOiJQSiA1In0seyJDcGYiOiIxMzc5ODE1MDAyOCIsIlR5cGUiOiJpbmRpdmlkdWFsIiwiSWQiOiI2ZTA3NmEyZi1jY2Y0LTQ1ZmUtYTAwZC00NGQ5Y2FhNTc3OGVANDY2MzQyNDEwMDAwMDBAMTM3OTgxNTAwMjgiLCJOYW1lIjoiUEogOCJ9LHsiQ3BmIjoiNTkwNTQyNDYwODEiLCJUeXBlIjoiaW5kaXZpZHVhbCIsIklkIjoiNmUwNzZhMmYtY2NmNC00NWZlLWEwMGQtNDRkOWNhYTU3NzhlQDQ2NjM0MjQxMDAwMDAwQDU5MDU0MjQ2MDgxIiwiTmFtZSI6IlBKIDYifV0="
                       }
                    ],
                    "isOverdue":false
                 }
          ]
