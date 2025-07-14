---
title: "Onboarding"
slug: "dsop_su_onboarding"
id: "dsop_su_onboarding"
keywords: ["sample"]
---

## Kriterier for bruk av SSU
For å ta i bruk SSU må virksomheten tilfredsstille følgende [kriterier](https://dokumentasjon.dsop.no/dsop_su_om.html#kriterier-for-bruk-av-ssu).

## Registrering
Send utfyllt registreringsskjema til Bits via [saksbehandlerportalen](https://online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi) for å starte prosessen for å implementere SSU:
* [Registreringskjema til SSU](assets\Registreringsskjema - Syke- og uforeopplysninger fra NAV - medlem av BLP.docx)
* [Registreringskjema til SSU, ikke-deltaker i Bits (BLP)](assets\Registreringsskjema - Syke- og uforeopplysninger fra NAV - ikke medlem av BLP.docx)

## Onboardingsprosessen
For å sikre en god integrasjon med Altinn, Digdir og NAV, samt en god implementering av tjenestene under Syke- og Uføreopplysninger fra NAV (heretter kalt SSU), bør selskapene følge prosjektets anbefalte onboardingprosess slik den er beskrevet under.

Onboarding for et selskap består av 4 faser:

|Prosess					|Beskrivelse					|
|-----|-----|
|A - Forberedelse					| Lese dokumentasjon og vurdere hvordan dette berører selskapet og hvordan arbeidet skal organiseres - og når. Igangsette nødvendige tekniske interne bestillinger.|
|B - Registrering og signering av vilkår				|Selskapene registrerer seg hos Bits. Bits administrerer signering av avtalene som koordinatoransvarlig i denne fasen.|
|C - Integrasjon					|Selskapene integrerer seg med Altinns samtykkeløsning, Digdir og NAV, og utfører nødvendige integrasjonstester før overgangen til produksjon.|
|D - Produksjon					|Selskapene går over til produksjon og må selv velge hvordan den nye løsningen skal lanseres i markedet.

I de neste kapitlene er det også presentert anbefalinger om hvem som burde fullføre hvilke oppgaver:
* IT: IT-spesifikke oppgaver.
* Forretning: Oppgaver for forretningssiden som vil implementere SSU.
* Alle: Alle de ovenfor nevnte miljøene.

### A - Forberedelse
I dette kapittelet finner man oversikt over oppgaver som skal/bør utføres før selskapet går til registrering og avtaleinngåelse (B).

| Oppgaver |  |  |------------|------|
| A-1 | Gå gjennom onboardingspresentasjonen for å forstå hva SSU kan bety for selskapet og hva som må til for å lykkes (Alle). | [Presentasjon til SSU](assets/SSUPresentasjon.pdf) |
| A-2 | Gå gjennom presentasjonen av SSU-prosessene for å forstå trinnene selskapene må implementere i SSU (Alle). | [Introduksjon til prosessen](assets/SSU_Introduksjon_til_prosessene.pdf) |
| A-3 | Bestille test- og produksjonsvirksomhetssertifikat (tot. 2 stk) for selskapet (forretning/IT). Det er mulig å gjenbruke eksisterende test- og produksjonsvirksomhetssertifikat fra selskapet. | Selskapet må ha gyldig test- og produksjonsvirksomhetssertifikat fra enten:<br \/> [Buypass](https://www.buypass.no/produkter/virksomhetssertifikat-esegl#oversikt-VID) <br \/> eller <br \/> [Commfides](https://www.commfides.com/commfides-virksomhetssertifikat/)<br \/><br \/>[Les mer om virksomhetssertifikat her.](https://www.bits.no/document/bits-buypass-commfides-business-certificates-an-introduction/) |
| A-4 | Sette seg inn i integrasjoner og nødvendige forutsetninger for å benytte Maskinporten. (Forretning/IT)<br \/><br \/><br \/> * *Selskapet må signere brukervilkår før de kan ta i bruk Digdirs selvbetjeningsportal* | Maskinporten brukes til å autentisere Selskapet og autorisere tilgang til NAV sine API'er.<br \/> [Ta i bruk maskinporten](https://docs.digdir.no/docs/Maskinporten/maskinporten_sjolvbetjening_web#opprette-bruker) <br \/><br \/> [Signering private brukervilkår](https://samarbeid.digdir.no/maskinporten/bruksvilkar-private-kunder-i-maskinporten/73)  <br \/><br \/> [API Spesifikasjon Maskinporten](https://docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument) <br \/> Selskapene skal benytte TEST miljø. URLer og andre parameter finner du under [Metadata](https://docs.digdir.no/docs/Maskinporten/maskinporten_func_wellknown) |
| A-5 | Tilrettelegge for neste fase ved å bestille nødvendige brannmur-åpninger for både test og produksjon (IT). | Dette er selskap-intern bestilling. |
| A-6 | Lese og forstå dokumentasjonen om Altinns samtykkeløsning (IT). | Se [Altinns Samtykkeløsning](https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/be-om-samtykke/#integrere-seg-mot-ny-samtykkel%C3%B8sning/) <br \/><br \/> Informasjon [Kom igang med REST API](https://altinn.github.io/docs/api/rest/kom-i-gang/#autentisering) |
|A-7             |Lese og forstå dokumentasjonen fra NAV: <br \/> - API-referanse (IT)<br \/> - Begreper for tjenestene (Alle)| Se [NAV API Portal](https://api-portal.nav.no/)<br \/><br \/> Tjenesten har følgende API'er: <br \/> AAP:<br \/> - [Vedtaksliste](https://api-portal.nav.no/docs/services/nav-arbeid-v1-aap/operations/finnVedtakListe)<br \/> - [Meldekort](https://api-portal.nav.no/docs/services/nav-arbeid-v1-aap/operations/finnMeldekortListe?)<br \/><br \/> [Uføretrygd](https://api-portal.nav.no/docs/services/nav-helse-v1-uforeopplysninger/operations/getUforedataUsingGET)

### B - Registrering og signering av avtaler og vilkår
I dette kapittelet finner man oversikt over oppgaver som må være gjort før selskapet går over til integrasjon.

| Oppgaver |  |  |----------|-------|
|B-1              |Finansforetaket fyller ut registreringsskjemaet og sender det til Bits. <br \/> (Forretning) | - Registreringskjema sendes til Bits via [saksbehandlerportalen](https://online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi) <br \/><br \/> - Bits verifiserer innholdet i skjemaet,registrerer og behandler søknaden.
|B-2              |Selskapet blir kontaktet av Bits for å starte elektronisk avtaleinngåelse (Forretning). <br \/><br \/> | Nødvendig for å kobles til NAV og kunne hente data. <br \/> Signering gjøres via Verified.
| B-3 | Tilgang til Altinns test- og produksjonsmiljø (IT). | Bits bestiller API-nøklene på vegne av finansforetaket, og Altinn sender nøklene direkte til foretaket. API-nøklene er nødvendig for å kunne benytte samtykkeløsningen. |
|B-4			  |Tilgang til NAVs testmiljø |Når avtalene er signert bestiller Bits tilgang til NAVs testmiljø og sender bekreftelse til selskapet når tilgangen er opprettet.
|B-5				|Registrering i NAV og innhenting av subscription key|[API portal](https://api-portal.nav.no/)<br \/>Følg stegene for opprettelse av abonnement.

### C - Integrasjon
I dette kapittelet finner man oversikt over oppgaver som må være gjort før selskapet går over til produksjon.

| Oppgaver |  |  |
| ----- | --- | ----- |
| C-1 | Gjennomføre integrasjonstesten og dokumentere den i rapport-malen (IT). | Se [Integrasjontest](https://dokumentasjon.dsop.no/dsop_su_integrasjontest.html) og gjennomføre alle testcaser samt lage rapport. [Testpersoner](https://dokumentasjon.dsop.no/dsop_su_integrasjontest.html#testbrukere) for integrasjonstesten. <br \/> <br \/> Selskapene skal kunne fremvise rapporten dersom NAV, Altinn, Digdir eller Bits ber om det. |
|C-2				|Informere Bits når integrasjon i test er gjennomført (IT/Forretning)| Send melding til Bits via [saksbehandlingsportalen](https://online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi) med bekreftelse av følgende: <br \/><br \/> - Integrasjonstest er fullført <br \/> - Rapport for integrasjonstest er laget <br \/> - Verifiser domene(r) som skal registreres for produksjonsmiljø.
|C-3				|Abonnere på varsling fra Altinn og Digdir (Alle)| [Driftsvarsel Altinn og Digdir](https://status.digdir.no/)

### D - Produksjon
I dette kapittelet finner du oversikt over oppgaver som bør gjøres ifbm. med produksjon.

| Oppgaver |  |  |--------|-----		|
|D-1             	|Kontakte Bits for å få tilgang til produksjon (Forretning) <br \/> Koble til prod i selvbetjeningsportalen (maskinporten)| (Teknisk) Se [C-2](https://dokumentasjon.dsop.no/dsop_su_onboarding.html#c-integrasjon) <br \/><br \/> [Selvbetjeningsportalen](https://docs.digdir.no/maskinporten_sjolvbetjening_web.html#tilgang-i-produksjonsmilj%C3%B8)
| D-2 | Sikre at samtykketeksten (DelegationContext) er iht. kravet fra NAV (IT/Forretning). | Integrere seg mot [Samtykkeløsningen](https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/be-om-samtykke/#integrere-seg-mot-ny-samtykkeløsning) <br \/> <br \/> se [NAVs Samtykke URL parametere](https://api-portal.nav.no/integrasjonsguide/altinn) |
| D-3 | Det anbefales at selskapene kjører først noen søknader med ansatte og utvalgte kunder/brukere for å bli kjent med data og teste sine rutiner. | Varigheten på denne fasen er avhengig av både volum (som er nødvendig for å teste/verifisere den nye prosessen) og behandlingskompleksiteten selskapene har valgt. |

### Tilpasninger

| Oppgaver som med fordel kan være gjort i forkant av integrasjon. |  |  |-----|------|
| - Det anbefales at selskapene gjennomfører en brukertest for å kunne se hvordan brukere reagerer til den nye måten melde å søke/melde sin forsikring.<br \/><br \/> - Strategi for digitalisering av utbetaling av forsikring i forsikringsselskapet.|

## Endringslogg

| Dato         | Endring i dokumentasjon   |
|-------------| ------------------------|
|  05.01.2021 |[Onboardingsprosess A-4](https://dokumentasjon.dsop.no/dsop_su_onboarding.html#a-forberedelse) |
