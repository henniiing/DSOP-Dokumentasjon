---
title: "Dsop V2kontroll Skatt LøSningsbeskrivelse"
id: "dsop_v2kontroll_skatt_løsningsbeskrivelse"
slug: "dsop_v2kontroll_skatt_løsningsbeskrivelse"
---

﻿---
title: Løsningsbeskrivelse for Skatt-Kontroll
keywords: sample
sidebar: main_sidebar
permalink: dsop_v2kontroll_skatt_løsningsbeskrivelse.html
folder: section1
---

## Kontrollinformasjon - Innhenting av kontoinformasjon til Skatteetaten

Tjenesten er basert på DSOP Kontrollinformasjon fellesstandard og gjelder utlevering av kontoopplysninger til Skatteetaten. 
Se [Juridiske rammebetingelser](/dsop_v2kontroll_skatt_juridisk) for *Skatt-kontroll*.  


<img > - Det forventes en betydelig økning i forespørsler til finansforetakene fra Skatteetaten. Totalt volum per år for forespørsel om kontoliste, transaksjoner og saldo:<br > - Estimert fremtidig: xxx.xxx |
| Sikkerhetsdokumentasjon                          | Sikkerhetsdokumentasjon for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Skatt-Kontroll*.                                                                                                                                                                                                                                                                                                                                                                                                                                            | [Sikkerhetsdokumentasjon](/dsop_v2fellesstandard_securitydesign).                                                                                                                                                                               |
| Arkitektur                                       | Arkitektur for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Skatt-Kontroll*.                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Dokumentasjon på engelsk: [Architecture documentation](/dsop_v2fellesstandard_architecturedocument).                                                                                                                                            |
| API-spesifikasjon                                | Følgende endepunkter inngår i tjenesten *Skatt-Kontroll*: <br >- Cards<br >                                                                                                                                                                                                                                                                                               | [Internal testing / quality assurance DSOP Control Common Standard](/dsop_v2fellesstandard_test).                                                                                                                                               |
| Datavalidering                                   | Generelle anbefalinger om validering i DSOP Kontrollinformasjon fellesstandard er også gjeldende for utlevering av kontoinformasjon i tjenesten *Skatt-Kontroll*.<br >Se [eget avsnitt nede på siden](https:/dokumentasjon.dsop.no/dsop_v2kontroll_skatt_løsningsbeskrivelse.html#datavalidering). |




#### Tillatte endepunkter i trinn 2 for tjenesten Skatt-Kontroll

| Endepunkter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Scope fra Maskinporten  | Minimum nødvendig versjon av API |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|----------------------------------|
| [Accounts (kontoliste)](https:/bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/accounts/listAccounts)    <br > [Roles (roller)](https:/bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/roles/listRoles) | `bits:kontoinformasjon` | V.2.0                            |



#### Gyldig forespørsel - Trinn 2a

Skatteetaten skal bruke endepunktet *Accounts* på følgende måte:

| Input-felter                                                                                                                                                        | Beskrivelse                                                                                                                                                                                                                                                                                                                                                                             |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [AccountInfoRequestId](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#accountinforequestid)                                     | Uuid-verdi for et saksnummer hos Skatteetaten.                                                                                                                                                                                                                                                                                                                                              |
| [CorrelationID](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#correlationid)                                                   | Uuid-verdi for unik teknisk referanse til forespørselen.                                                                                                                                                                                                                                                                                                                                |
| Legal-Mandate                                                                                                                                                       | Lovhjemmel er: “Skatteforvaltningsloven § 10-2 første ledd, jf. § 10-14, jf. skatteforvaltningsforskriften § 10-2-1”. URL Encoded verdien skal altså være “Skatteforvaltningsloven%20%C2%A7%2010-2%20f%C3%B8rste%20ledd%2C%20jf.%20%C2%A7%2010-14%2C%20jf.%20skatteforvaltningsforskriften%20%C2%A7%2010-2-1”.                            | 
| PartyID                                                                                                                                                             | FNR/D-NR eller orgnr til kontrollobjektet.                                                                                                                                                                                                                                                                                                                                              |
| onlyPrimaryOwner                                                                                                                                                    | "onlyPrimaryOwner" = "TRUE" eller "FALSE".                                                                                                                                                                                                                                                                                                                                              |
| [AdditionalReferenceID](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid)     | Ingen data.                                                                                               |
| [AdditionalReferenceIDType](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid) | Ingen data                                                                                                                                                                                                                                                                                                                                        |
| RequesterID                                                                                                                                                         | I tjenesten *Skatt-Kontroll* <u>

 Kategorisering av utlevering av kontoopplysninger på feltnivå:<u>
* <i><i>
* <i><i>
* <i><i>
* <i><i>
* <i>

<br > for de konti der Finansforetaket ikke utleverer data via de øvrige endepunktene i tjenesten.

<br >

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https:/dokumentasjon.dsop.no/dsop_v2kontroll_skatt_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunkt). 

| Svar fra *AccountDetails*                          | Datautlevering       |
|----------------------------------------------------|----------------------|
| responseDetails.status                             | Teknisk obligatorisk |
| responseDetails.message                            | Skal utleveres       |
|                                                    |                      |
| account.status                                     | Skal utleveres       |
| account.servicer.identifier.countryOfResidence     | Skal utleveres       |
| account.servicer.identifier.value                  | Teknisk obligatorisk |
| account.servicer.identifier.type                   | Teknisk obligatorisk |
| account.servicer.name                              | Utleveres ikke       |
| account.accountIdentifier                          | Teknisk obligatorisk |
| account.accountReference                           | Teknisk obligatorisk |
| account.type                                       | Skal utleveres       |
| account.currency                                   | Skal utleveres       |
| account.name                                       | Skal utleveres       |
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


#### Utlevering for Transactions (Transaksjoner):
Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).  

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https:/dokumentasjon.dsop.no/dsop_v2kontroll_skatt_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunkt). 

