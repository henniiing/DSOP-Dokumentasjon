---
title: "Overall description of the DSOP Control API (eOppslag)"
slug: "dsop_v2fellesstandard_specification_of_eoppslag"
id: "dsop_v2fellesstandard_specification_of_eoppslag"
keywords: ["sample"]
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
| Functionality | This API shall support 5 different operations: <br  /> - Transaction history for account for a time period 