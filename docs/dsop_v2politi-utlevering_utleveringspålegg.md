---
title: "Dsop V2politi Utlevering UtleveringspåLegg"
id: "dsop_v2politi-utlevering_utleveringspålegg"
slug: "dsop_v2politi-utlevering_utleveringspålegg"
---

﻿---
title: Utleveringspålegg i tjenesten Politi-Utlevering
keywords: sample
sidebar: beta_sidebar
permalink: dsop_v2politi-utlevering_BETA_utleveringspålegg.html
folder: section1
---

<mark><strong>*Tjenesten er under utvikling, og endring i dokumentasjon på denne siden kan forekomme uten varsel. DSOP Forvaltning
vil kontakte alle relevante kontaktpersoner når dokumentasjonen er ferdigstilt.*</strong>
<br>

[![alt text](images/politi-utlevering_04-1.png)](images/politi-utlevering_04-1.png)

Finansnæringen har konkludert at politiet kunne få utlevert kontoopplysninger via tjenesten Politi-Utlevering dersom det 
foreligger et signert og maskinlesbart utleveringspålegg ved hver forespørsel til finansforetak. Dette gjelder for 
hjemmel strpl. §210 (3). Se [juridiske rammebetingelser Politi-Utlevering](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_juridisk.html).


[![alt text](images/politi-utlevering_04-2.png)](images/politi-utlevering_04-2.png)

Utleveringspålegget skal følge med i hver forespørsel som sendes til finansforetaket slik at banken får verifisert om 
forespørselen stemmer med det påtalemyndigheten har godkjent.

## Om utleveringspålegget

