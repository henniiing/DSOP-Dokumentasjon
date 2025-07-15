---
title: "Dsop Saldostudielan Onboarding"
id: "dsop_saldostudielan_onboarding"
slug: "dsop_saldostudielan_onboarding"
---

﻿---
title: Onboardingsguide saldo på studielån
keywords: sample
sidebar: main_sidebar
permalink: dsop_saldostudielan_onboarding.html
folder: section1
---


*Denne siden skal benyttes av virksomhetene som et navigeringsverktøy som gir tilgang til informasjon som er nødvendig for en vellykket etablering av løsningen.*

## Onboardingsprosessen
For å sikre en god integrasjon med Lånekassen skal virksomhetene følge anbefalte onboardingsprosess i 4 faser slik den er beskrevet under.   

| Prosess                             | Beskrivelse                                                                                                                                                                     |
|-------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A - Forberedelse                    | Lese dokumentasjon og vurdere hvordan dette berører virksomhetenen og hvordan arbeidet skal organiseres - og når. <br > Igangsette nødvendige tekniske interne bestillinger. |
| B - Registrering og avtaleinngåelse | Virksomheten registrerer seg hos Bits, hvor Bits administrerer signering av avtaler/vilkår.                                                                                     |
| C - Integrasjon                     | Virksomheten starter implementering av tjeneste og utfører nødvendige interne tester og integrasjonstester mot Lånekassen før overgangen til produksjon.                        |
| D - Produksjon                      | Virksomheten går over til produksjon.                                                                                                                                           |


I de neste kapitlene er det også presentert anbefalinger om hvem som burde fullføre hvilke oppgaver:  

* IT: IT-spesifikke oppgaver

* Forretning: Oppgaver for forretningssiden som vil implementere løsningen

* Alle: Alle de ovenfor nevnte miljøene.

* Bits: Personale hos Bits gjennomfører oppgaven


### A - Forberedelse

*I dette kapittelet finner man oversikt over oppgaver som skal/bør utføres før virksomheten går til registrering og avtaleinngåelse (B).*

