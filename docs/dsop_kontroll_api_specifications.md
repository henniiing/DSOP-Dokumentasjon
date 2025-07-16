---
title: "API specification"
slug: "dsop_kontroll_api_specification"
id: "dsop_kontroll_api_specification"
keywords:
  - "sample"
---

*Every DSOP solution based on the DSOP Control Common Standard must use this API-specification. The API-specification in Swagger is the technical specification to follow when implementing these APIs.* 

The API-specification for the DSOP Control Common Standard consist of several APIs, and each API consist of several fields and subfields. All fields are to be provided, delivered (as far as the financial institution has data for the fields) and formatted according to the API-specification and the description of the fields from the data model, unless otherwise stated for the specific DSOP solution.

A list of the applicable and relevant APIs and the necessary minimum version for each DSOP solution is described in the [data model](https://dokumentasjon.dsop.no/dsop_kontroll_datamodel.html) section. The data model also give a full description of the output parameters for the current versions, and specify what fields in each API that should be delivered for each DSOP solution based on the DSOP Control Common Standard. 

Link to different versions of the DSOP Control Common Standard is presented in the table below. 



| Version       | Description                                                   | Open API-specification                                                           | 
|---------------|---------------------------------------------------------------|----------------------------------------------------------------------------------|
| Version 1.0   | Original version when financial institutions joined the pilot | [API-specification V.1.0](https://bitsnorge.github.io/dsop-accounts-api/)        |
| Version 1.1   | Current version for all financial institutions                | [API-specification V.1.1](https://bitsnorge.github.io/dsop-accounts-api-v1p1/)   | 
| *Version 1.2* | *Working document for new version - for pilot banks*          | *[API-specification V.1.2](https://bitsnorge.github.io/dsop-accounts-api-v1p2/)* |


## Error codes with associated error situations

There are several reasons which can cause errors in the API’s, some of them are:
- Security errors related to access to the API’s.
- Incorrect input parameters either query, header or path parameters
- Invalid combinations of input parameters
- Errors on the Data Providers’ side when they are not able to respond or return data.

The link below describes some of these specific error situations that the Data Consumers may encounter, with http error codes and associated message codes (ACC-xxx) to be returned by the Data Providers. They must be returned in a consistent manner. The intention is to ensure that Data Consumers get harmonized API behaviour across all API providers. The Data Providers will strive to follow the specification as far as possible, and return descriptive messages so that the Data Consumers understand error situations as best as possible. 

See **[the specific error situations with http error codes and associated message codes (ACC-xxx)](assets\DSOP Control-Specific error situations with http error codes and associated message codes V.1.2.pdf)**


## Change log

| Date     | 	Version	of page | Change                                                                                                                                                                       | 	Link in document                                                                                                                                                                                                                                                             |
|----------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 11.02.21 | V.1.2.0          | For the pilot banks, added working document of the next API-version in the table.                                                                                            | [Link to the working document for next API-version - for pilot banks](https://dokumentasjon.dsop.no/dsop_kontroll_api_specification.html)                                                                                                                    |
| 27.11.20 | V.1.1.1          | Change in all API error descriptions so that API providers understand what to return in different error situations. Fixed misspelling from RithtToSeeOnly to RightToSeeOnly. | [Link to API-specification](https://bitsnorge.github.io/dsop-accounts-api-v1p1/) and [Link to Error codes with associated error situations](https://dokumentasjon.dsop.no/dsop_kontroll_api_specification.html#error-codes-with-associated-error-situations) |
| 17.09.20 | 	V.1.1.0         | 	Changes from V.1.0 to V.1.1	                                                                                                                                                | 	[Link til change log data model](https://dokumentasjon.dsop.no/dsop_kontroll_changelogdatamodel.html)                                                                                                                                                       |



