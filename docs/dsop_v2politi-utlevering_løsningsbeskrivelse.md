---
title: "Dsop V2politi Utlevering LøSningsbeskrivelse"
id: "dsop_v2politi-utlevering_løsningsbeskrivelse"
slug: "dsop_v2politi-utlevering_løsningsbeskrivelse"
---

﻿---
title: Løsningsbeskrivelse for Politi-Utlevering
keywords: sample
sidebar: beta_sidebar
permalink: dsop_v2politi-utlevering_BETA_løsningsbeskrivelse.html
folder: section1
---

<mark><strong>*Tjenesten er under utvikling, og endring i dokumentasjon på denne siden kan forekomme uten varsel. DSOP Forvaltning
vil kontakte alle relevante kontaktpersoner når dokumentasjonen er ferdigstilt.*</strong>
<br>

## Kontrollinformasjon - Innhenting av kontoinformasjon til Politiet

Tjenesten er basert på DSOP Kontrollinformasjon fellesstandard og gjelder utlevering av kontoopplysninger til Politiet. 
Se [Juridiske rammebetingelser](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_juridisk.html) for *Politi-Utlevering*.  


[![alt text](images/politi_utlevering_figur_1.png)](images/politi_utlevering_figur_1.png)



### Trinn 1 - DSOP Oversikt over kundeforhold

Politiet skal bruke *DSOP Oversikt over kundeforhold* API-et på følgende måte:

#### Tillatte endepunkter i trinn 1 for tjenesten Politi-Utlevering

