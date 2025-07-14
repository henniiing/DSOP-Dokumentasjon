---
title: "Dsop V2kontroll Skatt About
id: dsop_v2kontroll_skatt_about"
slug: "dsop_v2kontroll_skatt_about"
keywords: ["sample"]
sidebar: "main_sidebar
permalink: dsop_v2kontroll_skatt_about.html"
folder: "section1"
toc: false
---

*Skatt-Kontroll* er en hel-digital løsning for utlevering av kontoopplysninger mellom finansforetak i Norge og Skatteetaten i forbindelse med kontroll ifm. skatteplikt.

All standardinformasjon som flyter mellom et finansforetak og Skatteetaten knyttet til tjenesten skal gå fra maskin til maskin. Skatteetaten skal få kontoopplysninger fra finansforetak inn i sitt saksbehandlingssystem via tjenesten Skatt-Kontroll, som er en tjeneste basert på [DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_om.html).

Tjenesten *Skatt-Kontroll* gir en rask og standardisert informasjonsflyt som sikrer høy datakvalitet og -sikkerhet i samhandlingen mellom Skatteetaten og finansforetak ved kontrollsaker ifm. skatteplikt med [lovhjemmel skatteforvaltningsloven &sect; 10-2 første ledd jf. &sect; 10-14, jf. skatteforvaltningsforskriften &sect; 10-2-1](https://dokumentasjon.dsop.no/dsop_v2kontroll_skatt_juridisk.html).

Figuren under viser hvordan Skatteetaten får utlevert kontoopplysninger fra finansforetak via tjenesten Skatt-Kontroll.

[![alt text](images/skatt_kontroll_01-1.png)](images/skatt_kontroll_01-1.png)

##Innhenting av kontoopplysninger
I Skatteetatens saksbehandlingssystem får saksbehandlere mulighet til å be om kontoopplysninger knyttet til person eller virksomhet dersom det foreligger en kontrollsak.

[![alt text](images/skatt_kontroll_01-2.png)](images/skatt_kontroll_01-2.png)

Først hentes det informasjon om hvilke finansforetak kontrollobjektet (person eller virksomhet) har eller hadde et kundeforhold til. For å få denne informasjonen benytter Skatteetatens saksbehandlingssystem løsningen DSOP Oversikt over kundeforhold (trinn 1)., som gir informasjon om hvor kontrollobjektet hadde et kundeforhold i opptil 10 år tilbake i tid fra forespørselens dato.

I trinn 2 forespør saksbehandler kontoopplysninger hos finansforetakene basert på listen returnert i trinn 1. Først med kontolisten ved 2a og deretter mot detaljerte opplysninger ved 2b.

Tjenesten Skatt-Kontroll vil ha tilgang til følgende kontoopplysninger i opptil 10 år tilbake i tid fra forespørselens dato:

<u>Trinn 2a:</u>Trinn 2b:</u &amp;amp; gt;
* Kontodetaljer inkl. saldo per konto.
* Transaksjoner per konto.
* Oversikt over alle kort knyttet til konto.
* Oversikt over alle rollene som har/hadde rettigheter per konto

Se på [løsningsbeskrivelsen](https://dokumentasjon.dsop.no/dsop_v2kontroll_skatt_l%C3%B8sningsbeskrivelse.html) for mer detaljer om
tjenesten *Skatt-Kontroll*.

## Endringslogg

| Dato | Versjon | Endring |
| ---------- | --------- | ---------------------------------------------- |
| 03.07.25 | 1.0 | Siden er publisert. |
