---
title: "API Transactions V.1.1"
slug: "dsop_kontroll_apitransactions"
id: "dsop_kontroll_apitransactions"
keywords:
  - "sample"
---

Transactions for a specified account and period. Empty list if no hits. Must support pagination on large result sets (min 1000).

[The last chapter in this page](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#use-of-the-data-model-per-DSOP-solution) shows what fields to include in the different DSOP Solutions based on the DSOP Control Common Standard.

### Abbreviations

| Abbreviations |                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                              |
|---------------|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| M             | Mandatory             | Must be part of the response, even if there is no data. Not returning this field in the response can break the receiving API.                                                                                                                                                                                                                                                                                                            |
| D             | Deliver               | Producers are obligated to deliver all requested data if they can*. If the data exists in the Producers systems and is possible to deliver through the API, it must be part of the response. If the data does not exist or cannot be delivered through the API, the field can be omitted.                                                                                                                                                |
| MC            | Mandatory conditional | - Child fields where Parent field is marked «M»(Mandatory) is crucial to give value to the Parent and must be delivered, even if there is no data. (See separate description for how to return empty or no data in fields.) Not returning this field in the response can break the receiving API. <br> <br> - As long as a parent field marked with “D” is part of the response, the child field marked with “MC” must also be returned. |
| O             | Optional              | Only used in input parameters                                                                                                                                                                                                                                                                                                                                                                                                            |

  **If the data provider cannot deliver all requested data through Control API, but have more data offline, [responseStatus](https://dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist#responsestatus) must return value "partial".*



## Input parameters

Values set by data consumer.

It is the data providers responsibility to validate all requests' from the data consumers and to make sure that all requests are validated well enough. See some [recommendations regarding validation of requests in Control API](https://dokumentasjon.dsop.no/dsop_kontroll_validation.html). 

| Parameter                      | Description                                                                                                                                                              | Comment                                                                                                                                                                                                                                |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| accountReference (M)           | A unique reference to the account, but should not be the account number and not simply decoded to an account number.                                                     |                                                                                                                                                                                                                                        |
| AccountInfoRequestID (M)       | Consumers case reference id/number                                                                                                                                       | [Link to Specification of eOppslag](https://dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#accountinforequestid)                                                                                  |
| CorrelationID (M)              | Unique identifier for the technical request                                                                                                                              | [Link to Specification of eOppslag](https://dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#correlationid)                                                                                         |
| Legal-Mandate* (M)             | Legal basis the financial institution should validate. Formatted encoded text.                                                                                           | [Link to Juridiske rammebetingelser](https://dokumentasjon.dsop.no/dsop_kontroll_juridisk.html)                                                                                                                       |
| AdditionalReferenceID*  (O)    | Reference ID when legal-mandate is not adequate alone, or to identify requester at consumer. Should be validated according to the legal-mandate. Formatted encoded text. | Required for some legal mandates. <br>[More information in Specification of eOppslag](https://dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid) |
| AdditionalReferenceIDType* (O) | What type of reference to expect in AdditionalReferenceID                                                                                                                | Required for some legal mandates. <br>[More information in Specification of eOppslag](https://dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid) |
| fromDate  (O)                  | From date, current date if not stated                                                                                                                                    |                                                                                                                                                                                                                                        |
| toDate (O)                     | To date, current date if not stated                                                                                                                                      |                                                                                                                                                                                                                                        |

**It is recommended to validate AdditionalReferenceID and AdditionalReferenceIDType according to the legal-mandate ([see what legal mandates which requires information in AdditionalReferenceID](https://dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid)). Legal-mandate should always be logged with belonging AdditionalReferenceID.*


## Responses

Values in response from financial institutions.

All fields are to be provided as long as the bank/financial institution holds the data, regardless of whether the fields are marked as mandatory or not. This is according to the legal basis.

| Value                                                                                                                      | Level 1                                                                                                                                                        | Level 2                                                                                                                                                                            | Level 3                                                                                                                                                                                                                 | 
|:---------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [**responseStatus (D)**](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#responsestatus) |
| [**transactions (D)**](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactions)     |
|                                                                                                                            | [transactions.transactionIdentifier (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionstransactionidentifier) |
|                                                                                                                            | [transactions.references (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsreferences)                        |
|                                                                                                                            |                                                                                                                                                                | [transactions.references.value (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsreferencesvalue)                                |
|                                                                                                                            |                                                                                                                                                                | [transactions.references.type (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsreferencestype)                                  |
|                                                                                                                            | [transactions.creditDebitIndicator (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscreditdebitindicator)   |
|                                                                                                                            | [transactions.reversalIndicator (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsreversalindicator)          |
|                                                                                                                            | [transactions.status (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsstatus)                               |
|                                                                                                                            | [transactions.transactionCode (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionstransactioncode)             |
|                                                                                                                            |                                                                                                                                                                | [transactions.transactionCode.domain (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionstransactioncodedomain)                     |
|                                                                                                                            |                                                                                                                                                                | [transactions.transactionCode.family (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionstransactioncode.family)                    |
|                                                                                                                            |                                                                                                                                                                | [transactions.transactionCode.subFamily (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionstransactioncodesubfamily)               |
|                                                                                                                            |                                                                                                                                                                | [transactions.transactionCode.freeText (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionstransactioncodefreetext)                 |
|                                                                                                                            | [transactions.bookingDate (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsbookingdate)                     |
|                                                                                                                            | [transactions.valueDate (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsvaluedate)                         |
|                                                                                                                            | [transactions.counterParties (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterparties)                |
|                                                                                                                            |                                                                                                                                                                | [transactions.counterParties.accountIdentifier (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiesaccountidentifier) |
|                                                                                                                            |                                                                                                                                                                | [transactions.counterParties.identifier (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiesidentifier)               |
|                                                                                                                            |                                                                                                                                                                |                                                                                                                                                                                    | [transactions.counterParties.identifier.countryOfResidence (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiesidentifiercountryofresidence)               |
|                                                                                                                            |                                                                                                                                                                |                                                                                                                                                                                    | [transactions.counterParties.identifier.value (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiesidentifiervalue)                                        |
|                                                                                                                            |                                                                                                                                                                |                                                                                                                                                                                    | [transactions.counterParties.identifier.type (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiesidentifiertype)                                          |
|                                                                                                                            |                                                                                                                                                                | [transactions.counterParties.name (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiesname)                           |
|                                                                                                                            |                                                                                                                                                                | [transactions.counterParties.type (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiestype)                          |
|                                                                                                                            |                                                                                                                                                                | [transactions.counterParties.postalAddress (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiespostaladdress)         |
|                                                                                                                            |                                                                                                                                                                |                                                                                                                                                                                    | [transactions.counterParties.postalAddress.postCode (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiespostaladdresspostcode)                             |
|                                                                                                                            |                                                                                                                                                                |                                                                                                                                                                                    | [transactions.counterParties.postalAddress.type (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiespostaladdresstype)                                    |
|                                                                                                                            |                                                                                                                                                                |                                                                                                                                                                                    | [transactions.counterParties.postalAddress.streetName (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiespostaladdressstreetname)                         |
|                                                                                                                            |                                                                                                                                                                |                                                                                                                                                                                    | [transactions.counterParties.postalAddress.buildingNumber (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiespostaladdressbuildingnumber)                 |
|                                                                                                                            |                                                                                                                                                                |                                                                                                                                                                                    | [transactions.counterParties.postalAddress.townName (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiespostaladdresstownname)                             |
|                                                                                                                            |                                                                                                                                                                |                                                                                                                                                                                    | [transactions.counterParties.postalAddress.country (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiespostaladdresscountry)                               |
|                                                                                                                            |                                                                                                                                                                |                                                                                                                                                                                    | [transactions.counterParties.postalAddress.addressLines (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiespostaladdressaddresslines)                     |
|                                                                                                                            | [transactions.additionalInfo (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsadditionalinfo)                |
|                                                                                                                            | [transactions.currencyExchange (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscurrencyexchange)            |
|                                                                                                                            |                                                                                                                                                                | [transactions.currencyExchange.originalAmount (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscurrencyexchangeoriginalamount)   |
|                                                                                                                            |                                                                                                                                                                | [transactions.currencyExchange.sourceCurrency (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscurrencyexchangesourcecurrency)  |
|                                                                                                                            |                                                                                                                                                                | [transactions.currencyExchange.targetCurrency (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscurrencyexchangetargetcurrency)  |
|                                                                                                                            |                                                                                                                                                                | [transactions.currencyExchange.unitCurrency (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscurrencyexchangeunitcurrency)       |
|                                                                                                                            |                                                                                                                                                                | [transactions.currencyExchange.exchangeRate (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscurrencyexchangeexchangerate)      |
|                                                                                                                            | [transactions.merchant (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsmerchant)                            |
|                                                                                                                            | [transactions.paymentCard (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcard)                      |
|                                                                                                                            |                                                                                                                                                                | [transactions.paymentCard.cardIdentifier (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardcardidentifier)            |
|                                                                                                                            |                                                                                                                                                                | [transactions.paymentCard.holderName (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardholdername)                    |
|                                                                                                                            |                                                                                                                                                                | [transactions.paymentCard.startDate (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardstartdate)                      |
|                                                                                                                            |                                                                                                                                                                | [transactions.paymentCard.expiryDate (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardexpirydate)                    |
|                                                                                                                            |                                                                                                                                                                | [transactions.paymentCard.cardIssuerName (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardcardissuername)            |
|                                                                                                                            |                                                                                                                                                                | [transactions.paymentCard.type (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardtype)                                |
|                                                                                                                            |                                                                                                                                                                | [transactions.paymentCard.cardIssuerIdentifier (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardcardissueridentifier) |
|                                                                                                                            |                                                                                                                                                                |                                                                                                                                                                                    | [transactions.paymentCard.cardIssuerIdentifier.countryOfResidence (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardcardissueridentifiercountryofresidence) |
|                                                                                                                            |                                                                                                                                                                |                                                                                                                                                                                    | [transactions.paymentCard.cardIssuerIdentifier.value (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardcardissueridentifiervalue)                          |
|                                                                                                                            |                                                                                                                                                                |                                                                                                                                                                                    | [transactions.paymentCard.cardIssuerIdentifier.type (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardcardissueridentifiertype)                            |
|                                                                                                                            | [transactions.registered (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsregistered)                        |
|                                                                                                                            | [transactions.amount (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsamount)                               |
|                                                                                                                            | [transactions.currency (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscurrency)                           |
| [**links (D)**](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#links)                   |
|                                                                                                                            | [links.rel (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#linksrel)                                                   |
|                                                                                                                            | [links.href (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#linkshref)                                                 |




## Description of all response elements in the API

### responseStatus

*Deliver*

Indicates whether this is a complete answer, or whether there is data offline that can not be retrieved through the API.
* partial: If there is any data in the producers systems that can be retrieved manually and is not part of the API response.
* complete: If there are no more available data that can be retrieved manually. All known data has been returned in the response.

responseStatus is not to be used as an indicator for paginating.									

|[partial, complete]|

### transactions

*Deliver*

### transactions.transactionidentifier

*Mandatory conditional*

A unique identifier for each transaction within each bank, following the bank's own standard.										

### transactions.references

*Deliver*

A reference to a transaction created by the reporting bank.								

### transactions.references.value

*Mandatory conditional*

Reference number associated with type.									
### transactions.references.type

*Mandatory conditional*

Use otherReference if no other value can apply.			

|[accountServicerReference, archiveReference, chequeNumber, endToEndIdentification, instructionIdentification, invoiceNumber, mandateIdentification, messageIdentification, otherReference, paymentInformationIdentification, remittanceReference]|

### transactions.creditDebitIndicator

*Mandatory conditional*

Indicates whether the transaction is a payment or payout. Credit is payment and debit is payout.
	
|[credit, debit]|

### transactions.reversalIndicator

*Deliver*

Indicates whether the transaction is a correction of a previous transaction.									

### transactions.status

*Mandatory conditional*

Status of the transaction. Shows whether the transaction is booked or pending. All other transactions' statuses can be mapped to info.	

|[booked, pending, info]|

### transactions.transactionCode

*Mandatory conditional*

### transactions.transactionCode.domain

*Deliver*

Business area: High level definition of the business activity. See document "BANK TRANSACTION CODE COMBINATIONS AND DESCRIPTION" in ISO20022 standard.				

|[accountManagement, cashManagement, foreignExchange, payments, securities, tradeServices, extended]|

### transactions.transactionCode.family

*Deliver*

Product family definition. See document "BANK TRANSACTION CODE COMBINATIONS AND DESCRIPTION" in ISO20022 standard.

|[additionalMiscellaneousCreditOperations, additionalMiscellaneousDebitOperations, miscellaneousCreditOperations, miscellaneousDebitOperations, openingAndClosing, accountBalancing, cashPooling, notAvailable, customerCardTransactions, counterTransactions, drafts, issuedCashConcentrationTransactions, issuedCreditTransfers, issuedCheques, issuedDirectDebits, lockboxTransactions, merchantCardTransactions, other, receivedCashConcentrationTransactions, receivedCreditTransfers, receivedCheques, receivedDirectDebits, corporateAction, documentaryCollection, standByLetterOfCredit]|

### transactions.transactionCode.subFamily

*Deliver*

Detailed product specification
See document "BANK TRANSACTION CODE COMBINATIONS AND DESCRIPTION" in ISO20022 standard.

|[valueDate, chargesGeneric, commissions, interestsGeneric, other, accountClosing, notAvailable, sweeping, topping, zeroBalancing, cashWithdrawal, debitCardPayment, crossBorderCashWithdrawal, cashDeposit, debitAdjustmentGeneric, travellersChequesDeposit, settlementAtMaturity, intraCompanyTransfer, corporateOwnAccountTransfer, crossBorderIntraCompanyTransfer, achDebit, achReturn, achTransactionAtxn, automaticTransfer, bankCheque, booked, domesticCreditTransfer, dividend, sepaCreditTransfer, financialInstitutionCreditTransfer, principalPayment, priorityCreditTransfer, reversalDueToPaymentReturn, achTransactionSala, sameDayValueCreditTransfer, standingOrder, taxes, creditTransferWithAgreedCommercialInformation, crossBorderCreditTransfer, cashLetter, cheques, chequesReversal, openCheque, unpaidCheque, crossBorderCheque, sepaCoreDirectDebit, directDebitPayment, reversalDueToPayment, reversalDueToPaymentCancellationRequest, reversalDueToReturnUnpaidDirectDebit, debit, deposit, adjustments, fees, creditCardPayment, pointOfSalePosPayment, creditAdjustment, settlementAfterCollection]|

### transactions.transactionCode.freeText

*Deliver*

If it is not possible to map the transaction using ISO transactionCode domain and family, freetext can be used.
Freetext must be a standard code set used by the bank to categorize the transaction. Code set must be shared with consumers

Examples: 
Payment types (codes) like; Nettgiro, Varekjøp, Visa Varekjøp, Avtalegiro, Straksutbetaling, Kontoregulering…															
### transactions.bookingDate

*Mandatory conditional*

Date for when a transaction was booked ISO Date (yyyy-mm-ddThh:mm:ss).

### transactions.valueDate

*Mandatory conditional*

Date for when the booked transaction is interest-bearing ISO Date (yyyy-mm-ddThh:mm:ss).							

### transactions.counterParties

*Deliver*

Counterparty from which it is paid or receives payment from.				

### transactions.counterParties.accountIdentifier

*Deliver*

Counterparty's account number.									
### transactions.counterParties.identifier

*Deliver*

### transactions.counterParties.identifier.countryOfResidence

*Deliver*

CountryCode. The country the counterparty belongs to. In ISO 3166-1/Alpha-2 code format.

### transactions.counterParties.identifier.value

*Mandatory conditional*

Birth and social security number or organization number of the counterparty.

### transactions.counterParties.identifier.type

*Mandatory conditional*

* countryIdentificationCode: The national registration code for businesses, enterprise, organizations and companies that is retrived from the National register for organizations. In Norway this would be from BRREG.
* nationalIdentityNumber: Used for persons. The national identitycode for persons. In Norway this would be P or D numbers from FREG.							

|[countryIdentificationCode, nationalIdentityNumber]|

### transactions.counterParties.name

*Deliver*

CounterParty's name.	

### transactions.counterParties.type

*Mandatory conditional*

Counter party's role in the transaction.

|[ debtor, creditor, ultimateDebtor, ultimateCreditor ]|

### transactions.counterParties.postalAddress

*Deliver*

CounterParty's address.								

### transactions.counterParties.postalAddress.postCode

*Deliver*

Registered postalcode for the Counter Party's address.									
### transactions.counterParties.postalAddress.type

*Mandatory conditional*

Type of registered address for the Counter Party.

|[residential, business, mailTo, deliveryTo]|

### transactions.counterParties.postalAddress.streetName

*Deliver*

Street address registered on the Counter Party.									
### transactions.counterParties.postalAddress.buildingNumber

*Deliver*

Buildingnumber for the street address registered on the Counter Party.		

### transactions.counterParties.postalAddress.townName

*Deliver*

Postalcode location name, reffering to the Postalcode and street address for the Counter Party.

### transactions.counterParties.postalAddress.country

*Deliver*

Country code for the registered address of the Counter Party. countryCode In ISO 3166-1/Alpha-2 code format.

### transactions.counterParties.postalAddress.addressLines

*Deliver*

Additional address information, freetext.									
### transactions.additionalInfo

*Deliver*

If there are any other descriptive text that can be added to the delivery, like Description from bank statement. Typically information from the issuer of the transaction. This is not to replace any structured elements in the API
Examples: Shop name, Receiver name, Action type, date…

### transactions.currencyExchange

*Deliver*

If there has been any currency conversion during the transaction, these fields describe the details of the currency exchange.									

### transactions.currencyExchange.originalAmount

*Deliver*

Amounts in their original currency before conversion.

### transactions.currencyExchange.sourceCurrency

*Mandatory conditional*

Currency from which an amount is to be converted  ISO Standard 4217.									

### transactions.currencyExchange.targetCurrency

*Mandatory conditional*

Currency to which an amount is to be converted  ISO Standard 4217.									

### transactions.currencyExchange.unitCurrency

*Deliver*

unitCurrency indicates the base currency used for the currency calculation, ISO Standard 4217.									

### transactions.currencyExchange.exchangeRate

*Mandatory conditional*

The price or exchange rate of foreign currency.									
### transactions.merchant

*Deliver*

Merchant where the transaction was performed.									
### transactions.paymentCard

*Deliver*

### transactions.paymentCard.cardIdentifier

*Mandatory conditional*

Card number (must be masked).									
### transactions.paymentCard.holderName

*Mandatory conditional*

Name of the card holder.

### transactions.paymentCard.startDate

*Mandatory conditional*

When card was valid from (pattern: ^[0-9]+-([0][1-9]
|
1[0-2])$): YYYY-MM.

### transactions.paymentCard.expiryDate

*Mandatory conditional*

When card is expiring  (pattern: ^[0-9]+-([0][1-9]
|
1[0-2])$): YYYY-MM.

### transactions.paymentCard.cardIssuerName

*Mandatory conditional*

Name of the financial institution that issued the card.									
### transactions.paymentCard.type

*Mandatory conditional*

Type of card.									

|[creditCard, debitCard]|

### transactions.paymentCard.cardIssuerIdentifier

*Deliver*

### transactions.paymentCard.cardIssuerIdentifier.countryOfResidence

*Deliver*

CountryCode. The country the card issuer belongs to in ISO 3166-1/Alpha-2 code format.

### transactions.paymentCard.cardIssuerIdentifier.value

*Mandatory conditional*

Organization number of the card issuer.

### transactions.paymentCard.cardIssuerIdentifier.type

*Mandatory conditional*

* countryIdentificationCode: The national registration code for businesses, enterprise, organizations and companies that is retrived from the National register for organizations. In Norway this would be from BRREG.
* nationalIdentityNumber: Used for persons. The national identitycode for persons. In Norway this would be P or D numbers from FREG.								

|[countryIdentificationCode, nationalIdentityNumber]|

### transactions.registered

*Deliver*

Date and time when the transaction was performed by Payer, in ISO Date: YYYY-MM-DDThh:mm:ssZ for UTC eller YYYY-MM-DDThh:mm:ss+hh for other timezones. 

For example +02 for CEST. 2020-05-07T12:00:00Z = 2020-05-07T14:00:00+02

### transactions.amount

*Mandatory conditional*

The actual amount that is shown in the transaction. The amount should be stated in the currency of the account.

### transactions.currency

*Mandatory conditional*

The currency used in the transactions.amount ISO Standard 4217.

### links

*Deliver*

[Link](https://dokumentasjon.dsop.no/dsop_kontroll_spesifikasjon_av_eoppslag.html#store-resultatsett)

### links.rel

*Mandatory conditional*

Paginering as in; next, self, prev, last.

### links.href

*Mandatory conditional*

Paginering, Link to page.


## Use of the data model per DSOP solution
The table below shows what fields to include in the different DSOP Solutions.

| Field	                                                                                                                                                                                                                  | Kontrollinformasjon (Skatteetaten, NAV, Politi | Konkursbehandling (Brreg) |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|---------------------------|
| [**responseStatus (D)**](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#responsestatus)                                                                                              | ✅                                              | ✅                         |
| [**transactions (D)**](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactions)                                                                                                  | ✅                                              | ✅                         |
| [transactions.transactionIdentifier (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionstransactionidentifier)                                                          | ✅                                              | ✅                         |
| [transactions.references (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsreferences)                                                                                 | ✅                                              | ✅                         |
| [transactions.references.value (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsreferencesvalue)                                                                     | ✅                                              | ✅                         |
| [transactions.references.type (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsreferencestype)                                                                       | ✅                                              | ✅                         |
| [transactions.creditDebitIndicator (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscreditdebitindicator)                                                            | ✅                                              | ✅                         |
| [transactions.reversalIndicator (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsreversalindicator)                                                                   | ✅                                              | ✅                         |
| [transactions.status (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsstatus)                                                                                        | ✅                                              | ✅                         |
| [transactions.transactionCode (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionstransactioncode)                                                                      | ✅                                              | ✅                         |
| [transactions.transactionCode.domain (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionstransactioncodedomain)                                                          | ✅                                              | ✅                         |
| [transactions.transactionCode.family (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionstransactioncode.family)                                                         | ✅                                              | ✅                         |
| [transactions.transactionCode.subFamily (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionstransactioncodesubfamily)                                                    | ✅                                              | ✅                         |
| [transactions.transactionCode.freeText (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionstransactioncodefreetext)                                                      | ✅                                              | ✅                         |
| [transactions.bookingDate (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsbookingdate)                                                                              | ✅                                              | ✅                         |
| [transactions.valueDate (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsvaluedate)                                                                                  | ✅                                              | ✅                         |
| [transactions.counterParties (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterparties)                                                                         | ✅                                              | ✅                         |
| [transactions.counterParties.accountIdentifier (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiesaccountidentifier)                                      | ✅                                              | ✅                         |
| [transactions.counterParties.identifier (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiesidentifier)                                                    | ✅                                              | ✅                         |
| [transactions.counterParties.identifier.countryOfResidence (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiesidentifiercountryofresidence)               | ✅                                              | ✅                         |
| [transactions.counterParties.identifier.value (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiesidentifiervalue)                                        | ✅                                              | ✅                         |
| [transactions.counterParties.identifier.type (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiesidentifiertype)                                          | ✅                                              | ✅                         |
| [transactions.counterParties.name (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiesname)                                                                | ✅                                              | ✅                         |
| [transactions.counterParties.type (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiestype)                                                               | ✅                                              | ✅                         |
| [transactions.counterParties.postalAddress (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiespostaladdress)                                              | ✅                                              | ✅                         |
| [transactions.counterParties.postalAddress.postCode (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiespostaladdresspostcode)                             | ✅                                              | ✅                         |
| [transactions.counterParties.postalAddress.type (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiespostaladdresstype)                                    | ✅                                              | ✅                         |
| [transactions.counterParties.postalAddress.streetName (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiespostaladdressstreetname)                         | ✅                                              | ✅                         |
| [transactions.counterParties.postalAddress.buildingNumber (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiespostaladdressbuildingnumber)                 | ✅                                              | ✅                         |
| [transactions.counterParties.postalAddress.townName (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiespostaladdresstownname)                             | ✅                                              | ✅                         |
| [transactions.counterParties.postalAddress.country (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiespostaladdresscountry)                               | ✅                                              | ✅                         |
| [transactions.counterParties.postalAddress.addressLines (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscounterpartiespostaladdressaddresslines)                     | ✅                                              | ✅                         |
| [transactions.additionalInfo (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsadditionalinfo)                                                                         | ✅                                              | ✅                         |
| [transactions.currencyExchange (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscurrencyexchange)                                                                     | ✅                                              | ✅                         |
| [transactions.currencyExchange.originalAmount (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscurrencyexchangeoriginalamount)                                        | ✅                                              | ✅                         |
| [transactions.currencyExchange.sourceCurrency (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscurrencyexchangesourcecurrency)                                       | ✅                                              | ✅                         |
| [transactions.currencyExchange.targetCurrency (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscurrencyexchangetargetcurrency)                                       | ✅                                              | ✅                         |
| [transactions.currencyExchange.unitCurrency (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscurrencyexchangeunitcurrency)                                            | ✅                                              | ✅                         |
| [transactions.currencyExchange.exchangeRate (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscurrencyexchangeexchangerate)                                           | ✅                                              | ✅                         |
| [transactions.merchant (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsmerchant)                                                                                     | ✅                                              | ✅                         |
| [transactions.paymentCard (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcard)                                                                               | ✅                                              | ✅                         |
| [transactions.paymentCard.cardIdentifier (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardcardidentifier)                                                 | ✅                                              | ✅                         |
| [transactions.paymentCard.holderName (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardholdername)                                                         | ✅                                              | ✅                         |
| [transactions.paymentCard.startDate (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardstartdate)                                                           | ✅                                              | ✅                         |
| [transactions.paymentCard.expiryDate (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardexpirydate)                                                         | ✅                                              | ✅                         |
| [transactions.paymentCard.cardIssuerName (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardcardissuername)                                                 | ✅                                              | ✅                         |
| [transactions.paymentCard.type (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardtype)                                                                     | ✅                                              | ✅                         |
| [transactions.paymentCard.cardIssuerIdentifier (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardcardissueridentifier)                                      | ✅                                              | ✅                         |
| [transactions.paymentCard.cardIssuerIdentifier.countryOfResidence (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardcardissueridentifiercountryofresidence) | ✅                                              | ✅                         |
| [transactions.paymentCard.cardIssuerIdentifier.value (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardcardissueridentifiervalue)                          | ✅                                              | ✅                         |
| [transactions.paymentCard.cardIssuerIdentifier.type (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionspaymentcardcardissueridentifiertype)                            | ✅                                              | ✅                         |
| [transactions.registered (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsregistered)                                                                                 | ✅                                              | ✅                         |
| [transactions.amount (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionsamount)                                                                                        | ✅                                              | ✅                         |
| [transactions.currency (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#transactionscurrency)                                                                                    | ✅                                              | ✅                         |
| [**links (D)**](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#links)                                                                                                                | ✅                                              | ✅                         |
| [links.rel (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#linksrel)                                                                                                            | ✅                                              | ✅                         |
| [links.href (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#linkshref)                                                                                                          | ✅                                              | ✅                         |

## Change log

| Date     | Change                                                              | Link in document                                                                                                       |
|----------|---------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| 23.10.20 | Specified that AdditionalReferenceID must be formatted encoded text | [Input parameters](https://dokumentasjon.dsop.no/dsop_kontroll_apitransactions.html#input-parameters) |
|          | V.1.1 is current version                                            |                                                                                                                        |
