---
title: "Dsop Kontrollinformasjon Jurdisk"
id: "dsop_kontrollinformasjon_jurdisk"
slug: "dsop_kontrollinformasjon_jurdisk"
---

﻿---
title: Juridiske rammebetingelser Kontrollinformasjon
keywords: sample
sidebar: main_sidebar
permalink: dsop_kontrollinformasjon_juridisk.html
folder: section1
---

Denne siden oppsummerer hvilke juridiske rammebetingelser prosjektet opererer under.

*Merk: I skrivende stund er aktørene i dialog for å erstatte pilotavtalene med permanent driftsavtale for
perioden etter piloten. Når man har kommet frem til en slik driftsavtale (evt. et sett med avtaler) så vil
dette dokumentet bli oppdatert. *

## Hjemler for etatene

Hjemlene som er listet under er de som er vedtatt brukt i løsningen og som derfor er reflektert i
pilotavtalene mellom Bits og de respektive etatene.

Dersom etatene og bankene blir enige om endringer i hjemlene som skal benyttes, så vil dette
dokumentet (og avtalene som er aktivt i bruk) bli endret tilsvarende. 


### Hjemler for Skatteetaten (org.nr. 974 761 076)
Skatteetaten har hjemler til å innhente kontoopplysninger både i forbindelse med enkeltsaker (f.eks.
kontroll og innkreving), samt i målretting av kontroll hvor det innhentes informasjon om en gruppe
skattytere (gruppert f.eks. etter bransje, lokasjon) for å vurdere hvorvidt kontroller bør igangsettes.
Etter en juridisk gjennomgang og vurdering i en tidligere fase av prosjektet (høst 2016), er det besluttet
at det så langt som mulig vil være transparent (og dermed likt) for finansinstitusjonene om innhenting
skjer i forbindelse med en enkeltsak eller målretting av kontroll (masseforespørsler). Data fra tidligere
innhentinger kan ikke gjenbrukes, da de kun kan benyttes til det formålet de var innhentet for.


| Brukstilfelle                                                                 | Lovhjemmel (etaten benytter eksakt denne tekststrengen og den er URL-enkodet i forespørselen) | Tilgang til følgende API'er                                    | Krav om utfylling av additionalReferenceID og additionalReferenceIDType? |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------|--------------------------------------------------------------------------|
| Innhenting av transaksjoner og saldo / innhenting av ytterligere opplysninger | Skatteforvaltningsloven § 10-2                                                                | Kontoliste<br >Roller | Nei                                                                      |
| Innhenting av transaksjoner og saldo / innhenting av ytterligere opplysninger | Kompensasjonsordningen for næringslivet § 8 jf. forskriften §4-2(3)                           | Kontoliste<br >Roller | Nei                                                                      |

### Hjemler for Politi- og lensmannsetaten (org.nr. 915 429 785)

Politimyndigheten/Politiet har hjemler til å innhente kontoopplysninger både på bakgrunn av
enkeltsaker (mistanke om straffbare forhold) og rapport om mistenkelige transaksjoner (MTR).
Påtalemyndigheten er en integrert del av Politiet.

Funksjonaliteten vil i første omgang kun erstatte dagens manuelle prosesser for innhenting av
kontoopplysninger. Behovene skissert i dette dokumentet faller inn under dagens hjemler og
jurisdiksjoner.


| Brukstilfelle                                                                 | Lovhjemmel (etaten benytter eksakt denne tekststrengen og den er URL-enkodet i forespørselen) | Tilgang til følgende API'er                                    | Krav om utfylling av additionalReferenceID og additionalReferenceIDType?                                                                                              |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Innhenting av transaksjoner og saldo / innhenting av ytterligere opplysninger | Hvitvaskingsloven § 26                                                                        | Kontoliste<br >Roller | Nei	                                                                                                                                                                  |
| Innhenting av transaksjoner og saldo / innhenting av ytterligere opplysninger | Straffeprosessloven § 210 første ledd*                                                        | Kontoliste<br >Roller | [Ja, se beskrivelse](https:/dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid) |
| Innhenting av transaksjoner og saldo / innhenting av ytterligere opplysninger | Straffeprosessloven § 210 tredje ledd*                                                        | Kontoliste<br >Roller | [Ja, se beskrivelse](https:/dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid) | 

