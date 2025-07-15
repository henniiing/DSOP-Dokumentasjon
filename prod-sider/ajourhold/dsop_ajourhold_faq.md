---
title: "FAQ"
slug: "dsop_ajourhold_faq"
id: "dsop_ajourhold_faq"
keywords: ["sample"]
---

*FAQ oppdateres fortløpende. Send e-post til [[DSOP@bits.no](mailto:DSOP@bits.no)](mailto:dsop@bits.no) dersom FAQ ikke besvarer ditt spørsmål.*

## Pensjonsinnretningens sjekkliste ved onboarding av nye eller eksisterende kunder
[Sjekkliste for pensjonsinnretningene ved onboarding av nye eller eksisterende kunder.](https:/www.finansnorge.no/tema/liv-og-pensjon/pensjonsleverandor-skal-oppgis-i-a-meldingen/hva-betyr-dette-for-arbeidsgiver/arbeidsgivers-sjekkliste-for-a-melding/)

## Hvilke scopes brukes i Maskinporten?
Tilgang til Skatteetatens scope må tildeles av Skatteetaten.

| API-tilbyder | API | Scope |
| ----------------- |-----------------|
| Skatteetaten | Inntekt | skatteetaten:inntekt |
| Skatteetaten | Inntektsmottakere | skatteetaten:inntektsmottakere |
| Skatteetaten | Tjenestepensjonsavtale | skatteetaten:tjenestepensjonsavtale |
| NAV | Arbeidsforholdsopplysninger | nav:aareg/v1/arbeidsforhold/otp |

## Oversikt over feilkoder

