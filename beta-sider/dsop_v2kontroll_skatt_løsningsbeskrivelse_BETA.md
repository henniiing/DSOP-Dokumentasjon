---
title: "Dsop V2kontroll Skatt LøSningsbeskrivelse BETA
id: dsop_v2kontroll_skatt_løsningsbeskrivelse_BETA"
slug: "dsop_v2kontroll_skatt_løsningsbeskrivelse_BETA"
keywords: ["sample"]
sidebar: "main_sidebar
permalink: dsop_v2kontroll_skatt_løsningsbeskrivelse_BETA.html"
folder: "section1"
---

## Kontrollinformasjon - Innhenting av kontoinformasjon til Skatteetaten

Tjenesten er basert på DSOP Kontrollinformasjon fellesstandard og gjelder utlevering av kontoopplysninger til Skatteetaten.
Se [Juridiske rammebetingelser](https://dokumentasjon.dsop.no/dsop_v2kontroll_skatt_juridisk.html) for *Skatt-kontroll*.

<img src="images \/>"

### Trinn 1 - DSOP Oversikt over kundeforhold

Skatteetaten skal bruke *DSOP Oversikt over kundeforhold* API-et på følgende måte:

#### Tillatte endepunkter i trinn 1 for tjenesten Skatt-Kontroll

| Endepunkter | Scope fra Maskinporten | Minimum nødvendig versjon av API |
| ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ---------------------------------- |
| [customerRelationships](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_api_specification.html#api-for-customer-relation-overview) | `bits:kundeforhold` | V.2.0 |

#### Gyldig forespørsel - Trinn 1

Skatteetaten skal bruke endepunktet *customerRelationships* på følgende måte:

| Input-felter         | Beskrivelse                                                                                                                                                                                                                                                                                                                                                                              |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authorization        | Gyldig token fra Maskinporten (`bits:kundeforhold`).                                                                                                                                                                                                                                                                                                                                     |
| CustomerID           | FNR/D-NR eller orgnr til kontrollobjektet.                                                                                                                                                                                                                                                                                                                                               |
| CorrelationID        | Uuid-verdi for unik teknisk referanse til forespørselen.                                                                                                                                                                                                                                                                                                                                 |
| Legal-Mandate        | Lovhjemmel er: "Skatteforvaltningsloven &sect; 10-2 første ledd, jf. &sect; 10-14, jf. skatteforvaltningsforskriften &sect; 10-2-1". URL Encoded verdien skal altså være "Skatteforvaltningsloven%20%C2%A7%2010-2%20f%C3%B8rste%20ledd%2C%20jf.%20%C2%A7%2010-14%2C%20jf.%20skatteforvaltningsforskriften%20%C2%A7%2010-2-1". |
| AccountInfoRequestID | Uuid-verdi for saksnummer i Skatteetaten.                                                                                                                                                                                                                                                                                                                                                    |
| fromDate             | Opptil 10 år før dagens dato.                                                                                                                                                                                                                                                                                                                                                            |
| toDate               | En dato nyere eller lik fromDate.                                                                                                                                                                                                                                                                                                                                                        |
| onlyPrimaryOwner     | Skatteetaten har mulighet til å bruke "onlyPrimaryOwner" = "FALSE» eller "TRUE". Dersom Skatteetaten ikke har behov for kundeforhold der kontrollobjektet er/var disponent anbefales det å dataminimere i forespørelen: "onlyPrimaryOwner" = "TRUE"                                                                                                                                              |

Se datamodell for [customerRelationships](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_customerrelationships.html).

### Trinn 2 a og b - DSOP Kontrollinformasjon

#### Generell informasjon

| Informasjon om                        W | Beskrivelse | Link |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Funksjonell spesifikasjon | Den funksjonelle spesifikasjonen for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Skatt-kontroll*. | Dokumentasjon på engelsk: [Functional specification DSOP Control Common Standard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_functionalspecification.html). |
| Informasjon om volum og responstider             | Responstidene kan variere mellom finansinstitusjoner, men det typiske mønsteret er at forespørsler etter data vil ha raske responstider (sekunder), mens store historiske forespørsler kan ta lengre tid.<br \/><br \/>Volum for tjenesten *Skatt-Kontroll*. <br \/> - Det forventes en betydelig økning i forespørsler til finansforetakene fra Skatteetaten. Totalt volum per år for forespørsel om kontoliste, transaksjoner og saldo:<br \/> - Estimert nåværende: xx.xxx <br \/> - Estimert fremtidig: xxx.xxx |
| Sikkerhetsdokumentasjon | Sikkerhetsdokumentasjon for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Skatt-Kontroll*. | [Sikkerhetsdokumentasjon](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_securitydesign.html). |
| Arkitektur | Arkitektur for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Skatt-Kontroll*. | Dokumentasjon på engelsk: [Architecture documentation](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_architecturedocument.html). |
| API-spesifikasjon | Følgende endepunkter inngår i tjenesten *Skatt-Kontroll*: <br \/>- Accounts<br \/>&amp;gt;- Account details<br \/> &amp;gt;- Transactions<br \/> &amp;gt;- Cards<br \/> &amp;gt;- Roles<br \/> &amp;gt;<br \/> | [Internal testing / quality assurance DSOP Control Common Standard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_test.html). |
| Datavalidering | Generelle anbefalinger om validering i DSOP Kontrollinformasjon fellesstandard er også gjeldende for utlevering av kontoinformasjon i tjenesten *Skatt-Kontroll*.<br \/><br \/>Det er også spesifikke valideringer som gjelder i tjenesten *Skatt-Kontroll* som også bør implementeres. | [Generic DSOP Control validations](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_validation.html#generic-dsop-control-validations)<br \/><br \/>Se [eget avsnitt nede på siden](https://dokumentasjon.dsop.no/dsop_v2kontroll_skatt_løsningsbeskrivelse.html#datavalidering). |

#### Tillatte endepunkter i trinn 2 for tjenesten Skatt-Kontroll

| Endepunkter | Scope fra Maskinporten | Minimum nødvendig versjon av API |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ---------------------------------- |
| [Accounts (kontoliste)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/accounts/listAccounts)    <br \/> [Account Details (kontodetaljer)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/accounts/showAccountById) <br \/> [Transactions (transaksjoner)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/transactions/listTransactions) <br \/> [Cards (Kort)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/cards/listCards) <br \/> [Roles (roller)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/roles/listRoles) | `bits:kontoinformasjon` | V.2.0 |

#### Gyldig forespørsel - Trinn 2a

Skatteetaten skal bruke endepunktet *Accounts* på følgende måte:

| Input-felter                                                                                                                                                        | Beskrivelse                                                                                                                                                                                                                                                                                                                                                                             |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [AccountInfoRequestId](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#accountinforequestid)                                     | Uuid-verdi for et saksnummer hos Skatteetaten.                                                                                                                                                                                                                                                                                                                                              |
| [CorrelationID](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#correlationid)                                                   | Uuid-verdi for unik teknisk referanse til forespørselen.                                                                                                                                                                                                                                                                                                                                |
| Legal-Mandate                                                                                                                                                       | Lovhjemmel er: "Skatteforvaltningsloven &sect; 10-2 første ledd, jf. &sect; 10-14, jf. skatteforvaltningsforskriften &sect; 10-2-1". URL Encoded verdien skal altså være "Skatteforvaltningsloven%20%C2%A7%2010-2%20f%C3%B8rste%20ledd%2C%20jf.%20%C2%A7%2010-14%2C%20jf.%20skatteforvaltningsforskriften%20%C2%A7%2010-2-1".                            |
| PartyID                                                                                                                                                             | FNR/D-NR eller orgnr til kontrollobjektet.                                                                                                                                                                                                                                                                                                                                              |
| onlyPrimaryOwner                                                                                                                                                    | "onlyPrimaryOwner" = "TRUE" eller "FALSE".                                                                                                                                                                                                                                                                                                                                              |
| [AdditionalReferenceID](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid)     | Ingen data.                                                                                               |
| [AdditionalReferenceIDType](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid) | Ingen data                                                                                                                                                                                                                                                                                                                                        |
| RequesterID                                                                                                                                                         | I tjenesten *Skatt-Kontroll* <u>skal</u>Se mer detaljert definisjon i datamodell for [DSOP Kontroll API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts.html). |
| fromDate                                                                                                                                                            | Opptil 10 år før dagens dato.                                                                                                                                                                                                                                                                                                                                                           |
| toDate                                                                                                                                                              | En dato nyere eller lik *fromDate*.                                                                                                                                                                                                                                                                                                                                                     |

Se datamodell for [Accounts](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts.html).

#### Gyldig forespørsel - Trinn 2b

Etter velykket response fra 2a, skal Skatteetaten bruke endepunktene *Account Details*, *Transactions*, *Cards* og *Roles* på følgende måte:

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
- [Cards](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_cards.html)
- [Roles](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_roles.html)

#### Utlevering av datafelter per endepunkt

Finansforetakene skal utlevere kontoopplysninger for denne tjenesten iht. gjeldende datamodell for DSOP Kontrollinformasjon API.
Se [Description of all input- and output parameters in the APIs](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#description-of-all-input--and-output-parameters-in-the-apis).

<br \/>

 Kategorisering av utlevering av kontoopplysninger på feltnivå:
* <i>Teknisk obligatorisk</i>Skal utleveres</i>Kan filtreres bort</i>Utleveres ikke</i>Til vurdering</i>

Overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard) vil gjelde for denne tjenesten.

#### Utlevering for Accounts (Kontoliste):
"Kontoliste" er det første endepunktet etat vil benytte for å få utlevert en liste over konti som tilhører kontrollobjektet. Videre bruk av tjenesten baseres på dette Kontoliste-kallet.

For tjenesten Skatt-Kontroll gjelder følgende utlevering fra Kontoliste:
* Liste over konti som kontrollobjektet eier eller eide i den gjeldende tidsperioden.
* Fullstendig liste over konti kontrollobjektet eier og disponerer dersom "onlyPrimaryOwner" = "false". Det vil være mulig å returnere <i>"accountReference" = "dataNotDelivered"</i>

Se [gyldig forespørsel for endepunktet Accounts](https://dokumentasjon.dsop.no/dsop_v2kontroll_skatt_l%C3%B8sningsbeskrivelse.html#utlevering-for-accounts-kontoliste).

Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2kontroll_skatt_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunkt).

| Svar fra *Accounts*                                 | Datautlevering       |
|-----------------------------------------------------|----------------------|
| responseDetails.status                              | Teknisk obligatorisk |
| responseDetails.message | Skal utleveres |  | |                      |
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
| accounts.name | Utleveres ikke |  | |                      |
| links.rel                                           | Teknisk obligatorisk |
| links.href                                          | Teknisk obligatorisk |

#### Utlevering for Account Details (Kontodetaljer):
Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).

For tjenesten *Skatt-Kontroll* gjelder følgende utlevering fra Kontodetaljer:
* Konti som kontrollobjektet eier eller eide i den gjeldende tidsperioden.

<br \/>

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2kontroll_skatt_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunkt).

| Svar fra *AccountDetails*                          | Datautlevering       |
|----------------------------------------------------|----------------------|
| responseDetails.status                             | Teknisk obligatorisk |
| responseDetails.message | Skal utleveres |  | |                      |
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
Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2kontroll_skatt_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunkt).

| Svar fra *Transactions*                                          | Datautlevering       |
|------------------------------------------------------------------|----------------------|
| responseDetails.status                                           | Teknisk obligatorisk |
| responseDetails.message | Skal utleveres |  | |                      |
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
| transactions.currency | Skal utleveres |  | |                      |
| links.rel                                                        | Teknisk obligatorisk |
| links.href                                                       | Teknisk obligatorisk |

#### Utlevering for Cards (Kort):
Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).

For tjenesten *Skatt-Kontroll* gjelder følgende utlevering fra Cards:
* Dersom kontrollobjektet på en konto, har finansforetaket adgang til å filtrere bort informasjon om øvrige disponenter fra endepunktet *Cards*.

<br \/>

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2kontroll_skatt_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunkt).

