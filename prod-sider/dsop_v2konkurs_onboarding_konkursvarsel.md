---
title: "Onboardingsguide for finansforetak - konkursvarsel"
slug: "dsop_v2konkurs_onboarding_konkursvarsel"
id: "dsop_v2konkurs_onboarding_konkursvarsel"
keywords: ["sample"]
---

*Denne siden skal benyttes av finansinsitusjoner som et referansedokument og navigeringsverktøy som gir tilgang til
informasjon som er nødvendig for en vellykket etablering av Konkursvarsel.*

## Onboardingsprosessen

For å sikre en god integrasjon med Brønnøysundregistrene bør finansforetaket følge prosjektets anbefalte
onboardingsprosess i 4 faser slik den er beskrevet under.

| Prosess                             | Beskrivelse                                                                                                                                                              |
|-------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A - Forberedelse                    | Lese dokumentasjon og vurdere hvordan dette berører finansforetaket og hvordan arbeidet skal organiseres - og når. Igangsette nødvendige tekniske interne bestillinger.  |
| B - Registrering og avtaleinngåelse | finansforetaket registrerer seg hos Bits, hvor Bits administrerer signering av avtaler/vilkår.                                                                           |
| C - Integrasjon                     | finansforetaket starter implementering av tjenestene og utfører nødvendige interne tester og integrasjonstester mot Brønnøysundregistrene før overgangen til produksjon. |
| D - Produksjon                      | finansforetaket går over til produksjon.                                                                                                                                 |

I de neste kapitlene er det også presentert anbefalinger om hvem som burde fullføre hvilke oppgaver:

* IT: IT-spesifikke oppgaver

* Forretning: Oppgaver for forretningssiden som vil implementere løsningen

* Alle: Alle de ovenfor nevnte miljøene.

### A - Forberedelse

I dette kapittelet finner man oversikt over oppgaver som skal/bør utføres før finansforetaket går til registrering og
avtaleinngåelse (B).


| Oppgaver |  |  |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| A-1 | Gå gjennom presentasjon av Konkursbehandling for å forstå hva løsningen kan bety for finansforetaket og hva som må til for å lykkes (Alle) | Se presentasjon [«Introduksjon Konkursbehandling»](https://dokumentasjon.dsop.no/assets/presentasjon_konkurs.pdf). |


### B - Registrering og avtaleinngåelse

| Oppgaver som må være gjort i forkant av *registrering og avtaleinngåelse* |
|---------------------------------------------------------------------------|
| **A-1**                                                                   |

| Oppgaver |  |  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| B-1 | **Registrering for Kontrollinformasjon og Konkursbehandling** <br \/> <br \/> Dersom finansforetak ikke har sendt inn «Registrering for Kontrollinformasjon og Konkursbehandling» i forbindelse med onboarding av Kontrollinformasjon, må registreringsskjema fylles ut og sendes til Bits. | Registreringsskjema sendes til DSOP@bits.no og Bits vil verifisere innholdet i skjemaet.  <br \/><br \/>  Last ned [Registreringsskjema her](assets/Registrering_Hoved_Kontroll_Fellesstandard.docx). |
| B-2 | **Virksomhetssertifikat for test og produksjon** <br \/><br \/> Bestill test- og produksjonsvirksomhetssertifikat for finansforetak (forretning/IT). Det er også mulig å gjenbruke eksisterende test- og produksjonsvirksomhetssertifikat fra finansforetaket. | Finansforetaket må ha gyldig test- og produksjons-virksomhetssertifikater fra enten: <br \/><br \/> - [Buypass](https://www.buypass.no/produkter/virksomhetssertifikat-esegl#oversikt-VID) <br \/> - [Commfides](https://www.commfides.com/commfides-virksomhetssertifikat/) <br \/> <br \/> Virksomhetssertifikatene skal brukes for autentisering. |
| B-3 | **Elektronisk signering av Konkursvarselavtale (vilkårsavtale) med Brønnøysundregistrene (Forretning).** <br \/> <br \/> Finansforetaket blir kontaktet av Bits for å starte elektronisk signering av levering av Konkursvarsel (e-post fra signant.no til signatar som kan forplikte seg på vegne av foretaket). | Signering av avtale gjøres digitalt via signant.no og administreres av Bits. |

### C - Integrasjon

| Oppgaver som må være gjort i forkant av *integrasjon* |
|-------------------------------------------------------|
| **A-1**                                               |
| **B-1, B-2, B-3**                                     |

| Oppgaver |  |  |
| ---------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C-1 | **Implementere Konkursvarsel iht. API-spesifikasjon. (IT)** | Se følgende dokumenter: <br \/><br \/> - [API-spesifikasjon Konkursvarsel](https://dokumentasjon.dsop.no/assets/Konkursvarsel-API-dokumentasjon.html) <br \/> - [API-spesifikasjon Konkursvarsel Swagger](https://bitsnorge.github.io/dsop-konkursvarsel-api) <br \/> - [Funksjonell spesifikasjon](https://dokumentasjon.dsop.no/dsop_v2konkurs_functionalspecification.html) som beskriver leveransene på funksjonelt nivå. |

### D - Produksjon

| Oppgaver som må være gjort i forkant av *produksjon* |
|------------------------------------------------------|
| **A-1**                                              |
| **B-1, B-2, B-3**                                    |
| **C-1**                                              |

| Oppgaver |  |  |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| D-1 | **Bestille tilgang til test- og produksjonsmiljø.** <br \/><br \/> Etter at vilkårsavtale er signert vil Bits bestille tilgang til test- og produksjonsmiljø for finansforetaket. Finansforetaket kan utføre testing, se [Testdata konkursvarsel](https://dokumentasjon.dsop.no/dsop_v2konkurs_test.html), men vil ha tilgang til produksjonsmiljø samtidig. | Bits bekrefter til finansforetaket når tilganger er tildelt. <br \/> <br \/> Finansforetaket er da i produksjon. |

