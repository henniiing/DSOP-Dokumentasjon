---
title: "Løsningsbeskrivelse for Konkursbehandling"
slug: "dsop_v2konkurs_løsningsbeskrivelse"
id: "dsop_v2konkurs_løsningsbeskrivelse"
keywords: ["sample"]
---

Løsningen Konkursbehandling består av to selvstendige moduler, der begge skal implementeres:

<ol type="A">
  <li>Konkursvarsel - en eNotifikasjonstjeneste der bankene henter konkursvarsler</l>Innhenting av kontrollinformasjon - der bostyrer mottar kontoopplysninger fra bankene skyldnere hadde et kundeforhold til</l> [Functional specification DSOP Control Common Standard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_functionalspecification.html). |
| Informasjon om volum og responstider             | 	Responstidene kan variere mellom finansinstitusjoner, men det typiske mønsteret er at forespørsler etter data vil ha raske responstider (sekunder), mens store historiske forespørsler kan det ta lengre tid.<br \/><br \/> Volum for løsningen *Konkursbehandling*.<br \/> Totalt volum per år for forespørsler om kontoliste med tilhørende kontodetaljer og transaksjoner i samme tidsperiode til finansinstitusjoner fra bostyrene: 20.000 forespørsler                                                                         |
| Sikkerhetsdokumentasjon | Sikkerhetsdokumentasjon for DSOP Kontrollinformasjon fellesstandard gjelder for løsningen *Konkursbehandling*. | [Sikkerhetsdokumentasjon](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_securitydesign.html). |
| Arkitektur | Arkitektur for DSOP Kontrollinformasjon fellesstandard gjelder for løsningen *Konkursbehandling*. | Dokumentasjon på engelsk: [Architecture documentation](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_architecturedocument.html). |
| API-spesifikasjon | Følgende endepunkter inngår i løsningen *Konkursbehandling*:<br \/>- Accounts<br \/>&amp;gt;- Account details<br \/> &amp;gt;- Transactions<br \/> &amp;gt;<br \/>- Cards<br \/>&amp;gt;-	Roles <br \/> Finansforetakene skal returnere en HTTP 400 med ACC-001 og best mulig feilbeskrivelse dersom etat sender en forespørsel til ugyldige endepunkter. Se [HTTP-feilkoder og spesifikke feilsituasjoner med tilhørende meldingskoder](assets\HTTP error codes V.2.pdf). | Dokumentasjon på engelsk: [API-specification](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_api_specification.html). |
| Overordnet spesifikasjon av DSOP-Kontroll API-et | Den overordnede spesifikasjonen av DSOP Kontroll API-et for DSOP Kontrollinformasjon fellesstandard gjelder for løsningen *Konkursbehandling*. | [Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html) |
| Integrasjonstesting | Definerte test-case for DSOP Kontrollinformasjon fellesstandard gjelder for løsningen *Konkursbehandling*. <br \/><br \/>For ende til ende testing bør finansforetakene hensynta testdata definert i konkursvarsel testmiljø. | [Internal testing / quality assurance DSOP Control Common Standard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_test.html). |

#### Tillatte endepunkter i trinn 2 for tjenesten Konkursbehandling

| Endepunkter | Scope fra Maskinporten | Minimum nødvendig versjon av API |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ---------------------------------- |
| [Accounts (kontoliste)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/accounts/listAccounts)    <br \/> [Account Details (kontodetaljer)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/accounts/showAccountById) <br \/> [Transactions (transaksjoner)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/transactions/listTransactions) | `bits:kontoinformasjon` | V.2.0 |

Finansforetakene skal påse at tjenesten Konkursbehandling ikke får tilgang til endepunktene: *Cards* og *Roles*.

#### Gyldig forespørsel - Trinn 2a

Brønnøysundregistrene skal bruke endepunktet *Accounts* på følgende måte:

