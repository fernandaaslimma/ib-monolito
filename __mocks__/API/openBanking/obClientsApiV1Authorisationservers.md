FORMAT: 1A

## Open Finance - Authorization Servers [/open-banking/ob-clients-api/v1/authorisationservers]

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
              "OrganisationId": "4a7250ec-eac5-5d8f-b7eb-dc0e8e880203",
              "PayloadSigningCertLocationUri": "https://auth-sandbox.hom.bocombbm.com.br/jans-auth/jwks",
              "ParentAuthorisationServerId": null,
              "NotificationWebhook": null,
              "NotificationWebhookStatus": null,
              "OpenIDDiscoveryDocument": "https://auth-sandbox.hom.bocombbm.com.br/jans-auth/.well-known/openid-configuration",
              "CustomerFriendlyName": "BOCOM BBM",
              "CustomerFriendlyDescription": "BOCOM BBM Sandbox 1",
              "TermsOfServiceUri": "https://www.bocombbm.com.br",
              "ApiResources": [
                {
                  "ApiResourceId": "a36ae9dc-34d2-4fda-bcec-82e50e2bb2bf",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "c9d6c53e-727c-490f-8a85-40a614ffd768",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/payments/v1/pix/payments/{paymentId}"
                    },
                    {
                      "ApiDiscoveryId": "047b519c-5fe3-414c-b42e-3e2f382c3e52",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/payments/v1/pix/payments"
                    }
                  ],
                  "ApiFamilyType": "payments-pix",
                  "ApiVersion": "1"
                },
                {
                  "ApiResourceId": "712e7288-2a8a-4a17-a531-8da1fac807de",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "492d4334-4d31-42a1-93bb-9802a76f013e",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/loans/v2/contracts"
                    },
                    {
                      "ApiDiscoveryId": "9ab0cd7e-7132-4820-bad6-969df81f0eab",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/loans/v2/contracts/{contractId}/payments"
                    },
                    {
                      "ApiDiscoveryId": "aced497b-c683-4a49-b73e-23c6e5229e7e",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/loans/v2/contracts/{contractId}/warranties"
                    },
                    {
                      "ApiDiscoveryId": "9533c788-b696-4ec3-9ffc-e57cafd58f24",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/loans/v2/contracts/{contractId}/scheduled-instalments"
                    }
                  ],
                  "ApiFamilyType": "loans",
                  "ApiVersion": "2.0.1"
                },
                {
                  "ApiResourceId": "70960119-0cca-4920-8c9d-c6e13f71e907",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "a0480bd6-23eb-437a-be8f-04f8a589a943",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/customers/v1/personal/financial-relations"
                    },
                    {
                      "ApiDiscoveryId": "7d80c6a9-a25c-4093-afaf-2c6f5622a7b5",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/customers/v1/personal/identifications"
                    },
                    {
                      "ApiDiscoveryId": "2f7ce565-f37f-4a49-8bae-dbe8948ebcab",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/customers/v1/personal/qualifications"
                    }
                  ],
                  "ApiFamilyType": "customers-personal",
                  "ApiVersion": "1"
                },
                {
                  "ApiResourceId": "ac379e6b-801a-4560-ad59-fcdfd480deed",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "ee1c8979-83c4-4492-9e2f-00a6e29f91b7",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/customers/v2/business/financial-relations"
                    },
                    {
                      "ApiDiscoveryId": "4dd9acdd-ba64-451a-a48b-69714b205ea3",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/customers/v2/business/qualifications"
                    },
                    {
                      "ApiDiscoveryId": "1bc7b2b6-614c-414f-843d-c25e7b54fb09",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/customers/v2/business/identifications"
                    }
                  ],
                  "ApiFamilyType": "customers-business",
                  "ApiVersion": "2.0.1"
                },
                {
                  "ApiResourceId": "9451f6b0-65f2-462b-a362-5cdc66e84c9b",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "adddee4d-72d0-4e6f-bd27-d34d1b5e0fa9",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/customers/v1/business/financial-relations"
                    },
                    {
                      "ApiDiscoveryId": "af069048-2bb1-4374-81b2-1b3771b3a07f",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/customers/v1/business/identifications"
                    },
                    {
                      "ApiDiscoveryId": "eacf05e7-c68f-446f-9722-bc6168da9989",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/customers/v1/business/qualifications"
                    }
                  ],
                  "ApiFamilyType": "customers-business",
                  "ApiVersion": "1"
                },
                {
                  "ApiResourceId": "c1bb690e-d003-440c-b8bb-90726d39ceb4",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "05fbd0bb-0b22-431e-80d9-a10a7445f73f",
                      "ApiEndpoint": "https://apis-sandbox.hom.bocombbm.com.br/open-banking/discovery/v1/outages"
                    },
                    {
                      "ApiDiscoveryId": "d2a2794b-4f98-4aa4-8d0b-3654b99fe93d",
                      "ApiEndpoint": "https://apis-sandbox.hom.bocombbm.com.br/open-banking/discovery/v1/status"
                    }
                  ],
                  "ApiFamilyType": "discovery",
                  "ApiVersion": "1"
                },
                {
                  "ApiResourceId": "d99ce5d8-4065-40b5-9706-5f85dd50f3d5",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "b4fd0947-36b8-49b2-a13b-8967c2b5bb54",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/customers/v2/personal/identifications"
                    },
                    {
                      "ApiDiscoveryId": "e6659a26-9295-42da-88ee-313593151906",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/customers/v2/personal/financial-relations"
                    },
                    {
                      "ApiDiscoveryId": "27af9fa4-2d8e-4b6f-a5ae-bfe6466f06f4",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/customers/v2/personal/qualifications"
                    }
                  ],
                  "ApiFamilyType": "customers-personal",
                  "ApiVersion": "2.0.1"
                },
                {
                  "ApiResourceId": "221ae3db-a64e-4515-94f0-90d8bfa888f2",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "13262e01-da19-417b-85a1-737fe8800838",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/resources/v2/resources"
                    }
                  ],
                  "ApiFamilyType": "resources",
                  "ApiVersion": "2.0.1"
                },
                {
                  "ApiResourceId": "01ea58a4-d956-4d51-a0e1-7aeba72397c5",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "487cc427-56b2-4dca-9a0f-2250bb01c355",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/loans/v1/contracts"
                    },
                    {
                      "ApiDiscoveryId": "ca49d9d0-9c99-42a3-aea9-05c48caa788c",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/loans/v1/contracts/{contractId}/scheduled-instalments"
                    },
                    {
                      "ApiDiscoveryId": "6d7321ab-0315-42d8-97c6-bad0b522ab07",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/loans/v1/contracts/{contractId}/payments"
                    },
                    {
                      "ApiDiscoveryId": "42b41b90-ec5f-4037-b145-d2eb3fe022e4",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/loans/v1/contracts/{contractId}/warranties"
                    },
                    {
                      "ApiDiscoveryId": "c73328bb-6f7e-40a5-ab63-e68b0598439b",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/loans/v1/contracts/{contractId}"
                    }
                  ],
                  "ApiFamilyType": "loans",
                  "ApiVersion": "1"
                },
                {
                  "ApiResourceId": "eb359eb9-a57f-4baf-bddc-6c4ff4174a53",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "f59ddf29-88c9-48d8-8462-c5e03fbc044d",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/consents/v1/consents"
                    },
                    {
                      "ApiDiscoveryId": "8b663da7-37c3-42df-959e-d04545aae1c4",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/consents/v1/consents/{consentId}"
                    }
                  ],
                  "ApiFamilyType": "consents",
                  "ApiVersion": "1"
                },
                {
                  "ApiResourceId": "0fc7a39e-6571-4e56-b505-5876e140ad09",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "47743711-f509-4393-9c6a-12f954084df8",
                      "ApiEndpoint": "https://apis-sandbox.hom.bocombbm.com.br/open-banking/channels/v1/branches"
                    },
                    {
                      "ApiDiscoveryId": "f4efaa9b-8152-41ff-8c14-2d5dce354381",
                      "ApiEndpoint": "https://apis-sandbox.hom.bocombbm.com.br/open-banking/channels/v1/electronic-channels"
                    },
                    {
                      "ApiDiscoveryId": "1bf12a7b-7eac-4d5c-9133-444d0667e056",
                      "ApiEndpoint": "https://apis-sandbox.hom.bocombbm.com.br/open-banking/channels/v1/phone-channels"
                    },
                    {
                      "ApiDiscoveryId": "bb4833f4-b256-4c8e-bc14-450ef6e02c56",
                      "ApiEndpoint": "https://apis-sandbox.hom.bocombbm.com.br/open-banking/channels/v1/banking-agents"
                    }
                  ],
                  "ApiFamilyType": "channels",
                  "ApiVersion": "1"
                },
                {
                  "ApiResourceId": "6ce08d46-d3b2-4098-b405-44e7102d325c",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "bf0dc86a-61b4-4f9a-9a53-b6566c8e7dd4",
                      "ApiEndpoint": "https://apis-sandbox.hom.bocombbm.com.br/open-banking/admin/v1/metrics"
                    }
                  ],
                  "ApiFamilyType": "admin",
                  "ApiVersion": "1"
                },
                {
                  "ApiResourceId": "2074e714-d50a-446c-9b41-3a260f8a6170",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "e454f7a1-28aa-40c3-b30f-21ed349d12e0",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/payments/v1/consents/{consentId}"
                    },
                    {
                      "ApiDiscoveryId": "8bf20bc1-f514-4b6d-b001-92b5a0ebb870",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/payments/v1/consents"
                    }
                  ],
                  "ApiFamilyType": "payments-consents",
                  "ApiVersion": "1"
                },
                {
                  "ApiResourceId": "f3816ed7-78db-4a07-a822-c1a4e8f9eb20",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "21a7ea5e-1e08-45cf-aef4-89640fa5a2bc",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/accounts/v2/accounts/{accountId}/transactions-current"
                    },
                    {
                      "ApiDiscoveryId": "c1637075-8f01-4fee-b429-02c5273c5085",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/accounts/v2/accounts"
                    },
                    {
                      "ApiDiscoveryId": "77f01327-f1ef-41d5-98ce-49f2d180ba71",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/accounts/v2/accounts/{accountId}"
                    },
                    {
                      "ApiDiscoveryId": "e78a3d90-18be-46ac-a742-722cc3530595",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/accounts/v2/accounts/{accountId}/balances"
                    },
                    {
                      "ApiDiscoveryId": "96775c4f-5f32-4942-993e-a77edc42d36d",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/accounts/v2/accounts/{accountId}/transactions"
                    },
                    {
                      "ApiDiscoveryId": "4190528f-b641-4553-9dfe-2a767e9da629",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/accounts/v2/accounts/{accountId}/overdraft-limits"
                    }
                  ],
                  "ApiFamilyType": "accounts",
                  "ApiVersion": "2.0.1"
                },
                {
                  "ApiResourceId": "af0e4aae-e7db-4ebb-9527-e6788cba39f9",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "41e565e3-00b4-4869-a9cc-d4e9863f43da",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/accounts/v1/accounts"
                    },
                    {
                      "ApiDiscoveryId": "258e7992-5d74-4f4f-bf77-6f647a11f2a3",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/accounts/v1/accounts/{accountId}"
                    },
                    {
                      "ApiDiscoveryId": "2262fbaa-3329-44d1-969a-4efec98694b7",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/accounts/v1/accounts/{accountId}/balances"
                    },
                    {
                      "ApiDiscoveryId": "b66d7307-48ad-45d5-953a-d56f0df2acc2",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/accounts/v1/accounts/{accountId}/transactions"
                    },
                    {
                      "ApiDiscoveryId": "cda33c9f-4177-445c-95d1-ea3cabe5ff0e",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/accounts/v1/accounts/{accountId}/overdraft-limits"
                    }
                  ],
                  "ApiFamilyType": "accounts",
                  "ApiVersion": "1"
                },
                {
                  "ApiResourceId": "4d459879-9d28-4793-9ad6-40a642b225cf",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "1159983f-99b2-4480-98cc-5d0c1af1cd98",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/financings/v2/contracts"
                    },
                    {
                      "ApiDiscoveryId": "74cc7d4c-2915-4f50-ad66-9d7d46470de3",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/financings/v2/contracts/{contractId}"
                    },
                    {
                      "ApiDiscoveryId": "7cdb1943-3e5c-4ada-a4a5-a5460c1ba902",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/financings/v2/contracts/{contractId}/payments"
                    },
                    {
                      "ApiDiscoveryId": "a67752da-e296-405d-8828-ee9d8ec05beb",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/financings/v2/contracts/{contractId}/warranties"
                    },
                    {
                      "ApiDiscoveryId": "0b49326c-e003-415d-8200-7006a9602a9a",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/financings/v2/contracts/{contractId}/scheduled-instalments"
                    }
                  ],
                  "ApiFamilyType": "financings",
                  "ApiVersion": "2.0.1"
                },
                {
                  "ApiResourceId": "e57a6771-e8de-454f-8fa8-72cc5ff42837",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "f01a969f-c7e7-49da-ad7a-a926e26c76df",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/invoice-financings/v2/contracts"
                    },
                    {
                      "ApiDiscoveryId": "b4cae205-8523-40a4-bbb9-68ab833bac7a",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/invoice-financings/v2/contracts/{contractId}"
                    },
                    {
                      "ApiDiscoveryId": "c7ae75e5-9404-4c6c-bf49-70295c5833dd",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/invoice-financings/v2/contracts/{contractId}/payments"
                    },
                    {
                      "ApiDiscoveryId": "b77e2efb-15c5-48cc-8956-bdb4e62ad970",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/invoice-financings/v2/contracts/{contractId}/warranties"
                    },
                    {
                      "ApiDiscoveryId": "b84bf7de-2bad-4c62-a093-2c52bcba8997",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/invoice-financings/v2/contracts/{contractId}/scheduled-instalments"
                    }
                  ],
                  "ApiFamilyType": "invoice-financings",
                  "ApiVersion": "2.0.1"
                },
                {
                  "ApiResourceId": "50234dd0-0cda-40d7-b8ee-e137c9a85775",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "76757730-dd3a-48df-be61-187e0d7f8f28",
                      "ApiEndpoint": "https://apis-sandbox.hom.bocombbm.com.br/open-banking/products-services/v1/personal-loans"
                    },
                    {
                      "ApiDiscoveryId": "86a76dac-518e-4b53-a924-fac58d7616c6",
                      "ApiEndpoint": "https://apis-sandbox.hom.bocombbm.com.br/open-banking/products-services/v1/business-loans"
                    },
                    {
                      "ApiDiscoveryId": "d1ba02de-2e03-4506-b80e-25d03ef9e638",
                      "ApiEndpoint": "https://apis-sandbox.hom.bocombbm.com.br/open-banking/products-services/v1/personal-financings"
                    },
                    {
                      "ApiDiscoveryId": "e4bcf447-7ba5-49cf-b951-4f25b6def39d",
                      "ApiEndpoint": "https://apis-sandbox.hom.bocombbm.com.br/open-banking/products-services/v1/business-financings"
                    },
                    {
                      "ApiDiscoveryId": "b62491af-8d35-4cc7-9cab-191c421d05f1",
                      "ApiEndpoint": "https://apis-sandbox.hom.bocombbm.com.br/open-banking/products-services/v1/personal-invoice-financings"
                    },
                    {
                      "ApiDiscoveryId": "685ab289-5a24-4be0-b1d5-279a40826489",
                      "ApiEndpoint": "https://apis-sandbox.hom.bocombbm.com.br/open-banking/products-services/v1/business-invoice-financings"
                    }
                  ],
                  "ApiFamilyType": "products-services",
                  "ApiVersion": "1"
                },
                {
                  "ApiResourceId": "d56de38a-c7da-4fda-ba9c-803090b17268",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "85a8e602-11b4-43fe-86a6-2fc1932663ff",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/financings/v1/contracts/{contractId}"
                    },
                    {
                      "ApiDiscoveryId": "1f595e3b-418c-4745-8e2c-6c68052656ed",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/financings/v1/contracts"
                    },
                    {
                      "ApiDiscoveryId": "e4f08235-6c5d-4207-b98a-28e573426c9d",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/financings/v1/contracts/{contractId}/scheduled-instalments"
                    },
                    {
                      "ApiDiscoveryId": "26489f84-ec59-4486-9595-88766cc874b6",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/financings/v1/contracts/{contractId}/payments"
                    },
                    {
                      "ApiDiscoveryId": "295375d7-1427-4233-bf85-71c13fd93842",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/financings/v1/contracts/{contractId}/warranties"
                    }
                  ],
                  "ApiFamilyType": "financings",
                  "ApiVersion": "1"
                },
                {
                  "ApiResourceId": "f1638844-c17d-4457-9996-4c4868a4dc12",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "051c9fd0-c23b-4052-bf73-db525cfd770c",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/invoice-financings/v1/contracts"
                    },
                    {
                      "ApiDiscoveryId": "f6f3c89c-4426-4c4a-beb3-64eb58dbc0b4",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/invoice-financings/v1/contracts/{contractId}/warranties"
                    },
                    {
                      "ApiDiscoveryId": "174c3de3-75ff-49a0-bd04-4cba0567d5c7",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/invoice-financings/v1/contracts/{contractId}/payments"
                    },
                    {
                      "ApiDiscoveryId": "510f8a1c-7f39-401c-a6df-7905ff272f3d",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/invoice-financings/v1/contracts/{contractId}"
                    },
                    {
                      "ApiDiscoveryId": "49a1b7a2-8047-409e-89d2-613c2419f8de",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/invoice-financings/v1/contracts/{contractId}/scheduled-instalments"
                    }
                  ],
                  "ApiFamilyType": "invoice-financings",
                  "ApiVersion": "1"
                },
                {
                  "ApiResourceId": "f4d49885-1fa3-4b01-8d7d-ac2cf106b14a",
                  "ApiDiscoveryEndpoints": [
                    {
                      "ApiDiscoveryId": "e5d26363-9e53-405d-b762-1054cf69710c",
                      "ApiEndpoint": "https://matls-auth-sandbox.hom.bocombbm.com.br/open-banking/resources/v1/resources"
                    }
                  ],
                  "ApiFamilyType": "resources",
                  "ApiVersion": "1"
                }
              ],
              "AutoRegistrationSupported": true,
              "CustomerFriendlyLogoUri": "https://www.bocombbm.com.br/A2_BocomBBM_CMYK.svg",
              "DeveloperPortalUri": "https://portal-bancobbm.sensedia.com",
              "AuthorisationServerId": "2c7f2ab1-9a3e-4021-9afe-7c4c796dfa9a",
              "Organisation": {
                "OrganisationId": "4a7250ec-eac5-5d8f-b7eb-dc0e8e880203",
                "Status": "Active",
                "OrganisationName": "BCO BOCOM BBM S.A.",
                "CreatedOn": "2021-01-07T11:11:51.793Z",
                "LegalEntityName": "BANCO BOCOM BBM S.A.",
                "CountryOfRegistration": "BR",
                "CompanyRegister": "Cadastro Nacional da Pessoa Jurídica",
                "RegistrationNumber": "15114366000240",
                "RegistrationId": "15114366",
                "RegisteredName": "BANCO BOCOM BBM S.A.",
                "AddressLine1": "Av. Barão de Tefé 34",
                "AddressLine2": "Saúde",
                "City": "RIO DE JANEIRO",
                "Postcode": "20220-460",
                "Country": "BR",
                "ParentOrganisationReference": "",
                "RequiresParticipantTermsAndConditionsSigning": false,
                "AuthorityClaims": [
                  {
                    "Status": "Active",
                    "AuthorisationDomain": "Open Banking Brasil ",
                    "Role": "PAGTO",
                    "RegistrationId": "1"
                  },
                  {
                    "Status": "Active",
                    "AuthorisationDomain": "Open Banking Brasil ",
                    "Role": "DADOS",
                    "RegistrationId": "ispb-oob-dados"
                  }
                ]
              }
            }
          ]