| Svar fra *Transactions*                                          | Datautlevering       |
|------------------------------------------------------------------|----------------------|
| responseDetails.status                                           | Teknisk obligatorisk |
| responseDetails.message                                          | Skal utleveres       |
|                                                                  |                      |
| transactions.transactionIdentifier                               | Teknisk obligatorisk |
| transactions.references.value                                    | Skal utleveres       |
| transactions.references.type                                     | Skal utleveres       |
| transactions.creditDebitIndicator                                | Skal utleveres       |
| transactions.reversalIndicator                                   | Skal utleveres       |
| transactions.status                                              | Skal utleveres       |
| transactions.transactionCode.domain                              | Skal utleveres       |
| transactions.transactionCode.family                              | Skal utleveres       |
| transactions.transactionCode.subFamily                           | Skal utleveres       |
| transactions.transactionCode.freeText                            | Skal utleveres       |
| transactions.bookingDate                                         | Skal utleveres       |
| transactions.valueDate                                           | Skal utleveres       |
| transactions.counterParties.accountIdentifier                    | Skal utleveres       |
| transactions.counterParties.identifier.countryOfResidence        | Skal utleveres       |
| transactions.counterParties.identifier.value                     | Teknisk obligatorisk |
| transactions.counterParties.identifier.type                      | Teknisk obligatorisk |
| transactions.counterParties.name                                 | Skal utleveres       |
| transactions.counterParties.type                                 | Skal utleveres       |
| transactions.counterParties.postalAddress.postCode               | Skal utleveres       |
| transactions.counterParties.postalAddress.type                   | Skal utleveres       |
| transactions.counterParties.postalAddress.streetName             | Skal utleveres       |
| transactions.counterParties.postalAddress.buildingNumber         | Skal utleveres       |
| transactions.counterParties.postalAddress.townName               | Skal utleveres       |
| transactions.counterParties.postalAddress.country                | Skal utleveres       |
| transactions.counterParties.postalAddress.addressLines           | Skal utleveres       |
| transactions.additionalInfo                                      | Skal utleveres       |
| transactions.currencyExchange.originalAmount                     | Skal utleveres       |
| transactions.currencyExchange.sourceCurrency                     | Skal utleveres       |
| transactions.currencyExchange.targetCurrency                     | Skal utleveres       |
| transactions.currencyExchange.unitCurrency                       | Skal utleveres       |
| transactions.currencyExchange.exchangeRate                       | Skal utleveres       |
| transactions.merchant                                            | Skal utleveres       |
| transactions.paymentCard.cardIdentifier                          | Teknisk obligatorisk |
| transactions.paymentCard.holderName                              | Skal utleveres       |
| transactions.paymentCard.startDate                               | Skal utleveres       |
| transactions.paymentCard.expiryDate                              | Skal utleveres       |
| transactions.paymentCard.cardIssuerName                          | Skal utleveres       |
| transactions.paymentCard.type                                    | Skal utleveres       |
| transactions.paymentCard.cardStatus                              | Skal utleveres       |
| transactions.paymentCard.versionNumber                           | Skal utleveres       |
| transactions.paymentCard.cardIssuerIdentifier.countryOfResidence | Skal utleveres       |
| transactions.paymentCard.cardIssuerIdentifier.value              | Teknisk obligatorisk |
| transactions.paymentCard.cardIssuerIdentifier.type               | Teknisk obligatorisk |
| transactions.registered                                          | Skal utleveres       |
| transactions.amount                                              | Skal utleveres       |
| transactions.currency                                            | Skal utleveres       |
|                                                                  |                      |
| links.rel                                                        | Teknisk obligatorisk |
| links.href                                                       | Teknisk obligatorisk |


