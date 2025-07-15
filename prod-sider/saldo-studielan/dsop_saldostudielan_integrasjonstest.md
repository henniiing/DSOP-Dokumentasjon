---
title: "Integrasjonstest"
slug: "dsop_saldostudielan_integrasjonstest"
id: "dsop_saldostudielan_integrasjonstest"
---

[Integrasjonstesten](/assets/Saldostudielan_integration_test.xlsx) består av testcaser som må gjennomføres før virksomheten kan autoriseres for Lånekassens produksjonsmiljø.

## Testdata

### Data tilgjengelig i løsningen
Løsningen inneholder datamengder tilsvarende det produksjonsmiljøet vil ha, men fordi kundene også må finnes i Altinn sitt testsystem vil det være et begrenset antall kunder som vil være tilgjengelig for oppslag i test.

### Innlogging Altinn
Ved innlogging til samtykketjenesten bruk **MinID** for alle testkundene. <br  />
Passord: password01 <br  />
PIN kode: 12345

### Testkunder

Følgende fiktive testkunder vil være aktive for oppslag:

Fødselsnr| Navn | Case nr | Beskrivelse |
-----| ----- | ----- | ----- |-----|-----
01085301957|STEINAR BRUUN|	Case 1a|Har kun lån (under en mill)
01097601522|AHMAD BERLAND|	Case 1b| Har kun lån (over en mill)
02075700329|FABIAN JONASSEN|Case 2|	Ingen gjeld
02095302184|IVER BORGE|	Case 3a|Har kun lån og renter (under en mill)
02104802179|SIGVE AUSTAD|	Case 3b|Har kun lån og renter (over en mill)
03096902157|TEODOR GJESTVANG|Case 4b|Har alt unntatt omkostninger (under en mill)
03124002140|RONNY HOLTE|	Case 4b|	Har alt unntatt omkostninger (over en mill)
04024701293|AGATHE UNHJEM|	Case 5|	Har kun lån og gebyr
04056200784|NATANIEL STØLAN|Case 6|	Har alt unntatt gebyr
04125300311|HAUK HAUGNES|	Case 7|	Har alt
05106500098|INGEBORG SØLVBERG|Case 8|Har kun renter og gebyr
06095300381|INGE ZHANG|	Case 9|	Har kun renter
07017900514|VEGAR MOA|	Case 10|Har kun lån og omkostninger
08027200274|VANJA ØYAN|	Case 11|Har kun gebyr
08027201815|MARI BRUNSTAD|	Case 12|Har kun omkostninger
08027202285|GABRIELLE GRØNSETH|Case 13|Har alt unntatt renter
08046802080|ELISE OLUFSEN|	Case 14|Har alt unntatt lån

Testcasene representerer det store mangfoldet av ulike saldokombinasjoner, og er ikke nødvendigvis en utfyllende liste. De er sortert i rekkefølge basert på frekvens. For tre av caseene er det valgt å gi to eksempler hvor totalsaldoen er under eller over en million kroner.

### Kommentar til casene
Case 1 og 3: Dette er den mest vanlige kombinasjonen.<br  />
Case 2: Ingen gjeld - Dette kan for eksempel være en aktiv kunde som mottar støtte, men kun som stipend. Dette gjelder blant annet mange elever på videregående som kun mottar utstyrsstipend.<br  />
Case 4: Dette vil være kunder med et gebyr. Gebyr får man i forbindelse med regning, enten for papirvarsel eller purringer.<br  />
Case 5-14: Dette er alle mindre vanlige kombinasjoner som til sammen gjelder rundt 0,5 % av kundene. Det er likefullt eksempler på mulige responser fra tjenesten som må kunne håndteres. Det er altså ingen feil dersom man får tilbake en retur hvor kunden ikke har lån, men enten renter, gebyr, omkostninger eller en kombinasjon av disse.

## Endringslogg

| Dato | Endring | Link i dokumentasjon |
| ------------- | ------------------------ |  | |   | |
