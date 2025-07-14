---
title: "Dsop Kontroll Onboarding Datakilde
id: dsop_kontroll_onboarding_datakilde"
slug: "dsop_kontroll_onboarding_datakilde"
keywords: ["sample"]
sidebar: "main_sidebar
permalink: dsop_kontroll_onboarding_datakilde.html"
folder: "section1"
---

*First time implementing a DSOP Solution based on the DSOP Control Common Standard.
<br \/><br \/>This onboarding guide is to be used by financial institutions as a reference document and navigation tool that
provides access to information that is necessary for the successful establishment of DSOP Solutions based on the
DSOP Control Common Standard.*

## Onboarding process

To ensure good integration with the data consumer (public agency), the financial institution should follow this onboarding process in 4 phases as described below.

| Process                                  | Description                                                                                                                                                                                      |
|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A - Preparation                          | Read documentation and assess how this affects the financial institution, and how and when the work should be organized. Initiate necessary technical orders internally.                         |
| B - Registration and signing of contract | The financial institution registers with Bits. Bits manages the signing of contracts/terms with the financial institution.                                                                       |
| C - Integration                          | The financial institution starts implementation of the solution and performs the necessary internal tests and integration tests against the public agencies before the transition to production. |
| D - Production                           | The financial institution goes in production                                                                                                                                                     |

In the following chapters, there are also presented recommendations about who should complete which tasks:

* IT: IT-specific tasks

* Business: Tasks for the business side that will implement the solution

* All: All the above-mentioned environments.

### A - Preparation
In this chapter, you will find an overview of tasks that must be done before the financial institution proceeds with registration and signing of contracts (B).

