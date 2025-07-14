---
title: "Dsop Kontroll Specification Of Eoppslag
id: dsop_kontroll_specification_of_eoppslag"
slug: "dsop_kontroll_specification_of_eoppslag"
keywords: ["sample"]
sidebar: "main_sidebar
permalink: dsop_kontroll_specification_of_eoppslag.html"
folder: "section1"
---

## High-level description

This document describes the services that the financial institutions should implement to provide the public agencies with account information. The services should be realised based on the REST architectural style and HTTP as a transport mechanism.

For a more detailed description of the eOppslag services, see "DSOP Kontrollinformasjon Arkitekturdokument". Descriptions of other services are given in separate documents.

The services are defined so that they together or separately can support different use scenarios, such as:
* Looking up account information with balance per person, both as account owner and third-party mandate.
* Retrieving transaction history for a specific period.

The functional specification describes this in more detail.

| Name           | Account                                                                                                                                                                                                                                 |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Functionality | This API shall support 5 different operations: <br \/><br \/> - List of accounts for party <br \/> - Retrieve account details with balances <br \/> - Transaction history for account <br \/> - Cards linked to account <br \/> - Role holder on account |  | | **Characteristics**                                                                                                                                                                                                                     |
| Interface type | 	REST API                                                                                                                                                                                                                               |
| Protocol       | 	HTTP                                                                                                                                                                                                                                   |
| Transport	     | HTTPS                                                                                                                                                                                                                                   |
| State          | 	Stateless                                                                                                                                                                                                                              |
| Formats        | 	JSON (default)                                                                                                                                                                                                                         |

Note: The API endpoints with examples are now in the Open API specification file.

## General characteristics

### API methods

The services should support lookup of information and, for that reason, only the HTTP method GET can be supported. The error message must be given if the request contains other HTTP operations, see "Error handling" below.

HTTP status code 200 should be given on successful calls.

### Search by period

For information that changes over time, the general guideline is that the value at the end-time is given in the response. For searches where no period is specified, it means that the value at the time of the request should be given (e.g. balance).

Some values, such as address, account owner's name, etc. may have changed over time without the bank having a log of the information. In those cases, the current value should be given in the response or, alternatively, the value at the end date if the customer no longer has an active customer relationship.

### Data formats

All successful calls (200) should be given in JSON format and then encrypted according to JWE. Compact Serialization should be used (see other safety specification). Error messages should not be encrypted. Content type must be set for all responses, respectively, application/jose and application/json for successful and failed calls. In Test, it should be possible to get results unencrypted, by the client setting the Accept header (application/json). This function should not be available in production. Missing/empty values should be represented as is usual for the format, i.e. enter "null" for JSON.

### Error handling

