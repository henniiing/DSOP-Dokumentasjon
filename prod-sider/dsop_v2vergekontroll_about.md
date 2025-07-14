---
title: "Dsop V2vergekontroll About
id: dsop_v2vergekontroll_about"
slug: "dsop_v2vergekontroll_about"
keywords: ["sample"]
sidebar: "main_sidebar
permalink: dsop_v2vergekontroll_about.html"
folder: "section1"
toc: false
---

Vergekontroll er en hel-digital løsning for utlevering av kontoopplysninger mellom finansforetak i Norge og
vergemålsmyndighetene i forbindelse med den årlige kontrollen av vergenes økonomiforvaltning.

All standardinformasjon som flyter mellom et finansforetak og vergemålsmyndighetene ved Statens sivilrettsforvaltning (SRF)
knyttet til tjenesten skal gå fra maskin til maskin. SRF skal få kontoopplysninger fra finansforetak inn i sin
arbeidsflate «VRK-app» via tjenesten *Vergekontroll* som er en tjeneste basert på [DSOP Kontrollinformasjon fellesstandard](https://dokumentasjon.dsop.no/dsop_v2fellesstandard_om.html).

Tjenesten *Vergekontroll* gir en rask og standardisert informasjonsflyt som sikrer høy datakvalitet og -sikkerhet i samhandlingen mellom vergemålsmyndighetene og
finansforetak ved den årlige kontrollen av vergenes økonomiforvaltning med lovhjemmel vergemålsloven &sect; 54 andre ledd,
jf. vergemålsforskriften &sect; 20 og 20a (se mer informasjon om [juridiske rammebetingelser for tjenesten *Vergekontroll*](https://dokumentasjon.dsop.no/dsop_v2vergekontroll_juridisk.html)).

Figuren under viser hvordan SRF får utlevert kontoopplysninger fra finansforetak via tjenesten *Vergekontroll*.

[![alt text](images/vergekontroll_01-1.png)](images/vergekontroll_01-1.png)

## Innhenting av kontoopplysninger

På vergemålsmyndighetens side vil kontoopplysninger innhentes digitalt via SRFs saksbehandlingssystem VRK-app når SRF
initierer den årlige kontrollen av vergenes økonomiforvaltning. Saksbehandlingssystemet genererer en liste over
samtlige vergemål der vergen har disposisjonsrett over en eller flere kontoer og, basert på denne listen, innhenter det
maskinelt samtlige kontoopplysninger knyttet til vergeregnskapet.

Den digitale innhentingen av kontoopplysninger består av to trinn.

[![alt text](images/vergekontroll_01-2_v2.png)](images/vergekontroll_01-2_v2.png)

I trinn 1 hentes det informasjon om hvilke finansforetak vergehavere har eller hadde et kundeforhold til siste
kalenderår via løsningen *DSOP Oversikt over kundeforhold*.

I trinn 2 forespør SRFs saksbehandlingssystemet kontoopplysninger hos finansforetakene basert på listen returnert i
trinn 1. Først med kontolisten ved 2a og deretter mot detaljerte opplysninger ved 2b.

Tjenesten *Vergekontroll* vil ha tilgang til følgende kontoopplysninger i siste kalenderår:

<u>Trinn 2a:</u>og samtidig disponeres av verge</u>Trinn 2b:</u &amp;amp; gt;
* Kontodetaljer inkl. saldo per konto.
* Transaksjoner per konto.
* Oversikt over alle rollene som har/hadde rettigheter per konto.

Se på [løsningsbeskrivelsen](https://dokumentasjon.dsop.no/dsop_v2vergekontroll_løsningsbeskrivelse.html) for mer
detaljer om tjenesten *Vergekontroll*.

## Endringslogg

| Dato | Versjon | Endring |
| ---------- | --------- | ------------------------------------- |
| 03.07.25 | 2.0.1 | Nye illustrasjoner som harmoniserer med øvrige kontrolltjenester. Små tekstforbedringer. |
| 07.08.24 | 2.0 | Lagt til versjon 2 av vergekontroll. |
