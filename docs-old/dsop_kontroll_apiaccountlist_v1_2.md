---
title: "API Account list V.1.2"
slug: "dsop_kontroll_apiaccountlist_v1_2"
id: "dsop_kontroll_apiaccountlist_v1_2"
keywords:
  - "sample"
---

List of accounts for a specified party and period. Must provide a blank list if no hits.

[The last chapter in this page](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2.html#use-of-the-data-model-per-DSOP-solution) shows what fields to include in the different DSOP Solutions based on the DSOP Control Common Standard.


### Abbreviations

| Abbreviations |                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                              |
|---------------|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| M             | Mandatory             | Must be part of the response, even if there is no data. Not returning this field in the response can break the receiving API.                                                                                                                                                                                                                                                                                                            |
| D             | Deliver               | Producers are obligated to deliver all requested data if they can*. If the data exists in the Producers systems and is possible to deliver through the API, it must be part of the response. If the data does not exist or cannot be delivered through the API, the field can be omitted.                                                                                                                                                |
| MC            | Mandatory conditional | - Child fields where Parent field is marked «M»(Mandatory) is crucial to give value to the Parent and must be delivered, even if there is no data. (See separate description for how to return empty or no data in fields.) Not returning this field in the response can break the receiving API. <br > - As long as a parent field marked with “D” is part of the response, the child field marked with “MC” must also be returned. |
| O             | Optional              | Only used in input parameters                                                                                                                                                                                                                                                                                                                                                                                                            |

  **If the data provider cannot deliver all requested data through Control API, but have more data offline, [responseStatus](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#responsestatus) must return value "partial".*


## Input parameters
Values set by data consumer.

It is the data providers responsibility to validate all requests' from the data consumers and to make sure that all requests are validated well enough. See some [recommendations regarding validation of requests in Control API](/dsop_kontroll_validation). 

| Parameter                      | Description                                                                                                                                                              | Comment                                                                                                                                                                                                                                |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AccountInfoRequestID (M)       | Consumers case reference id/number                                                                                                                                       | [Link to Specification of eOppslag](https:/dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#accountinforequestid)                                                                                  |
| CorrelationID (M)              | Unique identifier for the technical request                                                                                                                              | [Link to Specification of eOppslag](https:/dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#correlationid)                                                                                         |
| Legal-Mandate* (M)             | Legal basis the financial institution should validate. Formatted encoded text.                                                                                           | [Link to Juridiske rammebetingelser](/dsop_kontroll_juridisk)                                                                                                                       |
| PartyID (MC)                   | Parts identifier, personal identification number, d-number or organization number.                                                                                       | Condition: if *AccountID* is empty, *PartyID* is required.                                                                                                                                                                             |
| AccountID (MC)                 | Account number (not in use at this stage)                                                                                                                                | Condition: if *PartyID* is empty, *AccountID* is required.                                                                                                                                                                             |
| AdditionalReferenceID*  (O)    | Reference ID when legal-mandate is not adequate alone, or to identify requester at consumer. Should be validated according to the legal-mandate. Formatted encoded text. | Required for some legal mandates. <br >[More information in Specification of eOppslag](https:/dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid) |
| fromDate  (O)                  | From date, current date if not stated                                                                                                                                    |                                                                                                                                                                                                                                        |
| toDate (O)                     | To date, current date if not stated                                                                                                                                      |                                                                                                                                                                                                                                        |

**It is recommended to validate AdditionalReferenceID and AdditionalReferenceIDType according to the legal-mandate ([see what legal mandates which requires information in AdditionalReferenceID](https:/dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid)). Legal-mandate should always be logged with belonging AdditionalReferenceID.*

## Responses

Values in response from financial institutions. 

All fields are to be provided as long as the bank/financial institution holds the data, regardless of whether the fields are marked as mandatory or not. This is according to the legal basis.


| Value                                                                                                                       | Level 1                                                                                                                                       | Level 2                                                                                                                                                                   | Level 3                                                                                                                                                                                      |
|:----------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [**responseStatus (D)**](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#responsestatus)   |
| [**responseDetails (D)**](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#responsedetails) |                                                                                                                                               |                                                                                                                                                                           |                                                                                                                                                                                              |
|                                                                                                                             | [responseDetails.status (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#responsedetailsstatus)          |                                                                                                                                                                           |                                                                                                                                                                                              |
|                                                                                                                             | [responseDetails.message (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#responsedetailsmessage)        |                                                                                                                                                                           |                                                                                                                                                                                              |
| [**accounts (D)**](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accounts)               |
|                                                                                                                             | [accounts.status (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsstatus)                        |
|                                                                                                                             | [accounts.servicer (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsservicer)                    |
|                                                                                                                             |                                                                                                                                               | [accounts.servicer.identifier (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsserviceridentifier)                          |
|                                                                                                                             |                                                                                                                                               |                                                                                                                                                                           | [accounts.servicer.identifier.countryOfResidence (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsserviceridentifiercountryofresidence)         |
|                                                                                                                             |                                                                                                                                               |                                                                                                                                                                           | [accounts.servicer.identifier.value (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsserviceridentifiervalue)                                  |
|                                                                                                                             |                                                                                                                                               |                                                                                                                                                                           | [accounts.servicer.identifier.type (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsserviceridentifiertype)                                    |
|                                                                                                                             |                                                                                                                                               | [accounts.servicer.name (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsservicername)                                       |
|                                                                                                                             | [accounts.links (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountslinks)                          |
|                                                                                                                             |                                                                                                                                               | [accounts.links.rel (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountslinksrel)                                              |
|                                                                                                                             |                                                                                                                                               | [accounts.links.href (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountslinkshref)                                            |
|                                                                                                                             | [accounts.accountIdentifier (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsaccountidentifier) |
|                                                                                                                             | [accounts.accountReference (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsaccountreference)   |
|                                                                                                                             | [accounts.type (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountstype)                            |
|                                                                                                                             | [accounts.currency (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountscurrency)                    |
|                                                                                                                             | [accounts.primaryOwner (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryowner)            |
|                                                                                                                             |                                                                                                                                               | [accounts.primaryOwner.permission (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerpermission	)                  |
|                                                                                                                             |                                                                                                                                               | [accounts.primaryOwner.identifier (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryowneridentifier	)                  |
|                                                                                                                             |                                                                                                                                               |                                                                                                                                                                           | [accounts.primaryOwner.identifier.countryOfResidence (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryowneridentifiercountryofresidence) |
|                                                                                                                             |                                                                                                                                               |                                                                                                                                                                           | [accounts.primaryOwner.identifier.value (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryowneridentifiervalue)                          |
|                                                                                                                             |                                                                                                                                               |                                                                                                                                                                           | [accounts.primaryOwner.identifier.type (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryowneridentifiertype)                            |
|                                                                                                                             |                                                                                                                                               | [accounts.primaryOwner.name (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownername)                               |
|                                                                                                                             |                                                                                                                                               | [accounts.primaryOwner.startDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerstartdate)                     |
|                                                                                                                             |                                                                                                                                               | [accounts.primaryOwner.endDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerenddate)                         |
|                                                                                                                             |                                                                                                                                               | [accounts.primaryOwner.postalAddress (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerpostaladdress)             |
|                                                                                                                             |                                                                                                                                               |                                                                                                                                                                           | [accounts.primaryOwner.postalAddress.postCode (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerpostaladdresspostcode)               |
|                                                                                                                             |                                                                                                                                               |                                                                                                                                                                           | [accounts.primaryOwner.postalAddress.type (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerpostaladdresstype)                       |
|                                                                                                                             |                                                                                                                                               |                                                                                                                                                                           | [accounts.primaryOwner.postalAddress.streetName (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerpostaladdressstreetname)           |
|                                                                                                                             |                                                                                                                                               |                                                                                                                                                                           | [accounts.primaryOwner.postalAddress.buildingNumber (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerpostaladdressbuildingnumber)   |
|                                                                                                                             |                                                                                                                                               |                                                                                                                                                                           | [accounts.primaryOwner.postalAddress.townName (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerpostaladdresstownname)               |
|                                                                                                                             |                                                                                                                                               |                                                                                                                                                                           | [accounts.primaryOwner.postalAddress.country (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerpostaladdresscountry)                 |
|                                                                                                                             |                                                                                                                                               |                                                                                                                                                                           | [accounts.primaryOwner.postalAddress.addressLines (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerpostaladdressaddresslines)       |
|                                                                                                                             |                                                                                                                                               | [accounts.primaryOwner.electronicAddresses (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerelectronicaddresses) |
|                                                                                                                             |                                                                                                                                               |                                                                                                                                                                           | [accounts.primaryOwner.electronicAddresses.type (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerelectronicaddressestype)          |
|                                                                                                                             |                                                                                                                                               |                                                                                                                                                                           | [accounts.primaryOwner.electronicAddresses.value (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerelectronicaddressesvalue)        |
|                                                                                                                             | [accounts.name (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsname)                            |
| [**links (D)**](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#links)                     |
|                                                                                                                             | [links.rel (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#linksrel)                                   |
|                                                                                                                             | [links.href (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#linkshref)                                 |

## Description of all response elements in the API

### responseStatus

*Deliver*

Indicates whether this is a complete answer, or whether there is data offline that can not be retrieved through the API.
* partial: If there is any data in the producers systems that can be retrieved manually and is not part of the API response,
  or whether the provider wishes to be contacted via another channel by the consumer.
* complete: If there are no more available data that can be retrieved manually. All known data has been returned in the response.

responseStatus is not to be used as an indicator for paginating.

|[partial, complete]|


### responseDetails

*Deliver*

### responseDetails.status

*Deliver*

Indicates whether this is a complete answer, or whether there is data offline that can not be retrieved through the API.
* partial: If there is any data in the producers systems that can be retrieved manually and is not part of the API response,
  or whether the provider wishes to be contacted via another channel by the consumer.
* complete: If there are no more available data that can be retrieved manually. All known data has been returned in the response.

responseDetails.status is not to be used as an indicator for paginating.

|[partial, complete]|

### responseDetails.message

*Deliver*

In case of responseDetails.status partial, responseDetails.message indicates the reason why not all data has been delivered
through the API in order to inform the data consumers about the situation, and enable them to decide if it is necessary
to send a digital letter to the Data provider or not


### accounts	 	 	 

*Deliver*

### accounts.status	 

*Deliver*

Indicates the current status of an account
* enabled: Any status of the account where a party can use the balance.
* disabled: Any status of an account where no party can use the account, both temporarily or permanent. The account balance and properties are still available for viewing and listing. Accounts blocked due to bancruptcy <ins> return the value *disabled*.<ins>
* deleted: Any status of an account where the account, balance and properties are no longer available at all									

|[enabled, disabled, deleted]|

### accounts.servicer

*Deliver*

Financial institution.								

### accounts.servicer.identifier

*Mandatory conditional*


### accounts.servicer.identifier.countryOfResidence

*Deliver*

CountryCode. The country the financial institution belongs to. From ISO 3166-1/Alpha-2 code.

### accounts.servicer.identifier.value

*Mandatory conditional*

Organization number of the financial institution.									
### accounts.servicer.identifier.type

*Mandatory conditional*

* countryIdentificationCode: The national registration code for businesses, enterprise, organizations and companies that is retrived from the National register for organizations. In Norway this would be from BRREG.
* nationalIdentityNumber: Used for persons. The national identitycode for persons. In Norway this would be P or D numbers from FREG.									

|[countryIdentificationCode, nationalIdentityNumber]|

### accounts.servicer.name	 

*Deliver*

Name of the financial institution.

### accounts.links

*Deliver*

[Link](https:/dokumentasjon.dsop.no/dsop_kontroll_spesifikasjon_av_eoppslag.html#store-resultatsett)

### accounts.links.rel	 

*Mandatory conditional*

Definition of accounts.links (Not much used, might be set to deprecated in future versions)
* rel: Short description of the link target. Possible targets are the other API’s in this family.		

### accounts.links.href	 

*Mandatory conditional*

Definition of accounts.links (Not much used, might be set to deprecated in future versions)
* href: the actual href uri parameter to the API’s.									

### accounts.accountIdentifier	 	 

*Mandatory conditional*

Account number.												

### accounts.accountReference

*Mandatory conditional*

A unique reference to the account, but should not be the account number and not simply decoded to an account number.													

### accounts.type

*Deliver*


All accounts/products for a bank must be mapped into one of the account type that are stated in this list below:
1. loanAccount: Account for funds borrowed by a financial institution to the party
2. salaryAccount: Account for funds used on an ongoing basis by a person
3. currencyAccount: Account for settlements and transactions in a fixed foreign currency
4. savingsAccount: Account for funds used for savings
5. clientAccount: Account for client funds (keeping clients funds separate from those of the business)
6. taxDeductionAccount: Account for funds used to pay advance tax for employees
7. businessAccount: Account for funds that are used on an ongoing basis by a company / business
8. creditCardAccount: Account for funds used by credit cards
9. prepaidCardAccount: Account for funds used by a prepaid card
10. otherAccount: other type of account that cannot be grouped into the other nine categories or unknown type of account from legacy systems

Note: All account types that are or have been registered with the bank must be grouped into the ten valid values listed above.


|[loanAccount, salaryAccount, currencyAccount, savingsAccount, clientAccount, taxDeductionAccount, businessAccount, creditCardAccount, prepaidCardAccount, otherAccount]|


### accounts.currency	 

*Deliver*

CurrencyCode ISO Standard 4217.							

### accounts.primaryOwner	 	

*Deliver*

Party (person or organization) who owns the account at the end date of the requested period, limited to the period the requested party had a role against the account.					


### accounts.primaryOwner.permission	 

*Deliver*

Specifies the type of role/right a person or organization has for an account.
* rightToUseAlone: Can issue transactions changing the balance of the account on its own
* rightToUseWithOther: Can only issue transactions changing the balance of the account together with other party
* rightToSeeOnly: Can only view account details, but not issue transactions.										

|[rightToUseAlone, rightToUseWithOther, rightToSeeOnly]|						

### accounts.primaryOwner.identifier	 

*Deliver*

### accounts.primaryOwner.identifier.countryOfResidence

*Deliver*

CountryCode. The country the person or organization belongs to. In ISO 3166-1/Alpha-2 code format.															
### accounts.primaryOwner.identifier.value

*Mandatory conditional*

Birth and social security number or organization number.														
### accounts.primaryOwner.identifier.type

*Mandatory conditional*

|[ countryIdentificationCode, nationalIdentityNumber ]|


### accounts.primaryOwner.name	 

*Deliver*

Name of the person or organization that owns the account.													

### accounts.primaryOwner.startDate	 

*Deliver*

Start date for when the party gained their rights as an account owner. This is the last period to be specified if the account is closed and re-opened. ISODate (yyyy-mm-dd).									

### accounts.primaryOwner.endDate

*Deliver*

End date for when the party lost their rights as an account owner. This is the last period to be specified if the account is closed and re-opened. No end date if the party still is the owner of the account. ISODate (yyyy-mm-dd).														
### accounts.primaryOwner.postalAddress	 

*Deliver*

The address of the party who owns the account.									
### accounts.primaryOwner.postalAddress.postCode

*Deliver*

Registered postalcode for the primary owners address.									
### accounts.primaryOwner.postalAddress.type

*Deliver*

Type of registered address for the primary owner.									

|[residential, business, mailTo, deliveryTo]|

### accounts.primaryOwner.postalAddress.streetName

*Deliver*

Street address registered on the primary owner.									
### accounts.primaryOwner.postalAddress.buildingNumber

*Deliver*

Buildingnumber for the street address registered on the primary owner.															
### accounts.primaryOwner.postalAddress.townName

*Deliver*

Postalcode location name, reffering to the Postalcode and street address for the primary owner.															
### accounts.primaryOwner.postalAddress.country

*Deliver*

Country code for the registered address of the primary owner. countryCode In ISO 3166-1/Alpha-2 code format.														
### accounts.primaryOwner.postalAddress.addressLines

*Deliver*

Additional address information, freetext.				

### accounts.primaryOwner.electronicAddresses

*Deliver*

### accounts.primaryOwner.electronicAddresses.type

*Mandatory conditional*

|[phoneNumber, emailAddress]|

### accounts.primaryOwner.electronicAddresses.value

*Mandatory conditional*

Registered phone number or e-mailaddress for primary owner, if any. Any format. Phonenumber may start with country suffix.														
### accounts.name

*Deliver*

Primary owners reference name for the account, if any.									
### links

*Deliver*

[Link](https:/dokumentasjon.dsop.no/dsop_kontroll_spesifikasjon_av_eoppslag.html#store-resultatsett)

### links.rel

*Mandatory conditional*

Paginering as in; next, self, prev, last.									
### links.href	 	

*Mandatory conditional*

Paginering, Link to page.				

## Use of the data model per DSOP solution

The table below shows what fields to include in the different DSOP Solutions.

| Field                                                                                                                                                                                        | Kontrollinformasjon (Skatteetaten, NAV, Politi) | Konkursbehandling (Brreg) |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|---------------------------|
| [responseStatus (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#responsestatus)                                                                        | ✅                                               | ✅                         |
| [responseDetails (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#responsedetails)                                                                      | ✅                                               | ✅                         |
| [responseDetails.status (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#responsedetailsstatus)                                                         | ✅                                               | ✅                         |
| [responseDetails.message (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#responsedetailsmessage)                                                       | ✅                                               | ✅                         |
| [accounts (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accounts)                                                                                    | ✅                                               | ✅                         |
| [accounts.status (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsstatus)                                                                       | ✅                                               | ✅                         |
| [accounts.servicer (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsservicer)                                                                   | ✅                                               | ✅                         |
| [accounts.servicer.identifier (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsserviceridentifier)                                             | ✅                                               | ✅                         |
| [accounts.servicer.identifier.countryOfResidence (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsserviceridentifiercountryofresidence)         | ✅                                               | ✅                         |
| [accounts.servicer.identifier.value (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsserviceridentifiervalue)                                  | ✅                                               | ✅                         |
| [accounts.servicer.identifier.type (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsserviceridentifiertype)                                    | ✅                                               | ✅                         |
| [accounts.servicer.name (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsservicername)                                                          | ✅                                               | ✅                         |
| [accounts.links (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountslinks)                                                                         | ✅                                               | ✅                         |
| [accounts.links.rel (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountslinksrel)                                                                 | ✅                                               | ✅                         |
| [accounts.links.href (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountslinkshref)                                                               | ✅                                               | ✅                         |
| [accounts.accountIdentifier (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsaccountidentifier)                                                | ✅                                               | ✅                         |
| [accounts.accountReference (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsaccountreference)                                                  | ✅                                               | ✅                         |
| [accounts.type (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountstype)                                                                           | ✅                                               | ✅                         |
| [accounts.currency (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountscurrency)                                                                   | ✅                                               | ✅                         |
| [accounts.primaryOwner (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryowner)                                                           | ✅                                               | ✅                         |
| [accounts.primaryOwner.permission (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerpermission	)                                     | ✅                                               | ✅                         |
| [accounts.primaryOwner.identifier (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryowneridentifier	)                                     | ✅                                               | ✅                         |
| [accounts.primaryOwner.identifier.countryOfResidence (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryowneridentifiercountryofresidence) | ✅                                               | ✅                         |
| [accounts.primaryOwner.identifier.value (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryowneridentifiervalue)                          | ✅                                               | ✅                         |
| [accounts.primaryOwner.identifier.type (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryowneridentifiertype)                            | ✅                                               | ✅                         |
| [accounts.primaryOwner.name (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownername)                                                  | ✅                                               | ✅                         |
| [accounts.primaryOwner.startDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerstartdate)                                        | ✅                                               | ✅                         |
| [accounts.primaryOwner.endDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerenddate)                                            | ✅                                               | ✅                         |
| [accounts.primaryOwner.postalAddress (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerpostaladdress)                                | ✅                                               | ✅                         |
| [accounts.primaryOwner.postalAddress.postCode (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerpostaladdresspostcode)               | ✅                                               | ✅                         |
| [accounts.primaryOwner.postalAddress.type (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerpostaladdresstype)                       | ✅                                               | ✅                         |
| [accounts.primaryOwner.postalAddress.streetName (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerpostaladdressstreetname)           | ✅                                               | ✅                         |
| [accounts.primaryOwner.postalAddress.buildingNumber (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerpostaladdressbuildingnumber)   | ✅                                               | ✅                         |
| [accounts.primaryOwner.postalAddress.townName (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerpostaladdresstownname)               | ✅                                               | ✅                         |
| [accounts.primaryOwner.postalAddress.country (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerpostaladdresscountry)                 | ✅                                               | ✅                         |
| [accounts.primaryOwner.postalAddress.addressLines (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerpostaladdressaddresslines)       | ✅                                               | ✅                         |
| [accounts.primaryOwner.electronicAddresses (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerelectronicaddresses)                    | ✅                                               | ✅                         |
| [accounts.primaryOwner.electronicAddresses.type (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerelectronicaddressestype)          | ✅                                               | ✅                         |
| [accounts.primaryOwner.electronicAddresses.value (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsprimaryownerelectronicaddressesvalue)        | ✅                                               | ✅                         |
| [accounts.name (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#accountsname)                                                                           | ✅                                               | ✅                         |
| [links (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#links)                                                                                          | ✅                                               | ✅                         |
| [links.rel (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#linksrel)                                                                                  | ✅                                               | ✅                         |
| [links.href (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#linkshref)                                                                                | ✅                                               | ✅                         |




## Change log

| Date     | Change                                               | Link in document                                                                                                    |
|----------|------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| 03.05.23 | Added data model for V.1.2, includes responseDetails | [responseDetails](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist_v1_2#responseDetails) |<ins>
