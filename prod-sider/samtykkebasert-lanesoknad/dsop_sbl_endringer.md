---
title: "Endringer for tjenesten"
slug: "/dsop_sbl_endringer"
id: dsop_sbl_endringer
---

## Årsrevisjon (Skatteoppgjør) 2024/2025

Nedenfor er en oversikt over endringene som er innført av Skatteetaten for skatteoppgjøret 2024. Denne oversikten vil bli oppdatert fortløpende basert på ny informasjon fra Skatteetaten.<br  />
[Oppdatert oversikt](/assets/Årsrevisjon 2024 - endelig kodeliste.xlsx) <br  />
[Inntekt-API](https:/skatteetaten.github.io/api-dokumentasjon/api/inntekt?tab=%C3%85rsrevisjon) 
### Inntekt-API:

**Ny inntektsbeskrivelse tilgjengelig:**

| pensjonEllerTrygd | SBL | OTP |
| ------- | ---------- | ------------ |
| barnepensjonFra2025 | x |

**Inntektsbeskrivelse som utgår:**

| loennsinntekt | SBL | OTP |
| ------- | ---------- | ------------ |
| bonusFraForsvaret| x |

**Ny forskuddstrekkbeskrivelse:**

| Forskuddstrekkbeskrivelse | SBL | OTP |
| ------- | ---------- | ------------ |
| Frivillig | x |

### Summert Skattegrunnlag-API:

**Nye summerte skattegrunnlag fra 2024:**

| Teknisk navn | Kategori |
|-------|----------|
| gjeldFraInkassoselskap | formuesfradrag |
| minstefradragILivrenteTilBarn | inntektsfradrag |
| omstillingsstoenad | inntekt |
| skattepliktigInntektVedSalgAvOverskuddsstroem | inntekt |
| saerskiltFradragIBarnepensjon | inntektsfradrag |

**Summerte skattegrunnlag som utgår fra 2024:**

| Teknisk navn |
|-------|
| saerfradragForEnsligForsoerger |
| samletSkattefriDelAvFormue |
| arbeidsinntektFraKompensasjonsytelseUtbetaltAvNav |
| naeringsinntektFraKompensasjonsytelseUtbetaltAvNavInnenAnnenNaering |
| naeringsinntektFraKompensasjonsytelseUtbetaltAvNavInnenBarnepassIBarnepasserensHjem |
| personinntektFraKompensasjonsytelseUtbetaltAvNavInnenAnnenNaering |
| personinntektFraKompensasjonsytelseUtbetaltAvNavInnenBarnepassIBarnepasserensHjem |

## Endringer API Gateway (Skatteetaten)

Skatteetaten etablerer en løsning for API gateway for SBL API-ene. Frist for migrening er fastsatt til innen oktober 2024. <br  />
Se også presentasjon som beskriver de kommende endringene: [Informasjon om API Gateway - Skatteetaten](/assets/DSOP-API Gateway migrering for SBL (Skatteetaten).pdf)

## Årsrevisjon (Skatteoppgjør) 2023/2024

Oversikt over endringer fra Skatteetaten vedrørende årsrevisjon (skatteoppgjøret) for 2023/2024:<br  />
Det har kommet ytterligere nye inntektsbeskrivelser i Inntekt API fra 2024. [Se oversikt på skatteetaten](https:/skatteetaten.github.io/api-dokumentasjon/api/inntekt?tab=%C3%85rsrevisjon) <br  />
[Excel-oversikt](/assets/Oversikt over endringer - Skatteoppgjor 2022.xlsx) <br  />
[Open API Specification - 17.02.2023](/assets/SpesifisertSummertSkattegrunnlagOAStypes -2.json)

