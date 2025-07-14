---
title: "Dsop V2politi Utlevering About"
id: "dsop_v2politi-utlevering_about"
slug: "dsop_v2politi-utlevering_about"
---

﻿---
title: Om tjenesten Politi-Utlevering
keywords: sample
sidebar: beta_sidebar
permalink: dsop_v2politi-utlevering_BETA_about.html
folder: section1
toc: false
---

<mark><strong>*Tjenesten er under utvikling, og endring i dokumentasjon på denne siden kan forekomme uten varsel. DSOP Forvaltning
vil kontakte alle relevante kontaktpersoner når dokumentasjonen er ferdigstilt.*</strong>
<br>

Politi-Utlevering er en hel-digital løsning for utlevering av kontoopplysninger mellom finansforetak i Norge og politiet 
i forbindelse med straffe- eller forsvinningssaker.

All standardinformasjon som flyter mellom et finansforetak og politiet knyttet til tjenesten skal gå fra maskin til maskin. 
Politiet skal få kontoopplysninger fra finansforetak inn i sin arbeidsflate «Finansoppslag» via tjenesten 
*Politi-Utlevering* som er en tjeneste basert på [DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_om.html).

Tjenesten *Politi-Utlevering* gir en rask og standardisert informasjonsflyt som sikrer høy datakvalitet og 
-sikkerhet i samhandlingen mellom politiet og finansforetak ved straffe- eller forsvinningssaker med 
[lovhjemmel straffeprosessloven §210 3. ledd](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_juridisk.html).


Figuren under viser hvordan Politiet får utlevert kontoopplysninger fra finansforetak via 
tjenesten Politi-Utlevering.

[![alt text](images/Politi-Utlevering-1.png)](images/Politi-Utlevering-1.png)



## Innhenting av kontoopplysninger

I politiets saksbehandlingssystem får etterforskere mulighet til å be om kontoopplysninger knyttet til en person eller virksomhet dersom det foreligger et godkjent utleveringspålegg signert av påtalemyndighet.


Først hentes det informasjon om hvilke finansforetak kontrollobjektet (person eller virksomhet) har eller hadde et kundeforhold til. For å få denne 
informasjonen benytter politiets saksbehandlingssystem løsningen *DSOP Oversikt over kundeforhold* (trinn 1) som kan gi informasjon om hvor kontrollobjektet hadde et kundeforhold i opptil 10 år tilbake i tid fra forespørselens dato.


[![alt text](images/Politi-Utlevering-2.png)](images/Politi-Utlevering-2.png)




I trinn 2 forespør politietterforsker kontoopplysninger hos finansforetakene basert på listen returnert i trinn 1. Først med kontolisten ved 2a og deretter mot detaljerte opplysninger ved 2b. Hver 
forespørsel vil inneholde et maskinlesbart utleveringspålegg signert av påtalemyndigheten slik at finansforetakene er i 
stand til å verifisere at kontoopplysninger som forespørres er i henhold til det påtalemyndigheten godkjente.

Tjenesten Politi-Utlevering vil ha tilgang til følgende kontoopplysninger i opptil 10 år tilbake i tid fra 
forespørselens dato:

<u>Trinn 2a:</u>
- Kontoliste. 

<u>Trinn 2b:</u>
- Kontodetaljer inkl. saldo per konto. 
- Transaksjoner per konto. 
- Oversikt over alle kort knyttet til konto. 
- Oversikt over alle rollene som har/hadde rettigheter per konto.


Se på [løsningsbeskrivelsen](https://dokumentasjon.dsop.no/dsop_v2politi-utlevering_løsningsbeskrivelse.html) for mer 
detaljer om tjenesten *Politi-Utlevering*. 


## Change Log

| Date     | Version | Change                                                                                         |
|----------|---------|------------------------------------------------------------------------------------------------|
| 03.07.25 | 2.0     | Utkast foreligger. |
