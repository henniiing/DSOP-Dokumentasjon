---
title: "API Cards V.1.1"
slug: "dsop_kontroll_apicards"
id: "dsop_kontroll_apicards"
keywords:
  - "sample"
---

List of cards associated with the specified account and period. Empty list if no hits.

[The last chapter in this page](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards.html#use-of-the-data-model-per-DSOP-solution) shows what fields to include in the different DSOP Solutions based on the DSOP Control Common Standard.

### Abbreviations

| Abbreviations |                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                              |
|---------------|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| M             | Mandatory             | Must be part of the response, even if there is no data. Not returning this field in the response can break the receiving API.                                                                                                                                                                                                                                                                                                            |
| D             | Deliver               | Producers are obligated to deliver all requested data if they can*. If the data exists in the Producers systems and is possible to deliver through the API, it must be part of the response. If the data does not exist or cannot be delivered through the API, the field can be omitted.                                                                                                                                                |
| MC            | Mandatory conditional | - Child fields where Parent field is marked «M»(Mandatory) is crucial to give value to the Parent and must be delivered, even if there is no data. (See separate description for how to return empty or no data in fields.) Not returning this field in the response can break the receiving API. <br > - As long as a parent field marked with “D” is part of the response, the child field marked with “MC” must also be returned. |
| O             | Optional              | Only used in input parameters                                                                                                                                                                                                                                                                                                                                                                                                            |

  **If the data provider cannot deliver all requested data through Control API, but have more data offline, [responseStatus](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist#responsestatus) must return value "partial".*



## Input parameters

Values set by data consumer.

It is the data providers responsibility to validate all requests' from the data consumers and to make sure that all requests are validated well enough. See some [recommendations regarding validation of requests in Control API](/dsop_kontroll_validation). 

| Parameter                      | Description                                                                                                                                                              | Comment                                                                                                                                                                                                                                |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| accountReference (M)           | A unique reference to the account, but should not be the account number and not simply decoded to an account number.                                                     |                                                                                                                                                                                                                                        |
| AccountInfoRequestID (M)       | Consumers case reference id/number                                                                                                                                       | [Link to Specification of eOppslag](https:/dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#accountinforequestid)                                                                                  |
| CorrelationID (M)              | Unique identifier for the technical request                                                                                                                              | [Link to Specification of eOppslag](https:/dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#correlationid)                                                                                         |
| Legal-Mandate* (M)             | Legal basis the financial institution should validate. Formatted encoded text.                                                                                           | [Link to Juridiske rammebetingelser](/dsop_kontroll_juridisk)                                                                                                                       |
| AdditionalReferenceID*  (O)    | Reference ID when legal-mandate is not adequate alone, or to identify requester at consumer. Should be validated according to the legal-mandate. Formatted encoded text. | Required for some legal mandates. <br >[More information in Specification of eOppslag](https:/dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid) |
| fromDate  (O)                  | From date, current date if not stated                                                                                                                                    |                                                                                                                                                                                                                                        |
| toDate (O)                     | To date, current date if not stated                                                                                                                                      |                                                                                                                                                                                                                                        |

**It is recommended to validate AdditionalReferenceID and AdditionalReferenceIDType according to the legal-mandate ([see what legal mandates which requires information in AdditionalReferenceID](https:/dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid)). Legal-mandate should always be logged with belonging AdditionalReferenceID.*


## Responses

Values in response from financial institutions.

All fields are to be provided as long as the bank/financial institution holds the data, regardless of whether the fields are marked as mandatory or not. This is according to the legal basis.

| Value                                                                                                          | Level 1                                                                                                                                         | Level 2                                                                                                                                                                              |
|:---------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [**responseStatus (D)**](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#responsestatus) |
| [**paymentCards (D)**](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcards)     |
|                                                                                                                | [paymentCards.cardIdentifier (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardscardidentifier)            |
|                                                                                                                | [paymentCards.holderName (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardsholdername)                     |
|                                                                                                                | [paymentCards.startDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardsstartdate)                       |
|                                                                                                                | [paymentCards.expiryDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardsexpirydate)                     |
|                                                                                                                | [paymentCards.cardIssuerName (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardscardissuername)             |
|                                                                                                                | [paymentCards.type (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardstype)                                 |
|                                                                                                                | [paymentCards.cardIssuerIdentifier (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardscardissueridentifier) |
|                                                                                                                |                                                                                                                                                 | [paymentCards.cardIssuerIdentifier.countryOfResidence (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardscardissueridentifiercountryofresidence) |
|                                                                                                                |                                                                                                                                                 | [paymentCardscardIssuerIdentifiervalue (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardscardissueridentifiervalue)                            |
|                                                                                                                |                                                                                                                                                 | [paymentCards.cardIssuerIdentifier.type (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardscardissueridentifiervalue)                           |

## Description of all response elements in the API

### responseStatus	 	

*Deliver*

Indicates whether this is a complete answer, or whether there is data offline that can not be retrieved through the API.
* partial: If there is any data in the producers systems that can be retrieved manually and is not part of the API response.
* complete: If there are no more available data that can be retrieved manually. All known data has been returned in the response.

ResponseStatus is not to be used as an indicator for paginating.

|[partial, complete]|


### paymentCards	 	 	 

*Deliver*


### paymentCards.cardIdentifier

*Mandatory conditional*

Card number (must be masked).									

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

## Use of the data model per DSOP solution
The table below shows what fields to include in the different DSOP Solutions.

|Field	|Kontrollinformasjon (Skatteetaten, NAV, Politi)	|Konkursbehandling (Brreg)|
|---|---|---|
|[**responseStatus (D)**](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#responsestatus)|✅|N/A|
|[**paymentCards (D)**](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcards)|✅|N/A|
|[paymentCards.cardIdentifier (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardscardidentifier)|✅|N/A|
|[paymentCards.holderName (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardsholdername)|✅|N/A|
|[paymentCards.startDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardsstartdate)|✅|N/A|
|[paymentCards.expiryDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardsexpirydate)|✅|N/A|
|[paymentCards.cardIssuerName (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardscardissuername)|✅|N/A|
|[paymentCards.type (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardstype)|✅|N/A|
|[paymentCards.cardIssuerIdentifier (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardscardissueridentifier)|✅|N/A|
|[paymentCards.cardIssuerIdentifier.countryOfResidence (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardscardissueridentifiercountryofresidence)|✅|N/A|
|[paymentCardscardIssuerIdentifiervalue (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardscardissueridentifiervalue)|✅|N/A|
|[paymentCards.cardIssuerIdentifier.type (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards#paymentcardscardissueridentifiervalue)|✅|N/A|




## Change log

| Date     | Change                                                              | Link in document                                                                                                |
|----------|---------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| 23.10.20 | Specified that AdditionalReferenceID must be formatted encoded text | [Input parameters](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards.html#input-parameters) |
|          | V.1.1 is current version                                            |                                                                                                                 |
