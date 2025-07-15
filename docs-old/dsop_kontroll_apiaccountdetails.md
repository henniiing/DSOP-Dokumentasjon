---
title: "API Account details V.1.1"
slug: "dsop_kontroll_apiaccountdetails"
id: "dsop_kontroll_apiaccountdetails"
keywords:
  - "sample"
---

Account details, including balances, for a specified account.

[The last chapter in this page](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails.html#use-of-the-data-model-per-DSOP-solution) shows what fields to include in the different DSOP Solutions based on the DSOP Control Common Standard.

### Abbreviations

| Abbreviations |                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                              |
|---------------|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| M             | Mandatory             | Must be part of the response, even if there is no data. Not returning this field in the response can break the receiving API.                                                                                                                                                                                                                                                                                                            |
| D             | Deliver               | Producers are obligated to deliver all requested data if they can*. If the data exists in the Producers systems and is possible to deliver through the API, it must be part of the response. If the data does not exist or cannot be delivered through the API, the field can be omitted.                                                                                                                                                |
| MC            | Mandatory conditional | - Child fields where Parent field is marked «M»(Mandatory) is crucial to give value to the Parent and must be delivered, even if there is no data. (See separate description for how to return empty or no data in fields.) Not returning this field in the response can break the receiving API. <br > - As long as a parent field marked with “D” is part of the response, the child field marked with “MC” must also be returned. |
| O             | Optional              | Only used in input parameters                                                                                                                                                                                                                                                                                                                                                                                                            |

  **If the data provider cannot deliver all requested data through Control API, but have more data offline, [responseStatus](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#responsestatus) must return value "partial".*



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

| Value                                                                                                                   | Level 1                                                                                                                                   | Level 2                                                                                                                                                               | Level 3                                                                                                                                                                                  |
|:------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [**responseStatus (D)**](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#responsestatus) |                                                                                                                                           |                                                                                                                                                                       |                                                                                                                                                                                          |
| [**account (D)**](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#account)               |                                                                                                                                           |                                                                                                                                                                       |                                                                                                                                                                                          |
|                                                                                                                         | [account.status (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountstatus)                        |                                                                                                                                                                       |                                                                                                                                                                                          |
|                                                                                                                         | [account.servicer (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountservicer)                    |                                                                                                                                                                       |                                                                                                                                                                                          |
|                                                                                                                         |                                                                                                                                           | [account.servicer.identifier (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountserviceridentifier)                          |                                                                                                                                                                                          |
|                                                                                                                         |                                                                                                                                           |                                                                                                                                                                       | [account.servicer.identifier.countryOfResidence (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountserviceridentifiercountryofresidence)         |
|                                                                                                                         |                                                                                                                                           |                                                                                                                                                                       | [account.servicer.identifier.value (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountserviceridentifiervalue)                                  |
|                                                                                                                         |                                                                                                                                           |                                                                                                                                                                       | [account.servicer.identifier.type (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountserviceridentifiertype)                                    |
|                                                                                                                         |                                                                                                                                           | [account.servicer.name (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountservicername)                                       |                                                                                                                                                                                          |
|                                                                                                                         | [account.accountIdentifier (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountaccountidentifier) |                                                                                                                                                                       |                                                                                                                                                                                          |
|                                                                                                                         | [account.accountReference (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountaccountreferences)  |                                                                                                                                                                       |                                                                                                                                                                                          |
|                                                                                                                         | [account.type (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accounttype)                            |                                                                                                                                                                       |                                                                                                                                                                                          |
|                                                                                                                         | [account.currency (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountcurrency)                    |                                                                                                                                                                       |                                                                                                                                                                                          |
|                                                                                                                         | [account.name (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountname)                            |                                                                                                                                                                       |                                                                                                                                                                                          |
|                                                                                                                         | [account.balances (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountbalances)                    |                                                                                                                                                                       |                                                                                                                                                                                          |
|                                                                                                                         |                                                                                                                                           | [account.balances.creditLineIncluded (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountbalancescreditlineincluded)           |                                                                                                                                                                                          |
|                                                                                                                         |                                                                                                                                           | [account.balances.amount (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountbalancesamount)                                   |                                                                                                                                                                                          |
|                                                                                                                         |                                                                                                                                           | [account.balances.creditDebitIndicator (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountbalancescreditdebitindicator)       |                                                                                                                                                                                          |
|                                                                                                                         |                                                                                                                                           | [account.balances.registered (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountbalancesregistered)                           |                                                                                                                                                                                          |
|                                                                                                                         |                                                                                                                                           | [account.balances.type (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountbalancestype)                                       |                                                                                                                                                                                          |
|                                                                                                                         |                                                                                                                                           | [account.balances.creditLineAmount (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountbalancescreditlineamount)               |                                                                                                                                                                                          |
|                                                                                                                         |                                                                                                                                           | [account.balances.creditLineCurrency (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountbalancescreditlinecurrency)           |                                                                                                                                                                                          |
|                                                                                                                         |                                                                                                                                           | [account.balances.currency (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountbalancescurrency)                               |                                                                                                                                                                                          |
|                                                                                                                         | [account.primaryOwner (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryowner)            |                                                                                                                                                                       |                                                                                                                                                                                          |
|                                                                                                                         |                                                                                                                                           | [account.primaryOwner.permission (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerpermission	)                  |                                                                                                                                                                                          |
|                                                                                                                         |                                                                                                                                           | [account.primaryOwner.identifier (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryowneridentifier	)                  |                                                                                                                                                                                          |
|                                                                                                                         |                                                                                                                                           |                                                                                                                                                                       | [account.primaryOwner.identifier.countryOfResidence (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryowneridentifiercountryofresidence) |
|                                                                                                                         |                                                                                                                                           |                                                                                                                                                                       | [account.primaryOwner.identifier.value (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryowneridentifiervalue)                          |
|                                                                                                                         |                                                                                                                                           |                                                                                                                                                                       | [account.primaryOwner.identifier.type (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryowneridentifiertype)                            |
|                                                                                                                         |                                                                                                                                           | [account.primaryOwner.name (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownername)                               |                                                                                                                                                                                          |
|                                                                                                                         |                                                                                                                                           | [account.primaryOwner.startDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerstartdate)                     |                                                                                                                                                                                          |
|                                                                                                                         |                                                                                                                                           | [account.primaryOwner.endDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerenddate)                         |                                                                                                                                                                                          |
|                                                                                                                         |                                                                                                                                           | [account.primaryOwner.postalAddress (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerpostaladdress)             |                                                                                                                                                                                          |
|                                                                                                                         |                                                                                                                                           |                                                                                                                                                                       | [account.primaryOwner.postalAddress.postCode (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerpostaladdresspostcode)               |
|                                                                                                                         |                                                                                                                                           |                                                                                                                                                                       | [account.primaryOwner.postalAddress.type (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerpostaladdresstype)                       |
|                                                                                                                         |                                                                                                                                           |                                                                                                                                                                       | [account.primaryOwner.postalAddress.streetName (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerpostaladdressstreetname)           |
|                                                                                                                         |                                                                                                                                           |                                                                                                                                                                       | [account.primaryOwner.postalAddress.buildingNumber (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerpostaladdressbuildingnumber)   |
|                                                                                                                         |                                                                                                                                           |                                                                                                                                                                       | [account.primaryOwner.postalAddress.townName (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerpostaladdresstownname)               |
|                                                                                                                         |                                                                                                                                           |                                                                                                                                                                       | [account.primaryOwner.postalAddress.country (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerpostaladdresscountry)                 |
|                                                                                                                         |                                                                                                                                           |                                                                                                                                                                       | [account.primaryOwner.postalAddress.addressLines (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerpostaladdressaddresslines)       |
|                                                                                                                         |                                                                                                                                           | [account.primaryOwner.electronicAddresses (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerelectronicaddresses) |                                                                                                                                                                                          |
|                                                                                                                         |                                                                                                                                           |                                                                                                                                                                       | [account.primaryOwner.electronicAddresses.type (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerelectronicaddressestype)          |
|                                                                                                                         |                                                                                                                                           |                                                                                                                                                                       | [account.primaryOwner.electronicAddresses.value (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerelectronicaddressesvalue)        |
|                                                                                                                         | [account.startDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountstartdate)                  |                                                                                                                                                                       |                                                                                                                                                                                          |
|                                                                                                                         | [account.endDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountenddate)                      |                                                                                                                                                                       |                                                                                                                                                                                          |

## Description of all response elements in the API

### responseStatus	 	 	 

*Deliver*

Indicates whether this is a complete answer, or whether there is data offline that can not be retrieved through the API.
* partial: If there is any data in the producers systems that can be retrieved manually and is not part of the API response.
* complete: If there are no more available data that can be retrieved manually. All known data has been returned in the response.

responseStatus is not to be used as an indicator for paginating.									

|[partial, complete]|


### account	 	 	 

*Deliver*

### account.status	 

*Deliver*

Indicates the current status of an account
* enabled: Any status of the account where a party can use the balance.
* disabled: Any status of an account where no party can use the account, both temporarily or permanent. The account balance and properties are still available for viewing and listing. Accounts blocked due to bancruptcy <ins> return the value *disabled*.<ins>
* deleted: Any status of an account where the account, balance and properties are no longer available at all

|[enabled, disabled, deleted]|


### account.servicer	 	 

*Deliver*

Financial institution.

### account.servicer.identifier

*Mandatory conditional*							

### account.servicer.identifier.countryOfResidence

*Deliver*

countryCode. The country the financial institution belongs to. From ISO 3166-1/Alpha-2 code.

### account.servicer.identifier.value

*Mandatory conditional*

Organization number of the financial institution.									
### account.servicer.identifier.type

*Mandatory conditional*

* countryIdentificationCode: The national registration code for businesses, enterprise, organizations and companies that is retrived from the National register for organizations. In Norway this would be from BRREG.
* nationalIdentityNumber: Used for persons. The national identitycode for persons. In Norway this would be P or D numbers from FREG.

|[countryIdentificationCode, nationalIdentityNumber]|


### account.servicer.name	 

*Deliver*

Name of the financial institution.

### account.accountIdentifier

*Mandatory conditional*

Account number.		

### account.accountReference

*Mandatory conditional*

A unique reference to the account, but should not be the account number and not simply decoded to an account number.

### account.type

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


### account.currency	 	

*Deliver*

CurrencyCode ISO Standard 4217.									

### account.name

*Deliver*

Primary owners reference name for the account, if any.									
### account.balances

*Deliver*

Balance on the account. For historic data, only provide balance if historic balance is available.														
### account.balances.creditLineIncluded

*Deliver*

This indicates whether credit limit is included in balance or not. Credit limit should not be included in balance, so this field should always be false.		

|[true, false]|										

### account.balances.amount

*Deliver*

The amount on balance. Always have positive value.									
### account.balances.creditDebitIndicator

*Deliver*

Indicates whether balance is positive or negative. Credit is positive and debit is negative.

|[credit, debit]

### account.balances.registered

*Deliver*

Date and time of balance ISO Date: YYYY-MM-DDThh:mm:ssZ for UTC eller YYYY-MM-DDThh:mm:ss+hh for other timezones.
For example +02 for CEST. 2020-05-07T12:00:00Z = 2020-05-07T14:00:00+02 											
### account.balances.type

*Deliver*

Available balance and booked balance. For request on today's date, available balance per request date must be provided, as well as booked balance. For a specified period, the booked balance for stated "toDate" must be delivered.


|[availableBalance, bookedBalance]|


### account.balances.creditLineAmount

*Deliver*

Amount of credit line.

### account.balances.creditLineCurrency

*Deliver*

CurrencyCode. currency of the credit line in ISO Standard.														
### account.balances.currency

*Deliver*

CurrencyCode for the balance amount. ISO Standard.			

### account.primaryOwner

*Deliver*

Party (person or organization) who owns the account at the end date of the requested period, limited to the period the requested party had a role against the account.	

### account.primaryOwner.permission	 

*Deliver*

Specifies the type of role/right a person or organization has for an account.
* rightToUseAlone: Can issue transactions changing the balance of the account on its own
* rightToUseWithOther: Can only issue transactions changing the balance of the account together with other party
* rightToSeeOnly: Can only view account details, but not issue transactions.										

|[rightToUseAlone, rightToUseWithOther, rightToSeeOnly]|										

### account.primaryOwner.identifier	 

*Deliver*

### account.primaryOwner.identifier.countryOfResidence

*Deliver*

CountryCode. The country the person or organization belongs to. In ISO 3166-1/Alpha-2 code format.

### account.primaryOwner.identifier.value

*Mandatory conditional*

Birth and social security number or organization number.				

### account.primaryOwner.identifier.type

*Mandatory conditional*

|[countryIdentificationCode, nationalIdentityNumber]|

### account.primaryOwner.name

*Deliver*

Name of the person or organization that owns the account.								

### account.primaryOwner.startDate	 

*Deliver*

Start date for when party got account ownership when creating account. This is the last period to be specified if the account is closed and re-opened. ISODate (yyyy-mm-dd).				

### account.primaryOwner.endDate	 

*Deliver*

End date for when the party lost their rights as an account owner. This is the last period to be specified if the account is closed and re-opened. No end date if the party still have right to the account. ISODate (yyyy-mm-dd).															

### account.primaryOwner.postalAddress	 

*Deliver*

The address of the party who owns the account.									
### account.primaryOwner.postalAddress.postCode

*Deliver*

Registered postalcode for the primary owners address.									
### account.primaryOwner.postalAddress.type

*Deliver*

Type of registered address for the primary owner.

|[residential, business, mailTo, deliveryTo]|					

### account.primaryOwner.postalAddress.streetName

*Deliver*

Street address registered on the primary owner.									
### account.primaryOwner.postalAddress.buildingNumber

*Deliver*

Buildingnumber for the street address registered on the primary owner.											

### account.primaryOwner.postalAddress.townName

*Deliver*

Postalcode location name, reffering to the Postalcode and street address for the primary owner.											
### account.primaryOwner.postalAddress.country

*Deliver*

Country code for the registered address of the primary owner. countryCode In ISO 3166-1/Alpha-2 code format.														
### account.primaryOwner.postalAddress.addressLines

*Deliver*

Additional address information, freetext.				

### account.primaryOwner.electronicAddresses

*Deliver*

### account.primaryOwner.electronicAddresses.type

*Mandatory conditional*

|[phoneNumber, emailAddress]|

### account.primaryOwner.electronicAddresses.value

*Mandatory conditional*

Registered phone number or e-mailaddress for primary owner, if any. Any format. Phonenumber may start with country suffix.			

### account.startDate

*Deliver*

Date when account was created. If a bank has more than one startDate and/or endDate for an account (it has been closed and reopened or recycled) where current parties had or have a role on the account, the latest dates shall be reported. The endDate shall always come after (be newer than) the startDate. If the account is currently open, no endDate shall be given.						

### account.endDate

*Deliver*

Date when account was closed. If a bank has more than one startDate and/or endDate for an account (it has been closed and reopened or recycled) where current parties had or have a role on the account, the latest dates shall be reported. The endDate shall always come after (be newer than) the startDate. If the account is currently open, no endDate shall be given.									

## Use of the data model per DSOP solution
The table below shows what fields to include in the different DSOP Solutions.

| Field	                                                                                                                                                                                   | Kontrollinformasjon (Skatteetaten, NAV, Politi) | 	Konkursbehandling (Brreg) |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|----------------------------|
| [**responseStatus (D)**](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#responsestatus)                                                                  | ✅                                               | ✅                          |
| [**account (D)**](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#account)                                                                                | ✅                                               | ✅                          |
| [account.status (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountstatus)                                                                       | ✅                                               | ✅                          |
| [account.servicer (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountservicer)                                                                   | ✅                                               | ✅                          |
| [account.servicer.identifier (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountserviceridentifier)                                             | ✅                                               | ✅                          |
| [account.servicer.identifier.countryOfResidence (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountserviceridentifiercountryofresidence)         | ✅                                               | ✅                          |
| [account.servicer.identifier.value (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountserviceridentifiervalue)                                  | ✅                                               | ✅                          |
| [account.servicer.identifier.type (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountserviceridentifiertype)                                    | ✅                                               | ✅                          |
| [account.servicer.name (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountservicername)                                                          | ✅                                               | ✅                          |
| [account.accountIdentifier (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountaccountidentifier)                                                | ✅                                               | ✅                          |
| [account.accountReference (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountaccountreferences)                                                 | ✅                                               | ✅                          |
| [account.type (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accounttype)                                                                           | ✅                                               | ✅                          |
| [account.currency (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountcurrency)                                                                   | ✅                                               | ✅                          |
| [account.name (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountname)                                                                           | ✅                                               | ✅                          |
| [account.balances (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountbalances)                                                                   | ✅                                               | ✅                          |
| [account.balances.creditLineIncluded (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountbalancescreditlineincluded)                              | ✅                                               | ✅                          |
| [account.balances.amount (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountbalancesamount)                                                      | ✅                                               | ✅                          |
| [account.balances.creditDebitIndicator (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountbalancescreditdebitindicator)                          | ✅                                               | ✅                          |
| [account.balances.registered (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountbalancesregistered)                                              | ✅                                               | ✅                          |
| [account.balances.type (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountbalancestype)                                                          | ✅                                               | ✅                          |
| [account.balances.creditLineAmount (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountbalancescreditlineamount)                                  | ✅                                               | ✅                          |
| [account.balances.creditLineCurrency (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountbalancescreditlinecurrency)                              | ✅                                               | ✅                          |
| [account.balances.currency (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountbalancescurrency)                                                  | ✅                                               | ✅                          |
| [account.primaryOwner (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryowner)                                                           | ✅                                               | ✅                          |
| [account.primaryOwner.permission (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerpermission	)                                     | ✅                                               | ✅                          |
| [account.primaryOwner.identifier (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryowneridentifier	)                                     | ✅                                               | ✅                          |
| [account.primaryOwner.identifier.countryOfResidence (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryowneridentifiercountryofresidence) | ✅                                               | ✅                          |
| [account.primaryOwner.identifier.value (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryowneridentifiervalue)                          | ✅                                               | ✅                          |
| [account.primaryOwner.identifier.type (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryowneridentifiertype)                            | ✅                                               | ✅                          |
| [account.primaryOwner.name (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownername)                                                  | ✅                                               | ✅                          |
| [account.primaryOwner.startDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerstartdate)                                        | ✅                                               | ✅                          |
| [account.primaryOwner.endDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerenddate)                                            | ✅                                               | ✅                          |
| [account.primaryOwner.postalAddress (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerpostaladdress)                                | ✅                                               | ✅                          |
| [account.primaryOwner.postalAddress.postCode (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerpostaladdresspostcode)               | ✅                                               | ✅                          |
| [account.primaryOwner.postalAddress.type (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerpostaladdresstype)                       | ✅                                               | ✅                          |
| [account.primaryOwner.postalAddress.streetName (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerpostaladdressstreetname)           | ✅                                               | ✅                          |
| [account.primaryOwner.postalAddress.buildingNumber (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerpostaladdressbuildingnumber)   | ✅                                               | ✅                          |
| [account.primaryOwner.postalAddress.townName (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerpostaladdresstownname)               | ✅                                               | ✅                          |
| [account.primaryOwner.postalAddress.country (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerpostaladdresscountry)                 | ✅                                               | ✅                          |
| [account.primaryOwner.postalAddress.addressLines (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerpostaladdressaddresslines)       | ✅                                               | ✅                          |
| [account.primaryOwner.electronicAddresses (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerelectronicaddresses)                    | ✅                                               | ✅                          |
| [account.primaryOwner.electronicAddresses.type (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerelectronicaddressestype)          | ✅                                               | ✅                          |
| [account.primaryOwner.electronicAddresses.value (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryownerelectronicaddressesvalue)        | ✅                                               | ✅                          |
| [account.startDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountstartdate)                                                                 |
| [account.endDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountenddate)                                                                     | ✅                                               | ✅                          |




## Change log

| Date     | Change                                                                                              | Link in document                                                                                                           |
|----------|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| 18.03.22 | Specified that accounts blocked due to bancruptcy shall return the value disabled in account.status | [account.status](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountstatus)             |
| 23.10.20 | Specified that AdditionalReferenceID must be formatted encoded text                                 | [Input parameters](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails.html#input-parameters)   |
| 25.09.20 | Specified description of account.primaryOwner, the description is the same as in account list.      | [account.primaryOwner](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails#accountprimaryowner) |
|          | V.1.1 is current version                                                                            |                                                                                                                            |<ins>
