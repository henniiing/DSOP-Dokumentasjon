---
title: "FAQ"
slug: "/dsop_su_faq"
id: dsop_su_faq
---

*Send spørsmål via [saksbehandlingsportalen](https:/online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi) dersom FAQ ikke besvarer ditt spørsmål.*

## Testdata

**Testbrukere og integrasjon** <br  />

<br  />
Både vedtak og meldekort returneres kronologisk etter fra-dato. Vedtaket/meldekortet som er eldst vises først, mens nyeste vedtak/meldekort vises sist.

2. **Hva innebærer det at det er opphold mellom perioden som de ulike vedtakene om AAP gjelder for?**<br  />
For å motta utbetaling av AAP, må personen sende inn meldekort. Selv om personen ikke sender inn meldekort, stanser ikke vedtaket om AAP.
Dette kan medføre at personen har et løpende vedtak om AAP med rett til å motta ytelsen, uten at personen får utbetalt AAP.

4. **Vedtakene i AAP-saken kommer ikke i kronologisk rekkefølge. Hvordan vet vi hvilken periode personen har hatt rett til AAP for?**<br  />
Finnes det bare ett vedtak i saken og dette er et vedtak om 11-5 med utfall «Nei», betyr det at NAV har vurdert at personen ikke har nedsatt arbeidsevne med minst 50 prosent til ethvert yrke.
Finnes det bare ett vedtak i saken og dette er et vedtak om 11-5 med utfall «Ja», er AAP-saken sannsynligvis fortsatt til behandling hos NAV.

6. **Personen har et vedtak om stans med utfall «Ja», og deretter ingen flere vedtak i saken. Hva betyr dette?**<br  />
Som hovedregel kan man ikke ha to vedtak om AAP, som gjelder for samme periode. NAV's fagsystem tillater ikke overlappende vedtak om AAP.
Dersom det er behov for å gjøre endringer i et vedtak, endres til-datoen på vedtaket, som allerede er fattet, slik at denne ikke er lenger fram i tid enn fra-datoen på det nye vedtaket.
(Personen vil imidlertid ha et løpende 11-5-vedtak (vedtak om nedsatt arbeidsevne med minst 50 prosent) i samme periode som personen har AAP. Se spørsmål 5 om betydningen av 11-5-vedtak.)
Unntaksvis kan det framstå som at to vedtak ikke overlapper hverandre. Dette skyldes at saksbehandler har mulighet til å legge inn en "justert" fra dato på et vedtak.
Dersom det legges inn en justert fra dato, vil denne datoen vises som fra dato på vedtaket, selv om det skaper overlapp med et tidligere vedtak.
Personen vil imidlertid ikke kunne motta utbetaling knyttet til vedtaket med justert fra dato for den delen av vedtaket, som overlapper med en stønadsperiode, som det tidligere har blitt utbetalt AAP for på grunnlag av et annet vedtak.

8. **Hva innebærer et vedtak som har til-dato satt til dagen før vedtakets fra-dato?** <br  />
Nei. VedtaksID følger ikke av hvilken periode vedtaket gjelder for. VedtaksID settes når vedtaket opprettes.
I en del saker opprettes vedtak som gjelder for perioder forut for tidligere innvilgede perioder, etter at personen allerede har mottatt AAP en stund.

10. **Kan en person innvilges AAP for flere år fram i tid?**<br  />
Vedtak om AAP innenfor den ordinære delen av stønadsperioden (fire år i saker som startet å løpe før 2018, tre år i saker som startet etter 2018) fattes i de fleste saker automatisk.
Vedtak som innvilger videre rett fattes da 30 dager før det forrige vedtaket i saken løper ut.
Saker innenfor ordinær stønadsperiode som av ulike årsaker ikke kan håndteres automatisk i fagsystemet og saker hvor personens rett til AAP utover ordinær stønadsperiode skal vurderes, håndteres manuelt.
Det vil slik variere når disse vedtakene blir fattet. Vedtak om AAP fattes alle dager, forholdsvis jevnt fordelt utover året.

12. **Starter en meldekortperiode alltid å løpe på en mandag?** <br  />
Ferie vises ikke i meldekorthistorikken. Ja, det sendes meldekort i perioder man tar ut ferie.
Uttak av ferie etter ferieloven og utbetaling av opptjente feriepenger påvirker ikke AAP og skal ikke føre til reduksjon av AAP jfr &sect; 11-24 3. ledd.
Det er ulikt sykepenger hvor uttak av ferie forskyver sykepengeperioden.

