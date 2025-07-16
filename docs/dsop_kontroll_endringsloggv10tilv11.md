---
title: "Change log data model"
slug: "dsop_kontroll_changelogdatamodel"
id: "dsop_kontroll_changelogdatamodel"
keywords:
  - "sample"
---

Below is the change log for change from V.1.1.0. of API to V.1.2.0.

## Responses

### Account list

| **Value**                 | **Change**           |
|---------------------------|----------------------|
| *responseStatus*          | Improved description |
| *responseDetails.status*  | New field            |
| *responseDetails.message* | New field            |

### Account details

| **Value**                 | **Change**           |
|---------------------------|----------------------|
| *responseStatus*          | Improved description |
| *responseDetails.status*  | New field            |
| *responseDetails.message* | New field            |

### Transactions

| **Value**                 | **Change**           |
|---------------------------|----------------------|
| *responseStatus*          | Improved description |
| *responseDetails.status*  | New field            |
| *responseDetails.message* | New field            |

### Cards

| **Value**                 | **Change**           |
|---------------------------|----------------------|
| *responseStatus*          | Improved description |
| *responseDetails.status*  | New field            |
| *responseDetails.message* | New field            |

### Roles

| **Value**                 | **Change**           |
|---------------------------|----------------------|
| *responseStatus*          | Improved description |
| *responseDetails.status*  | New field            |
| *responseDetails.message* | New field            |



Below is the change log for change from V.1.0.0. of API to V.1.1.0. New version is translated to English; however, translation is not entered into the change log.

Almost every description for API-specifications is enhanced and more detailed compared to previous version. Therefore, we recommend that you go through all the
fields to make sure they are correctly interpreted.

## Input-parameters

| **Input-parameter**         | **Change**                                                                                                                                                                                                           |
|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| *AccountInfoRequestID*      | New field (Description of new field in [Specification og eOppslag](https://dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#accountinforequestid))                                |
| *AdditionalReferenceIDType* | New field (Description of new field in [Specification of eOppslag](https://dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid)) |
| *AdditionalReferenceID*     | New field (Description of new field in [Specification of eOppslag](https://dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid)) |


## Responses

### Account list

| **Felt**                           | **Endring**                                                                         |
|------------------------------------|-------------------------------------------------------------------------------------|
| *responseStatus*                   | Improved description                                                                |
| *accounts.status*                  | Improved description                                                                |
| *accounts.type*                    | 3 new values and improved description                                               |
| *accounts.currency*                | Improved description about ISO standard 4217                                        |
| *accounts.primaryOwner*            | Improved description                                                                |
| *accounts.primaryOwner.permission* | Removed the value "noRight" and added value "rightToSeeOnly" + improved description |

### Account details

| **Felt**                          | **Endring**                                                                         |
|-----------------------------------|-------------------------------------------------------------------------------------|
| *responseStatus*                  | Improved description                                                                |
| *account.status*                  | Improved description                                                                |
| *account.type*                    | 3 new values and improved description                                               |
| *account.currency*                | Improved description about ISO standard 4217                                        |
| *account.balances*                | Improved description                                                                |
| *account.balances.registered*     | Improved description                                                                |
| *account.primaryOwner.permission* | Removed the value "noRight" and added value "rightToSeeOnly" + improved description |
| *account.startDate*               | Improved description                                                                |
| *account.endDate*                 | Improved description                                                                |

### Transactions

| **Felt**                                       | **Endring**                                         |
|------------------------------------------------|-----------------------------------------------------|
| *responseStatus*                               | Improved description                                |
| *transactions.transactionIdentifier*           | Changed format to "string" and improved description |
| *transactions.references*                      | Improved description                                |
| *transactions.references.values*               | Improved description                                |
| *transactions.references.type*                 | Improved description                                |
| *transactions.status*                          | Improved description                                |
| *transactions.transactionsCode.domain*         | Link to ISO 20022 codes and improved description    |
| *transactions.transactionsCode.family*         | Link to ISO 20022 codes and improved description    |
| *transactions.transactionsCode.subFamily*      | Link to ISO 20022 codes and improved description    |
| *transactions.transactionsCode.freeText*       | Improved description                                |
| *transactions.counterParties.type*             | Link to ISO 20022 codes                             |
| *transactions.additionalInfo*                  | Improved description                                |
| *transactions.currencyExchange*                | Improved description                                |
| *transactions.currencyExchange.sourceCurrency* | Improved description about ISO standard 4217        |
| *transactions.currencyExchange.targetCurrency* | Improved description about ISO standard 4217        |
| *transactions.currencyExchange.unitCurrency*   | Improved description about ISO standard 4217        |
| *transactions.registered*                      | ISO Date format and improved description            |
| *transactions.amount*                          | Improved description                                |
| *transactions.currency*                        | Improved description about ISO standard 4217        |
| *links*                                        | Updated link to english pages                       |

### Cards

| **Felt**         | **Endring**          |
|------------------|----------------------|
| *responseStatus* | Improved description |

### Roles

| **Felt**           | **Endring**                                                                         |
|--------------------|-------------------------------------------------------------------------------------|
| *responseStatus*   | Improved description                                                                |
| *roles.permission* | Removed the value "noRight" and added value "rightToSeeOnly" + improved description |