| Svar fra *Cards*                                     | Datautlevering       |
|------------------------------------------------------|----------------------|
| responseDetails.status                               | Teknisk obligatorisk |
| responseDetails.message | Skal utleveres |  | |                      |
| paymentCards.cardIdentifier                          | Teknisk obligatorisk |
| paymentCards.holderName                              | Skal utleveres       |
| paymentCards.startDate                               | Skal utleveres       |
| paymentCards.expiryDate                              | Skal utleveres       |
| paymentCards.cardIssuerName                          | Skal utleveres       |
| paymentCards.type                                    | Skal utleveres       |
| paymentCards.cardStatus                              | Skal utleveres       |
| paymentCards.versionNumber                           | Skal utleveres       |
| paymentCards.cardIssuerIdentifier.countryOfResidence | Skal utleveres       |
| paymentCards.cardIssuerIdentifier.value              | Teknisk obligatorisk |
| paymentCards.cardIssuerIdentifier.type               | Teknisk obligatorisk |

#### Utlevering for Roles (Roller):
Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).

For tjenesten *Skatt-Kontroll* gjelder følgende utlevering fra Roles:
* Dersom kontrollobjektet er disponent på en konto, har finansforetaket adgang til å filtrere bort informasjon om øvrige disponenter fra endepunktet *Roles*.

