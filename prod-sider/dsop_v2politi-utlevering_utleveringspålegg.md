---
title: "Dsop V2politi Utlevering UtleveringspåLegg
id: dsop_v2politi-utlevering_utleveringspålegg"
slug: "dsop_v2politi-utlevering_utleveringspålegg"
keywords: ["sample"]
sidebar: "beta_sidebar
permalink: dsop_v2politi-utlevering_BETA_utleveringspålegg.html"
folder: "section1"
---

<mark><strong>*Tjenesten er under utvikling, og endring i dokumentasjon på denne siden kan forekomme uten varsel. DSOP Forvaltning
vil kontakte alle relevante kontaktpersoner når dokumentasjonen er ferdigstilt.*</s>

[![alt text](images/politi-utlevering_04-1.png)](images/politi-utlevering_04-1.png)

Finansnæringen har konkludert at politiet kunne få utlevert kontoopplysninger via tjenesten Politi-Utlevering dersom det
foreligger et signert og maskinlesbart utleveringspålegg ved hver forespørsel til finansforetak. Dette gjelder for
hjemmel strpl. &sect;210 (3). Se [juridiske rammebetingelser Politi-Utlevering](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_juridisk.html).

[![alt text](images/politi-utlevering_04-2.png)](images/politi-utlevering_04-2.png)

Utleveringspålegget skal følge med i hver forespørsel som sendes til finansforetaket slik at banken får verifisert om
forespørselen stemmer med det påtalemyndigheten har godkjent.

## Om utleveringspålegget

Utleveringspålegget (extradition order, EO) er en JSON Web Token ([JWS](https://stackoverflow.com/questions/74257560/what-is-the-difference-between-jose-jwa-jwe-jwk-jws-and-jwt/74257561#74257561))
dvs. en åpen industristandard RFC 7519 for å representere krav (claims) på en sikker måte mellom to parter.
Alle feltene i utleveringspålegget er **<u>obligatoriske</u> FALSE: Account list will only return a list of accounts where PartyID is either primary owner, secondary owner or other role to the account(s). | Yes               |
| accountList | boolean | Allows delivering of information from the Account List endpoint. | Yes (Always true) |
| accountDetails | boolean | Allows delivering of information from the Account Details endpoint for all accounts returned by Account List. | Yes               |
| transactions | boolean | Allows delivering of information from the Transactions endpoint for all accounts returned by Account List. | Yes               |
| cards | boolean | Allows delivering of information from the Cards endpoint for all accounts returned by Account List. | Yes               |
| roles | boolean | Allows delivering of information from the Roles endpoint for all accounts returned by Account List. | Yes               |
| district - districtID | string | The police district ID the police lawyer belongs to. | Yes               |
| district - districtLabel | string | The name of the police district ID the police lawyer belongs to. | Yes               |
| approval - approvedByID | string | UserID to the police lawyer who has approved the extradition order. | Yes               |
| approval - approvedByName | string | Navn på politijuristen som har godkjent utleveringspålegget. | Yes               |
| approval - approvedByRole | string | The role of the police lawyer who has approved the extradition order, i.e. "Politiadvokat". | Yes               |
| approval - approvalTimestamp | string (datetime) | The date and time the extradition order was approved by the police lawyer. ISO Date (datetime): YYYY-MM-DDThh:mm:ssZ for UTC. | Yes               |
| caseID | string ($uuid) | The case number for the police to which the delivery order belongs. | Yes               |
| exp | numericdate | The time when the extradition order will expire (no longer be valid). | Yes               |

Eksempel på innhold (Payload)

```
\\\\\\{\}
    "extraditionOrderID": "a4f10250-7e30-11ee-b4b0-ab5ccb7c1184",
    "version": "1.0.0",
    "partyID": "31057710503",
    "mandate": "Straffeprosessloven &sect;210 (3) første punktum",
    "reason": "Opplysningene antas å ha betydning som bevis i straffesak der noen med skjellig grunn kan mistenkes for en straffbar handling.",
    "fromDate": "2022-01-01",
    "toDate": "2023-12-31",
    "onlyPrimaryOwner": false,
    "accountList": true,
    "accountDetails": true,
    "transactions": true,
    "cards": false,
    "roles": true,
    "district": \\\{\}
        "districtID": "56",
        "districtLabel": "Økokrim"
    \\\\\},
    "approval": \\\\\\{\}
        "approvedByID": "ABC123",
        "approvedByName": "Peder Aas",
        "approvedByRole": "Politiadvokat",
        "approvalTimestamp": "2024-04-05T08:27:18Z"
    \\\\\},
    "caseID": "81e97495-38c6-42dd-92a7-73654c48f0ac",
    "exp": 1636027948
\}
```

## Verifisering av utleveringspålegg

Utleveringspålegget er signert og med et spesifikt sertifikat som kun påtalemyndighet kan benytte. Sertifikatet vil ha
spesifikke OU og CN verdier:

<b>For produksjon</b>For test</b>Privat signeringsnøkkel</u>må</u>må</u>Viktig:</u &amp;amp; gt;
- Politiet må bilateralt avtale med finansinstitusjonene hvilke testobjekter (PartyID) som skal brukes i test-Utleveringspåleggene.
- Verdiene i **grønt** kan endres. For "partyID" og "caseID" må verdiene harmoniseres med den i forespørselen, så langt de er verdier som sendes i forespørselen.
- Verdiene i **rødt** viser hva som vil utløse feilen.

| Dokument / objekt | Beskrivelse | Lenke |
| ---------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Test-caser for utleveringspålegg | Oversikt over alle testene finansforetakene bør gjennomføre. | [Excel fil](assets/Politi-Utlevering-ValidationExtraditionOrder.xlsx) |

Se [gyldige forespørsler i forhold til utleveringspålegget for Politi-Utlevering](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_l%C3%B8sningsbeskrivelse.html#gyldige-foresp%C3%B8rsler-i-forhold-til-utleveringsp%C3%A5legget-for-politi-utlevering).

## Change Log

| Date | Version | Change |
| ---------- | --------- | ------------------------------------------------------------------------------------------------ |
| 18.03.25 | 2.0.1 | Slått sammen punkter 6, 7, 8 til nytt punkt 6 for tydeligere beskrivelse. |
| 23.08.24 | 2.0 | Lagt til testing av forespørsler/utleveringspålegg |
| 20.03.24 | 2.0 | New version of the DSOP Control API generating extensive changes throughout all documentation. |
| 20.11.24 | 2.1 | Validering av signatur nå gjennom header for utleveringspålegg |
