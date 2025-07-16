---
title: "Endpoint Transactions V.2.0"
slug: "dsop_v2fellesstandard_transactions"
id: "dsop_v2fellesstandard_transactions"
keywords:
  - "sample"
---

Transactions for a specified account and period. Data providers should return an empty list if there are no hits. 
Must support pagination on large result sets (min 1000).


<br> 

The principles are defined in [Principles for delivery of information via DSOP Control information common standard.](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard)


## Input parameters

Values set by data consumer.

It is the data providers responsibility to validate all requests from the data consumers and to make sure that all
requests are validated well enough. See some [recommendations regarding validation of requests in Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_validation.html).



| Parameter                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                 | Comment                                                                                                                                                                                                     |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| accountReference (M)           | 	A unique reference to the account, but should not be the account number and not simply decoded to an account number.                                                                                                                                                                                                                                                                                                                       | 	 -                                                                                                                                                                                                         |
| AccountInfoRequestID (M)	      | Consumers case reference id/number	                                                                                                                                                                                                                                                                                                                                                                                                         | [Link to Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html)                                                                   |
| CorrelationID (M)              | 	Unique identifier for the technical request	                                                                                                                                                                                                                                                                                                                                                                                               | [Link to Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html)                                                                   |
| Legal-Mandate* (M)	            | Legal basis the data providers should validate. Formatted encoded text.	                                                                                                                                                                                                                                                                                                                                                                    | See the specific DSOP Service documentation for the valid legal mandates                                                                                                                                    |
| AdditionalReferenceID* (O)	    | Reference ID when Legal-Mandate is not adequate alone, or to identify requester at data consumer. Should be validated according to the Legal-Mandate. Formatted encoded text.	                                                                                                                                                                                                                                                              | Required for some DSOP Services. More information in  [More information in Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html) |
| AdditionalReferenceIDType* (O) | 	What type of reference to expect in AdditionalReferenceID	                                                                                                                                                                                                                                                                                                                                                                                 | Required for some DSOP Services. More information in  [More information in Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html) |
| RequesterID (O)	               | *RequesterID* identifies the user who makes the request at the public agency. The public agencies are free to pseudonymise *RequesterID* so that the financial institutions cannot link this ID to the agency's user or natural person. In turn, the public agency must be able to link *RequesterID* to a user in the public agency. It is important that *RequesterID* <u>remains constant per user and is not reused for new users</u>.	 | Even though this parameter is technically optional, it could become logically mandatory for a given DSOP service.                                                                                           |
| fromDate (M)                   | Date (included) from which the time period for the data delivery starts.	                                                                                                                                                                                                                                                                                                                                                                                                                                | -                                                                                                                                                                                                           | 
| toDate (M)                     | Date (included) from which the time period for the data delivery ends.                                                                                                                                                                                                                                                                                                                                                                                                                                 | -                                                                                                                                                                                                           |

**It is recommended to validate AdditionalReferenceID and AdditionalReferenceIDType according to the legal-mandate. Legal-mandate should always be logged with belonging AdditionalReferenceID.*


## Responses

Values in response from the data providers.

All fields are to be provided as long as the data provider holds the data, regardless of whether the fields 
are marked as mandatory or not. This is according to the legal basis.

