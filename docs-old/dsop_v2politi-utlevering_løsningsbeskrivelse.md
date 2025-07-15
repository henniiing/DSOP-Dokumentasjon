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

<mark>
vil kontakte alle relevante kontaktpersoner når dokumentasjonen er ferdigstilt.*
<br > - Det forventes en betydelig økning i forespørsler til finansforetakene fra politiet dvs. politidistriktene, Kripos, Økokrim og Namsmannen. Totalt volum per år for forespørsel om kontoliste, transaksjoner og saldo:<br > - Estimert fremtidig: 300.000 |
| Sikkerhetsdokumentasjon                          | Sikkerhetsdokumentasjon for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Politi-Utlevering*.                                                                                                                                                                                                                                                                                                                                                                                                                                            | [Sikkerhetsdokumentasjon](/dsop_v2fellesstandard_securitydesign).                                                                                                                                                                               |
| Arkitektur                                       | Arkitektur for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Politi-Utlevering*.                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Dokumentasjon på engelsk: [Architecture documentation](/dsop_v2fellesstandard_architecturedocument).                                                                                                                                            |
| API-spesifikasjon                                | Følgende endepunkter inngår i tjenesten *Politi-Utlevering*: <br >- Cards<br ><br ><br > [Cards (Kort)](https:/bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/cards/listCards) <br > dette feltet inneholde en representasjon av brukerID til saksbehandleren i politiet selv om parameteren ikke er obligatorisk teknisk. <br >

 Kategorisering av utlevering av kontoopplysninger på feltnivå:
* <i><i>
* <i><i>
* <i><i>
* <i><i>
* <i>

<br > for de konti der Finansforetaket ikke utleverer data via de øvrige endepunktene i tjenesten.
* Accounts skal også utlevere opplysninger der kontrollobjektet har disposisjonsrett. Det er definert to alternativer, som politiet støtter, for hvordan dette utleveres:

##### Alternativ 1
<i>

Accounts utleverer fullstendig liste over de konti hvor kontrollobjektet er eier. I tillegg opplyses det at kontrollobjektet har disposisjonsrett på andre konti ved å returnere <i> 

Dersom kontrollobjektet kun har konti den disponerer i en bank, vil kontolisten returnere en tom liste og <i>
<i>
##### Alternativ 2
<i>

Accounts utleverer fullstendig liste over konti kontrollobjektet eier og disponerer dersom "onlyPrimaryOwner" = "false". 

<br > Org.nr. til Politiet er 915429785 (Politi- og lensmannsetaten).


#### Spesifikke valideringer for Politi-Utlevering

- Gyldig input-parameter for Politi-Utlevering:
  - Tilgangstoken fra Maskinporten: Finansforetakene må validere token fra Maskinporten med følgende scope: `bits:kontoinformasjon`
  - <u>


<u><u>

