---
title: "Recommendations regarding validation of requests in Control API"
slug: "dsop_v2fellesstandard_validation"
id: "dsop_v2fellesstandard_validation"
keywords: ["sample"]
---

It is the Data Providers responsibility to validate all requests from the Data Consumers. It is up to the Data Providers
to make sure that all requests from the Data Consumers are validated well enough.

In order to ensure higher level of control, this document lists a set of recommendations regarding general validation
that can be implemented by the Data Providers for the DSOP Control Common Standard. We strongly suggest a clear
assessment about validations to be implemented in the DSOP services.

## Generic DSOP Control validations

This section is about validating some input-parameters across the various DSOP Services.

### Validation of access token

The Data Providers shall follow the recommendations regarding validation of access token in the [FAQ](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_faq.html#access-token-from-maskinporten)
as best practice. A Data Consumer should never get access to the API without a valid token from Maskinporten.

### Validation of input-parameters

Of all the input-parameters that are required in requests to the Control APIs, we recommend the following validations:

* The data provider should validate the parameter Legal-Mandate and check that it is a valid legal basis for the data consumer that sends the request.
* For some of the data consumers, their Legal Mandate is not adequate alone without extra information in the parameter AdditionalReferenceIDType. It is recommended to validate if the entered Legal Mandate requires information in AdditionalReferenceIDType, and that the correct type for the Legal Mandate is given.
* It should be validated that AdditionalReferenceID is filled with information according to the entered AdditionalReferenceIDType.
* The time period should be validated in accordance with the valid time period allowed.
* The Data Providers should validate the access to the specific endpoints that are part of a DSOP Service.
* The Data Providers should validate the format of the input parameter in accordance with the current API specification.

See also the specific validation criterias per DSOP Service in the respective solution descriptions (løsningbeskrivelser).

## Change log

| Date | Version | Change in documentation |
| ------------ | --------- | ------------------------------------------------------------------------------------------------ |
| 20.03.24 | 2.0 | New version of the DSOP Control API generating extensive changes throughout all documentation. |
| 03.04.2023 | 1.1 | Linked to FAQ |
| 08.01.2021 | 1.0 | Added this recommendation-page as a part of documentation |
