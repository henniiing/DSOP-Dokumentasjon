---
title: "Endpoint Accounts V.2.0"
slug: "dsop_v2fellesstandard_accounts"
id: "dsop_v2fellesstandard_accounts"
keywords:
  - "sample"
---

List of accounts for a specified party and period. Must provide a blank list if there are no hits.

<br >. | 	Even though this parameter is technically optional, it could become logically mandatory for a given DSOP service.                                                                                           |
| OnlyPrimaryOwner (M)            | 	TRUE: endpoint will return a list of accounts where PartyID is primary owner <br > FALSE: endpoint will return a list of accounts where PartyID has a customer relation, either primary owner, secondary owner or other role to the account(s).	                                                                                                                                                                                           | Specific to each DSOP Service.                                                                                                                                                                               |
| fromDate (M)	                   | Date (included) from which the time period for the data delivery starts.                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                              | 
| toDate (M)	                     | Date (included) from which the time period for the data delivery ends.                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                              |

**It is recommended to validate AdditionalReferenceID and AdditionalReferenceIDType according to the Legal-Mandate.*



## Responses

Values in response from data providers.

All fields are to be provided as long as the data provider holds the data, regardless of whether the fields 
are marked as mandatory or not. This is according to the legal basis.

| Value                                                                                                   | Level 1                                                                                                                   | Level 2                                                                                                                              | Level 3                                                                                                                                                                  |
|:--------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [**responseDetails (D)**](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#responsedetails) |                                                                                                                           |                                                                                                                                      |                                                                                                                                                                          |
|                                                                                                         | [responseDetails.status (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#responsedetailsstatus)          |                                                                                                                                      |                                                                                                                                                                          |
|                                                                                                         | [responseDetails.message (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#responsedetailsmessage)        |                                                                                                                                      |                                                                                                                                                                          |
| [**accounts (D)**](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accounts)               |
|                                                                                                         | [accounts.status (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountsstatus)                        |
|                                                                                                         | [accounts.servicer (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountsservicer)                    |
|                                                                                                         |                                                                                                                           | [accounts.servicer.identifier (MC)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountsserviceridentifier)         |
|                                                                                                         |                                                                                                                           |                                                                                                                                      | [accounts.servicer.identifier.countryOfResidence (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountsserviceridentifiercountryofresidence)         |
|                                                                                                         |                                                                                                                           |                                                                                                                                      | [accounts.servicer.identifier.value (MC)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountsserviceridentifiervalue)                                  |
|                                                                                                         |                                                                                                                           |                                                                                                                                      | [accounts.servicer.identifier.type (MC)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountsserviceridentifiertype)                                    |
|                                                                                                         |                                                                                                                           | [accounts.servicer.name (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountsservicername)                      |
|                                                                                                         | [accounts.accountIdentifier (MC)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountsaccountidentifier) |
|                                                                                                         | [accounts.accountReference (MC)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountsaccountreference)   |
|                                                                                                         | [accounts.type (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountstype)                            |
|                                                                                                         | [accounts.currency (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountscurrency)                    |
|                                                                                                         | [accounts.primaryOwner (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountsprimaryowner)            |
|                                                                                                         |                                                                                                                           | [accounts.primaryOwner.permission (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountsprimaryownerpermission	) |
|                                                                                                         |                                                                                                                           | [accounts.primaryOwner.identifier (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountsprimaryowneridentifier	) |
|                                                                                                         |                                                                                                                           |                                                                                                                                      | [accounts.primaryOwner.identifier.countryOfResidence (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountsprimaryowneridentifiercountryofresidence) |
|                                                                                                         |                                                                                                                           |                                                                                                                                      | [accounts.primaryOwner.identifier.value (MC)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountsprimaryowneridentifiervalue)                          |
|                                                                                                         |                                                                                                                           |                                                                                                                                      | [accounts.primaryOwner.identifier.type (MC)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountsprimaryowneridentifiertype)                            |
|                                                                                                         |                                                                                                                           | [accounts.primaryOwner.name (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountsprimaryownername)              |
|                                                                                                         |                                                                                                                           | [accounts.primaryOwner.startDate (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountsprimaryownerstartdate)    |
|                                                                                                         |                                                                                                                           | [accounts.primaryOwner.endDate (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountsprimaryownerenddate)        |
|                                                                                                         | [accounts.name (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountsname)                            |
| [**links (D)**](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#links)                     |
|                                                                                                         | [links.rel (MC)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#linksrel)                                   |
|                                                                                                         | [links.href (MC)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#linkshref)                                 |




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


### accounts

*Deliver*

### accounts.status

*Deliver*

Indicates the current status of an account
* enabled: Any status of the account where a party can use the balance.
* disabled: Any status of an account where no party can use the account, either temporarily or permanently. The account balance and properties are still available for viewing and listing. Accounts blocked due to bankruptcy shall return the value *disabled*.
* deleted: Any status of an account where the account, balance and properties are no longer available at all.

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

* countryIdentificationCode: The national registration code for businesses, enterprise, organizations and companies that is retrieved from the National register for organizations. In Norway this would be from BRREG.
* nationalIdentityNumber: Used for persons. The national identitycode for persons. In Norway this would be P or D numbers from FREG.

|[countryIdentificationCode, nationalIdentityNumber]|

### accounts.servicer.name

*Deliver*

Name of the financial institution.


### accounts.accountIdentifier

*Mandatory conditional*

Account number. Generally 11 characters long but can be longer for some specific products such as credit cards or leasing agreements.

### accounts.accountReference

*Mandatory conditional*

A unique reference to the account/agreement. This reference should not be the real account number and should not be simply decoded to an account number. Banks are free to put more information in this reference in order to get necessary context to be used in other endpoints.

This data element may in addition return predefined values in order to inform the data consumer about account specific delivery behaviour for the other endpoints.

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


### accounts.currency

*Deliver*

CurrencyCode ISO Standard 4217.

### accounts.primaryOwner

*Deliver*

Party (person or organization) who owns the account at the end date of the requested period, limited to the period the requested party had a role against the account.


### accounts.primaryOwner.permission

*Deliver*

Specifies the type of role/right the party has for an account.
* rightToUseAlone: Can issue transactions changing the balance of the account on their own.
* rightToUseWithOther: Can only issue transactions changing the balance of the account together with other party.
* rightToSeeOnly: Can only view account details, but not issue transactions.

|[rightToUseAlone, rightToUseWithOther, rightToSeeOnly]|

### accounts.primaryOwner.identifier

*Deliver*

### accounts.primaryOwner.identifier.countryOfResidence

*Deliver*

CountryCode. The country the party belongs to. In ISO 3166-1/Alpha-2 code format.

### accounts.primaryOwner.identifier.value

*Mandatory conditional*

Personal identification number, D-number or organization number.

### accounts.primaryOwner.identifier.type

*Mandatory conditional*

|[ countryIdentificationCode, nationalIdentityNumber ]|


### accounts.primaryOwner.name

*Deliver*

Name of the party that owns the account.

### accounts.primaryOwner.startDate

*Deliver*

Start date for when the party gained their rights as an account owner. This is the last period to be specified if the 
account is closed and re-opened. ISODate (yyyy-mm-dd).

### accounts.primaryOwner.endDate

*Deliver*

End date for when the party lost their rights as an account owner. This is the last period to be specified if the account 
is closed and re-opened. No end date if the party is still the owner of the account. ISODate (yyyy-mm-dd).


### accounts.name

*Will not be delivered*

This field will not be delivered. 


### links

*Deliver*

[Link](https:/dokumentasjon.dsop.no/dsop_kontroll_spesifikasjon_av_eoppslag.html#store-resultatsett)

### links.rel

*Mandatory conditional*

Paginating as in; next, self, prev, last.

### links.href

*Mandatory conditional*

Paginating, Link to page.




## Change log

| Date     | Version | Change                                                                                         |
|----------|---------|------------------------------------------------------------------------------------------------|
| 20.03.24 | 2.0     | New version of the DSOP Control API generating extensive changes throughout all documentation. |
| 03.05.23 | 1.2     | Added data model for V.1.2, includes responseDetails                                           |