All errors that occur in relation to the service call, will follow [the standard for HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes),
but an error response should also be given. The error response should include an error code for machine handling, as
well as a readable description of the error that has occurred. [See list of HTTP status codes.](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

As a general rule, the 400 series is reserved for client errors that must be corrected before retrying, while the 500
series should be used for various technical errors at the service provider (e.g. database downtime, etc.). To handle
technical errors that occur at the provider, the client may choose to have automatic *retry* mechanisms.

See more details about specific error situations that the Data Consumers may encounter and what HTTP status codes and
ACC-xxx message code are expected to be returned: [Specific error situations with http error codes and associated message codes (ACC-xxx).](assets\DSOP Control-Specific error situations with http error codes and associated message codes V.1.2.pdf)

#### Error code overview

See the Open API specification for an overview of error codes for the different endpoints.

### Logging
It is recommended to log the input-parameters below in order to retrieve former cases, or to handle error situations. Some of the input-parameters are also needed for "Error handling" and "Case information from and to
public agencies" in the [operational processes](https://dokumentasjon.dsop.no/dsop_kontroll_operational_processes.html).

#### CorrelationID

In order to simplify troubleshooting for error situations, the service should support the logging of a common "correlation ID". The users of the APIs have the responsibility of creating a unique identifier (GUID or similar) that follows the request end-to-end and is logged along the way. This is done by defining an Http header used for this purpose - CorrelationID.

**Example correlationID**

| CorrelationID: 14fbc062-aacb-4449-93c1-85c352d387a4 |

#### AccountInfoRequestID

To make it possible to retrieve a (logical) request on a part, the service has to support logging of "AccountInfoRequestID".

Unique reference/case number that follows the case. It is expected that the public agencies can connect this reference to the public agency's real case number. The purpose is to be able to detect abnormal number of case requests from one agency, and to be able to retrieve requests in a specific case in error handling or legal inquiries. In legal inquires, financial institutions send this reference to the specific public agency, which uses this reference to prove that there was a valid legal basis to provide information to the public agency. This will be made relevant if, for example, there is a claim for compensation from someone who believes that the financial institution should not have provided the information.

"AccountInfoRequestID" will be created by the consumers according to the same pattern as used for "CorrelationID" (explained in the chapter above).

* "AccountInfoRequestID" has to be the same for all API calls related to a request. Please note that it may also apply to several parts.
* It should be possible for the consumer and the provider to locate an old case (or another reason for the request) based on this "AccountInfoRequestID"
* The "AccountInfoRequestID" must be logged and stored for 13 years, in accordance to ["Juridiske rammebetingelser".](https://dokumentasjon.dsop.no/dsop_kontroll_juridisk.html#andre-relevante-lover-og-bestemmelser)

**Example AccountInfoRequestID**

| AccountInfoRequestID: d4a820ca-ddde-11ed-b5ea-0242ac120002 |

#### AdditionalReferenceIDType and AdditionalReferenceID

To improve traceability, logging and further more validation, the *AdditionalReferenceIDType* and *AdditionalReferenceID* are input-parameters required for some of the consumers when their legal-mandate (listed in the table below) is not adequate, or to provide information regarding the origin of the request or to provide again the contact information to the data providers (financial institutions) in the event of questions or other issues.

By providing a reference type, it describes what *AdditionalReferenceID* is expected to contain and can then be validated if needed.

The current AdditionalReferenceIDTypes and expected content and format in AdditionalReferenceID are:

| Consumers | Status | Legal-Mandate | AdditionalReferenceIDType | Format in AdditionalReferenceID     |
| ----------- | ---------- | --------------------------------------- |---------------------------|-------------------------------------|
| Politiet | Required | Straffeprosessloven &sect; 210 første ledd | pol                       | police district;firstname lastname* |
| Politiet | Required | Straffeprosessloven &sect; 210 tredje ledd | pol                       | police district;firstname lastname* |

**It is required to provide the actual police district having the case and the full name of the legal responsible requester, separated by semicolon. This input-parameter must be formatted text encoded.*

It is recommended to validate AdditionalReferenceID according to the legal mandate. It is also recommended to log the current legal-mandates with belonging AdditionalReferenceID.


 **Example AdditionalReferenceIDType and AdditionalReferenceID**

|[See example of a request](assets/example_AdditionalReferenceID.pdf).|

### Versioning

The service should follow [the principles of semantic versioning](https://semver.org/). The Data Consumers are responsible to ensure that the client implementation of the APIs continues to function if "non-breaking" changes are introduced, e.g. changing of the order or adding new fields [(see also the Tolerant reader principles)](https://martinfowler.com/bliki/TolerantReader.html).

Only MAJOR versions are included in the API URLs (i.e. v2, v3, etc.) and are introduced when the need arises.
If several versions of the APIs occur and there also eventually is a need for the phasing out of older versions, their users must be given a reasonable amount of time to switch to the new version (e.g. 4 months). This will be specified further in the service agreements.

### Mapping

All accounts that are or have been registered with the bank must be mapped into following 10 values:

* loanAccount
* salaryAccount
* currencyAccount
* savingsAccount
* clientAccount
* taxDeductionAccount
* businessAccount
* creditCardAccount
* prepaidCardAccount
* otherAccount

This applies to all accounts. The bank needs to map their accounts at their best ability and choose the value that is the most representative for each account.

### Large result sets

The service must support the division of the response (pagination) if the request results in large result sets. This should be done through linking. The table below shows the code values to be used. Relative URLs should always be used. The goal should be that the number of items on each page is high enough to make the retrieval as efficient as possible. For transactions, a minimum of 1000 is desirable.

| Code value |  |  |------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| next       | 	Next page in the result set. The absence of 'next' will be interpreted as this being the last page of the result set, and it should therefore be removed if this is the case. |
| self       | 	(Optional) Current page in the result set                                                                                                                                     |
| prev       | 	(Optional) Previous page in the result set                                                                                                                                    |
| last       | 	(Optional) Last page in the result set                                                                                                                                        |

#### Example linking

```
"links": [\\\\\\\\{\}
		"rel": "self",
		"href": "/accounts/58758848484/transactions?fromDate=2018-01-01&amp;amp;toDate=2018-01-18"
	\\\\\\\},
	\\\\\\\\{\}
		"rel": "next",
		"href": "/accounts/58758848484/transactions?fromDate=2018-01-01&amp;amp;toDate=2018-01-18"
	\\\\\\\},
	\\\\\\\\{\}
		"rel": "last",
		"href": "/accounts/58758848484/transactions?fromDate=2018-01-01&amp;amp;toDate=2018-01-18"
	\\\\\\\}]
```

### Incomplete response

If the service provider cannot give a complete response because the information for the specified period is not available
online*, the client must be made aware that more data exist. This is done through a separate element _"responseStatus"_
and _"responseDetails.status"_ in each response. These elements indicate whether the answer from the Data Provider is
complete, or whether there is data offline that cannot be retrieved through the different endpoints.

-	complete: The Data Provider has returned all data that was requested by the Data Consumer.
-	partial: The Data Provider has not been able to return all data that was requested by the Data Consumer. There is
data in the provider's systems that can be retrieved manually and is not part of the API response.

Data Providers must follow the guidelines provided in the document [Messages in relation with partial.](assets\DSOP_Messages_in_relation_with_partial.pdf)

*Note: If the reason that a complete response cannot be provided is a service failure (eg, interruptions in one of the
underlying systems), an error message should be provided as described in [Error Handling](https://dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#error-handling)
(_responseStatus / responseDetails.status_ = partial should therefore not be used in such situations).

## Change log

| Date | Version | Change | Link in document                                                                                                                                                                                       |
| ---------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 14.08.23 | V.1.0.6 | Added documentation about partial response | [Incomplete response](https://bitsnorge.github.io/dsop-documentation/dsop_kontroll_specification_of_eoppslag.html#incomplete-response)                                                                 |
| 23.10.20 | V.1.0.5 | Specified that AdditionalReferenceID must be formatted text encoded | [AdditionalReferenceIDType and AdditionalReferenceID](https://bitsnorge.github.io/dsop-documentation/dsop_kontroll_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid) |
| 23.09.20 | V.1.0.4 | Better specification of Versioning in relation of minor changes. | [Versioning](https://bitsnorge.github.io/dsop-documentation/dsop_kontroll_specification_of_eoppslag.html#versioning)                                                                                   |
| 16.09.20 | V.1.0.4 | Changed the list of mapping-accounts in relation to the new version of API (V.1.1) | [Mapping](https://bitsnorge.github.io/dsop-documentation/dsop_kontroll_specification_of_eoppslag.html#mapping)                                                                                         |
| 16.09.20 | V.1.0.3 | Added description of two new input-parameters (AdditionalReferenceIDType and AdditionalReferenceID) which is a part of the new version of API (V.1.1). Also added a recommendation of logging and validating AdditionalReferenceID according to the legal-mandate. | [AdditionalReferenceIDType and AdditionalReferenceID](https://bitsnorge.github.io/dsop-documentation/dsop_kontroll_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid) |
| 18.08.20 | V.1.0.2 | Specified description of AccountInfoRequestID | [AccountInfoRequestID](https://bitsnorge.github.io/dsop-documentation/dsop_kontroll_specification_of_eoppslag.html#accountinforequestid)                                                               |
| 02.03.20 | V.1.0.2 | Added clarification about mapping of accounts | [Mapping](https://bitsnorge.github.io/dsop-documentation/dsop_kontroll_specification_of_eoppslag.html#mapping)                                                                                         |
| 02.02.20 | V.1.0.1 | Specified description of AccountInfoRequestID | [AccountInfoRequestID](https://bitsnorge.github.io/dsop-documentation/dsop_kontroll_specification_of_eoppslag.html#accountinforequestid)                                                               |
| 02.01.20 | V.1.0 | Added AccountInfoRequestID | [AccountInfoRequestID](https://bitsnorge.github.io/dsop-documentation/dsop_kontroll_specification_of_eoppslag.html#accountinforequestid)                                                               |