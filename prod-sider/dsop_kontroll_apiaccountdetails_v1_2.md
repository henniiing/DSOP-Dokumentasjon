---
title: "API Account details V.1.2"
slug: "dsop_kontroll_apiaccountdetails_v1_2"
id: "dsop_kontroll_apiaccountdetails_v1_2"
keywords: ["sample"]
---

Account details, including balances, for a specified account.

[The last chapter in this page](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2.html#use-of-the-data-model-per-DSOP-solution) shows what fields to include in the different DSOP Solutions based on the DSOP Control Common Standard.

### Abbreviations

| Abbreviations |  | Description |
| --------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| M | Mandatory | Must be part of the response, even if there is no data. Not returning this field in the response can break the receiving API. |
| D | Deliver | Producers are obligated to deliver all requested data if they can*. If the data exists in the Producers systems and is possible to deliver through the API, it must be part of the response. If the data does not exist or cannot be delivered through the API, the field can be omitted. |
| MC | Mandatory conditional | - Child fields where Parent field is marked «M»(Mandatory) is crucial to give value to the Parent and must be delivered, even if there is no data. (See separate description for how to return empty or no data in fields.) Not returning this field in the response can break the receiving API. 
| AdditionalReferenceID*  (O) | Reference ID when legal-mandate is not adequate alone, or to identify requester at consumer. Should be validated according to the legal-mandate. Formatted encoded text. | Required for some legal mandates. 
* disabled: Any status of an account where no party can use the account, both temporarily or permanent. The account balance and properties are still available for viewing and listing. Accounts blocked due to bancruptcy <ins />shall&lt;/ins &amp;amp; gt; return the value *disabled*.<ins />
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

| Field | Kontrollinformasjon (Skatteetaten, NAV, Politi) | Konkursbehandling (Brreg) |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ---------------------------- |
| [**responseStatus (D)**](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#responsestatus) | ✅ | ✅ |
| [**responseDetails (D)**](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#responsedetails) | ✅ | ✅ |
| [responseDetails.status (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#responsedetailsstatus) | ✅ | ✅ |
| [responseDetails.message (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#responsedetailsmessage) | ✅ | ✅ |
| [**account (D)**](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#account) | ✅ | ✅ |
| [account.status (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountstatus) | ✅ | ✅ |
| [account.servicer (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountservicer) | ✅ | ✅ |
| [account.servicer.identifier (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountserviceridentifier) | ✅ | ✅ |
| [account.servicer.identifier.countryOfResidence (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountserviceridentifiercountryofresidence) | ✅ | ✅ |
| [account.servicer.identifier.value (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountserviceridentifiervalue) | ✅ | ✅ |
| [account.servicer.identifier.type (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountserviceridentifiertype) | ✅ | ✅ |
| [account.servicer.name (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountservicername) | ✅ | ✅ |
| [account.accountIdentifier (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountaccountidentifier) | ✅ | ✅ |
| [account.accountReference (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountaccountreferences) | ✅ | ✅ |
| [account.type (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accounttype) | ✅ | ✅ |
| [account.currency (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountcurrency) | ✅ | ✅ |
| [account.name (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountname) | ✅ | ✅ |
| [account.balances (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountbalances) | ✅ | ✅ |
| [account.balances.creditLineIncluded (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountbalancescreditlineincluded) | ✅ | ✅ |
| [account.balances.amount (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountbalancesamount) | ✅ | ✅ |
| [account.balances.creditDebitIndicator (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountbalancescreditdebitindicator) | ✅ | ✅ |
| [account.balances.registered (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountbalancesregistered) | ✅ | ✅ |
| [account.balances.type (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountbalancestype) | ✅ | ✅ |
| [account.balances.creditLineAmount (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountbalancescreditlineamount) | ✅ | ✅ |
| [account.balances.creditLineCurrency (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountbalancescreditlinecurrency) | ✅ | ✅ |
| [account.balances.currency (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountbalancescurrency) | ✅ | ✅ |
| [account.primaryOwner (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryowner) | ✅ | ✅ |
| [account.primaryOwner.permission (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryownerpermission	) | ✅ | ✅ |
| [account.primaryOwner.identifier (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryowneridentifier	) | ✅ | ✅ |
| [account.primaryOwner.identifier.countryOfResidence (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryowneridentifiercountryofresidence) | ✅ | ✅ |
| [account.primaryOwner.identifier.value (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryowneridentifiervalue) | ✅ | ✅ |
| [account.primaryOwner.identifier.type (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryowneridentifiertype) | ✅ | ✅ |
| [account.primaryOwner.name (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryownername) | ✅ | ✅ |
| [account.primaryOwner.startDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryownerstartdate) | ✅ | ✅ |
| [account.primaryOwner.endDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryownerenddate) | ✅ | ✅ |
| [account.primaryOwner.postalAddress (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryownerpostaladdress) | ✅ | ✅ |
| [account.primaryOwner.postalAddress.postCode (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryownerpostaladdresspostcode) | ✅ | ✅ |
| [account.primaryOwner.postalAddress.type (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryownerpostaladdresstype) | ✅ | ✅ |
| [account.primaryOwner.postalAddress.streetName (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryownerpostaladdressstreetname) | ✅ | ✅ |
| [account.primaryOwner.postalAddress.buildingNumber (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryownerpostaladdressbuildingnumber) | ✅ | ✅ |
| [account.primaryOwner.postalAddress.townName (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryownerpostaladdresstownname) | ✅ | ✅ |
| [account.primaryOwner.postalAddress.country (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryownerpostaladdresscountry) | ✅ | ✅ |
| [account.primaryOwner.postalAddress.addressLines (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryownerpostaladdressaddresslines) | ✅ | ✅ |
| [account.primaryOwner.electronicAddresses (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryownerelectronicaddresses) | ✅ | ✅ |
| [account.primaryOwner.electronicAddresses.type (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryownerelectronicaddressestype) | ✅ | ✅ |
| [account.primaryOwner.electronicAddresses.value (MC)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountprimaryownerelectronicaddressesvalue) | ✅ | ✅ |
| [account.startDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountstartdate)                                                                 |
| [account.endDate (D)](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#accountenddate) | ✅ | ✅ |

## Change log

| Date | Change | Link in document |
| ---------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| 03.05.23 | Added data model for V.1.2, includes responseDetails | [responseDetails](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountdetails_v1_2#responseDetails) |
