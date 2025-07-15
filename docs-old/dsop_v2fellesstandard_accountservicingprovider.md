---
title: "Endpoint accountServicingProvider V.2.0"
slug: "dsop_v2fellesstandard_accountservicingprovider"
id: "dsop_v2fellesstandard_accountservicingprovider"
keywords:
  - "sample"
---

Lookup customer relationships for governmental institutions (data consumers).


### Abbreviations

| Abbreviations |                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                              |
|---------------|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| M             | Mandatory             | Must be part of the response, even if there is no data. Not returning this field in the response can break the receiving API.                                                                                                                                                                                                                                                                                                            |
| D             | Deliver               | Providers are obligated to deliver all requested data if they can. If the data exists in the Producers systems and is possible to deliver through the API, it must be part of the response. If the data does not exist or cannot be delivered through the API, the field can be omitted.                                                                                                                                                 |
| MC            | Mandatory conditional | - Child fields where Parent field is marked «M»(Mandatory) is crucial to give value to the Parent and must be delivered, even if there is no data. (See separate description for how to return empty or no data in fields.) Not returning this field in the response can break the receiving API. <br > - As long as a parent field marked with “D” is part of the response, the child field marked with “MC” must also be returned. |
| O             | Optional              | Only used in input parameters                                                                                                                                                                                                                                                                                                                                                                                                            |



## Input parameters

Values set by data consumer.

It is the data providers responsibility to validate all requests from the data consumers and to make sure that all
requests are validated well enough.



| Parameter                | Description                                                            | Comment                                                                                                                                   |
|--------------------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Authorization (M)        | Access token provided by Maskinporten                                  | [Link to Maskinporten](https:/www.digdir.no/felleslosninger/maskinporten/869)                                                            |
| AccountID (M)	           | Identifier for the account number                                      | -                                                                                                                                         |
| CorrelationID (M)        | Unique identifier for the technical request                            | [Link to Overall description of the DSOP Control API](/dsop_v2fellesstandard_specification_of_eoppslag) |
| Legal-Mandate* (M)       | Legal basis the data provider should validate. Formatted encoded text. | See the specific DSOP Service documentation for the valid legal mandates                                                                  |
| AccountInfoRequestID (M) | Consumers case reference id/number                                     | [Link to Overall description of the DSOP Control API](/dsop_v2fellesstandard_specification_of_eoppslag) |


## Responses

Values in response from the solution.


| Value                                                                                                                  | Level 1 | 
|:-----------------------------------------------------------------------------------------------------------------------|:--------|
| [organizationID (M)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accountservicingprovider.html#organizationID) |         |
| [bankName (M)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accountservicingprovider.html#bankName)             |         |



## Description of all response elements in the API

### organizationID

*Mandatory*

Organization number for the financial institution servicing the account.


### bankName

*Mandatory*

Name of the financial institution servicing the account.


## Change log

| Date     | Version | Change                                                                                         |
|----------|---------|------------------------------------------------------------------------------------------------|
| 20.03.24 | 2.0     | New version of the DSOP Control API generating extensive changes throughout all documentation. |

