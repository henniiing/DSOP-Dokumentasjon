---
title: "Dsop V2oed About"
id: "dsop_v2oed_about"
slug: "dsop_v2oed_about"
---

﻿---
title: Om tjenesten Oppgjør etter dødsfall
keywords: sample
sidebar: main_sidebar
permalink: dsop_v2oed_about.html
folder: section1
toc: false
---


*Oppgjør etter dødsfall* er en digital tjeneste for utlevering av kontoopplysninger mellom finansforetak i Norge og 
Digitaliseringsdirektoratet knyttet til dødsfall og i forbindelse med arvingenes innhenting av avdødes kontoopplysninger.

Digitaliseringsdirektoratet har utviklet en digital dødsboløsning for arvinger. Et digitalt dødsbo etter den avdøde 
opprettes ved at tingretten oversender informasjon om den avdøde og informasjon om arveberettigede med formuesfullmakt 
eller skifteattest. På bakgrunn av informasjonen fra tingretten hentes følgende informasjon inn i det digitale dødsboet:
* **Formue og gjeld fra banker samt transaksjonsoversikt over alle kontoer 3 måneder bakover i tid regnet fra dødsdato frem til dagens dato** (tjenesten Oppgjør etter dødsfall)
* *Pensjons- og livsforsikringer som kan komme til utbetaling til dødsboet fra forsikringsselskaper*
* *Oversikt over avdødes eventuelle eiendommer fra Kartverket*
* *Informasjon om en eiendom er en landbrukseiendom fra Landbruksdirektoratet*
* *Oversikt over eventuelle kjøretøy fra Statens vegvesen*
* *Hvorvidt avdøde hadde en ektepakt hentes fra Brønnøysundregistrene*
* *Skatteinformasjon om avdøde gjøres tilgjengelig via en lenke til avdødes skatteinformasjon på Skatteetatens sider.*

Det er kun arvinger oppnevnt av tingretten med formuesfullmakt eller skifteattest, samt personer med skiftefullmakt fra 
slike arvinger, som kan logge seg inn i Digitalt Dødsbo. Digitaliseringsdirektoratet bistår arvingen ved å stille 
digitalt dødsbo til rådighet for innhenting av informasjon fra en rekke aktører, bl.a. kontoopplysninger for avdøde.  

For å kunne logge inn på Digitalt Dødsbo må autentisert bruker ha en "rolle" på vegne av avdøde, ved en formuesfullmakt, 
skifteattest eller fullmakt fra arving.

Det betyr at bankene <u>ikke behøver</u> å slå opp i Altinn autorisasjon for å verifisere at bruker har rolle på vegne av avdøde 
fordi Digitalt Dødsbo ikke kan brukes uten at formuesfullmakt, skifteattest eller fullmakt fra arving foreligger.

Den samme rolleoversikten benyttes for å svare på eksterne oppslag av banker via tjenesten *Oppgjør etter dødsfall*.

[![alt text](images/oed_01-1.png)](images/oed_01-1.png)

Beskrivelse av stegene:

(1) Domstoladministrasjonen legger kontinuerlig ut oppdatert status for dødsbo (nye, endringer, nye arvinger, nye formuesfullmakter osv). Disse leses inn og håndteres av Digitalt dødsbo som oppretter nye dødsbo, legger til/fjerner arvinger og oppdaterer status.

(2) Endringer i arvinger i steg 1 legges inn i et representasjonsregister over hvem som har  formuesfullmakt, skifteattest og skiftefullmakt for hvilke dødsbo.

(3) Arvinger (enten med formuesfullmakt eller skifteattest) logger inn og benytter applikasjonen.

(4) Representasjonsregisteret eksponerer et API for Altinn autorisasjon som brukes når arvinger/fullmektige logger inn i Digitalt dødsbo for å verifisere at de har tilgang til det aktuelle dødsboet.

(5) Data om avdøde hentes inn fra en rekke eksterne kilder og vises for autorisert arving.

(6)	Digitalt dødsbo oppdaterer representasjonsregister når en arving med skifteattest utpeker skiftefullmektige som kan representere hen i boet.

(7)	Personer med skiftefullmakt kan logge inn i Digitalt dødsbo og representere arving

<br>

All standardinformasjon som flyter mellom et finansforetak og Digitaliseringsdirektoratet knyttet til tjenesten skal gå fra maskin 
til maskin. Digitaliseringsdirektoratet skal få kontoopplysninger fra finansforetak inn i sin arbeidsflate 
«Digitalt Dødsbo» via tjenesten *Oppgjør etter dødsfall* som er en tjeneste basert på [DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_om.html).

Tjenesten *Oppgjør etter dødsfall* skal sikre høy datakvalitet og -sikkerhet i samhandlingen mellom 
Digitaliseringsdirektoratet og finansforetak ved utlevering av avdødes kontoopplysninger til arvingene som benytter 
«Digitalt Dødsbo» med lovhjemmel "Arveloven § 92 første ledd og § 118, jf. § 88 a, jf. forskrift om Digitalt dødsbo" (se mer informasjon om [juridiske rammebetingelser for tjenesten Oppgjør etter dødsfall](https://dokumentasjon.dsop.no/dsop_v2oed_juridisk.html)).

Figuren under viser en enkel prosess for hvordan Digitaliseringsdirektoratet skal få utlevert kontoopplysninger fra 
finansforetakene via tjenesten *Oppgjør etter dødsfall*.  

[![alt text](images/oed_01-2_v2.png)](images/oed_01-2_v2.png)


## Innhenting av kontoopplysninger

På Digitaliseringsdirektoratets side vil kontoopplysninger innhentes digitalt via «Digitalt Dødsbo» når arvingene 
initierer innhenting av opplysninger knyttet til avdøde.

[![alt text](images/oed_01-3_v2.png)](images/oed_01-3_v2.png)

Den digitale innhentingen av kontoopplysninger består av to trinn.

I trinn 1 hentes det informasjon om hvilke finansforetak avdøde hadde et kundeforhold til opptil tre måneder tilbake i tid, 
regnet fra dødsdato, via løsningen *DSOP Oversikt over kundeforhold*.

I trinn 2 forespør Digitaliseringsdirektoratet på vegne av arvinger logget inn i «Digitalt Dødsbo» kontoopplysninger 
hos finansforetakene basert på listen returnert i trinn 1. Først med kontolisten ved 2a og deretter mot detaljerte opplysninger ved 2b.

Tjenesten *Oppgjør etter dødsfall* vil ha tilgang til følgende kontoopplysninger inntil tre måneder før dødsdato:

<u>Trinn 2a:</u>
* Liste over konti som avdøde eide. 

<u>Trinn 2b:</u>
* Kontodetaljer inkl. saldo per konto. 
* Transaksjoner per konto.



Se på [løsningsbeskrivelsen](https://dokumentasjon.dsop.no/dsop_v2oed_løsningsbeskrivelse.html) for mer detaljer om 
tjenesten *Oppgjør etter dødsfall*.   


## Endringslogg

| Dato     | Versjon | Endring                                      |
|----------|---------|----------------------------------------------|
| 03.07.25 | 2.0.1   | Nye illustrasjoner som harmoniserer med øvrige kontrolltjenester. Små tekstforbedringer. |
| 02.09.24 | 2.0     | Lagt til versjon 2 av Oppgjør etter dødsfall |