14. **Vi ser på meldekorthistorikken til et av testcasene at det i noen tilfeller er to meldekort som dekker samme periode. Hva er årsaken til dette?** <br  />
Meldekortdata oppgis som sum timer meldt i perioden, meldekortperioden er alltid (bortsatt fra den første som kan være kortere) 2 uker fra mandag til søndag og full arbeidstid per uke er 37,5 timer
slik at å regne ut "uføregrad" er en enkel brøk. Vi får i utgangspunktet ikke flere detaljer enn dette, men NAV har i sine systemer oversikt over når timene i perioden er oppgitt,
så om man bruker datoparametere i et kall vil man kun få returnert timer opptjent innenfor det oppgitte intervallet.

16.	**På hvilket tidspunkt vil det foreligge et nytt pengevedtak når det som er aktivt nærmer seg tom dato(og man er innenfor rammene av rammevedtaket)** <br  />
Dette er realistiske eksempler. Det er vanlig at 11-5 vedtaket har en tidligere fra dato enn det første pengevedtaket, særlig for personer som kommer fra sykepenger, men også for andre.
Det kan også være større tidsrom mellom de to fra-datoene, en måned er ikke uvanlig.

18.	**Det er ganske mange tilfeller der selskapet ikke finner 11-5 vedtaket (nedsatt arbeidsevne vedtak), selv om selskapet i følge bruker har søkt. Har det skjedd en endring i hvordan man håndterer 11-5 vedtaket og når disse er tilgjengelige i APIet? I de aller fleste tilfellene viser det seg at det dukker opp vedtak etter hvert.** <br  />
I denne saken hadde det første AAP vedtaket Ny rettighet blitt erstattet med et G-reguleringsvedtak(endringsvedtak) fra fraDato. Det første vedtaket blir da ugyldiggjort og har fått tilDato satt til dagen før fraDato. Vedtak med tilDato før fraDato blir ikke returnert. Dette kan skje når AAP iverksettes i perioden mellom 1. mai og G-reguleringen og fraDato på vedtaket er etter 30. april. G-reguleringen skjer som regel i slutten av mai/overgangen mai-juni.

20.	**Case på AAP med 2 ny rettighet vedtak, innvilget fra 31.07.19. Kunden bekreftet at vedkommende har innvilget AAP fra 02.12.19. Hva er årsaken til at selskapet får opp feil dato?** <br  />
Nei, AAP som sykepengeerstatning gis når personen ikke har opparbeidet seg ny rett til sykepenger. Brukere må sende inn meldekort på vanlig måte for å få utbetalt AAP.

22.	**Dersom en bruker får avslag på AAP pga ikke nedsatt arbeidsevne, ser man et avslagsvedtak?** <br  />
Det stemmer at uføretidspunktet ofte sammenfaller med sykmeldingstidspunktet. Ikke realistiske testcase.

2. **Endret inntekt før uførhet, hvorfor går uføregraden opp når inntekten går opp?** <br  />
Det er i forbindelse med revurdering, som følge av inntektsendring at dere vil se et beløp under "inntekt brukt i avkortningen".

4. **Vil inntektsgrensen vises noen gang?** <br  />
Ja, man skal som regel få to vedtak. Her er det lagt inn vedtak om avslag først, deretter en klage. som ligger med status til behandling.
Det er kun i tilfeller hvor klagen gjelder avslag på søknad om uføretrygd at NAV deler opplysningen klage ved avslag.

6.	**Bruker har fått økt uføretrygd fra 50-100% men, det er brukt forskjellige IFU(inntekt før uførhet) på vedtakene, er dette riktig?**<br  />
Virkningstidspunktet for uføre har alltid dato fom 1. en måned. Dersom sykepenger eller AAP utbetales til midten av måneden eller en annen dato, blir det motregning.
Selskap må vente til dere får sykepenger for å kunne beregne dere frem til når utbetalingstidspunktet starter.

## Sykepenger

Under arbeid

## Endringslogg

| Dato         | Endring i dokumentasjon   |
| ------------- | ------------------------ |  | |   |
