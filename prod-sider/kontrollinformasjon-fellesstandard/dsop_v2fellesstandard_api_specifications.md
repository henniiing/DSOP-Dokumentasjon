---
title: "API specification"
slug: "/dsop_v2fellesstandard_api_specification"
id: dsop_v2fellesstandard_api_specification
---

*Every DSOP service based on the DSOP Control Common Standard must use this API-specification. The API-specification in
Swagger is the technical specification to follow when implementing these APIs.*

The API-specification for the DSOP Control Common Standard API consists of several endpoints, and each endpoint consists
of several fields and subfields.

Regarding DSOP Control API it is expected that all fields are to be provided, delivered (as far as the data
providers have data for the fields) and formatted according to the API-specification and the description of the fields
from the data model, unless otherwise stated for the specific DSOP service.

A list of the applicable and relevant endpoints and the necessary minimum version for each DSOP service is described in
the [data model](/dsop_v2fellesstandard_datamodel) section. The data model also gives a full description of the output parameters for the current
versions, and specifies which fields should be delivered for each DSOP service based on the DSOP Control Common Standard
for each endpoint.

Links to different versions of the DSOP Control Common Standard is presented in the table below.

## API for Customer Relation Overview

| Version | Description | Open API-specification |
| ------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Version 2.0 | New version for all data consumers | [API-specification V.2.0](https:/bitsnorge.github.io/dsop-kundeforhold-api/?urls.primaryName=Versjon%202%20Kundeforhold%20API)/ |

## API for DSOP Control

| Version | Description | Open API-specification |
| ----------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Version 1.0 | Original version (Not supported) | [API-specification V.1.0](https:/bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.1.0)/ |
| **Version 2.0** | **Current version for all data providers** | **[API-specification V.2.0](https:/bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0)/** |

## Error codes with associated error situations

There are several causes for errors in the endpoints of the DSOP Control API, some of them are:
* Security errors related to access to the API.
* Incorrect input parameters either in query, header or path parameters.
* Invalid combination of input parameters.
* Errors on the Data Providers' side when they are not able to respond or return data.

The document linked below describes some of these specific error situations that the Data Consumers may encounter, with
http error codes and associated message codes (ACC-xxx) to be returned by the Data Providers. They must be returned in
a consistent manner. The intention is to ensure that Data Consumers get harmonized API behaviour across all Data
Providers. The Data Providers will strive to follow the specification as far as possible, and return descriptive
messages so that the Data Consumers understand the error situations as best as possible. The document linked below is
based on the 2.0 version of the DSOP Control API.

See **[DSOP Control - HTTP error codes and specific error situations with associated message codes](/assets/HTTP error codes V.2.pdf)/**.

## Change log

| Date | Version | Change |
| ---------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 12.12.24 | 2.1 | Removed V.1.3 of customer relation overview API |
| 20.03.24 | 2.0 | New version of the DSOP Control API generating extensive changes throughout all documentation. |
| 11.02.21 | 1.2.0 | For the pilot banks, added working document of the next API-version in the table. |
| 27.11.20 | 1.1.1 | Change in all API error descriptions so that API providers understand what to return in different error situations. Fixed misspelling from RithtToSeeOnly to RightToSeeOnly. |
| 17.09.20 | 1.1.0 | Changes from V.1.0 to V.1.1 |
