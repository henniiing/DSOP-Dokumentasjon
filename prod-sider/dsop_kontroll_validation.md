---
title: "Recommendations regarding validation of requests in Control API"
slug: "dsop_kontroll_validation"
id: "dsop_kontroll_validation"
keywords: ["sample"]
---

It is the data providers responsibility to validate all requests' from the data consumers. It is up to the data provider to make sure that all requests are validated well enough.

In order to ensure higher level of control, there are listed a few recommendations below. This section is about validating some of the input-parameters (or a combination of them), not about validating the format of the input-parameters. We strongly suggest a clear assessment about validations to be implemented in the solution. It is up to the data providers to implement the recommendations.

### Validation of access token

Data providers shall follow the recommendations regarding validation of access token in the [FAQ](https:/dokumentasjon.dsop.no/dsop_kontroll_faq.html#access-token-from-maskinporten) as best practice.

### Extra validation in relation to Konkursbehandling

For requests from Brønnøysundregistrene, we recommend an extra validation. 