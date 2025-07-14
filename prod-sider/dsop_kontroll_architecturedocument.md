---
title: "Architecture document"
slug: "dsop_kontroll_architecturedocument"
id: "dsop_kontroll_architecturedocument"
keywords: ["sample"]
---

*This page describes technical requirements for a digitised and standardised solution for obtaining account information from financial institutions in connection with the control activities of government agencies.*

## Scope

The solution has been designed for use in exchanges between government agencies and financial institutions, but may also be relevant for other players if they have authority or consent from the data owner to collect the information.

The solution covers:
1. Request with immediate response (eOppslag)
	* Request about **customer relations** - An agency sends a request to the Meldingshub about which banks have (or have had) customer relations (owner/power of attorney*) with an organisation number or birth number/D number for a specified period.
	* Request about **account information** - The agency sends a request for (detailed) information related to a specific customer relationship (organisation number, birth number/D number or account number). This request will usually only be sent to banks (financial institutions) that have/had an actual client relationship in the specified period.
2. "Digital letter" (via the bank's message box in Altinn)
	* Requests about additional information.
	* General requests to those banks that have not yet been digitised, and therefore cannot respond as according to Section 1 (eOppslag).

**) Support for power of attorney was introduced in KAR in 3. quarter of 2019.*

## Solution concept

The solution involves a fully automated and a partially automated ("digital letter") process for the collection of account information from the banks.

The classification is based on the following two hypotheses:
* The banks will connect to the fully automated solution at different rates, and in the meantime a "minimum solution" for secure transmission will be needed.
* There will be use cases ("additional information") where full automation won't be appropriate, at least in the beginning (collection of documentation, e.g. signed contracts, which are not available digitally).

## Architecture requirements

The solution is intended to streamline the exchange of the most requested data. The solution does not aim to handle the exchange of all types of data. A "fall-back" solution for the handling of requests that cannot be handled fully automatically should also be implemented (see "digital letter" via Altinn).

The financial institutions shall deliver data from the core applications, databases and archives they currently have. The financial institutions are not expected to replace their core applications, databases, archives, etc. to better meet DSOP needs.

DSOP Control Information should enable the exchange of data between more than 120 financial institutions and, in the first instance, 4 agencies (NAV, the police, Skatteetaten (the Tax Administration) and the Brønnøysund Register Centre - the latter passes on account information to trustees in the event of a bankruptcy). The solution takes into account differences between the financial institutions' internal technical solutions, such as core applications, data warehouses, infrastructure and implementation capability, including internal plans, resources, etc.:
* Different versions of software and times of new releases
* Different start times for deliveries according to DSOP
* Different non-functional characteristics, such as capacity, response time, uptime, etc.
* Possibility for different interpretation of specifications
* Different access to data, e.g. different indexing in the databases

### Guides

General guides:
* Standards are used where appropriate
* National shared components (from Digdir and
the Brønnøysund Register Centre/Altinn) should be reused where appropriate

