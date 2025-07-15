---
title: "Dsop Kontroll Onboarding Datakilde 2"
id: "dsop_kontroll_onboarding_datakilde_2"
slug: "dsop_kontroll_onboarding_datakilde_2"
---

﻿---
title: Onboarding guide for financial institutions
keywords: sample
sidebar: main_sidebar
permalink: dsop_kontroll_onboarding_datakilde_2.html
folder: section1
---

*The financial institution has implemented the DSOP Control Common Standard in relation to another DSOP Solution, 
and is going to onboard a new DSOP Solution that is based on the same Standard. 
<br >This onboarding guide is to be used by financial institutions as a reference document and navigation tool that 
provides access to information that is necessary for the successful establishment of DSOP Solutions based on the 
DSOP Control Common Standard.*

## Onboarding process

To ensure good integration with the data consumer (public agency), the financial institution should follow this onboarding process in 4 phases as described below.


| Process                                  | Description                                                                                                                                                                                      |
|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A – Preparation                          | Read documentation and assess how this affects the financial institution, and how and when the work should be organized. Initiate necessary technical orders internally.                         |
| B – Registration and signing of contract | The financial institution registers with Bits. Bits manages the signing of contracts/terms with the financial institution.                                                                       |
| C – Integration                          | The financial institution starts implementation of the solution and performs the necessary internal tests and integration tests against the public agencies before the transition to production. |
| D – Production                           | The financial institution goes in production                                                                                                                                                     |


In the following chapters, there are also presented recommendations about who should complete which tasks:

* IT: IT-specific tasks

* Business: Tasks for the business side that will implement the solution

* All: All the above-mentioned environments.


### A - Preparation
In this chapter, you will find an overview of tasks that must be done before the financial institution proceeds with registration and signing of contracts (B).

| Tasks |                                                                                                                                                                                                                               | Links + relevant info to do the task                                                                                                                                                                                                                                        |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A-1   | Go through the information-site for the DSOP Control Common Standard as well as the specific DSOP Solution(s), to understand what the solution(s) can mean for the financial institution and what is needed to succeed (All). | See<br >- About the DSOP Solution (find the specific DSOP Solution in the site menu) |


### B – Registration and signing of contract

| Tasks that must be done prior to *registration and signing of contract* | 
|-------------------------------------------------------------------------|
| **A-1**                                                                 |


| Tasks |                                                                                                                                                                                                                                                                                                    | Links + relevant info to do the task                                                                                                                                                                                |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| B-1   | **Registration form** <br > - Financial institution <br > - Production date     | The registration form is sent to [[DSOP@bits.no](mailto:DSOP@bits.no)](mailto:dsop@bits.no). Bits will verify the content in the form. <br > Download registration form [here](/assets/Registrering_Hoved_Kontroll_Fellesstandard.docx). |
| B-2   | **Electronic signing of the necessary contracts/terms (Business)** <br > The financial institution is contacted by Bits to start electronic signing of the relevant contracts (the signatory listed in the registration form receives electronic contract for signing via email from Verified). | Signing of the agreement is done digitally via Verified and managed by Bits.                                                                                                                                        |

The financial institution should have common contact points for all the DSOP-services that are based on the Control Common 
Standard. There is therefore no need to fill in contact details in the registration form, as the contact details the 
financial institution has already registered in Control Common Standard will also apply for this service.

### C – Integration

| Tasks that must be done prior to *integration* | 
|------------------------------------------------|
| **A-1, B-1, B-2**                              |


| Tasks |                                                                                                                                                                                                                                                     | Links + relevant info to do the task                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C-1   | **See all documentation for the concrete DSOP Solution, as well as general documentation for DSOP Control Common Standard. <br >Implement the DSOP Solution according to the documentation (IT).**                                               | See all documentation for the specific DSOP Solution you are implementing (see site menu).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| C-2	  | **If necessary, facilitate validation of the access token (IT/Business)**                                                                                                                                                                           | Se [Sequence diagram - Server-to-server authentication in Security Design](https:/dokumentasjon.dsop.no/dsop_kontroll_sikkerhetslosning.html#sequence-diagram---server-to-server-autentication) . <br >[Test environment](https:/test.maskinporten.no/.well-known/oauth-authorization-server) <br > How to validate: <br > [How to use BCL](https:/vefa.difi.no/bcp/knowledge-base/performing-lookup/) <br ><br > <br ><br ><br > The self declaration should be sent to [[DSOP@bits.no](mailto:DSOP@bits.no)](mailto:dsop@bits.no) |
| D-2   | The financial institution informs Bits when they are in production. Bits will then inform the public agency, so that they can reach the financial institution through the service. |                                                                                                                                                                                                                                                                                                           |


## Change log

| Date | Change | Link in documentation |
|------|--------|-----------------------|
|      |        |                       |