| Input-felter                                                                                                                                                        | Beskrivelse                                                                                                                                                                                                                                                                             |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [AccountInfoRequestId](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#accountinforequestid)                                     | Uuid-verdi for et saksnummer i bosiden.                                                                                                                                                                                                                                                 |
| [CorrelationID](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#correlationid)                                                   | Uuid-verdi for unik teknisk referanse til forespørselen.                                                                                                                                                                                                                                |
| Legal-Mandate                                                                                                                                                       | Lovhjemmel for tjenesten skal være "kkl. &sect;156 (3) og (4), jf. kkfor.&sect;21". URL Encoded verdien skal altså være "kkl.%20%C2%A7156%20(3)%20og%20(4)%2C%20jf.%20kkfor.%C2%A721".                                                                                                            |
| PartyID                                                                                                                                                             | FNR/D-NR eller orgnr til skyldneren.                                                                                                                                                                                                                                                    |
| onlyPrimaryOwner                                                                                                                                                    | Kun "onlyPrimaryOwner" = "TRUE".                                                                                                                                                                                                                                                        |
| [AdditionalReferenceID](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid)     | Ingen data.                                                                                                                                                                                                                                                                             |
| [AdditionalReferenceIDType](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid) | Ingen data.                                                                                                                                                                                                                                                                             |
| RequesterID                                                                                                                                                         | Ingen data.                                                                                                                                                                                                                                                                             |
| fromDate                                                                                                                                                            | Opptil 12 måneder tilbake i tid, regnet fra konkursdato (kjennelsesdato). Banken finner datoen for konkurs i konkursvarselet - i feltet kjennelsesdato (se informasjon om felter i [konkursvarselet](https://bitsnorge.github.io/dsop-konkursvarsel-api/#/default/get_konkursvarsler)). |
| toDate                                                                                                                                                              | Dagens dato.                                                                                                                                                                                                                                                                            |

Se datamodell for [Accounts](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts.html).

#### Gyldig forespørsel - Trinn 2b
Etter vellykket response fra 2a, skal Brønnøysundregistrene videre bruke endepunktene Account Details og Transactions på følgende måte:

| Felter                    | Beskrivelse                          |
|---------------------------|--------------------------------------|
| accountReference          | Unik referanse til kontoen.          |
| AccountInfoRequestID      | Samme definisjon som for *Accounts*. |
| CorrelationID             | Samme definisjon som for *Accounts*. |
| Legal-Mandate             | Samme definisjon som for *Accounts*. |
| AdditionalReferenceID     | Ingen data.                          |
| AdditionalReferenceIDType | Ingen data.                          |
| RequesterID               | Ingen data.                          |
| fromDate                  | Samme definisjon som for *Accounts*. |
| toDate                    | Samme definisjon som for *Accounts*. |

Se datamodell for:
- [Account details](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountdetails.html)
- [Transactions](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_transactions.html)

#### Nødvendig filtrering av data ved utlevering per endepunkt

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

Se [gyldig forespørsel for endepunktet Accounts](https://dokumentasjon.dsop.no/dsop_v2konkurs_l%C3%B8sningsbeskrivelse.html#gyldig-foresp%C3%B8rsel---trinn-2).

Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2konkurs_l%C3%B8sningsbeskrivelse.html#n%C3%B8dvendig-filtrering-av-data-ved-utlevering-per-endepunkt).

| Svar fra *Accounts*                                 | Datautlevering       |
|-----------------------------------------------------|----------------------|
| responseDetails.status                              | Teknisk obligatorisk |
| responseDetails.message | Skal utleveres |  | |
| accounts.status                                     | Skal utleveres       |
| accounts.servicer.identifier.countryOfResidence     | Til vurdering        |
| accounts.servicer.identifier.value                  | Teknisk obligatorisk |
| accounts.servicer.identifier.type                   | Teknisk obligatorisk |
| accounts.servicer.name                              | Til vurdering        |
| accounts.accountIdentifier                          | Teknisk obligatorisk |
| accounts.accountReference                           | Teknisk obligatorisk |
| accounts.type                                       | Til vurdering        |
| accounts.currency                                   | Til vurdering        |
| accounts.primaryOwner.permission                    | Til vurdering        |
| accounts.primaryOwner.identifier.countryOfResidence | Til vurdering        |
| accounts.primaryOwner.identifier.value              | Teknisk obligatorisk |
| accounts.primaryOwner.identifier.type               | Teknisk obligatorisk |
| accounts.primaryOwner.name                          | Til vurdering        |
| accounts.primaryOwner.startDate                     | Til vurdering        |
| accounts.primaryOwner.endDate                       | Til vurdering        |
| accounts.name | Utleveres ikke |  | |
| links.rel                                           | Teknisk obligatorisk |
| links.href                                          | Teknisk obligatorisk |

#### Utlevering for Account Details (Kontodetaljer):
Finansforetakene skal utlevere opplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard). Vær oppmerksom på at det i enkelte tilfeller ikke vil bli utlevert informasjon fra spesifikke felter dersom det ikke er relevant.

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2konkurs_l%C3%B8sningsbeskrivelse.html#n%C3%B8dvendig-filtrering-av-data-ved-utlevering-per-endepunkt).

| Svar fra *AccountDetails*                          | Datautlevering       |
|----------------------------------------------------|----------------------|
| responseDetails.status                             | Teknisk obligatorisk |
| responseDetails.message | Skal utleveres |  | |
| account.status                                     | Skal utleveres       |
| account.servicer.identifier.countryOfResidence     | Til vurdering        |
| account.servicer.identifier.value                  | Teknisk obligatorisk |
| account.servicer.identifier.type                   | Teknisk obligatorisk |
| account.servicer.name                              | Utleveres ikke       |
| account.accountIdentifier                          | Teknisk obligatorisk |
| account.accountReference                           | Teknisk obligatorisk |
| account.type                                       | Til vurdering        |
| account.currency                                   | Til vurdering        |
| account.name                                       | Til vurdering        |
| account.balances.creditLineIncluded                | Til vurdering        |
| account.balances.amount                            | Til vurdering        |
| account.balances.creditDebitIdicator               | Til vurdering        |
| account.balances.registered                        | Til vurdering        |
| account.balances.type                              | Til vurdering        |
| account.balances.creditLineAmount                  | Til vurdering        |
| account.balances.creditLineCurrency                | Til vurdering        |
| account.balances.currency                          | Til vurdering        |
| account.primaryOwner.permission                    | Til vurdering        |
| account.primaryOwner.identifier.countryOfResidence | Til vurdering        |
| account.primaryOwner.identifier.value              | Teknisk obligatorisk |
| account.primaryOwner.identifier.type               | Teknisk obligatorisk |
| account.primaryOwner.name                          | Til vurdering        |
| account.primaryOwner.startDate                     | Til vurdering        |
| account.primaryOwner.endDate                       | Til vurdering        |
| account.startDate                                  | Til vurdering        |
| account.endDate                                    | Til vurdering        |

#### Utlevering for Transactions (Transaksjoner):
Finansforetakene skal utlevere opplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard). Vær oppmerksom på at det i enkelte tilfeller ikke vil bli utlevert informasjon fra spesifikke felter dersom det ikke er relevant.

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2konkurs_l%C3%B8sningsbeskrivelse.html#n%C3%B8dvendig-filtrering-av-data-ved-utlevering-per-endepunkt).

| Svar fra *Transactions*                                          | Datautlevering       |
|------------------------------------------------------------------|----------------------|
| responseDetails.status                                           | Teknisk obligatorisk |
| responseDetails.message | Skal utleveres |  | |
| transactions.transactionIdentifier                               | Teknisk obligatorisk |
| transactions.references.value                                    | Til vurdering        |
| transactions.references.type                                     | Til vurdering        |
| transactions.creditDebitIndicator                                | Til vurdering        |
| transactions.reversalIndicator                                   | Til vurdering        |
| transactions.status                                              | Til vurdering        |
| transactions.transactionCode.domain                              | Til vurdering        |
| transactions.transactionCode.family                              | Til vurdering        |
| transactions.transactionCode.subFamily                           | Til vurdering        |
| transactions.transactionCode.freeText                            | Til vurdering        |
| transactions.bookingDate                                         | Til vurdering        |
| transactions.valueDate                                           | Til vurdering        |
| transactions.counterParties.accountIdentifier                    | Til vurdering        |
| transactions.counterParties.identifier.countryOfResidence        | Til vurdering        |
| transactions.counterParties.identifier.value                     | Teknisk obligatorisk |
| transactions.counterParties.identifier.type                      | Teknisk obligatorisk |
| transactions.counterParties.name                                 | Til vurdering        |
| transactions.counterParties.type                                 | Til vurdering        |
| transactions.counterParties.postalAddress.postCode               | Til vurdering        |
| transactions.counterParties.postalAddress.type                   | Til vurdering        |
| transactions.counterParties.postalAddress.streetName             | Til vurdering        |
| transactions.counterParties.postalAddress.buildingNumber         | Til vurdering        |
| transactions.counterParties.postalAddress.townName               | Til vurdering        |
| transactions.counterParties.postalAddress.country                | Til vurdering        |
| transactions.counterParties.postalAddress.addressLines           | Til vurdering        |
| transactions.additionalInfo                                      | Til vurdering        |
| transactions.currencyExchange.originalAmount                     | Til vurdering        |
| transactions.currencyExchange.sourceCurrency                     | Til vurdering        |
| transactions.currencyExchange.targetCurrency                     | Til vurdering        |
| transactions.currencyExchange.unitCurrency                       | Til vurdering        |
| transactions.currencyExchange.exchangeRate                       | Til vurdering        |
| transactions.merchant                                            | Til vurdering        |
| transactions.paymentCard.cardIdentifier                          | Teknisk obligatorisk |
| transactions.paymentCard.holderName                              | Til vurdering        |
| transactions.paymentCard.startDate                               | Til vurdering        |
| transactions.paymentCard.expiryDate                              | Til vurdering        |
| transactions.paymentCard.cardIssuerName                          | Til vurdering        |
| transactions.paymentCard.type                                    | Til vurdering        |
| transactions.paymentCard.cardStatus                              | Til vurdering        |
| transactions.paymentCard.versionNumber                           | Til vurdering        |
| transactions.paymentCard.cardIssuerIdentifier.countryOfResidence | Til vurdering        |
| transactions.paymentCard.cardIssuerIdentifier.value              | Teknisk obligatorisk |
| transactions.paymentCard.cardIssuerIdentifier.type               | Teknisk obligatorisk |
| transactions.registered                                          | Til vurdering        |
| transactions.amount                                              | Til vurdering        |
| transactions.currency | Til vurdering |  | |
| links.rel                                                        | Teknisk obligatorisk |
| links.href                                                       | Teknisk obligatorisk |

### Datavalidering

Det er finansforetakenes ansvar å validere forespørsler fra etat og det er opp til finansforetakene å sørge for at alle
forespørsler fra etat blir validert godt nok. Ved å validere og logge input-parametere fra etat riktig, vil
finansforetakene være bedre egnet til å unngå levering av overskuddsinformasjon. Implementering av slik logikk er
finansforetakenes ansvar.

For å sikre godt kontrollnivå på tvers av finansforetakene, er det beskrevet et sett med anbefalinger om generelle og
generiske valideringer i *DSOP Kontrollinformasjon fellesstandard* og spesifikke valideringer knyttet til tjenesten
*Konkursbehandling*.

#### Generelle og generiske valideringer

Disse er beskrevet på [«Generic DSOP Control validations»](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_validation.html).
<br \/> Org.nr. til Brønnøysundregistrene (brreg) er 974760673.

#### Spesifikke valideringer for Konkursbehandling

- Bekreftelse av Konkurs: Finansforetakene bør verifisere at kontrollobjektet (f.nr./d.nr./org.nr.) virkelig er konkurs ved å sjekke feltene "type" og "kjennelsesdato" i eNotifikasjonstjenesten for Konkursvarsel API. Se [DSOP Konkursvarsel: API-dokumentasjon](https://dokumentasjon.dsop.no/assets/Konkursvarsel-API-dokumentasjon.html).
- Gyldig input-parameter for Konkursbehandling:
  - Tilgangstoken fra Maskinporten: Finansforetakene må validere token fra Maskinporten med følgende scope: `bits:kontoinformasjon`
  - <u>Input parameter for Konkursbehandling:</u>For Accounts:</u>For de andre endepunktene (Account Details og Transactions):</u> Alle tabellene over utlevering av felt er oppdatert med den nye kategoriseringen.   |
| 20.03.24 | 2.0 | Lagt til løsningsbeskrivelse |