| Input parametere              | Forventet verdi                                                                                                                                   | Forslag til validering                                                                                                                                                                                                                       |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AccountInfoRequestID (M)      | Uuid referanse til saksnr.                                                                                                                        | Formatet kan valideres. I tillegg kan denne parameteren valideres iht definisjonen i [Overall description of the DSOP Control API](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#accountinforequestid). |
| CorrelationID (M)             | Uuid verdi til en unik teknisk referanse for forespørselen.                                                                                       | Formatet kan valideres. I tillegg kan denne parameteren valideres iht definisjonen i [Overall description of the DSOP Control API](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#correlationid).        |
| Legal-Mandate (M)             | "Straffeprosessloven%20%C2%A7<br >210%20(3)%20andre%20punktum" | Strengen skal være I ‘encoded’ format og burde valideres iht til [Juridiske rammebetingelser Politi-Utlevering](/dsop_v2politi-utlevering_juridisk).                                                       |
| PartyID (M)                   | Kontrollbjektet: Organisasjonsnummer, FNR eller D.NR.                                                                                             | Formatet kan valideres.                                                                                                                                                                                                                      |
| OnlyPrimaryOwner (M)          | "FALSE" eller "TRUE"                                                                                                                              | Formatet kan valideres.                                                                                                                                                                                                                      |
| AdditionalReferenceID (O)     | Utleveringspålegg i JWS format.                                                                                                                   | Dataobjektet bør valideres mtp. format, signatur og innhold. Se [spesifikasjon](/dsop_v2politi-utlevering_utleveringspålegg).                                                                              |
| AdditionalReferenceIDType (O) | "pol1"                                                                                                                                            | Formatet kan valideres.                                                                                                                                                                                                                      |
| RequesterID (O)               | Representasjon av brukerID til etterforskeren.                                                                                                    | Verdi <u><u>
| fromDate (M)                  | Opptil 10 år før dagens dato.                                                                                                                     | Formatet kan valideres. I tillegg bør verdien også valideres slik at datoen ikke er eldre en 10 år før dagens dato.                                                                                                                          |
| toDate (M)                    | Dagens dato.                                                                                                                                      | Formatet kan valideres.                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                      |

*Se [HTTP error codes and specific error situations with associated message codes](/assets/HTTP error codes V.2.pdf)/.*


<u><u>

| Input parametere              | Forventet verdi                                                                                                                                   | Forslag til validering    |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| AccountReference (M)          | Uuid referanse til kontonr.                                                                                                                       | -                         |
| AccountInfoRequestID (M)      | Uuid referanse til saksnr.                                                                                                                        | Samme som for *Accounts*. |
| CorrelationID (M)             | Uuid verdi til en unik teknisk referanse for forespørselen.                                                                                       | Samme som for *Accounts*. |
| Legal-Mandate (M)             | "Straffeprosessloven%20%C2%A7<br >210%20(3)%20andre%20punktum" | Samme som for *Accounts*. |
| AdditionalReferenceID (O)     | Utleveringspålegg i JWS format.                                                                                                                   | Samme som for *Accounts*. |
| AdditionalReferenceIDType (O) | "pol1"                                                                                                                                            | Samme som for *Accounts*. |
| RequesterID (O)               | Representasjon av brukerID til etterforskeren.                                                                                                    | Samme som for *Accounts*. |
| fromDate (M)                  | Opptil 10 år før dagens dato.                                                                                                                     | Samme som for *Accounts*. |
| toDate (M)                    | Dagens dato.                                                                                                                                      | Samme som for *Accounts*. |                                                                                                                                                                                                                                                      |

*Se [HTTP error codes and specific error situations with associated message codes](/assets/HTTP error codes V.2.pdf)/.*


#### Gyldige forespørsler i forhold til utleveringspålegget for *Politi-Utlevering*

Dersom utleveringspålegget er gyldig (format, signatur og innhold), anbefales det at bankene <u>
til de forskjellige endepunktene er i tråd med det signerte utleveringspålegget. Se [beskrivelse av utleveringspålegg](/dsop_v2politi-utlevering_utleveringspålegg).

De anbefalte verifikasjonene er:<u>
- partyID : *PartyID* i utleveringspålegget er den samme som i forespørselen (Accounts). 
- mandate: Lovhjemmel i utleveringspålegget er det samme som i forespørselen. 
- fromDate og toDate: Tidsperioden i forespørselen er enten den samme eller innenfor det som definert i utleveringspålegget. 
- onlyPrimaryOwner: Hvis “onlyPrimaryOwner” = “FALSE” i utleveringspålegget, vil bankene godta enhver verdi av “onlyPrimaryOwner” i forespørselen, men hvis “onlyPrimaryOwner” = “TRUE” i utleveringspålegget bare “onlyPrimaryOwner” = “TRUE“ skal godtas i forespørselen. 
- Tilgang til endepunkter i utleveringspålegget (kontoliste, kontodetaljer, transaksjoner, kort og roller): Det er kun «TRUE» gir tilgang til de gitte endepunktene. Dersom bankene mottar forespørsler til endepunkter der tilgang hadde verdi «FALSE» skal det sendes en feilmelding. Se HTTP-feil 403 og ACC-011 i dokumentet [HTTP error codes and specific error situations with associated message codes V.2.0](/assets/HTTP error codes V.2.pdf)/.

Se definerte test-caser i forbindelse med testing av forespørsler og utleveringspålegg [her](https:/dokumentasjon.dsop.no/dsop_v2politi-utlevering_utleveringsp%C3%A5legg.html#testing-av-foresp%C3%B8rsler--utleveringsp%C3%A5legg).


## Endringslogg

| Dato     | Versjon | Endring                                                                                        |
|----------|---------|------------------------------------------------------------------------------------------------|
| 18.03.25 | 2.0.2   | Spesifisert grunnlaget for utlevering av kontoinformasjon i henhold til DSOP fellesstandard |
| 28.02.25 | 2.0.1   | Seksjonen “Nødvendig filtrering av data ved utlevering per endepunkt» har endret navn til «Utlevering av datafelter per endepunkt» og kategoriene er endret slik at de følger prinsipper for utlevering. <br > Alle tabellene over utlevering av felt er oppdatert med den nye kategoriseringen. |
| 20.03.24 | 2.0     | Lagt til løsningsbeskrivelse |


 