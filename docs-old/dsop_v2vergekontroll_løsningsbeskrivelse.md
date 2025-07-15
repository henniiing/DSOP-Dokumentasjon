---
title: "Løsningsbeskrivelse for Vergekontroll"
slug: "dsop_v2vergekontroll_løsningsbeskrivelse"
id: "dsop_v2vergekontroll_løsningsbeskrivelse"
keywords:
  - "sample"
---

## Kontrollinformasjon - Innhenting av kontoinformasjon til SRF


[<!-- Comment fixed -->](images/vergekontroll_figur_1.png)

Tjenesten er basert på DSOP Kontrollinformasjon fellesstandard og gjelder utlevering av kontoopplysninger til Statens sivilrettsforvaltning (SRF).
Se [Juridiske rammebetingelser](/dsop_v2vergekontroll_juridisk) for *Vergekontroll*.





### Trinn 1 - DSOP Oversikt over kundeforhold

Statens sivilrettsforvaltning (SRF) skal bruke *DSOP Oversikt over kundeforhold* API-et på følgende måte:

#### Tillatte endepunkter i trinn 1 for tjenesten Vergekontroll

| Endepunkter                                                                                                                            | Scope fra Maskinporten | Minimum nødvendig versjon av API |
|----------------------------------------------------------------------------------------------------------------------------------------|------------------------|----------------------------------|
| [customerRelationships](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_api_specification.html#api-for-customer-relation-overview) | `bits:kundeforhold`    | V.2.0                            |



#### Gyldig forespørsel - Trinn 1

SRF skal bruke endepunktet *customerRelationships* på følgende måte:

| Input-felter         | Beskrivelse                                                                                                                                                                                                                                                                                                                                    |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authorization        | Gyldig token fra Maskinporten (`bits:kundeforhold`).                                                                                                                                                                                                                                                                                           |
| CustomerID           | FNR/D-NR til vergehaver.                                                                                                                                                                                                                                                                                                                       |
| CorrelationID        | Uuid-verdi for unik teknisk referanse til forespørselen.                                                                                                                                                                                                                                                                                       |
| Legal-Mandate        | Lovhjemmel for tjenesten skal være "Vergemålsloven § 54 (2), jf. vergemålsforskriften §20a (2), jf. vergemålsforskriften §20a (1) a". URL Encoded verdien skal altså være “Vergem%C3%A5lsloven%20%C2%A7%2054%20(2)%2C%20jf.<br >%20vergem%C3%A5lsforskriften%20%C2%A720a%20(1)%20a”. |
| AccountInfoRequestID | Uuid-verdi for saksnummer i SRF.                                                                                                                                                                                                                                                                                                               |
| fromDate             | Fra 1 januar i siste kalenderår.                                                                                                                                                                                                                                                                                                               |
| toDate               | Til 31. desember i siste kalenderår. Dato skal være nyere eller likt fromDate.                                                                                                                                                                                                                                                                 |
| onlyPrimaryOwner     | Kun “onlyPrimaryOwner” = “TRUE”.                                                                                                                                                                                                                                                                                                               |

Se datamodell for [customerRelationships](/dsop_v2fellesstandard_customerrelationships).


### Trinn 2 a og b - DSOP Kontrollinformasjon

#### Generell informasjon

| Informasjon om                                   | Beskrivelse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Link                                                                                                                                                                                                                                                                              |
|--------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Funksjonell spesifikasjon                        | Den funksjonelle spesifikasjonen for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Vergekontroll*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Dokumentasjon på engelsk: [Functional specification DSOP Control Common Standard](/dsop_v2fellesstandard_functionalspecification).                                                                                                              |
| Informasjon om volum og responstider             | Responstidene kan variere mellom finansinstitusjoner, men det typiske mønsteret er at forespørsler etter data vil ha raske responstider (sekunder), mens store historiske forespørsler kan ta lengre tid.<br >- Accounts<br ><br >minimum versjon 2.0 av DSOP Kontroll API-et som skal benyttes for tjenesten. <br >Finansforetakene skal returnere en HTTP 400 med ACC-001 og best mulig feilbeskrivelse dersom etat sender en forespørsel til ugyldige endepunkter. Se [HTTP-feilkoder og spesifikke feilsituasjoner med tilhørende meldingskoder](/assets/HTTP error codes V.2.pdf)/. | Dokumentasjon på engelsk: [API-specification](/dsop_v2fellesstandard_api_specification).                                                                                                                                                        |
| Overordnet spesifikasjon av DSOP-Kontroll API-et | Den overordnede spesifikasjon av DSOP Kontroll API-et for DSOP Kontrollinformasjon fellesstandard gjelder for løsningen *Vergekontroll*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [Overall description of the DSOP Control API](/dsop_v2fellesstandard_specification_of_eoppslag)                                                                                                                                                 |
| Integrasjonstesting                              | Definerte test-caser for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Vergekontroll*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | [Internal testing / quality assurance DSOP Control Common Standard](/dsop_v2fellesstandard_test).                                                                                                                                               |
| Datavalidering                                   | Generelle anbefalinger om validering i DSOP Kontrollinformasjon fellesstandard er også gjeldende for utlevering av kontoinformasjon i tjenesten *Vergekontroll*.<br >Se [eget avsnitt nede på siden](https:/dokumentasjon.dsop.no/dsop_v2vergekontroll_l%C3%B8sningsbeskrivelse.html#datavalidering). |




#### Tillatte endepunkter i trinn 2 for tjenesten Vergekontroll

| Endepunkter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Scope fra Maskinporten  | Minimum nødvendig versjon av API |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|----------------------------------|
| [Accounts (kontoliste)](https:/bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/accounts/listAccounts)    <br >%20vergem%C3%A5lsforskriften%20%C2%A7%2020%20(2)%2C%20jf.<br >

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
*Vergekontroll*.


#### Generelle og generiske valideringer

Disse er beskrevet på [«Generic DSOP Control validations»](/dsop_v2fellesstandard_validation).
<br > Se gjeldende API-spesifikasjon for teknisk beskrivelse: [API Specification](/dsop_v2fellesstandard_api_specification)


<u><u>

| Input parametere              | Forventet verdi                                                                                                                                                            | Forslag til validering                                                                                                                                                                                                                       |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AccountInfoRequestID (M)      | Uuid referanse til saksnr.                                                                                                                                                 | Formatet kan valideres. I tillegg kan denne parameteren valideres iht definisjonen i [Overall description of the DSOP Control API](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#accountinforequestid). |
| CorrelationID (M)             | Uuid verdi til en unik teknisk referanse for forespørselen.                                                                                                                | Formatet kan valideres. I tillegg kan denne parameteren valideres iht definisjonen i [Overall description of the DSOP Control API](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#correlationid).        |
| Legal-Mandate (M)             | "Vergem%C3%A5lsloven%20%C2%A7%2054%20(2)%2C%20jf.<br >%20vergem%C3%A5lsforskriften%20%C2%A7%2020a%20(1)%20b-e" | Strengen skal være I ‘encoded’ format og burde valideres iht til [Juridiske rammebetingelser Vergekontroll](/dsop_v2vergekontroll_juridisk).                                                               |
| PartyID (M)                   | Kontrollbjektet: FNR eller D.NR til vergehaver                                                                                                                             | Formatet kan valideres.                                                                                                                                                                                                                      |
| OnlyPrimaryOwner (M)          | "TRUE"                                                                                                                                                                     | *Vergekontroll* skal kun tillate verdien “TRUE”.                                                                                                                                                                                             |
| AdditionalReferenceID (O)     | FNR/D-NR til verge.                                                                                                                                                        | FNR/D-NR til verge bør valideres mtp. format og verifiseres mot FREG.                                                                                                                                                                        |
| AdditionalReferenceIDType (O) | "srf"                                                                                                                                                                      | Formatet kan valideres.                                                                                                                                                                                                                      |
| RequesterID (O)               | Ingen.                                                                                                                                                                     | -                                                                                                                                                                                                                                            |
| fromDate (M)                  | Fra 1.januar i siste kalenderår.                                                                                                                                           | Formatet kan valideres. I tillegg bør verdien også valideres slik at datoen er i siste kalender år og iht. til gyldighetstidspunkt og evt. opphørstidspunkt for vergemål i FREG.                                                             |
| toDate (M)                    | Til 31. desember i siste kalenderår, nyere eller likt *fromDate*.                                                                                                          | Formatet kan valideres. I tillegg bør verdien også valideres slik at datoen er i siste kalender år og iht. til gyldighetstidspunkt og evt. opphørstidspunkt for vergemål i FREG.                                                             |                                                                                                                                                                                                                                                      |

*Se [HTTP error codes and specific error situations with associated message codes](/assets/HTTP error codes V.2.pdf)/.*


<u><u>

| Input parametere              | Forventet verdi                                                                                                                                                            | Forslag til validering    |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| AccountReference (M)          | Uuid referanse til kontonr.                                                                                                                                                | -                         |
| AccountInfoRequestID (M)      | Uuid referanse til saksnr.                                                                                                                                                 | Samme som for *Accounts*. |
| CorrelationID (M)             | Uuid verdi til en unik teknisk referanse for forespørselen.                                                                                                                | Samme som for *Accounts*. |
| Legal-Mandate (M)             | "Vergem%C3%A5lsloven%20%C2%A7%2054%20(2)%2C%20jf.<br >%20vergem%C3%A5lsforskriften%20%C2%A7%2020a%20(1)%20b-e" | Samme som for *Accounts*. |
| AdditionalReferenceID (O)     | FNR/D-NR til verge.                                                                                                                                                        | Samme som for *Accounts*. |
| AdditionalReferenceIDType (O) | "srf"                                                                                                                                                                      | Samme som for *Accounts*. |
| RequesterID (O)               | Ingen.                                                                                                                                                                     | -                         |
| fromDate (M)                  | Fra 1.januar i siste kalenderår.                                                                                                                                           | Samme som for *Accounts*. |
| toDate (M)                    | Til 31. desember i siste kalenderår, nyere eller likt *fromDate*.                                                                                                          | Samme som for *Accounts*. |                                                                                                                                                                                                                                                      |

*Se [HTTP error codes and specific error situations with associated message codes](/assets/HTTP error codes V.2.pdf)/.*



## Endringslogg

| Dato     | Versjon | Endring                             |
|----------|---------|-------------------------------------|
| 19.03.25 | 2.0.2   | Oppdatert feltbehov for accounts, accountDetails og transactions |
| 18.03.25 | 2.0.1   | Spesifisert grunnlaget for utlevering av kontoinformasjon i henhold til DSOP fellesstandard | 
| 07.08.24 | 2.0     | Lagt til versjon 2 av vergekontroll |
