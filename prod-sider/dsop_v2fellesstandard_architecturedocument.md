---
title: "Architecture document"
slug: "dsop_v2fellesstandard_architecturedocument"
id: "dsop_v2fellesstandard_architecturedocument"
keywords: ["sample"]
---

*This page describes technical requirements for a digitalised and standardised solution for the public agencies
(Data Consumers) to obtain account information from financial institutions (Data Providers).*

## Scope

The DSOP Control Information solution covers:

1. Request with immediate response via DSOP Control Common Standard
   * Step 1: Request about **customer relations** - The Data Consumer sends a request to DSOP Customer relationships overview service regarding which financial institutions have (or have had) customer relations (as an owner or with another role (disponent in Norwegian) on an account *) with a control object for a specified period.
   * Step 2: Request about **account information** - The Data Consumer sends a request for account information related to a specific customer relationship for the control object in a specified time period to the DSOP Control service. This request will only be sent to financial institutions that have or had an actual customer relationship in the specified period.

2. "Digital Letter" (via the financial institution's message box in Altinn)
   * Requests about additional information.
   * General requests to those financial institutions that have not yet been digitised, and therefore cannot respond as according to Section 1.

**) Support for other roles on an account ("disponent" in Norwegian) was introduced in KAR in 3. quarter of 2019.*

## Solution concept

DSOP Control Information involves a fully automated and a partially automated ("digital letter") process for the
collection of account information from the Data Providers.

The classification is based on the following two hypotheses:
* The financial institutions will connect to the fully automated solution at different rates, and in the meantime a
"minimum solution" ("digital letter") for secure transmission will be needed.
* There will be use cases ("additional information") where DSOP Control Common Standard won't be appropriate, at least in the beginning
(collection of documentation, e.g. signed contracts, which are not available digitally).

## Architecture requirements

DSOP Control Information is intended to streamline the exchange of the most requested data within account information.
The solution does not aim to handle the exchange of all types of data. The "fall-back" solution for the handling of
requests that cannot be handled via the DSOP Control Common Standard should also be implemented (see "digital letter" via Altinn).

The Data Providers shall deliver data from the core applications, databases and archives they currently have. They are
not expected to replace their core applications, databases, archives, etc. to better meet DSOP needs.

### Guides

General guides:
* Standards are used where appropriate.
* National shared components (from the Norwegian Digitalisation Agency and the Brønnøysund Register Centre/Altinn)should be reused where appropriate.

Specific guides:
* The data exchange is based on the standardisation work around ISO 20022 (and has similarities to the Berlin Group's API specifications for PSD2).
    * Where the ISO 20022 formats are not appropriate, field definitions, syntax and semantics from the standards are used.
    * Where there is a need for data elements not specified in ISO 20022, these data elements are defined in the same style (i.e. as we would have defined them if we were to apply to have them included in future versions of ISO 20022).
* The Data Consumers should not need to know in advance of a request where (at which financial institutions) a control object has (had) accounts.
* The Data Consumers should not themselves need to store/maintain which financial institutions have operations in Norway
* Restrictions on the use/exchange of card numbers provided by PCI/DSS.

### Limitations

* Only customers of Norwegian financial institutions are included in the scope of this project.
* The data that can be delivered by the Data Providers - depends on the age of the data available and which data elements are stored for the various entities, in which core system, and thereby their availability:
    * **Performance:** The time it takes to access data may vary depending on how the data can be accessed (online, night runs, manual archive, etc.). Typically, the Data Providers have online access to current data, while access to historical data may take a little longer. That could mean that data cannot be delivered immediately and thus is unsuitable for the DSOP Control Common Standard.
    * **Contents:** (the age of the data available): The Data Providers are required to store accounting data for a long period (5 years + 1 according to Section 13 of Bokføringsloven (the Accounting Act)).

### Principles

* Some data is only relevant in the current situation, others in a historical perspective, and others still in both contexts. The Data Consumers can therefore ask about the current situation and/or historical data - and the Data Providers deliver a snapshot of the current situation or account information for a period.
* The Data Providers deliver the data they have and are expected to respond to requests as soon as the data is available.
* All parties should strive to avoid duplicates. Generally, entities with the same identity are considered duplicates. Duplicates can be ignored.
* The processing of a request can also be terminated by the Data Providers when all requested data have been delivered.
* The Data Consumers are responsible for compiling data, both for deliveries from one Data Provider and from several Data providers.
* The Data Consumers and Data Providers are both responsible for implementing support for legal requirements, e.g. necessary traceability and storage according to the law (responsibility for information within their own systems).
* Design of the DSOP Control Common Standard:
  * Specific and relatively "narrow searches" for data
  * The searches include only a "one-to-many" relationship (e.g., search for all accounts for a customer)

### Solution concept

The DSOP Control Information solution consists of three main parts:
* System solutions at the data consumers (the "consumer side")
* System solutions at the data providers (the "provider side")
* Shared solutions/integration mechanisms

This document focuses on the common denominators in the solution - without going into detail about what needs to be done
in the systems of the Data Consumers and Data Providers.

The solution must cover the following two ways in which to make a request:
1. Indirect call: First call for shared solutions in order to find which financial institution may have relevant account information, and thereafter as in Section 2 below.
2. Direct call: To the data providers' interfaces** (via DSOP Control API) or Altinn (Digital Letter to the financial institution's message box in Altinn).

