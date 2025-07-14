---
title: "Dsop Saldostudielan IntegrasjonLanekassen"
id: "dsop_saldostudielan_integrasjonLanekassen"
slug: "dsop_saldostudielan_integrasjonLanekassen"
sidebar: "main_sidebar"
permalink: "dsop_saldostudielan_integrasjonLanekassen.html"
folder: "section1"
---

## Sesjonslagring

Dersom virksomheten ønsker å plassere informasjon om studielånet på forside av nettbank, mobilbank eller annen økonomiapp forutsettes det at virksomheten benytter seg av sesjonslagring eller annen midlertidig lagring så lenge kunden er innlogget. Dette er for å redusere antall kall mot tjenesten. Virksomheten må selv vurdere hva som må opplyses til kundene om lagring. Virksomheten skal i tråd med formålet på samtykket, slette alle saldoinformasjon etter at kunden er logget ut.

## Testmiljø

Endepunktet for test vil være: [https://ekstern01.api.test.lanekassen.no/saldo/v1/Accounts](https://ekstern01.api.test.lanekassen.no/saldo/v1/Accounts)

## Parametre

### ApiKey
Fylles ut med deres passord som er med på å identifisere dere som konsument i tillegg til innholdet i de to tokenene. Den er lik hver gang.

### Authorization
Her legges et gyldig maskinportentoken inn. Gyldighet opp til 120 sekunder. Kan gjenbrukes mellom oppslagene. Skal ikke inneholde noe annet enn selve tokenet (man skal ikke bruke bearer eller andre prefikser).

### Consent-ID
Her legges et gyldig samtykketoken fra Altinn inn. Gyldigheten her er ca 30 sekunder, men selve samtykket vil bli cachet til neste gang.

### PSU_ID
Kundens identifikator 11 siffer.

### X-Request-Id
Unik id på hver eneste request dere utfører. Dette gjør det enkelt for Lånekassen å finne igjen requesten ved eventuelle feil.

## Feilkoder

Se [API-spesifikasjon](https://bitsnorge.github.io/dsop-saldo-studielan-api/) for oversikt over feilkoder

* 400 One or more headers are invalid
* 401 Authorization token is invalid
* 403 Consent token is invalid
* 404 Requested PSU_ID does not exist
* 429 Too busy
* 500 Unknown error. Contact support if the error persists

## Feilsøking av ugyldig token
Hvis validering av token fra Maskinporten eller Altinn feiler, gå gjennom følgende sjekkliste:

* Man skal ikke bruke «Bearer» foran token i authorization-headeren. Headeren skal kun inneholde tokenet og ingenting annet.
* I enkelte tilfeller har vi sett at samtykketokenet returneres med apostrofer fra Altinn. Apostrofene skal ikke følge med tokenet når tokenet legges inn i headeren.
* Hvis kallene fortsatt feiler, bør tokenet limes inn i f.eks. [https://jwt.io](https://jwt.io) for å se at det har riktig format og kan dekrypteres.

## Cache av samtykker

Løsningen lagrer samtykkeinformasjon dersom dere mottar en 200 tilbake. Det betyr at dere ikke trenger å sende med samtykketoken neste gang dere gjør kall på samme kunde. Av hensyn til kapasiteten til Altinn, er det heller ikke ønskelig at det sendes med et samtykketoken for hvert kall. Det forventes at dere holder oversikt over når samtykket løper ut på tid. Passeres denne fristen og det mangler et samtykketoken vil forespørselen avvises.

## Throttling
Løsningen implementerer throttling. Det betyr at Lånekassen vil forsøke å forhindre at en konsument gjør tjenesten utilgjengelig. Dere vil motta en HTTP 429 dersom dere kaller mer enn forventet.

## Tolkning av retur

Se [Lånekassens informasjonsmodell](dsop_saldostudielan_informasjonsmodellLanekassen.html) for tolkning av retur.

## Endringslogg

| Dato | Endring | Link i dokumentasjon |
|-------------| ------------------------|
| 17.02.21 | Lagt inn informasjon om feilsøking av ugyldig token | [Feilsøking av ugyldig token](https://dokumentasjon.dsop.no/dsop_saldostudielan_integrasjonLanekassen.html#feilsøking-av-ugyldig-token) |
