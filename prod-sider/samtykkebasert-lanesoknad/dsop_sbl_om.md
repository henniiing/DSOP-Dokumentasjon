---
title: "Om tjenesten"
slug: "dsop_sbl_om"
id: "dsop_sbl_om"
keywords: ["sample"]
---

Samtykkebasert lånesøknad (SBL) er mekanismen som muliggjør digital innhenting av skattegrunnlag og inntektsdata hos Skatteetaten med samtykkeløsning fra Altinn.

SBL skal sikre en god kundeopplevelse for lånesøkeren ved at låneprosessen blir enklere og tryggere. I tillegg bidrar løsningen til økt personvern, ved at lånesøker kun deler den informasjonen som er nødvendig for å behandle lånesøknaden.

/(images/SBL - PROSESS 2.png)

## Presentasjon om SBL og detaljert gjennomgang av prosessene til tjenesten

* [Presentasjon SBL](/assets/SBL-Introduksjon-til-SBL.pdf)

* [Introduksjon til prosessene](/assets/SBL-presentasjon.pdf)

## Kriterier for bruk av SBL

For å kunne hente både skattegrunnlag og lønnsopplysninger digitalt med samtykke hos Skatteetaten for bruk til kredittscoring må finansinstitusjoner tilfredsstille følgende kriterier:

Bruk av samtykkeløsningen til å innhente informasjon fra Skatteetaten begrenses til egne kredittsøknader og til å behandle søknader om følgende typer kreditt/lån:
* Lån med pant i eiendom
* Lån med pant i andre formuesgoder enn fast eiendom
* Usikrede lån (kredittkort og forbrukslån)

SBL kan benyttes for [innhenting av økonomisk bakgrunnsinformasjon for kausjonister for privat- og bedriftslån](https:/dokumentasjon.dsop.no/samtykkebasert-lanesoknad/dsop_sbl_om#innhenting-av-%C3%B8konomisk-bakgrunnsinformasjon-for-kausjonister-for-privat--og-bedriftsl%C3%A5n) (gjelder fra 07.12.2020)

Det er besluttet at kun finansforetak som har konsesjon etter finansforetaksloven &sect;§ 2-7, 2-8,2-9 og 2-13 - 2-17 som kan ta i bruk SBL.

Finansnæringen forplikter seg til å delta i de ulike DSOP initiativene basert på behandling i hovedstyret i Finans Norge. Knyttet til SBL presiseres forpliktelsen til å implementere følgende tjenester:

* Kontrollinformasjon
* [Konkursbehandling](/dsop_v2konkurs_about)

Tjenestene må være klar for produksjon senest 6 måneder etter finansforetaket får tilgang til produksjonsmiljø for SBL.

## Kvalitet på opplysningene

Opplysningene som distribueres av Skatteetaten er primært samlet for å løse Skatteetatens lovpålagte oppgaver - ikke for distribusjon til eksterne parter. Dermed kan opplysningene som er tilgjengeliggjort gjennom SBL være gjenstand for feil fra Skatteetaten. Opplysningenes korrekthet kan  derfor ikke garanteres av Skatteetaten.

Det er hvert enkelt finansforetak sitt ansvar å vurdere om det er behov for ytterligere verifisering av opplysningene til deres bruk, på det tidspunktet opplysningene benyttes.

### Innhenting av økonomisk bakgrunnsinformasjon for kausjonister for privat- og bedriftslån

Skatteetaten har vurdert bankenes ønske om en permanent utvidelse av SBL til også å omfatte innhenting av økonomisk bakgrunnsinformasjon for kausjonister for privat- og bedriftslån. Endringsønsket er godtatt, og SBL kan benyttes for kausjonister fra og med 7. desember 2020.

For at samtykketekst skal passe til alle typer lån som er [beskrevet over](https:/dokumentasjon.dsop.no/samtykkebasert-lanesoknad/dsop_sbl_om#innhenting-av-%C3%B8konomisk-bakgrunnsinformasjon-for-kausjonister-for-privat--og-bedriftsl%C3%A5n), må delegationContext/requestMessage (samtykketeksten) endres til følgende for bruk av SBL:

*Ved å samtykke, gir du Skatteetaten rett til å utlevere opplysninger om deg direkte til (banknavn). Banken får opplysningene for å behandle søknad om finansiering.*

Samtykketekst må endres før SBL kan benyttes for innhenting av data fra kausjonister.

## Endringslogg

| Dato       | Endring i dokumentasjon                                                                                                                                                                                                                    |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 07.12.2020 | [Lagt til informasjon om innhenting av økonomisk bakgrunnsinformasjon fra kausjonister](https:/dokumentasjon.dsop.no/samtykkebasert-lanesoknad/dsop_sbl_om#innhenting-av-%C3%B8konomisk-bakgrunnsinformasjon-for-kausjonister-for-privat--og-bedriftsl%C3%A5n) |
| 09.10.2020 | [Presisert hvilke konsesjoner finansforetak må ha for å få tilgang til SBL](https:/dokumentasjon.dsop.no/samtykkebasert-lanesoknad/dsop_sbl_om#kriterier-for-bruk-av-sbl)                                                                                      |
| 13.10.2020 | [Lagt til nytt punkt: Kvalitet på opplysningene](https:/dokumentasjon.dsop.no/samtykkebasert-lanesoknad/dsop_sbl_om#kvalitet-p%C3%A5-opplysningene)                                                                                                            |
| 13.12.2022 | [Kriterier for bruk av SBL](https:/dokumentasjon.dsop.no/samtykkebasert-lanesoknad/dsop_sbl_om#kriterier-for-bruk-av-sbl)                                                                                                                                      |
