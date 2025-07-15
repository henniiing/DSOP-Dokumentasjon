---
title: "Dsop V2oed LøSningsbeskrivelse"
id: "dsop_v2oed_løsningsbeskrivelse"
slug: "dsop_v2oed_løsningsbeskrivelse"
---

﻿---
title: Løsningsbeskrivelse for Oppgjør etter dødsfall
keywords: sample
sidebar: main_sidebar
permalink: dsop_v2oed_løsningsbeskrivelse.html
folder: section1
---


## Kontrollinformasjon - Innhenting av kontoinformasjon til Digdir


Tjenesten er basert på DSOP Kontrollinformasjon fellesstandard og gjelder utlevering av kontoopplysninger til Digitaliseringsdirektoratet (Digdir).
Se [Juridiske rammebetingelser](/dsop_v2oed_juridisk) for tjenesten *Oppgjør etter dødsfall*.


[<!-- Comment fixed -->](images/oed_figur_1.png)


### Trinn 1 - DSOP Oversikt over kundeforhold

Digdir skal bruke *DSOP Oversikt over kundeforhold* API-et på følgende måte:

#### Tillatte endepunkter i trinn 1 for tjenesten Oppgjør etter dødsfall

| Endepunkter                                                                                                                            | Scope fra Maskinporten | Minimum nødvendig versjon av API |
|----------------------------------------------------------------------------------------------------------------------------------------|------------------------|----------------------------------|
| [customerRelationships](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_api_specification.html#api-for-customer-relation-overview) | `bits:kundeforhold`    | V.2.0                            |



#### Gyldig forespørsel - Trinn 1

Digdir skal bruke endepunktet *customerRelationships* på følgende måte:

| Input-felter         | Beskrivelse                                                                                                                                                                                                                                                                                                       |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authorization        | Gyldig token fra Maskinporten (`bits:kundeforhold`).                                                                                                                                                                                                                                                              |
| CustomerID           | FNR/D-NR til avdøde.                                                                                                                                                                                                                                                                                              |
| CorrelationID        | Uuid-verdi for unik teknisk referanse til forespørselen.                                                                                                                                                                                                                                                          |
| Legal-Mandate        | Lovhjemmel for tjenesten skal være “Arveloven § 92 første ledd og § 118, jf. § 88 a, jf. forskrift om Digitalt dødsbo”. URL Encoded verdien skal altså være “Arveloven%20%C2%A7%2092%20f%C3%B8rste%20ledd%20og%20%C2%A7%20118%2C%20<br > - Det forventes følgende volum fra Digdir per år for forespørsel om kontoliste, transaksjoner og kontodetaljer: **150.000**                                                                                                                                                                                                                                                     |
| Sikkerhetsdokumentasjon                          | Sikkerhetsdokumentasjon for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Oppgjør etter dødsfall*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [Sikkerhetsdokumentasjon](/dsop_v2fellesstandard_securitydesign).                                                                                                                                                                     |
| Arkitektur                                       | Arkitektur for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Oppgjør etter dødsfall*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Dokumentasjon på engelsk: [Architecture documentation](/dsop_v2fellesstandard_architecturedocument).                                                                                                                                  |
| API-spesifikasjon                                | Følgende endepunkter inngår i tjenesten *Oppgjør etter dødsfall*: <br ><br >minimum versjon 2.0 av DSOP Kontroll API-et som skal benyttes for tjenesten. <br >Finansforetakene skal returnere en HTTP 400 med ACC-001 og best mulig feilbeskrivelse dersom etat sender en forespørsel til ugyldige endepunkter. Se [HTTP-feilkoder og spesifikke feilsituasjoner med tilhørende meldingskoder](/assets/HTTP error codes V.2.pdf)/. | Dokumentasjon på engelsk: [API-specification](/dsop_v2fellesstandard_api_specification).                                                                                                                                              |
| Overordnet spesifikasjon av DSOP-Kontroll API-et | Den overordnede spesifikasjon av DSOP Kontroll API-et for DSOP Kontrollinformasjon fellesstandard gjelder for løsningen *Oppgjør etter dødsfall*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | [Overall description of the DSOP Control API](/dsop_v2fellesstandard_specification_of_eoppslag)                                                                                                                                       |
| Integrasjonstesting                              | Definerte test-caser for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Oppgjør etter dødsfall*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | [Internal testing / quality assurance DSOP Control Common Standard](/dsop_v2fellesstandard_test).                                                                                                                                     |




#### Tillatte endepunkter i trinn 2 for tjenesten Oppgjør etter dødsfall

| Endepunkter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Scope fra Maskinporten  | Minimum nødvendig versjon av API |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|----------------------------------|
| [Accounts (kontoliste)](https:/bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/accounts/listAccounts)    <br > [Transactions (transaksjoner)](https:/bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/transactions/listTransactions) | `bits:kontoinformasjon` | V.2.0                            |



#### Gyldig forespørsel - Trinn 2a

Digdir skal bruke endepunktet *Accounts* på følgende måte:

| Input-felter                                                                                                                                                        | Beskrivelse                                                                                                                                                                                                                                                                                                       |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [AccountInfoRequestId](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#accountinforequestid)                                     | Uuid-verdi for et saksnummer i digitalt dødsbo-løsningen hos Digdir.                                                                                                                                                                                                                                              |
| [CorrelationID](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#correlationid)                                                   | Uuid-verdi for unik teknisk referanse til forespørselen.                                                                                                                                                                                                                                                          |
| Legal-Mandate                                                                                                                                                       | Lovhjemmel for tjenesten skal være “Arveloven § 92 første ledd og § 118, jf. § 88 a, jf. forskrift om Digitalt dødsbo”. URL Encoded verdien skal altså være “Arveloven%20%C2%A7%2092%20f%C3%B8rste%20ledd%20og%20%C2%A7%20118%2C%20<br >

 Kategorisering av utlevering av kontoopplysninger på feltnivå:
* <i><i>
* <i><i>
* <i><i>
* <i><i>
* <i>

<br >. Ved å validere og logge input-parametere fra etat riktig, vil
finansforetakene være bedre egnet til å unngå levering av overskuddsinformasjon. Implementering av slik logikk er
finansforetakenes ansvar.

For å sikre godt kontrollnivå på tvers av finansforetakene, er det beskrevet et sett med anbefalinger om generelle og
generiske valideringer i *DSOP Kontrollinformasjon fellesstandard* og spesifikke valideringer knyttet til tjenesten
*Oppgjør etter dødsfall*.


#### Generelle og generiske valideringer

Disse er beskrevet på [«Generic DSOP Control validations»](/dsop_v2fellesstandard_validation).
<br > Se gjeldende API-spesifikasjon for teknisk beskrivelse: [API Specification](/dsop_v2fellesstandard_api_specification)


<u><u>

| Input parametere              | Forventet verdi                                                                     | Forslag til validering                                                                                                                                                                                                                       |
|-------------------------------|-------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AccountInfoRequestID (M)      | Uuid referanse til saksnr.                                                          | Formatet kan valideres. I tillegg kan denne parameteren valideres iht definisjonen i [Overall description of the DSOP Control API](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#accountinforequestid). |
| CorrelationID (M)             | Uuid verdi til en unik teknisk referanse for forespørselen.                         | Formatet kan valideres. I tillegg kan denne parameteren valideres iht definisjonen i [Overall description of the DSOP Control API](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#correlationid).        |
| Legal-Mandate (M)             | "Arveloven § 92 første ledd og § 118, jf. § 88 a, jf. forskrift om Digitalt dødsbo" | Strengen skal være I ‘encoded’ format og burde valideres iht til [Juridiske rammebetingelser Oppgjør etter dødsfall](/dsop_v2oed_juridisk).                                                                |
| PartyID (M)                   | Kontrollbjektet: FNR eller D.NR til avdøde                                          | Formatet kan valideres.                                                                                                                                                                                                                      |
| OnlyPrimaryOwner (M)          | "TRUE"                                                                              | *Oppgjør etter dødsfall* skal kun tillate verdien “TRUE”.                                                                                                                                                                                    |
| AdditionalReferenceID (O)     | Ingen.                                                                              | -                                                                                                                                                                                                                                            |
| AdditionalReferenceIDType (O) | Ingen.                                                                              | -                                                                                                                                                                                                                                            |
| RequesterID (O)               | Ingen.                                                                              | -                                                                                                                                                                                                                                            |
| fromDate (M)                  | Opptil 3 måneder før dødens dato (dødsfallstidspunkt).                                   | Formatet kan valideres. I tillegg bør verdien også valideres slik at datoen er opptil 3 måneder før dødsfallstidspunktet i FREG.                                                                                                             |
| toDate (M)                    | Dagens dato (forespørselsdato).                                                     | Formatet kan valideres.                                                                                                                                                                                                                      |

*Se [HTTP error codes and specific error situations with associated message codes](/assets/HTTP error codes V.2.pdf)/.*


<u><u>

| Input parametere              | Forventet verdi                                                                     | Forslag til validering    |
|-------------------------------|-------------------------------------------------------------------------------------|---------------------------|
| AccountReference (M)          | Uuid referanse til kontonr.                                                         | -                         |
| AccountInfoRequestID (M)      | Uuid referanse til saksnr.                                                          | Samme som for *Accounts*. |
| CorrelationID (M)             | Uuid verdi til en unik teknisk referanse for forespørselen.                         | Samme som for *Accounts*. |
| Legal-Mandate (M)             | "Arveloven § 92 første ledd og § 118, jf. § 88 a, jf. forskrift om Digitalt dødsbo" | Samme som for *Accounts*. |
| AdditionalReferenceID (O)     | Ingen.                                                                              | -                         |
| AdditionalReferenceIDType (O) | Ingen.                                                                              | -                         |
| RequesterID (O)               | Ingen.                                                                              | -                         |
| fromDate (M)                  | Inntil 3 måneder før dødsfallstidspunkt.                                          | Samme som for *Accounts*. |
| toDate (M)                    | Dagens dato (forespørselsdato).                                                     | Samme som for *Accounts*. | 

*Se [HTTP error codes and specific error situations with associated message codes](/assets/HTTP error codes V.2.pdf)/.*



## Endringslogg

| Dato     | Versjon | Endring                                                                                                                                                                                                                                                                                         |
|----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 20.03.25 | 2.1     | Oppdatert feltbehov                                                                                                                                                                                                                                                                             |
| 18.03.25 | 2.0.2   | Presisering av "Dagens dato" og "dødsfallstidspunkt". Spesifisert grunnlaget for utlevering av kontoinformasjon i henhold til DSOP fellesstandard.                                                                                                                                              |
| 28.02.25 | 2.0.1   | Seksjonen “Nødvendig filtrering av data ved utlevering per endepunkt» har endret navn til «Utlevering av datafelter per endepunkt» og kategoriene er endret slik at de følger prinsipper for utlevering. <br > Alle tabellene over utlevering av felt er oppdatert med den nye kategoriseringen. |
| 03.09.24 | 2.0     | Lagt til løsningsbeskrivelse                                                                                                                                                                                                                                                                    |
