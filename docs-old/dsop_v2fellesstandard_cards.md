---
title: "Endpoint Cards V.2.0"
slug: "dsop_v2fellesstandard_cards"
id: "dsop_v2fellesstandard_cards"
keywords:
  - "sample"
---

List of cards associated with the specified account and period. Empty list if no hits.

<br >.	 | Even though this parameter is technically optional, it could become logically mandatory for a given DSOP service.                                                                                           |
| fromDate (M)                   | Date (included) from which the time period for the data delivery starts.	                                                                                                                                                                                                                                                                                                                                                                   | -                                                                                                                                                                                                           | 
| toDate (M)                     | Date (included) from which the time period for the data delivery ends.                                                                                                                                                                                                                                                                                                                                                                      | -                                                                                                                                                                                                           |

**It is recommended to validate AdditionalReferenceID and AdditionalReferenceIDType according to the legal-mandate.*


## Responses

Values in response from the data providers.

All fields are to be provided as long as the data provider holds the data, regardless of whether the fields
are marked as mandatory or not. This is according to the legal basis.

| Value                                                                                                | Level 1                                                                                                                             | Level 2                                                                                                                                                                  |
|:-----------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [**responseDetails (D)**](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_cards#responsedetails) |                                                                                                                                     |                                                                                                                                                                          |                                                                                                                                                                                               |
|                                                                                                      | [responseDetails.status (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_cards#responsedetailsstatus)                       |                                                                                                                                                                          |                                                                                                                                                                                               |
|                                                                                                      | [responseDetails.message (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_cards#responsedetailsmessage)                     |                                                                                                                                                                          |                                                                                                                                                                                               |
| [**paymentCards (D)**](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_cards#paymentcards)       |
|                                                                                                      | [paymentCards.cardIdentifier (MC)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_cards#paymentcardscardidentifier)            |
|                                                                                                      | [paymentCards.holderName (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_cards#paymentcardsholdername)                     |
|                                                                                                      | [paymentCards.startDate (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_cards#paymentcardsstartdate)                       |
|                                                                                                      | [paymentCards.expiryDate (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_cards#paymentcardsexpirydate)                     |
|                                                                                                      | [paymentCards.cardIssuerName (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_cards#paymentcardscardissuername)             |
|                                                                                                      | [paymentCards.type (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_cards#paymentcardstype)                                 |
|                                                                                                      | [paymentCards.cardStatus (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_cards#paymentcardscardstatus)                     |
|                                                                                                      | [paymentCards.versionNumber (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_cards#paymentcardsversionnumber)               |
|                                                                                                      | [paymentCards.cardIssuerIdentifier (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_cards#paymentcardscardissueridentifier) |
|                                                                                                      |                                                                                                                                     | [paymentCards.cardIssuerIdentifier.countryOfResidence (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_cards#paymentcardscardissueridentifiercountryofresidence) |
|                                                                                                      |                                                                                                                                     | [paymentCardscardIssuerIdentifier.value (MC)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_cards#paymentcardscardissueridentifiervalue)                           |
|                                                                                                      |                                                                                                                                     | [paymentCards.cardIssuerIdentifier.type (MC)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_cards#paymentcardscardissueridentifiertype)                            |

## Description of all response elements in the API

### responseDetails

*Deliver*

### responseDetails.status

*Deliver*

Indicates whether this is a complete answer, or whether there is data offline that cannot be retrieved through the API.
* partial: If there is any data in the producers systems that can be retrieved manually and is not part of the API response,
  or if the provider wishes to be contacted via another channel by the consumer.
* complete: If there is no more available data that can be retrieved manually. All known data has been returned in the response.

responseDetails.status is not to be used as an indicator for paginating.

|[partial, complete]|


### responseDetails.message

*Deliver*

In case of responseDetails.status partial, responseDetails.message indicates the reason why not all data has been delivered
through the API in order to inform the data consumers about the situation, and enable them to decide if it is necessary
to send a digital letter to the Data provider or not. A description of the different messages to return is available in
the document [DSOP Control - Functional specification - 2024-03-06 - Messages in relation with partial.pdf](https:/dokumentasjon.dsop.no/assets/DSOP Control - Functional specification - 2024-03-06 - Messages in relation with partial.pdf).


### paymentCards

*Deliver*


### paymentCards.cardIdentifier

*Mandatory conditional*

Card number. Must be masked by following the best practices given by PCI DSS. It is recommended at least to follow this 
standard: The <u> digits are the maximum number of digits that can be delivered. The rest must be<u><u> 
filled with ‘X‘s  and no spaces.

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

| Date     | Version | Change                                                                                         |
|----------|---------|------------------------------------------------------------------------------------------------|
| 20.03.24 | 2.0     | New version of the DSOP Control API generating extensive changes throughout all documentation. |
| 03.05.23 | 1.2     | Added data model for V.1.2, includes responseDetails                                           |

