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
<br><br>This onboarding guide is to be used by financial institutions as a reference document and navigation tool that 
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
| A-1   | Go through the information-site for the DSOP Control Common Standard as well as the specific DSOP Solution(s), to understand what the solution(s) can mean for the financial institution and what is needed to succeed (All). | See<br>-  [About the DSOP Control Common Standard](https://dokumentasjon.dsop.no/dsop_kontroll_om.html#for-mer-informasjon-og-oversikt-over-implementering-av-løsningene) <br>- About the DSOP Solution (find the specific DSOP Solution in the site menu) |


### B – Registration and signing of contract

| Tasks that must be done prior to *registration and signing of contract* | 
|-------------------------------------------------------------------------|
| **A-1**                                                                 |


| Tasks |                                                                                                                                                                                                                                                                                                    | Links + relevant info to do the task                                                                                                                                                                                |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| B-1   | **Registration form** <br> <br> Financial institutions send a registration form with, among other things, the following information to Bits: <br> <br> - Financial institution <br><br>- What DSOP solutions based on the Common Standard the registration apply for<br><br> - Production date     | The registration form is sent to [DSOP@bits.no](mailto:dsop@bits.no). Bits will verify the content in the form. <br><br> Download registration form [here](assets/Registrering_Hoved_Kontroll_Fellesstandard.docx). |
| B-2   | **Electronic signing of the necessary contracts/terms (Business)** <br><br> The financial institution is contacted by Bits to start electronic signing of the relevant contracts (the signatory listed in the registration form receives electronic contract for signing via email from Verified). | Signing of the agreement is done digitally via Verified and managed by Bits.                                                                                                                                        |

The financial institution should have common contact points for all the DSOP-services that are based on the Control Common 
Standard. There is therefore no need to fill in contact details in the registration form, as the contact details the 
financial institution has already registered in Control Common Standard will also apply for this service.

### C – Integration

| Tasks that must be done prior to *integration* | 
|------------------------------------------------|
| **A-1, B-1, B-2**                              |


| Tasks |                                                                                                                                                                                                                                                     | Links + relevant info to do the task                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C-1   | **See all documentation for the concrete DSOP Solution, as well as general documentation for DSOP Control Common Standard. <br><br>Implement the DSOP Solution according to the documentation (IT).**                                               | See all documentation for the specific DSOP Solution you are implementing (see site menu).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| C-2	  | **If necessary, facilitate validation of the access token (IT/Business)**                                                                                                                                                                           | Se [Sequence diagram - Server-to-server authentication in Security Design](https://dokumentasjon.dsop.no/dsop_kontroll_sikkerhetslosning.html#sequence-diagram---server-to-server-autentication) . <br><br> Get Digdir's public certificate for token validation locally. Endpoints for both test environment and production environment must be supported:  <br><br>[Test environment](https://test.maskinporten.no/.well-known/oauth-authorization-server) <br><br> [Production environment](https://maskinporten.no/.well-known/oauth-authorization-server) <br><br> How to validate: <br> - [Maskinporten](https://docs.digdir.no/docs/Maskinporten/maskinporten_func_wellknown) |
| C-3   | **Technical integration for BCL (Business Certificate Lookup) if necessary. (IT)**                                                                                                                                                                  | See [ Overview in Security Design](https://dokumentasjon.dsop.no/dsop_kontroll_sikkerhetslosning.html#overview) <br> <br> [Information about the technical integration](https://vefa.difi.no/bcp/docs/interface/publisher/v1/) <br> [How to use BCL](https://vefa.difi.no/bcp/knowledge-base/performing-lookup/) <br><br> BCL test environment: [https://test-bcl.difi.blufo.net](https://test-bcl.difi.blufo.net ) <br> BCL production environment: [https://bcl.difi.blufo.net](https://bcl.difi.blufo.net )                                                                                                                                                                       |
| C-4	  | **Register testdata in KAR or KFR (IT)**                                                                                                                                                                                                            | Make sure you have registered testdata in KAR or KFR for testing this solution. Registration of test data is done by the financial institutions themselves, or you can reuse the same test customers as registered earlier for other DSOP Control solutions. Only financial institutions that have accounts registered in KAR can register test data in KAR. Other financial institutions must register test data in KFR. <br><br> Personal identification number, D number and organization number for the test users are sent to [DSOP@bits.no](mailto:dsop@bits.no). Include information about at what time periods the test-users have registered account information.           |
| C-5	  | **Perform internal testing. (IT)**                                                                                                                                                                                                                  | Complete all cases in “check list and integration test”, see [DSOP Control Common Standard tests]( https://dokumentasjon.dsop.no/dsop_kontroll_test.html). <br> <br> Performed integration test and checklist must be attached and sent to DSOP@bits.no. <br> <br> Bits will verify that testing is ok.                                                                                                                                                                                                                                                                                                                                                                              |
| C-6 	 | **Make sure that the endpoint registered in the API-catalogue for DSOP Control Common Standard will also work with this solution (API name “Accounts API” in API-catalogue). The public agency will send requests to that endpoint in production.** | Financial institutions send the endpoints to be registered in the API catalog to [DSOP@bits.no](mailto:dsop@bits.no).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| C-7 	 | **Test with public agencies.**                                                                                                                                                                                                                      | Public agencies might need to test the entire value chain to verify that the financial institution has implemented correctly, but this has not been decided yet.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| C-8   | **Arrange for notification to Bits (Business)**                                                                                                                                                                                                     | The financial institution must arrange for future notifications to be sent regarding the Control information solution.<br><br> See [Notification](https://dokumentasjon.dsop.no/dsop_kontroll_varsling.html) for information about when and how the financial institution shall send a notification.                                                                                                                                                                                                                                                                                                                                                                                 |


### D – Production
In this chapter you will find an overview of tasks that should be done to move to production.

| Tasks that must be done prior to *integration* | 
|------------------------------------------------|
| **A-1**                                        |
| **B-1, B-2**                                   |
| **C-1, C-2, C-3, C-4, C-5 C-6, C-7, C-8**      |


| Tasks |                                                                                                                                                                                    | Links + relevant info to do the task                                                                                                                                                                                                                                                                      |
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D-1   | **Self declaration (Business)** <br><br> The financial institution downloads the self declaration, fills in the form and returns the completed form to Bits.                       | [Downloads](assets/Selvdeklarasjon_for_tjeneste_basert_på_kontroll_fellesstandard.docx). <br><br> By returning the completed self declaration, the financial institution confirms that they are ready for production. <br><br> The self declaration should be sent to [DSOP@bits.no](mailto:dsop@bits.no) |
| D-2   | The financial institution informs Bits when they are in production. Bits will then inform the public agency, so that they can reach the financial institution through the service. |                                                                                                                                                                                                                                                                                                           |


## Change log

| Date | Change | Link in documentation |
|------|--------|-----------------------|
|      |        |                       |