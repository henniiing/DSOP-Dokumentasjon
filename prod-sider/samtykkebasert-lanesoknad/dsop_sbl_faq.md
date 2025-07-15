---
title: "FAQ"
slug: "dsop_sbl_faq"
id: "dsop_sbl_faq"
keywords: ["sample"]
---

*Send henvendelse til [DSOP Support](https:/support.dsop.no/)dersom FAQ ikke besvarer ditt spørsmål.*

## Utgått org.nr.
Det er ikke mulig å benytte utgåtte organisasjonsnumre i tjenesten samtykkebasert lånesøknad.
Bedriftens org.nr. må være registrert i enhetsregisteret.

## Endringer i skatteoppgjør for 2019
Skatteoppgjør for inntektsår 2019 er tilgjengelig i test, herunder også testdata og oppdatert api-dokumentasjon på Skatteetatens GitHub.

Oppdatert  feltliste for skatteoppgjøret 2019 med rettighetspakke SBL kan lastes ned [HER](/assets/Endringer 2018-2019 Skattegrunnlag-tjenesten-SBL.xlsx).

**Organisasjonsnummer i virsomhetssertifikat** <br  />
I akseptanstest (AT) må man bruke et test virsomhetssertifikat. I Prod må man bruke et prod virksomhetssertifikat.

## Validering av XSD-fil
Ved validering av XSD-fil er det et tips at dere alltid bruker online-versjon, kontra å laste ned en lokal versjon. Rundt Skatteoppgjør-tidene bør dere overvåke eventuelle endringer som kan forekomme på XSD-filen online.

[Her](https:/skatteetaten.github.io/datasamarbeid-api-dokumentasjon/download/SpesifisertSummertSkattegrunnlag.xsd) er lenke til online versjon som dere bør parse mot.

I tillegg bør dere ikke hardkode XSD-filen.

