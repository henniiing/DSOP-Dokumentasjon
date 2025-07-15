---
title: "Dsop Saldostudielan Onboarding
id: dsop_saldostudielan_onboarding"
slug: "dsop_saldostudielan_onboarding"
keywords: ["sample"]
sidebar: "main_sidebar
permalink: dsop_saldostudielan_onboarding.html"
folder: "section1"
---

*Denne siden skal benyttes av virksomhetene som et navigeringsverktøy som gir tilgang til informasjon som er nødvendig for en vellykket etablering av løsningen.*

## Onboardingsprosessen
For å sikre en god integrasjon med Lånekassen skal virksomhetene følge anbefalte onboardingsprosess i 4 faser slik den er beskrevet under.

| Prosess                             | Beskrivelse                                                                                                                                                                     |
|-------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A - Forberedelse                    | Lese dokumentasjon og vurdere hvordan dette berører virksomhetenen og hvordan arbeidet skal organiseres - og når. 
| A-2 | **Bestille test- og produksjonsvirksomhetssertifikat for virksomhet (forretning/IT)** | Virksomheten må ha gyldig test- og produksjons-virksomhetssertifikater fra enten [Buypass](https:/www.buypass.no/produkter/virksomhetssertifikat-esegl#oversikt-VID) eller [Commfides](https:/www.commfides.com/commfides-virksomhetssertifikat/) <br  /> Det er også mulig å gjenbruke eksisterende test- og produksjonsvirksomhetssertifikat.
| A-3 | **Sette seg inn i integrasjoner og nødvendige forutsetninger for å benytte Maskinporten. (Forretning/IT)** | Maskinporten brukes til å autorisere tilgang til Lånekassens API. Se: 
| B-1 | **Virksomheten fyller registreringsskjemaet og sender det til Bits (Forretning)** <br  /> [Registreringsskjema ikke-deltaker av Bits AS](/assets/Registreringsskjema_saldo_studielan_ikkedeltaker.docx).<br  /> Bits vil verifisere innholdet i skjemaet og vil på bakgrunn av godkjent registreringsskjema starte prosess for elektronisk avtaleinngåelse. <br  />- Organisasjonsnummer <br  />- Ulike kontaktpersoner i virksomheten <br  />- Domener for test-miljø 
| B-2 | **Virksomheten melder seg inn i Maskinporten og signerer bruksvilkår for Maskinporten elektronisk. (IT/Forretning)** 
| B-3 | **Elektronisk signering av tjenestebeskrivelse (Bits/Forretning)** | Tjenestebeskrivelsen inneholder bruksvilkårene for tjenestene og underbilag. 
| B-4 | **Bestille tilgang til testmiljø Altinn (Bits)** | Bits bestiller API-nøklene på vegne av virksomheten, og Altinn sender nøklene direkte til foretaket. API-nøklene er nødvendig for å kunne benytte samtykkeløsningen.<br  />Dersom virksomheten benytter tredjepart, og tredjepart skal benytte sitt eget virksomhetssertifikat, må egne API-nøkler for tredjepart bestilles. 
| B-5 | **Bestille tilgang til testmiljø Lånekassen (Bits)** | Bits bestiller tilgang til testmiljø hos Lånekassen for virksomheten. Basert på bestillingen gir Lånekassen tilgang til API'et, samt tilgang til Maskinporten og samtykkeløsningen for saldo på studielån.<br  /> Dersom virksomheten benytter tredjepart får både tredjepart og virksomhetene, som de implementerer på vegne av, tilgang til Lånekassens scope i Maskinporten. Det er kun tredjepart som må legge opp integrasjonen i sin samarbeidsportal.
| B-6 | **Delegere tilgang til tredjepart/tredjepart i Altinn (IT/Forretning)** | Denne prosessen gjelder kun for virksomhet som benytter tredjeparter, hvor tredjepart skal sende forespørsel på vegne av virksomheten.<br  />«Tilgang til å administrere samtykkeforespørsler og samtykketokens», slik at leverandør kan sende forespørsler på vegne av datakonsument mot samtykkeløsningen.
| C-1 | **Tilgang til test (Bits)** | Bits får bekreftelse fra Lånekassen om tilgang er gitt og informerer dermed virksomheten at de er i test. 
| C-3 | **Maskinporten (IT)** | Løsningen skal implementeres slik at det ikke forespørres token fra Maskinporten hver gang kunde logger inn i nettbank, mobilbank og/eller økonomiapp. 
| C-5 | **Gjennomføre integrasjonstesten (IT)** | [Integrasjonstest](/assets/Saldostudielan_integration_test.xlsx) er et sett med testcaser som virksomheten må utføre før de kan gå i produksjon. Fullført integrasjonstest sendes til [DSOP Support](https:/support.dsop.no/) i prosess C-8. 
| C-8 | **Virksomheten sender bekreftelse til Bits om at virksomheten er klar for produksjon (Forretning/IT)** | Virksomheten skal bekrefte følgende: <br  />- Domener for produksjonsmiljø 