<br \/>

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2kontroll_skatt_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunkt).

| Svar fra *Roles*                                | Datautlevering       |
|-------------------------------------------------|----------------------|
| responseDetails.status                          | Teknisk obligatorisk |
| responseDetails.message | Skal utleveres |  | |                      |
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

Disse er beskrevet på [«Generic DSOP Control validations»](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_validation.html).
<br \/> Org.nr. til Skatteetaten er 974761076.

#### Spesifikke valideringer for Skatt-Kontroll

- Gyldig input-parameter for Skatt-Kontroll:
  - Tilgangstoken fra Maskinporten: Finansforetakene må validere token fra Maskinporten med følgende scope: `bits:kontoinformasjon`
  - <u>Input parameter for Skatt-Kontroll:</u>For Accounts:</u>må</u>For de andre endepunktene:</u &amp;amp; gt;

| Input parametere | Forventet verdi | Forslag til validering |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| AccountReference (M) | Uuid referanse til kontonr. | - |
| AccountInfoRequestID (M) | Uuid referanse til saksnr. | Samme som for *Accounts*. |
| CorrelationID (M) | Uuid verdi til en unik teknisk referanse for forespørselen. | Samme som for *Accounts*. |
| Legal-Mandate (M) | "Skatteforvaltningsloven%20%C2%A710-2%20f%C3%B8rste%20ledd%2C%20jf.%20skatteforvaltningsforskriften%20%C2%A710-2-1" | Samme som for *Accounts*. |
| AdditionalReferenceID (O) | Ingen | - |
| AdditionalReferenceIDType (O) | Ingen | - |
| RequesterID (O) | Representasjon av brukerID til saksbehandleren. | Samme som for *Accounts*. |
| fromDate (M) | Opptil 10 år før dagens dato. | Samme som for *Accounts*. |
| toDate (M) | Dagens dato. | Samme som for *Accounts*. |                                                                                                                                                                                                                                                      |

*Se [HTTP error codes and specific error situations with associated message codes](assets\HTTP error codes V.2.pdf)\\\\\\{:target="_blank"\\\\\\\}.*

## Endringslogg

| Dato | Versjon | Endring |
| ---------- | --------- | ------------------------------------------------------------------------------------------------ |
| 03.07.25 | 1.0 | Siden er publisert. |

