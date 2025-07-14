---
title: "Dsop V2fellesstandard Om
id: dsop_v2fellesstandard_om"
slug: "dsop_v2fellesstandard_om"
keywords: ["sample"]
sidebar: "main_sidebar
permalink: dsop_v2fellesstandard_om.html"
folder: "section1"
---

<br \/>

The DSOP Control Information Common Standard is the foundation that enables the development of DSOP solutions where the
financial institutions digitally deliver account information to the public agencies via a machine-to-machine integration.
The common standard consists of two APIs:

- The Customer Relations Overview API consisting of two endpoints which provide information about customer relations regarding a person or organisation (control object).
- The DSOP Control API consisting of five endpoints which provide account information regarding a control object.

The common standard makes it easy for financial institutions to implement new services based on the common standard in
the future.

Throughout the documentation the public agencies will be called 'data consumer' and the financial institutions 'data
providers'. See the [Glossary](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_glossary.html) for more information
about terms used in this documentation and their definition.

The documentation is divided into two separate parts:
- The documentation of the Common Standard containing necessary technical documents which are common to all the various DSOP solutions using the Common Standard. This documentation is in English.
- The documentation related to the various DSOP solutions which is specific to a solution. The documentation of the DSOP Solutions may be in Norwegian or in English.

[![alt text](images/fellesstandard_01-1.png)](images/fellesstandard_01-1.png)

There are several benefits using the common standard both for the data providers and for the data consumers:

- The data provided by the data providers is standardised and structured across the industry.
- The overall data quality provided by the data providers is better than in the analogue world.
- The data consumers can streamline their data capture and build better solutions on top of the integration.
- The data consumers will potentially be able to send more requests and get qualitatively better account information faster than doing it analog.
- The data providers can implement DSOP solutions delivering account information to various agencies faster, as the common standard lays the foundation for several solutions.
- The [operational processes](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_operational_processes.html) defined for the DSOP Control Common Standard can be reused across all services that use the DSOP Control solution.

## Data flow in DSOP Common Standard Solutions

The requests from the data consumers will be similar for all the data providers using the Common Standard, but the
purpose from each data consumer (with reference to the legal basis), the validation of the requests and the filtered
delivery of the account information delivered to the data consumers, will be different.

[![alt text](images/fellesstandard_01-2.png)](images/fellesstandard_01-2.png)

&amp;amp;#8291;1. The request from the data consumers with information about the "control object" (organization number/personal identification number/d-number) first goes to the solution *DSOP Customer Relations Overview* (DSOP Oversikt over kundeforhold) that lists which financial institutions have - or have had - a relationship with the object in a given time period. The other function is to return information of a financial institution servicing a given account number. This solution is serviced by Bits for the Financial Industry.

[![alt text](images/fellesstandard_01-3.png)](images/fellesstandard_01-3.png)

### Overview of current endpoints

| Endpoint | Description | Link to data model |
| ----------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| a) customerRelationships | Returns the financial institutions where the given customer has relations in a given time period. | [Description of customerRelationships](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_customerrelationships.html) |
| b) accountServicingProvider | Returns the financial institution that is servicing the account provided in the request. | [Description of accountServicingProvider](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountservicingprovider.html) |

&amp;amp;#8291;2. Based on the list of financial institutions provided in step 1) the data consumer sends an account-list request to each of these data providers (the financial institutions). The data consumer then asks for more account information for each of these accounts, such as+ account details, balance, transaction history, roles and payment cards associated with the account in a given time period. The DSOP Control API is serviced by each bank.

[![alt text](images/fellesstandard_01-4.png)](images/fellesstandard_01-4.png)

## Content of DSOP Control (serviced by financial institutions, the data providers)

The DSOP Control API delivers a unique set of information via five endpoints. How many of these endpoints each individual
service consists of may vary depending on the need and legal basis of the data consumer entitled to receive the information.
For all DSOP services using the DSOP Control API, the data consumer will have to start the requests with the endpoint
Accounts (Account List) first. For more information about what kind of data is included in the different endpoints we
refer to the [data model page](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html). Note that each
service might filter out some of the information provided in the endpoint. For a complete overview of what data is
shared in each individual solution we invite you to look at the services' respective data model page.

## Overview of current endpoints

### First request to Account List

The first request to be done by the Data Consumers is to the endpoint *Accounts*.

| Endpoint | Description | Link to data model |
| ------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| a) Accounts | List of the accounts associated to a control object and owners of all the returned accounts | [Description of Accounts](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts.html) |

### Overview of available endpoints after Account List

After a successful response from *Accounts*, the Data Consumers can make requests to the following endpoints (according to the specific service):

| Endpoint | Description | Link to data model |
| -------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| b) Account details | Balance, credit line, type, owner of an account | [Description of Account details](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails.html) |
| c) Transactions | Transactions on an account | [Description of Transactions](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html) |
| d) Cards | Overview of the different cards associated with an account. | [Description of Cards](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_cards.html) |
| e) Roles | Overview of the different roles associated with an account. | [Description of Roles](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_roles.html) |

## Change Log

| Date | Version | Change |
| ---------- | --------- | ------------------------------------------------------------------------------------------------ |
| 20.03.24 | 2.0 | New version of the DSOP Control API generating extensive changes throughout all documentation. |
| 12.04.23 | 1.0 | Translated to English |