| Endepunkter                                                                                                                               | Scope fra Maskinporten    | Minimum nødvendig versjon av API |
|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|----------------------------------|
| [customerRelationships](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_api_specification.html#api-for-customer-relation-overview)    | `bits:kundeforhold`       | V.2.0                            |
| [accountServicingProvider](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_api_specification.html#api-for-customer-relation-overview) | `bits:kundeforhold.konto` | V.2.0                            |



#### Gyldig forespørsel - Trinn 1

Politiet skal bruke endepunktet *customerRelationships* på følgende måte:

| Input-felter         | Beskrivelse                                                                                                                                                                                                                                                                                                                                                                              |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authorization        | Gyldig token fra Maskinporten (`bits:kundeforhold`).                                                                                                                                                                                                                                                                                                                                     |
| CustomerID           | FNR/D-NR eller orgnr til kontrollobjektet.                                                                                                                                                                                                                                                                                                                                               |
| CorrelationID        | Uuid-verdi for unik teknisk referanse til forespørselen.                                                                                                                                                                                                                                                                                                                                 |
| Legal-Mandate        | Lovhjemmel skal enten være: "Straffeprosessloven §210 (3) første punktum" eller "Straffeprosessloven §210 (3) andre punktum" avhengig av om forespørsel henholdsvis gjelder en straffesak eller en forsvinningssak. URL Encoded verdien skal altså være "Straffeprosessloven%20%C2%A7210%20(3)%20f%C3%B8rste%20punktum" eller "Straffeprosessloven%20%C2%A7210%20(3)%20andre%20punktum". |
| AccountInfoRequestID | Uuid-verdi for saksnummer i politiet.                                                                                                                                                                                                                                                                                                                                                    |
| fromDate             | Opptil 10 år før dagens dato.                                                                                                                                                                                                                                                                                                                                                            |
| toDate               | En dato nyere eller lik fromDate.                                                                                                                                                                                                                                                                                                                                                        |
| onlyPrimaryOwner     | Politiet har mulighet til å bruke "onlyPrimaryOwner" = "FALSE» eller "TRUE". Dersom politiet ikke har behov for kundeforhold der kontrollobjektet er/var disponent anbefales det å dataminimere i forespørelen: "onlyPrimaryOwner" = "TRUE"                                                                                                                                              |

Se datamodell for [customerRelationships](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_customerrelationships.html).

Politiet skal bruke endepunktet *accountServicingProvider* på følgende måte:

| Felter               | Beskrivelse                                                                                                                                                                                                                                                                                                                                                  |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authorization        | Gyldig token fra Maskinporten (`bits:kundeforhold.konto`).                                                                                                                                                                                                                                                                                                   |
| AccountID            | Kontonr.                                                                                                                                                                                                                                                                                                                                                     |
| CorrelationID        | Uuid-verdi for unik teknisk referanse til forespørselen.                                                                                                                                                                                                                                                                                                     |
| Legal-Mandate        | "Straffeprosessloven §210 (3) første punktum" eller "Straffeprosessloven §210 (3) andre punktum" avhengig av om forespørsel henholdsvis gjelder en straffesak eller en forsvinningssak. URL Encoded verdien skal altså være "Straffeprosessloven%20%C2%A7210%20(3)%20f%C3%B8rste%20punktum" eller "Straffeprosessloven%20%C2%A7210%20(3)%20andre%20punktum". |
| AccountInfoRequestID | Uuid-verdi for saksnummer i politiet.                                                                                                                                                                                                                                                                                                                        |

Se datamodell for [accountServicingProvider](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accountservicingprovider.html).



### Trinn 2 a og b - DSOP Kontrollinformasjon

#### Generell informasjon

| Informasjon om                                   | Beskrivelse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Link                                                                                                                                                                                                                                                                              |
|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Funksjonell spesifikasjon                        | Den funksjonelle spesifikasjonen for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Politi-Utlevering*.                                                                                                                                                                                                                                                                                                                                                                                                                                   | Dokumentasjon på engelsk: [Functional specification DSOP Control Common Standard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_functionalspecification.html).                                                                                                              |
| Informasjon om volum og responstider             | Responstidene kan variere mellom finansinstitusjoner, men det typiske mønsteret er at forespørsler etter data vil ha raske responstider (sekunder), mens store historiske forespørsler kan ta lengre tid.<br><br>Volum for tjenesten *Politi-Utlevering*. <br> - Det forventes en betydelig økning i forespørsler til finansforetakene fra politiet dvs. politidistriktene, Kripos, Økokrim og Namsmannen. Totalt volum per år for forespørsel om kontoliste, transaksjoner og saldo:<br> - Estimert nåværende: 23.000 <br> - Estimert fremtidig: 300.000 |
| Sikkerhetsdokumentasjon                          | Sikkerhetsdokumentasjon for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Politi-Utlevering*.                                                                                                                                                                                                                                                                                                                                                                                                                                            | [Sikkerhetsdokumentasjon](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_securitydesign.html).                                                                                                                                                                               |
| Arkitektur                                       | Arkitektur for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Politi-Utlevering*.                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Dokumentasjon på engelsk: [Architecture documentation](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_architecturedocument.html).                                                                                                                                            |
| API-spesifikasjon                                | Følgende endepunkter inngår i tjenesten *Politi-Utlevering*: <br>- Accounts<br>- Account details<br>- Transactions<br>- Cards<br>- Roles<br><br>Det er minimum versjon 2.0 av DSOP Kontroll API-et som skal benyttes for tjenesten.                                                                                                                                                                                                                                                                                                                       | Dokumentasjon på engelsk: [API-specification](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_api_specification.html).                                                                                                                                                        |
| Overordnet spesifikasjon av DSOP-Kontroll API-et | Den overordnede spesifikasjon av DSOP Kontroll API-et for DSOP Kontrollinformasjon fellesstandard gjelder for løsningen *Politi-Utlevering*.                                                                                                                                                                                                                                                                                                                                                                                                              | [Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html)                                                                                                                                                 |
| Integrasjonstesting                              | Definerte test-caser for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Politi-Utlevering*.<br><br>For ende til ende testing bør finansforetakene hensynta test av utleveringspålegg for å verifisere deres valideringer og verifikasjoner.                                                                                                                                                                                                                                                                                               | [Internal testing / quality assurance DSOP Control Common Standard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_test.html).                                                                                                                                               |
| Datavalidering                                   | Generelle anbefalinger om validering i DSOP Kontrollinformasjon fellesstandard er også gjeldende for utlevering av kontoinformasjon i tjenesten *Politi-Utlevering*.<br><br>Det er også spesifikke valideringer som gjelder i tjenesten *Politi-Utlevering* som også bør implementeres, især det som gjelder verifikasjon av forespørsel ift utleveringspålegg.                                                                                                                                                                                           | [Generic DSOP Control validations](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_validation.html#generic-dsop-control-validations)<br><br>Se [eget avsnitt nede på siden](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_l%C3%B8sningsbeskrivelse.html#datavalidering). |




#### Tillatte endepunkter i trinn 2 for tjenesten Politi-Utlevering

| Endepunkter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Scope fra Maskinporten  | Minimum nødvendig versjon av API |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|----------------------------------|
| [Accounts (kontoliste)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/accounts/listAccounts)    <br> [Account Details (kontodetaljer)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/accounts/showAccountById) <br> [Transactions (transaksjoner)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/transactions/listTransactions) <br> [Cards (Kort)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/cards/listCards) <br> [Roles (roller)](https://bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/roles/listRoles) | `bits:kontoinformasjon` | V.2.0                            |



#### Gyldig forespørsel - Trinn 2a

Politiet skal bruke endepunktet *Accounts* på følgende måte:

| Input-felter                                                                                                                                                        | Beskrivelse                                                                                                                                                                                                                                                                                                                                                                             |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [AccountInfoRequestId](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#accountinforequestid)                                     | Uuid-verdi for et saksnummer hos politiet.                                                                                                                                                                                                                                                                                                                                              |
| [CorrelationID](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#correlationid)                                                   | Uuid-verdi for unik teknisk referanse til forespørselen.                                                                                                                                                                                                                                                                                                                                |
| Legal-Mandate                                                                                                                                                       | "Straffeprosessloven §210 (3) første punktum" eller "Straffeprosessloven §210 (3) andre punktum" avhengig av om forespørsel henholdsvis gjelder en straffesak eller en forsvinningssak. URL Encoded verdien skal altså være "Straffeprosessloven%20%C2%A7210%20(3)%20f%C3%B8rste%20punktum" eller "Straffeprosessloven%20%C2%A7210%20(3)%20andre%20punktum".                            | 
| PartyID                                                                                                                                                             | FNR/D-NR eller orgnr til kontrollobjektet.                                                                                                                                                                                                                                                                                                                                              |
| onlyPrimaryOwner                                                                                                                                                    | "onlyPrimaryOwner" = "TRUE" eller "FALSE".                                                                                                                                                                                                                                                                                                                                              |
| [AdditionalReferenceID](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid)     | Utleveringspålegget (Extradition Order) som dataobjekt som inneholder all informasjon om hva påtalemyndighet har godkjent ifm. utlevering av kontoopplysninger. Se [mer informasjon om utleveringspålegg](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_utleveringspålegg.html).                                                                                               |
| [AdditionalReferenceIDType](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid) | "AdditionalReferenceIDType" skal ha verdi "pol1"                                                                                                                                                                                                                                                                                                                                        |
| RequesterID                                                                                                                                                         | I tjenesten *Politi-Utlevering* <u>skal</u> dette feltet inneholde en representasjon av brukerID til saksbehandleren i politiet selv om parameteren ikke er obligatorisk teknisk. <br>Se mer detaljert definisjon i datamodell for [DSOP Kontroll API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#description-of-all-input--and-output-parameters-in-the-apis). |
| fromDate                                                                                                                                                            | Opptil 10 år før dagens dato.                                                                                                                                                                                                                                                                                                                                                           |
| toDate                                                                                                                                                              | En dato nyere eller lik *fromDate*.                                                                                                                                                                                                                                                                                                                                                     |


Se datamodell for [Accounts](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_accounts.html).

**Gyldige utleveringspålegg fra politi**

Det er viktig at bankene verifiserer at utleveringspålegget som sendes via feltet AdditionalReferenceID er iht 
[spesifikasjonen](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_utleveringspålegg.html).

#### Gyldig forespørsel - Trinn 2b
Etter vellykket response fra 2a, skal politiet videre bruke endepunktene Account Details, Transactions, Cards og Roles på følgende måte:


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

For tjenesten Politi-Utlevering gjelder følgende utlevering fra Kontoliste:  
* Liste over konti som kontrollobjektet eier eller eide i den gjeldende tidsperioden. 
* Det vil være mulig å returnere <i>"accountReference" = "dataNotDelivered"</i> for de konti der Finansforetaket ikke utleverer data via de øvrige endepunktene i tjenesten.
* Accounts skal også utlevere opplysninger der kontrollobjektet har disposisjonsrett. Det er definert to alternativer, som politiet støtter, for hvordan dette utleveres:

##### Alternativ 1
<i>Det utleveres informasjon om at kontrollobjektet har disposisjonsrett på en eller flere konti.</i>

Accounts utleverer fullstendig liste over de konti hvor kontrollobjektet er eier. I tillegg opplyses det at kontrollobjektet har disposisjonsrett på andre konti ved å returnere <i>responseDetails.status="partial"</i> og en fornuftig tekst til politiet via <i>responseDetails.message.</i> 

Dersom kontrollobjektet kun har konti den disponerer i en bank, vil kontolisten returnere en tom liste og <i>responseDetails.status="partial"</i>.

##### Alternativ 2
<i>Kontoer hvor kontrollobjektet har disposisjonsrett returneres med mulighet for å spørre om mer opplysninger via de andre endepunktene (AccountDetails, Transactions, Cards, Roles).</i>

Accounts utleverer fullstendig liste over konti kontrollobjektet eier og disponerer dersom "onlyPrimaryOwner" = "false". 

<br>

Se [gyldig forespørsel for endepunktet Accounts](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_BETA_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunkt). 

Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).  

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunktvering-av-datafelter-per-endepunkt). 

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

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunktvering-av-datafelter-per-endepunkt). 

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
Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).  

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunktvering-av-datafelter-per-endepunkt). 

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
Finansforetakene skal utlevere kontoopplysninger fra dette endepunktet etter overordnede [prinsipper for utlevering definert i DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_datamodel.html#principles-for-delivery-of-information-via-dsop-control-information-common-standard).  

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunktvering-av-datafelter-per-endepunkt). 

| Svar fra *Cards*                                     | Datautlevering       |
|------------------------------------------------------|----------------------|
| responseDetails.status                               | Teknisk obligatorisk |
| responseDetails.message                              | Skal utleveres       |
|                                                      |                      |
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

Videre er retningslinjene for utlevering av data per felt for dette endepunktet beskrevet i tabellen nedenfor, i henhold til kategoriseringen definert i [Utlevering av datafelter per endepunkt](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_l%C3%B8sningsbeskrivelse.html#utlevering-av-datafelter-per-endepunktvering-av-datafelter-per-endepunkt). 

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
*Politi-Utlevering*.


#### Generelle og generiske valideringer

Disse er beskrevet på [«Generic DSOP Control validations»](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_validation.html).
<br> Org.nr. til Politiet er 915429785 (Politi- og lensmannsetaten).


#### Spesifikke valideringer for Politi-Utlevering

- Gyldig input-parameter for Politi-Utlevering:
  - Tilgangstoken fra Maskinporten: Finansforetakene må validere token fra Maskinporten med følgende scope: `bits:kontoinformasjon`
  - <u>Input parameter for Politi-Utlevering:</u> Se gjeldende API-spesifikasjon for teknisk beskrivelse: [API Specification](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_api_specification.html)


<u>For Accounts:</u>

| Input parametere              | Forventet verdi                                                                                                                                   | Forslag til validering                                                                                                                                                                                                                       |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AccountInfoRequestID (M)      | Uuid referanse til saksnr.                                                                                                                        | Formatet kan valideres. I tillegg kan denne parameteren valideres iht definisjonen i [Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#accountinforequestid). |
| CorrelationID (M)             | Uuid verdi til en unik teknisk referanse for forespørselen.                                                                                       | Formatet kan valideres. I tillegg kan denne parameteren valideres iht definisjonen i [Overall description of the DSOP Control API](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#correlationid).        |
| Legal-Mandate (M)             | "Straffeprosessloven%20%C2%A7<br>210%20(3)%20f%C3%B8rste%20punktum" <br> eller <br> "Straffeprosessloven%20%C2%A7<br>210%20(3)%20andre%20punktum" | Strengen skal være I ‘encoded’ format og burde valideres iht til [Juridiske rammebetingelser Politi-Utlevering](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_juridisk.html).                                                       |
| PartyID (M)                   | Kontrollbjektet: Organisasjonsnummer, FNR eller D.NR.                                                                                             | Formatet kan valideres.                                                                                                                                                                                                                      |
| OnlyPrimaryOwner (M)          | "FALSE" eller "TRUE"                                                                                                                              | Formatet kan valideres.                                                                                                                                                                                                                      |
| AdditionalReferenceID (O)     | Utleveringspålegg i JWS format.                                                                                                                   | Dataobjektet bør valideres mtp. format, signatur og innhold. Se [spesifikasjon](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_utleveringspålegg.html).                                                                              |
| AdditionalReferenceIDType (O) | "pol1"                                                                                                                                            | Formatet kan valideres.                                                                                                                                                                                                                      |
| RequesterID (O)               | Representasjon av brukerID til etterforskeren.                                                                                                    | Verdi <u>må</u> finnes i forespørselen.                                                                                                                                                                                                      |
| fromDate (M)                  | Opptil 10 år før dagens dato.                                                                                                                     | Formatet kan valideres. I tillegg bør verdien også valideres slik at datoen ikke er eldre en 10 år før dagens dato.                                                                                                                          |
| toDate (M)                    | Dagens dato.                                                                                                                                      | Formatet kan valideres.                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                      |

*Se [HTTP error codes and specific error situations with associated message codes](assets\HTTP error codes V.2.pdf){:target="_blank"}.*


<u>For de andre endepunktene:</u>

| Input parametere              | Forventet verdi                                                                                                                                   | Forslag til validering    |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| AccountReference (M)          | Uuid referanse til kontonr.                                                                                                                       | -                         |
| AccountInfoRequestID (M)      | Uuid referanse til saksnr.                                                                                                                        | Samme som for *Accounts*. |
| CorrelationID (M)             | Uuid verdi til en unik teknisk referanse for forespørselen.                                                                                       | Samme som for *Accounts*. |
| Legal-Mandate (M)             | "Straffeprosessloven%20%C2%A7<br>210%20(3)%20f%C3%B8rste%20punktum" <br> eller <br> "Straffeprosessloven%20%C2%A7<br>210%20(3)%20andre%20punktum" | Samme som for *Accounts*. |
| AdditionalReferenceID (O)     | Utleveringspålegg i JWS format.                                                                                                                   | Samme som for *Accounts*. |
| AdditionalReferenceIDType (O) | "pol1"                                                                                                                                            | Samme som for *Accounts*. |
| RequesterID (O)               | Representasjon av brukerID til etterforskeren.                                                                                                    | Samme som for *Accounts*. |
| fromDate (M)                  | Opptil 10 år før dagens dato.                                                                                                                     | Samme som for *Accounts*. |
| toDate (M)                    | Dagens dato.                                                                                                                                      | Samme som for *Accounts*. |                                                                                                                                                                                                                                                      |

*Se [HTTP error codes and specific error situations with associated message codes](assets\HTTP error codes V.2.pdf){:target="_blank"}.*


#### Gyldige forespørsler i forhold til utleveringspålegget for *Politi-Utlevering*

Dersom utleveringspålegget er gyldig (format, signatur og innhold), anbefales det at bankene <u>verifiserer</u> at forespørslene 
til de forskjellige endepunktene er i tråd med det signerte utleveringspålegget. Se [beskrivelse av utleveringspålegg](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_utleveringspålegg.html).

De anbefalte verifikasjonene er:
- partyID : *PartyID* i utleveringspålegget er den samme som i forespørselen (Accounts). 
- mandate: Lovhjemmel i utleveringspålegget er det samme som i forespørselen. 
- fromDate og toDate: Tidsperioden i forespørselen er enten den samme eller innenfor det som definert i utleveringspålegget. 
- onlyPrimaryOwner: Hvis “onlyPrimaryOwner” = “FALSE” i utleveringspålegget, vil bankene godta enhver verdi av “onlyPrimaryOwner” i forespørselen, men hvis “onlyPrimaryOwner” = “TRUE” i utleveringspålegget bare “onlyPrimaryOwner” = “TRUE“ skal godtas i forespørselen. 
- Tilgang til endepunkter i utleveringspålegget (kontoliste, kontodetaljer, transaksjoner, kort og roller): Det er kun «TRUE» gir tilgang til de gitte endepunktene. Dersom bankene mottar forespørsler til endepunkter der tilgang hadde verdi «FALSE» skal det sendes en feilmelding. Se HTTP-feil 403 og ACC-011 i dokumentet [HTTP error codes and specific error situations with associated message codes V.2.0](assets\HTTP error codes V.2.pdf){:target="_blank"}.

Se definerte test-caser i forbindelse med testing av forespørsler og utleveringspålegg [her](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_utleveringsp%C3%A5legg.html#testing-av-foresp%C3%B8rsler--utleveringsp%C3%A5legg).


## Endringslogg

| Dato     | Versjon | Endring                                                                                        |
|----------|---------|------------------------------------------------------------------------------------------------|
| 18.03.25 | 2.0.2   | Spesifisert grunnlaget for utlevering av kontoinformasjon i henhold til DSOP fellesstandard |
| 28.02.25 | 2.0.1   | Seksjonen “Nødvendig filtrering av data ved utlevering per endepunkt» har endret navn til «Utlevering av datafelter per endepunkt» og kategoriene er endret slik at de følger prinsipper for utlevering. <br> Alle tabellene over utlevering av felt er oppdatert med den nye kategoriseringen. |
| 20.03.24 | 2.0     | Lagt til løsningsbeskrivelse |


 