---
title: "Overall description of the DSOP Control API (eOppslag)"
slug: "dsop_v2fellesstandard_specification_of_eoppslag"
id: "dsop_v2fellesstandard_specification_of_eoppslag"
keywords:
  - "sample"
---

## High-level description

This document describes the services that the data providers should implement to provide the data consumers with 
account information via DSOP Control Common Standard API and DSOP Solutions build on top of it. The services should be 
realised based on the REST architectural style and HTTP as a transport mechanism.

For a more detailed description, see the [Architecture documentation](/dsop_v2fellesstandard_architecturedocument).

The services are defined so that they together or separately can support different use scenarios, such as:
* Looking up account information with balance per control object, both as account owner and other role ("disponent" in Norwegian).
* Retrieving balance, transaction, card or role history, per account for a specific period.

The [functional specification](/dsop_v2fellesstandard_functionalspecification) 
describes this in more detail.

| Name           | Account                                                                                                                                                                                                                                                                                                                                              |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Functionality  | 	This API shall support 5 different operations: <br > - Transaction history for account for a time period <br > - All Role holders on account for a time period |
|                | **Characteristics**                                                                                                                                                                                                                                                                                                                                  |
| Interface type | 	REST API                                                                                                                                                                                                                                                                                                                                            |
| Protocol       | 	HTTP                                                                                                                                                                                                                                                                                                                                                |
| Transport      | HTTPS                                                                                                                                                                                                                                                                                                                                                |
| State          | 	Stateless                                                                                                                                                                                                                                                                                                                                           |
| Formats        | 	JSON (default)                                                                                                                                                                                                                                                                                                                                      |

Note: Se API endpoints with examples in the [Open API specification file](https:/bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0).


## General characteristics

### API methods

The services should support lookup of information and, for that reason, only the HTTP method GET can be supported. The 
error message must be given if the request contains other HTTP operations, see “Error handling” below.

HTTP status code 200 should be given on successful calls.

### Search by period

For information that changes over time, the general guideline is that the value at the end-time is given in the response. 
For searches where no period is specified, it means that the value at the time of the request should be given 
(e.g. balance).

Some values, such as address, account owner's name, etc. may have changed over time without the bank having a log of the 
information. In those cases, the current value should be given in the response or, alternatively, the value at the end 
date if the customer no longer has an active customer relationship.

### Data formats

All successful calls (200) should be given in JSON format and then encrypted according to JWE. Compact Serialization 
should be used (see other safety specification). Error messages should not be encrypted. Content type must be set for 
all responses, respectively, application/jose and application/json for successful and failed calls. In Test, it should 
be possible to get results unencrypted, by the client setting the Accept header (application/json). This function shall 
not be available in production. Missing/empty values should be represented as is usual for the format, i.e. enter “null” 
for JSON.

### Error handling

All errors that occur in relation to the service call, will follow [the standard for HTTP status codes](https:/en.wikipedia.org/wiki/List_of_HTTP_status_codes),
but an error response should also be given. The error response should include an error code for machine handling, as
well as a readable description of the error that has occurred. [See list of HTTP status codes.](https:/en.wikipedia.org/wiki/List_of_HTTP_status_codes)

As a general rule, the 400 series is reserved for client errors that must be corrected before retrying, while the 500
series should be used for various technical errors at the data provider (e.g. database downtime, etc.). To handle
technical errors that occur at the provider, the client may choose to have automatic *retry* mechanisms.

See more details about specific error situations that the Data Consumers may encounter and what HTTP status codes and 
ACC-xxx message code are expected to be returned: [DSOP Control Common Standard - HTTP error codes and specific error situations with associated message codes V.2.0](/assets/HTTP error codes V.2.pdf)


#### Error code overview

See the [Open API specification](https:/bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0) 
for an overview of error codes for the different endpoints.

### Logging

It is advisable to log at least the input parameters below to facilitate the retrieval of past cases or to manage error situations. 

To determine the appropriate duration for storing these parameters, it is recommended to consult with internal legal and business departments. 

In the short term additional information should be retained. If a public agency receives what it deems to be incorrect or insufficient information, it may contact the financial institution, via Bits, in accordance with the “Error handling” process. The financial institution is expected to be able to verify the request and response to troubleshoot specific cases. 

#### CorrelationID

In order to simplify troubleshooting for error situations, the service should support the logging of a common 
“correlation ID”. The users of the API (Data Consumers)have the responsibility of creating a unique identifier (GUID or 
similar) that follows the request end-to-end and is logged along the way. This is done by defining an Http header used 
for this purpose – CorrelationID.  

**Example correlationID**

| CorrelationID: 14fbc062-aacb-4449-93c1-85c352d387a4 |

#### AccountInfoRequestID

To make it possible to retrieve a (logical) request on a part, the service has to support logging of “AccountInfoRequestID”.

AccountInfoRequestID is a unique reference (uuid format) for the case number related to a series of requests that follows 
the case. It is expected that the data consumers can connect this reference to their own real case number if they do not 
send the real case number. The purpose is to be able to detect abnormal number of case requests from one data consumer, 
and to be able to retrieve requests in a specific case in error handling or legal inquiries. In legal inquires, data 
providers send this reference to the specific data consumer, which uses this reference to prove that there was a valid 
legal basis to provide information to the specific data consumer. This will be made relevant if, for example, there is a 
claim for compensation from someone who believes that the data provider should not have provided the information.

“AccountInfoRequestID” will be created by the consumers according to the same pattern as used for “CorrelationID” (explained in the chapter above).