#### Utlevering for Cards (Kort):
Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).  

For tjenesten *Skatt-Kontroll* gjelder følgende utlevering fra Cards:
* Dersom kontrollobjektet på en konto, har finansforetaket adgang til å filtrere bort informasjon om øvrige disponenter fra endepunktet *Cards*. 

<br >

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https:/dokumentasjon.dsop.no/dsop_v2kontroll_skatt_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunkt). 

| Svar fra *Roles*                                | Datautlevering       |
|-------------------------------------------------|----------------------|
| responseDetails.status                          | Teknisk obligatorisk |
| responseDetails.message                         | Skal utleveres       |
|                                                 |                      |
| roles.accountRole.permission                    | Skal utleveres       |
| roles.accountRole.identifier.countryOfResidence | Skal utleveres       |
| roles.accountRole.identifier.value              | Teknisk obligatorisk |
| roles.accountRole.identifier.type               | Teknisk obligatorisk |
| roles.accountRole.name                          | Skal utleveres       |
| roles.accountRole.startDate                     | Skal utleveres       |
| roles.accountRole.endDate                       | Skal utleveres       |



### Datavalidering

Det er finansforetakenes ansvar å validere forespørsler fra etat og det er opp til finansforetakene å sørge for at alle
forespørsler fra etat blir validert godt nok. Ved å validere og logge input-parametere fra etat riktig, vil
finansforetakene være bedre egnet til å unngå levering av overskuddsinformasjon. Implementering av slik logikk er
finansforetakenes ansvar.

For å sikre godt kontrollnivå på tvers av finansforetakene, er det beskrevet et sett med anbefalinger om generelle og
generiske valideringer i *DSOP Kontrollinformasjon fellesstandard* og spesifikke valideringer knyttet til tjenesten
*Skatt-Kontroll*.


#### Generelle og generiske valideringer

Disse er beskrevet på [«Generic DSOP Control validations»](/dsop_v2fellesstandard_validation).
<br > Se gjeldende API-spesifikasjon for teknisk beskrivelse: [API Specification](/dsop_v2fellesstandard_api_specification)


