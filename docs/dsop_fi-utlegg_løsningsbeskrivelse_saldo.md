---
title: "Dsop Fi Utlegg LøSningsbeskrivelse Saldo"
id: "dsop_fi-utlegg_løsningsbeskrivelse_saldo"
slug: "dsop_fi-utlegg_løsningsbeskrivelse_saldo"
---

﻿---
title: Løsningsbeskrivelse - FI-Utlegg Saldo
keywords: sample
sidebar: beta_sidebar
permalink: dsop_fi-utlegg_saldo_løsningsbeskrivelse.html
folder: section1
---
{% comment %}
DENNE SIDEN LINKES TIL FRA ANDRE DOKUMENT, OG BØR IKKE ENDRES UTEN AVTALE MED TJENESTENEANSVARLIG.
{% endcomment %}

<mark><strong>*Tjenesten er under utvikling, og endring i dokumentasjon på denne siden kan forekomme uten varsel. DSOP Forvaltning
vil kontakte alle relevante kontaktpersoner når dokumentasjonen er ferdigstilt.*</strong>
<br>

## Kontrollinformasjon - Innhenting av kontoinformasjon til Skatt/Namsmannen


Tjenesten er basert på DSOP Kontrollinformasjon fellesstandard og gjelder utlevering av kontoopplysninger til skatteetaten og Namsmannen.
Se [Juridiske rammebetingelser](https://dokumentasjon.dsop.no/dsop_fi-utlegg_juridisk.html) for tjenesten *FI-Utlegg Saldo*.


[![alt text](images\FI-Utlegg_Saldo-2.png)](images/FI-Utlegg_Saldo-2.png)


### Trinn 1 - DSOP Oversikt over kundeforhold

Skatteetaten skal bruke endepunktet *customerRelationships* på følgende måte:

| Input-felter         | Beskrivelse                                                                                                                                                                                                                                                                                                                                                                              |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authorization        | Gyldig token fra Maskinporten (`bits:kundeforhold`).                                                                                                                                                                                                                                                                                                                                     |
| CustomerID           | FNR/D-NR eller orgnr til kontrollobjektet.                                                                                                                                                                                                                                                                                                                                               |
| CorrelationID        | Uuid-verdi for unik teknisk referanse til forespørselen.                                                                                                                                                                                                                                                                                                                                 |
| Legal-Mandate        | Lovhjemmel er: “FI-Utlegg-Test”. URL Encoded verdien skal altså være “FI-Utlegg-Test”. |
| AccountInfoRequestID | Uuid-verdi for saksnummer i Skatteetaten.                                                                                                                                                                                                                                                                                                                                                    |
| fromDate             | Kun dagens dato.                                                                                                                                                                                                                                                                                                                                                            |
| toDate               | Kun dagens dato.                                                                                                                                                                                                                                                                                                                                                        |
| onlyPrimaryOwner     | FI-Utlegg har kun mulighet til å bruke “onlyPrimaryOwner” = "TRUE"                                                                                                                                              | 

<br>

Se datamodell for [customerRelationships](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_customerrelationships.html).

<br>

### Trinn 2 a og b - DSOP Kontrollinformasjon

#### Generell informasjon

| Informasjon om     | Beskrivelse     | Link       |
|--------------------|-----------------|------------|
| Funksjonell spesifikasjon | Den funksjonelle spesifikasjonen for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *FI-Utlegg Saldo*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Dokumentasjon på engelsk: [Functional specification DSOP Control Common Standard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_functionalspecification.html).                                                                                                    |
| Informasjon om volum og responstider             | Responstidene kan variere mellom finansinstitusjoner, men det typiske mønsteret er at forespørsler etter data vil ha raske responstider (sekunder), mens store historiske forespørsler kan ta lengre tid.<br><br>Volum for tjenesten *FI-Utlegg Saldo*. <br> - Det forventes følgende volum fra skatteetaten/Namsmannen per år for forespørsel om kontoliste og kontodetaljer: **Blir oppgitt ved en senere anledning**     |
| Sikkerhetsdokumentasjon                          | Sikkerhetsdokumentasjon for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *FI-Utlegg Saldo*.        | [Sikkerhetsdokumentasjon](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_securitydesign.html).       |
| Arkitektur | Arkitektur for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *FI-Utlegg Saldo*.           | Dokumentasjon på engelsk: [Architecture documentation](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_architecturedocument.html).              |
| API-spesifikasjon          | Følgende endepunkter inngår i tjenesten *FI-Utlegg Saldo*: <br>- Accounts<br>- Account details<br><br>Finansforetakene skal påse at FI-Utlegg Saldo tjenesten ikke får tilgang til endepunktene *Transactions*, *Roles* og *Cards*. <br><br>Det er <u>minimum versjon 2.0</u> av DSOP Kontroll API-et som skal benyttes for tjenesten. <br><br>Finansforetakene skal returnere en HTTP 400 med ACC-001 og best mulig feilbeskrivelse dersom etat sender en forespørsel til ugyldige endepunkter. Se [HTTP-feilkoder og spesifikke feilsituasjoner med tilhørende meldingskoder](assets\HTTP error codes V.2.pdf){:target="_blank"}. | Dokumentasjon på engelsk: [API-specification](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_api_specification.html).                                                                                                                                              |
| Overordnet spesifikasjon av DSOP-Kontroll API-et | Den overordnede spesifikasjon av DSOP Kontroll API-et for DSOP Kontrollinformasjon fellesstandard gjelder for løsningen *FI-Utlegg Saldo*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | [Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html)                                                                                                                                       |
| Integrasjonstesting                              | Definerte test-caser for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *FI-Utlegg Saldo*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | [Internal testing / quality assurance DSOP Control Common Standard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_test.html).                                                                                                                                     |




#### Tillatte endepunkter i trinn 2 for tjenesten FI-Utlegg Saldo

| Endepunkter | Scope fra Maskinporten  | Minimum nødvendig versjon av API |
|-------------|-------------------------|----------------------------------|
| [Accounts (kontoliste)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/accounts/listAccounts)    <br> [Account Details (kontodetaljer)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/accounts/showAccountById) | `bits:kontoinformasjon` | V.2.0                            |



#### Gyldig forespørsel - Trinn 2a

Skatteetaten/Namsmannen skal bruke endepunktet *Accounts* på følgende måte:

| Input-felter          | Beskrivelse               |
|-----------------------|---------------------------|
| [AccountInfoRequestId](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#accountinforequestid)         | Uuid-verdi for et saksnummer i løsningen hos Skatteetaten/Namsmannen.|
| [CorrelationID](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#correlationid)                       | Uuid-verdi for unik teknisk referanse til forespørselen.                             |
| Legal-Mandate                                                                                                                           | Lovhjemmel i test er: “FI-Utlegg-Test”. URL Encoded verdien skal altså være “FI-Utlegg-Test”. | 
| PartyID                                                                                                                                 | FNR/D-NR eller Org. nr. til kontrollobjektet.                                           |
| onlyPrimaryOwner                                                                                                                        | Kun "onlyPrimaryOwner" = "TRUE".                                                     |
| [AdditionalReferenceID](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid)     | Ingen data.                                              |
| [AdditionalReferenceIDType](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid) | Ingen data.                                              |
| RequesterID                                                                                                                             | Ingen data i test, men vil kunne endres ifm. løsningsforslag.                        |
| fromDate                                                                                                                                | Dagens dato                                                                          |
| toDate                                                                                                                                  | Dagens dato                                                                          |


Se datamodell for [Accounts](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts.html).


#### Gyldig forespørsel - Trinn 2b
Etter vellykket response fra 2a, skal Skatteetaten/Namsmannen videre bruke endepunktene Account Details på følgende måte:


| Felter                    | Beskrivelse                          |
|---------------------------|--------------------------------------|
| accountReference          | Unik referanse til kontoen.          |
| AccountInfoRequestID      | Samme definisjon som for *Accounts*. |
| CorrelationID             | Samme definisjon som for *Accounts*. |
| Legal-Mandate             | Samme definisjon som for *Accounts*. |
| AdditionalReferenceID     | Samme definisjon som for *Accounts*. |
| AdditionalReferenceIDType | Samme definisjon som for *Accounts*. |
| RequesterID               | Samme definisjon som for *Accounts*. |
| fromDate                  | Samme definisjon som for *Accounts*. |
| toDate                    | Samme definisjon som for *Accounts*. |

Se datamodell for:
- [Account details](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails.html)


#### Utlevering av datafelter per endepunkt

Finansforetakene skal utlevere kontoopplysninger for denne tjenesten iht. gjeldende datamodell for DSOP Kontrollinformasjon API.
Se [Description of all input- and output parameters in the APIs](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#description-of-all-input--and-output-parameters-in-the-apis).

<br>

 Kategorisering av utlevering av kontoopplysninger på feltnivå:
* <i>Teknisk obligatorisk</i>: Denne opplysningen skal utleveres, ettersom det er teknisk påkrevet i API-et. Det er viktig å ta hensyn til forkortelsene (M, D og MC) fra datamodellen i DSOP Kontroll API-et når det gjelder utlevering av obligatoriske felter, spesielt der finansforetak ikke har mulighet til å utlevere data.
* <i>Skal utleveres</i>: Etaten har behov for denne opplysningen, og tjenesten skal derfor utlevere den dersom finansforetaket har informasjonen tilgjengelig.
* <i>Kan filtreres bort</i>: Etaten har ikke behov for denne opplysningen, og finansforetaket kan velge å utelate den fra utleveringen. Dersom etaten mottar denne opplysningen, skal den slettes.
* <i>Utleveres ikke</i>: Finansforetak vil ikke levere opplysning gjennom datafeltet.
* <i>Til vurdering</i>: Denne kategorien brukes for felt som ennå ikke er avklart. Det betyr at det fortsatt pågår en vurdering av om opplysningen skal utleveres eller ikke.

<br>

Overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard) vil gjelde for denne tjenesten. 

#### Utlevering for Accounts (Kontoliste):
“Kontoliste” er det første endepunktet etat vil benytte for å få utlevert en liste over konti som tilhører kontrollobjektet. Videre bruk av tjenesten baseres på dette Kontoliste-kallet. 
 
For tjenesten Konkursbehandling gjelder følgende utlevering fra Kontoliste:  
* Liste over konti som skyldneren eide i den gjeldende tidsperioden. 

Se [gyldig forespørsel for endepunktet Accounts](https://dokumentasjon.dsop.no/dsop_v2oed_l%C3%B8sningsbeskrivelse.html#gyldig-foresp%C3%B8rsel---trinn-2). 

Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).  

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2oed_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunkt).  

| Svar fra *Accounts*                                 | Datautlevering       |
|-----------------------------------------------------|----------------------|
| responseDetails.status                              | Teknisk obligatorisk | 
| responseDetails.message                             | Skal utleveres       |
|                                                     |                      |
| accounts.status                                     | Skal utleveres       | 
| accounts.servicer.identifier.countryOfResidence     | Skal utleveres       |
| accounts.servicer.identifier.value                  | Teknisk obligatorisk |
| accounts.servicer.identifier.type                   | Teknisk obligatorisk | 
| accounts.servicer.name                              | Skal utleveres       | 
| accounts.accountIdentifier                          | Teknisk obligatorisk | 
| accounts.accountReference                           | Teknisk obligatorisk |
| accounts.type                                       | Skal utleveres       |
| accounts.currency                                   | Skal utleveres       | 
| accounts.primaryOwner.permission                    | Skal utleveres       |
| accounts.primaryOwner.identifier.countryOfResidence | Skal utleveres       |
| accounts.primaryOwner.identifier.value              | Teknisk obligatorisk | 
| accounts.primaryOwner.identifier.type               | Teknisk obligatorisk | 
| accounts.primaryOwner.name                          | Skal utleveres       |
| accounts.primaryOwner.startDate                     | Skal utleveres       | 
| accounts.primaryOwner.endDate                       | Skal utleveres       |
| accounts.name                                       | Utleveres ikke       |
|                                                     |                      | 
| links.rel                                           | Teknisk obligatorisk | 
| links.href                                          | Teknisk obligatorisk | 



#### Utlevering for Account Details (Kontodetaljer):
Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).  

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2oed_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunkt).  

