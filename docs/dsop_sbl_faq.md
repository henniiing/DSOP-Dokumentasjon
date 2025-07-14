---
title: "FAQ"
slug: "dsop_sbl_faq"
id: "dsop_sbl_faq"
keywords:
  - "sample"
---

*Send henvendelse til [DSOP Support](https://support.dsop.no/)dersom FAQ ikke besvarer ditt spørsmål.*

## Utgått org.nr.
Det er ikke mulig å benytte utgåtte organisasjonsnumre i tjenesten samtykkebasert lånesøknad.
Bedriftens org.nr. må være registrert i enhetsregisteret.

## Endringer i skatteoppgjør for 2019
Skatteoppgjør for inntektsår 2019 er tilgjengelig i test, herunder også testdata og oppdatert api-dokumentasjon på Skatteetatens GitHub.

Oppdatert  feltliste for skatteoppgjøret 2019 med rettighetspakke SBL kan lastes ned [HER](assets/Endringer 2018-2019 Skattegrunnlag-tjenesten-SBL.xlsx).
<br>Listen inkluderer en oversikt over hvilke felter som vil bli spesifisert. <Br><br>
**Forklaring til feltliste (Arkfane: Endringer 2018-2019):**
* Grønn tekst: felt har endret navn
* Rød tekst: nytt felt som tidligere inngikk i annet felt



## Identifikator ordinær VS pilot-løype
Årsaken til at Skatteetaten ikke lager en identifikator (versjonering) kommer av at det ikke vil være et varig behov, samt at det er mulig å skille mellom ny og gammel løype på følgende måte:

I ordinær løype vil "type" alltid blir satt til "Generisk"

I pilot-løype vil "type " bli satt til iht. relatert til tema

Klikk [her](https://skatteetaten.github.io/api-dokumentasjon/api/summertskattegrunnlag#%C3%A5rsversjoner) for en oversikt over forskjellige spesifikasjoner i pilot-løype.


## Integrasjonstest - T10
Denne er valgfri og er ment for virksomheter som representerer flere finansinstitusjoner med ulike organisasjonsnumre. Testen har sin hensikt med at virksomheten skal ha kontroll på sine virksomhetssertifikater for de ulike finansinstitusjonene.

## Testdata ny VS gammel løype
4 testbrukere har skatteoppgjør for  2019.

Sirius (pilotløype):

| Fødselsnummer | Navn | Skatteoppgjør 2018 |
|-------|----------|------------|
| 07078600378 | Magne Løvik | ok
| 18018200283 | Nille Psa Augestad | ok

SL (ordinær løype):

| Fødselsnummer | Navn | Skatteoppgjør 2019 |
|-------|----------|------------|
| 18017749532 |Karl Karlstad | ok

## Testbrukere til akseptansetest
I testmiljø tilbys det et sett syntetiske testdata det kan spørres på. Formålet med disse dataene er å teste og verifisere at integrasjonen mot tjenestene Summert skattegrunnlag, inntektsdata og tilgjengeligdata fungerer. Dataene vil inneholde verdier i de aller fleste felter i responsen.

Klikk [her](https://skatteetaten.github.io/api-dokumentasjon/test/testmiljo#historiske-testdata-for-inntekt-og-skatteoppgj%C3%B8r) for oversikt over testbrukere.

## Tekst til samtykke (DelegationContext)
DelegationContext er en beskrivelse fra bank på hva som er formålet med samtykket. Krav fra Skatteetaten er at beskrivelsen skal være følgende:

*Ved å samtykke, gir du Skatteetaten rett til å utlevere opplysninger om deg direkte til &lt;banknavn&gt;. Banken får opplysningene for å behandle søknaden din om finansiering.*

Se mer informasjon om DelegationContext [her](https://skatteetaten.github.io/api-dokumentasjon/om/samtykke#be-om-samtykke)

## Oversikt over feilkoder
Under følgende lenker kan du få oversikt og betydning av de ulike feilkodene som oppstår. Velg lenke ut i fra feilmelding som du har fått oppgitt.

[Tilgjengelighetsdata (TD 001-006)](https://skatteetaten.github.io/api-dokumentasjon/api/sistetilgjengeligeskatteoppgjoer?tab=Feilkoder)

[Felles feilkoder (DAS 001-008)](https://skatteetaten.github.io/api-dokumentasjon/om/feil#felles-feilkoder)

[Skattegrunnlag (SSG 007-101)](https://skatteetaten.github.io/api-dokumentasjon/api/summertskattegrunnlag?tab=Feilkoder)

[Inntektsmottaker (IM 000-101)](https://skatteetaten.github.io/api-dokumentasjon/api/inntekt?tab=Feilkoder)

[HTTP-status er ikke 200](https://skatteetaten.github.io/api-dokumentasjon/om/feil)

## Overgang fra sommertid til vintertid
For unngå problematikk med gyldighetsdato og klokkeslett på samtykke (Validtodate) bør bankene å legge inn en feilmargin i redirectURL på klokkeslettet på "validtodate". Det vil si at bankene ber om et samtykke som har mer enn en times margin ift. den juridiske begrensningen på 10 dager - altså 9 dager, 22 timer og 59 minutter .

Norsk tid/CET er definert slik at det mangler en time natt til 28 oktober. Problemet er at når banken skyver klokken over fra  sommertid til vintertid overgang, så hopper den over denne manglende timen og havner for langt frem.

Samtykketokenet (og Skatteetaten) bruker zulutid/UTC (ref [https://tools.ietf.org/html/rfc7519](https://tools.ietf.org/html/rfc7519)) . I denne tidssonen eksisterer ikke sommertid.

## Sertifikat problemer
**Organisasjonsnummer i virsomhetssertifikat** <br>
Virskomhetssertifikater inneholder virksomheten sitt organisasjonsnummer. Virksomhetens organisasjonsnummer er også nøkkelen som Skatteetaten forholder seg til. Det er derfor nødvendig at virksomhetssertifikatet fra samme organisasjon benyttes som den som har det avtalemessige forholdet med Skatteetaten.

**Prod sertifikat til test eller motsatt?** <br>
I akseptanstest (AT) må man bruke et test virsomhetssertifikat. I Prod må man bruke et prod virksomhetssertifikat.

## Validering av XSD-fil
Ved validering av XSD-fil er det et tips at dere alltid bruker online-versjon, kontra å laste ned en lokal versjon. Rundt Skatteoppgjør-tidene bør dere overvåke eventuelle endringer som kan forekomme på XSD-filen online.

[Her](https://skatteetaten.github.io/datasamarbeid-api-dokumentasjon/download/SpesifisertSummertSkattegrunnlag.xsd) er lenke til online versjon som dere bør parse mot.

I tillegg bør dere ikke hardkode XSD-filen.

