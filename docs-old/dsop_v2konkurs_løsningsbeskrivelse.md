---
title: "Løsningsbeskrivelse for Konkursbehandling"
slug: "dsop_v2konkurs_løsningsbeskrivelse"
id: "dsop_v2konkurs_løsningsbeskrivelse"
keywords:
  - "sample"
---

Løsningen Konkursbehandling består av to selvstendige moduler, der begge skal implementeres:


  <li>



[<!-- Comment fixed -->](images/konkurs_01-1)


I tabellen under finnes linker til datamodell, API-spesifikasjon og arkitekturdokumentasjon for de to modulene.

## A - Konkursvarsel

Konkursvarsel-tjenesten er en selvstendig tjeneste som varsler om åpnet- slettet- opphevet- og avsluttede konkurser.


| Dokument                               | 	Link                                                                                                                           |
|----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| Funksjonell spesifikasjon              | [Funksjonell spesifikasjon Konkursvarsel](/dsop_v2konkurs_functionalspecification)            |
| Datamodell og arkitekturdokumentasjon	 | [Datamodell og arkitekturdokument for Konkursvarsel](/Konkursvarsel-API-dokumentasjon) |
| API-spesifikasjon                      | [API-spesifikasjon konkursvarsel](https:/bitsnorge.github.io/dsop-konkursvarsel-api/)                                          |
| Testdata	                              | [Testdata Konkursvarsel](/dsop_v2konkurs_test)                                                |



## B - Kontrollinformasjon - Innhenting av kontoinformasjon for bostyrere

Tjenesten er basert på DSOP Kontrollinformasjon fellesstandard og gjelder utlevering av kontoopplysninger til bostyrene 
via «bosiden» hos BRREG. 

[<!-- Comment fixed -->](images/konkurs_figur_1.png)


### Trinn 1 - DSOP Oversikt over kundeforhold

Brønnøysundregistrene skal bruke *DSOP Oversikt over kundeforhold* API-et på følgende måte:

#### Tillatte endepunkter i trinn 1 for tjenesten Konkursbehandling

| Endepunkter                                                                                         | Scope fra Maskinporten | Minimum nødvendig versjon av API |
|-----------------------------------------------------------------------------------------------------|------------------------|----------------------------------|
| [customerRelationships](/dsop_v2fellesstandard_api_specification) | `bits:kundeforhold`    | V.2.0                            |


#### Gyldig forespørsel - Trinn 1

Brønnøysundregistrene skal bruke endepunktet *customerRelationships* på følgende måte:

| Input-felter         | Beskrivelse                                                                                                                                                                  |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authorization        | Gyldig token fra Maskinporten (`bits:kundeforhold`).                                                                                                                         |
| CustomerID           | FNR/D-NR eller orgnr til skyldneren.                                                                                                                                         |
| CorrelationID        | Uuid-verdi for unik teknisk referanse til forespørselen.                                                                                                                     |
| Legal-Mandate        | Lovhjemmel for tjenesten skal være "kkl. §156 (3) og (4), jf. kkfor.§21". URL Encoded verdien skal altså være “kkl.%20%C2%A7156%20(3)%20og%20(4)%2C%20jf.%20kkfor.%C2%A721”. |
| AccountInfoRequestID | Uuid-verdi for et saksnummer i bosiden.                                                                                                                                      |
| fromDate             | Opptil 12 måneder før konkursdato.                                                                                                                                           |
| toDate               | Dagens dato.                                                                                                                                                                 |
| onlyPrimaryOwner     | Kun "onlyPrimaryOwner" = "TRUE".                                                                                                                                             |

Se datamodell for [customerRelationships](/dsop_v2fellesstandard_customerrelationships).



### Trinn 2 a og b - DSOP Kontrollinformasjon

#### Generell informasjon