#### The flow of information in the solution is therefore as follows:

1. Collection of customer relations: Which financial institutions have, or have had, a customer relationship with a control object in a given time period?
   <br \/><br \/>1.1. Call to the DSOP Customer Relations solution (via the Bits Meldingshub to the registers KAR and KFR) to find in which financial institutions the control object have or had a customer relationship within the given time period.
   <br \/><br \/>1.2 DSOP Customer Relations answer the call with a list of financial institutions.
2. Collection of account information (only to the financial institutions identified as having customer relationships in the specified period in step 1)
   <br \/><br \/>2.1. Lookup in the Common API registry (Felles datakatalog*) to retrieve "technical endpoint" (technical address for calls)
   <br \/><br \/>2.2. Depending on the response from step 2.1. above, the request for account information will be sent via either (XOR):
   * 2.2.a. DSOP Control API: To the defined endpoints at the data provider**.
   * 2.2.b. Digital letter: To the financial institution's message box in Altinn (via CorrespondenceWS).

**Note: A central shared component (felles datakatalog, ref. Chapter "Addressing service" below) has an overview of the API
addresses of the data providers that support DSOP Control Common Standard. Digital Letters must be sent to all the other financial
institutions (via Altinn).*

***Note: All data providers should consolidate data from all underlying systems and make these available to data
consumers through an instance per service (API):*
1. Account list
2. Account details and balance
3. Transaction history
4. Roles
5. Payment card.

*The different solutions building on DSOP Control Common Standard will have their own properties regarding
access to the different endpoints in the API, validation of the request according to the given solution and filtering of
data in the response. Those details are described per solution.*

### Parent process of fully automated account information requests

The figure below shows the parent process of fully automated account information requests.

[![alt text](images/fellesstandard_05-1.png)](images/fellesstandard_05-1.png)

The interaction between the parties takes place in the form of "requests" ("online lookup").

- An interaction can start with a request about customer relations to the DSOP Customer Relations solution via Bits Meldingshub (with KAR and KFR registers) to filter out those who have a customer relationship with the control object. The purpose of this step in the process is, among other things, to streamline the solution by sending only requests about account information to those financial institutions that actually hold information about a control object. The DSOP Customer Relations solution takes into account the role of the control object in the financial institutions (account owner or not) in the response to the Data Consumers.
- The Data Consumers may also choose to send requests directly to the data providers of DSOP Control API without a prior customer relations request.

Each financial institution (Data Provider) may receive one or more requests from the Data Consumers. The Data Providers
will respond to the request by performing "services" against their applications.

- The Data Providers return the data that is available for immediate response.
- If the Data Providers do not find data, their response will be that the Data Provider does not have data.
- If a Data Provider cannot provide all data through the DSOP Control API, they must provide status codes that describe the reason(s) for why the data cannot be delivered.

### Parent information model for account information

[![alt text](images/fellesstandard_05-2.png)](images/fellesstandard_05-2.png)

| Name                 | Description                                                                                                                                             |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Account              | A specification of a clearly defined type of economic event                                                                                             |
| AccountRole          | Specifies the different roles associated with an account                                                                                                |
| Balance              | Holding of deposits and loans on the financial account                                                                                                  |
| CounterParty         | The party a transaction goes to or comes from                                                                                                           |
| CurrencyExchange     | Conversion of an amount from one currency to another currency                                                                                           |
| FinancialInstitution | Business or other institution engaged in financing activities (e.g. deposits, loans, etc.).                                                             |
| PaymentCard	         | Common term for various types of "plastic cards" that are used for cash withdrawals and for the payment of goods and services at various user locations |
| PostalAddress        | 	Named geographical location (postal address)                                                                                                           |
| Transaction	         | All activity on the account                                                                                                                             |

## Logical architecture

### Overview of joint solutions - DSOP Control Common Standard

The figure below illustrates the choices made for shared standards, integration mechanisms and shared components:

[![alt text](images/fellesstandard_05-3.png)](images/fellesstandard_05-3.png)

#### Standardised interfaces

The solution reuses ISO 20022 definitions and parts of the Berlin Group's work on standardising APIs for PSD [(Link)](https://www.berlin-group.org/psd2-access-to-bank-accounts)

#### Registers of customer relations

The financial industry has registers of customer relations available behind its Meldingshub. See the description of the
DSOP Customer Relations solution via Bits Meldingshub (with KAR and KFR registers) at the beginning of the document.