Specific guides:
* The data exchange is based on the standardisation work around ISO 20022 (and has similarities to the Berlin Group's API specifications for PSD2).
	* Where the ISO 20022 formats are not appropriate, field definitions, syntax and semantics from the standards are used.
	* Where there is a need for data elements not specified in ISO 20022, these data elements are defined in the same style (i.e. as we would have defined them if we were to apply to have them included in future versions of ISO 20022).
* The agencies should not need to know where (at which banks) a person/business has (had) accounts.
* The agencies should not themselves need to store/maintain which banks have operations in Norway and how these can be approached with requests for account information.
* Restrictions on the use/exchange of card numbers provided by PCI/DSS.

### Refinements

* Only customers of Norwegian financial institutions are included in the scope of this project.
* The data that can be given by the financial institutions - depends on the age of the data available and which data elements are stored for the various entities, in which core system, and thereby their availability:
	* **Performance**: The time it takes to access data may vary depending on how the data can be accessed (online, night runs, manual archive, etc.). Typically, the financial institutions have online access to current data, while access to historical data may take a little longer. That could mean that data cannot be delivered immediately and thus is unsuitable for eOppslag.
	* **Contents**: (the age of the data available): The financial institutions are required to store accounting data for a long period (5 years + 1 according to Section 13 of bokføringsloven (the Accounting Act).

### Principles

* Some data are only relevant in the current situation, others in a historical perspective, and others still in both contexts. Government agencies can therefore ask about the current situation and/or historical data - and the financial institutions provide a snapshot of the current situation or account information for a period.
* The financial institutions provide the data they have, and are expected to respond to requests as soon as the data is available.
* All parties should strive to avoid duplicates. Generally, entities with the same identity are considered duplicates. Duplicates can be ignored.
* The processing of a request can also be terminated by the financial institutions when all requested data have been delivered.
* The government agencies are responsible for compiling data, both for deliveries from one financial institution and from several financial institutions.
* The government agencies and financial institutions are both responsible for implementing support for legal requirements, e.g. necessary traceability and storage according to the law (responsibility for information within their own systems).
* Design of eOppslag:
	* Specific and relatively "narrow searches" for data
	* The searches include only a "one-to-many" relationship (e.g., search for all accounts for a customer)

### Solution concept

The solution consists of three main parts:
* System solutions at the government agencies (the "consumer side")
* System solutions at the financial institutions (the "provider side")
* Shared solutions/integration mechanisms

This document focuses on the common denominators in the solution - without going into detail about what needs to be done in the systems of the government agencies and financial institutions.

The solution must cover the following two ways in which to request:
1. Indirect call: First call for shared solutions in order to find which financial institution may have relevant account information, and thereafter as in Section 2 below.
2. Direct call: To the financial institutions' interfaces** (eOppslag to API) or Altinn (Digital Letter to the financial institution's message box in Altinn).

#### The flow of information in the solution is therefore as follows:

1. Collection of account relations: Which financial institutions have, or have had, a client relationship with a party
 (birth number/D number/organisation number) in a specified period?
	<br \/><br \/>1.1. Call to the registers of customer relations (via the Meldingshub).
2. Collection of account information (only to the banks identified as having customer relationships in the specified period in step 1)
	<br \/><br \/>2.1. Lookup in API Katalogen* to retrieve "technical endpoint" (technical address for calls)
	<br \/><br \/>2.2. Depending on the response from step 2.1. above, the request for account information will be sent via either (XOR):
	* 2.2.a. eOppslag: To defined APIs at the financial institution**.
	* 2.2.b. Digital letter: To the financial institution's message box in Altinn (via CorrespondenceWS).

**Note: A central shared component (API Katalogen, ref. Chapter "Addressing service" below) has an overview of the API addresses of the financial institutions that support eOppslag. Digital Letters must be sent to all the other financial institutions (via Altinn).*

***Note: All financial institutions should consolidate data from all underlying systems and make these available to data consumers through an instance per service (API):*
1. *Account list*
2. *Account details and balance*
3. *Transaction history*
4. *Roles*
5. *Payment card.*

### Parent process of fully automated account information requests

The figure below shows the parent process of fully automated account information requests.

\{/* Missing image comment removed */\}(images/architecture_picture1.png)

The interaction between the parties takes place in the form of "requests" ("online lookup").

* A request can start with a request about customer relations to Meldingshub (with KAR and KFR behind) to filter out those who have a customer relationship with the person or organisation investigated. The purpose of this step in the process is, among other things, to streamline the solution by sending only requests about account information to those banks that actually hold information about a person (birth number/D number) or an organisation (organisation number).
* The government agencies can also choose to send requests directly to the financial institutions without a prior customer relations request.

Each financial institution may receive one or more requests from government agencies. The financial institutions will respond to the request by performing "services" against their applications.

* The financial institutions return the data that are available for immediate response.
* If the financial institutions do not find data, their response will be that the financial institution does not have data.
* If a financial institution cannot provide all data through an eOppslag, they must provide status codes that describe the reason(s) for why the data cannot be delivered.

**) The process for handling data that cannot be delivered in eOppslag was not included in the scope for phase 1 of the project and it therefore remains to be specified. *

### Parent information model for account information

\{/* Missing image comment removed */\}(images/architecture_picture2.png)

| Name                 | Description                                                                                                                                             |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Account              | A specification of a clearly defined type of economic event                                                                                             |
| AccountRole          | Specifies the account's owner or power of attorney                                                                                                      |
| Balance              | Holding of deposits and loans on the financial account                                                                                                  |
| CounterParty         | The party a transaction goes to or comes from                                                                                                           |
| CurrencyExchange     | Conversion of an amount from one currency to another currency                                                                                           |
| FinancialInstitution | Business or other institution engaged in financing activities (e.g. deposits, loans, etc.).                                                             |
| PaymentCard	         | Common term for various types of "plastic cards" that are used for cash withdrawals and for the payment of goods and services at various user locations |
| PostalAddress        | 	Named geographical location (postal address)                                                                                                           |
| Transaction	         | All activity on the account                                                                                                                             |

