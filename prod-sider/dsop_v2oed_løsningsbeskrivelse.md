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
Se [Juridiske rammebetingelser](https://dokumentasjon.dsop.no/dsop_v2oed_juridisk.html) for tjenesten *Oppgjør etter dødsfall*.

[![alt text](images/oed_figur_1.png)](images/oed_figur_1.png)

### Trinn 1 - DSOP Oversikt over kundeforhold

Digdir skal bruke *DSOP Oversikt over kundeforhold* API-et på følgende måte:

#### Tillatte endepunkter i trinn 1 for tjenesten Oppgjør etter dødsfall

| Endepunkter | Scope fra Maskinporten | Minimum nødvendig versjon av API |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------------------------------- |
| [customerRelationships](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_api_specification.html#api-for-customer-relation-overview) | `bits:kundeforhold` | V.2.0 |

#### Gyldig forespørsel - Trinn 1

Digdir skal bruke endepunktet *customerRelationships* på følgende måte:

| Input-felter         | Beskrivelse                                                                                                                                                                                                                                                                                                       |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authorization        | Gyldig token fra Maskinporten (`bits:kundeforhold`).                                                                                                                                                                                                                                                              |
| CustomerID           | FNR/D-NR til avdøde.                                                                                                                                                                                                                                                                                              |
| CorrelationID        | Uuid-verdi for unik teknisk referanse til forespørselen.                                                                                                                                                                                                                                                          |
| Legal-Mandate        | Lovhjemmel for tjenesten skal være "Arveloven &sect; 92 første ledd og &sect; 118, jf. &sect; 88 a, jf. forskrift om Digitalt dødsbo". URL Encoded verdien skal altså være "Arveloven%20%C2%A7%2092%20f%C3%B8rste%20ledd%20og%20%C2%A7%20118%2C%20<br \/>jf.%20%C2%A7%2088%20a%2C%20jf.%20forskrift%20om%20Digitalt%20d%C3%B8dsbo". |
| AccountInfoRequestID | Uuid-verdi for saksnummer i digitalt dødsbo-løsningen hos Digdir.                                                                                                                                                                                                                                                 |
| fromDate             | Opptil 3 måneder tilbake i tid, regnet fra dødsdato (dødsfallstidspunktet).                                                                                                                                                                                                                                                              |
| toDate               | Dagens dato (forespørselsdato).                                                                                                                                                                                                                                                                                                      |
| onlyPrimaryOwner     | Kun "onlyPrimaryOwner" = "TRUE".                                                                                                                                                                                                                                                                                  |

Se datamodell for [customerRelationships](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_customerrelationships.html).

### Trinn 2 a og b - DSOP Kontrollinformasjon

#### Generell informasjon

| Informasjon om | Beskrivelse | Link |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Funksjonell spesifikasjon | Den funksjonelle spesifikasjonen for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Oppgjør etter dødsfall*. | Dokumentasjon på engelsk: [Functional specification DSOP Control Common Standard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_functionalspecification.html). |
| Informasjon om volum og responstider             | Responstidene kan variere mellom finansinstitusjoner, men det typiske mønsteret er at forespørsler etter data vil ha raske responstider (sekunder), mens store historiske forespørsler kan ta lengre tid.<br \/><br \/>Volum for tjenesten *Oppgjør etter dødsfall*. <br \/> - Det forventes følgende volum fra Digdir per år for forespørsel om kontoliste, transaksjoner og kontodetaljer: **150.000**                                                                                                                                                                                                                                                     |
| Sikkerhetsdokumentasjon | Sikkerhetsdokumentasjon for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Oppgjør etter dødsfall*. | [Sikkerhetsdokumentasjon](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_securitydesign.html). |
| Arkitektur | Arkitektur for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Oppgjør etter dødsfall*. | Dokumentasjon på engelsk: [Architecture documentation](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_architecturedocument.html). |
| API-spesifikasjon | Følgende endepunkter inngår i tjenesten *Oppgjør etter dødsfall*: <br \/>- Accounts<br \/>&amp;gt;- Account details<br \/> &amp;gt;- Transactions<br \/> &amp;gt;<br \/><br \/>Det er <u>minimum versjon 2.0</u><br \/>Finansforetakene skal returnere en HTTP 400 med ACC-001 og best mulig feilbeskrivelse dersom etat sender en forespørsel til ugyldige endepunkter. Se [HTTP-feilkoder og spesifikke feilsituasjoner med tilhørende meldingskoder](assets\HTTP error codes V.2.pdf)\\\\\\{:target="_blank"\\\\\\}. | Dokumentasjon på engelsk: [API-specification](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_api_specification.html). |
| Overordnet spesifikasjon av DSOP-Kontroll API-et | Den overordnede spesifikasjon av DSOP Kontroll API-et for DSOP Kontrollinformasjon fellesstandard gjelder for løsningen *Oppgjør etter dødsfall*. | [Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html) |
| Integrasjonstesting | Definerte test-caser for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Oppgjør etter dødsfall*. | [Internal testing / quality assurance DSOP Control Common Standard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_test.html). |

#### Tillatte endepunkter i trinn 2 for tjenesten Oppgjør etter dødsfall

| Endepunkter | Scope fra Maskinporten | Minimum nødvendig versjon av API |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ---------------------------------- |
| [Accounts (kontoliste)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/accounts/listAccounts)    <br \/> [Account Details (kontodetaljer)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/accounts/showAccountById) <br \/> [Transactions (transaksjoner)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/transactions/listTransactions) | `bits:kontoinformasjon` | V.2.0 |

#### Gyldig forespørsel - Trinn 2a

Digdir skal bruke endepunktet *Accounts* på følgende måte:

| Input-felter                                                                                                                                                        | Beskrivelse                                                                                                                                                                                                                                                                                                       |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [AccountInfoRequestId](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#accountinforequestid)                                     | Uuid-verdi for et saksnummer i digitalt dødsbo-løsningen hos Digdir.                                                                                                                                                                                                                                              |
| [CorrelationID](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#correlationid)                                                   | Uuid-verdi for unik teknisk referanse til forespørselen.                                                                                                                                                                                                                                                          |
| Legal-Mandate                                                                                                                                                       | Lovhjemmel for tjenesten skal være "Arveloven &sect; 92 første ledd og &sect; 118, jf. &sect; 88 a, jf. forskrift om Digitalt dødsbo". URL Encoded verdien skal altså være "Arveloven%20%C2%A7%2092%20f%C3%B8rste%20ledd%20og%20%C2%A7%20118%2C%20<br \/>jf.%20%C2%A7%2088%20a%2C%20jf.%20forskrift%20om%20Digitalt%20d%C3%B8dsbo". |
| PartyID                                                                                                                                                             | FNR/D-NR til kontrollobjektet (avdøde).                                                                                                                                                                                                                                                                           |
| onlyPrimaryOwner                                                                                                                                                    | Kun "onlyPrimaryOwner" = "TRUE".                                                                                                                                                                                                                                                                                  |
| [AdditionalReferenceID](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid)     | Ingen data.                                                                                                                                                                                                                                                                                                       |
| [AdditionalReferenceIDType](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid) | Ingen data.                                                                                                                                                                                                                                                                                                       |
| RequesterID                                                                                                                                                         | Ingen data.                                                                                                                                                                                                                                                                                                       |
| fromDate                                                                                                                                                            | Opptil 3 måneder tilbake i tid, regnet fra dødsdato (dødsfallstidspunktet). Banken kan finne dødsfallstidspunktet i egne systemer eller ved å spørre i FREG.                                                                                                                                                                                |
| toDate                                                                                                                                                              | Dagens dato (forespørselsdato).                                                                                                                                                                                                                                                                                                      |

Se datamodell for [Accounts](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts.html).

#### Gyldig forespørsel - Trinn 2b
Etter vellykket response fra 2a, skal Digdir videre bruke endepunktene Account Details og Transactions på følgende måte:

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

#### Utlevering av datafelter per endepunkt

Finansforetakene skal utlevere kontoopplysninger for denne tjenesten iht. gjeldende datamodell for DSOP Kontrollinformasjon API.
Se [Description of all input- and output parameters in the APIs](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#description-of-all-input--and-output-parameters-in-the-apis).

<br \/>

 Kategorisering av utlevering av kontoopplysninger på feltnivå:
* <i>Teknisk obligatorisk</i>Skal utleveres</i>Kan filtreres bort</i>Utleveres ikke</i>Til vurdering</i>

Overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard) vil gjelde for denne tjenesten.

#### Utlevering for Accounts (Kontoliste):
"Kontoliste" er det første endepunktet etat vil benytte for å få utlevert en liste over konti som tilhører kontrollobjektet. Videre bruk av tjenesten baseres på dette Kontoliste-kallet.

For tjenesten Konkursbehandling gjelder følgende utlevering fra Kontoliste:
* Liste over konti som skyldneren eide i den gjeldende tidsperioden.

Se [gyldig forespørsel for endepunktet Accounts](https://dokumentasjon.dsop.no/dsop_v2oed_l%C3%B8sningsbeskrivelse.html#gyldig-foresp%C3%B8rsel---trinn-2).

Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2oed_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunkt).

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

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2oed_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunkt).

| Svar fra *AccountDetails*                          | Datautlevering       |
|----------------------------------------------------|----------------------|
| responseDetails.status                             | Teknisk obligatorisk |
| responseDetails.message | Skal utleveres |  | |                      |
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

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2oed_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunkt).

| Svar fra *Transactions*                                          | Datautlevering       |
|------------------------------------------------------------------|----------------------|
| responseDetails.status                                           | Teknisk obligatorisk |
| responseDetails.message | Skal utleveres |  | |                      |
| transactions.transactionIdentifier                               | Teknisk obligatorisk |
| transactions.references.value                                    | Teknisk obligatorisk |
| transactions.references.type                                     | Teknisk obligatorisk |
| transactions.creditDebitIndicator                                | Skal utleveres       |
| transactions.reversalIndicator                                   | Skal utleveres       |
| transactions.status                                              | Skal utleveres       |
| transactions.transactionCode.domain                              | Skal utleveres       |
| transactions.transactionCode.family                              | Skal utleveres       |
| transactions.transactionCode.subFamily                           | Skal utleveres       |
| transactions.transactionCode.freeText                            | Skal utleveres       |
| transactions.bookingDate                                         | Skal utleveres       |
| transactions.valueDate                                           | Skal utleveres       |
| transactions.counterParties.accountIdentifier                    | Kan filtreres bort   |
| transactions.counterParties.identifier.countryOfResidence        | Skal utleveres       |
| transactions.counterParties.identifier.value                     | Teknisk obligatorisk |
| transactions.counterParties.identifier.type                      | Teknisk obligatorisk |
| transactions.counterParties.name                                 | Skal utleveres       |
| transactions.counterParties.type                                 | Skal utleveres       |
| transactions.counterParties.postalAddress.postCode               | Kan filtreres bort   |
| transactions.counterParties.postalAddress.type                   | Kan filtreres bort   |
| transactions.counterParties.postalAddress.streetName             | Kan filtreres bort   |
| transactions.counterParties.postalAddress.buildingNumber         | Kan filtreres bort   |
| transactions.counterParties.postalAddress.townName               | Kan filtreres bort   |
| transactions.counterParties.postalAddress.country                | Kan filtreres bort   |
| transactions.counterParties.postalAddress.addressLines           | Kan filtreres bort   |
| transactions.additionalInfo                                      | Skal utleveres       |
| transactions.currencyExchange.originalAmount                     | Kan filtreres bort   |
| transactions.currencyExchange.sourceCurrency                     | Kan filtreres bort   |
| transactions.currencyExchange.targetCurrency                     | Kan filtreres bort   |
| transactions.currencyExchange.unitCurrency                       | Kan filtreres bort   |
| transactions.currencyExchange.exchangeRate                       | Kan filtreres bort   |
| transactions.merchant                                            | Skal utleveres       |
| transactions.paymentCard.cardIdentifier                          | Teknisk obligatorisk |
| transactions.paymentCard.holderName                              | Skal utleveres      |
| transactions.paymentCard.startDate                               | Skal utleveres      |
| transactions.paymentCard.expiryDate                              | Skal utleveres      |
| transactions.paymentCard.cardIssuerName                          | Skal utleveres      |
| transactions.paymentCard.type                                    | Skal utleveres      |
| transactions.paymentCard.cardStatus                              | Skal utleveres      |
| transactions.paymentCard.versionNumber                           | Skal utleveres      |
| transactions.paymentCard.cardIssuerIdentifier.countryOfResidence | Skal utleveres      |
| transactions.paymentCard.cardIssuerIdentifier.value              | Teknisk obligatorisk |
| transactions.paymentCard.cardIssuerIdentifier.type               | Teknisk obligatorisk |
| transactions.registered                                          | Skal utleveres       |
| transactions.amount                                              | Skal utleveres       |
| transactions.currency | Skal utleveres |  | |                      |
| links.rel                                                        | Teknisk obligatorisk |
| links.href                                                       | Teknisk obligatorisk |

### Datavalidering

Det er finansforetakenes ansvar å validere forespørsler fra etat og det er opp til finansforetakene å sørge for at alle
forespørsler fra etat blir validert <u>godt nok</u> Org.nr. til Digitaliseringsdirektoratet (digdir) er 974720760.

#### Spesifikke valideringer for Oppgjør etter dødsfall

- Bekreftelse av døden: Finansforetakene bør verifisere at kontrollobjektet (f.nr./d.nr.) er offisielt død ved å sjekke
- status i FREG. De fleste finansforetakene abonnerer på slike hendelser med FREG og har allerede denne statusen internt.

- Gyldig input-parameter for Oppgjør etter dødsfall:
    - Tilgangstoken fra Maskinporten: Finansforetakene må validere token fra Maskinporten med følgende scope: `bits:kontoinformasjon`
    - <u>Input parameter for Oppgjør etter dødsfall:</u>For Accounts:</u>For de andre endepunktene (Account Details og Transactions):</u> Alle tabellene over utlevering av felt er oppdatert med den nye kategoriseringen. |
| 03.09.24 | 2.0 | Lagt til løsningsbeskrivelse |
