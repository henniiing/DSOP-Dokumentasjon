---
title: "Dsop V2fellesstandard Functionalspecification
id: dsop_v2fellesstandard_functionalspecification"
slug: "dsop_v2fellesstandard_functionalspecification"
keywords: ["sample"]
sidebar: "main_sidebar
permalink: dsop_v2fellesstandard_functionalspecification.html"
folder: "section1"
---

This page describes the deliveries at the functional level from the different services based on DSOP Control Common
Standard. This document does not consider the ways in which this is solved in the various technical calls, this is
described in the architecture document, the data model and the API documentation. The current process is manual and
time-consuming both for the data consumers and the data providers. The digitised and standardised solution
used by the data consumers for obtaining account information from the data providers leads to both a
simpler and more efficient process, as well as higher quality of data. Furthermore, the digital solution DSOP Control
Information provides increased security and traceability in regard to the processing of account information, and allows
for increased automation of processes.

## Request about customer relations

The data consumers ask about which financial institutions the control object, a person (birth number/D number) or a business (org.no.), has,
or has had, customer relations with for all, or part of, a specified period.

The request must specify:
- a period (from date and to date). The specified period can be short (months) or long (years), and can be recent (e.g. current year, a couple of years ago) or a long time ago (up to 10 years ago, in some cases).
- if the data consumer only wishes to get customer relation where the control object has or had a relationship as account owner or another role. Some Public Agencies may only be allowed to request information about relationships where the person or business is or was account owner at the financial institution in the given time period.

The response will state which financial institutions have customer relations with the requested control object (i.e.
the owner of the account or another role on the account) for all or part of the period and the type of relation the customer
have in each financial institution (owner or other role, "disponent" in Norwegian).

### Shielding

Individuals who are exposed to violence, or threats of violence, are entitled to protection. In the most severe cases
they may require the protective measures: strictly confidential address "strengtFortrolig" or
confidential address "fortrolig".

The project has agreed about the following *temporary* rules for providing information on shielded persons with
"strengtFortrolig" and "fortrolig":

1. The data consumer checks the population register (folkeregister) whether the person is shielded or not.

2. The data consumer asks the Customer Relationship Register API (KAR / KFR) to identify in what banks the control object has a customer relationship.

3. The data consumer sends a digital letter to the bank(s).

4. If the data consumer still sends a request to the financial institutions, the Control API (Accounts) will respond with an empty list and [responseDetails.status](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#responsedetailsstatus) = *Complete*.

- Link to the [Protection mandate](https:/lovdata.no/dokument/INS/forskrift/1972-03-17-3352).

## Request about transactions and balance

This request will only be sent to the data providers that have/had an actual customer relationship for all, or part
of, the specified period. The data consumer will request a list of accounts for the customer. The response may also
include the start and end dates for each account where this is available from the banks. In the next step they can
request more account information for each account (ex. information about transactions, balances, cards, roles -
dependent on what the data consumer has access to). The data consumer may request a list of accounts where the control
object both is or was an account owner or had another role (disponent). Some data consumers may only be allowed to
request an account list where the control object is or was the account owner at the financial institution in a period
of time.

It is optional for the data consumers to specify a period (from date and to date) for the request. The specified
period can be short (months) or long (years), and can be recent (e.g. current year, a couple of years ago) or a long
time ago (up to 10 years ago, in some cases). If no period has been specified, the current date will be used.

* When a request is made about a control object for transactions and balance (ex.), the response shall include a transaction history for the requested period and account owned by the control object, and the balance for the last date in the requested period.

Balance (credit limit is not included in the balance):

* For the specified period, the recorded balance on toDate (in the period) shall be given.
* For requests for the current date, the available balance at the time of the request shall be given in addition to the recorded balance.

See example of available balance below:

* NOK 5000 in capital balance
* NOK 2000 in blocked amount
* NOK 1000 in credit limit

= Available balance: NOK 3000
<br  />
**Note: As described in "Request about customer relations", the data consumer must first ask for the account list for a
specified control object, and thereafter the data consumer may send a request for
transactions and balance.*

## Request about additional information

Data consumers will in some cases need to be able to obtain additional (not predefined) account information, for
example additional information about card use, supporting documents for a transaction, bank remittances, loan documents,
withdrawal information from ATMs with photo, time, etc.

The collection of additional information will be based on "Digital letter" via the financial institutions' message boxes
in Altinn. The request and response will both largely contain unstructured information, but with some fixed parameters.
The data consumers have chosen different implementations of "digital letter".

## General information about volume and response times

Response times will vary, but the typical pattern is that requests for up-to-date data that can be delivered "online"
will have fast response times (seconds), while large historical queries may take longer. Volume and response times will
be specified in more detail in the technical course/collaboration. For volumes from Skatteetaten, NAV and the police,
see the specific service specifications.

## Change log

| Date | Version | Change |
| ---------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.03.24 | 2.0 | New version of the DSOP Control API generating extensive changes throughout all documentation. |
| 12.04.23 | 1.0.3 | Moved a section into specific page for the agencies |
| 16.11.20 | 1.0.3 | After new decision in the project, specified a temporary solution for what banks should return in Control APIs when public agencies requests data on a shielded individual |
| 13.10.20 | 1.0.2 | Specified what banks should return in Control APIs when public agencies requests data on a shielded individual |
| 28.09.20 | 1.0.1 | Specified temporary what banks should return in Accounts API when public agencies requests data on a shielded individual |
| 24.04.20 | 1.0 | Translated the current version from norwegian to english |

