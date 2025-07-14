---
title: "Endpoint Account details V.2.0"
slug: "dsop_v2fellesstandard_accountdetails"
id: "dsop_v2fellesstandard_accountdetails"
keywords:
  - "sample"
---

Account details, including balances, for a specified account.

<br> 

The principles are defined in [Principles for delivery of information via DSOP Control information common standard.](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard)


## Input parameters

Values set by data consumer.

It is the data providers responsibility to validate all requests from the data consumers and to make sure that all
requests are validated well enough. See some [recommendations regarding validation of requests in Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_validation.html).



| Parameter                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                | Comment                                                                                                                                                                                                     |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| accountReference (M)           | 	A unique reference to the account, but should not be the account number and not simply decoded to an account number.                                                                                                                                                                                                                                                                                                                      | 	 -                                                                                                                                                                                                         |
| AccountInfoRequestID (M)	      | Consumers case reference id/number	                                                                                                                                                                                                                                                                                                                                                                                                        | [Link to Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html)                                                                   |
| CorrelationID (M)              | 	Unique identifier for the technical request	                                                                                                                                                                                                                                                                                                                                                                                              | [Link to Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html)                                                                   |
| Legal-Mandate* (M)	            | Legal basis the data providers should validate. Formatted encoded text.	                                                                                                                                                                                                                                                                                                                                                                   | See the specific DSOP Service documentation for the valid legal mandates                                                                                                                                    |
| AdditionalReferenceID* (O)	    | Reference ID when Legal-Mandate is not adequate alone. Should be validated according to the Legal-Mandate. Formatted encoded text.	                                                                                                                                                                                                                                                                                                        | Required for some DSOP Services. More information in  [More information in Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html) |
| AdditionalReferenceIDType* (O) | 	What type of reference to expect in AdditionalReferenceID	                                                                                                                                                                                                                                                                                                                                                                                | Required for some DSOP Services. More information in  [More information in Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html) |
| RequesterID (O)	               | *RequesterID* identifies the user who makes the request at the public agency. The public agencies are free to pseudonymise *RequesterID* so that the financial institutions cannot link this ID to the agency's user or natural person. In turn, the public agency must be able to link *RequesterID* to a user in the public agency. It is important that *RequesterID* <u>remains constant per user and is not reused for new users</u>. | Even though this parameter is technically optional, it could become logically mandatory for a given DSOP service.                                                                                           |
| fromDate (M)                   | Date (included) from which the time period for the data delivery starts.	                                                                                                                                                                                                                                                                                                                                                                  | -                                                                                                                                                                                                           | 
| toDate (M)                     | Date (included) from which the time period for the data delivery ends. The amount on balance will be the one of toDate if financial institutions are able to provide historical balances. If not the consumer should use today's date for ‘toDate’.                                                                                                                                                                                        | -                                                                                                                                                                                                           |

**It is recommended to validate AdditionalReferenceID and AdditionalReferenceIDType according to the legal-mandate.*


## Responses

Values in response from the data providers.

All fields are to be provided as long as the data provider holds the data, regardless of whether the fields 
are marked as mandatory or not. This is according to the legal basis.

