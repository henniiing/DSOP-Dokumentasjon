---
title: "Dsop Kontroll Funksjonalitet (UtgåTt Norsk)
id: dsop_kontroll_funksjonalitet (utgått norsk)"
slug: "dsop_kontroll_funksjonalitet (utgått norsk)"
keywords: ["sample"]
sidebar: "main_sidebar
permalink: dsop_kontroll_funksjonalitet.html"
folder: "section1"
---
**Oppdatert versjon på engelsk: [Se engelsk dokumentasjon](https://bitsnorge.github.io/dsop_kontroll_functionalspecification.html)**
<br \/><br \/><br \/><br \/><br \/>

Denne siden beskriver leveransene på funksjonelt nivå fra løsningen DSOP Kontrollinformasjon. Hvordan dette blir løst i ulike tekniske kall, er ikke hensyntatt i dette dokumentet, men er beskrevet i arkitekturdokumentet og API-dokumentasjonen. Dagens prosess er manuell og tidkrevende både for offentlige etater og finansinstitusjonene. Den digitaliserte og standardiserte løsningen hos de offentlige etatene for innhenting av kontoopplysninger fra finansinstitusjonene fører både til en enklere og mer effektiv prosess, og i tillegg høyere datakvalitet. Videre gir den digitale løsningen økt sikkerhet og sporbarhet rundt behandling av kontoopplysninger, og åpner for økt automatisering av prosesser.

## Forespørsel om kundeforhold
Offentlige etater forespør om hvilke finansinstitusjoner en person (f.nr/D-nr) eller virksomhet (org.nr)
har- eller har hatt kundeforhold til i hele eller deler av en angitt periode.

Det skal angis en periode (fra- og til-dato) i forespørselen. Angitt periode kan være kort (måneder)
eller lang (år), og kan være nært i tid (eks. inneværende år, et par år tilbake) eller langt tilbake i tid
(inntil 10 år tilbake i enkelte tilfeller).

Responsen skal oppgi hvilke finansinstitusjoner som har kundeforhold til forespurt part (dvs part er
eier eller disponent av konto) i hele eller deler av perioden, og eventuelt en liste over konti. Responsen
kan også inkludere start- og stoppdato for hver konto der dette er tilgjengelig fra bankene.

### Skjerming

Personer som utsettes for vold eller trusler om vold har krav på beskyttelse. I de mest alvorlige tilfellene vil de kunne ha behov for beskyttelsestiltakene: strengt fortrolig adresse KODE 6 eller fortrolig adresse KODE 7. Noen banker kan ha lastet opp disse kundeforholdene til KAR/KFR (for eksempel fordi beskyttelsbehovet oppstod etter at kundeforholdet ble etablert), men kontoinformasjon for bankkunder med en slik beskyttelse vil ikke bli utlevert fra bankene over eOppslag og derfor må etatene sende forespørsel om kontoinformasjon på digitalt brev.

* [Beskyttelsesinstruks](https://lovdata.no/dokument/INS/forskrift/1972-03-17-3352)

## Forespørsel om transaksjoner og saldo
Offentlige etater forespør om transaksjoner og saldo knyttet til en part (org.nr, f.nr/d-nr) eller
kontonr/kortnr* i en gitt periode (fra- og til-dato). Denne forespørselen vil kun sendes til
finansinstitusjoner som har/hadde et faktisk kundeforhold i hele eller deler av angitt periode.

Det er valgfritt om offentlige etater angir en periode (fra- og til-dato) for forespørselen. Angitt periode kan
være kort (måneder) eller lang (år), og kan være nært i tid (eks. inneværende år, et par år tilbake) eller
langt tilbake i tid (inntil 10 år tilbake i enkelte tilfeller). Dersom periode ikke er angitt skal dette tolkes
som dagens dato.

* Ved forespørsel på part skal responsen inneholde transaksjonshistorikk og saldo for perioden
på alle typer konti eid av part.
* Ved forespørsel på kontonummer* skal responsen inneholde transaksjonshistorikk og saldo for
perioden på angitt konto.
* Ved forespørsel på kortnummer* skal responsen inneholde transaksjonshistorikk og saldo for
perioden på angitt kort.

Saldo (kredittramme er ikke inkludert i saldo):

* For angitt periode skal bokført saldo per til-dato (i perioden) leveres.
* For forespørsel på dagens dato skal disponibel saldo per forespørselstidspunkt leveres, samt bokført saldo.

<br \/>
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

| Totalt volum pr. År for henvendelser til finansinstitusjoner | Anslått antall i dag | Anslått antall fremover |
| ------------- | ------------- | ------------------------ |-------------	|
| Forespørsel om transaksjoner og saldo | 15 585 | 207 500 |
| Forespørsel om saldo | 167 581 | 185 000 |
| **Sum totalt** | 183 166 | 392 500 |

### Volum Politiet
Når innhentingen av kontrollinformasjon blir automatisert og strukturert gjennom dette prosjektet forventes det
stor økning i henvendelsene til bankene fra Politidistriktene, Kripos, Økokrim og Enhet for Finansiell Etteretning
(EFE).

Namsmannen får inn 411 000 saker i året. I alle disse sakene bør det innhentes kontrollinformasjon, men i dag
hentes det en svært liten andel. På sikt ønsker man å bruke Kontrollinformasjon på samtlige saker, men i første
omgang forventes det å dekke litt i overkant av halvparten av sakene.

Se konkrete tall i tabellen under.

| Totalt volum pr. år for henvendelser til finansinstitusjoner | Anslått antall i dag | Anslått antall fremover |
| ------------- | ------------- | ------------------------ |-------------|
| Forespørsel om transaksjoner og saldo fra PD, Kripos, Økokrim, EFE | 15 000 | 50 000 |
| Forespørsel om transaksjoner og saldo fra Namsmyndige | 8 143 | 250 000 |
| **Sum totalt** | 23 143 | 300 000 |

*Merk: Tallene om forventet volum kommer fra tilbakemeldinger fra fagmiljøene og dagens volum er estimert ut
ifra innsikt hos noen av bankene.*

### Volum NAV

Tabellen under viser anslått volum for antall henvendelser til finansinstitusjoner fra NAV.

| Totalt volum pr. År for henvendelser til finansinstitusjoner | Anslått antall i dag | Anslått antall fremover |
| ------------- | ------------- | ------------------------ |-------------|
| Forespørsel om transaksjoner og saldo | 5 000 | 20 000 |

## Endringslogg

| Dato | Endring | Link i dokumentasjon |
| ------------- | ------------------------ |  | |   | |