* “AccountInfoRequestID” has to be the same for all API calls related to a request. Please note that it may also apply to several parts.
* It should be possible for the consumer and the provider to locate an old case (or another reason for the request) based on this *“AccountInfoRequestID”*


**Example AccountInfoRequestID**

| AccountInfoRequestID: d4a820ca-ddde-11ed-b5ea-0242ac120002 |


#### AdditionalReferenceIDType and AdditionalReferenceID

To improve traceability, logging, higher request granulating, filtering and further validation, the *AdditionalReferenceIDType* 
and *AdditionalReferenceID* are input-parameters required for some of the consumers when they need to give more input 
details in their requests. This is usually related to their legal-mandate.

By providing a reference type, it describes what *AdditionalReferenceID* is expected to contain and can then be 
validated if needed.

All the current AdditionalReferenceIDTypes and expected content and format in AdditionalReferenceID is  described in the 
documentation of the different DSOP Solutions.

It is recommended to validate AdditionalReferenceID according to the legal mandate. It is also recommended to log the 
current legal-mandates with belonging AdditionalReferenceID.





### Versioning

The service should follow [the principles of semantic versioning](https:/semver.org/). The Data Consumers are 
responsible to ensure that the client implementation of the APIs continues to function if “non-breaking” changes are 
introduced, e.g. changing of the order or adding new fields [(see also the Tolerant reader principles)](/https:/martinfowler.com/bliki/TolerantReader).

Only MAJOR versions are included in the API URLs (i.e. v2, v3, etc.) and are introduced when the need arises.
If several versions of the APIs occur and there also eventually is a need for the phasing out of older versions, their 
users must be given a reasonable amount of time to switch to the new version (e.g. 4 months). This will be specified 
further in the service agreements.


### Mapping

All accounts that are or have been registered with the bank must be mapped into following 11 values:

* loanAccount
* salaryAccount
* currencyAccount
* savingsAccount
* clientAccount
* taxDeductionAccount
* businessAccount
* creditCardAccount
* prepaidCardAccount
* accountWithoutBalance
* otherAccount

This applies to all accounts. The bank needs to map their accounts at their best ability and choose the value that is 
the most representative for each account. See description of the [account types in the data model.](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts#accountstype)

### Large result sets

The service must support the division of the response (pagination) if the request results in large result sets. This 
should be done through linking. The table below shows the code values to be used. Relative URLs should always be used. 
The goal should be that the number of items on each page is high enough to make the retrieval as efficient as possible. 
For transactions, a minimum of 1000 is desirable.

| Code value |                                                                                                                                                                                | 
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| next       | 	Next page in the result set. The absence of 'next' will be interpreted as this being the last page of the result set, and it should therefore be removed if this is the case. |
| self       | 	(Optional) Current page in the result set                                                                                                                                     |
| prev       | 	(Optional) Previous page in the result set                                                                                                                                    |
| last       | 	(Optional) Last page in the result set                                                                                                                                        |

#### Example linking

```
	"links": [/,
	/,
	/]

```

### Incomplete response

If the data provider cannot give a complete response because the information for the specified period is not available
online*, the client must be made aware that more data exist. This is done through a separate element 
_“responseDetails.status”_ in each response. These elements indicate whether the answer from the Data Provider is
complete, or whether there is data offline that cannot be retrieved through the different endpoints.

-	complete: The Data Provider has returned all data that was requested by the Data Consumer.
-	partial: The Data Provider has not been able to return all data that was requested by the Data Consumer. There is
     data in the provider’s systems that can be retrieved manually and is not part of the API response.

Data Providers must follow the guidelines provided in the document [Messages in relation with partial.](/assets/DSOP_Messages_in_relation_with_partial.pdf)

*Note: If the reason that a complete response cannot be provided is a service failure (eg, interruptions in one of the
underlying systems), an error message should be provided as described in [Error Handling](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#error-handling)
(_responseDetails.status_ = partial should therefore not be used in such situations).


## Change log

| Date     | Version | Change                                                                                                                                                                                                                                                             |
|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 02.01.25 | V.2.0.1 | New description of logging.                                                                                                      |
| 20.03.24 | V.2.0   | New version of the DSOP Control API generating extensive changes throughout all documentation.                                                                                                                                                                     |
| 14.08.23 | V.1.0.6 | Added documentation about partial response                                                                                                                                                                                                                         |                                                            
| 23.10.20 | V.1.0.5 | Specified that AdditionalReferenceID must be formatted text encoded                                                                                                                                                                                                |
| 23.09.20 | V.1.0.4 | Better specification of Versioning in relation of minor changes.                                                                                                                                                                                                   |     
| 16.09.20 | V.1.0.4 | Changed the list of mapping-accounts in relation to the new version of API (V.1.1)                                                                                                                                                                                 |   
| 16.09.20 | V.1.0.3 | Added description of two new input-parameters (AdditionalReferenceIDType and AdditionalReferenceID) which is a part of the new version of API (V.1.1). Also added a recommendation of logging and validating AdditionalReferenceID according to the legal-mandate. | 
| 18.08.20 | V.1.0.2 | Specified description of AccountInfoRequestID                                                                                                                                                                                                                      | 
| 02.03.20 | V.1.0.2 | Added clarification about mapping of accounts                                                                                                                                                                                                                      |             
| 02.02.20 | V.1.0.1 | Specified description of AccountInfoRequestID                                                                                                                                                                                                                      |
| 02.01.20 | V.1.0   | Added AccountInfoRequestID                                                                                                                                                                                                                                         | 