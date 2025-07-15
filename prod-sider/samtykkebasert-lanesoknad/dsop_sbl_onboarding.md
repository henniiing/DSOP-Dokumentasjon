---
title: "Dsop Sbl Onboarding
id: dsop_sbl_onboarding"
slug: "dsop_sbl_onboarding"
keywords: ["sample"]
sidebar: "main_sidebar
permalink: dsop_sbl_onboarding.html"
folder: "section1"
---

## Kriterier for bruk av SBL

For å ta i bruk SBL må virksomheten tilfredsstille følgende [kriterier](https:/dokumentasjon.dsop.no/samtykkebasert-lanesoknad/dsop_sbl_om#kriterier-for-bruk-av-sbl).

## Registrering

Send utfylt registreringsskjema til [DSOP Support](https:/support.dsop.no/) for å starte prosessen ved å implementere SBL:

* [Registreringsskjema](/assets/SBL_Registreringsskjema_V.1.3.docx)
* [Registreringsskjema, ikke-deltaker av Bits](/assets/SBL_Registreringsskjema_ikke_deltaker_av_Bits_V1.5.docx)

## Onboardingsprosessen

For å sikre en god integrasjon med Altinn og Skatteetaten, samt en god implementering
av de to nevnte SBL prosessene, bør finansinstitusjonene følge prosjektets anbefalte onboardingprosess
slik den er beskrevet under.

Onboarding for en finansinstitusjon består av 5 faser:

| Fase                                     | Beskrivelse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A - Forberedelse                         | Lese dokumentasjon og vurdere hvordan dette berører finansinstitusjonen og hvordan arbeidet skal organiseres - og når. Igangsette nødvendige tekniske interne bestillinger.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| B - Registrering og signering av vilkår  | Utrulling i SBL utføres trinnvis og kontrollert. Finansinstitusjonen registrerer seg hos Bits for signering av Skatteetatens vilkår. Bits er kontakten i denne fasen                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| C - Integrasjon                          | Finansinstitusjonen integrerer seg med Altinns samtykkeløsning og Skatteetaten, og utfører nødvendige integrasjonstester før overgangen til produksjon.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| D - Produksjon                           | Finansinstitusjonen går over til produksjon og må velge hvordan den nye løsningen skal lanseres i markedet.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Tilpasninger                             | Ved hjelp av tilgjengelig dokumentasjon kan finansinstitusjonen igangsette tilpasninger i kundereisen og utføre brukertester. Data som mottas fra Skatteetaten skal lese inn i finansinstitusjonens lånesystemer. Dette kan gjøres med bakgrunn i dokumentasjon i test og deretter verifiseres/forbedres i produksjon basert på økt dataerfaring. Selve kredittscoringen vil i liten grad bli berørt av SBL, men det åpnes en del muligheter for automatisering av denne fasen. Finansinstitusjonen bør tenke på dette i sitt design og samtidig arbeide kontinuerlig med å forbedre automatiseringen.  |

I de neste kapitlene er det også presentert anbefalinger om hvem som burde fullføre hvilke oppgaver:
* IT: IT-spesifikke oppgaver
* Forretning: Oppgaver for forretningssiden som vil implementere SBL
* Kreditt: Oppgaver for kredittmiljøene
* Alle: Alle de ovenfor nevnte miljøene.

### A - Forberedelse

| Oppgaver |  |  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A-1 | Gå gjennom onboardingspresentasjonen for å forstå hva SBL kan bety for finansinstitusjonen og hva som må til for å lykkes (Alle) | Se [Presentasjon SBL](/assets/SBL-Introduksjon-til-SBL.pdf) |
| A-2 | Gå gjennom presentasjonen av SBL-prosessene for å forstå trinnene finansinstitusjonene må implementere i SBL (Alle) | Se [Introduksjon til prosessene](/assets/SBL-presentasjon.pdf) |
| A-3 | Bestille test- og produksjonsvirksomhetssertifikat internt i finansinstitusjonen (forretning/IT) | Finansinstitusjonen må ha gyldig test- og produksjons-virksomhetssertifikater fra offentlig godkjent utsteder, se link til [Virksomhetssertifikater.](https:/skatteetaten.github.io/datasamarbeid-api-dokumentasjon/about_virksomhetssertifikat) 
| A-6 | Lese og forstå dokumentasjonen om samtykkeløsningen fra Altinn og Maskinporten fra Digdir. | Se på [Altinns Samtykkeløsning](https:/altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/) <br  /> <br  /> <br  /> - API-referanse (IT og eventuelt kreditt) <br  />[Summert Skattegrunnlag](https:/skatteetaten.github.io/api-dokumentasjon/api/summertskattegrunnlag) <br  /> [Summert Skattegrunnlag](https:/skatteetaten.github.io/api-dokumentasjon/api/summertskattegrunnlag?tab=Informasjonsmodell) 
| C-1 | Gjennomføre integrasjonstesten og dokumentere den i rapport-malen (IT). | Se [Integrasjonstest](/dsop_sbl_integrasjonstest) og gjennomføre alle testcaser samt lage rapport. 
| C-2 | Informere Bits når integrasjon i test er gjennomført (IT/Forretning) | Sende en mail til Bits ved [DSOP Support](https:/support.dsop.no/) med bekreftelse av følgende: <br  /> <br  /> 