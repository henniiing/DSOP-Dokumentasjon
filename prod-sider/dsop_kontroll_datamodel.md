---
title: "Data model - Description of the APIs in DSOP Control Common Standard"
slug: "dsop_kontroll_datamodel"
id: "dsop_kontroll_datamodel"
keywords: ["sample"]
---

*The [API-specification](https:/dokumentasjon.dsop.no/dsop_kontroll_api_specification.html) is the technical specification to follow when implementing the APIs that are part of the DSOP Control Common Standard. In addition to the technical specification, this documentation describes the data model for each API, and guidelines regarding what to deliver and how for each DSOP Solution based on the Common Standard.*

Each API consist of several fields and subfields. Some fields are marked as mandatory due to technical reasons. Regardless of whether the fields are marked as mandatory or not, all fields are to be provided as long as the bank/financial institution holds the data, unless otherwise stated for the specific DSOP Solution. An overview of the relevant APIs per DSOP Solution is presented in the table below. This is according to the legal basis for each DSOP Solution.

## Overview of the DSOP Control Common Standard - relevant APIs and versions per DSOP solution

| DSOP Solution | Minimum required version of APIs | APIs |
| -------------------------------------------------------- | ---------------------------------- | --------------------------------------------------------------- |
| DSOP Kontrollinformasjon (Skatteetaten, NAV, Politiet) | V.1.0 | Accounts
| DSOP Konkursbehandling (Brønnøysundregistrene) | V.1.0 | Accounts