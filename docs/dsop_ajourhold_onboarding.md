---
title: "Onboarding"
slug: "dsop_ajourhold_onboarding"
id: "dsop_ajourhold_onboarding"
keywords:
  - "sample"
---

*Denne siden skal benyttes av pensjoninnretningene som et navigeringsverktøy som gir tilgang til informasjon som er nødvendig for en vellykket etablering av løsningen.*

## Kriterier for bruk av tjenesten

For å ta i bruk *Data for ajourhold av OTP i privat sektor* må virksomheten tilfredsstille følgende [kriterier](https://dokumentasjon.dsop.no/dsop_ajourhold_om.html#kriterier-og-hjemmelsgrunnlag-pensjonsinnretningene-har-for-tilgang-til-data-for-tjenesten).

## Registrering

Send utfylt registreringsskjema via [saksbehandlerportalen](https://online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi) for å starte prosessen med å implementere tjenesten:

* [Registreringsskjema](assets\Registreringsskjema - Ajourhold av OTP (medlem av BLP V.1).docx)
* [Registreringsskjema, ikke-deltaker av Bits (BLP)](assets\Registreringsskjema - Ajourhold av OTP (ikke medlem av BLP V.1).docx)

## Onboarding
For å sikre en god integrasjon med Skatteetaten og NAV (heretter "etatene"), Digdir og Altinn, samt en god implementering av tjenesten *Data for ajourhold av OTP i privat sektor*, bør selskapene følge prosjektets anbefalte onboardingprosess slik den er beskrevet under.

Onboarding for et selskap består av 4 faser:

|Prosess					|Beskrivelse|
|-----------------------------------------|------------------------------------|
|A - Forberedelse							| Lese dokumentasjon og vurdere hvordan dette berører pensjoninnretningene og hvordan arbeidet skal organiseres - og når. <br><br>Igangsette nødvendige tekniske interne bestillinger.  |
|B - Registrering<br> og avtale-<br>inngåelse         | Pensjonsinnretningene registrerer seg hos Bits, hvor Bits administrerer signering av avtaler/vilkår. |
|C - Integrasjon             | Pensjonsinnretningene starter implementering av tjenestene og utfører nødvendige interne tester og integrasjonstester mot etatene før overgangen til produksjon.  |
|D - Produksjon            | Pensjonsinnretningene går over til produksjon. |


I de neste kapitlene er det også presentert anbefalinger om hvem som burde fullføre hvilke oppgaver:

* IT: IT-spesifikke oppgaver

* Forretning: Oppgaver for forretningssiden som vil implementere løsningen

* Alle: Alle de ovenfor nevnte miljøene

* Bits: Forvaltning hos Bits gjennomfører oppgaven


### A - Forberedelse

*I dette kapittelet finner man oversikt over oppgaver som skal/bør utføres før pensjoninnretningene går til registrering og avtaleinngåelse (B).*

| Oppgaver|
|-----|
|A-1|**Lese og forstå dokumentasjonen fra etatene. (Alle)** | Se [om tjenesten](https://dokumentasjon.dsop.no/dsop_ajourhold_om.html), [Informasjonsmodeller, API og testdata Skatteetaten](https://dokumentasjon.dsop.no/dsop_skatteetaten_api.html) og [Informasjonsmodell, API og testdata NAV](https://dokumentasjon.dsop.no/dsop_Nav_api.html). <br>Sidene forklarer hva tjenesten er og hvilken informasjon som leveres.|
|A-2| **Bestille test- og produksjonsvirksomhetssertifikat for pensjonsinnretning (forretning/IT)** | Pensjoninnretningen må ha gyldig test- og produksjons-virksomhetssertifikater fra enten [Buypass](https://www.buypass.no/produkter/virksomhetssertifikat-esegl#oversikt-VID) eller [Commfides](https://www.commfides.com/commfides-virksomhetssertifikat/) <br> <br> Virksomhetssertifikatene skal brukes til autentisering i Maskinporten. <br><br> Det er også mulig å gjenbruke eksisterende test- og produksjonsvirksomhetssertifikat.<br><br>[Les mer om virksomhetssertifikat her.](https://www.bits.no/document/bits-buypass-commfides-business-certificates-an-introduction/) |
|A-3| **Sette seg inn i integrasjoner og nødvendige forutsetninger for å benytte Maskinporten. (Forretning/IT)**   |Maskinporten brukes til å autorisere tilgang til etatenes API-er. Se følgende linker: <br><br> [Maskinporten](https://samarbeid.digdir.no/maskinporten/maskinporten/25) <br><br> [Ta i bruk Maskinporten](https://samarbeid.digdir.no/maskinporten/ta-i-bruk-maskinporten/97)<br><br>[Slik bruker du Maskinporten som API-konsument](https://docs.digdir.no/maskinporten_guide_apikonsument.html)<br><br> [Bruksvilkår maskinporten](https://samarbeid.digdir.no/maskinporten/bruksvilkar-private-kunder-i-maskinporten/73)  <br><br>|
|A-4| **Sette seg inn i testmiljøene og integrasjonstest som skal fullføres i forkant av prodsetting (IT)**    | Se [Integrasjonstest](assets/Integrasjonstest_Ajourhold_av_OTP_testdata_og_testcaser_V.1.xlsx) samt [Testmiljøer](https://dokumentasjon.dsop.no/dsop_ajourhold_integrasjonstest.html#test--og-prodmilj%C3%B8er) Testcasene må utføres før pensjonsinnretningen kan gå over til produksjon.|
|A-5| **Tilrettelegge for neste fase ved å bestille nødvendige utviklings- og testmiljøer (IT)**   | Intern aktivitet for pensjonsinnretningen.|
|A-6| **Se testdata (IT).**   | [Testdata](https://skatteetaten.github.io/api-dokumentasjon/api/tjenestepensjonsavtale?tab=Test) (felles for Skatteetaten og NAV) <br><br> NB: For pensjonskasser med tredjepartsleverandører må det ifb. generering av testdatasettet påberegnes noe lengre tidsløp, da generering av testdata krever ekstra tilrettelegging i Altinns testmiljø (TT02).|
|A-7| **Tilrettelegge for neste fase ved å bestille nødvendige brannmuråpninger for både test og produksjon (IT)**  | Intern aktivitet for pensjonsinnretningen.|
|A-8| **Design og planlegging hos den enkelte pensjonsinnretning for tilpasning av løsningen internt (Alle)** | Intern aktivitet for pensjonsinnretningen.|


### B - Registrering og avtaleinngåelse

*I dette kapittelet finner man oversikt over oppgaver som må være gjort før pensjoninnretning går over til integrasjonstesting.*

| Oppgaver|
|-----|
|B-1| **Pensjoninnretning registrerer seg i Aa-registeret hos NAV (Forretning)** | **Ønsket tilgang til Aa-registeret for Pensjonsinnretning hos NAV**: [Registrer for tilgang Aa-registeret](https://navikt.github.io/aareg/om_tjenestene/soke_om_tilgang.html) <br><br> **Hva Pensjonsinnretningen skal fylle ut i søknaden hos NAV**: <br> -	Hjemmel: «FOR-2008-08-18-942 om Arbeidsgiver- og arbeidstakerregisteret § 10 første ledd bokstav c» <br><br> - Formål: «Til bruk i arbeidet med pensjonsordning etter innskuddspensjonsloven, foretakspensjonsloven eller tjenestepensjonsloven» <br><br> - Behandlingsgrunnlag: "Avtale mellom arbeidsgiver/oppdragsgiver og pensjonsinnretningen om gjennomføring av arbeidsgivers/oppdragsgivers plikt om tjenestepensjonsordning for ansatte etter LOV-2005-12-21-124 - Lov om obligatorisk tjenestepensjon (OTP-loven) § 2 jf. § 1 jf. personvernforordningen artikkel 6 nr. 1 bokstav b og f." <br><br> -	[Dataelementer](assets/Vedlegg_til_soknad_om_tilgang_til_Aa_-_registeret_for_OTP.pdf) (dette dokumentet må lastes opp i søknaden og er tilpasset ut fra hvilken informasjon som inngår i tjenestene). <br><br> - [Bruksvilkårene som må godkjennes i søknaden ligger her](https://www.nav.no/_/attachment/inline/2bbc1825-2cbf-4e41-98a7-50fe31a4803b:581f8eece35fcb84f32a64db735932b486c8a853/Bruksvilk%C3%A5r%20for%20tilgang%20til%20Aa-registeret%20-%20v.%201.3.pdf) <br><br> -	Kontaktpersoner må oppgis <br><br> -	For konsumenter som bruker ekstern databehandler, må organisasjonsnummer til databehandler oppgis (hovedenheten). <br><br> -	Hvilken tilgang: API|
|B-2| **Pensjoninnretning fyller ut registreringsskjemaet og sender det til Bits (Forretning)** | Fyll ut [registreringsskjema](https://dokumentasjon.dsop.no/dsop_ajourhold_onboarding.html#registrering). Ferdig utfylt skjema sendes til Bits via [saksbehandlerportalen](https://online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi). <br><br> Bits vil verifisere innholdet i skjemaet og vil på bakgrunn av godkjent registreringsskjema starte prosess for elektronisk avtaleinngåelse. |
|B-3| **Pensjoninnretning melder seg inn i Maskinporten og signerer bruksvilkår for Maskinporten elektronisk. (IT/Forretning)** <br><br> *Dersom pensjoninnretning har oppgitt tredjepart i registreringsskjema skal tredjepart utføre denne prosessen.* | [Ta i bruk Maskinporten.](https://samarbeid.digdir.no/maskinporten/ta-i-bruk-maskinporten/97)<br><br> Dersom tredjepart skal implementere løsningen er det kun deres organisasjon som trenger å signere bruksvilkår og opprette tilgang i Maskinporten sin samarbeidsportal. |
|B-4| **Elektronisk signering av tilknytningsavtale og tjenestebeskrivelse (Bits/Forretning)** | Tilknytningsavtalen signeres for å ta del i DSOP. Tjenestebeskrivelsen inneholder bruksvilkårene for tjenestene og underbilag. I tillegg skal det signeres en standard tilslutningserklæring ved påkobling til tjenesten. <br><br> Elektronisk signering initieres når mottatt registreringsskjema godkjennes av Bits, og gjennomføres i Verified. Verified er en tjeneste som brukes for å signere elektroniske dokumenter ved bruk av elektronisk id. |
|B-5| **Bestille tilgang til testmiljø Altinn (Bits)**| Bits bestiller tilgang til TT02 (testmiljø) for pensjoninnretningene. Dersom pensjonsinnretningen har oppgitt bruk av tredjepartsleverandør i registreringsskjema vil det også bestilles testbruker med delegeringsrettigheter som skal brukes i steg B-6. |
|B-6| **Bestille tilgang til testmiljø etatene (Bits)**| Bits bestiller tilgang til testmiljøet til Skatteetaten for pensjoninnretningene. Basert på bestillingen gis tilgang til API-ene, samt tilgang til Maskinporten og scopene for tjenesten.<br><br> Dersom pensjoninnretning benytter tredjepart får både tredjepart og pensjoninnretning, som de implementerer på vegne av, tilgang til etatenes scope i Maskinporten. Det er kun tredjepart som må legge opp integrasjonen i sin samarbeidsportal.<br><br> Dette kan ta opptil 1-3 virkedager.|
|B-7| **Delegere tilgang til tredjepart/tredjepart i Altinn (IT/Forretning)**| Denne prosessen gjelder kun for pensjoninnretning som benytter tredjeparter, og hvor tredjepart skal benytte sitt virksomhetssertifikat mot Maskinporten. <br><br> **Rettigheter som skal tildeles:** <br>- Inntektsmottakere API<br>- Tjenestepensjonsavtale API<br>- Aa-registeret OTP API<br>- Inntekt API - På vegne av <br><br> Testmiljø: Pensjonsinnretningene bruker testbrukeren oppgitt i steg B-4 som er registrert som daglig leder for foretaket i Altinns TT02-miljø for å delegere tilgang til tredjepart. Ta kontakt med Bits via [saksbehandlerportalen](https://online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi) dersom dere ikke har testbruker registrert for deres foretak i TT02.  <br><br> Produksjonsmiljø: Bemyndiget person hos Pensjoninnretning må delegere tilgang til tredjepart i Altinn. Se her for [veiledning for å delegere tilgang i Altinn](assets/Veiledning_delegering_Altinn.pdf).|
|B-8| **Registrering i NAV og innhenting av subscription key**|[API portal](https://api-portal.nav.no/)<br>Følg stegene for opprettelse av abonnement.


### C - Påkobling til test og integrasjonstesting
*I dette kapittelet finner man oversikt over oppgaver som må være gjort før pensjoninnretning går over til produksjon.*


| Oppgaver|
|---|
|C-1|**Tilgang til test (Bits)**| Bits får bekreftelse fra etatene om tilgang er gitt og informerer dermed pensjoninnretning at de er i test.
|C-2|**Maskinporten (IT)**| Se A-3 |
|C-3|**Etatenes API (IT)**| [Skatteetaten](https://dokumentasjon.dsop.no/dsop_skatteetaten_api.html#skatteetatens-api) og [Nav](https://dokumentasjon.dsop.no/dsop_Nav_api.html#navs-api) |
|C-4|**Gjennomføre integrasjonstesten (IT)**|[Integrasjonstest](assets/Ajourhold_av_OTP_Integrasjonstest_rapport_V.1.0.docx) er et sett med testcaser som pensjoninnretning må utføre før de kan gå i produksjon. |
|C-6|**Abonnere på varslinger (IT/Forretning)**| [Skatteetaten](https://skatteetaten.github.io/api-dokumentasjon/nyheter-og-driftsvarsler)<br>[NAV](https://navikt.github.io/aareg/om_tjenestene/nyheter_og_driftsvarsler.html) <br> [Altinn](https://www.altinndigital.no/driftsmeldinger/)<br> [Digdir](https://status.digdir.no/) |
|C-7|**Pensjoninnretning sender bekreftelse til Bits om at pensjoninnretning er klar for produksjon (Forretning/IT)** <br>*Informere Bits når integrasjon i test er gjennomført (IT/Forretning)*|Send melding via [saksbehandlingsportalen](https://online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi) med bekreftelse av følgende: <br><br> - Integrasjonstest er fullført <br> - Rapport for integrasjonstest er laget | 

### D - Påkobling til produksjon
*I dette kapittelet finner du oversikt over oppgaver som bør gjøres i forbindelse med produksjon.*

|Oppgaver|
|------------|
|D-1| **Motta bekreftelse fra etatene om at tilgang til eteatenes produksjonsmiljø er opprettet. (IT)** | Bits får bekreftelse fra etatene om tilgang er gitt og informerer dermed pensjoninnretning at de er i produksjon. |
|D-2| **Forvaltningsrutiner (Forretning)** | Tjenestens [Forvaltningsrutiner](https://dokumentasjon.dsop.no/dsop_ajourhold_forvaltningsrutiner.html) skal innarbeides hos pensjonsinnretningen. Blant annet gjelder dette å tilrettelegge for at alle feilmeldinger, spørsmål til dokumentasjon og endringsønsker sendes til Bits via [saksbehandlerportalen](https://online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi) |

## Endringslogg

| Dato         | Endring  | Link i dokumentasjon|
|-------------| ------------------------|
|04.04.23    | Oppdatert linker til skatteetatens Github | A6 og C6 |
|02.11.21    | Oppdatert C2/3| [C2 og C3](http://127.0.0.1:4000/dsop_ajourhold_onboarding.html#c---p%C3%A5kobling-til-test-og-integrasjonstesting)|
