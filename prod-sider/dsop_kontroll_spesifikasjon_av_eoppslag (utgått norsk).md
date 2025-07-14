---
title: "Dsop Kontroll Spesifikasjon Av Eoppslag (UtgåTt Norsk)
id: dsop_kontroll_spesifikasjon_av_eoppslag (utgått norsk)"
slug: "dsop_kontroll_spesifikasjon_av_eoppslag (utgått norsk)"
keywords: ["sample"]
sidebar: "main_sidebar
permalink: dsop_kontroll_spesifikasjon_av_eoppslag.html"
folder: "section1"
---

Denne siden beskriver tjenestene som finansinstitusjonene har implementert for å tilby de
offentlige etatene oppslag på kontoopplysninger. Tjenestene realiseres med utgangspunkt i RESTarkitekturstil og HTTP som transportmekanisme. For mer detaljert beskrivelse av
eOppslagstjenestene, se «DSOP Kontrollinformasjon Arkitekturdokument». Beskrivelse av
tjenestemodeller er å finne i egne dokumenter.

Tjenestene er definert slik at de sammen eller hver for seg kan støtte ulike bruksscenario slik som:
* Oppslag på kontoopplysninger med saldo per dagens dato for person som både er kontoeier og
disponent.
* Uthenting av transaksjonshistorikk for en bestemt periode

Den funksjonelle spesifikasjonen beskriver dette i mer detalj.

| Navn | Account |
| ---------- | ---------- |
| Funksjonalitet | Dette API'et støtter 5 ulike operasjoner: <br \/>- Liste over konti for part <br \/> - Hente kontodetaljer med saldi <br \/> - Transaksjonshistorikk for konto <br \/> - Kort knyttet til konto <br \/> - Rolleinnehavere på konto |
| Grensesnittype | REST API |
| Protokoll | HTTP |
| Transport | HTTPS |
| Tilstand | Tilstandsløs |
| Formater | JSON (default) |

*Merk: API endepunktene med eksempler ligger i Open API specification-dokumentet*

## API metoder
Tjenestene støtter oppslag på informasjon og det er derfor kun aktuelt å støtte HTTP-metoden GET.
Det gis en feilmelding dersom forespørselen inneholder andre HTTP-operasjoner, se Feilhåndtering.
Det skal gis HTTP status kode 200 ved vellykkede kall.

## Søk på metode
For informasjon som endres over tid er den generelle føringen at verdien ved slutt-tidspunktet oppgis
i responsen. For søk der det ikke er angitt periode, så betyr det at verdi ved forespørselstidspunktet
skal angis (f.eks. saldo).

Enkelte verdier slik som adresse, kontoeiers navn osv. kan ha vært endret over tid uten at banken har
historikk på informasjonen. I de tilfellene skal gjeldende verdi angis i responsen evt. verdien ved slutttidspunktet dersom kunden ikke lenger har et aktivt kundeforhold.

## Dataformater
Alle kall skal gis i JSON-format og responsene skal være i format JWE (compact serialization). Se
forøvrig Sikkerhetsdokumentet. Feilmeldinger skal ikke krypteres. Content-type må settes for alle
responser, hhv. application/jose for responser til vellykkede kall og og application/json for responser
til feilede kall.

I test bør det være mulig å få resultater ukryptert, gjennom at klienten setter Accept-headeren
(application/json). Denne funksjonen skal ikke være tilgjengelig i produksjon.

Manglende/tommer verdier skal representeres slik som er vanlig for formatet, det vil si angi "null" for
JSON.

