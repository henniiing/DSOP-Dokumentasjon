---
title: "Dsop Fi Onboarding
id: dsop_fi_onboarding"
slug: "dsop_fi_onboarding"
keywords: ["sample"]
sidebar: "beta_sidebar
permalink: dsop_fi_onboarding.html"
folder: "section1"
---

## Kriterier for bruk av Fremtidens Innkreving - Krav og Betalinger

Kun finansforetak som er med i prosjektet som pilotbank kan ta i bruk tjenesten Fremtidens Innkreving - Krav og
betalinger (FI-K&amp;B).

## Registrering

Kontakt [[DSOP@bits.no](mailto:DSOP@bits.no)](mailto:dsop@bits.no) for å få tilsendt registreringsskjema for å starte prosessen med å
implementere FI-K&amp;B.

## Onboardingsprosessen

For å sikre en god integrasjon med Altinn og Skatteetaten, samt en god implementering
av de to nevnte prosessene, bør finansinstitusjonene følge prosjektets anbefalte onboardingprosess
slik den er beskrevet under.

Onboarding for en finansinstitusjon består av 5 faser:

| Fase                                    | Beskrivelse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A - Forberedelse                        | Lese dokumentasjon og vurdere hvordan dette berører finansinstitusjonen og hvordan arbeidet skal organiseres - og når. Igangsette nødvendige tekniske interne bestillinger.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| B - Registrering og signering av vilkår | Utrulling utføres trinnvis og kontrollert. Finansinstitusjonen registrerer seg hos Bits for signering av Skatteetatens vilkår. Bits er kontakten i denne fasen.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| C - Integrasjon                         | Finansinstitusjonen integrerer seg med Altinns samtykkeløsning og Skatteetaten, og utfører nødvendige integrasjonstester før overgangen til produksjon.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| D - Produksjon                          | Finansinstitusjonen går over til produksjon og må velge hvordan den nye løsningen skal lanseres i markedet.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

I de neste kapitlene er det også presentert anbefalinger om hvem som burde fullføre hvilke oppgaver:
* IT: IT-spesifikke oppgaver
* Forretning: Oppgaver for forretningssiden som vil implementere FI-K&amp;B
* Alle: Alle de ovenfor nevnte miljøene.

### A - Forberedelse
I dette kapittelet finner man oversikt over oppgaver som skal/bør utføres før selskapet går til registrering og avtaleinngåelse (B).

| Oppgaver |  |  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| A-1 | Lese og forstå dokumentasjonen fra Skatteetaten (Alle). | Se [Krav og betalinger API](https:/skatteetaten.github.io/api-dokumentasjon/api/kravogbetalinger). |
| A-2 | Lese og forstå dokumentasjonen om samtykkeløsningen fra Altinn og Maskinporten fra Digdir (IT). | Se [Altinns Samtykkeløsning](https:/altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/) <br  /> <br  /> [Commfides](https:/www.commfides.com/commfides-virksomhetssertifikat/)
| B-1 | Finansforetaket fyller ut registreringsskjemaet og sender det til Bits (Forretning). | - Registreringskjema sendes til DSOP@bits.no. 
| B-2 | Selskapet blir kontaktet av Bits for å starte elektronisk avtaleinngåelse (Forretning). | Nødvendig for å kobles til Skatteetaten og kunne hente data. <br  /> 
| C-3 | Abonnere på varsling fra Altinn, Skatteetaten og Digdir (Alle). | - [Driftsvarsel Altinn](https:/www.altinndigital.no/driftsmeldinger/) 