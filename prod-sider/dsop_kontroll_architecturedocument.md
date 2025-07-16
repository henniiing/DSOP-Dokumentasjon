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
	
	
	