## Feilhåndtering
Alle feil som oppstår ifbm. tjenestekallet vil følge standarden for [HTTP status koder](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
, men i tillegg skal det også gis en
feilrespons. Feilresponsen skal inneholde en feilkode for maskinell håndtering, samt en lesbar
beskrivelse av feilen som har oppstått.

Som hovedregel er 400-serien forbeholdt klientfeil som må rettes før man forsøker på nytt, mens
500-serien skal brukes for ulike tekniske feil hos tjenestetilbyderen (f.eks. nedetid på database
e.l.). For å håndtere tekniske feil som oppstår hos tilbyder kan klienten velge å ha automatiske retrymekansimer.

### Oversikt over feilkoder
Se Open API spesifikasjonen for en oversikt over feilkoder for de ulike endepunktene.

## Logging

### CorrelationID

Tjenesten skal støtte logging av en "CorrelationID" for å forenkle feilsøking.

Brukerne av API'ene har ansvaret for å skape en unik identifikator (GUID eller lignende) som følger forespørselen ende til ende, og som logges underveis. Dette gjøres gjennom at det defineres en Http-header som brukes for dette formålet. Eksempel:

| CorrelationID: 14fbc062-aacb-4449-93c1-85c352d387a4 |

### AccountInfoRequestID

For å muliggjøre gjenfinning av en (logisk) forespørsel på en part skal tjenesten støtte logging av "AccountInfoRequestID".

Et eksempel på bruk av «AccountInfoRequestID» er et scenario der en bank blir saksøkt for å ha utlevert taushetsbelagt informasjon til Politiet. Banken vil da fremlegge en (eller flere) «AccountInfoRequestID» for Politiet som mottok kontoinformasjonen fra den som saksøker banken. Basert på denne nøkkelen kan Politiet hente frem, fra sitt arkiv, underlaget de hadde da de sendte begjæringen om utlevering av kontoinformasjon til banken (for eksempel en signatur fra en politijurist).

Denne skapes av konsumentene etter samme mønster som «CorrelationID» (se over).
* Samme AccountInfoRequestID skal benyttes for alle api-kall som er knyttet til en forespørsel, merk at det også kan gjelde flere parter.
* Samme AccountInfoRequestID vil også bli gjenbrukt på tvers av flere banker dersom kunden har flere kundeforhold i perioden.
* Det skal være mulig for konsumentene og tilbyderne å gjenfinne en sak (eller annen årsak for forespørselen) på bakgrunn av denne «AccountInfoRequestID».

| AccountInfoRequestID: 14fbc062-aacb-4449-93c1-85c352d387a4 |

## Versjonering
Tjenesten skal skal følge prinsippene for [semantisk versjonering](https://semver.org/ ). Brukerne av
APIene er ansvarlige for at deres klienter fortsatt fungerer dersom det innføres endringer som er
"Non-breaking", f.eks. endring av rekkefølge eller at det legges til nye felter (se ellers prinsipper for
[Tolerant reader](https://martinfowler.com/bliki/TolerantReader.html).

Kun MAJOR versjoner tas med i api URL'ene (altså v2, v3 osv), og innføres når behovet dukker opp.
Dersom det oppstår flere versjoner av api'ene og det også etterhvert melder seg behov for utfasing
av eldre versjoner må deres brukere gis rimelig tid til å bytte til ny versjon (eks. 4 måneder), dette vil
spesifiseres nærmere i tjenesteavtalene.

## Store resultatsett
Tjenesten må støtte oppdeling av responsen (paginering) dersom forespørselen fører til store
resultatsett. Dette skal gjøres gjennom lenking, tabellen nedenfor viser kodeverdiene som skal
benyttes. Det skal alltid benyttes relative URL'er. Det bør tilstrebes at antallet elementer på hver side
er så høy at uthentingen blir så effektiv som mulig. For transaksjoner er det ønskelig med minimum
1000.

| Kodeverdi |  |  | ------------ | ------------ |
| next | Neste side i resulatsettet. Fravær av 'next' vil tolkes som at dette er siste side i resultatsettet, og må derfor tas bort dersom det er tilfellet|
| self | (Valgfri) Nåværende side i resultatsettet |
| prev | (Valgfri) Nåværende side i resultatsettet |
| last | (Valgfri) Siste side i resultatsettet |

### Eksempel lenking

```
"links": [\\\\\\\\{\}
	"rel": "self",
	"href": "/accounts/58758848484/transactions?fromDate=2018-01-01&amp;amp;toDate=2018-01-18"
\\\\\\\},
\\\\\\\\{\}
	"rel": "next",
	"href": "/accounts/58758848484/transactions?fromDate=2018-01-01&amp;amp;toDate=2018-01-18"
\\\\\\\},
\\\\\\\\{\}
	"rel": "last",
	"href": "/accounts/58758848484/transactions?fromDate=2018-01-01&amp;amp;toDate=2018-01-18"
\\\\\\\}]
```

## Mangelfulle svar
Dersom tjenestetilbyder ikke kan gi fullstendig svar pga. at informasjon for angitt periode ikke er
tilgjengelig online*, må klienten gjøres oppmerksom på at det finnes mer data. Dette gjøres gjennom
et eget element "responseStatus" i hver respons (for mer informasjon se [ResponseStatus](https://dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#responsestatus).

**Merk: Dersom grunnen til at et fullstendig svar ikke kan gis er en driftsfeil hos tjenestetilbyder (f.eks.
driftsavbrudd i en av de bakenforliggende systemene) skal det gis en feilmelding slik det er beskrevet
i «2.4 Feilhåndtering» (responseStatus = partial skal altså ikke brukes i slike situasjoner).*

## Endringslogg

| Dato | Endring | Link i dokumentasjon |
|-------------| ------------------------|
| 02.01.20 | Lagt til informasjon om AccountInfoRequestID | [Klikk her](https://dokumentasjon.dsop.no/dsop_kontroll_spesifikasjon_av_eoppslag.html#logging) |