---
title: "Dsop Fi Onboarding"
id: "dsop_fi_onboarding"
slug: "dsop_fi_onboarding"
---

﻿---
title: Onboarding
keywords: sample
sidebar: beta_sidebar
permalink: dsop_fi_onboarding.html
folder: section1
---

## Kriterier for bruk av Fremtidens Innkreving - Krav og Betalinger

Kun finansforetak som er med i prosjektet som pilotbank kan ta i bruk tjenesten Fremtidens Innkreving - Krav og 
betalinger (FI-K&B).

## Registrering

Kontakt [DSOP@bits.no](mailto:dsop@bits.no) for å få tilsendt registreringsskjema for å starte prosessen med å 
implementere FI-K&B.

## Onboardingsprosessen

For å sikre en god integrasjon med Altinn og Skatteetaten, samt en god implementering
av de to nevnte prosessene, bør finansinstitusjonene følge prosjektets anbefalte onboardingprosess
slik den er beskrevet under.

Onboarding for en finansinstitusjon består av 5 faser:


| Fase                                    | Beskrivelse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A – Forberedelse                        | Lese dokumentasjon og vurdere hvordan dette berører finansinstitusjonen og hvordan arbeidet skal organiseres - og når. Igangsette nødvendige tekniske interne bestillinger.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| B – Registrering og signering av vilkår | Utrulling utføres trinnvis og kontrollert. Finansinstitusjonen registrerer seg hos Bits for signering av Skatteetatens vilkår. Bits er kontakten i denne fasen.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| C – Integrasjon                         | Finansinstitusjonen integrerer seg med Altinns samtykkeløsning og Skatteetaten, og utfører nødvendige integrasjonstester før overgangen til produksjon.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| D – Produksjon                          | Finansinstitusjonen går over til produksjon og må velge hvordan den nye løsningen skal lanseres i markedet.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

I de neste kapitlene er det også presentert anbefalinger om hvem som burde fullføre hvilke oppgaver:
* IT: IT-spesifikke oppgaver
* Forretning: Oppgaver for forretningssiden som vil implementere FI-K&B
* Alle: Alle de ovenfor nevnte miljøene.


### A - Forberedelse
I dette kapittelet finner man oversikt over oppgaver som skal/bør utføres før selskapet går til registrering og avtaleinngåelse (B).

