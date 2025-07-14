---
title: "Endpoint customerRelationships V.2.0"
slug: "dsop_v2fellesstandard_customerrelationships"
id: "dsop_v2fellesstandard_customerrelationships"
keywords:
  - "sample"
---

Lookup customer relationships for governmental institutions (data consumers). 


### Abbreviations

| Abbreviations |                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                              |
|---------------|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| M             | Mandatory             | Must be part of the response, even if there is no data. Not returning this field in the response can break the receiving API.                                                                                                                                                                                                                                                                                                            |
| D             | Deliver               | Providers are obligated to deliver all requested data if they can. If the data exists in the Producers systems and is possible to deliver through the API, it must be part of the response. If the data does not exist or cannot be delivered through the API, the field can be omitted.                                                                                                                                                 |
| MC            | Mandatory conditional | - Child fields where Parent field is marked «M»(Mandatory) is crucial to give value to the Parent and must be delivered, even if there is no data. (See separate description for how to return empty or no data in fields.) Not returning this field in the response can break the receiving API. <br> <br> - As long as a parent field marked with “D” is part of the response, the child field marked with “MC” must also be returned. |
| O             | Optional              | Only used in input parameters                                                                                                                                                                                                                                                                                                                                                                                                            |



## Input parameters

Values set by data consumer.

It is the data providers responsibility to validate all requests from the data consumers and to make sure that all 
requests are validated well enough. 



| Parameter                | Description                                                                                                                                                                                                                                                                                                                    | Comment                                                                                                                                   |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Authorization (M)        | Access token provided by Maskinporten                                                                                                                                                                                                                                                                                          | [Link to Maskinporten](https://www.digdir.no/felleslosninger/maskinporten/869)                                                            |
| CustomerID (M)           | Identifier for the control object (personal identification number, D-number or organization number).                                                                                                                                                                                                                           | -                                                                                                                                         |
| CorrelationID (M)        | Unique identifier for the technical request                                                                                                                                                                                                                                                                                    | [Link to Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html) |
| Legal-Mandate* (M)       | Legal basis the data provider should validate. Formatted encoded text.                                                                                                                                                                                                                                                         | See the specific DSOP Service documentation for the valid legal mandates                                                                  |
| AccountInfoRequestID (M) | Consumers case reference id/number                                                                                                                                                                                                                                                                                             | [Link to Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html) |
| onlyPrimaryOwner (O)     | Parameter to filter on primary owners. If value is true, the query will only return the customers that own at least one account or equivalent that can be used for payment transactions or hold available funds in the financial institution. The field is temporarily optional and will temporarily have default value false. | -                                                                                                                                         |
| fromDate (M)             | From date                                                                                                                                                                                                                                                                                                                      | -                                                                                                                                         |
| toDate (M)               | To date                                                                                                                                                                                                                                                                                                                        | -                                                                                                                                         |




## Responses

Values in response from the solution.


| Value                                                                                                 | Level 1                                                                                                                        | 
|:------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------|
| [**banks (M)**](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_customerrelationships.html#banks) |                                                                                                                                |
|                                                                                                       | [banks.organizationID (M)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_customerrelationships.html#banksorganizationID) |
|                                                                                                       | [banks.bankName (M)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_customerrelationships.html#banksbankname)             |     
|                                                                                                       | [banks.activeAccount (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_customerrelationships.html#banksactiveAccount)  |
|                                                                                                       | [banks.ownershipType (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_customerrelationships.html#banksownershipType)  |




## Description of all response elements in the API

### banks

*Mandatory*


### banks.organizationID

*Mandatory*

Organization number for the financial institution.


### banks.bankName

*Mandatory*

Name of the financial institution.


### banks.activeAccount

*Mandatory conditional*

True, when the bank customer is owner of an account that can be credited through NICS and when toDate = today. Otherwise, false.

|[TRUE, FALSE]|


### banks.ownershipType

*Mandatory conditional*

This property will be included when onlyPrimaryOwner has been included in the request.
* primaryOwner: the customer owns at least one account or equivalent that can be used for payment transactions or hold available funds in the financial institution. 
* notPrimaryOwner: the customer has or had a customer relationship with the financial institution but does/did not own an account or equivalent that can be used for payment transactions or hold available funds in the financial institution. 
* unknown: the system is unable to find out the role the customer has in the financial institution due to missing historical data.

|[primaryOwner, notPrimaryOwner, unknown]|




## Change log

| Date     | Version | Change                                                                                         |
|----------|---------|------------------------------------------------------------------------------------------------|
| 20.03.24 | 2.0     | New version of the DSOP Control API generating extensive changes throughout all documentation. |