| Value                                                                                                         | Level 1                                                                                                                       | Level 2                                                                                                                                             | Level 3                                                                                                                                                                      |
|:--------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [**responseDetails (D)**](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#responsedetails) |                                                                                                                               |                                                                                                                                                     |                                                                                                                                                                              |
|                                                                                                               | [responseDetails.status (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#responsedetailsstatus)        |                                                                                                                                                     |                                                                                                                                                                              |
|                                                                                                               | [responseDetails.message (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#responsedetailsmessage)      |                                                                                                                                                     |                                                                                                                                                                              |
| [**account (D)**](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#account)                 |                                                                                                                               |                                                                                                                                                     |                                                                                                                                                                              |
|                                                                                                               | [account.status (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountstatus)                        |                                                                                                                                                     |                                                                                                                                                                              |
|                                                                                                               | [account.servicer (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountservicer)                    |                                                                                                                                                     |                                                                                                                                                                              |
|                                                                                                               |                                                                                                                               | [account.servicer.identifier (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountserviceridentifier)                    |                                                                                                                                                                              |
|                                                                                                               |                                                                                                                               |                                                                                                                                                     | [account.servicer.identifier.countryOfResidence (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountserviceridentifiercountryofresidence)         |
|                                                                                                               |                                                                                                                               |                                                                                                                                                     | [account.servicer.identifier.value (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountserviceridentifiervalue)                                  |
|                                                                                                               |                                                                                                                               |                                                                                                                                                     | [account.servicer.identifier.type (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountserviceridentifiertype)                                    |
|                                                                                                               |                                                                                                                               | [account.servicer.name (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountservicername)                                 |                                                                                                                                                                              |
|                                                                                                               | [account.accountIdentifier (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountaccountidentifier) |                                                                                                                                                     |                                                                                                                                                                              |
|                                                                                                               | [account.accountReference (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountaccountreferences)  |                                                                                                                                                     |                                                                                                                                                                              |
|                                                                                                               | [account.type (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accounttype)                            |                                                                                                                                                     |                                                                                                                                                                              |
|                                                                                                               | [account.currency (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountcurrency)                    |                                                                                                                                                     |                                                                                                                                                                              |
|                                                                                                               | [account.name (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountname)                            |                                                                                                                                                     |                                                                                                                                                                              |
|                                                                                                               | [account.balances (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountbalances)                    |                                                                                                                                                     |                                                                                                                                                                              |
|                                                                                                               |                                                                                                                               | [account.balances.creditLineIncluded (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountbalancescreditlineincluded)     |                                                                                                                                                                              |
|                                                                                                               |                                                                                                                               | [account.balances.amount (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountbalancesamount)                             |                                                                                                                                                                              |
|                                                                                                               |                                                                                                                               | [account.balances.creditDebitIndicator (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountbalancescreditdebitindicator) |                                                                                                                                                                              |
|                                                                                                               |                                                                                                                               | [account.balances.registered (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountbalancesregistered)                     |                                                                                                                                                                              |
|                                                                                                               |                                                                                                                               | [account.balances.type (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountbalancestype)                                 |                                                                                                                                                                              |
|                                                                                                               |                                                                                                                               | [account.balances.creditLineAmount (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountbalancescreditlineamount)         |                                                                                                                                                                              |
|                                                                                                               |                                                                                                                               | [account.balances.creditLineCurrency (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountbalancescreditlinecurrency)     |                                                                                                                                                                              |
|                                                                                                               |                                                                                                                               | [account.balances.currency (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountbalancescurrency)                         |                                                                                                                                                                              |
|                                                                                                               | [account.primaryOwner (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountprimaryowner)            |                                                                                                                                                     |                                                                                                                                                                              |
|                                                                                                               |                                                                                                                               | [account.primaryOwner.permission (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountprimaryownerpermission	)            |                                                                                                                                                                              |
|                                                                                                               |                                                                                                                               | [account.primaryOwner.identifier (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountprimaryowneridentifier	)            |                                                                                                                                                                              |
|                                                                                                               |                                                                                                                               |                                                                                                                                                     | [account.primaryOwner.identifier.countryOfResidence (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountprimaryowneridentifiercountryofresidence) |
|                                                                                                               |                                                                                                                               |                                                                                                                                                     | [account.primaryOwner.identifier.value (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountprimaryowneridentifiervalue)                          |
|                                                                                                               |                                                                                                                               |                                                                                                                                                     | [account.primaryOwner.identifier.type (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountprimaryowneridentifiertype)                            |
|                                                                                                               |                                                                                                                               | [account.primaryOwner.name (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountprimaryownername)                         |                                                                                                                                                                              |
|                                                                                                               |                                                                                                                               | [account.primaryOwner.startDate (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountprimaryownerstartdate)               |                                                                                                                                                                              |
|                                                                                                               |                                                                                                                               | [account.primaryOwner.endDate (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountprimaryownerenddate)                   |                                                                                                                                                                              |
|                                                                                                               | [account.startDate (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountstartdate)                  |                                                                                                                                                     |                                                                                                                                                                              |
|                                                                                                               | [account.endDate (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails#accountenddate)                      |                                                                                                                                                     |                                                                                                                                                                              |

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
the document [DSOP Control - Functional specification - 2024-03-06 - Messages in relation with partial.pdf](https://dokumentasjon.dsop.no/assets/DSOP Control - Functional specification - 2024-03-06 - Messages in relation with partial.pdf).


### accounts

*Deliver*

### accounts.status

*Deliver*

Indicates the current status of an account
* enabled: Any status of the account where a party can use the balance.
* disabled: Any status of an account where no party can use the account, either temporarily or permanently. The account balance and properties are still available for viewing and listing. Accounts blocked due to bankruptcy shall return the value *disabled*.
* deleted: Any status of an account where the account, balance and properties are no longer available at all.

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

* countryIdentificationCode: The national registration code for businesses, enterprise, organizations and companies that is retrieved from the National register for organizations. In Norway this would be from BRREG.
* nationalIdentityNumber: Used for persons. The national identity code for persons. In Norway this would be P or D numbers from FREG.

|[countryIdentificationCode, nationalIdentityNumber]|


### account.servicer.name

*Deliver*

Name of the financial institution.

### account.accountIdentifier

*Mandatory conditional*

Account number. Generally 11 characters long but can be longer for some specific products such as credit cards or leasing agreements.

### account.accountReference

*Mandatory conditional*

A unique reference to the account/agreement. This reference should not be the real account number and should not be simply decoded to an account number. Banks are free to put more information in this reference in order to get necessary context to be used in other endpoints.


### accounts.type

*Deliver*

All accounts/products for a bank must be mapped into one of the account types that are stated in this list below:
1.	loanAccount: Account for funds borrowed by a financial institution to the party.
2.	salaryAccount: Account for funds used on an ongoing basis by a person.
3.	currencyAccount: Account for settlements and transactions in a fixed foreign currency.
4.	savingsAccount: Account for funds used for savings.
5.	clientAccount: Account for client funds (keeping clients funds separate from those of the business).
6.	taxDeductionAccount: Account for funds used to pay advance tax for employees.
7.	businessAccount: Account for funds that are used on an ongoing basis by a company / business.
8.	creditCardAccount: Account for funds used by credit cards.
9.	prepaidCardAccount: Account for funds used by a prepaid card.
10.	accountWithoutBalance: Account types without balance and usually not registered in KAR. Includes some CashPool and depot accounts as well as some others.
11.	otherAccount: other type of account that cannot be grouped into the other ten categories or unknown type of account from legacy systems.

Note: All account types that are or have been registered with the bank must be grouped into the eleven valid values listed above.

|[loanAccount, salaryAccount, currencyAccount, savingsAccount, clientAccount, taxDeductionAccount, businessAccount, creditCardAccount, prepaidCardAccount, accountWithoutBalance, otherAccount]|


### account.currency

*Deliver*

CurrencyCode ISO Standard 4217.

### account.name

*Will not be delivered*

This field will not be delivered. 

### account.balances

*Deliver*

Balance on the account, both booked and available. This applies for both current and historical balance. Data providers must assess if only booked balance is to be returned for historical balance, especially in cases where the available balance is not relevant or meaningful.

### account.balances.creditLineIncluded

*Deliver*

This indicates whether credit limit is included in balance or not. If true, the value in <i>creditLineAmount</i> should be used to calculate the balance.


|[true, false]|

### account.balances.amount

*Deliver*

The amount on balance. This value is always positive.

### account.balances.creditDebitIndicator

*Deliver*

Indicates whether balance is positive or negative. Credit is positive and debit is negative.

|[credit, debit]

### account.balances.registered

*Deliver*

Date and time of balance ISO Date: YYYY-MM-DDThh:mm:ssZ for UTC or YYYY-MM-DDThh:mm:ss+hh for other timezones.
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

CurrencyCode. Currency of the credit line in ISO Standard.

### account.balances.currency

*Deliver*

CurrencyCode for the balance amount. ISO Standard.

### account.primaryOwner

*Deliver*

Party (person or organization) who owns the account at the end date of the requested period, limited to the period the requested party had a role against the account.

### account.primaryOwner.permission

*Deliver*

Specifies the type of role/right the party has for an account.
* rightToUseAlone: Can issue transactions changing the balance of the account on their own.
* rightToUseWithOther: Can only issue transactions changing the balance of the account together with other party.
* rightToSeeOnly: Can only view account details, but not issue transactions.

|[rightToUseAlone, rightToUseWithOther, rightToSeeOnly]|

### account.primaryOwner.identifier

*Deliver*

### account.primaryOwner.identifier.countryOfResidence

*Deliver*

CountryCode. The country the person or organization belongs to. In ISO 3166-1/Alpha-2 code format.

### account.primaryOwner.identifier.value

*Mandatory conditional*

Personal identification number, D-number or organization number.

### account.primaryOwner.identifier.type

*Mandatory conditional*

|[countryIdentificationCode, nationalIdentityNumber]|

### account.primaryOwner.name

*Deliver*

Name of the party that owns the account.

### account.primaryOwner.startDate

*Deliver*

Start date for when party got account ownership when creating account. This is the last period to be specified if the 
account is closed and re-opened. ISODate (yyyy-mm-dd).

### account.primaryOwner.endDate

*Deliver*

End date for when the party lost their rights as an account owner. This is the last period to be specified if the account
is closed and re-opened. No end date if the party is still the owner of the account. ISODate (yyyy-mm-dd).


### account.startDate

*Deliver*

Date when account was created. If a bank has more than one startDate and/or endDate for an account (it has been closed 
and reopened or recycled) where current parties had or have a role on the account, the latest dates shall be reported. 
The endDate shall always come after (be newer than) the startDate. If the account is currently open, no endDate shall 
be given.

### account.endDate

*Deliver*

Date when account was closed. If a bank has more than one startDate and/or endDate for an account (it has been closed 
and reopened or recycled) where current parties had or have a role on the account, the latest dates shall be reported. 
The endDate shall always come after (be newer than) the startDate. If the account is currently open, no endDate shall 
be given.



## Change log

| Date     | Version | Change                                                                                         |
|----------|---------|------------------------------------------------------------------------------------------------|
| 06.06.25 | 2.0.1   | Making the description of <i>account.balances</i> more precise.                                       |
| 21.05.25 | 2.1     | Change in description of <i>account.balances.creditLineIncluded</i>. <br> From: <i>Credit limit should not be included in balance, so this field should always be false.</i> <br> To: <i>If true, the value in creditLineAmount should be used to calculate the balance.</i> |
| 20.03.24 | 2.0     | New version of the DSOP Control API generating extensive changes throughout all documentation. |
| 03.05.23 | 1.2     | Added data model for V.1.2, includes responseDetails                                           |