#### Addressing service

The addressing service, the Common API registry (Felles datakatalog), at Digdir contains technical endpoints (addresses) for
integration. The data consumers refer to this to find the data providers' endpoint addresses.

The purpose of using a central addressing service is to avoid:
- The Data Consumers having to store and maintain details of technical addressing (technical endpoints for calls) for the Data Providers (100+).
- The Data Providers having to communicate changes (in technical addressing) to all Data Consumers that use their services.

### System solutions at the financial institutions (Data Providers)

The Data Providers of DSOP Control API have established appropriate solutions for automated retrieval of account
information. The Data Providers have different architectures, solutions and processes. This means that the choice of
solution for each Data Provider will vary based on what is most appropriate and cost effective. For the chosen solution
concept, the financial institutions must:

* Implement a machine-to-machine interface (API) for online lookups from Data Consumers to retrieve account information available at the data providers.
* Manually set up their message box in Altinn (CorrespondenceWS) to receive requests about account information in the form of "digital letters", with manual processing of requests about account information or additional information, respectively.

### System solutions for the Data Consumers

The Data Consumers of the DSOP Control Common Standard have created IT system support for:

* Integration towards receiving and ordering information through the DSOP Customer Relations solution via Bits Meldingshub (with KAR and KFR registers), the Common API registry ([Felles datakatalog](https://docs.data.altinn.no/tjenester/bitskontrollinformasjon/)) and the financial institutions' DSOP Control API services.
* Sending and receiving "digital letters" through Altinn.
* Case and filing of the information.
* Access control and deletion of information that will no longer be stored.

### Information flow - DSOP Control Common standard

The figure below illustrates the information flow in connection with a request for account information from the data consumers
to the data providers. The steps in the process are described below.

[![alt text](images/fellesstandard_05-4.png)](images/fellesstandard_05-4.png)

1.1 The data consumer requests an access token from Maskinporten (authorisation server at Digdir) to access the Meldingshub.

1.2 The data consumer obtains information from Customer Relationships about the object's customer relations based on birth number/D number or organisation number. A list containing the names and organisation numbers of the financial institutions is returned to the data consumer.

1.3 The data consumer requests technical endpoint(s) for the financial institution(s) the object has customer relations with, in the Common API registry ([Felles datakatalog](https://docs.data.altinn.no/tjenester/bitskontrollinformasjon/)) at Digdir. As there are rarely changes made to these endpoints, it is recommended to cache the response to ensure that the solution runs efficiently.

1.4 The data consumer requests an access token from Maskinporten (authorisation server at Digdir) to access the financial institution's API (data providers).

1.5 The data consumer requests account information from the data providers' API endpoints (account list, account details, transactions, cards and/or roles) with an access token (see Section 1.4).
* 1.5.a. The Data Providers validate requirements and signatures in the received access token. It is recommended that validation is done locally. A server key for authorisation (verification of Digdir's signature) must be retrieved from Digdir if it is not already stored in the local cache.
* 1.5.b. The Data Providers validate the request from the Data Consumer in accordance with the service. See [Recommendations regarding validation of requests in Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_validation.html) and the specific validation criterias per Service in the respective solution descriptions (løsningbeskrivelser).
* 1.5.c. The Data Provider retrieves the requested data in accordance with the Service from internal systems.
* 1.5.d. The Data Provider filters the information that either is not needed or should not be delivered in accordance with the Service and after that generates an API response.
* 1.5.e. The data provider uses CertPub Locator (at DFØ) to find the right CertPub Publisher where the data consumer has uploaded their certificate.
* 1.5.f. The data provider obtains an encryption key in a data consumer certificate from CertPub Publisher, which optionally can be stored in a local cache (recommended).
* 1.5.g. The data provider then encrypts the response (account information), which is then sent to the data consumer.

### Digital letter

If one or more financial institutions in the list from DSOP Customer Relations solution via the solution DSOP Customer
Relation Overview (DSOP Oversikt over kundeforhold) have not implemented the DSOP Control API (see step 1.5 in the figure above),
the public agency will, after having received information about customer relationships (step 1.1 and 1.2 in the figure above),
send the request for account information as a "Digital letter" via the financial institution's
message box in Altinn (see alternative step 1.3 at the bottom of the figure above). The requests via "Digital letter" must then be processed manually by case processors (possibly
using Robotic Process Automation - RPA). When the response to the public agency's request is ready, this is sent as
unstructured data* in the same channel (Altinn).

**Note: for example, in an Excel format - alternatively PDF.*

## Change log

| Date | Version | Change |
| ---------- | --------- | ------------------------------------------------------------------------------------------------ |
| 20.03.24 | 2.0 | New version of the DSOP Control API generating extensive changes throughout all documentation. |
| 24.04.20 | 1.0 | Translated the current version from Norwegian to English |