| Value                                                                                                       | Level 1                                                                                                                                            | Level 2                                                                                                                                                                | Level 3                                                                                                                                                                                                     | 
|:------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [**responseDetails (D)**](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions#responsedetails) |                                                                                                                                                    |                                                                                                                                                                        |                                                                                                                                                                                                             |
|                                                                                                             | [responseDetails.status (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions#responsedetailsstatus)                               |                                                                                                                                                                        |                                                                                                                                                                                                             |
|                                                                                                             | [responseDetails.message (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions#responsedetailsmessage)                             |                                                                                                                                                                        |                                                                                                                                                                                                             |
| [**transactions (D)**](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactions)  |
|                                                                                                             | [transactions.transactionIdentifier (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionstransactionidentifier) |
|                                                                                                             | [transactions.references (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionsreferences)                        |
|                                                                                                             |                                                                                                                                                    | [transactions.references.value (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionsreferencesvalue)                                |
|                                                                                                             |                                                                                                                                                    | [transactions.references.type (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionsreferencestype)                                  |
|                                                                                                             | [transactions.creditDebitIndicator (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscreditdebitindicator)   |
|                                                                                                             | [transactions.reversalIndicator (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionsreversalindicator)          |
|                                                                                                             | [transactions.status (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionsstatus)                               |
|                                                                                                             | [transactions.transactionCode (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionstransactioncode)             |
|                                                                                                             |                                                                                                                                                    | [transactions.transactionCode.domain (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionstransactioncodedomain)                     |
|                                                                                                             |                                                                                                                                                    | [transactions.transactionCode.family (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionstransactioncode.family)                    |
|                                                                                                             |                                                                                                                                                    | [transactions.transactionCode.subFamily (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionstransactioncodesubfamily)               |
|                                                                                                             |                                                                                                                                                    | [transactions.transactionCode.freeText (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionstransactioncodefreetext)                 |
|                                                                                                             | [transactions.bookingDate (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionsbookingdate)                     |
|                                                                                                             | [transactions.valueDate (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionsvaluedate)                         |
|                                                                                                             | [transactions.counterParties (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscounterparties)                |
|                                                                                                             |                                                                                                                                                    | [transactions.counterParties.accountIdentifier (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscounterpartiesaccountidentifier) |
|                                                                                                             |                                                                                                                                                    | [transactions.counterParties.identifier (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscounterpartiesidentifier)               |
|                                                                                                             |                                                                                                                                                    |                                                                                                                                                                        | [transactions.counterParties.identifier.countryOfResidence (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscounterpartiesidentifiercountryofresidence)               |
|                                                                                                             |                                                                                                                                                    |                                                                                                                                                                        | [transactions.counterParties.identifier.value (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscounterpartiesidentifiervalue)                                        |
|                                                                                                             |                                                                                                                                                    |                                                                                                                                                                        | [transactions.counterParties.identifier.type (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscounterpartiesidentifiertype)                                          |
|                                                                                                             |                                                                                                                                                    | [transactions.counterParties.name (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscounterpartiesname)                           |
|                                                                                                             |                                                                                                                                                    | [transactions.counterParties.type (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscounterpartiestype)                          |
|                                                                                                             |                                                                                                                                                    | [transactions.counterParties.postalAddress (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscounterpartiespostaladdress)         |
|                                                                                                             |                                                                                                                                                    |                                                                                                                                                                        | [transactions.counterParties.postalAddress.postCode (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscounterpartiespostaladdresspostcode)                             |
|                                                                                                             |                                                                                                                                                    |                                                                                                                                                                        | [transactions.counterParties.postalAddress.type (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscounterpartiespostaladdresstype)                                    |
|                                                                                                             |                                                                                                                                                    |                                                                                                                                                                        | [transactions.counterParties.postalAddress.streetName (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscounterpartiespostaladdressstreetname)                         |
|                                                                                                             |                                                                                                                                                    |                                                                                                                                                                        | [transactions.counterParties.postalAddress.buildingNumber (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscounterpartiespostaladdressbuildingnumber)                 |
|                                                                                                             |                                                                                                                                                    |                                                                                                                                                                        | [transactions.counterParties.postalAddress.townName (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscounterpartiespostaladdresstownname)                             |
|                                                                                                             |                                                                                                                                                    |                                                                                                                                                                        | [transactions.counterParties.postalAddress.country (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscounterpartiespostaladdresscountry)                               |
|                                                                                                             |                                                                                                                                                    |                                                                                                                                                                        | [transactions.counterParties.postalAddress.addressLines (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscounterpartiespostaladdressaddresslines)                     |
|                                                                                                             | [transactions.additionalInfo (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionsadditionalinfo)                |
|                                                                                                             | [transactions.currencyExchange (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscurrencyexchange)            |
|                                                                                                             |                                                                                                                                                    | [transactions.currencyExchange.originalAmount (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscurrencyexchangeoriginalamount)   |
|                                                                                                             |                                                                                                                                                    | [transactions.currencyExchange.sourceCurrency (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscurrencyexchangesourcecurrency)  |
|                                                                                                             |                                                                                                                                                    | [transactions.currencyExchange.targetCurrency (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscurrencyexchangetargetcurrency)  |
|                                                                                                             |                                                                                                                                                    | [transactions.currencyExchange.unitCurrency (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscurrencyexchangeunitcurrency)       |
|                                                                                                             |                                                                                                                                                    | [transactions.currencyExchange.exchangeRate (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscurrencyexchangeexchangerate)      |
|                                                                                                             | [transactions.merchant (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionsmerchant)                            |
|                                                                                                             | [transactions.paymentCard (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionspaymentcard)                      |
|                                                                                                             |                                                                                                                                                    | [transactions.paymentCard.cardIdentifier (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionspaymentcardcardidentifier)            |
|                                                                                                             |                                                                                                                                                    | [transactions.paymentCard.holderName (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionspaymentcardholdername)                    |
|                                                                                                             |                                                                                                                                                    | [transactions.paymentCard.startDate (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionspaymentcardstartdate)                      |
|                                                                                                             |                                                                                                                                                    | [transactions.paymentCard.expiryDate (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionspaymentcardexpirydate)                    |
|                                                                                                             |                                                                                                                                                    | [transactions.paymentCard.cardIssuerName (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionspaymentcardcardissuername)            |
|                                                                                                             |                                                                                                                                                    | [transactions.paymentCard.type (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionspaymentcardtype)                                |
|                                                                                                             |                                                                                                                                                    | [transactions.paymentCard.cardStatus (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionspaymentcardcardstatus)                    |
|                                                                                                             |                                                                                                                                                    | [transactions.paymentCard.versionNumber (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionspaymentcardversionnumber)              |
|                                                                                                             |                                                                                                                                                    | [transactions.paymentCard.cardIssuerIdentifier (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionspaymentcardcardissueridentifier) |
|                                                                                                             |                                                                                                                                                    |                                                                                                                                                                        | [transactions.paymentCard.cardIssuerIdentifier.countryOfResidence (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionspaymentcardcardissueridentifiercountryofresidence) |
|                                                                                                             |                                                                                                                                                    |                                                                                                                                                                        | [transactions.paymentCard.cardIssuerIdentifier.value (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionspaymentcardcardissueridentifiervalue)                          |
|                                                                                                             |                                                                                                                                                    |                                                                                                                                                                        | [transactions.paymentCard.cardIssuerIdentifier.type (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionspaymentcardcardissueridentifiertype)                            |
|                                                                                                             | [transactions.registered (D)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionsregistered)                        |
|                                                                                                             | [transactions.amount (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionsamount)                               |
|                                                                                                             | [transactions.currency (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#transactionscurrency)                           |
| [**links (D)**](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#links)                |
|                                                                                                             | [links.rel (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#linksrel)                                                   |
|                                                                                                             | [links.href (MC)](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html#linkshref)                                                 |




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

Indicates whether the transaction added funds to the account (credit) or removed funds from the account (debit). 

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

If it is not possible to map the transaction using ISO transactionCode domain and family, freetext can be used. Freetext 
must be a standard code set used by the bank to categorize the transaction. Code set must be shared with consumers.

Examples: Payment types (codes) like; Nettgiro, Varekjøp, Visa Varekjøp, Avtalegiro, Straksutbetaling, Kontoregulering etc.

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

Personal identification number, D-number or organization number of the counterparty.

### transactions.counterParties.identifier.type

*Mandatory conditional*

* countryIdentificationCode: The national registration code for businesses, enterprises, organizations and companies that is retrieved from the National register for organizations. In Norway this would be from BRREG.
* nationalIdentityNumber: Used for persons. The national identity code for persons. In Norway this would be P or D numbers from FREG.

|[countryIdentificationCode, nationalIdentityNumber]|

### transactions.counterParties.name

*Deliver*

Counterparty's name.

### transactions.counterParties.type

*Mandatory conditional*

Counterparty's role in the transaction.

|[ debtor, creditor, ultimateDebtor, ultimateCreditor ]|

### transactions.counterParties.postalAddress

*Deliver*

Counterparty's address.

### transactions.counterParties.postalAddress.postCode

*Deliver*

Registered postal code for the Counterparty's address.

### transactions.counterParties.postalAddress.type

*Mandatory conditional*

Type of registered address for the Counterparty.

|[residential, business, mailTo, deliveryTo]|

### transactions.counterParties.postalAddress.streetName

*Deliver*

Street address registered on the Counterparty.

### transactions.counterParties.postalAddress.buildingNumber

*Deliver*

Building number for the street address registered on the Counterparty.

### transactions.counterParties.postalAddress.townName

*Deliver*

Postal code location name, referring to the Postal code and street address for the Counterparty.

### transactions.counterParties.postalAddress.country

*Deliver*

Country code for the registered address of the Counterparty. Country code In ISO 3166-1/Alpha-2 code format.

### transactions.counterParties.postalAddress.addressLines

*Deliver*

Additional address information, freetext.

### transactions.additionalInfo

*Deliver*

If there is any other descriptive text that can be added to the delivery, like Description from bank statement. 
Typically, information from the issuer of the transaction. This is not to replace any structured elements in the API, 
e.g.: Shop name, Receiver name, Action type, date.

### transactions.currencyExchange

*Deliver*

If there has been any currency conversion during the transaction, these fields describe the details of the currency exchange.

### transactions.currencyExchange.originalAmount

*Deliver*

Amounts in their original currency before conversion.

### transactions.currencyExchange.sourceCurrency

*Mandatory conditional*

Currency from which an amount is to be converted, ISO Standard 4217.

### transactions.currencyExchange.targetCurrency

*Mandatory conditional*

Currency to which an amount is to be converted, ISO Standard 4217.

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

Card number. Must be masked by following the best practices given by PCI DSS. It is recommended at least to follow this
standard: The <u>first six</u> and <u>last four</u> digits are the maximum number of digits that can be delivered. The rest must be
filled with ‘X‘s  and no spaces.

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


### transactions.paymentCard.cardStatus

*Mandatory conditional*

Status of the card:
- active: The card is active.
- blocked: The card is blocked.

|[active, blocked]|

## transactions.paymentCard.versionNumber

*Mandatory conditional*

If the card number is reused when reissuing a card, then each reissued card gets a separate version number. Version of 
a card [1 to 9].


### transactions.paymentCard.cardIssuerIdentifier

*Deliver*

### transactions.paymentCard.cardIssuerIdentifier.countryOfResidence

*Deliver*

Country code. The country the card issuer belongs to in ISO 3166-1/Alpha-2 code format.

### transactions.paymentCard.cardIssuerIdentifier.value

*Mandatory conditional*

Organization number of the card issuer.

### transactions.paymentCard.cardIssuerIdentifier.type

*Mandatory conditional*

* countryIdentificationCode: The national registration code for businesses, enterprises, organizations and companies that is retrieved from the National register for organizations. In Norway this would be from BRREG.
* nationalIdentityNumber: Used for persons. The national identity code for persons. In Norway this would be P or D numbers from FREG.

|[countryIdentificationCode, nationalIdentityNumber]|

### transactions.registered

*Deliver*

Date and time when the transaction was performed by Payer, in ISO Date: YYYY-MM-DDThh:mm:ssZ for UTC eller YYYY-MM-DDThh:mm:ss+hh for other timezones.

For example, +02 for CEST. 2020-05-07T12 :00 :00Z = 2020-05-07T14 :00 :00+02

### transactions.amount

*Mandatory conditional*

The actual amount that is shown in the transaction. The amount should be stated in the currency of the account.

### transactions.currency

*Mandatory conditional*

The currency used in the transactions.amount, ISO Standard 4217.

### links

*Deliver*

[Link](https://dokumentasjon.dsop.no/dsop_kontroll_spesifikasjon_av_eoppslag.html#store-resultatsett)

### links.rel

*Mandatory conditional*

Paginating as in; next, self, prev, last.

### links.href

*Mandatory conditional*

Paginating, Link to page.




## Change log

| Date     | Version | Change                                                                                         |
|----------|---------|------------------------------------------------------------------------------------------------|
| 13.05.25 | 2.0.1   | Added clearer definition of <i>transactions.creditDebitIndicator</i> |
| 20.03.24 | 2.0     | New version of the DSOP Control API generating extensive changes throughout all documentation. |
| 03.05.23 | 1.2     | Added data model for V.1.2, includes responseDetails                                           |