<u><u>

| Input parametere              | Forventet verdi        | Forslag til validering    |
|-------------------------------|------------------------|---------------------------|
| AccountInfoRequestID (M)      | Uuid referanse til saksnr.                         | Formatet kan valideres. I tillegg kan denne parameteren valideres iht definisjonen i [Overall description of the DSOP Control API](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#accountinforequestid). |
| CorrelationID (M)             | Uuid verdi til en unik teknisk referanse for forespørselen.                                                                                       | Formatet kan valideres. I tillegg kan denne parameteren valideres iht definisjonen i [Overall description of the DSOP Control API](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#correlationid).        |
| Legal-Mandate (M)             | “Skatteforvaltningsloven%20%C2%A710-2%20f%C3%B8rste%20ledd%2C%20jf.%20skatteforvaltningsforskriften%20%C2%A710-2-1" | Strengen skal være I ‘encoded’ format og burde valideres iht til [Juridiske rammebetingelser Skatt-Kontroll](/dsop_v2kontroll_skatt_juridisk).                                                       |
| PartyID (M)                   | Kontrollbjektet: Organisasjonsnummer, FNR eller D.NR.                                                                                             | Formatet kan valideres.                                                                                                                                                                                                                      |
| OnlyPrimaryOwner (M)          | "FALSE" eller "TRUE"                                                                                                                              | Formatet kan valideres.                                                                                                                                                                                                                      |
| AdditionalReferenceID (O)     | Ingen                                                                                                                    | -                                                                              |
| AdditionalReferenceIDType (O) | Ingen                                                                                                                                         | -                                                                                                                                                                                                                      |
| RequesterID (O)               | Representasjon av brukerID til saksbehandleren.                                                                                                    | Verdi <u><u>
| fromDate (M)                  | Opptil 10 år før dagens dato.                                                                                                                     | Formatet kan valideres. I tillegg bør verdien også valideres slik at datoen ikke er eldre en 10 år før dagens dato.                                                                                                                          |
| toDate (M)                    | Dagens dato.                                                                                                                                      | Formatet kan valideres.                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                      |

*Se [HTTP error codes and specific error situations with associated message codes](https:/dokumentasjon.dsop.no/assets/HTTP%20error%20codes%20V.2.pdf).*


<u><u>

| Input parametere              | Forventet verdi                                                                                                                                   | Forslag til validering    |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| AccountReference (M)          | Uuid referanse til kontonr.                                                                                                                       | -                         |
| AccountInfoRequestID (M)      | Uuid referanse til saksnr.                                                                                                                        | Samme som for *Accounts*. |
| CorrelationID (M)             | Uuid verdi til en unik teknisk referanse for forespørselen.                                                                                       | Samme som for *Accounts*. |
| Legal-Mandate (M)             | “Skatteforvaltningsloven%20%C2%A710-2%20f%C3%B8rste%20ledd%2C%20jf.%20skatteforvaltningsforskriften%20%C2%A710-2-1" | Samme som for *Accounts*. |
| AdditionalReferenceID (O)     | Ingen                                                                                                                    | - |
| AdditionalReferenceIDType (O) | Ingen                                                                                                                                            | - |
| RequesterID (O)               | Representasjon av brukerID til saksbehandleren.                                                                                                    | Samme som for *Accounts*. |
| fromDate (M)                  | Opptil 10 år før dagens dato.                                                                                                                     | Samme som for *Accounts*. |
| toDate (M)                    | Dagens dato.                                                                                                                                      | Samme som for *Accounts*. |                                                                                                                                                                                                                                                      |

*Se [HTTP error codes and specific error situations with associated message codes](/assets/HTTP error codes V.2.pdf)/.*



## Endringslogg

| Dato     | Versjon | Endring                                                                                        |
|----------|---------|------------------------------------------------------------------------------------------------|
| 03.07.25 | 1.0     | Siden er publisert. |


 