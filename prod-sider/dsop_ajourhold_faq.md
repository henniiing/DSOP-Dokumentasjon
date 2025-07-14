---
title: "FAQ"
slug: "dsop_ajourhold_faq"
id: "dsop_ajourhold_faq"
keywords: ["sample"]
---

*FAQ oppdateres fortløpende. Send e-post til [DSOP@bits.no](mailto:dsop@bits.no) dersom FAQ ikke besvarer ditt spørsmål.*

## Pensjonsinnretningens sjekkliste ved onboarding av nye eller eksisterende kunder
[Sjekkliste for pensjonsinnretningene ved onboarding av nye eller eksisterende kunder.](https://www.finansnorge.no/tema/liv-og-pensjon/pensjonsleverandor-skal-oppgis-i-a-meldingen/hva-betyr-dette-for-arbeidsgiver/arbeidsgivers-sjekkliste-for-a-melding/)

## Hvilke scopes brukes i Maskinporten?
Tilgang til Skatteetatens scope må tildeles av Skatteetaten.

| API-tilbyder | API | Scope |
| ----------------- |-----------------|
| Skatteetaten | Inntekt | skatteetaten:inntekt |
| Skatteetaten | Inntektsmottakere | skatteetaten:inntektsmottakere |
| Skatteetaten | Tjenestepensjonsavtale | skatteetaten:tjenestepensjonsavtale |
| NAV | Arbeidsforholdsopplysninger | nav:aareg/v1/arbeidsforhold/otp |

## Oversikt over feilkoder

[Inntekt](https://skatteetaten.github.io/api-dokumentasjon/api/inntekt?tab=Feilkoder)<br \/><br \/>
[Inntektsmottakere](https://skatteetaten.github.io/api-dokumentasjon/api/inntektsmottakere?tab=Feilkoder)<br \/><br \/>
[Tjenestepensjonsavtale](https://skatteetaten.github.io/api-dokumentasjon/api/tjenestepensjonsavtale?tab=Feilkoder)<br \/><br \/>
[Arbeidsforholdsopplysninger](https://navikt.github.io/aareg/tjenester/integrasjon/otp-api/#feilmeldinger)

## Virksomhetssertifikat

**Organisasjonsnummer i virsomhetssertifikat**<br \/>
Virskomhetssertifikater inneholder virksomheten sitt organisasjonsnummer. Virksomhetens organisasjonsnummer er også nøkkelen som Skatteetaten forholder seg til. Det er derfor nødvendig at virksomhetssertifikatet fra samme organisasjon benyttes som den som har det avtalemessige forholdet med Skatteetaten.

**Prodsertifikat i test eller motsatt?**<br \/>
I testmiljø må man bruke test-virksomhetssertifikat. I produksjonsmiljø må virksomhetssertifikat for produksjon benyttes.<br \/> [Les mer om virksomhetssertifikat her](https://www.bits.no/document/bits-buypass-commfides-business-certificates-an-introduction/)

## Avvik mellom inntektsmottaker og inntektsmottakere API
**Inntektsmottakere-tjenesten returnerer arbeidstaker i listen for opplysningspliktig, men når vi ber om data fra Inntektsmottaker får vi tilbake *kode=IM-010, melding=Fant ingen informasjon for gitt identifikator og periode*. Det ser ikke ut som inntektsmottakere og inntektsmottaker er i sync. Hvis medlemmet ikke har mottatt inntekt fra NAV, opplysningspliktig eller annen pensjon/ytelser, så burde den ikke vises i listetjenesten heller.**<br \/><br \/>
Årsaken til at det returneres personer som det ikke er inntekt på er at Innteksmottakere-API returnerer en liste med identifikatorer på personer som er rapportert av opplysningspliktig i perioden det spørres på. En a-melding inneholder ulike typer informasjon, så det kan (ganske ofte) skje at en person er innrapportert uten inntekt. Inntektsmottakere-API sjekker kun om det har kommet inn en a-melding på personen for den gitte perioden, mens innteksmottaker-API sjekker om personen har inntekt.

## Hvor lang gyldighet er det på Maskinporten-token?

120 sekunder.

## Hvilken rettighet i Altinn skal delegeres til tredjepart/leverandør?

* Inntekt API - På vegne av
* Inntektsmottakere API
* Tjenestepensjonsavtale API
* Aa-registeret OTP API

Se prosess B-7 i onboardingsguide for veiledning.

## For- og etternavn på inntektsmottaker
Inntektsmottaker API lever ikke ut navn i responsen, kun personidentifikator (f.nr. eller d-nummer). Personidentifikatoren kan brukes videre mot Folkeregisteret for å hente ut navn.

## Avvik i respons fra Skatteetaten og NAV

Det er scenarier hvor det vil være avvik mellom hva som returneres fra NAV og Skatteetaten, siden kriteriene for hva som blir returnert er forskjellige. Skatteetaten returnerer informasjon basert på rapporteringsperiode, mens NAV returnerer basert på om arbeidsforholdet er aktivt i perioden det spørres på.

Pensjonsinnretningene bør spørre på flere måneder, for å fange opp tilfeller hvor det rapporteres en sluttdato tilbake i tid eller at NAV setter en maskinell sluttdato tilbake i tid.

**Eksempel**<br \/>
Timer som ble rapportert i a-melding for januar er rapportert på et arbeidsforhold som i samme a-melding er rapportert med sluttdato 31.12.2020. Dette arbeidsforholdet vil ikke bli med i responsen når pensjonsinnretningen spør på januar, siden det ikke er aktivt i januar. Siden arbeidsforholdet ikke er med, vil heller ikke timene være med i responsen. Men fra Skatteetaten vil timene bli returnert, siden de rapportert for rapporteringsmåned januar.

## Avtaleforhold og virkningsperiode
### Forutsetning for utlevering

Opplysningspliktig må ha rapportert at de har avtale med pensjonsinnretningen.

Pensjonsinnretningen må ha rapportert om avtalen med opplysningspliktig, inkludert dato for avtaleinngåelse.

**Tidspunkt det tillates henting**<br \/>
Pensjonsinnretningen kan aldri hente opplysninger før opplysningspliktig og pensjonsinnretningen har rapportert om avtaleforholdet.

Pensjonsinnretningen kan hente opplysninger på hvilket som helst tidspunkt etter at avtalen har opphørt, så lenge hentingen følger reglene for kalendermånedene som tillates hentet.

**Om avtaleforhold**<br \/>
Avtaleforholdet omfatter kalendermåneder der både opplysningspliktig og pensjonsinnretningen har rapportert at de har en avtale.

Tidligste kalendermåned i et avtaleforhold er 01-2021.

**Om virkningsperiode**<br \/>
Virkningsperioden for et gjensidig avtaleforhold omfatter kalendermåneder der både opplysningspliktig og pensjonsinnretningen har rapportert at de har en avtale, og 15 måneder før og 1 måned etter hver kalendermåned.

Tidligste kalendermåned i en virkningsperiode er 01-2020.

I tjenesten Inntektsmottakere må perioden det spørres på være innenfor avtaleforholdet.

**Eksempler**<br \/>
[Virkningsperioder med eksempler.](https://skatteetaten.github.io/api-dokumentasjon/forutsetningerforbruk#eksempler)

## Koder for sluttårsak
6 koder for slutt årsak:
- arbeidsforholdetSkulleAldriVaertRapportert
- arbeidsgiverHarSagtOppArbeidstaker
- arbeidstakerHarSagtOppSelv
-  byttetLoenssystemEllerRegnskapsfoerer
- endringIOrganisasjonsstrukturEllerByttetJobbInternt
- kontraktEngasjementEllerVikariatErUtloept

Mer informasjon finnes i [nyhetsbrevet for A-ordningen](https://www.skatteetaten.no/globalassets/bedrift-og-organisasjon/arbeidsgiver/a-meldingen/nyhetsbrev/nyhetsbrev-a-ordningen-oktober-2020.pdf)

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
Arbeidsforhold for personer som mottar lønn eller annen godtgjørelse for utført arbeid eller oppdrag, men som ikke er ansatt og der pensjoninnretning har lagt til grunn følgende: <br \/>

- De ikke skal meldes inn i tjenestepensjonsavtalen til bedriften?
- De skal meldes inn i tjenestepensjonsavtalen til bedriften?
- noen skal meldes inn, mens andre ikke skal meldes inn? Dvs. at man her legger opp til å spørre kunde ?

Hva legges til grunn for personer som innrapporteres som «Frilanser, oppdragstaker og personer som mottar honorar» i A-meldingen?

Skatteetaten preiserer:
- Personer som innrapporteres som «Frilanser, oppdragstaker og personer som mottar honorar» i A-meldingen har alle en tilknytning til arbeidsgiver som faller inn under definisjonen i ftrl&sect;1-9.
- De er ikke ansatte etter hovedbestemmelsen i ftrl &sect;1-8.
- Hvis en person utfører arbeid eller oppdrag for lønn eller annen godtgjørelse uten tjenesteforhold/ansettelsesforhold (ikke ansatt), uten å være selvstendig næringsdrivende, oppgi dette som frilanser, oppdragstaker og personer som mottar honorar.
- Med frilanser, oppdragstaker og personer som mottar honorar har du ikke styringsrett, det vil si at arbeidsoppgavene ikke kan endres uten at kontrakten reforhandles.
- Som «Frilanser, oppdragstaker og personer som mottar honorar» rapporteres også bl.a styremedlemmer, folkevalgte og andre med betalte verv
- NB! De er heller ikke å betegne som næringsdrivende etter ftrl &sect;1-10. Disse er ikke rapportert via a-ordningen
- Skattemessig er det ikke noen forskjell på behandlingen av inntekter om den ansatte er innrapportert etter &sect;1-8 eller &sect;1-9
- Intensjonen med at Pensjonsbransjen trengte informasjon om denne arbeidsforholdstypen var å identifisere «ansatte» som kanskje ikke skulle med i medlemsmassen og forklare «manglende» eller «mangelfull» rapportering om arbeidsforholdet

## Spørring etter arbeidsforhold detaljer men mottar forhold utenfor perioden det spørres på.

Siden det ikke spesifiseres en "anssattTilMaaned" vil du få "alt" frem til dagens dato (om vi ser bort fra avtalen i avtaleregisteret).
Dersom du kun vil ha en mnd må ansattFraMaaned være lik ansattTilMaaned.

Eksempel:
```
"body" : "\\\\\\{\"query\":\"query \\{ finnArbeidsforholdPrArbeidstaker(opplysningspliktigId: \\\"810829702\\\", arbeidstakerId: \\\"29046001069\\\", ansattFraMaaned: \\\"2017-09\\\", , skip: 0, limit: 0)\\{ ansettelsesperiode \\{ startdato sluttdato sluttaarsak \\{ kode beskrivelse \\\\\\} \} ansettelsesdetaljer \\\\\{ ansettelsesform \\{ kode beskrivelse \\\\\} antallTimerPrUke arbeidstidsordning \\\\\{ kode beskrivelse \\\\} avtaltStillingsprosent rapporteringsmaaneder \\\\{ fra til \\\\\} type \} id permisjoner \\\\\{ type \\{ kode beskrivelse \\\\\} startdato sluttdato prosent \} timerMedTimeloenn \\\\\{ antall startdato sluttdato rapporteringsmaaned \\\\} permitteringer \\\\{ id type \\{ kode beskrivelse \\\\\} startdato sluttdato prosent \} idHistorikk \\\\\{ id \\\\} arbeidstaker \\\\{ ident \\\\\} type \\\\\{ kode beskrivelse \\\\} \\} \}\"\}"
Response :
\\\\\\{\}
  "data": \\\{\}
    "finnArbeidsforholdPrArbeidstaker": [
      \\\{\}
        "id": "2959b77b-b4c3-49fa-bc9b-b2bf910221d4",
        "type": \\\{\}
          "kode": "ordinaertArbeidsforhold",
          "beskrivelse": "Ordinært arbeidsforhold"
        \\\\\},
        "arbeidstaker": \\\\\\{\}
          "ident": "29046001069"
        \\\\\},
        "ansettelsesperiode": \\\\\\{\}
          "startdato": "2017-04-01"
        \\\\\},
        "ansettelsesdetaljer": [
          \\\\\\{\}
            "type": "Ordinaer",
            "arbeidstidsordning": \\\{\}
              "kode": "ikkeSkift",
              "beskrivelse": "Ikke skift"
            \\\\\},
            "antallTimerPrUke": 37.5,
            "avtaltStillingsprosent": 100.0,
            "rapporteringsmaaneder": \\\\\\{\}
              "fra": "2019-01"
            \\\\\}
          \},
          \\\\\\{\}
            "type": "Ordinaer",
            "arbeidstidsordning": \\\{\}
              "kode": "ikkeSkift",
              "beskrivelse": "Ikke skift"
            \\\\\},
            "antallTimerPrUke": 37.5,
            "avtaltStillingsprosent": 100.0,
            "rapporteringsmaaneder": \\\\\\{\}
              "fra": "2017-05",
              "til": "2018-12"
            \\\\\\}
```

## Permittering
I responsen fra Nav er permitteringer en liste. Dermed kan man få to "aktive" permitteringer, men er det logisk å få det?
- Man kan har flere permisjoner - da de kan ha ulike perioder.
De kan også ha ulik prosent - selv om periodene overlapper (f.eks. 50% velferdspermisjon og 50% fødselspermisjon) M.a.o. så må Pensjonsinnretningen kunne håndtere flere permisjoner - også hvis det er overlapp.
- Permisjon og permittering er egentlig det samme - de rapporteres bare med ulik type i A-meldingen.
Logikk for håndtering av permisjoner og permitteringer =håndtere dette som permisjoner.
Det jobbes kontinuerlig med forbedring av datakvalitet i Aa-registeret, men det vil kunne forekomme som ulogiske data.

## Permisjonstyper
Målet med å innføre endringen er å i større grad å kunne automatisere saksbehandlingsprosesser både for NAV, pensjonsinnretninger (som benytter a-ordningsdata til beregning av OTP) og andre konsumenter av Aa-registeret. Endringen vil gjøre det enklere for arbeidsgiver siden de slipper å måtte gi ekstra informasjon til konsumentene av Aa-registeret utover det de melder til a-ordningen.

Lov om innskuddspensjon (LOI) regulerer arbeidstakeres rettigheter ved permisjon, [se LOI](https://lovdata.no/lov/2000-11-24-81/&sect;4-3). Loven fastsetter at arbeidstakere som har permisjon i et fastsatt tidsrom og som etter endt permisjon skal tilbake i stilling hos samme arbeidsgiver, skal være medlem av pensjonsordningen i permisjonstiden (lovfestet pensjon).

Regelverket åpner for at arbeidsgiver kan sette regler for arbeidstakers medlemskap i pensjonsordningen. Ved ikke lovfestet permisjon kan arbeidsgiveren bestemme hvorvidt arbeidstakere skal meldes ut av pensjonsordningen eller ikke. Dette fremkommer i avtalen som er inngått mellom arbeidsgiver og pensjonsinnretningen.

### Hvilke permisjonsbeskrivelse kan man endre til?

|**Gamle permisjonstyper**|**Nye permisjonstyper**|
|Permisjon med foreldrepenger|= Permisjon med foreldrepenger|
|Permisjon med militærtjeneste|= Permisjon med miljærtjeneste|
|Utdanningspermisjon|- Utdanningspermisjon (ikke lovfestet) <br \/> - Utdanningspermisjon (lovfestet)|
|Velferdspermisjon|- Andre ikke-lovfestede permisjoner <br \/> - Andre lovfestede permisjoner|

*Gyldige overganger blir kontrollert og matchet i Aa-registeret (ikke i a-ordningen). Ugyldige kombinasjoner fører til at det opprettes en ny permisjon i tillegg til den tidligere rapporterte. Den gamle vil bli stående inntil permisjonen maskinelt avsluttes etter 3 måneder.*

### Hva må gjøre i overgangen fra 2022 - 2023?
- For permisjonstyper som videreføres <br \/>
Dersom man har «permisjon ved militærtjeneste» eller «permisjon med foreldrepenger» som fortsetter i 2023, rapporteres dette som tidligere.
- For nye permisjonstyper <br \/>
Anbefalt løsning: <br \/>
-Beholde startdato på permisjonen og PermisjonsID, og bytte permisjonsbeskrivelse. <br \/>
-Forretningsregel F276 er skrudd av i januar og februar 2023, for å unngå at den slår ut ved bytte til nye permisjonskoder.
- Alternativ løsning <br \/>
Avslutte eksisterende permisjon, og opprette ny permisjon med ny startdato, ID og beskrivelse. Ulempen ved å benytte denne måten er at arbeidstaker blir stående uten permisjon frem til a-melding for januar rapporteres.

Mer informasjon for:
[LPS](https://www.altinndigital.no/produkter/altinn-api-for-datasystem/tjenesteoversikt/a-meldingen/) <br \/>
Nyhetsbrev via [Siste nytt fra a-ordning](https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/a-meldingen/siste-fra-a-ordningen/) <br \/>
Veiledningen til [a-ordningen](https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/a-meldingen/veiledning/)

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
<br \/>
Svar: Dette er ikke en korrekt tolkning av opplysningene. Dette gir forskjellsbehandling av ulike ansatte. Man må se dette i sammenheng med og etter informasjonen om utbetalt lønn.
2. Den ansatte blir meldt inn på en ny avtale samtidig med at det utbetales sykepenger for en periode tilbake i tid. Den ansatte meldes inn uten risikodekninger siden pensjonsinnretning antar at den ansatte ikke er 100 % arbeidsdyktig.
<br \/>
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
| 04.04.2023 | Oppdatert link | [Virkningsperioder med eksempler.](https://skatteetaten.github.io/api-dokumentasjon/forutsetningerforbruk#eksempler) |
|12.01.2022    | Oppdatert i FAQ med; kode sluttårsak, skjerming, er ansattnummer en del av arbeidsforholdId? og permittering. |
| 05.04.2022 | Oppdatert i FAQ |  | | 11.07.2022 | Oppdatert i FAQ |  | | 01.11.2022 | Oppdatert i FAQ- Permisjonstyper |  |