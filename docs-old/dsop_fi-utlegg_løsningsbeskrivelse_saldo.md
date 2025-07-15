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

DENNE SIDEN LINKES TIL FRA ANDRE DOKUMENT, OG BØR IKKE ENDRES UTEN AVTALE MED TJENESTENEANSVARLIG.


<mark>
vil kontakte alle relevante kontaktpersoner når dokumentasjonen er ferdigstilt.*
<br >

Se datamodell for [customerRelationships](/dsop_v2fellesstandard_customerrelationships).

<br > - Det forventes følgende volum fra skatteetaten/Namsmannen per år for forespørsel om kontoliste og kontodetaljer: **Blir oppgitt ved en senere anledning**     |
| Sikkerhetsdokumentasjon                          | Sikkerhetsdokumentasjon for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *FI-Utlegg Saldo*.        | [Sikkerhetsdokumentasjon](/dsop_v2fellesstandard_securitydesign).       |
| Arkitektur | Arkitektur for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *FI-Utlegg Saldo*.           | Dokumentasjon på engelsk: [Architecture documentation](/dsop_v2fellesstandard_architecturedocument).              |
| API-spesifikasjon          | Følgende endepunkter inngår i tjenesten *FI-Utlegg Saldo*: <br >Finansforetakene skal påse at FI-Utlegg Saldo tjenesten ikke får tilgang til endepunktene *Transactions*, *Roles* og *Cards*. <br > av DSOP Kontroll API-et som skal benyttes for tjenesten. <br >Finansforetakene skal returnere en HTTP 400 med ACC-001 og best mulig feilbeskrivelse dersom etat sender en forespørsel til ugyldige endepunkter. Se [HTTP-feilkoder og spesifikke feilsituasjoner med tilhørende meldingskoder](/assets/HTTP error codes V.2.pdf)/. | Dokumentasjon på engelsk: [API-specification](/dsop_v2fellesstandard_api_specification).                                                                                                                                              |
| Overordnet spesifikasjon av DSOP-Kontroll API-et | Den overordnede spesifikasjon av DSOP Kontroll API-et for DSOP Kontrollinformasjon fellesstandard gjelder for løsningen *FI-Utlegg Saldo*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | [Overall description of the DSOP Control API](/dsop_v2fellesstandard_specification_of_eoppslag)                                                                                                                                       |
| Integrasjonstesting                              | Definerte test-caser for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *FI-Utlegg Saldo*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | [Internal testing / quality assurance DSOP Control Common Standard](/dsop_v2fellesstandard_test).                                                                                                                                     |




#### Tillatte endepunkter i trinn 2 for tjenesten FI-Utlegg Saldo

| Endepunkter | Scope fra Maskinporten  | Minimum nødvendig versjon av API |
|-------------|-------------------------|----------------------------------|
| [Accounts (kontoliste)](https:/bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/accounts/listAccounts)    <br >

 Kategorisering av utlevering av kontoopplysninger på feltnivå:
* <i><i>
* <i><i>
* <i><i>
* <i><i>
* <i>

<br >

Overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard) vil gjelde for denne tjenesten. 

#### Utlevering for Accounts (Kontoliste):
“Kontoliste” er det første endepunktet etat vil benytte for å få utlevert en liste over konti som tilhører kontrollobjektet. Videre bruk av tjenesten baseres på dette Kontoliste-kallet. 
 
For tjenesten Konkursbehandling gjelder følgende utlevering fra Kontoliste:  
* Liste over konti som skyldneren eide i den gjeldende tidsperioden. 

Se [gyldig forespørsel for endepunktet Accounts](https:/dokumentasjon.dsop.no/dsop_v2oed_l%C3%B8sningsbeskrivelse.html#gyldig-foresp%C3%B8rsel---trinn-2). 

Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).  

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https:/dokumentasjon.dsop.no/dsop_v2oed_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunkt).  

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
Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).  

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https:/dokumentasjon.dsop.no/dsop_v2oed_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunkt).  

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