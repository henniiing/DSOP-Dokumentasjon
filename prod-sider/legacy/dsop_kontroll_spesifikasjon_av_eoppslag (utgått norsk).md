---
title: "Dsop Kontroll Spesifikasjon Av Eoppslag (UtgåTt Norsk)
id: dsop_kontroll_spesifikasjon_av_eoppslag (utgått norsk)"
slug: "dsop_kontroll_spesifikasjon_av_eoppslag (utgått norsk)"
keywords: ["sample"]
sidebar: "main_sidebar
permalink: dsop_kontroll_spesifikasjon_av_eoppslag.html"
folder: "section1"
---

Denne siden beskriver tjenestene som finansinstitusjonene har implementert for å tilby de
offentlige etatene oppslag på kontoopplysninger. Tjenestene realiseres med utgangspunkt i RESTarkitekturstil og HTTP som transportmekanisme. For mer detaljert beskrivelse av
eOppslagstjenestene, se «DSOP Kontrollinformasjon Arkitekturdokument». Beskrivelse av
tjenestemodeller er å finne i egne dokumenter.

Tjenestene er definert slik at de sammen eller hver for seg kan støtte ulike bruksscenario slik som:
* Oppslag på kontoopplysninger med saldo per dagens dato for person som både er kontoeier og
disponent.
* Uthenting av transaksjonshistorikk for en bestemt periode

Den funksjonelle spesifikasjonen beskriver dette i mer detalj.

| Navn | Account |
| ---------- | ---------- |
| Funksjonalitet | Dette API'et støtter 5 ulike operasjoner: <br  /> - Kort knyttet til konto 