---
title: "Dsop Su IntegrasjonSamtykke"
id: "dsop_su_integrasjonSamtykke"
slug: "dsop_su_integrasjonSamtykke"
---

﻿---
title: Integrasjon mot Samtykkeløsningen
sidebar: main_sidebar
permalink: dsop_su_integrasjonSamtykke.html
folder: section1
---

## Samtykkeløsningen

Altinns dokumentasjon om Samtykkeløsningen: [For Datakonsument](https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/)

Tjenestens løsning baserer seg på Altinn sitt TT02-system, hvor virksomheten må bruke test-virksomhetssertifikat. I produksjonsmiljø skal virksomheten benytte virksomhetssertifikat for produksjon.

Her må dere ha fått tildelt API-nøkler fra Altinn før dere får gjort noe. Se onboardingsguide prosess B-4 for bestilling av API-nøkkel.

Detaljer for å få ut tokens fra samtykkeløsning:

* Endpoint: https://tt02.altinn.no/api/authorization/token?authcode={authcodeinrequest} hvor authcodeinrequest er koden for kunden som benyttes for innveksling til token.
* ApiKey angis i header
* Accept = application/hal+json angis også i header
* Krever virksomhetsautentisering med Maskinporten-token. [Prosessen er beskrevet her](https://dokumentasjon.dsop.no/dsop_su_integrasjonMaskinporten.html).
* Virksomheten må legge til følgende scopes for å få utstedt Maskinporten-token (dersom de ønsker å bruker Maskinporten-token istedenfor virksomhetssertifikat for autentisering mot samtykkeløsningen):
	* altinn:consentrequests.read
	* altinn:consentrequests.write
	* altinn:consenttokens

Scopene er åpne og finanforetakene kan legge til scopene selv.

### CoveredBy
Virksomheten må her oppgi organisasjonsnummeret til den organisasjonen kunden skal samtykke til. Altinn henter inn virksomhetens offisielle navn slik det fremkommer i enhetsregisteret.

### OfferedBy
Virksomheten oppgir kundens fødsels- og personnummer

### OfferedByName
Virksomheten oppgir kundens etternavn

### RequiredDelegator
Virksomheten oppgir kundens fødsels- og personnummer

### RequiredDelegatorName
Virksomheten oppgir kundens etternavn.

### ValidTo
Tidspunkt som oppgis i validTo kan maksimalt være 3 år frem i tid, fra det tidspunktet samtykket er gitt. Samtykket som kunden gir kan ha en maksimal varighet på 3 år.

### RedirectUrl
Domenet som kunden skal returneres til etter samtykket er gitt. Erfaring viser at man må bruke https:// i redirectUrl.

### ServiceCode og ServiceEditionCode

* Tjenestekode(ServiceCode): 5252

* Tjenesteutgavekoden(ServiceEditionCode): 2

### Metadata
Når man skal gjøre en request mot Altinn må man sende med metadata-feltet "Navn". Her skal man sette inn navnet på virksomheten som kunden gir samtykke til. Kallet vil feile dersom parameteren er utelatt. Dersom verdien er blank vil kallet lykkes, og på samtykkesiden vises da ingenting for virksomhetens navn.

Virksomheten må her oppgi navnet til den organisasjonen kunden skal samtykke til. Merk at det ikke gjenbrukes det navnet som utledes fra coveredBy. Enkelte virksomheter kan ha et "markedsføringsnavn" eller "bruksnavn" som er forskjellig fra det offsielle navnet i enhetsregisteret. Virksomheten bør oppgi navnet likt med det den har registrert i enhetsregisteret.

### AuthorizationCode
AuthorizationCode er koden for kundens samtykke som i legges til URL'en hvor kunden blir sendt til samtykkeløsning for å gi samtykke og for innveksling til token etter kunden har gitt samtykket.


## Steg 1 - opprette autorisasjonskode

Steg 1 er å opprette autorisasjonskode (samtykke) hos Altinn.

Eksempel forespørsel mot https://tt02.altinn.no/api/ConsentRequest?ForceEIAuthentication
```
{
    "coveredBy": "DERES_ORG_NR",
    "offeredBy": "FØDSELSNUMMER",
    "offeredByName": "ETTERNAVN",
    "requiredDelegator": "FØDSELSNUMMER",
    "requiredDelegatorName": "ETTERNAVN",
    "validTo": "2020-11-04T11:29:56.577Z",
    "redirectUrl": "https://WWW.DERES_URL.NO",
    "requestResources": [
        {
            "serviceCode": "5252",
            "serviceEditionCode": 2
            "Metadata": {
                "Navn": "Virksomhetens Navn"
  }
        }
    ],
    "requestMessage": {}
}
```
Eksempel retur:
```
{
    "AuthorizationCode": "89860470-ca02-4e5f-9d65-28d808d962cc",
    "RequestStatus": "Unopened",
    "CoveredBy": "DERES_ORG_NR",
    "OfferedBy": "FØDSELSNUMMER",
    "RequiredDelegator": "FØDSELSNUMMER",
    "ValidTo": "2020-11-04T11:29:56.577",
    "RedirectUrl": "https://WWW.DERES_URL.NO",
    "RequestResources": [
        {
            "ServiceCode": "5252",
            "ServiceEditionCode": 2
        }
    ]
}
```

For virksomheter som bruker tredjepart/leverandører vil forespørselen se slik ut:
```
{
  "CoveredBy": "DERES_ORG_NR",
  "OfferedBy": "FØDSELSNUMMER",
  "OfferedByName": "ETTERNAVN"
  "RequiredDelegator": "FØDSELSNUMMER",
  "ReguiredDelegatorName": "ETTERNAVN"
  "HandledBy": "TREDJEPARTS_ORG_NR",
  "ValidTo": "2021-06-01T13:17:31.495Z",
  "RedirectUrl": "https://WWW.DERES_URL.NO",
  "RequestResources": [
    {
      "ServiceCode": "5252",
      "ServiceEditionCode": 2,
       "Metadata" : {
                 "Navn" : "VirksomhetensNavn"
    }
   }
    ],
"requestMessage": { }
}
```

## Steg 2 - autorisasjonskode i URL til samtykkesiden

Steg 2 er å sette inn "AuthorizationCode" i URL som benyttes for å sende brukeren til samtykkesiden: https://tt02.altinn.no/ui/AccessConsent/request?id={​​auth.code}​​

Eksempel: https://altinn.no/ui/AccessConsent/request?id=c44f284f-b43b-4355-925a-2add17439659


## Steg 3 - Veklse autorisasjonskode med samtykketoken

Når kunden har gitt sitt samtykke er autorisasjonskoden (samtykket) aktiv i 3 år. For å veklse inn autorisasjonskode med samtykketoken legger man autorisasjonskode i følgende lenke: https://tt02.altinn.no/api/authorization/token?authcode={​​authcodeinrequest}​​

**Viktig**: Denne forespørselen skal kun sendes 1 gang per samtykke. Denne forespørselen skal gjøres på ny når samtykket skal fornyes etter 3 år.

Eksempel på forespørsel mot: https://tt02.altinn.no/api/authorization/token?authcode={​​authcodeinrequest}
```
{
    "AuthorizationCode": "89860470-ca02-4e5f-9d65-28d808d962cc"
    "coveredBy": "DERES_ORG_NR",
    "offeredBy": "FØDSELSNUMMER",
    "offeredByName": "ETTERNAVN",
    "requiredDelegator": "FØDSELSNUMMER",
    "requiredDelegatorName": "ETTERNAVN",
    "validTo": "2020-11-04T11:29:56.577Z",
    "redirectUrl": "https://WWW.DERES_URL.NO",
    "requestResources": [
        {
            "serviceCode": "5252",
            "serviceEditionCode": 2
            "Metadata": {
                "Navn": "Virksomhetens Navn"
  }
        }
    ],
    "requestMessage": {}
}
```

Eksempel på retur (samtykketoken):
```
{
  "Services": [
    "5252_2",
    "5252_2_Navn=VirksomhetensNavn"
  ],
  "AuthorizationCode": "d14ee887-3b2c-4d98-a699-bddfc0c77af8",
  "OfferedBy": "0108530195",
  "RequiredDelegator": "0108530195",
  "CoveredBy": "910514458",
  "DelegatedDate": 1602747510,
  "ValidToDate": 1607077796,
  "nbf": 1602747608,
  "exp": 1602747638,
  "iat": 1602747608,
  "iss": "altinn.no"
}
```




| Dato         | Endring  | Link i dokumentasjon|
|-------------| ------------------------|
|     |   | |