*Merk: Hvitvaskingsloven §26 gjelder kun for Enheten for Finansiell Etterretning (EFE).*


### Hjemler for NAV (org.nr. 889 640 782)

NAV har hjemmel til å innhente kontoopplysninger både i forbindelse med behandling av søknader om
enkeltstønader og som en del av etterkontrollene NAV regelmessig gjennomfører. Behovene skissert i
dette dokumentet faller innunder dagens hjemler.

| Brukstilfelle                                                                 | Lovhjemmel (etaten benytter eksakt denne tekststrengen og den er URL-enkodet i forespørselen) | Tilgang til følgende API'er                                    | Krav om utfylling av additionalReferenceID og additionalReferenceIDType? |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------|--------------------------------------------------------------------------|
| Innhenting av transaksjoner og saldo / innhenting av ytterligere opplysninger | Folketrygdloven § 21-4 første ledd                                                            | Kontoliste<br >Roller | Nei                                                                      |

### Hjemler for Bostyrer (org.nr 974 760 673)

Se [Juridiske rammebetingelser Konkursbehandling](/dsop_konkurs_juridisk).

## Andre relevante lover og bestemmelser	

Se [Juridiske rammebetingelser Fellesstandard](https:/dokumentasjon.dsop.no/dsop_kontroll_juridisk.html#andre-relevante-lover-og-bestemmelser).


## Endringslogg

| Dato     | Endring                                                                                                                                                                                                 | Link i dokumentasjon                                                                                                                                                          |
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 02.02.21 | Lagt inn kolonne "Tilgang til API'er" i hver tabell"                                                                                                                                                    | [Hjemler for etatene](https:/dokumentasjon.dsop.no/dsop_kontroll_juridisk.html#hjemler-for-etatene)                                                         |
| 03.12.20 | Korrigert at periode for spørring fra Bostyrer er fire måneder tilbake i tid fra dagens dato, ikke innværende måned + tre måneder tilbake i tid                                                         | [Hjemler for bostyrer](https:/dokumentasjon.dsop.no/dsop_kontroll_juridisk.html#hjemler-for-bostyrer-orgnr-974-760-673)                                     |
| 16.09.20 | Presisering av hjemmelbegrensning i forbindelse med tidsperiode for å innhente data.                                                                                                                    | [Hjemler for bostyrer](https:/dokumentasjon.dsop.no/dsop_kontroll_juridisk.html#hjemler-for-bostyrer-orgnr-974-760-673)                                     |
| 16.09.20 | Lagt inn kolonne "Krav om utfylling av additionalReferenceID og additionalReferenceIDType?" ved siden av oversikt over lovhjemler i forbindelse med innføring av ny funksjonalitet i ny versjon av API. | [Hjemler for etatene](https:/dokumentasjon.dsop.no/dsop_kontroll_juridisk.html#hjemler-for-etatene)                                                         |
| 06.05.20 | Lagt til hjemmel for etterkontroll ifm. Kompensasjonsordningen                                                                                                                                          | [Kompensasjonsordningen](https:/dokumentasjon.dsop.no/dsop_kontroll_juridisk.html#hjemler-for-skatteetaten-orgnr-974-761-076)                               |
| 18.12.19 | Lagt til hjemmel for bostyrer og org.nummer til BRREG. Gjelder for Konkursbehandling                                                                                                                    | [Hjemler for bostyrer](https:/dokumentasjon.dsop.no/dsop_kontroll_juridisk.html#hjemler-for-bostyrer-orgnr-974-760-673)                                     |
| 04.12.19 | Endret fra Politidirektoratet til Politi- og lensmannsetaten, samt endret organisasjonsnummeret                                                                                                         | [Hjemler for politi -og lensmannsetaten](https:/dokumentasjon.dsop.no/dsop_kontroll_juridisk.html#hjemler-for-politi--og-lensmannsetaten-orgnr-915-429-785) |