| Svar fra *AccountDetails*                          | Datautlevering       |
|----------------------------------------------------|----------------------|
| responseDetails.status                             | Teknisk obligatorisk |
| responseDetails.message                            | Skal utleveres       |
|                                                    |                      |
| account.status                                     | Skal utleveres       |
| account.servicer.identifier.countryOfResidence     | Skal utleveres       |
| account.servicer.identifier.value                  | Teknisk obligatorisk |
| account.servicer.identifier.type                   | Teknisk obligatorisk |
| account.servicer.name                              | Skal utleveres       |
| account.accountIdentifier                          | Teknisk obligatorisk |
| account.accountReference                           | Teknisk obligatorisk |
| account.type                                       | Skal utleveres       |
| account.currency                                   | Skal utleveres       |
| account.name                                       | Utleveres ikke       |
| account.balances.creditLineIncluded                | Skal utleveres       |
| account.balances.amount                            | Skal utleveres       |
| account.balances.creditDebitIdicator               | Skal utleveres       |
| account.balances.registered                        | Skal utleveres       |
| account.balances.type                              | Skal utleveres       | 
| account.balances.creditLineAmount                  | Skal utleveres       |
| account.balances.creditLineCurrency                | Skal utleveres       |
| account.balances.currency                          | Skal utleveres       |
| account.primaryOwner.permission                    | Skal utleveres       |
| account.primaryOwner.identifier.countryOfResidence | Skal utleveres       |
| account.primaryOwner.identifier.value              | Teknisk obligatorisk |
| account.primaryOwner.identifier.type               | Teknisk obligatorisk |
| account.primaryOwner.name                          | Skal utleveres       |
| account.primaryOwner.startDate                     | Skal utleveres       |
| account.primaryOwner.endDate                       | Skal utleveres       |
| account.startDate                                  | Skal utleveres       |
| account.endDate                                    | Skal utleveres       |



## Endringslogg

| Dato     | Versjon | Endring                                                                                                                 |
|----------|---------|-------------------------------------------------------------------------------------------------------------------------|
| 20.03.25 | 0.5     | Første versjon av dokumentasjon i prosjektet.                                |