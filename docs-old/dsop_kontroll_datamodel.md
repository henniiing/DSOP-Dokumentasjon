---
title: "Data model - Description of the APIs in DSOP Control Common Standard"
slug: "dsop_kontroll_datamodel"
id: "dsop_kontroll_datamodel"
keywords:
  - "sample"
---

*The [API-specification](/dsop_kontroll_api_specification) is the technical specification to follow when implementing the APIs that are part of the DSOP Control Common Standard. In addition to the technical specification, this documentation describes the data model for each API, and guidelines regarding what to deliver and how for each DSOP Solution based on the Common Standard.*

Each API consist of several fields and subfields. Some fields are marked as mandatory due to technical reasons. Regardless of whether the fields are marked as mandatory or not, all fields are to be provided as long as the bank/financial institution holds the data, unless otherwise stated for the specific DSOP Solution. An overview of the relevant APIs per DSOP Solution is presented in the table below. This is according to the legal basis for each DSOP Solution.

## Overview of the DSOP Control Common Standard - relevant APIs and versions per DSOP solution

| DSOP Solution                                          | Minimum required version of APIs | APIs                                                          |
|--------------------------------------------------------|----------------------------------|---------------------------------------------------------------|
| DSOP Kontrollinformasjon (Skatteetaten, NAV, Politiet) | V.1.0                            | Accounts<br >Cards |
| DSOP Konkursbehandling (Brønnøysundregistrene)         | V.1.0                            | Accounts<br >Transactions                   |



## Description of all fields in the APIs
The API’s have both structured and free text fields. Structured fields have a specific purpose and may have legal values (enums) or specified format. If there is a matching structured field in the API definition, structured information shall be placed there and not in the free text fields. The free text fields are intended for information not fitting into any structured field, for instance free text the financial institution has received from the party issuing the transaction

See description of all fields in each API below. Some DSOP Solutions should only return parts of the fields in the API, this is also specified in each description-link.

| API             | Data model V.1.1                                                                                                      | Data model V.1.2                                                                                                                 |
|:----------------|:----------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------|
| Accounts        | [Description of Accounts](/dsop_kontroll_apiaccountlist)           | [Description of Accounts V.1.2](/dsop_kontroll_apiaccountlist_v1_2)           |
| Account details | [Description of Account details](/dsop_kontroll_apiaccountdetails) | [Description of Account details V.1.2](/dsop_kontroll_apiaccountdetails_v1_2) |
| Transactions    | [Description of Transactions](/dsop_kontroll_apitransactions)      | [Description of Transactions V.1.2](/dsop_kontroll_apitransactions_v1_2)      |
| Cards           | [Description of Cards](/dsop_kontroll_apicards)                    | [Description of Cards V.1.2](/dsop_kontroll_apicards_v1_2)                    |
| Roles           | [Description of Roles](/dsop_kontroll_apiroles)                    | [Description of Roles V.1.2](/dsop_kontroll_apiroles_v1_2)                    |



## Change log

| Date     | Version | Change                      | Comment                                                      | Link in document                                                                             |
|----------|---------|-----------------------------|--------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 17.09.20 | V.1.1   | Changes from V.1.0 to V.1.1 | Version 1.1 approved by "Styringsgruppe Kontrollinformasjon" | [Link](/dsop_kontroll_changelogdatamodel) |
| 03.05.23 | V.1.2   | Added V.1.2                 | Added responseDetails                                        | [Link](/dsop_kontroll_changelogdatamodel) |