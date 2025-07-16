---
title: "Dsop Saldostudielan IntegrasjonMaskinporten"
id: "dsop_saldostudielan_integrasjonMaskinporten"
slug: "dsop_saldostudielan_integrasjonMaskinporten"
---

﻿---
title: Integrasjon mot Maskinporten
sidebar: main_sidebar
permalink: dsop_saldostudielan_integrasjonMaskinporten.html
folder: section1
---

## Maskinporten

Digitaliseringsdirektoratets dokumentasjon om Maskinporten: [Slik bruker du Maskinporten som API-konsument](https://docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument.html)

Tjenesten baserer seg på testmiljøet "TEST", hvor virksomheten må bruke test-virksomhetssertifikat. I produksjonsmiljø skal virksomheten benytte virksomhetssertifikat for produksjon.

### Endringer

Finansforetak som har utgående brannmur- MÅ OPPDATERE IP-ADRESSENE
Denne endringen må implementeres innen 05.01.2023 for testmiljø og 06.02.2023 for produksjonsmiljø. Dette er nødvendig for å kunne bruke Maskinporten i forbindelse med autentisering og utstedelse av access token. 

Endring av endepunkt i testmiljøet - Endepunkt endres fra VER2 til TEST fra og med Q3 2022.
Det er foreløpig ingen endring i eksisterende oppsett for å hente tokens, men fra og med Q3 2023 må finansforetak ta i bruk nytt endepunkt test.maskinporten.no. Mer informasjon om denne endringen kommer nærmere Q3 2023.

### Opprette klient

Virksomheten må opprette en klient i Maskinporten. Det vil si at det må ha fått opprettet tilgang til Samarbeidsportalen fra Digdir.

Det er den som blir admin i Samarbeidsportalen som kan opprette en integrasjon.

### Opprette integrasjon

For å kunne hente ut tokens som kan benyttes i Lånekassens API må dere registrere en "Integrasjon".

Dette gjøres slik:

1. Under "TEST", velg "Integrasjoner".
2. Velg "Ny integrasjon"
3. Under Difi-tjeneste velg Maskinporten og trykk "Legg til scopes"
4. "lanekassen:lan/v1/saldoopplysninger" bør da dukke opp som et valg så fremt Lånekassen har gitt dere tilgang til scopet.

5. For produksjon gjør man tilsvarende under "Produksjon"

Ellers fylles følgende ut:

* Tillatte grant types: urn:ietf:params:oauth:grant-type:jwt-bearer
* Klientautentiseringsmetode: private_key_jwt
* Refresh token type: Engangs
* Timeoutverdier: Opptil 120 sekunder

### Oppretting av tokens

Når "Integrasjonen" lagres vil den få en identifikator. Denne skal benyttes når man gjør kall for å få opprettet tokens.

Detaljer for å få ut tokens fra ny integrasjon er som følger:

* Token Endpoint: https://test.maskinporten.no/
* Issuer: Id på integrasjonen
* Audience: https://test.maskinporten.no/

Eksempel forespørsel access token:
```
{
"aud": "https://test.maskinporten.no/",
"scope": "lanekassen:lan/v1/saldoopplysninger"
 "iss": "min_egen_clientid",
 "iat": 1602070975,
 "exp": 1602190975,
 "jti": "E05750BC-5066-4B16-8F63-C2581DF6E359",
  }
```
Eksempel access token:
```
{
  "scope" : "lanekassen:lan/v1/saldoopplysninger",
  "iss" : "https://test.maskinporten.no/",
  "client_amr" : "virksomhetssertifikat",
  "token_type" : "Bearer",
  "exp" : 1584694565,
  "iat" : 1584693565,
  "jti" : "IYRtIEzOYb8fHiIMEaqVHq_tXYGWe6OEOjOdsK-P_30",
  "consumer" : {
    "authority" : "iso6523-actorid-upis",
    "ID" : "0192:ORG_NO"
  }
}
```
Eksempel forespørsel access token for virksomheter som bruker tredjepart/leverandører:
```
{
  "aud" : "https://test.maskinporten.no/",
  "scope" : "lanekassen:lan/v1/saldoopplysninger",
  "iss" : "oidc_difi_delegering_altinn",
  "exp" : 1584693557,
  "consumer_org" : "910753614",
  "iat" : 1584693437,
  "jti" : "eb6ab01e-5834-4ba0-a2a1-457bfd0f0a49"
}
```
### Consumer_org

Organisasjonsnummeret til virksomheten tredjeparten sender forespørsler på vegne av.

Eksempel access token for tredjepart/leverandør:
```
{
  "iss" : "https://test.maskinporten.no/",
  "client_amr" : "virksomhetssertifikat",
  "token_type" : "Bearer",
  "client_id" : "oidc_difi_delegering_altinn",
  "scope" : "lanekassen:lan/v1/saldoopplysninger",
  "supplier" : {
    "authority" : "iso6523-actorid-upis",
    "ID" : "0192:991825827"
  },
  "exp" : 1584694440,
  "delegation_source" : "https://tt02.altinn.no/",
  "iat" : 1584693440,
  "jti" : "faulA3FDWRqpd59Cwc1DqvA72kOV_xDHggBXpSpptsw",
  "consumer" : {
    "authority" : "iso6523-actorid-upis",
    "ID" : "0192:910753614"
  }
}
```

### Virksomhetssertifikat

Lånekassen validerer mellom org.nummeret i samtykketoken og i Maskinporten-tokenet. For de virksomheter som bruker en systemleverandør som skal bruke eget virksomhetssertifikat mot Maskinporten, må virksomheten bruke delegeringstjenesten i Altinn.

### Maskinporten og consumer

Dette settes basert på virksomhetssertifikatet virksomheten bruker for å kalle Maskinporten. Når de har fått gjennom et kall og hentet access_token fra Maskinporten med et virksomhetssertifikat så har "consumer" blitt satt automatisk. Innholdet i tokenet kan verifiseres med [https://jwt.io](https://jwt.io).

Ved bruk av delegeringstjenesten, må man angi hvilken virksomhet som man kaller på vegne av.

### Tolking av tokens

Avslutningsvis før man går igang med å gjøre kall mot vår løsning henter dere ut tokens og validerer følgende:<br><br>
Maskinporten-token skal ha følgende:
```
"consumer": {
    "authority": "iso6523-actorid-upis",
    "ID": "0192:DERES_ORGANISASJONSNUMMER"
  }
	"scope": "lanekassen:lan/v1/saldoopplysninger",
```
Altinn samtykketoken:

* "OfferedBy": "FODSELSNUMMER_DERE_FORVENTER"
* "CoveredBy": "DERES_ORGANISASJONSNUMMER"
* "ValidTo": 1599211796 - At denne er gyldig frem i tid


Maskinporten.consumer (minus 0192:) må være lik AltinnSamtykke.CoveredBy for at request skal bli godkjent. Dette sikrer at samme organisasjon gjør kallet og har gyldig samtykke.


## Endringslogg

| Dato         | Endring  | Link i dokumentasjon|
|-------------| ------------------------|
|     |   | |
