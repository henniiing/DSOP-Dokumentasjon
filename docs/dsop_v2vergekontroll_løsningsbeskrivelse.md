---
title: "Løsningsbeskrivelse for Vergekontroll"
slug: "dsop_v2vergekontroll_løsningsbeskrivelse"
id: "dsop_v2vergekontroll_løsningsbeskrivelse"
keywords:
  - "sample"
---

## Kontrollinformasjon - Innhenting av kontoinformasjon til SRF


[![alt text](images/vergekontroll_figur_1.png)](images/vergekontroll_figur_1.png)

Tjenesten er basert på DSOP Kontrollinformasjon fellesstandard og gjelder utlevering av kontoopplysninger til Statens sivilrettsforvaltning (SRF).
Se [Juridiske rammebetingelser](https://dokumentasjon.dsop.no/dsop_v2vergekontroll_juridisk.html) for *Vergekontroll*.





### Trinn 1 - DSOP Oversikt over kundeforhold

Statens sivilrettsforvaltning (SRF) skal bruke *DSOP Oversikt over kundeforhold* API-et på følgende måte:

#### Tillatte endepunkter i trinn 1 for tjenesten Vergekontroll

| Endepunkter                                                                                                                            | Scope fra Maskinporten | Minimum nødvendig versjon av API |
|----------------------------------------------------------------------------------------------------------------------------------------|------------------------|----------------------------------|
| [customerRelationships](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_api_specification.html#api-for-customer-relation-overview) | `bits:kundeforhold`    | V.2.0                            |



#### Gyldig forespørsel - Trinn 1

SRF skal bruke endepunktet *customerRelationships* på følgende måte:

| Input-felter         | Beskrivelse                                                                                                                                                                                                                                                                                                                                    |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authorization        | Gyldig token fra Maskinporten (`bits:kundeforhold`).                                                                                                                                                                                                                                                                                           |
| CustomerID           | FNR/D-NR til vergehaver.                                                                                                                                                                                                                                                                                                                       |
| CorrelationID        | Uuid-verdi for unik teknisk referanse til forespørselen.                                                                                                                                                                                                                                                                                       |
| Legal-Mandate        | Lovhjemmel for tjenesten skal være "Vergemålsloven § 54 (2), jf. vergemålsforskriften §20a (2), jf. vergemålsforskriften §20a (1) a". URL Encoded verdien skal altså være “Vergem%C3%A5lsloven%20%C2%A7%2054%20(2)%2C%20jf.<br>%20vergem%C3%A5lsforskriften%20%C2%A720a%20(2)%2C%20jf.<br>%20vergem%C3%A5lsforskriften%20%C2%A720a%20(1)%20a”. |
| AccountInfoRequestID | Uuid-verdi for saksnummer i SRF.                                                                                                                                                                                                                                                                                                               |
| fromDate             | Fra 1 januar i siste kalenderår.                                                                                                                                                                                                                                                                                                               |
| toDate               | Til 31. desember i siste kalenderår. Dato skal være nyere eller likt fromDate.                                                                                                                                                                                                                                                                 |
| onlyPrimaryOwner     | Kun “onlyPrimaryOwner” = “TRUE”.                                                                                                                                                                                                                                                                                                               |

Se datamodell for [customerRelationships](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_customerrelationships.html).


### Trinn 2 a og b - DSOP Kontrollinformasjon

#### Generell informasjon

| Informasjon om                                   | Beskrivelse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Link                                                                                                                                                                                                                                                                              |
|--------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Funksjonell spesifikasjon                        | Den funksjonelle spesifikasjonen for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Vergekontroll*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Dokumentasjon på engelsk: [Functional specification DSOP Control Common Standard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_functionalspecification.html).                                                                                                              |
| Informasjon om volum og responstider             | Responstidene kan variere mellom finansinstitusjoner, men det typiske mønsteret er at forespørsler etter data vil ha raske responstider (sekunder), mens store historiske forespørsler kan ta lengre tid.<br><br>Volum for tjenesten *Vergekontroll*. <br> - Det forventes følgende volum fra SRF per år for forespørsel om kontoliste, transaksjoner, kontodetaljer og roller: 36.000 vergemål.                                                                                                                                                                                                                                 |
| Sikkerhetsdokumentasjon                          | Sikkerhetsdokumentasjon for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Vergekontroll*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | [Sikkerhetsdokumentasjon](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_securitydesign.html).                                                                                                                                                                               |
| Arkitektur                                       | Arkitektur for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Vergekontroll*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Dokumentasjon på engelsk: [Architecture documentation](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_architecturedocument.html).                                                                                                                                            |
| API-spesifikasjon                                | Følgende endepunkter inngår i tjenesten *Vergekontroll*: <br>- Accounts<br>- Account details<br>- Transactions<br>- Roles<br><br>Finansforetakene skal påse at Vergekontroll tjenesten ikke får tilgang til endepunktet *Cards*. <br><br>Det er <u>minimum versjon 2.0</u> av DSOP Kontroll API-et som skal benyttes for tjenesten. <br><br>Finansforetakene skal returnere en HTTP 400 med ACC-001 og best mulig feilbeskrivelse dersom etat sender en forespørsel til ugyldige endepunkter. Se [HTTP-feilkoder og spesifikke feilsituasjoner med tilhørende meldingskoder](assets\HTTP error codes V.2.pdf){:target="_blank"}. | Dokumentasjon på engelsk: [API-specification](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_api_specification.html).                                                                                                                                                        |
| Overordnet spesifikasjon av DSOP-Kontroll API-et | Den overordnede spesifikasjon av DSOP Kontroll API-et for DSOP Kontrollinformasjon fellesstandard gjelder for løsningen *Vergekontroll*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html)                                                                                                                                                 |
| Integrasjonstesting                              | Definerte test-caser for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Vergekontroll*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | [Internal testing / quality assurance DSOP Control Common Standard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_test.html).                                                                                                                                               |
| Datavalidering                                   | Generelle anbefalinger om validering i DSOP Kontrollinformasjon fellesstandard er også gjeldende for utlevering av kontoinformasjon i tjenesten *Vergekontroll*.<br><br>Det er også spesifikke valideringer som gjelder i tjenesten *Vergekontroll* som også bør implementeres.                                                                                                                                                                                                                                                                                                                                                  | [Generic DSOP Control validations](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_validation.html#generic-dsop-control-validations)<br><br>Se [eget avsnitt nede på siden](https://dokumentasjon.dsop.no/dsop_v2vergekontroll_l%C3%B8sningsbeskrivelse.html#datavalidering). |




#### Tillatte endepunkter i trinn 2 for tjenesten Vergekontroll

| Endepunkter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Scope fra Maskinporten  | Minimum nødvendig versjon av API |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|----------------------------------|
| [Accounts (kontoliste)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/accounts/listAccounts)    <br> [Account Details (kontodetaljer)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/accounts/showAccountById) <br> [Transactions (transaksjoner)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/transactions/listTransactions) <br> [Roles (roller)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/roles/listRoles) | `bits:kontoinformasjon` | V.2.0                            |



#### Gyldig forespørsel - Trinn 2a

SRF skal bruke endepunktet *Accounts* på følgende måte:

| Input-felter                                                                                                                                                        | Beskrivelse                                                                                                                                                                                                                                                                                                                                              |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [AccountInfoRequestId](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#accountinforequestid)                                     | Uuid-verdi for et saksnummer hos SRF.                                                                                                                                                                                                                                                                                                                    |
| [CorrelationID](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#correlationid)                                                   | Uuid-verdi for unik teknisk referanse til forespørselen.                                                                                                                                                                                                                                                                                                 |
| Legal-Mandate                                                                                                                                                       | Lovhjemmel for tjenesten skal være "Vergemålsloven § 54 (2), jf. vergemålsforskriften § 20 (2), jf. vergemålsforskriften § 20a (1) b-e". URL Encoded verdien skal altså være "Vergem%C3%A5lsloven%20%C2%A7%2054%20(2)%2C%20jf.<br>%20vergem%C3%A5lsforskriften%20%C2%A7%2020%20(2)%2C%20jf.<br>%20vergem%C3%A5lsforskriften%20%C2%A7%2020a%20(1)%20b-e”. | 
| PartyID                                                                                                                                                             | FNR/D-NR til kontrollobjektet (vergehaver).                                                                                                                                                                                                                                                                                                              |
| onlyPrimaryOwner                                                                                                                                                    | Kun "onlyPrimaryOwner" = "TRUE".                                                                                                                                                                                                                                                                                                                         |
| [AdditionalReferenceID](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid)     | FNR/D-NR til verge. Finansforetakene skal altså kun returnere konti som eies av vergehaver og disponeres av verge, og samtidig der det finnes vergemål.                                                                                                                                                                                                  |
| [AdditionalReferenceIDType](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid) | "AdditionalReferenceIDType" skal ha verdi "srf"                                                                                                                                                                                                                                                                                                          |
| RequesterID                                                                                                                                                         | Ingen data.                                                                                                                                                                                                                                                                                                                                              |
| fromDate                                                                                                                                                            | Fra 1. januar i siste kalenderår.                                                                                                                                                                                                                                                                                                                        |
| toDate                                                                                                                                                              | Til 31. desember i siste kalenderår, nyere eller likt fromDate. Finansforetakene skal altså kun returnere konti i tidsperioden der det fantes vergemål.                                                                                                                                                                                                  |


Se datamodell for [Accounts](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts.html).


#### Gyldig forespørsel - Trinn 2b
Etter vellykket response fra 2a, skal SRF videre bruke endepunktene Account Details, Transactions og Roles på følgende måte:


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
- [Transactions](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html)
- [Roles](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_roles.html)



#### Nødvendig filtrering av data ved utlevering per endepunkt

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

For tjenesten Vergekontroll gjelder følgende utlevering fra Kontoliste:  
* Liste over konti som vergehaver eide i den gjeldende tidsperioden og disponeres av verge, og samtidig der det finnes vergemål. 

Se [gyldig forespørsel for endepunktet Accounts](https://dokumentasjon.dsop.no/dsop_v2vergekontroll_l%C3%B8sningsbeskrivelse.html#gyldig-foresp%C3%B8rsel---trinn-2). 

Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).  

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2vergekontroll_l%C3%B8sningsbeskrivelse.html#n%C3%B8dvendig-filtrering-av-data-ved-utlevering-per-endepunkt).

| Svar fra *Accounts*                                 | Datautlevering       |
|-----------------------------------------------------|----------------------|
| responseDetails.status                              | Teknisk obligatorisk | 
| responseDetails.message                             | Skal utleveres       |
|                                                     |
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
|                                                     |
| links.rel                                           | Teknisk obligatorisk | 
| links.href                                          | Teknisk obligatorisk | 



#### Utlevering for Account Details (Kontodetaljer):
Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).  

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2vergekontroll_l%C3%B8sningsbeskrivelse.html#n%C3%B8dvendig-filtrering-av-data-ved-utlevering-per-endepunkt).

| Svar fra *AccountDetails*                          | Datautlevering       |
|----------------------------------------------------|----------------------|
| responseDetails.status                             | Teknisk obligatorisk |
| responseDetails.message                            | Skal utleveres       |
|                                                    |
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


#### Utlevering for Transactions (Transaksjoner):
Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).  

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2vergekontroll_l%C3%B8sningsbeskrivelse.html#n%C3%B8dvendig-filtrering-av-data-ved-utlevering-per-endepunkt).

| Svar fra *Transactions*                                          | Datautlevering       |
|------------------------------------------------------------------|----------------------|
| responseDetails.status                                           | Teknisk obligatorisk |
| responseDetails.message                                          | Skal utleveres       |
|                                                                  |
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
|                                                                  |
| links.rel                                                        | Teknisk obligatorisk |
| links.href                                                       | Teknisk obligatorisk |


#### Utlevering for Roles (Roller):
Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).  

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2vergekontroll_l%C3%B8sningsbeskrivelse.html#n%C3%B8dvendig-filtrering-av-data-ved-utlevering-per-endepunkt).

| Svar fra *Roles*                                | Datautlevering       |
|-------------------------------------------------|----------------------|
| responseDetails.status                          | Teknisk obligatorisk |
| responseDetails.message                         | Skal utleveres       |
|                                                 |
| roles.accountRole.permission                    | Skal utleveres       |
| roles.accountRole.identifier.countryOfResidence | Skal utleveres       |
| roles.accountRole.identifier.value              | Teknisk obligatorisk |
| roles.accountRole.identifier.type               | Teknisk obligatorisk |
| roles.accountRole.name                          | Skal utleveres       |
| roles.accountRole.startDate                     | Skal utleveres       |
| roles.accountRole.endDate                       | Skal utleveres       |



### Datavalidering

Det er finansforetakenes ansvar å validere forespørsler fra etat og det er opp til finansforetakene å sørge for at alle
forespørsler fra etat blir validert <u>godt nok</u>. Ved å validere og logge input-parametere fra etat riktig, vil
finansforetakene være bedre egnet til å unngå levering av overskuddsinformasjon. Implementering av slik logikk er
finansforetakenes ansvar.

For å sikre godt kontrollnivå på tvers av finansforetakene, er det beskrevet et sett med anbefalinger om generelle og
generiske valideringer i *DSOP Kontrollinformasjon fellesstandard* og spesifikke valideringer knyttet til tjenesten
*Vergekontroll*.


#### Generelle og generiske valideringer

Disse er beskrevet på [«Generic DSOP Control validations»](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_validation.html).
<br> Org.nr. til Statens Sivilrettsforvaltning (SRF) er 986186999.


#### Spesifikke valideringer for Vergekontroll

- Bekreftelse av vergemål: Finansforetakene bør verifisere at det virkelig finnes et vergemål for vergehaver(f.nr./d.nr.) med den gitte verge i tidsperioden det forespørres kontoopplysninger på FREG. Se [informasjonsmodell for Folkeregisteret](https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/informasjonsmodell/) (kapittel 5.20 - Vergemål eller fremtidsfullmakt) der verges FNR/D-NR skal stemme med FNR/D-NR som sendes i *AdditionalReferenceID*, samt at verge skal ha rollen *representasjonDagligbank* som *vergeTjenesteoppgave*.

- Gyldig input-parameter for Vergekontroll:
    - Tilgangstoken fra Maskinporten: Finansforetakene må validere token fra Maskinporten med følgende scope: `bits:kontoinformasjon`
    - <u>Input parameter for Vergekontroll:</u> Se gjeldende API-spesifikasjon for teknisk beskrivelse: [API Specification](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_api_specification.html)


<u>For Accounts:</u>

| Input parametere              | Forventet verdi                                                                                                                                                            | Forslag til validering                                                                                                                                                                                                                       |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AccountInfoRequestID (M)      | Uuid referanse til saksnr.                                                                                                                                                 | Formatet kan valideres. I tillegg kan denne parameteren valideres iht definisjonen i [Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#accountinforequestid). |
| CorrelationID (M)             | Uuid verdi til en unik teknisk referanse for forespørselen.                                                                                                                | Formatet kan valideres. I tillegg kan denne parameteren valideres iht definisjonen i [Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#correlationid).        |
| Legal-Mandate (M)             | "Vergem%C3%A5lsloven%20%C2%A7%2054%20(2)%2C%20jf.<br>%20vergem%C3%A5lsforskriften%20%C2%A7%2020%20(2)%2C%20jf.<br>%20vergem%C3%A5lsforskriften%20%C2%A7%2020a%20(1)%20b-e" | Strengen skal være I ‘encoded’ format og burde valideres iht til [Juridiske rammebetingelser Vergekontroll](https://dokumentasjon.dsop.no/dsop_v2vergekontroll_juridisk.html).                                                               |
| PartyID (M)                   | Kontrollbjektet: FNR eller D.NR til vergehaver                                                                                                                             | Formatet kan valideres.                                                                                                                                                                                                                      |
| OnlyPrimaryOwner (M)          | "TRUE"                                                                                                                                                                     | *Vergekontroll* skal kun tillate verdien “TRUE”.                                                                                                                                                                                             |
| AdditionalReferenceID (O)     | FNR/D-NR til verge.                                                                                                                                                        | FNR/D-NR til verge bør valideres mtp. format og verifiseres mot FREG.                                                                                                                                                                        |
| AdditionalReferenceIDType (O) | "srf"                                                                                                                                                                      | Formatet kan valideres.                                                                                                                                                                                                                      |
| RequesterID (O)               | Ingen.                                                                                                                                                                     | -                                                                                                                                                                                                                                            |
| fromDate (M)                  | Fra 1.januar i siste kalenderår.                                                                                                                                           | Formatet kan valideres. I tillegg bør verdien også valideres slik at datoen er i siste kalender år og iht. til gyldighetstidspunkt og evt. opphørstidspunkt for vergemål i FREG.                                                             |
| toDate (M)                    | Til 31. desember i siste kalenderår, nyere eller likt *fromDate*.                                                                                                          | Formatet kan valideres. I tillegg bør verdien også valideres slik at datoen er i siste kalender år og iht. til gyldighetstidspunkt og evt. opphørstidspunkt for vergemål i FREG.                                                             |                                                                                                                                                                                                                                                      |

*Se [HTTP error codes and specific error situations with associated message codes](assets\HTTP error codes V.2.pdf){:target="_blank"}.*


<u>For de andre endepunktene:</u>

| Input parametere              | Forventet verdi                                                                                                                                                            | Forslag til validering    |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| AccountReference (M)          | Uuid referanse til kontonr.                                                                                                                                                | -                         |
| AccountInfoRequestID (M)      | Uuid referanse til saksnr.                                                                                                                                                 | Samme som for *Accounts*. |
| CorrelationID (M)             | Uuid verdi til en unik teknisk referanse for forespørselen.                                                                                                                | Samme som for *Accounts*. |
| Legal-Mandate (M)             | "Vergem%C3%A5lsloven%20%C2%A7%2054%20(2)%2C%20jf.<br>%20vergem%C3%A5lsforskriften%20%C2%A7%2020%20(2)%2C%20jf.<br>%20vergem%C3%A5lsforskriften%20%C2%A7%2020a%20(1)%20b-e" | Samme som for *Accounts*. |
| AdditionalReferenceID (O)     | FNR/D-NR til verge.                                                                                                                                                        | Samme som for *Accounts*. |
| AdditionalReferenceIDType (O) | "srf"                                                                                                                                                                      | Samme som for *Accounts*. |
| RequesterID (O)               | Ingen.                                                                                                                                                                     | -                         |
| fromDate (M)                  | Fra 1.januar i siste kalenderår.                                                                                                                                           | Samme som for *Accounts*. |
| toDate (M)                    | Til 31. desember i siste kalenderår, nyere eller likt *fromDate*.                                                                                                          | Samme som for *Accounts*. |                                                                                                                                                                                                                                                      |

*Se [HTTP error codes and specific error situations with associated message codes](assets\HTTP error codes V.2.pdf){:target="_blank"}.*



## Endringslogg

| Dato     | Versjon | Endring                             |
|----------|---------|-------------------------------------|
| 19.03.25 | 2.0.2   | Oppdatert feltbehov for accounts, accountDetails og transactions |
| 18.03.25 | 2.0.1   | Spesifisert grunnlaget for utlevering av kontoinformasjon i henhold til DSOP fellesstandard | 
| 07.08.24 | 2.0     | Lagt til versjon 2 av vergekontroll |
