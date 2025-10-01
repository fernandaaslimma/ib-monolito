FORMAT: 1A

## ib credit - [/creditportfolio/v1/contracts]

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
                "number": "1234567890",
                "id": 1,
                "product": {
                    "name" :"CCB",
                    "id": "7000"
                },
                "paymentMethod": "TED",
                "rates": {
                    "annual": 10.512,
                    "nominal": 20.522,
                    "effective": 30.213
                },
                "asset": {
                    "id": "xpto12345"
                },
                "startDate": "2019-11-16T12:33:54.271Z",
                "dueDate": "2019-11-16T12:33:54.271Z",
                "tenure": {
                    "total": 200,
                    "remaining": 10
                }
            },
            {
                "number": "987654321",
                "id": 2,
                "product": {
                    "name" :"CCB",
                    "id": "7000"
                },
                "paymentMethod": "DOC",
                "rates": {
                    "annual": 10.511,
                    "nominal": 20.5234,
                    "effective": 30.23
                },
                "asset": {
                    "id": "xpto"
                },
                "startDate": "2007-11-16T12:33:54.271Z",
                "dueDate": "2017-11-16T12:33:54.271Z",
                "tenure": {
                    "total": 200,
                    "remaining": 10
                }
            }
        ]



## ib credit - [/creditportfolio/v1/contracts/1/installment-balances]

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
                "currency": "BRL",
                "referenceDate": "2018-11-16T12:33:54.271Z",
                "maturityDate": "2018-11-16T12:33:54.271Z",
                "principalValue": 50000.00,
                "monetaryAdjustmentValue": 150000,
                "interestValue": 200000,
                "latePaymentCommissionValue": 5000,
                "iofValue": 20000,
                "defaultInterestValue": 100000,
                "fineValue": 150000,
                "totalValue": 1000000000
            },
            {
                "currency": "BRL",
                "referenceDate": "2018-11-16T12:33:54.271Z",
                "maturityDate": "2018-11-16T12:33:54.271Z",
                "principalValue": 45000.00,
                "monetaryAdjustmentValue": 120000,
                "interestValue": 220000,
                "latePaymentCommissionValue": 5500,
                "iofValue": 10000,
                "defaultInterestValue": null,
                "fineValue": 180000,
                "totalValue": 100000
            }
        ]
