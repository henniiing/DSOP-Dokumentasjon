---
title: "FAQ - Krav og Betalinger"
slug: "dsop_fi_faq"
id: "dsop_fi_faq"
keywords: ["sample"]
---

## Hvordan få tilgang til Krav og Betalinger?

For å få tilgang til tjenesten må finansforetaket ha underskrevet en pilotavtale med Skatteetaten. Det forutsetter at
finansforetaket allerede har undertegnet DSOP tilknytningsavtale. Tilgangsmekanismen benytter felleskomponentene [Altinn
Samtykke](https://altinn.github.io/docs/utviklingsguider/samtykke/) og [Maskinporten](https://docs.digdir.no/docs/Maskinporten/).

## Hvem er målgruppen for tjenesten?

Målgruppen for tjenesten Krav og Betalinger er i første omgang næringsdrivende, og tjenesten er dermed aktuell for
finansforetak som leverer tjenester til næringslivet. Skatteetaten tilgjengeliggjør dokumentasjon rundt tjenesten løpende
[her](https://skatteetaten.github.io/beta-apier/kravogbetalinger) og vil i starten åpne opp for testing mot sine systemer
for et utvalg finansforetak som det inngås avtaler med.

Dersom du har spørsmål om hvem som kan ta i bruk tjenesten ta kontakt med [DSOP@bits.no](mailto:dsop@bits.no).

## Hvor kan jeg finne mer informasjon om tjenesten?

Se [her](https://skatteetaten.github.io/api-dokumentasjon/api/kravogbetalinger?tab=Om+tjenesten) for mer informasjon om
tjenesten.

## Hvor finnes testdata til tjenesten?

Testdata er listet [her](https://skatteetaten.github.io/api-dokumentasjon/api/kravogbetalinger?tab=Test).
Det finnes pt. ikke søk i Tenor for denne tjenesten, men egenskaper ved enhetene som har testdata kan søkes frem i Tenor.

## Hvor kan man finne tekniske eksempel på forespørsler?

[Se her for eksempler.](https://skatteetaten.github.io/api-dokumentasjon/api/kravogbetalinger?tab=Eksempler)

## Hva betyr denne feilkoden?

Se side for feilkoder [her](https://skatteetaten.github.io/api-dokumentasjon/api/kravogbetalinger?tab=Feilkoder).

## Hvorfor trenger vi virksomhetssertifikat?

Virksomhetssertifikater inneholder virksomheten sitt organisasjonsnummer. Virksomhetens organisasjonsnummer er også
nøkkelen som Skatteetaten forholder seg til. Det er derfor nødvendig at virksomhetssertifikatet fra samme organisasjon
benyttes som den som har det avtalemessige forholdet med Skatteetaten.

## Kan man bruke produksjonssertifikat til test eller motsatt?

I akseptansetest (AT) må man bruke et test-virksomhetssertifikat. I produksjon må man bruke produksjons-virksomhetssertifikat.

## Hvor kan jeg finne mer informasjon om testaktiviteter i DSOP prosjekter?

I dokumentet DSOP teststrategi er det en overordnet teststrategi for DSOP-prosjekter. Strategien legger føringer for
hvilke koordinerende testaktiviteter som skal gjennomføres, samt hvilke typer testdata som skal benyttes i felles
testaktiviteter. Se dokumentet [her.](https://www.bits.no/wp-content/uploads/2022/02/DSOP-Teststrategi-V.1.0.pdf)
