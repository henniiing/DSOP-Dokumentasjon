---
title: "Dsop Kontroll Functionalspecification"
id: "dsop_kontroll_functionalspecification"
slug: "dsop_kontroll_functionalspecification"
---

﻿---
title: Functional specification DSOP Control Common Standard
keywords: sample
sidebar: main_sidebar
permalink: dsop_kontroll_functionalspecification.html
folder: section1
---

This page describes the deliveries at the functional level from the solutions based on DSOP Control Common Standard. 
This document does not consider the ways in which this is solved in the various technical calls, but it is described in 
the architecture document and the API documentation. The current process is manual and time-consuming both for the government 
agencies and the financial institutions. The digitised and standardised solution used by the government agencies for obtaining 
account information from the financial institutions leads to both a simpler and more efficient process, as well as higher 
quality of data. Furthermore, the digital solution provides increased security and traceability in regard to the processing 
of account information, and allows for increased automation of processes.


## Request about customer relations

Official agencies ask about which financial institutions a person (birth number/D number) or a business (org.no.) has, or has had, customer relations with for all, or part of, a specified period.
<br >
The request must specify a period (from date and to date). The specified period can be short (months) or long (years), and can be recent (e.g. current year, a couple of years ago) or a long time ago (up to 10 years ago, in some cases).
<br >
The response will state which financial institutions have customer relations with the requested party (i.e. the party is the owner of the account or has power of attorney) for all or part of the period.

### Shielding

Individuals who are exposed to violence, or threats of violence, are entitled to protection. In the most severe cases, they may require the protective measures: strictly confidential address CODE 6 or confidential address CODE 7. 

The project has agreed about the following *temporary* rules for providing information on shielded persons with code 6 and 7:

1. The Public Agency checks the population register (folkeregister) whether the person is shielded or not.

2. The Public Agency asks the Customer Relationship Register API (KAR / KFR) to identify in what banks the person or organisation has a customer relationship.

3. The Public Agency sends a digital letter to the bank(s).

4. If the Public Agency still sends a request to the financial institutions, the Control API (Accounts) will respond with an empty list and [responseStatus](https:/dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist#responsestatus) = *Complete*.


* [Protection mandate](https:/lovdata.no/dokument/INS/forskrift/1972-03-17-3352)


## Request about transactions and balance

This request will only be sent to financial institutions that have/had an actual client relationship for all, or part of, 
the specified period. The government agency will request a list of accounts for the customer. The response may also include 
the start and end dates for each account where this is available from the banks. In the next step they can request more 
account information for each account (ex. information about transactions, balances, cards, roles – dependent on what the 
public agency has access to).

It is optional for the government agencies to specify a period (from date and to date) for the request. The specified period can be short (months) or long (years), and can be recent (e.g. current year, a couple of years ago) or a long time ago (up to 10 years ago, in some cases). If no period has been specified, the current date will be used.
* When a request is made about a party for transactions and balance (ex.), the response shall include a transaction history for the requested period and account owned by the party, and the balance for the last date in the requested period.
* When a request is made about an account number*, the response shall include a transaction history and balance for the period for the specified account.
* When a request is made about a card number*, the response shall include a transaction history and balance for the period for the specified card.The functionality of requesting based on a card number is currently a change request and is not a part of this version. It will be considered to deliver this functionality in later versions.

Balance (credit limit is not included in the balance):
* For the specified period, the recorded balance on toDate (in the period) shall be given.
* For requests for the current date, the available balance at the time of the request shall be given in addition to the recorded balance.

See example of available balance below:
* NOK 5000 in capital balance
* NOK 2000 in blocked amount
* NOK 1000 in credit limit

= Available balance: NOK 3000
<br >
**Note: As described in "Request about customer relations", the agency must first ask for the account list for a specified person (birth number/D number) or business (org.no.), and thereafter the agency may send a request for transactions and balance.* 

## Request about additional information

Government agencies will in some cases need to be able to obtain additional (not predefined) account information, for example additional information about card use, supporting documents for a transaction, bank remittances, loan documents, withdrawal information from ATMs with photo, time, etc.

The collection of additional information will be based on "Digital letter" via the financial institutions' message boxes in Altinn. The request and response will both largely contain unstructured information, but with some fixed parameters. The agencies have chosen different implementations of "digital letter". Please see information sent from each agency.

## General information about volume and response times

Response times will vary, but the typical pattern is that requests for up-to-date data that can be delivered “online” will have fast response times (seconds), while large historical queries may take longer. Volume and response times will be specified in more detail in the technical course/collaboration. For volumes from Skatteetaten, NAV and the police, see [Control information functional specification](/dsop_kontrollinformasjon_functionalspecification). 



## Change log

| Date     | Version | Change                                                                                                                                                                     | Link in document                                                                                                                                         |
|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| 12.04.23 | 1.0.3   | Moved a section into specific page for the agencies                                                                                                                        | [Volumes](https:/dokumentasjon.dsop.no/dsop_kontroll_functionalspecification.html#general-information-about-volume-and-response-times) |
| 16.11.20 | 1.0.3   | After new decision in the project, specified a temporary solution for what banks should return in Control APIs when public agencies requests data on a shielded individual | [Shielding](https:/dokumentasjon.dsop.no/dsop_kontroll_functionalspecification.html#shielding)                                         |
| 13.10.20 | 1.0.2   | Specified what banks should return in Control APIs when public agencies requests data on a shielded individual                                                             | [Shielding](https:/dokumentasjon.dsop.no/dsop_kontroll_functionalspecification.html#shielding)                                         |
| 28.09.20 | 1.0.1   | Specified temporary what banks should return in Accounts API when public agencies requests data on a shielded individual                                                   | [Shielding](https:/dokumentasjon.dsop.no/dsop_kontroll_functionalspecification.html#shielding)                                         |
| 24.04.20 | 1.0     | Translated the current version from norwegian to english                                                                                                                   | [Functional specification](/dsop_kontroll_functionalspecification)                                    |



