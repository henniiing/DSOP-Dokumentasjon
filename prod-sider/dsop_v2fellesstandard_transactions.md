---
title: "Endpoint Transactions V.2.0"
slug: "dsop_v2fellesstandard_transactions"
id: "dsop_v2fellesstandard_transactions"
keywords: ["sample"]
---

Transactions for a specified account and period. Data providers should return an empty list if there are no hits.
Must support pagination on large result sets (min 1000).

<br \/>

The principles are defined in [Principles for delivery of information via DSOP Control information common standard.](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard)

## Input parameters

Values set by data consumer.

It is the data providers responsibility to validate all requests from the data consumers and to make sure that all
requests are validated well enough. See some [recommendations regarding validation of requests in Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_validation.html).

| Parameter | Description | Comment |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accountReference (M) | A unique reference to the account, but should not be the account number and not simply decoded to an account number. | - |
| AccountInfoRequestID (M) | Consumers case reference id/number | [Link to Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html) |
| CorrelationID (M) | Unique identifier for the technical request | [Link to Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html) |
| Legal-Mandate* (M) | Legal basis the data providers should validate. Formatted encoded text. | See the specific DSOP Service documentation for the valid legal mandates |
| AdditionalReferenceID* (O) | Reference ID when Legal-Mandate is not adequate alone, or to identify requester at data consumer. Should be validated according to the Legal-Mandate. Formatted encoded text. | Required for some DSOP Services. More information in  [More information in Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html) |
| AdditionalReferenceIDType* (O) | What type of reference to expect in AdditionalReferenceID | Required for some DSOP Services. More information in  [More information in Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html) |
| RequesterID (O)	               | *RequesterID* identifies the user who makes the request at the public agency. The public agencies are free to pseudonymise *RequesterID* so that the financial institutions cannot link this ID to the agency's user or natural person. In turn, the public agency must be able to link *RequesterID* to a user in the public agency. It is important that *RequesterID* <u>remains constant per user and is not reused for new users</u>first six</u>last four</u>transactions.creditDebitIndicator</i&amp;amp; gt; |
| 20.03.24 | 2.0 | New version of the DSOP Control API generating extensive changes throughout all documentation. |
| 03.05.23 | 1.2 | Added data model for V.1.2, includes responseDetails |

