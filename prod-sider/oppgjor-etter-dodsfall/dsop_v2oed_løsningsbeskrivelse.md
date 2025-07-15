---
title: "Dsop V2oed LøSningsbeskrivelse
id: dsop_v2oed_løsningsbeskrivelse"
slug: "dsop_v2oed_løsningsbeskrivelse"
keywords: ["sample"]
sidebar: "main_sidebar
permalink: dsop_v2oed_løsningsbeskrivelse.html"
folder: "section1"
---

## Kontrollinformasjon - Innhenting av kontoinformasjon til Digdir

Tjenesten er basert på DSOP Kontrollinformasjon fellesstandard og gjelder utlevering av kontoopplysninger til Digitaliseringsdirektoratet (Digdir).
Se [Juridiske rammebetingelser](/dsop_v2oed_juridisk) for tjenesten *Oppgjør etter dødsfall*.

[<!-- Comment fixed -->](images/oed_figur_1.png)

### Trinn 1 - DSOP Oversikt over kundeforhold

Digdir skal bruke *DSOP Oversikt over kundeforhold* API-et på følgende måte:

#### Tillatte endepunkter i trinn 1 for tjenesten Oppgjør etter dødsfall

| Endepunkter | Scope fra Maskinporten | Minimum nødvendig versjon av API |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------------------------------- |
| [customerRelationships](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_api_specification.html#api-for-customer-relation-overview) | `bits:kundeforhold` | V.2.0 |

#### Gyldig forespørsel - Trinn 1

Digdir skal bruke endepunktet *customerRelationships* på følgende måte:

| Input-felter         | Beskrivelse                                                                                                                                                                                                                                                                                                       |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authorization        | Gyldig token fra Maskinporten (`bits:kundeforhold`).                                                                                                                                                                                                                                                              |
| CustomerID           | FNR/D-NR til avdøde.                                                                                                                                                                                                                                                                                              |
| CorrelationID        | Uuid-verdi for unik teknisk referanse til forespørselen.                                                                                                                                                                                                                                                          |
| Legal-Mandate        | Lovhjemmel for tjenesten skal være "Arveloven &sect; 92 første ledd og &sect; 118, jf. &sect; 88 a, jf. forskrift om Digitalt dødsbo". URL Encoded verdien skal altså være "Arveloven%20%C2%A7%2092%20f%C3%B8rste%20ledd%20og%20%C2%A7%20118%2C%20
| API-spesifikasjon | Følgende endepunkter inngår i tjenesten *Oppgjør etter dødsfall*: &gt;- Account details<br  />/accounts/listAccounts)    
| Legal-Mandate                                                                                                                                                       | Lovhjemmel for tjenesten skal være "Arveloven &sect; 92 første ledd og &sect; 118, jf. &sect; 88 a, jf. forskrift om Digitalt dødsbo". URL Encoded verdien skal altså være "Arveloven%20%C2%A7%2092%20f%C3%B8rste%20ledd%20og%20%C2%A7%20118%2C%20
forespørsler fra etat blir validert <u />For de andre endepunktene (Account Details og Transactions):<u />