| Oppgaver |                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A-1      | Lese og forstå dokumentasjonen fra Skatteetaten (Alle).                                                                                                                            | Se [Krav og betalinger API](https://skatteetaten.github.io/api-dokumentasjon/api/kravogbetalinger).                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| A-2      | Lese og forstå dokumentasjonen om samtykkeløsningen fra Altinn og Maskinporten fra Digdir (IT).                                                                                    | Se [Altinns Samtykkeløsning](https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/) <br> Les og sette seg inn i [Maskinporten hvordan ta i bruk](https://docs.digdir.no/maskinporten_guide_apikonsument.html) <br> <br> Scope for FI-K&B: [skatteetaten:kravogbetalinger](https://skatteetaten.github.io/api-dokumentasjon/api/kravogbetalinger#scope) <br> <br> Finansforetak med leverandører - se eget delegeringsoppsett på [Altinn leverandører](https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/leverandor/). |
| A-3      | Bestille test- og produksjonsvirksomhetssertifikat internt i finansinstitusjonen (forretning/IT). Det er mulig å gjenbruke eksisterende test- og produksjonsvirksomhetssertifikat. | Finansinstitusjonen må ha gyldig test- og produksjonsvirksomhetssertifikat fra enten:<br> [Buypass](https://www.buypass.no/produkter/virksomhetssertifikat-esegl#oversikt-VID) <br> eller <br> [Commfides](https://www.commfides.com/commfides-virksomhetssertifikat/)<br><br>[Les mer om virksomhetssertifikat her](https://www.bits.no/document/bits-buypass-commfides-business-certificates-an-introduction/).                                                                                                                                          |
| A-4      | Tilrettelegge for neste fase ved å bestille nødvendige utviklings- og testmiljøer (IT).                                                                                            | Dette er en finansinstitusjon-intern bestilling.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| A-5      | Tilrettelegge for neste fase ved å bestille nødvendige brannmur-åpninger for både test og produksjon (IT).                                                                         | Dette er en finansinstitusjon-intern bestilling.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |


### B - Registrering og signering av avtaler/vilkår
I dette kapittelet finner man oversikt over oppgaver som må være gjort før selskapet går over til integrasjon.

| Oppgaver |                                                                                         |                                                                                                                                                                                                                                                               |
|----------|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| B-1      | Finansforetaket fyller ut registreringsskjemaet og sender det til Bits (Forretning).    | - Registreringskjema sendes til DSOP@bits.no. <br><br> - Bits verifiserer innholdet i skjemaet, registrerer og behandler søknaden.                                                                                                                            |
| B-2      | Selskapet blir kontaktet av Bits for å starte elektronisk avtaleinngåelse (Forretning). | Nødvendig for å kobles til Skatteetaten og kunne hente data. <br> Signering gjøres via Verified.                                                                                                                                                              |
| B-3      | Tilgang til Altinns test- og produksjonsmiljø (IT).                                     | Bits bestiller API-nøklene på vegne av finansforetaket, og Altinn sender nøklene direkte til foretaket. API-nøklene er nødvendig for å kunne benytte samtykkeløsningen. <br><br> Eksisterende API-nøkler fra andre samtykketjeneste-løsninger kan gjenbrukes. |
| B-4      | Tilgang til Skatteetatens testmiljø.                                                    | Etter avtalene/vilkår er signert, bestiller Bits tilgang til Skatteetaens testmiljø og sender bekreftelse til finansforetaket når tilgangen er opprettet.                                                                                                     |


### C - Integrasjon
I dette kapittelet finner man oversikt over oppgaver som må være gjort før selskapet går over til produksjon.

| Oppgaver |                                                                         |                                                                                                                                                                                                                                                 |
|----------|-------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C-1      | Gjennomføre integrasjonstesten og dokumentere den i rapport-malen (IT). | Se [Integrasjonstest](https://dokumentasjon.dsop.no/dsop_fi_integrasjonstest.html) og gjennomføre alle testcaser samt lage rapport. <br> <br> Finansinstitusjonene skal kunne fremvise rapporten om Skatteetaten, Altinn eller Bits ber om det. |
| C-2      | Informere Bits når integrasjon i test er gjennomført (IT/Forretning).   | Sende en mail til Bits ved [DSOP@bits.no](mailto:dsop@bits.no) med bekreftelse av følgende: <br> <br> - Integrasjonstest er fullført <br> - Rapport for integrasjonstest er laget.                                                              |
| C-3      | Abonnere på varsling fra Altinn, Skatteetaten og Digdir (Alle).         | - [Driftsvarsel Altinn](https://www.altinndigital.no/driftsmeldinger/) <br> - [Driftsvarsel Skatteetaten](https://skatteetaten.github.io/api-dokumentasjon/nyheter-og-driftsvarsler) <br> - [Driftsvarsel Digdir](https://status.digdir.no/)    |


### D - Produksjon
I dette kapittelet finner du oversikt over oppgaver som bør gjøres ifbm. produksjon.

| Oppgaver |                                                                                                                                    |                                                                                                                                                                             |
|----------|------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D-1      | Motta bekreftelse fra Bits om at autorisasjon for Skatteetatens produksjonsmiljø er opprettet.                                     | Finansinstitusjonen er i produksjon.                                                                                                                                        |
| D-2      | Sikre at samtykketeksten (DelegationContext) er iht. kravet fra Skatteetaten (IT/Forretning).                                      | [Skatteetatens krav til samtykkeforespørsel](https://skatteetaten.github.io/api-dokumentasjon/om/samtykke#be-om-samtykke).                                                  |
| D-3      | Det anbefales at finansinstitusjonen kjører først med noen utvalgte kunder/brukere for å bli kjent med data og teste sine rutiner. | Varigheten på denne fasen er avhengig av både volum (som er nødvendig for å teste/verifisere den nye prosessen) og behandlingskompleksiteten finansinstitusjonen har valgt. |


## Endringslogg

| Dato | Endring | Link i dokumentasjon |
|------|---------|----------------------|
|      |         |                      |