| Tasks |  | Links + relevant info to do the task |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A-1 | Go through the information-site for the DSOP Control Common Standard as well as the specific DSOP Solution(s), to understand what the solution(s) can mean for the financial institution and what is needed to succeed (All). | See<br \/>&amp;gt;-  [About the DSOP Control Common Standard](https://dokumentasjon.dsop.no/dsop_kontroll_om.html#for-mer-informasjon-og-oversikt-over-implementering-av-løsningene) <br \/> - [Politiet](assets/Rundskriv_01_20_-_Utlevering_av_kontoinformasjon_til_Politiet.pdf) <br \/> - [NAV](assets/Rundskriv_05_19_Utlevering_avkontoinformasjon_til_NAV.pdf)  [(Vedlegg)](assets/Vedlegg_NAV_-_tildele_tilgang_i_Altinn.pdf) <br \/> - [Skatteetaten](assets/Digitalt_brev_20180618.pdf) [(Vedlegg)](assets/Brevmal_-_Digitalt_brev.pdf) <br \/> |

### B - Registration and signing of contract

| Tasks that must be done prior to *registration and signing of contract* |
|-------------------------------------------------------------------------|
| **A-1, A-2**                                                            |

| Tasks |  | Links + relevant info to do the task |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| B-1 | **Registration form** <br \/> <br \/> Financial institutions send a registration form with, among other things, the following information to Bits: <br \/> <br \/> - Financial institution <br \/><br \/>- What DSOP solutions based on the Common Standard the registration apply for<br \/>&amp;gt; <br \/><br \/> - Production date | The registration form is sent to [DSOP@bits.no](mailto:dsop@bits.no). Bits will verify the content in the form. <br \/><br \/> Download registration form [here](assets/Registrering_Hoved_Kontroll_Fellesstandard.docx). |
| B-2 | **Electronic signing of the necessary contracts/terms (Business)** <br \/><br \/> The financial institution is contacted by Bits to start electronic signing of the relevant contracts (the signatory listed in the registration form receives electronic contract for signing via email from Verified). | Signing of the agreement is done digitally via Verified and managed by Bits. |

### C - Integration

| Tasks that must be done prior to *integration* |
|------------------------------------------------|
| **A-1, A-2, B-1, B-2**                         |

| Tasks |  | Links + relevant info to do the task |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| C-1 | **Implement the DSOP Solutions according to the API-specification for DSOP Control Common Standard. <br \/><br \/>See all documentation for the concrete DSOP Solutions, as well as general documentation for DSOP Control Common Standard (IT)** | See all documentation for the specific DSOP Solution you are implementing (see site menu). <br \/><br \/>Make sure to see the following documentation at minimum about the DSOP Control Common Standard: <br \/> - [API-specification](https://dokumentasjon.dsop.no/dsop_kontroll_api_specification.html) <br \/><br \/> - [Data model](https://dokumentasjon.dsop.no/dsop_kontroll_datamodel.html) for description of fields in the API specification, and a list of the relevant APIs for each DSOP solution <br \/><br \/> - [Specification av eOppslag](https://dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html) for guidance to the API-specification <br \/> <br \/> - [Functional Specification](https://dokumentasjon.dsop.no/dsop_kontroll_functionalspecification.html)  <br \/> <br \/>- [Architecture document](https://dokumentasjon.dsop.no/dsop_kontroll_architecturedocument.html)  <br \/> <br \/> - [Security Design](https://dokumentasjon.dsop.no/dsop_kontroll_sikkerhetslosning.html) describes secure communication between the financial institution and the public agencies <br \/> <br \/> - Legal conditions (Juridiske rammebetingelser) for the concrete DSOP solutions: gives information about the public agencies that should have access to the solutions and what legal basis they have to send requests for data. <br \/><br \/> - [Validation of requests](https://dokumentasjon.dsop.no/dsop_kontroll_validation.html) |
| C-2 | **Implement Customer Relationship Register (Kundeforholdsregister). (IT)**<br \/> <br \/> Relevant for financial institutions that only register parts or none of the accounts in KAR. | Se [Onboarding guide Customer Relationship Register (in norwegian)](https://dokumentasjon.dsop.no/dsop_kundeforholdsregister_onboarding.html) |
| C-3 | **Facilitate validation of the access token (IT/Business)** | Se [Sequence diagram - Server-to-server authentication in Security Design](https://dokumentasjon.dsop.no/dsop_kontroll_sikkerhetslosning.html#sequence-diagram---server-to-server-autentication) . <br \/><br \/> Get Digdir's public certificate for token validation locally. Endpoints for both test environment and production environment must be supported:  <br \/><br \/>[Test environment](https://test.maskinporten.no/.well-known/oauth-authorization-server) <br \/><br \/> [Production environment](https://maskinporten.no/.well-known/oauth-authorization-server) <br \/><br \/> How to validate: <br \/> - [Maskinporten](https://docs.digdir.no/docs/Maskinporten/maskinporten_func_wellknown) |
| C-4 | **Technical integration for BCL (Business Certificate Lookup). (IT)** | See [ Overview in Security Design](https://dokumentasjon.dsop.no/dsop_kontroll_sikkerhetslosning.html#overview) <br \/> <br \/> [Information about the technical integration](https://vefa.difi.no/bcp/docs/interface/publisher/v1/) <br \/> [How to use BCL](https://vefa.difi.no/bcp/knowledge-base/performing-lookup/) <br \/><br \/> BCL test environment: [https://test-bcl.difi.blufo.net](https://test-bcl.difi.blufo.net ) <br \/> BCL production environment: [https://bcl.difi.blufo.net](https://bcl.difi.blufo.net ) |
| C-5 | **Register test-data in KAR or KFR (IT)** | **Only synthetic or anonymized data is accepted.** <br \/><br \/> It is desirable that the test data is synthetic and consists of 5-10 test users who have different identifiers (personal identification number, d-number or organization number). When using anonymized test data, the following [criteria](https://dokumentasjon.dsop.no/dsop_kontroll_faq.html#anonymisering-av-testdata) must be followed, and Bits must be informed about the use of anonymized test-data. <br \/><br \/>  Registration of test data is done by the financial institutions themselves. Only financial institutions that have accounts registered in KAR can register test data in KAR. Other financial institutions must register test data in KFR. <br \/><br \/> Personal identification number, D number and organization number for the test users are sent to [DSOP@bits.no](mailto:dsop@bits.no) |
| C-6 | **Perform internal testing. (IT)** <br \/><br \/> 1. Contract test (PACT) <br \/><br \/> 2. Integration test (13 test cases) <br \/><br \/> 3. Review points in checklist <br \/><br \/> 4. Answer questions about compliance and register any deviations <br \/><br \/> Contract test, checklist and the integration test are aids that can be used to check that the implementation is correct and of good quality. | Contract test, integration test, checklist and questions for compliance can be found here:[Test](https://dokumentasjon.dsop.no/dsop_kontroll_test.html) . <br \/><br \/> Performed internal testing is confirmed to Bits. Performed integration test, checklist and answers to questions about compliance must be attached and sent to [DSOP@bits.no](mailto:dsop@bits.no). <br \/><br \/> Bits will verify that testing is ok. |
| C-7 | **Register endpoints for test- and production environment in API-catalogue. (IT)** <br \/> <br \/> Only one endpoint per environment must be registered. | Financial institutions send the endpoints to be registered in the API catalog to [DSOP@bits.no](mailto:dsop@bits.no). |
| C-8 | **Test with public agencies.** <br \/><br \/>Test must start no later than two weeks before the agreed production date. | Public agencies want to test the entire value chain - from identifying customer relationships at the financial institution to retrieving data and decrypting the content. <br \/><br \/> Public agencies run various tests to verify that the financial institution has implemented correctly in accordance with documentation |
| C-9 | **Arrange for notification to Bits (Business)** | The financial institution must arrange for future notifications to be sent regarding the Control information solution.<br \/><br \/> See [Notification](https://dokumentasjon.dsop.no/dsop_kontroll_varsling.html) for information about when and how the financial institution shall send a notification. |

### D - Production
In this chapter you will find an overview of tasks that should be done to move to production.

| Tasks that must be done prior to *integration* |
|------------------------------------------------|
| **A-1, A-2**                                   |
| **B-1, B-2**                                   |
| **C-1, C-2, C-3, C-4, C-5 C-6, C-7, C-8, C-9** |

| Tasks |  | Links + relevant info to do the task |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| D-1 | **Self declaration (Business)** <br \/><br \/> The financial institution downloads the self declaration, fills in the form and returns the completed form to Bits. <br \/><br \/> It is important for the financial institution to previously have reported all the fields that can not be delivered in accordance with the API-specification in step C-6 under questions about compliance and deviations. This is to reduce error messages from public agencies in production. | Download [self declaration (in norwegian)](assets/Selvdeklarasjon_Kontrollinformasjon.docx). <br \/><br \/> By returning the completed self declaration, the financial institution confirms that they are ready for production. <br \/><br \/> The self declaration should be sent to [DSOP@bits.no](mailto:dsop@bits.no) |
| D-2 | After the return of the completed self declaration, Bits will make the endpoint available for the financial institution in the API-catalogue. | The financial institution is in production. |

## Change log

| Date | Change | Link in documentation |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| 03.12.2020 | Spesifisert at før man sender inn selvdeklarasjon i D-1, er det viktig at alle avvik har blitt rapportert. | [D - Produksjon](https://dokumentasjon.dsop.no/dsop_kontroll_onboarding_datakilde.html#d--produksjon) |
| 17.11.2020 | Endret innhold i Selvdeklarasjon slik at det i Selvdeklarasjon kun skal bekreftes at alt er gjort. Spørsmål som er fjernet er flyttet inn i fil om etterlevelse. | [Selvdeklarasjon](assets/Selvdeklarasjon_Kontrollinformasjon.docx) |
| 17.11.2020 | Utvidet prosedyre for test i pkt C-6 til at spørsmål om etterlevelse og evt. avvik også skal besvares. | [C - Integrasjon](https://dokumentasjon.dsop.no/dsop_kontroll_onboarding_datakilde.html#c--integrasjon) |
| 16.11.2020 | Korrigert well-known endepuntk for validering mot Maskinporten, pkt. C-3. | [C - Integrasjon](https://dokumentasjon.dsop.no/dsop_kontroll_onboarding_datakilde.html#c--integrasjon) |
| 21.01.2020 | Lagt til følgende presisering under pkt. C-5: <br \/>*Skarpe data er ikke akseptert.* | [C - Integrasjon](https://dokumentasjon.dsop.no/dsop_kontroll_onboarding_datakilde.html#c--integrasjon) |
| 13.10.2020 | Lagt til nytt punkt A-2 - Tildeling av rettigheter i Altinn | [A - Forberedelse](https://dokumentasjon.dsop.no/dsop_kontroll_onboarding_datakilde.html#a---forberedelse) |
