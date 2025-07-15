---
title: "Dsop Kontroll Funksjonalitet (UtgåTt Norsk)"
id: "dsop_kontroll_funksjonalitet (utgått norsk)"
slug: "dsop_kontroll_funksjonalitet (utgått norsk)"
---

﻿---
title: Funksjonell spesifikasjon (utgått versjon)
keywords: sample
sidebar: main_sidebar
permalink: dsop_kontroll_funksjonalitet.html
folder: section1
---
**Oppdatert versjon på engelsk: [Se engelsk dokumentasjon](/https:/bitsnorge.github.io/dsop_kontroll_functionalspecification)**
<br ><br >
Se eksempel på disponibel saldo under:
* 5000 kr i kapitalbalanse
* 2000 kr i sperret beløp
* 1000 kr i kredittramme

= Disponibel saldo: 3000 kr

**Merk: Som beskrevet under «Forespørsel om kundeforhold» må etaten først spørre om
kontoliste for en angitt person (f.nr/D-nr) eller virksomhet (org.nr), og deretter kan etatene sende
forespørsel om transaksjoner og saldo.*

## Forespørsel om ytterligere opplysninger
Offentlige etater vil i noen tilfeller ha behov for å kunne innhente ytterligere (ikke forhåndsdefinerte)
kontoopplysninger, eksempelvis mer informasjon om kortbruk, underbilag til en transaksjon,
bankremisser, lånedokumenter, uttaksinformasjon fra minibanker med bilde, tidspunkt etc.

Innhenting av ytterligere opplysninger vil basere seg på «Digitalt brev» via finansinstitusjonenes
meldingsbokser i Altinn. Både forespørsel og respons vil i stor grad være ustrukturert informasjon,
men med noen faste parametere. Etatene har valgt forskjellige implementasjoner av «digitalt brev» og
det vises til utsendt informasjon fra hver etat. 


## Generelt om volum og svartider
Svartider vil variere, men typisk mønster er at forespørsler om tidsaktuelle data som kan leveres
"online" vil ha rask svartid (sekunder), mens store historiske spørringer kan ta mer tid.
Volum og svartider vil spesifiseres mer i detalj i det tekniske løpet/samarbeidet.


### Volum Skatteetaten
Skatteetaten innhenter i dag opplysninger fra finansinstitusjonene manuelt via e-post, brev og fax. Det
har ikke latt seg gjøre å finne eksakte tall på antall henvendelser til finansinstitusjonene om
kontrollopplysninger, og det er derfor laget et estimat på volum basert på tilbakemelding fra
driftsenhetene på antall henvendelser. Estimatene er basert på henvendelser gjort av Regionene (i
2018), Statens Innkrevingssentral, og Skatteoppkreverne. Tabellen under viser estimert volum for
antall henvendelser til finansinstitusjoner fra Skatteetaten.

* Økning på antall saldoforespørsler er estimert som liten da det i dag innhentes opplysninger om
dette i de saker hvor det er nødvendig.
* Volum på innhenting av transaksjoner og saldo antas å øke vesentlig da det i mange saker i dag
ikke foretas innhenting pga for lang svartid, samt at Skatteetaten ønsker å ta dette i bruk i større
grad ved å automatisere prosesser fremover i tid.

| Totalt volum pr. År for henvendelser til finansinstitusjoner      | Anslått antall i dag         | Anslått antall fremover   |
| ------------- |-------------| ------------------------|-------------	|
| Forespørsel om transaksjoner og saldo         | 15 585    | 207 500|
| Forespørsel om saldo | 167 581| 185 000 | 
|**Sum totalt**| 183 166 | 392 500|


### Volum Politiet
Når innhentingen av kontrollinformasjon blir automatisert og strukturert gjennom dette prosjektet forventes det
stor økning i henvendelsene til bankene fra Politidistriktene, Kripos, Økokrim og Enhet for Finansiell Etteretning
(EFE).

Namsmannen får inn 411 000 saker i året. I alle disse sakene bør det innhentes kontrollinformasjon, men i dag
hentes det en svært liten andel. På sikt ønsker man å bruke Kontrollinformasjon på samtlige saker, men i første
omgang forventes det å dekke litt i overkant av halvparten av sakene.

Se konkrete tall i tabellen under.

| Totalt volum pr. år for henvendelser til finansinstitusjoner      | Anslått antall i dag         | Anslått antall fremover   |
| ------------- |-------------| ------------------------|-------------|
| Forespørsel om transaksjoner og saldo fra PD, Kripos, Økokrim, EFE        | 15 000    | 50 000 |
| Forespørsel om transaksjoner og saldo fra Namsmyndige | 8 143 | 250 000 |
| **Sum totalt** | 23 143  | 300 000 |

*Merk: Tallene om forventet volum kommer fra tilbakemeldinger fra fagmiljøene og dagens volum er estimert ut
ifra innsikt hos noen av bankene.*


### Volum NAV

Tabellen under viser anslått volum for antall henvendelser til finansinstitusjoner fra NAV.


| Totalt volum pr. År for henvendelser til finansinstitusjoner      | Anslått antall i dag         | Anslått antall fremover   |
| ------------- |-------------| ------------------------|-------------|
| Forespørsel om transaksjoner og saldo         | 5 000    | 20 000|



## Endringslogg

| Dato         | Endring  | Link i dokumentasjon|
|-------------| ------------------------|
|     |   | |