## Logical architecture

### Overview of joint solutions - eOppslag

The figure below illustrates the choices made for shared standards, integration mechanisms and shared components:

\{/* Missing image comment removed */\}(images/architecture_picture3.png)

#### Standardised interfaces

The solution reuses ISO 20022 definitions and parts of the Berlin Group's work on standardising APIs for PSD [(Link)](https://www.berlin-group.org/psd2-access-to-bank-accounts)

#### Registers of customer relations

The financial industry has registers of customer relations available behind its Meldingshub. See the description of Meldingshub, KAR and KFR at the beginning of the document.

#### Addressing service

The addressing service, API Katalogen, at the Brønnøysund Registers contains technical endpoints (addresses) for integration (the agencies refer to this to find the banks' endpoint addresses).

The purpose of using a central addressing service is to avoid:
* The government agencies having to store and maintain details of technical addressing (technical endpoints for calls) for the financial institutions (100+).
* The financial institutions having to communicate changes (in technical addressing) to all government agencies that use their services.

### System solutions at the financial institutions

The financial institutions in the solution have established appropriate solutions for automated retrieval of account information. The financial institutions have different architectures, solutions and processes. This means that the choice of solution for each financial institution will vary based on what is most appropriate and cost effective. For the chosen solution concept, the financial institutions must:
* Implement a machine-to-machine interface (API) for online lookups from government agencies to retrieve account information with as long a history as is available to the banks.
* Manually set up their message box in Altinn (CorrespondenceWS) to receive requests about account information in the form of "digital letters", with manual processing of requests about account information or additional information, respectively.

### System solutions at the government agencies

The consumers (agencies) in the solution have created IT system support for:
* Integration towards receiving and ordering information through Meldingshub (with KAR and KFR behind), API Katalogen and the financial institutions' API services.
* Sending and receiving "digital letters" through Altinn.
* Case and filing of the information.
* Access control and deletion of information that will no longer be stored.

### Information flow - eOppslag

The figure below illustrates the information flow in connection with a request for account information from the agencies to the bank. The steps in the process are described below.

1.1 The public sector requests an access token from Maskinporten (authorisation server at Digdir) to access the Meldingshub.

1.2 The government agency obtains information from Meldingshub about the object's customer relations based on birth number/D number or organisation number. A list containing the names and organisation numbers of the financial institutions is returned to the government agency.

1.3 The government agency requests technical endpoint(s) for the financial institution(s) the object has customer relations with, in the API Katalogen at the Brønnøysund Register Centre.

1.4 The public sector requests an access token from Maskinporten (authorisation server at Digdir) to access the financial institution's API.

1.5 The public sector requests account information from the financial institutions' API endpoints (account list, account details, transactions, cards and/or roles) with an access token (see Section 1.4).
* 1.5.a. The financial institutions validate requirements and signatures in the received access token. It is recommended that validation is done locally. A server key for authorisation (verification of Digdir's signature) must be retrieved from Digdir if it is not already stored in the local cache.
* 1.5.b. The financial institution retrieves the requested data from internal systems and generates an API response.
* 1.5.c. The financial institution uses BCL (Business Certificate Locator - at Digdir) to find the right BCP provider where the government agency has uploaded their certificate.
* 1.5.d. The financial institution obtains an encryption key in a government certificate from BCP (Business Certificate Publisher), which optionally can be stored in a local cache (recommended).
* 1.5.e. The financial institution then encrypts the response (account information), which is then sent to the government agency.

\{/* Missing image comment removed */\}(images/architecture_picture4.png)

### Digital letter

If one or more financial institutions in the list from KAR/KFR have not implemented eOppslag (see step 1.2 in the figure above), the government agency will send the request for account information as a "Digital letter" via the financial institution's message box in Altinn. The requests via "Digital letter" must then be processed manually by case processors (possibly using Robotic Process Automation - RPA). When the response to the government agency's request is ready, this is sent as unstructured data* in the same channel (Altinn).

**Note: for example, in an Excel format - alternatively PDF.*

## Change log

| Date | Version | Change | Link in document                                                                                                |
| ---------- | --------- | ---------------------------------------------------------- |-----------------------------------------------------------------------------------------------------------------|
| 24.04.20 | 1.0 | Translated the current version from Norwegian to English | [Architecture document](https://dokumentasjon.dsop.no/dsop_kontroll_architecturedocument.html) |
