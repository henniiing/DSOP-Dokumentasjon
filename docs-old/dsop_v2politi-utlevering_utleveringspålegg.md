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

<mark>
vil kontakte alle relevante kontaktpersoner når dokumentasjonen er ferdigstilt.*
<br >**.

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
| onlyPrimaryOwner             | boolean           | TRUE: Account list will only return a list of accounts where PartyID is the account owner. <br >
- OU: "Påtalemyndigheten"
- CN: "Godkjenning av utleveringspålegg"

<b><b>
- OU: "Påtalemyndigheten"
- CN: "Godkjenning av utleveringspålegg TEST"

Signering av utleveringspålegg er basert på standard PKI. <u>
virksomhetssertifikatet vil bli benyttet av påtalemyndigheten ved signeringen. JWT headeren *kid* vil inneholde en 
identifikator for sertifikatet som skal brukes til å validere signaturen.

Eksempel på header i utleveringspålegg:

```
/
```

Et [JSON Web Key Set](https:/datatracker.ietf.org/doc/html/rfc7517#section-5)/ (JWKS) som inneholder 

aktuelle sertifikater er tilgjengelig for både test og prod på [https:/www.politiet.no/.well-known/finans-jwks.json](https:/www.politiet.no/.well-known/finans-jwks.json)/. 
I listen (key-settet) vil man finne en JSON Web Key (JWK) med samme kid som i JWT headeren. Sertifikatet som ligger i 
denne JWK skal benyttes til valideringen. Sertifikatet og mellomliggende utstedersertifikater vil ligge i feltet [x5c](https:/datatracker.ietf.org/doc/html/rfc7517#section-4.7)/.


Eksempel på JWKS:

```
/, 
   /
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
være iht. spesifikasjonen over og i tillegg anbefales det å sjekke at:<u>

1. "mandate" skal enten være *"Straffeprosessloven §210 (3) første punktum"* eller *"Straffeprosessloven §210 (3) andre punktum"*
2. "reason" skal enten være *"Opplysningene antas å ha betydning som bevis i straffesak der noen med skjellig grunn kan mistenkes for en straffbar handling."* eller *"Opplysningene antas å ha betydning i en sak hvor noen er meldt savnet, og det er grunn til å frykte at noe har tilstøtt den savnede."*
3. Kombinasjoner av "mandate" og "reason" er slik at dersom *"mandate"="Straffeprosessloven §210 (3) første punktum"*, <u> *"reason"="Opplysningene antas å ha betydning i en sak hvor noen er meldt savnet, og det er grunn til å frykte at noe har tilstøtt den savnede."*.<u><u>
4. "fromDate" kan ikke være eldre enn 10 år før dagens dato.
5. "accounts" må være "true".
6. Det kan ikke være mer enn 90 dager mellom “approvalTimestamp” og "exp". Dagens dato bør være mellom "approvalTimestamp" og "exp". 



## Validering av forespørsel ift utleveringspålegg

Når utleveringspålegget er verifisert kan det brukes for å validere forespørselen det ble sendt med.

Se [Gyldige forespørsler i forhold til utleveringspålegget for Politi-Utlevering](https:/dokumentasjon.dsop.no/dsop_v2politi-utlevering_l%C3%B8sningsbeskrivelse.html#gyldige-foresp%C3%B8rsler-i-forhold-til-utleveringsp%C3%A5legget-for-politi-utlevering)



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

<u><u>
- Politiet må bilateralt avtale med finansinstitusjonene hvilke testobjekter (PartyID) som skal brukes i test-Utleveringspåleggene.
- Verdiene i **grønt** kan endres. For "partyID" og "caseID" må verdiene harmoniseres med den i forespørselen, så langt de er verdier som sendes i forespørselen. 
- Verdiene i **rødt** viser hva som vil utløse feilen.


| Dokument / objekt	               | Beskrivelse	                                                   | Lenke                                                                 |
|----------------------------------|----------------------------------------------------------------|-----------------------------------------------------------------------|
| Test-caser for utleveringspålegg | 	Oversikt over alle testene finansforetakene bør gjennomføre.	 | [Excel fil](/assets/Politi-Utlevering-ValidationExtraditionOrder.xlsx) |

Se [gyldige forespørsler i forhold til utleveringspålegget for Politi-Utlevering](https:/dokumentasjon.dsop.no/dsop_v2politi-utlevering_l%C3%B8sningsbeskrivelse.html#gyldige-foresp%C3%B8rsler-i-forhold-til-utleveringsp%C3%A5legget-for-politi-utlevering).

## Change Log

| Date     | Version | Change                                                                                         |
|----------|---------|------------------------------------------------------------------------------------------------|
| 18.03.25 | 2.0.1   | Slått sammen punkter 6, 7, 8 til nytt punkt 6 for tydeligere beskrivelse.                      |
| 23.08.24 | 2.0     | Lagt til testing av forespørsler/utleveringspålegg                                             |
| 20.03.24 | 2.0     | New version of the DSOP Control API generating extensive changes throughout all documentation. |
| 20.11.24 | 2.1     | Validering av signatur nå gjennom header for utleveringspålegg                                 |
