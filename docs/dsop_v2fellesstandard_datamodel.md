---
title: "Data model - Description of the endpoints in the DSOP Control Common Standard APIs"
slug: "dsop_v2fellesstandard_datamodel"
id: "dsop_v2fellesstandard_datamodel"
keywords:
  - "sample"
---

*This document describes the data model for each endpoint in the DSOP Control Common standard APIs (Customer Relations 
Overview API and DSOP Control API), both for input parameters and the response. Technical specification of the APIs can 
be found in the [API-specification documentation](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_api_specification.html). 
The technical specification must be followed when implementing the different endpoints of the APIs that are part of the 
DSOP Control Common Standard. Documentation describing how data is either exchanged or protected is to be found in the
[Architecture documentation](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_architecturedocument.html) or in the 
[Security documentation](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_securitydesign.html).*

*Guidelines regarding input-parameter validation criteria as well as which data element are to be delivered for each DSOP 
Service based on the Common Standard are not described in this document but can be found in each DSOP Service 
documentation.*

Each endpoint in both the Customer Relations Overview and DSOP Control APIs return several fields and subfields. Some 
fields are mandatory due to technical reasons.

An overview of the relevant endpoints per DSOP Service is presented in the table below. This is according to the legal 
basis for each DSOP Service. 



## Description of all input- and output parameters in the APIs

The APIs have both structured and free text fields in each endpoint. Structured fields have a specific purpose and may 
have legal values (enums) or a specified format. If there is a matching structured field in the API definition, structured 
information shall be placed there and not in the free text fields. The free text fields are intended for information not 
fitting into any structured field, for instance free text the data provider has received from the control object issuing 
the transaction.

See description of all fields in each endpoint below. Some DSOP Services will have to filter the response and only return 
a limited portion of the fields that are initially available in the common standard. 


| Endpoints                           | Data model for V.2.0                                                                                                               |
|:------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
| **Customer Relations Overview API** |                                                                                                                                    |
| customerRelationships               | [Description of customerRelationships V.2.0](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_customerrelationships.html)       |
| accountServicingProvider            | [Description of accountServicingProvider V.2.0](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountservicingprovider.html) |
| **DSOP Control API**                |                                                                                                                                    |
| Accounts                            | [Description of Accounts V.2.0](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts.html)                                 |
| Account details                     | [Description of Account details V.2.0](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails.html)                    |
| Transactions                        | [Description of Transactions V.2.0](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html)                         |
| Cards                               | [Description of Cards V.2.0](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_cards.html)                                       |
| Roles                               | [Description of Roles V.2.0](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_roles.html)                                       |


## Principles for delivery of information via DSOP Control information common standard

A key principle of the DSOP Control API is that data providers should aim to deliver information for all fields included in the response, unless specified otherwise for a particular DSOP service, regardless of whether the fields are mandatory.

However, it is crucial to understand the following specification:

A mandatory field does not always mean that data will be available for it. For instance, if a transaction is a bill payment via an online bank, there will be no information about a payment card associated with this transaction, and thus, no payment card information will be returned.

Therefore, specific delivery principles have been established for the DSOP Control API to account for these typical scenarios.

These delivery principles are outlined in the table below:

| Abbreviations | Delivery principle | Description |
|---------------|--------------------|-------------|
| M | Mandatory | This field must be included in the response, even if the data provider has no data. Omitting this field can cause the receiving API to fail. |
| D | Deliver | Data providers must deliver all requested data if possible*. If the data exists in the provider's systems and can be delivered through the DSOP Control API, it must be included in the response. However, if the data does not exist or cannot be delivered through the API, the field can be omitted. |
| MC | Mandatory conditional | - Child fields, where the Parent field is marked "M" (Mandatory), are crucial for providing value to the Parent field and must be delivered, even if there is no data. (Refer to the separate description for instructions on how to return empty or no data in fields.) Omitting this field in the response can cause the receiving API to fail. <br> - If a parent field marked with "D" is included in the response, the child field marked with "MC" must also be returned if the data exists in the provider's systems and can be delivered through the DSOP Control API. |
| O | Optional | Only used in input parameters |

 &#42; If the data provider cannot deliver all requested data through the Control API but has more data available offline, responseDetails.status must return the value "partial," and a reason must be provided in responseDetails.message.





## Change log

| Date     | Version | Change                                                                                         |
|----------|---------|------------------------------------------------------------------------------------------------|
| 25.02.25 | 2.0.1   | Introduction of a new section “Principles for delivery of information via DSOP Control information common standard” in the document.  |
| 20.03.24 | 2.0     | New version of the DSOP Control API generating extensive changes throughout all documentation.      |
| 03.05.23 | V.1.2   | Added V.1.2, added responseDetails   |
| 17.09.20 | V.1.1   | Changes from V.1.0 to V.1.1, Version 1.1 approved by "Styringsgruppe Kontrollinformasjon"      |