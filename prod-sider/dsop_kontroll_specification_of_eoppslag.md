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
| Functionality | This API shall support 5 different operations: <br  /> - Transaction history for account 