| Oppgaver |                                                                                                                      |
|----------|----------------------------------------------------------------------------------------------------------------------|
| A-1      | **Lese og forstå dokumentasjonen fra Lånekassen. (Alle)**                                                            | Se [Saldo på studielån](/dsop_saldostudielan_om) og [Informasjonsmodell](/dsop_saldostudielan_informasjonsmodellLanekassen)  Sidene forklarer hva tjenesten er og hvilken informasjon som leveres.|
| A-2      | **Bestille test- og produksjonsvirksomhetssertifikat for virksomhet (forretning/IT)**                                | Virksomheten må ha gyldig test- og produksjons-virksomhetssertifikater fra enten [Buypass](https:/www.buypass.no/produkter/virksomhetssertifikat-esegl#oversikt-VID) eller [Commfides](https:/www.commfides.com/commfides-virksomhetssertifikat/) <br > Det er også mulig å gjenbruke eksisterende test- og produksjonsvirksomhetssertifikat.<br >[Les mer om virksomhetssertifikat her.](https:/www.bits.no/document/bits-buypass-commfides-business-certificates-an-introduction/) |
| A-3      | **Sette seg inn i integrasjoner og nødvendige forutsetninger for å benytte Maskinporten. (Forretning/IT)**           |Maskinporten brukes til å autorisere tilgang til Lånekassens API. Se: <br > [Slik bruker du Maskinporten som API-konsument](https:/docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument)|
| A-4      | **Lese og forstå dokumentasjonen om Altinns samtykkeløsning. (Forretning/IT)**                                       | Se [Altinns samtykkeløsning](https:/altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/komme-i-gang/).|
| A-5      | **Sette seg inn i integrasjonstest som skal fullføres i forkant av prodsetting (IT)**                                | Se [Integrasjonstest](/assets/Saldostudielan_integration_test.xlsx). Oversikt over alle test caser som skal gjennomføres før virksomhet kan gå over til produksjon.|
| A-6      | **Tilrettelegge for neste fase ved å bestille nødvendige utviklings- og testmiljøer (IT)**                           | Dette er en virksomhet-intern aktivitet.|
| A-7      | **Se oversikt over tilgjengelige testbrukere (IT/Kreditt).**                                                         | [Testdata](https:/dokumentasjon.dsop.no/dsop_saldostudielan_integrasjonstest.html#testkunder)|
| A-8      | **Tilrettelegge for neste fase ved å bestille nødvendige brannmur-åpninger for både test og produksjon (IT)**        | Dette er en virksomhet-intern aktivitet.|
| A-9      | **Design og planlegging internt i virksomheten for tilpasning av saldo på studielån i nettbank og mobilbank (Alle)** | |



### B - Registrering og avtaleinngåelse

*I dette kapittelet finner man oversikt over oppgaver som må være gjort før virksomheten går over til integrasjonstesting.*

| Oppgaver |                                                                                                                                                                                                                                                                                                                                            |
|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| B-1      | **Virksomheten fyller registreringsskjemaet og sender det til Bits (Forretning)** <br > [Registreringsskjema ikke-deltaker av Bits AS](/assets/Registreringsskjema_saldo_studielan_ikkedeltaker.docx).<br > Bits vil verifisere innholdet i skjemaet og vil på bakgrunn av godkjent registreringsskjema starte prosess for elektronisk avtaleinngåelse. <br >- Organisasjonsnummer <br >- Ulike kontaktpersoner i virksomheten <br >- Domener for test-miljø <br >- Navn på eventuelle virksomhet som konsumenten signerer på vegne av|
| B-2      | **Virksomheten melder seg inn i Maskinporten og signerer bruksvilkår for Maskinporten elektronisk. (IT/Forretning)** <br > Dersom tredjepart skal implementere løsningen er det kun deres organisasjon som trenger å signere bruksvilkår og opprette tilgang i Maskinporten sin samarbeidsportal. |
| B-3      | **Elektronisk signering av tjenestebeskrivelse (Bits/Forretning)**                                                                                                                                                                                                                                                                         |Tjenestebeskrivelsen inneholder bruksvilkårene for tjenestene og underbilag. <br > Virksomheten blir kontaktet av Bits for å starte elektronisk avtaleinngåelse. |
| B-4      | **Bestille tilgang til testmiljø Altinn (Bits)**                                                                                                                                                                                                                                                                                           | Bits bestiller API-nøklene på vegne av virksomheten, og Altinn sender nøklene direkte til foretaket. API-nøklene er nødvendig for å kunne benytte samtykkeløsningen.<br >Dersom virksomheten benytter tredjepart, og tredjepart skal benytte sitt eget virksomhetssertifikat, må egne API-nøkler for tredjepart bestilles. <br > Tredjepart får ikke direkte tilgang til tjenesten (5498_1) i Altinn, og kan kun hente på samtykke på vegne av bank som har fått tilgang til tjenesten.|
| B-5      | **Bestille tilgang til testmiljø Lånekassen (Bits)**                                                                                                                                                                                                                                                                                       | Bits bestiller tilgang til testmiljø hos Lånekassen for virksomheten. Basert på bestillingen gir Lånekassen tilgang til API’et, samt tilgang til Maskinporten og samtykkeløsningen for saldo på studielån.<br > Dersom virksomheten benytter tredjepart får både tredjepart og virksomhetene, som de implementerer på vegne av, tilgang til Lånekassens scope i Maskinporten. Det er kun tredjepart som må legge opp integrasjonen i sin samarbeidsportal.<br > Dette kan ta opptil 1-3 virkedager.|
| B-6      | **Delegere tilgang til tredjepart/tredjepart i Altinn (IT/Forretning)**                                                                                                                                                                                                                                                                    | Denne prosessen gjelder kun for virksomhet som benytter tredjeparter, hvor tredjepart skal sende forespørsel på vegne av virksomheten.<br >«Tilgang til å administrere samtykkeforespørsler og samtykketokens», slik at leverandør kan sende forespørsler på vegne av datakonsument mot samtykkeløsningen.<br > Produksjonsmiljø: Bemyndiget person hos virksomheten må delegere tilgang til tredjepart i Altinn. Se: [Veiledning delegere tilgang i Altinn](/assets/Veiledning_delegering_Altinn.pdf).|


### C - Påkobling til test og integrasjonstesting
*I dette kapittelet finner man oversikt over oppgaver som må være gjort før virksomheten går over til produksjon.*


| Oppgaver |                                                                                                        |
|----------|--------------------------------------------------------------------------------------------------------|
| C-1      | **Tilgang til test (Bits)**                                                                            | Bits får bekreftelse fra Lånekassen om tilgang er gitt og informerer dermed virksomheten at de er i test. <br > Virksomheten mottar en API-key fra Lånekassen som legges i API-key feltet i header-forespørsel mot Lånekassen. Dette er ikke samme API-key som dere mottar fra Altinn.|
| C-2      | **Samtykkeløsningen (IT)**                                                                             | Løsningen skal implementeres slik at det ikke forespørres token fra Samtykkeløsningen hver gang kunde logger inn i nettbank, mobilbank og/eller økonomiapp. Dette er for å hindre at samtykkekomponenten ikke blir overbelastet.|
| C-3      | **Maskinporten (IT)**                                                                                  | Løsningen skal implementeres slik at det ikke forespørres token fra Maskinporten hver gang kunde logger inn i nettbank, mobilbank og/eller økonomiapp. <br > Token fra Maskinporten har en varighet på 120 sekunder, og bankene benytter dermed samme token på tvers av kundene i løpet av tokenets levetid. Nytt access token forespørres når token er i ferd med å løpe ut.|
| C-4      | **Lånekassen API (IT)**                                                                                | Løsningen implementeres slik at det forespørres data fra Lånekassen kun én gang hver gang kunde logger inn i nettbank, mobilbank og/eller økonomiapp. Dette innebærer at virksomhetene må benytte [sesjonslagring](https:/dokumentasjon.dsop.no/dsop_saldostudielan_integrasjonLanekassen.html#sesjonslagring).|
| C-5      | **Gjennomføre integrasjonstesten (IT)**                                                                |[Integrasjonstest](/assets/Saldostudielan_integration_test.xlsx) er et sett med testcaser som virksomheten må utføre før de kan gå i produksjon. Fullført integrasjonstest sendes til [DSOP Support](https:/support.dsop.no/) i prosess C-8. <br > For Maskinporten skal virksomhetene benytte TEST-miljø og Samtykkeløsninge skal TT02-miljø benyttes. URLer for miljøene finnes [her](https:/dokumentasjon.dsop.no/dsop_saldostudielan_faq.html#hvilke-urler-benyttes-for-test--og-produksjonsmilj%C3%B8).|
| C-6      | **Legge til Lånekassens logo med saldo på studielån i nettbank og mobilbank (IT)**                     | Bruk av logo står beskrevet på siden [Logo Lånekassen](/dsop_saldostudielan_logoLanekassen) og i bilag 5 til tjenestebeskrivelsen.|
| C-7      | **Abonnere på varsling fra Altinn og Digdir (IT/Forretning)**                                          | [Driftvarsel Altinn og Digdir](https:/status.digdir.no/)  |
| C-8      | **Virksomheten sender bekreftelse til Bits om at virksomheten er klar for produksjon (Forretning/IT)** | Virksomheten skal bekrefte følgende: <br >- Domener for produksjonsmiljø <br > Bits vil på bakgrunn av godkjent integrasjonstest og bekreftelse på ovvenevnte punkter bestille tilgang til produksjonsmiljø hos Lånekassen.|

### D - Påkobling til produksjon
*I dette kapittelet finner du oversikt over oppgaver som bør gjøres i forbindelse med produksjon.*

| Oppgaver |                                                                                                                      |
|----------|----------------------------------------------------------------------------------------------------------------------|
| D-1      | **Motta API-nøkler og bekreftelse fra Lånekassen om at tilgang til Lånekassens produksjonsmiljø er opprettet. (IT)** | Virksomheten er i produksjon. |
| D-2      | **Forvaltningsrutiner (Forretning)**                                                                                 | Tjenestens [Forvaltningsrutiner](/assets/Forvaltningsrutiner_saldostudielan.pdf) skal innarbeides i virksomhetens. Blant annet tilrettelegge for at alle feilmeldinger, spørsmål til dokumentasjon og endringsønsker sendes til: [DSOP Support](https:/support.dsop.no/)|

## Endringslogg

| Dato         | Endring  | Link i dokumentasjon|
|-------------| ------------------------|
|    | |
