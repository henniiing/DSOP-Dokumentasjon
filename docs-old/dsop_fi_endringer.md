---
title: "Endringer for tjenesten 2022/2023"
slug: "dsop_fi_endringer"
id: "dsop_fi_endringer"
keywords:
  - "sample"
---

## Skatteoppgjør 2022

Oversikt over endringer fra Skatteetaten vedrørende skatteoppgjøret for 2022: <br >
[Open API Specification - 17.01.2023](/assets/SpesifisertSummertSkattegrunnlagOAStypes.json) <br >
[Swaggerhub for Inntekt API](https:/app.swaggerhub.com/apis/Skatteetaten_Deling/inntekt-api/1.0.0) <br > 
Hvordan finne testdata i Tenor [se 3-stegs veiledning](/assets/Skjermbilde_Tenor.PNG)


For mer informasjon om syntetisk Folkeregister med syntetisk personidentifikator på github (syntetiske fødselsnumre vil ha +80 på måned) [Test for konsumenter](https:/skatteetaten.github.io/folkeregisteret-api-dokumentasjon/test-for-konsumenter/)

### Test-BankID og Tenor

Det er støtte for å opprette test-BankID på testpersoner uthentet fra Tenor testdatasøk. Understående er en stegvis forklaring på hvordan man oppretter test-BankID og aktiverer den for bruk i Altinns samtykkeløsning:

1. Logg inn i Tenor testdatasøk og søk etter testperson med nødvendige testdata.
[![alt text](/assets/Skjermbilde_Tenor_1.png "Tenor testdatasøk")](assets/Skjermbilde_Tenor_1.png)
<br >
3. Logg inn i [Altinns testmiljø](https:/tt02.altinn.no/) (TT02) for å aktivere test-BankID på testpersonen for å kunne gjøre samtykket.
[![alt text](/assets/Skjermbilde_AltinnTest.png "Altinn test")](assets/Skjermbilde_AltinnTest.png)

### Miljøer
For Skatteetaten [se link](https:/skatteetaten.github.io/api-dokumentasjon/test/testmiljo#testmilj%C3%B8)

Testmiljø:https:/api-test.sits.no (nytt) <br >
•	Gammel tjenestekode (inntekt): 4804_170223 <br >
[Excel-oversikt](/assets/Oversikt_endringer_Skatteoppgjor_2021_.xlsx) 
<br >
[XSD fil 17.02.22](/assets/SpesifisertSummertSkattegrunnlag_V.1.1_17_02_22.xsd)

### Testdata 
Skatteetaten har ifm. skatteoppgjøret for 2021, beriket og prodsatt 3 testpersoner fra det gamle testdatasettet pga. utfordringene med nytt testmiljø og bruk av syntetiske testdata fra Tenor. <br >
Oversikt tilgjenglige [testdata](https:/skatteetaten.github.io/api-dokumentasjon/test/testmiljo#historiske-testdata-for-inntekt-og-skatteoppgj%C3%B8r)


## Endringslogg

| Dato         | Endring  | Link i dokumentasjon||
|03.04.2023 | Nye linker til Skatteetatens Github ||
|27.02.2023|[Endringer for tjenesten](https:/dokumentasjon.dsop.no/dsop_sbl_endringer.html#skatteoppgj%C3%B8r-2022) |
|17.02.2023|[Endringer for tjenesten](https:/dokumentasjon.dsop.no/dsop_sbl_endringer.html#skatteoppgj%C3%B8r-2022) |
|03.02.2023|[Onboarding](https:/dokumentasjon.dsop.no/dsop_sbl_onboarding.html#registrering) |
|17.01.2023|[Endringer for tjenesten](https:/dokumentasjon.dsop.no/dsop_sbl_endringer.html#skatteoppgj%C3%B8r-2022) |
|06.04.2022 | Lagt til informasjon om test-BankID og Tenor testdatasøk ||
|18.03.2022 | Lagt til siste versjon av XSD fil fra endringer i kodelisten||
|17.03.2022 | Lagt til link til testdata for skatteoppgjør 2021 ||
|10.03.2022| Oppdatert migrerings datoer for maskinporten, samtykkeløsningen og testmiljø| |
|17.02.2022| Oppdatert Excel oversikt - kvalitetssikret versjon av kodelisten for SSS.    ||
|14.02.2022| Oppdatert Excel oversikt iht testdata for 2021||
|08.02.2022| Oppdatert informasjon om tenor, samt lagt til brukerveiledning i tenor | |
|31.01.2022| Oppdatert med overgang til nytt testmiljø og testdata| |






