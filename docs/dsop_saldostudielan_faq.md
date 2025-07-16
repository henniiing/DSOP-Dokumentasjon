---
title: "FAQ"
slug: "dsop_saldostudielan_faq"
id: "dsop_saldostudielan_faq"
---

*Send e-post til [DSOP Support](https://online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi?_sf=0&custSessionKey=&customerLang=no&noCookies=true) dersom FAQ ikke besvarer ditt spørsmål.*

## Virksomhetssertifikat
### Bruker du prodsertifikat til test eller motsatt?
I Maskinportens og Samtykkeløsningens testmiljø må dere bruke et test-virksomhetssertifikat. I produksjonsmiljø må virksomhetssertifikat for produksjon benyttes.

### Bruk av virksomhetssertifikat

Virksomhetssertifikat som kan brukes for tjenesten:

| Tilbyder | Type |
| ----------------- |--------------|
| Buypass | Virksomhetssertifikat for Norge |
| Commfides | Virksomhetssertifikat |

QC eSeal-sertifikat som brukes i forbindelse med PSD2 kan ikke benyttes.

## Hvilke URL-er benyttes for test- og produksjonsmiljø?

### Maskinporten

| Miljø | Endepunkt                                                                | Metode|
| ----------------- |--------------------------------------------------------------------------|--------------|
| Test | [https://test.maskinporten.no/token](https://test.maskinporten.no/token) | POST |
| Produksjon | [https://www.maskinporten.no/token](https://www.maskinporten.no/token)   | POST |

### Lånekassen

| Miljø | Endepunkt | Metode |
| ----------------- |-----------------|--------------|
| Test | [https://ekstern01.api.test.lanekassen.no/saldo/v1/Accounts](https://ekstern01.api.test.lanekassen.no/saldo/v1/Accounts)| GET |
| Produksjon | [https://ekstern01.api.lanekassen.no/saldo/v1/Accounts](https://ekstern01.api.lanekassen.no/saldo/v1/Accounts)	| GET |

### Altinn

| Miljø | Endepunkt | Metode |
| ----------------- |-----------------|--------------|
| Test  |[https://tt02.altinn.no/api/ConsentRequest?ForceEIAuthentication](https://tt02.altinn.no/api/ConsentRequest?ForceEIAuthentication)<br> [https://tt02.altinn.no/api/authorization/token?authcode={authcodeinrequest}](https://tt02.altinn.no/api/authorization/token?authcode={authcodeinrequest}) | POST<br>GET |
| Produksjon  |[https://www.altinn.no/api/ConsentRequest?ForceEIAuthentication](https://www.altinn.no/api/ConsentRequest?ForceEIAuthentication)<br> [https://www.altinn.no/api/authorization/token?authcode={authcodeinrequest}](https://www.altinn.no/api/authorization/token?authcode={authcodeinrequest})  | POST<br>GET |


## Hvilke scopes brukes i Maskinporten?
Tilgang til Lånekassens scope må tildeles av Lånekassen, mens scopene til Altinn er åpne og virksomhetene kan dermed legge til scopene selv.

* Scope til samtykkeløsningen er kun nødvendig dersom virksomheten vil bruke Maskinporten-token istedenfor virksomhetssertifikat for autentisering mot samtykkeløsningen.

| API-tilbyder |Tjenete | Scope |
| ----------------- |-----------------|
|Lånekassen  |Saldo på studielån| lanekassen:lan/v1/saldoopplysninger|
|Altinn  |Samtykkeløsningen| altinn:consentrequests.read<br>altinn:consentrequests.write<br>altinn:consenttokens|


## Hvilken rettighet i Altinn skal delegeres til tredjepart/leverandør?

* Tilgang til api for å hente saldoopplysninger
* Tilgang til å administrere samtykkeforespørsler og samtykketokens

Se prosess B-6 i onboardingsguide for veileding.
