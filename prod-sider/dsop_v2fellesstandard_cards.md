---
title: "Endpoint Cards V.2.0"
slug: "dsop_v2fellesstandard_cards"
id: "dsop_v2fellesstandard_cards"
keywords: ["sample"]
---

List of cards associated with the specified account and period. Empty list if no hits.

<br \/>

The principles are defined in [Principles for delivery of information via DSOP Control information common standard.](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard)

## Input parameters

Values set by data consumer.

It is the data providers' responsibility to validate all requests from the data consumers and to make sure that all
requests are validated well enough. See some [recommendations regarding validation of requests in Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_validation.html).

| Parameter | Description | Comment |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accountReference (M) | A unique reference to the account, but should not be the account number and not simply decoded to an account number. | - |
| AccountInfoRequestID (M) | Consumers case reference id/number | [Link to Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html) |
| CorrelationID (M) | Unique identifier for the technical request | [Link to Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html) |
| Legal-Mandate* (M) | Legal basis the data providers should validate. Formatted encoded text. | See the specific DSOP Service documentation for the valid legal mandates |
| AdditionalReferenceID* (O) | Reference ID when Legal-Mandate is not adequate alone, or to identify requester at consumer. Should be validated according to the Legal-Mandate. Formatted encoded text. | Required for some DSOP Services. More information in  [More information in Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html) |
| AdditionalReferenceIDType* (O) | What type of reference to expect in AdditionalReferenceID | Required for some DSOP Services. More information in  [More information in Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html) |
| RequesterID (O)	               | *RequesterID* identifies the user who makes the request at the public agency. The public agencies are free to pseudonymise *RequesterID* so that the financial institutions cannot link this ID to the agency's user or natural person. In turn, the public agency must be able to link *RequesterID* to a user in the public agency. It is important that *RequesterID* <u>remains constant per user and is not reused for new users</u>first six</u>last four</u &amp;amp; gt; digits are the maximum number of digits that can be delivered. The rest must be
filled with 'X's  and no spaces.

### paymentCards.holderName

*Deliver*

Name of the card holder.

### paymentCards.startDate

*Deliver*

When card was valid from (pattern: ^[0-9]+-([0][1-9]
|
1[0-2])$): YYYY-MM

### paymentCards.expiryDate

*Deliver*

When card is expiring  (pattern: ^[0-9]+-([0][1-9]
|
1[0-2])$): YYYY-MM

### paymentCards.cardIssuerName

*Deliver*

Name of the financial institution that issued the card.

### paymentCards.type

*Deliver*

Type of card.

|[creditCard, debitCard]|

### paymentCards.cardStatus

*Deliver*

Status of the card:
- active: The card is active.
- blocked: The card is blocked.

|[active, blocked]|

### paymentCards.versionNumber

*Deliver*

If the card number is reused when reissuing a card, then each reissued card gets a separate version number. Version of
a card [1 to 9].

### paymentCards.cardIssuerIdentifier

*Deliver*

### paymentCards.cardIssuerIdentifier.countryOfResidence

*Deliver*

CountryCode. The country the card issuer belongs to in ISO 3166-1/Alpha-2 code format.

### paymentCards.cardIssuerIdentifier.value

*Mandatory conditional*

Organization number of the card issuer.
### paymentCards.cardIssuerIdentifier.type

*Mandatory conditional*

* countryIdentificationCode: The national registration code for businesses, enterprise, organizations and companies that is retrieved from the National register for organizations. In Norway this would be from BRREG.
* nationalIdentityNumber: Used for persons. The national identitycode for persons. In Norway this would be P or D numbers from FREG.

|[countryIdentificationCode, nationalIdentityNumber]|

## Change log

| Date | Version | Change |
| ---------- | --------- | ------------------------------------------------------------------------------------------------ |
| 20.03.24 | 2.0 | New version of the DSOP Control API generating extensive changes throughout all documentation. |
| 03.05.23 | 1.2 | Added data model for V.1.2, includes responseDetails |

