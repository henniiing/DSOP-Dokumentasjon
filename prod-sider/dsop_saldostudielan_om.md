---
title: "Dsop Saldostudielan Om
id: dsop_saldostudielan_om"
slug: "dsop_saldostudielan_om"
keywords: ["sample"]
sidebar: "main_sidebar
permalink: dsop_saldostudielan_om.html"
folder: "section1"
---

Saldo på studielån er en hel-digital løsning for å vise saldo på studielån i en digital flate som bruker ofte benytter. Tjenesten er et API fra Lånekassen bygd i Azure.

Ved å kunne vise lånesaldoen direkte i for eksempel nett- og mobilbank ønsker Lånekassen å øke bevisstheten rundt studielånet hos brukerne. Et ønsket resultat av dette er at færre brukere går til inkasso eller får ubehagelige overraskelser når de for eksempel senere søker om boliglån.

Saldo er kundens totale gjeld, fordelt på lån, renter, gebyrer og omkostninger.

Med saldo menes kundens totale gjeld i Lånekassen fordelt på kontotypene lån, renter, gebyrer og omkostninger.

**Eksempel visning av studielån**

[\\\\{/* -- Missing image: ![alt text](images/studielan.png "studielån") --&amp;gt;](images/studielan.png)\\}

## Introduksjon - Saldo på studielån
Følgende presentasjon gir deg oversikt over tjenesten saldo på studielån: [Introduksjon - Saldo på studielån](assets/DSOP-Introduksjon-til-Saldo-på-studielån.pdf)

## Registreringsskjema

For å starte implementering må registreringsskjema for tjenesten fylles ut og sendes til [DSOP Support](https://online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi?_sf=0&amp;amp;custSessionKey=&amp;amp;customerLang=no&amp;amp;noCookies=true).

Registreringsskjema finner du i prosess B-1 i [onboardingsguide](https://dokumentasjon.dsop.no/dsop_saldostudielan_onboarding.html#b---registrering-og-avtaleinng%C3%A5else).

## Samtykkeløsningen
Tjenesten benytter [Altinn samtykkeløsning](https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/) for å innhente samtykke fra kunde.

### Krav til samtykke

For å få lagt til saldoen i nettbanken, må kunden gi et samtykke. Samtykket gis gjennom samtykke-løsningen til Altinn. Ingen opplysninger blir utlevert uten samtykke og kunden kan trekke samtykke når som helst hos Altinn.

### Samtykkets varighet

Det samtykket som virksomheten oppretter må ha en maksimal varighet på ett år.

### Samtykketeksten

Når kunden sendes til samtykke-siden, blir kunden presentert for følgende samtykke-tekst:<br \/>

*Ditt samtykke fritar Lånekassen fra sin taushetsplikt overfor \\\\{Navn\\\\} og gir Lånekassen tillatelse til å oversende opplysninger om ditt samlede utestående studielån og også gebyrer og omkostninger som er knyttet til lånet.*

*\\\{Navn\\\\\} har ikke rett til å benytte opplysningene til noe annet formål i sin virksomhet enn å gi deg oversikt over studielånet ditt i nettbank, mobilbank eller lignende applikasjoner*.

*\\\\{Navn\\\\} vil hente opplysningene fra Lånekassen hver gang du logger inn og slette opplysningene igjen når du logger ut.*

*Du kan når som helst trekke dette samtykket tilbake.*

*\\\{Navn\\\\\} vil være ansvarlig for behandlingen av opplysninger om din studiegjeld som skjer hos dem. Lånekassen er ansvarlig for at opplysningene sendes til \\\\{Navn\\\\} på en trygg måte.*<br \/><br \/>

Feltet \\\{Navn\\\\\\} spesifiseres av virksomheten. Samtykkesiden vil ha i tillegg ha en overordnet intro-tekst og informasjon om samtykkets varighet.

## Maskinporten
Tjenesten bruker [Maskinporten](https://samarbeid.digdir.no/maskinporten/dette-er-maskinporten/96) for autentisering av de virksomhetene som benytter løsningen.

## Ytelse

Grensesnittet har en avhengighet mot Maskinporten sitt testsystem (versjon 2). Vi ser for oss at eventuell flaskehals vil kunne oppstå her i testmiljøene. Selve grensesnittet er skalert likt slik det vil fremstå i produksjon. <br \/> <br \/>

Løsningen er basert på dynamisk skalering og det vil derfor kunne tidvis oppleves noe tregere responstider i forbindelse med oppskalering ved økende trafikk.
