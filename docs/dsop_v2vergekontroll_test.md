---
title: "Integrasjonstest for Vergekontroll"
slug: "dsop_v2vergekontroll_test"
id: "dsop_v2vergekontroll_test"
---

Som et ledd i å onboarde tjenesten Vergekontroll ønsker Statens Sivilrettsforvaltning å validere finansforetakets integrasjon av løsningen før den tas i bruk i produksjon. 

Testingen vil utføres <i>uten</i> test av tjenesten Oversikt over kundeforhold. Etaten vil sende forespørsler direkte mot finansforetakets URL (steg 2), slik at finansforetaket <i>ikke</i> behøver å registrere testpersoner i KAR/KFR (steg 1).
<br>
<a href="images/fellesstandard_01-2.png">
    <img src="images/fellesstandard_01-2.png" alt="Steg 2 av fellesstandarden">
</a>

## Forberedelse til test
* Finansforetakene bør forberede testpersonene som er angitt i testdokumentet. 
* <i>Vergehaver</i> bør ha minst 2 kontoer og 5-10 transaksjoner på hver konto. 
* Kontrollér at Bits har mottatt oppdatert URL. 
Merk at <i>Verge</i> og <i>vergehaver</i> har vergeforholdet registrert i Folkeregisteret, slik at bankene kan validere forespørselen.

<br>
Statens Sivilrettsforvaltning ønsker tett samarbeid med finansforetaket under testfasen. Derfor bes finansforetaket om å <a href="https://online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi">kontakte DSOP Forvaltning</a> for å etablere kontakt med Statens Sivilrettsforvaltning for å påbegynne testingen.
<br>
<br>


| Test caser                                                 |
|------------------------------------------------------------|
|[Integrasjon_Vergekontroll](https://dokumentasjon.dsop.no/assets/Integrasjonstest_Vergekontroll.xlsx) |




## Endringslogg

| Dato     | Versjon | Endring                                                           |
|----------|---------|-------------------------------------------------------------------|
| 09.05.2025 | 1.0 | Siden er publisert |