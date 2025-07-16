---
title: "Recommendations regarding validation of requests in Control API"
slug: "dsop_kontroll_validation"
id: "dsop_kontroll_validation"
keywords:
  - "sample"
---

It is the data providers responsibility to validate all requests' from the data consumers. It is up to the data provider to make sure that all requests are validated well enough.  

In order to ensure higher level of control, there are listed a few recommendations below. This section is about validating some of the input-parameters (or a combination of them), not about validating the format of the input-parameters. We strongly suggest a clear assessment about validations to be implemented in the solution. It is up to the data providers to implement the recommendations.

### Validation of access token  

Data providers shall follow the recommendations regarding validation of access token in the [FAQ](https://dokumentasjon.dsop.no/dsop_kontroll_faq.html#access-token-from-maskinporten) as best practice.

### Extra validation in relation to Konkursbehandling

For requests from Brønnøysundregistrene, we recommend an extra validation. <br>See description here: [Anbefaling angående validering av forespørsler](https://dokumentasjon.dsop.no/dsop_konkurs_validering.html){:target="_blank"}.

### Validation of input-parameters

Of all the input-parameters that are required in requests to the Control API’s, we recommend the following validations:

* The data provider should validate the parameter Legal-Mandate and check that it is a valid legal basis for the data consumer that sends the request (see valid [Legal Mandates for the Data Consumers for Control Information](https://dokumentasjon.dsop.no/dsop_kontroll_juridisk.html#hjemler-for-etatene)) and [Legal Mandate for Konkursbehandling](https://dokumentasjon.dsop.no/dsop_konkurs_juridisk.html#hjemler-for-bostyrer-orgnr-974-760-673){:target="_blank"}.  

* For some of the data consumers, their Legal Mandate is not adequate alone without extra information in the parameter AdditionalReferenceIDType. It is recommended to validate if the entered Legal Mandate requires information in AdditionalReferenceIDType, and that the correct Type for the Legal Mandate is entered (see [AdditionalReferenceIDType and AdditionalReferenceID](https://dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid)).

* It should be validated that AdditionalReferenceID is filled with information according to the entered AdditionalReferenceIDType (see [AdditionalReferenceIDType and AdditionalReferenceID](https://dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid)).

* It should be validated that the data consumer doesn't request data for a longer period than allowed (see the legal period for each legal authority in [Juridiske Rammebetingelser](https://dokumentasjon.dsop.no/dsop_kontroll_juridisk.html#hjemler-for-etatene))

* It should be validated that the data consumer only request data from the API’s they should have access to (see what API’s each legal authority can access)


By validating and logging input-parameters from data consumers correctly, the data providers will be better suited to avoid the delivery of surplus information. Implementing such logic is the responsibility of the data provider.


## Change log

| Date       | Change in documentation                                   | Link                                                                                                        |
|------------|-----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| 03.04.2023 | Linked to FAQ                                             | [FAQ](https://dokumentasjon.dsop.no/dsop_kontroll_faq.html#access-token-from-maskinporten) |
| 08.01.2021 | Added this recommendation-page as a part of documentation |                                                                                                             |
