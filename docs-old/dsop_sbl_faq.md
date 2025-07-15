---
title: "FAQ"
slug: "dsop_sbl_faq"
id: "dsop_sbl_faq"
keywords:
  - "sample"
---

*Send henvendelse til [DSOP Support](https:/support.dsop.no/)dersom FAQ ikke besvarer ditt spørsmål.*

## Utgått org.nr.
Det er ikke mulig å benytte utgåtte organisasjonsnumre i tjenesten samtykkebasert lånesøknad.
Bedriftens org.nr. må være registrert i enhetsregisteret.

## Endringer i skatteoppgjør for 2019
Skatteoppgjør for inntektsår 2019 er tilgjengelig i test, herunder også testdata og oppdatert api-dokumentasjon på Skatteetatens GitHub.

Oppdatert  feltliste for skatteoppgjøret 2019 med rettighetspakke SBL kan lastes ned [HER](/assets/Endringer 2018-2019 Skattegrunnlag-tjenesten-SBL.xlsx).
<br >. Banken får opplysningene for å behandle søknaden din om finansiering.*

Se mer informasjon om DelegationContext [her](https:/skatteetaten.github.io/api-dokumentasjon/om/samtykke#be-om-samtykke)

## Oversikt over feilkoder
Under følgende lenker kan du få oversikt og betydning av de ulike feilkodene som oppstår. Velg lenke ut i fra feilmelding som du har fått oppgitt.

[Tilgjengelighetsdata (TD 001-006)](https:/skatteetaten.github.io/api-dokumentasjon/api/sistetilgjengeligeskatteoppgjoer?tab=Feilkoder)

[Felles feilkoder (DAS 001-008)](https:/skatteetaten.github.io/api-dokumentasjon/om/feil#felles-feilkoder)

[Skattegrunnlag (SSG 007-101)](https:/skatteetaten.github.io/api-dokumentasjon/api/summertskattegrunnlag?tab=Feilkoder)

[Inntektsmottaker (IM 000-101)](https:/skatteetaten.github.io/api-dokumentasjon/api/inntekt?tab=Feilkoder)

[HTTP-status er ikke 200](https:/skatteetaten.github.io/api-dokumentasjon/om/feil)

## Overgang fra sommertid til vintertid
For unngå problematikk med gyldighetsdato og klokkeslett på samtykke (Validtodate) bør bankene å legge inn en feilmargin i redirectURL på klokkeslettet på "validtodate". Det vil si at bankene ber om et samtykke som har mer enn en times margin ift. den juridiske begrensningen på 10 dager - altså 9 dager, 22 timer og 59 minutter .

Norsk tid/CET er definert slik at det mangler en time natt til 28 oktober. Problemet er at når banken skyver klokken over fra  sommertid til vintertid overgang, så hopper den over denne manglende timen og havner for langt frem.

Samtykketokenet (og Skatteetaten) bruker zulutid/UTC (ref [https:/tools.ietf.org/html/rfc7519](https:/tools.ietf.org/html/rfc7519)) . I denne tidssonen eksisterer ikke sommertid.

## Sertifikat problemer
**Organisasjonsnummer i virsomhetssertifikat** <br >
I akseptanstest (AT) må man bruke et test virsomhetssertifikat. I Prod må man bruke et prod virksomhetssertifikat.

## Validering av XSD-fil
Ved validering av XSD-fil er det et tips at dere alltid bruker online-versjon, kontra å laste ned en lokal versjon. Rundt Skatteoppgjør-tidene bør dere overvåke eventuelle endringer som kan forekomme på XSD-filen online.

[Her](https:/skatteetaten.github.io/datasamarbeid-api-dokumentasjon/download/SpesifisertSummertSkattegrunnlag.xsd) er lenke til online versjon som dere bør parse mot.

I tillegg bør dere ikke hardkode XSD-filen.

