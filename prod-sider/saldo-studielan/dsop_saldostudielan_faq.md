---
title: "FAQ"
slug: "dsop_saldostudielan_faq"
id: "dsop_saldostudielan_faq"
---

*Send e-post til [DSOP Support](https:/online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi?_ dersom FAQ ikke besvarer ditt spørsmål.*

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

| Miljø | Endepunkt | Metode |
| ----------------- | -------------------------------------------------------------------------- | -------------- |
| Test | [https:/test.maskinporten.no/token](https:/test.maskinporten.no/token) | POST |
| Produksjon | [https:/www.maskinporten.no/token](https:/www.maskinporten.no/token) | POST |

### Lånekassen

| Miljø | Endepunkt | Metode |
| ----------------- | ----------------- | -------------- |
| Test | [https:/ekstern01.api.test.lanekassen.no/saldo/v1/Accounts](https:/ekstern01.api.test.lanekassen.no/saldo/v1/Accounts) | GET |
| Produksjon | [https:/ekstern01.api.lanekassen.no/saldo/v1/Accounts](https:/ekstern01.api.lanekassen.no/saldo/v1/Accounts) | GET |

### Altinn

| Miljø | Endepunkt | Metode |
| ----------------- | ----------------- | -------------- |
| Test | [https:/tt02.altinn.no/api/ConsentRequest?ForceEIAuthentication](https:/tt02.altinn.no/api/ConsentRequest?ForceEIAuthentication)
| Produksjon | [https:/www.altinn.no/api/ConsentRequest?ForceEIAuthentication](https:/www.altinn.no/api/ConsentRequest?ForceEIAuthentication)
| Altinn | Samtykkeløsningen | altinn:consentrequests.read