[Inntekt](https:/skatteetaten.github.io/api-dokumentasjon/api/inntekt?
[Inntektsmottakere](https:/skatteetaten.github.io/api-dokumentasjon/api/inntektsmottakere?
[Tjenestepensjonsavtale](https:/skatteetaten.github.io/api-dokumentasjon/api/tjenestepensjonsavtale?
[Arbeidsforholdsopplysninger](https:/navikt.github.io/aareg/tjenester/integrasjon/otp-api/#feilmeldinger)

## Virksomhetssertifikat

**Organisasjonsnummer i virsomhetssertifikat**<br  />
I testmiljø må man bruke test-virksomhetssertifikat. I produksjonsmiljø må virksomhetssertifikat for produksjon benyttes.<br  />
Timer som ble rapportert i a-melding for januar er rapportert på et arbeidsforhold som i samme a-melding er rapportert med sluttdato 31.12.2020. Dette arbeidsforholdet vil ikke bli med i responsen når pensjonsinnretningen spør på januar, siden det ikke er aktivt i januar. Siden arbeidsforholdet ikke er med, vil heller ikke timene være med i responsen. Men fra Skatteetaten vil timene bli returnert, siden de rapportert for rapporteringsmåned januar.

## Avtaleforhold og virkningsperiode
### Forutsetning for utlevering

Opplysningspliktig må ha rapportert at de har avtale med pensjonsinnretningen.

Pensjonsinnretningen må ha rapportert om avtalen med opplysningspliktig, inkludert dato for avtaleinngåelse.

**Tidspunkt det tillates henting**<br  />
Avtaleforholdet omfatter kalendermåneder der både opplysningspliktig og pensjonsinnretningen har rapportert at de har en avtale.

Tidligste kalendermåned i et avtaleforhold er 01-2021.

**Om virkningsperiode**<br  />
[Virkningsperioder med eksempler.](https:/skatteetaten.github.io/api-dokumentasjon/forutsetningerforbruk#eksempler)

## Koder for sluttårsak
6 koder for slutt årsak:
- arbeidsforholdetSkulleAldriVaertRapportert
- arbeidsgiverHarSagtOppArbeidstaker
- arbeidstakerHarSagtOppSelv
-  byttetLoenssystemEllerRegnskapsfoerer
- endringIOrganisasjonsstrukturEllerByttetJobbInternt
- kontraktEngasjementEllerVikariatErUtloept

Mer informasjon finnes i [nyhetsbrevet for A-ordningen](https:/www.skatteetaten.no/globalassets/bedrift-og-organisasjon/arbeidsgiver/a-meldingen/nyhetsbrev/nyhetsbrev-a-ordningen-oktober-2020.pdf)

## Skjerming
Man kan spørre på inntekter til en skjermet person, men i praksis så vil man aldri gjøre det fordi inntektsmottakere ikke vil returnere data på dem.
Man vil kun få beskjed om at personen er skjermet.
Men det er mulig å spørre på andre personer enn de som returneres fra inntektsmottakere, som kan være aktuelt hvis man spør om en periode som er tidligere enn det man får inntektsmottakere for.  Dette er ikke en bekreftelse eller avkreftelse
på at inntektsmottakeren har mottatt inntekter fra den opplysningspliktige - uavhengig om inntektsmottakeren er skjermet eller ikke.

## Er ansattnummer en del av arbeidsforholdId?

Nei, ansattnummer er ikke en del av A-meldingen
Arbeidsforhold-id kan være hva som helst - bokstaver (A-Z) eller tall - uten noen sammenheng med andre data.
Den kan også være "tom" (null) for eldre arbeidsforhold - den er påkrevd nå

## Arbeidstypeforhold i a-meldingen
Arbeidsforhold for personer som mottar lønn eller annen godtgjørelse for utført arbeid eller oppdrag, men som ikke er ansatt og der pensjoninnretning har lagt til grunn følgende: 
|Velferdspermisjon|- Andre ikke-lovfestede permisjoner <br  />
Dersom man har «permisjon ved militærtjeneste» eller «permisjon med foreldrepenger» som fortsetter i 2023, rapporteres dette som tidligere.
- For nye permisjonstyper <br  />
-Beholde startdato på permisjonen og PermisjonsID, og bytte permisjonsbeskrivelse. <br  />
Avslutte eksisterende permisjon, og opprette ny permisjon med ny startdato, ID og beskrivelse. Ulempen ved å benytte denne måten er at arbeidstaker blir stående uten permisjon frem til a-melding for januar rapporteres.

Mer informasjon for:
[LPS](https:/www.altinndigital.no/produkter/altinn-api-for-datasystem/tjenesteoversikt/a-meldingen/) <br  />
Veiledningen til [a-ordningen](https:/www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/a-meldingen/veiledning/)

## Rapportering av inntekt - utenlandsk arbeidskraft uten D-nummer
- En arbeidsgiver (bedriften) skal rapportere inntekten når rapporteringsplikten inntreffer (kontantprinsippet), uavhengig av om den ansatte har d-nummer eller ikke.
- Bedriften kan rapportere inntekten på den ansattes passnummer.
- A-ordningen har egen mekanisme for kobling av opplysninger rapportert på eksempelvis passnummer og opplysninger rapportert på dnr ved at den opplysningspliktige (bedriften) må rapportere både dnr og passnummer på første a-melding etter at dnr er blitt gitt den ansatte.

Dersom den ansatte ikke har skattekort er ikke avgjørende for rapporteringen og rapporteringsplikten. Bedriften skal trekke 50% skatt hvis det ikke foreligger skattekort og/eller den ansatte ikke har norsk identifikator (dnr/fnr). Eventuelt for mye betalt forskuddstrekk for perioden forut for tildelt skattekort med lavere trekksats vil tilgodeses den ansatte på skatteoppgjørstidspunktet.
Bedriften kan ikke unnlate å rapportere eller trekke korrekt selv om man venter på dnr/fnr. Avsetning av forskuddstrekk og arbeidsgiveravgift følger av kontantstrømmen og er ikke knyttet til selve identifiseringen. Betalingen av dette følger terminene og skal gjøres uavhengig av om dnr/fnr finnes. Skatteetaten kan med hjemmel i Skattebetalingsloven &sect; 5-13 (1) gjennomføre kontroller av trekkplikten og bedrifter som ikke trekker korrekt etter bestemmelsene kan risikere sanksjoner for brudd på trekkplikten.

## Personer som har et inaktivt D-nummer
Selv om personer har et inaktivt d-nummer vil foretaket ha mulighet til å sende inn lønnsopplysninger og ansatteinformasjon. Pensjonsleverandørene vil få tilgang til informasjonen på lik linje som for øvrige ansatte. Status på d-nummer påvirker ikke muligheten for å hente data eller rapportere. Det gis derimot ikke skattekort til inaktive d-nummer, så for skatteyter er konsekvensen at de må på ID kontroll. Men dette har ingen konsekvenser for Pensjonsleverandørene.

## Sykepenger
### "Feriepenger" på Sykepenger i Mai
- "Feriepenger" kan ikke rapporteres som feriepenger da feriepenger skattemessig er lønn, mens sykepengene er utbetaling fra det offentlige.
- «Feriepenger» på sykepenger skal ikke rapporteres som feriepenger.
- "Feriepenger" på sykepenger, er egentlig ikke feriepenger, men ekstra opptjente sykepenger.

## Arbeidsdyktighet
### Hvordan "fange" opp at en ansatt ikke er arbeidsdyktig?
Eksempler på to ulike feilsituasjoner som kan oppstå:
1. Den ansatte er frisk, men mottar feriepenger på sykepenger som ble utbetalt for en periode tilbake i tid. Pensjoninnretning behandler den ansatte som syk.
<br  />
Svar: Utbetalte sykepenger skjer i etterkant så den ansatte kan også være 100% arbeidsdyktig på tidspunkt for avtaleinngåelse.
Intesjonen om informasjonen om ytelser fra NAV skal primært skulle benyttes til å avklare om ansatte som ikke fikk lønn fortsatt skal være medlem i avtalen og som det må beregnes premie på.

## Ingen arbeidsforhold fra NAV og ingen inntekter fra bedriften, men pensjonsinnretning mottar likevel ytelsene fra det offentlige?

- Grunnen til at inntektsmottaker kan kommer med i inntektsmottakere responsen er at den opplysningspliktige fortsetter å rapportere inntektsmottakeren selv om arbeidsforholdet er avsluttet. Inntektsmottakeren skulle ikke vært rapportert av den opplysningspliktige etter at arbeidsforholdet er avsluttet.

- Siden arbeidsforholdet er avsluttet vil det ikke være noe aktivt arbeidsforhold i tjenesten fra NAV.
Inntektsmottaker-tjenesten vil returnere innrapportert inntekt for personidentifikatoren det spørres på, uavhengig av arbeidsforhold. I noen tilfeller er det kun inntekt av typen ytelse fra offentlig som er innrapportert og som dermed deles når det bes om inntektsopplysninger for  personen det spørres på.

- Det er ikke feil at det returneres ytelser, men det er "feil" at den ansatte er med i listen over inntektsmottakere for angitt opplysningspliktig. Så lenge den opplysningspliktige fortsetter å rapportere den ansatte etter avsluttet arbeidsforhold vil den ansatte være med i listen med inntektsmottakere.

- Den opplysningspliktige må slutte å rapportere den ansatte (som har avslutttet sitt arbeidsforhold) for at listen med inntektsmottakere skal bli riktig.

## Endringslogg

| Dato | Endring | Link i dokumentasjon |
|-------------| ------------------------|
| 04.04.2023 | Oppdatert link | [Virkningsperioder med eksempler.](https:/skatteetaten.github.io/api-dokumentasjon/forutsetningerforbruk#eksempler) |
|12.01.2022    | Oppdatert i FAQ med; kode sluttårsak, skjerming, er ansattnummer en del av arbeidsforholdId? og permittering. |
| 05.04.2022 | Oppdatert i FAQ |  | | 11.07.2022 | Oppdatert i FAQ |  | | 01.11.2022 | Oppdatert i FAQ- Permisjonstyper |  |