| Informasjon om                                   | 	Beskrivelse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 	Link                                                                                                                                                                      |
|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Funksjonell spesifikasjon	                       | Den funksjonelle spesifikasjonen for DSOP Kontrollinformasjon fellesstandard gjelder for løsningen *Konkursbehandling*.                                                                                                                                                                                                                                                                                                                                                                                                     | 	Dokumentasjon på engelsk: <br > Totalt volum per år for forespørsler om kontoliste med tilhørende kontodetaljer og transaksjoner i samme tidsperiode til finansinstitusjoner fra bostyrene: 20.000 forespørsler                                                                         |
| Sikkerhetsdokumentasjon                          | 	Sikkerhetsdokumentasjon for DSOP Kontrollinformasjon fellesstandard gjelder for løsningen *Konkursbehandling*.                                                                                                                                                                                                                                                                                                                                                                                                             | [Sikkerhetsdokumentasjon](/dsop_v2fellesstandard_securitydesign).                                                                        |
| Arkitektur                                       | 	Arkitektur for DSOP Kontrollinformasjon fellesstandard gjelder for løsningen *Konkursbehandling*.                                                                                                                                                                                                                                                                                                                                                                                                                          | Dokumentasjon på engelsk: [Architecture documentation](/dsop_v2fellesstandard_architecturedocument).                                     |
| API-spesifikasjon                                | 	Følgende endepunkter inngår i løsningen *Konkursbehandling*:<br ><br ><br > [Account Details (kontodetaljer)](https:/bitsnorge.github.io/dsop-kontrollinformasjon-api/?urls.primaryName=API-specification%20V.2.0#/accounts/showAccountById) <br >

 Kategorisering av utlevering av kontoopplysninger på feltnivå:
* <i><i>
* <i><i>
* <i><i>
* <i><i>
* <i>

<br > Org.nr. til Brønnøysundregistrene (brreg) er 974760673.


#### Spesifikke valideringer for Konkursbehandling

- Bekreftelse av Konkurs: Finansforetakene bør verifisere at kontrollobjektet (f.nr./d.nr./org.nr.) virkelig er konkurs ved å sjekke feltene "type" og "kjennelsesdato" i eNotifikasjonstjenesten for Konkursvarsel API. Se [DSOP Konkursvarsel: API-dokumentasjon](/Konkursvarsel-API-dokumentasjon).
- Gyldig input-parameter for Konkursbehandling:
  - Tilgangstoken fra Maskinporten: Finansforetakene må validere token fra Maskinporten med følgende scope: `bits:kontoinformasjon`
  - <u>


<u><u>

| Input parametere              | Forventet verdi                                                                                                         | Forslag til validering                                                                                                                                                                                                                                 |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AccountInfoRequestID (M)      | Uuid referanse til saksnr.                                                                                              | Formatet kan valideres. I tillegg kan denne parameteren valideres iht definisjonen i [Overall description of the DSOP Control API](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#accountinforequestid).           |
| CorrelationID (M)             | Uuid verdi til en unik teknisk referanse for forespørselen.                                                             | Formatet kan valideres. I tillegg kan denne parameteren valideres iht definisjonen i [Overall description of the DSOP Control API](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_specification_of_eoppslag.html#correlationid).                  |
| Legal-Mandate (M)             | "kkl. §156 (3) og (4), jf. kkfor.§21". URL Encoded verdi “kkl.%20%C2%A7156%20(3)%20og%20(4)%2C%20jf.%20kkfor.%C2%A721”. | Strengen skal være I ‘encoded’ format og burde valideres iht til [Juridiske rammebetingelser Konkursbehandling](/dsop_v2konkurs_juridisk).                                                                           |
| PartyID (M)                   | Kontrollbjektet: Organisasjonsnummer, FNR eller D.NR.                                                                   | Formatet kan valideres.                                                                                                                                                                                                                                |
| OnlyPrimaryOwner (M)          | "TRUE"                                                                                                                  | Konkursbehandling skal kun tillate verdien "TRUE".                                                                                                                                                                                                     |
| AdditionalReferenceID (O)     | Ingen.                                                                                                                  | -                                                                                                                                                                                                                                                      |
| AdditionalReferenceIDType (O) | Ingen.                                                                                                                  | -                                                                                                                                                                                                                                                      |
| RequesterID (O)               | Ingen.                                                                                                                  | -                                                                                                                                                                                                                                                      |
| fromDate (M)                  | Inntil 12 måneder før konkursdato.                                                                                      | Formatet kan valideres. I tillegg bør verdien også valideres slik at datoen er opptil 12 måneder før "kjennelsesdato" tilgjengelig i [Konkursvarsel API](/Konkursvarsel-API-dokumentasjon)/. |
| toDate (M)                    | Dagens dato.                                                                                                            | Formatet kan valideres.                                                                                                                                                                                                                                |

*Se [HTTP error codes and specific error situations with associated message codes](/assets/HTTP error codes V.2.pdf)/.*


<u><u>


| Input parametere              | Forventet verdi                                                                                                         | Forslag til validering    |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------|---------------------------|
| AccountReference (M)          | Uuid referanse til kontonr.                                                                                             | -                         |
| AccountInfoRequestID (M)      | Uuid referanse til saksnr.                                                                                              | Samme som for *Accounts*. |
| CorrelationID (M)             | Uuid verdi til en unik teknisk referanse for forespørselen.                                                             | Samme som for *Accounts*. |
| Legal-Mandate (M)             | "kkl. §156 (3) og (4), jf. kkfor.§21". URL Encoded verdi “kkl.%20%C2%A7156%20(3)%20og%20(4)%2C%20jf.%20kkfor.%C2%A721”. | Samme som for *Accounts*. |
| AdditionalReferenceID (O)     | Ingen.                                                                                                                  | -                         |
| AdditionalReferenceIDType (O) | Ingen.                                                                                                                  | -                         |
| RequesterID (O)               | Ingen.                                                                                                                  | -                         |
| fromDate (M)                  | Inntil 12 måneder før konkursdato.                                                                                      | Samme som for *Accounts*. |
| toDate (M)                    | Dagens dato.                                                                                                            | Samme som for *Accounts*. |

*Se [HTTP error codes and specific error situations with associated message codes](/assets/HTTP error codes V.2.pdf)/.*





## Endringslogg

| Dato     | Versjon | Endring                                                                                        |
|----------|---------|------------------------------------------------------------------------------------------------|
| 18.03.25 | 2.0.2   | Spesifisert grunnlaget for utlevering av kontoinformasjon i henhold til DSOP fellesstandard    |
| 28.02.25 | 2.0.1   | Henvisning til "Principles for delivery of information via DSOP Control information common standard" lagt til under "Nødvendig friltrering av data ved utlevering per endepunkt". Kategoriene er endret for å følge prinsippene. <br > Alle tabellene over utlevering av felt er oppdatert med den nye kategoriseringen.   |
| 20.03.24 | 2.0     | Lagt til løsningsbeskrivelse |
