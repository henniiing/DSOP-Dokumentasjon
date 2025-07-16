---
title: "Saldostudielan Om"
id: dsop_saldostudielan_om
slug: "/dsop_saldostudielan_om"
---

Saldo på studielån er en hel-digital løsning for å vise saldo på studielån i en digital flate som bruker ofte benytter. Tjenesten er et API fra Lånekassen bygd i Azure.

Ved å kunne vise lånesaldoen direkte i for eksempel nett- og mobilbank ønsker Lånekassen å øke bevisstheten rundt studielånet hos brukerne. Et ønsket resultat av dette er at færre brukere går til inkasso eller får ubehagelige overraskelser når de for eksempel senere søker om boliglån.

Saldo er kundens totale gjeld, fordelt på lån, renter, gebyrer og omkostninger.

Med saldo menes kundens totale gjeld i Lånekassen fordelt på kontotypene lån, renter, gebyrer og omkostninger.

**Eksempel visning av studielån**

[/

## Introduksjon - Saldo på studielån
Følgende presentasjon gir deg oversikt over tjenesten saldo på studielån: [Introduksjon - Saldo på studielån](/assets/DSOP-Introduksjon-til-Saldo-på-studielån.pdf)

## Registreringsskjema

For å starte implementering må registreringsskjema for tjenesten fylles ut og sendes til [DSOP Support](https:/online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi?_

Registreringsskjema finner du i prosess B-1 i [onboardingsguide](https:/dokumentasjon.dsop.no/saldo-studielan/dsop_saldostudielan_onboarding#b---registrering-og-avtaleinng%C3%A5else).

## Samtykkeløsningen
Tjenesten benytter [Altinn samtykkeløsning](https:/altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/) for å innhente samtykke fra kunde.

### Krav til samtykke

For å få lagt til saldoen i nettbanken, må kunden gi et samtykke. Samtykket gis gjennom samtykke-løsningen til Altinn. Ingen opplysninger blir utlevert uten samtykke og kunden kan trekke samtykke når som helst hos Altinn.

### Samtykkets varighet

Det samtykket som virksomheten oppretter må ha en maksimal varighet på ett år.

### Samtykketeksten

Når kunden sendes til samtykke-siden, blir kunden presentert for følgende samtykke-tekst:<br  /> 
Løsningen er basert på dynamisk skalering og det vil derfor kunne tidvis oppleves noe tregere responstider i forbindelse med oppskalering ved økende trafikk.