Utleveringspålegget (extradition order, EO) er en JSON Web Token ([JWS](https://stackoverflow.com/questions/74257560/what-is-the-difference-between-jose-jwa-jwe-jwk-jws-and-jwt/74257561#74257561)) 
dvs. en åpen industristandard RFC 7519 for å representere krav (claims) på en sikker måte mellom to parter.
Alle feltene i utleveringspålegget er **<u>obligatoriske</u>**.

Formatet til utleveringspålegget skal være:

**For header:**

| Fields i the EO | Type    | Description                                                    | Default | Mandatory |
|-----------------|---------|----------------------------------------------------------------|---------|-----------|
| alg             | string	 | Signature or encryption algorithm: "PS256"                     | PS256   | Yes       |
| typ             | string  | Type of token: "JWT"                                           | JWT     | Yes       |
| kid             | string  | Identifier for the certificate used to validate the signature. | -       | Yes       |


**For payload:**

| Fields i the EO              | Type              | Description                                                                                                                                                                                                                                     | Mandatory         |
|------------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| extraditionOrderID           | string ($uuid)    | Unique reference number to the extradition order. Remains the same per PartyID.                                                                                                                                                                 | Yes               |
| version                      | string            | Version for the extradition order: "1.0.0"                                                                                                                                                                                                      | Yes               |
| partyID                      | string            | Person/Company about whom information is to be disclosed, FNR, D-NR or organization no.                                                                                                                                                         | Yes               |
| mandate                      | string            | Legal Basis used by the police for the extradition order.                                                                                                                                                                                       | Yes               |
| reason                       | string            | Predefined formulations about the reason for the extradition.                                                                                                                                                                                   | Yes               |
| fromDate                     | string (ISO Date) | Limitation of the time period for information about the person/company, from.                                                                                                                                                                   | Yes               |
| toDate                       | string (ISO Date) | Limitation of the time period for information about the person/company, to.                                                                                                                                                                     | Yes               |
| onlyPrimaryOwner             | boolean           | TRUE: Account list will only return a list of accounts where PartyID is the account owner. <br> FALSE: Account list will only return a list of accounts where PartyID is either primary owner, secondary owner or other role to the account(s). | Yes               |
| accountList                  | boolean           | Allows delivering of information from the Account List endpoint.                                                                                                                                                                                | Yes (Always true) |
| accountDetails               | boolean           | Allows delivering of information from the Account Details endpoint for all accounts returned by Account List.                                                                                                                                   | Yes               |
| transactions                 | boolean           | Allows delivering of information from the Transactions endpoint for all accounts returned by Account List.                                                                                                                                      | Yes               |
| cards                        | boolean           | Allows delivering of information from the Cards endpoint for all accounts returned by Account List.                                                                                                                                             | Yes               |
| roles                        | boolean           | Allows delivering of information from the Roles endpoint for all accounts returned by Account List.                                                                                                                                             | Yes               |
| district - districtID        | string            | The police district ID the police lawyer belongs to.                                                                                                                                                                                            | Yes               |
| district - districtLabel     | string            | The name of the police district ID the police lawyer belongs to.                                                                                                                                                                                | Yes               |
| approval - approvedByID      | string            | UserID to the police lawyer who has approved the extradition order.                                                                                                                                                                             | Yes               |
| approval - approvedByName    | string            | Navn på politijuristen som har godkjent utleveringspålegget.                                                                                                                                                                                    | Yes               |
| approval - approvedByRole    | string            | The role of the police lawyer who has approved the extradition order, i.e. "Politiadvokat".                                                                                                                                                     | Yes               |
| approval - approvalTimestamp | string (datetime) | The date and time the extradition order was approved by the police lawyer. ISO Date (datetime): YYYY-MM-DDThh:mm:ssZ for UTC.                                                                                                                   | Yes               |
| caseID                       | string ($uuid)    | The case number for the police to which the delivery order belongs.                                                                                                                                                                             | Yes               |
| exp                          | numericdate       | The time when the extradition order will expire (no longer be valid).                                                                                                                                                                           | Yes               |


Eksempel på innhold (Payload)

```
{
    "extraditionOrderID": "a4f10250-7e30-11ee-b4b0-ab5ccb7c1184",
    "version": "1.0.0",
    "partyID": "31057710503",
    "mandate": "Straffeprosessloven §210 (3) første punktum",
    "reason": "Opplysningene antas å ha betydning som bevis i straffesak der noen med skjellig grunn kan mistenkes for en straffbar handling.",
    "fromDate": "2022-01-01",
    "toDate": "2023-12-31",
    "onlyPrimaryOwner": false,
    "accountList": true,
    "accountDetails": true,
    "transactions": true,
    "cards": false,
    "roles": true,
    "district": {
        "districtID": "56",
        "districtLabel": "Økokrim"
    },
    "approval": {
        "approvedByID": "ABC123",
        "approvedByName": "Peder Aas",
        "approvedByRole": "Politiadvokat",
        "approvalTimestamp": "2024-04-05T08:27:18Z"
    },
    "caseID": "81e97495-38c6-42dd-92a7-73654c48f0ac",
    "exp": 1636027948
}
```


## Verifisering av utleveringspålegg

Utleveringspålegget er signert og med et spesifikt sertifikat som kun påtalemyndighet kan benytte. Sertifikatet vil ha 
spesifikke OU og CN verdier:

<b>For produksjon</b>
- OU: "Påtalemyndigheten"
- CN: "Godkjenning av utleveringspålegg"

<b>For test</b>
- OU: "Påtalemyndigheten"
- CN: "Godkjenning av utleveringspålegg TEST"

Signering av utleveringspålegg er basert på standard PKI. <u>Privat signeringsnøkkel</u> tilhørende det spesifikke 
virksomhetssertifikatet vil bli benyttet av påtalemyndigheten ved signeringen. JWT headeren *kid* vil inneholde en 
identifikator for sertifikatet som skal brukes til å validere signaturen.

Eksempel på header i utleveringspålegg:

```
{
  "typ": "JWT",
  "alg": "PS256",
  "kid": "1961808822691682204839707"
}
```

Et [JSON Web Key Set](https://datatracker.ietf.org/doc/html/rfc7517#section-5){:target="_blank"} (JWKS) som inneholder 

aktuelle sertifikater er tilgjengelig for både test og prod på [https://www.politiet.no/.well-known/finans-jwks.json](https://www.politiet.no/.well-known/finans-jwks.json){:target="_blank"}. 
I listen (key-settet) vil man finne en JSON Web Key (JWK) med samme kid som i JWT headeren. Sertifikatet som ligger i 
denne JWK skal benyttes til valideringen. Sertifikatet og mellomliggende utstedersertifikater vil ligge i feltet [x5c](https://datatracker.ietf.org/doc/html/rfc7517#section-4.7){:target="_blank"}.


Eksempel på JWKS:

```
{
  "keys": [
    {
      "kty": "RSA",
      "x5t#S256": "Sw2erWl3...."
      "nbf": 1717071927,
      "e": "AQAB",
      "use": "sig",
      "kid": "32850395441143589741254802",
      "x5c": ["NuaW5nZW5l...", "TAzIiwicm..."],
      "exp": 1811714340,
      "n": "vrjOfz..."
    }, 
   {
      "kty": "RSA",
      "x5t#S256": "kak7gSwa...."
      "nbf": 1717071927,
      "e": "AQAB",
      "use": "sig",
      "kid": "1961808822691682204839707",
      "x5c": ["MIIGzTCCBL...", "MIIGkjCCB..."],
      "exp": 1811714340,
      "n": "qmhGifX..."
    }
  ]
}
```

Finansforetakene må på forhånd ha lastet ned rotsertifikat fra Buypass 
og bruke dette som tillitsanker, slik at sertifikatets gyldighet kan valideres mot rotsertifikatet via kjeden av 
mellomliggende sertifikater. I tillegg skal finansforetakene validere at OU og CN er som over. Når man på denne måten 
har verifisert at mottatt sertifikat er påtalemyndighetens sertifikat for godkjenning av utleveringspålegg, skal 
finansforetakene validere signaturen ved å sjekke mot dette sertifikatet.

Det er viktig å notere at Buypass bruker forskjellig rotsertifikat for test og produksjon.


Dersom signaturen er gyldig anbefales det at innholdet i utleveringspålegget også verifiseres. Formatet til feltene skal 
være iht. spesifikasjonen over og i tillegg anbefales det å sjekke at:

1. "mandate" skal enten være *"Straffeprosessloven §210 (3) første punktum"* eller *"Straffeprosessloven §210 (3) andre punktum"*
2. "reason" skal enten være *"Opplysningene antas å ha betydning som bevis i straffesak der noen med skjellig grunn kan mistenkes for en straffbar handling."* eller *"Opplysningene antas å ha betydning i en sak hvor noen er meldt savnet, og det er grunn til å frykte at noe har tilstøtt den savnede."*
3. Kombinasjoner av "mandate" og "reason" er slik at dersom *"mandate"="Straffeprosessloven §210 (3) første punktum"*, <u>må</u> *"reason"="Opplysningene antas å ha betydning som bevis i straffesak der noen med skjellig grunn kan mistenkes for en straffbar handling."*. Videre er det slik at dersom *"mandate"="Straffeprosessloven §210 (3) andre punktum"*, <u>må</u> *"reason"="Opplysningene antas å ha betydning i en sak hvor noen er meldt savnet, og det er grunn til å frykte at noe har tilstøtt den savnede."*.
4. "fromDate" kan ikke være eldre enn 10 år før dagens dato.
5. "accounts" må være "true".
6. Det kan ikke være mer enn 90 dager mellom “approvalTimestamp” og "exp". Dagens dato bør være mellom "approvalTimestamp" og "exp". 



## Validering av forespørsel ift utleveringspålegg

Når utleveringspålegget er verifisert kan det brukes for å validere forespørselen det ble sendt med.

Se [Gyldige forespørsler i forhold til utleveringspålegget for Politi-Utlevering](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_l%C3%B8sningsbeskrivelse.html#gyldige-foresp%C3%B8rsler-i-forhold-til-utleveringsp%C3%A5legget-for-politi-utlevering)



## Testing av forespørsler / utleveringspålegg

Det anbefales å gjennomføre testing av ulike kombinasjoner av forespørsler og utleveringspålegg fra politiet slik at 
finansforetak sikrer seg at forespørsler er gyldige.

Det er definert 48 test-caser som tar for seg verifisering knyttet til:
- Gyldighet av selve utleveringspålegg (format, varighet)
- Tilgang til endepunktene 
- Forespørsel iht utleveringspålegget
  - ID til kontrollobjektet 
  - Lovhjemmel 
  - Saksnummer 
  - Tidsperioden 
  - Utlevering av kontoopplysninger der kontrollobjektet er kun eier eller har flere roller

<u>Viktig:</u>
- Politiet må bilateralt avtale med finansinstitusjonene hvilke testobjekter (PartyID) som skal brukes i test-Utleveringspåleggene.
- Verdiene i **grønt** kan endres. For "partyID" og "caseID" må verdiene harmoniseres med den i forespørselen, så langt de er verdier som sendes i forespørselen. 
- Verdiene i **rødt** viser hva som vil utløse feilen.


| Dokument / objekt	               | Beskrivelse	                                                   | Lenke                                                                 |
|----------------------------------|----------------------------------------------------------------|-----------------------------------------------------------------------|
| Test-caser for utleveringspålegg | 	Oversikt over alle testene finansforetakene bør gjennomføre.	 | [Excel fil](assets/Politi-Utlevering-ValidationExtraditionOrder.xlsx) |

Se [gyldige forespørsler i forhold til utleveringspålegget for Politi-Utlevering](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_l%C3%B8sningsbeskrivelse.html#gyldige-foresp%C3%B8rsler-i-forhold-til-utleveringsp%C3%A5legget-for-politi-utlevering).

## Change Log

| Date     | Version | Change                                                                                         |
|----------|---------|------------------------------------------------------------------------------------------------|
| 18.03.25 | 2.0.1   | Slått sammen punkter 6, 7, 8 til nytt punkt 6 for tydeligere beskrivelse.                      |
| 23.08.24 | 2.0     | Lagt til testing av forespørsler/utleveringspålegg                                             |
| 20.03.24 | 2.0     | New version of the DSOP Control API generating extensive changes throughout all documentation. |
| 20.11.24 | 2.1     | Validering av signatur nå gjennom header for utleveringspålegg                                 |