### Open API - Swaggerhub
Skatteetaten flyttet sine API-spesifikasjoner til Open API i sommer 2022. Det betyr at tjenesten ikke lenger baserer seg på XSD men vil basere seg på Open API spec JSON skjema, se linker under for API'ene: <br  />
[Swaggerhub for Spesifisert summert skattegrunnlag](https:/app.swaggerhub.com/apis/Skatteetaten_Deling/spesifisert-summert-skattegrunnlag-api/1.0.0#/SpesifisertSummertSkattegrunnlag)

## Informasjon om nytt testmiljø og nye testdata

Gammelt testmiljø ble sanert den 19.september 2022 og er ikke lenger i bruk. Det nye testmiljøet benytter testpersoner fra syntetisk Folkeregister og testenheter fra syntetisk Enhetsregister. Skatteetaten vil gå bort i fra å dokumentere testdata på github, og virksomheter må benytte Tenor testdatasøk for å finne relevante testdata. Fristen for implementering av Tenor testdatasøk er utgangen av Q1 2023.

Test-Norge er en syntetisk virkelighet i testmiljøene. Testpersoner er lest inn fra syntetisk folkeregister, og blir beriket med testdata fra ulike kilder. Testdataene gjøres søkbare gjennom Tenor testdatasøk: en løsning som gir tilgang til syntetisk testdata fra Test-Norge fra ulike kilder. Eksempel på data som beriker de syntetiske testpersonene: skattedata fra Skatteetaten; arbeidsforhold og ytelser fra NAV; kjøretøyregister fra Statens vegvesen; lånesaldo fra Lånekassen.

Tenor testdatasøk er et verktøy for alle som driver systemutvikling og trenger testdata. Løsningen gir tilgang til syntetisk testdata fra det syntetiske Folke- og Enhetsregisteret - med testdata fra flere ulike kilder.

### Tenor Testdatasøk

Hvordan [logge på Tenor?](https:/www.skatteetaten.no/skjema/testdata/) 
<br  />
•	Gammel tjenestekode (inntekt): 4804_170223 <br  />
[Excel-oversikt](/assets/Oversikt_endringer_Skatteoppgjor_2021_.xlsx)
<br  />
[XSD fil 17.02.22](/assets/SpesifisertSummertSkattegrunnlag_V.1.1_17_02_22.xsd)

### Testdata
Skatteetaten har ifm. skatteoppgjøret for 2021, beriket og prodsatt 3 testpersoner fra det gamle testdatasettet pga. utfordringene med nytt testmiljø og bruk av syntetiske testdata fra Tenor. <br  />
Oversikt tilgjenglige [testdata](https:/skatteetaten.github.io/api-dokumentasjon/test/testmiljo#historiske-testdata-for-inntekt-og-skatteoppgj%C3%B8r)

## Endringslogg

| Dato | Endring | Link i dokumentasjon | |  | 20.12.2024 | Lagt til endringer for Skatteoppgjøret 2024 | |  | 03.04.2023 | Nye linker til Skatteetatens Github | |  | 27.02.2023 | [Endringer for tjenesten](https:/dokumentasjon.dsop.no/samtykkebasert-lanesoknad/dsop_sbl_endringer#skatteoppgj%C3%B8r-2022) |
|17.02.2023|[Endringer for tjenesten](https:/dokumentasjon.dsop.no/samtykkebasert-lanesoknad/dsop_sbl_endringer#skatteoppgj%C3%B8r-2022) |
|03.02.2023|[Onboarding](https:/dokumentasjon.dsop.no/samtykkebasert-lanesoknad/dsop_sbl_onboarding#registrering) |
|17.01.2023|[Endringer for tjenesten](https:/dokumentasjon.dsop.no/samtykkebasert-lanesoknad/dsop_sbl_endringer#skatteoppgj%C3%B8r-2022) |
| 06.04.2022 | Lagt til informasjon om test-BankID og Tenor testdatasøk |  | | 18.03.2022 | Lagt til siste versjon av XSD fil fra endringer i kodelisten |  | | 17.03.2022 | Lagt til link til testdata for skatteoppgjør 2021 |  | | 10.03.2022 | Oppdatert migrerings datoer for maskinporten, samtykkeløsningen og testmiljø |  | | 17.02.2022 | Oppdatert Excel oversikt - kvalitetssikret versjon av kodelisten for SSS. |  | | 14.02.2022 | Oppdatert Excel oversikt iht testdata for 2021 |  | | 08.02.2022 | Oppdatert informasjon om tenor, samt lagt til brukerveiledning i tenor |  | | 31.01.2022 | Oppdatert med overgang til nytt testmiljø og testdata |  |

