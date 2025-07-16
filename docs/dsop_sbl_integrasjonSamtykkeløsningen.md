---
title: "Dsop Sbl IntegrasjonSamtykkeløSningen"
id: "dsop_sbl_integrasjonSamtykkeløsningen"
slug: "dsop_sbl_integrasjonSamtykkeløsningen"
---

﻿---
title: Integrasjon mot Samtykkeløsningen
sidebar: main_sidebar
permalink: dsop_sbl_integrasjonSamtykkeløsningen.html
folder: section1
---

## Samtykkeløsningen

Altinns dokumentasjon om Samtykkeløsningen: [For Datakonsument](https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/)

Tjenestens løsning baserer seg på Altinn sitt TT02-system, hvor virksomheten må bruke test-virksomhetssertifikat. I produksjonsmiljø skal virksomheten benytte virksomhetssertifikat for produksjon.

Her må dere ha fått tildelt API-nøkler fra Altinn før dere får gjort noe. 
For finansforetak som benytter leverandører - viktig å notere seg at  til forskjell for den gamle lenkebaserte samtykkeløsningen trenger ikke leverandøren ha API-nøkler for hver enkelt av de datakonsumenter den representerer - leverandøren skal alltid oppgi sin egen API-nøkkel.

Detaljer for å få ut tokens fra samtykkeløsning:

* Endpoint: https://tt02.altinn.no/api/authorization/token?authcode={authcodeinrequest} hvor authcodeinrequest er koden for kunden som benyttes for innveksling til token.
* ApiKey angis i header
* Accept = application/hal+json angis også i header
* Krever virksomhetsautentisering med Maskinporten-token. [Prosessen er beskrevet her](https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/leverandor/#bruk-av-leverand%C3%B8rtoken-i-maskinporten-anbefalt).
* Virksomheten må legge til følgende scopes for å få utstedt Maskinporten-token:
	* altinn:consentrequests.read
	* altinn:consentrequests.write
	* altinn:consenttokens

Scopene er åpne og finanforetakene kan legge til scopene selv.

### For finansforetak med leverandører 
 For at leverandøren skal få tilgang til å opprette samtykkeforespørsler og hente ut samtykketokens på vegne av datakonsumenten (finansforetaket), må en hovedadministrator delegere tilgang til *"Tilgang til å administrere samtykkeforespørsler og samtykketokens"* til leverandørens organisasjonsnummer.




### Felter

**Alle felter er obligatoriske.**

| Feltnavn | Beskrivelse |
| ----------------- |--------------|
|Resources  |Punktum separert liste med ID_VERSJON for data tjenester man ønsker samtykke for. Se [tjeneste ID og Versjon](https://dokumentasjon.dsop.no/dsop_sbl_integrasjonSamtykkel%C3%B8sningen.html#servicecode-og-serviceeditioncode) 
| CoveredBy | Orgnummer for datakonsument. Må matche orgnummer til autentisert konsument. Altinn henter inn virksomhetens offisielle navn slik det fremkommer i enhetsregisteret. |
|HandledBy  |Orgnummer for leverandøren, dersom tilgangen er delegert
| OfferedBy | Virksomheten oppgir kundens fødsels- og personnummer |
| OfferedByName | Virksomheten oppgir kundens etternavn |
| RequiredDelegator | Virksomheten oppgir kundens fødsels- og personnummer. Bruk av dette feltet medfører at samtykkeløsningen automatisk krever at kunden må logge inn via IDporten, dersom en annen person sin sesjon på offentlige sider fortsatt er aktiv. |
| RequiredDelegatorName | Virksomheten oppgir kundens etternavn |
| ValidTo | Kan maksimalt være 10 dager frem i tid. Skatteetaten vil avvise samtykker med gyldighetsperioder lengre perioder enn 10 dager (selv om samtykket benyttes innen 10 dager)


### ServiceCode og ServiceEditionCode
Ifb. ny samtykkeløsning (forhåndsregistrerte samtykkeforespørsler)
har Skatteetaten kommet med nye tjenesteutgavekoder for SBL API-ene. 
 <br>
 <br>

 De nye tjenesteutgavekodene er som følger:

* Tjenestekode (ServiceCode) og Tjenesteutgavekode (ServiceEditionCode):
 <br> 
    - Spesfisiert Summert Skattegrunnlag: 4628_210607 <br>
    - Inntektsmottaker: 4804_210607

Informasjon om [Tjeneste parametere](https://skatteetaten.github.io/api-dokumentasjon/om/samtykke#tjenester-med-st%C3%B8tte-for-samtykke)


### Metadata
Når man skal gjøre en request mot Altinn må man sende med metadata-feltet "Navn". Her skal man sette inn navnet på finansforetaket/virksomheten som kunden gir samtykke til. Kallet vil feile dersom parameteren er utelatt. Dersom verdien er blank vil kallet lykkes, og på samtykkesiden vises da ingenting for finansforetakets navn.

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
            "serviceCode": "4628",
            "serviceEditionCode": 1
            "Metadata": {
                "Navn": "Bankens Navn"
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
            "ServiceCode": "4628",
            "ServiceEditionCode": 1
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
      "ServiceCode": "4628",
      "ServiceEditionCode": 1,
       "Metadata" : {
                 "Navn" : "BankensNavn"
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

Når kunden har gitt sitt samtykke er autorisasjonskoden (samtykket) aktivt 10 dager frem i tid. Token har 30 sekunders varighet og datakonsument må be om nytt token når det har gått ut (benytt samme autorisasjonskode om igjen). <br>
For å veklse inn autorisasjonskode med samtykketoken legger man autorisasjonskode i følgende lenke: https://tt02.altinn.no/api/authorization/token?authcode={​​authcodeinrequest}​​



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
            "serviceCode": "4628",
            "serviceEditionCode": 1
            "Metadata": {
                "Navn": "Bankens Navn"
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
    "4628_1",
    "4628_1_Navn=BankensNavn"
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


## Endringslogg


| Dato         | Endring  | Link i dokumentasjon|
|-------------| ------------------------|
| 03.04.2023 | Oppdatert link til skatteetatens Github | [Tjeneste parametre](https://skatteetaten.github.io/api-dokumentasjon/om/samtykke#tjenester-med-st%C3%B8tte-for-samtykke) |
