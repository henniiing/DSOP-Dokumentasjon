---
title: "FAQ"
slug: "dsop_su_faq"
id: "dsop_su_faq"
keywords: ["sample"]
---

*Send spørsmål via [saksbehandlingsportalen](https://online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi) dersom FAQ ikke besvarer ditt spørsmål.*

## Testdata

**Testbrukere og integrasjon** <br \/>
Formålet med dataene er å teste og verifisere at integrasjonen mot tjenestene til NAV: AAP, Uføretrygd og Sykepenger fungerer. <br \/>
<br \/> - Testpersonene/testcasene som leveres er ment å dekke behovet for integrasjon.
<br \/> - Testdataene som leveres er ikke ment å dekke behovet selskapene har for å teste datakvalitet og forretningsregler
<br \/> - Ved utarbeidelse av forretningsregler for å tolke dataene, anbefales det at selskapene utarbeider egne testcaser, eller innhenter reelle data fra produksjon.

## Maskinporten
*Under arbeid*

## Arbeidsavklaringspenger (AAP)

1. **Hva styrer rekkefølgen for hvordan vedtak og meldekort vises?**<br \/>
Både vedtak og meldekort returneres kronologisk etter fra-dato. Vedtaket/meldekortet som er eldst vises først, mens nyeste vedtak/meldekort vises sist.

2. **Hva innebærer det at det er opphold mellom perioden som de ulike vedtakene om AAP gjelder for?**<br \/>
Dersom vedtakene i en AAP-sak ikke løper kant-i-kant, betyr det at personen ikke har mottatt AAP i hele tidsrommet, som vedtakene dekker.
Tilsvarende kan stans-vedtak, som løper i deler av tidsrommet også innebære at personen ikke har hatt rett til AAP i hele perioden.
Dette kan skyldes ulike forhold, som opphold i utlandet utover hva regelverket for AAP åpner for, eller at personen har mottatt en annen ytelse fra NAV i perioden.

3. **Hvordan kan en person ha hatt et løpende vedtak uten at det finnes meldekort for samme periode?**<br \/>
For å motta utbetaling av AAP, må personen sende inn meldekort. Selv om personen ikke sender inn meldekort, stanser ikke vedtaket om AAP.
Dette kan medføre at personen har et løpende vedtak om AAP med rett til å motta ytelsen, uten at personen får utbetalt AAP.

4. **Vedtakene i AAP-saken kommer ikke i kronologisk rekkefølge. Hvordan vet vi hvilken periode personen har hatt rett til AAP for?**<br \/>
Vedtakene i en AAP-sak blir ikke nødvendigvis fattet i kronologisk rekkefølge. Dette kan skyldes flere ting. Av og til er det tekniske årsaker i fagsystemet som gjør at vedtakene kommer i en annen rekkefølge.
Av og til skyldes dette at opplysninger om personens rett til AAP ikke kommer til NAV i kronologisk rekkefølge eller at NAV må avvente opplysninger fra andre før ytelsen kan innvilges for en periode.
For å få oversikt over hele perioden personen har hatt rett til AAP, må man derfor se på alle vedtakene i en sak, og ikke bare vedtaket med det laveste og høyeste nummeret.

5. **Det finnes bare ett vedtak i saken, dette er et vedtak om 11-5. Hva innebærer dette?**<br \/>
Finnes det bare ett vedtak i saken og dette er et vedtak om 11-5 med utfall «Nei», betyr det at NAV har vurdert at personen ikke har nedsatt arbeidsevne med minst 50 prosent til ethvert yrke.
Finnes det bare ett vedtak i saken og dette er et vedtak om 11-5 med utfall «Ja», er AAP-saken sannsynligvis fortsatt til behandling hos NAV.

6. **Personen har et vedtak om stans med utfall «Ja», og deretter ingen flere vedtak i saken. Hva betyr dette?**<br \/>
Dersom NAV vurderer om retten til AAP skal stanses, fattes det vedtak med vedtakskode «S» (for stans).
Når vedtaket er fattet, får dette utfall «Ja». Fattes det vedtak med andre vedtakskoder, betyr utfall «Ja» at personen har blitt innvilget rett til å motta AAP.

7. **Kan en person ha to vedtak om AAP som gjelder for samme periode?**<br \/>
Som hovedregel kan man ikke ha to vedtak om AAP, som gjelder for samme periode. NAV's fagsystem tillater ikke overlappende vedtak om AAP.
Dersom det er behov for å gjøre endringer i et vedtak, endres til-datoen på vedtaket, som allerede er fattet, slik at denne ikke er lenger fram i tid enn fra-datoen på det nye vedtaket.
(Personen vil imidlertid ha et løpende 11-5-vedtak (vedtak om nedsatt arbeidsevne med minst 50 prosent) i samme periode som personen har AAP. Se spørsmål 5 om betydningen av 11-5-vedtak.)
Unntaksvis kan det framstå som at to vedtak ikke overlapper hverandre. Dette skyldes at saksbehandler har mulighet til å legge inn en "justert" fra dato på et vedtak.
Dersom det legges inn en justert fra dato, vil denne datoen vises som fra dato på vedtaket, selv om det skaper overlapp med et tidligere vedtak.
Personen vil imidlertid ikke kunne motta utbetaling knyttet til vedtaket med justert fra dato for den delen av vedtaket, som overlapper med en stønadsperiode, som det tidligere har blitt utbetalt AAP for på grunnlag av et annet vedtak.

8. **Hva innebærer et vedtak som har til-dato satt til dagen før vedtakets fra-dato?** <br \/>
Vedtak med til-dato satt til dagen før fra-datoen er vedtak som har blitt ugyldiggjort.
Ved vurderingen av om personen har hatt rett til AAP i perioden det spørres for, kan det ses bort fra slike vedtak.

9. **Kan man finne første og siste dato en person har hatt AAP ved å finne vedtakene med høyeste og laveste ID?** <br \/>
Nei. VedtaksID følger ikke av hvilken periode vedtaket gjelder for. VedtaksID settes når vedtaket opprettes.
I en del saker opprettes vedtak som gjelder for perioder forut for tidligere innvilgede perioder, etter at personen allerede har mottatt AAP en stund.

10. **Kan en person innvilges AAP for flere år fram i tid?**<br \/>
Regelverket tillater at det fattes AAP for maksimalt ett år fram i tid. Selv om en person har fått innvilget AAP, innebærer ikke det at personen vil ha rett til å motta AAP de tre neste årene.
Videre rett til AAP vurderes i løpet av stønadsperioden.

11. **Når fattes det vanligvis nytt vedtak om AAP i en sak hvor personen allerede er innvilget ytelsen?** <br \/>
Vedtak om AAP innenfor den ordinære delen av stønadsperioden (fire år i saker som startet å løpe før 2018, tre år i saker som startet etter 2018) fattes i de fleste saker automatisk.
Vedtak som innvilger videre rett fattes da 30 dager før det forrige vedtaket i saken løper ut.
Saker innenfor ordinær stønadsperiode som av ulike årsaker ikke kan håndteres automatisk i fagsystemet og saker hvor personens rett til AAP utover ordinær stønadsperiode skal vurderes, håndteres manuelt.
Det vil slik variere når disse vedtakene blir fattet. Vedtak om AAP fattes alle dager, forholdsvis jevnt fordelt utover året.

12. **Starter en meldekortperiode alltid å løpe på en mandag?** <br \/>
Ja, en meldekortperiode løper alltid over 14 dager, og starter på en mandag og slutter på en søndag.
Dersom en person har vedtak fra eksempelvis onsdag 12. mai 2015, vil første meldekort gjelde fra mandag 10. mai 2015. Personen vil likevel ikke ha fått beregnet AAP før fra 12. mai.

13. **Hvordan vises det i meldekorthistorikken om en bruker tar ut ferie? Sendes det meldekort i perioden man tar ut ferie?** <br \/>
Ferie vises ikke i meldekorthistorikken. Ja, det sendes meldekort i perioder man tar ut ferie.
Uttak av ferie etter ferieloven og utbetaling av opptjente feriepenger påvirker ikke AAP og skal ikke føre til reduksjon av AAP jfr &sect; 11-24 3. ledd.
Det er ulikt sykepenger hvor uttak av ferie forskyver sykepengeperioden.

14. **Vi ser på meldekorthistorikken til et av testcasene at det i noen tilfeller er to meldekort som dekker samme periode. Hva er årsaken til dette?** <br \/>
Bruker har fått byttet meldesyklus. Dette kan skje, men skjer ikke så ofte. En dag/dato kan bare beregnes en gang. Antall timer arbeid i hele perioden de to kortene dekker er derfor riktig.

15. **Meldekort-timer** <br \/>
Meldekortdata oppgis som sum timer meldt i perioden, meldekortperioden er alltid (bortsatt fra den første som kan være kortere) 2 uker fra mandag til søndag og full arbeidstid per uke er 37,5 timer
slik at å regne ut "uføregrad" er en enkel brøk. Vi får i utgangspunktet ikke flere detaljer enn dette, men NAV har i sine systemer oversikt over når timene i perioden er oppgitt,
så om man bruker datoparametere i et kall vil man kun få returnert timer opptjent innenfor det oppgitte intervallet.

16.	**På hvilket tidspunkt vil det foreligge et nytt pengevedtak når det som er aktivt nærmer seg tom dato(og man er innenfor rammene av rammevedtaket)** <br \/>
Normalt skjer dette tidligst 30 dager før løpende pengevedtak utløper. Forlengelse kan også skje nærmere til-dato på løpende vedtak og også etter at vedtaket er utløpt.

17.	**Vi opplever at noen av casene kommer med forskjellig fra dato på virkningsperiode på 11-5 vedtaket (nedsatt arbeidsevne) og virkningsperiode på innvilgelse av søknad vedtaket** <br \/>
Dette er realistiske eksempler. Det er vanlig at 11-5 vedtaket har en tidligere fra dato enn det første pengevedtaket, særlig for personer som kommer fra sykepenger, men også for andre.
Det kan også være større tidsrom mellom de to fra-datoene, en måned er ikke uvanlig.

18.	**Det er ganske mange tilfeller der selskapet ikke finner 11-5 vedtaket (nedsatt arbeidsevne vedtak), selv om selskapet i følge bruker har søkt. Har det skjedd en endring i hvordan man håndterer 11-5 vedtaket og når disse er tilgjengelige i APIet? I de aller fleste tilfellene viser det seg at det dukker opp vedtak etter hvert.** <br \/>
Nei, det har ikke skjedd noen endring. Det kan ta tid fra bruker søker til 11-5 vedtaket er ferdigbehandlet og fattet/iverksatt. Vedtaket er tilgjengelig med en gang det er iverksatt. Det skal ikke være med i responsen før det er iverksatt.

19.	**Et case på AAP som har et 11-5 vedtak + mange endringsvedtak. Det er ikke et innvilget vedtak før over et år etter første endringsvedtak. Skal ikke det alltid være et innvilget vedtak i bunn?** <br \/>
I denne saken hadde det første AAP vedtaket Ny rettighet blitt erstattet med et G-reguleringsvedtak(endringsvedtak) fra fraDato. Det første vedtaket blir da ugyldiggjort og har fått tilDato satt til dagen før fraDato. Vedtak med tilDato før fraDato blir ikke returnert. Dette kan skje når AAP iverksettes i perioden mellom 1. mai og G-reguleringen og fraDato på vedtaket er etter 30. april. G-reguleringen skjer som regel i slutten av mai/overgangen mai-juni.

20.	**Case på AAP med 2 ny rettighet vedtak, innvilget fra 31.07.19. Kunden bekreftet at vedkommende har innvilget AAP fra 02.12.19. Hva er årsaken til at selskapet får opp feil dato?** <br \/>
Kunden har fått AAP i stedet for sykepenger, da AAP er en høyere ytelse enn sykepenger.

21.	**Er det slik at de som mottar sykepengeerstatning, som ikke har nådd maksdato for sykepenger, har fått innvilget pengevedtak for AAP, der sykepengene gir en høyere utbetaling? I disse tilfellene leverer søkerne likevel meldekort selv om de ikke får utbetalt fra AAP ytelsen?** <br \/>
Nei, AAP som sykepengeerstatning gis når personen ikke har opparbeidet seg ny rett til sykepenger. Brukere må sende inn meldekort på vanlig måte for å få utbetalt AAP.

22.	**Dersom en bruker får avslag på AAP pga ikke nedsatt arbeidsevne, ser man et avslagsvedtak?** <br \/>
Nei, vi får kun et vedtak på nedsatt arbeidsevne med Utfall Nei, ikke noe avslagsvedtak i tillegg.

## Uføretrygd

1. **Virkningstidspunktene i mange av casene er for nærme uføretidspunktene. Er det noen grunn til det? Vil ikke normalt sett ved uføretidspunktet være dato for når du mottok sykepenger?** <br \/>
Det stemmer at uføretidspunktet ofte sammenfaller med sykmeldingstidspunktet. Ikke realistiske testcase.

2. **Endret inntekt før uførhet, hvorfor går uføregraden opp når inntekten går opp?** <br \/>
Uføregrad er beregnet med en inntekt før uførhet på f.eks. kr 484127,- og en inntekt etter uførhet på f.eks. kr 250 000,-. Inntekt før uførhet er justert med endringer i grunnbeløpet frem til virkningstidspunktet.
Uføregraden før avrunding er 48,36%. Ettersom inntekt før uførhet er høyere enn før, og inntekt etter uførhet den samme, blir uføregraden høyere.

3. **I hvilke tilfeller vil vi se beløp i "Inntekt brukt i avkortningen?". Er det kun ved revurdering av vedtak og ikke ved første søknad?** <br \/>
Det er i forbindelse med revurdering, som følge av inntektsendring at dere vil se et beløp under "inntekt brukt i avkortningen".

4. **Vil inntektsgrensen vises noen gang?** <br \/>
Pilot selskapene var enige om at det ikke var behov for å få informasjon om inntektsgrense. Det er derfor ikke tatt høyde for.

5. **Når skal man klage ved avslag? Skal det være to vedtak, et avslag og en klage på avslag? Hva gjør man, hvor man ikke får opp dette?** <br \/>
Ja, man skal som regel få to vedtak. Her er det lagt inn vedtak om avslag først, deretter en klage. som ligger med status til behandling.
Det er kun i tilfeller hvor klagen gjelder avslag på søknad om uføretrygd at NAV deler opplysningen klage ved avslag.

6.	**Bruker har fått økt uføretrygd fra 50-100% men, det er brukt forskjellige IFU(inntekt før uførhet) på vedtakene, er dette riktig?**<br \/>
Ja, ved økning av uføregrad kan det bli fastsatt ny IFU.

7.	**Uføretrygdvedtakene alltid har fom dato 1. i måneden, selv om ofte maskdato for sykepenger vil være i midten av måneden. Hvordan kan selskapet sjekke fra hvilken dato uføretrygd egentlig gjelder?** <br \/>
Virkningstidspunktet for uføre har alltid dato fom 1. en måned. Dersom sykepenger eller AAP utbetales til midten av måneden eller en annen dato, blir det motregning.
Selskap må vente til dere får sykepenger for å kunne beregne dere frem til når utbetalingstidspunktet starter.

## Sykepenger

Under arbeid

## Endringslogg

| Dato         | Endring i dokumentasjon   |
| ------------- | ------------------------ |  | |   |
