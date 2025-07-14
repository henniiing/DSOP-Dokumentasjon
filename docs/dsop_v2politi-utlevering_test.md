---
title: "Integrasjonstest Politi-Utlevering"
slug: "dsop_v2politi-utlevering_BETA_test"
id: "dsop_v2politi-utlevering_BETA_test"
keywords:
  - "sample"
---

<mark><b>Denne siden er under utvikling. Endringer kan forekomme uten varsel og loggføring.</b></mark>

Som et ledd i å onboarde tjenesten Politi-utlevering ønsker Politiet å validere finansforetakets integrasjon av løsningen før den tas i bruk i produksjon. 

Testingen vil utføres <i>uten</i> test av tjenesten Oversikt over kundeforhold. Etaten vil sende forespørsler direkte mot finansforetakets URL (steg 2), slik at finansforetaket <i>ikke</i> behøver å registrere testpersoner i KAR/KFR (steg 1).
<br>
<a href="images/fellesstandard_01-2.png">
    <img src="images/fellesstandard_01-2.png" alt="Steg 2 av fellesstandarden">
</a>

## Forberedelse til test
* Finansforetakene bør forberede testpersonene som er angitt i testdokumentet. 
* De aktuelle kundeforholdene bør ha minst 2 kontoer og 5-10 transaksjoner på hver konto. 
* Kontrollér at Bits har mottatt oppdatert URL. 

<br>
Politiet ønsker tett samarbeid med finansforetaket under testfasen. Derfor bes finansforetaket om å <a href="https://online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi">kontakte DSOP Forvaltning</a> for å etablere kontakt med Politiet for å påbegynne testingen.
<br>
<br>


| Test caser                                                 |
|------------------------------------------------------------|
|[Integrasjon_Vergekontroll](https://dokumentasjon.dsop.no/assets/Integrasjonstest_Vergekontroll.xlsx) |




## Endringslogg

| Dato     | Versjon | Endring                                                           |
|----------|---------|-------------------------------------------------------------------|
| 04.06.25 | 0.8 | Første utkast |