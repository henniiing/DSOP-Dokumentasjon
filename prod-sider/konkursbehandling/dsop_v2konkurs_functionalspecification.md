---
title: "Dsop V2konkurs Functionalspecification
id: dsop_v2konkurs_functionalspecification"
slug: "dsop_v2konkurs_functionalspecification"
keywords: ["sample"]
sidebar: "main_sidebar
permalink: dsop_v2konkurs_functionalspecification.html"
folder: "section1"
---

Denne siden beskriver det funksjonelle i tjenesten DSOP Konkursvarsel. Beskrivelsen er en sammenstilling av behov og
krav som er avklart gjennom samarbeid mellom pilotbankene (Sparebank 1, DNB, Nordea) og Brønnøysundregistrene. Formålet
er å gi en kortfattet og enkel beskrivelse av tjenesten for nye brukere. Dette gjelder deltakere fra forretningsside,
ledelse, teknisk personell (arkitekter og utviklere) og eventuelt andre som måtte ha behov for en innføring i tjenesten.
Justeringer vil komme på bakgrunn av erfaringer i pilotperioden og Brønnøysundregistrene ønsker gjerne innspill som kan
forbedre dokumentet.

## Bakgrunn

Ved åpning av konkurs, tvangsavvikling og tvangsoppløsning oppnevner tingrettene en bostyrer som skal, med mindre retten
beslutter å gjøre det selv, sørge for at det varsles om en slik åpning og at midler i skyldnerens bo sikres, se
konkursloven &sect;§ 77 jf. 79 og 80.

For å bistå bostyrer med å varsle, er det laget en tjeneste, Konkursvarsel, som skal forenkle de overnevnte manuelle
arbeidsoppgavene slik at disse kan løses maskinelt både av bostyrer og finansforetakene. Tjenesten innebærer at alle
finansforetak som bruker tjenesten, varsles digitalt om nye konkursåpninger for å kunne foreta seg nødvendige handlinger,
som blant annet å sperre skyldnerens konti som ledd i sikring av eiendelene. *Konkursvarsel* varsler finansforetak som
benytter tjenesten opptil 32 ganger per døgn innenfor Konkursregisterets ordinære åpningstid.

Tjenesten *Konkursvarsel* er gratis for finansforetakene. Tidligere praksis for finansforetak er vært å hente
konkursåpninger via en abonnementstjeneste hos Brønnøysundregistrene. Denne abonnementstjenesten oppdateres sjeldnere
(kun hver time) og er en tjeneste hvert finansforetak må betale for. Dette slipper man ved å benytte tjenesten
*Konkursvarsel*, som for øvrig er oftere oppdatert.

I forbindelse med utviklingen av tjenesten *Konkursvarsel*, er det gjort endringer i konkursloven &sect; 79. Etter denne
bestemmelsen kan nå Konkursregisteret på vegne av bostyrer sende automatisk melding til registre og finansforetak om at
konkurs er åpnet i skyldnerens bo. Slik det åpnes for &sect; 79 femte ledd, utarbeides det per tid forskriftsbestemmelser
som vil gi en nærmere beskrivelse av blant annet konkursvarselet.

## Beskrivelse av tjenesten DSOP Konkursbehandling - Konkursvarsel

Tjenesten vil gjøre tilgjengelig konkursvarsler fra Konkursregisteret. Innholdet i varslene er fire forskjellige typer
varsel (se pkt. 2 for mer informasjon om type).

(Bank varsles og åpner konti som er stengt som følge av "aapning")                            |
| "oppheving"  | Dette gjelder endring som følge av en ankeavgjørelse på åpning, nevnt i pkt. 1.(Bank varsles om at bobehandlingen er avsluttet)               |

Varslene identifiserer den varselet gjelder (debitor) med organisasjonsnummer eller fødselsnummer/d-nummer. Ved varsel
på fødselsnummer/dnr. (personlig konkurs) vil det i de fleste tilfeller finnes en eller flere tilknyttede enheter. Det
vil her gjelde ENK (Enkeltpersonforetak) og TVAM (tvangsregistrering for MVA fra Skatteetaten) som er knyttet opp mot
personer som det er åpnet personlig konkurs på. (TVAM vil forekomme svært sjelden). Dette vil fremgå av ressurslinken
som følger varselet.

Alle de ulike typene av konkursvarsel vil være knyttet opp mot egne datasett. De ulike datasettene er tilgjengelig via
ressurs-linker angitt på hvert enkelt konkursvarsel. I "DSOP Konkursvarsel: API-dokumentasjon Versjon1.1.0." er
eksempler på datasett som er hentet ut i ressurs-link angitt for ulike konkursvarsel. Eksemplene er ikke uttømmende med
tanke på hvilke typer datasett og innholdet i disse som tjenesten ender opp med å kunne avgi.

Datasettene avgis i JSON-format.

### Estimert volum og tilgjengelighet

Statistikk fra tidligere år gir en indikasjon på hvor mange, og hvilken type varsel tjenesten vil gi i løpet av et år.
* "aapning" ca.6300*
* "sletting" ca. 5*
* "oppheving" ca. 10*
* "avslutning" ca. 6000

**(Disse tallene er beregnet utfra tall og tendenser fra 2014 til 2018, før utbruddet av koronapandemien).*

Tjenesten konkursvarsel blir oppdatert med nye varsel alle arbeidsdager, hvert 15.minutt mellom kl.08:00 -16:00,
maksimalt 32 ganger per døgn. Oppdateringen skjer i samsvar med kunngjøring av nye konkurser på Brønnøysundregistrenes
hjemmeside brreg.no.

Tjenesten vil være tilgjengelig 24/7.

### Tilgang til tjenesten

Denne tjenesten krever at finansforetaket blir autorisert for bruk. Tilgangen styres av Konkursregisteret på bakgrunn av
avtale mellom Brønnøysundregistrene og den enkelte bruker. Dette gjelder tilgang til både testmiljø med fiktive data og
produksjonsmiljøet. Autentisering av bruker vil skje ved bruk av virksomhetssertifikat. Brønnøysundregistrene støtter
både Commfides og Buypass.

For mer informasjon se DSOP Konkursvarsel: API-dokumentasjon Versjon 1.1.1

### Bruk av tjenesten

Når et autorisert finansforetak ønsker å ta i bruk tjenesten kan det gjøres et kall med eller uten parameter.

Når konkursvarsler er lest vil finansforetaket selv kunne holde kontroll på tidsstempelet for siste leste konkursvarsler
som indikerer hvor langt tilbake i tid bank er oppdatert. Tidsstempel benyttes i oppdatert -parameter ved hver
forespørsel mot konkursvarsel. Hvor hyppig finansforetak ønsker å gjøre forespørsler mot tjenesten, vil være opp til
hver enkelt bank/bruker.

- Ved første gangs kall av tjenesten kalles denne metoden: konkursvarsler/oppdatert/ /, hvor registreringstidspunkt er et tidsstempel med dato få dager tilbake i tid.
- Ved første gangs kall av tjenesten kalles denne metoden: konkursvarsler/oppdatert/ /, hvor registreringstidspunkt er et tidsstempel med dato få dager tilbake i tid.
- Ved kall til konkursvarsler/ med UUID som parameter vil man få opp mer informasjon om et enkelt varsel.

For mer informasjon se DSOP Konkursvarsel: API-dokumentasjon Versjon 1.1.0


**Tenkt flyt hos finansforetak**

1.	Finansforetak kaller tjeneste og mottar konkursvarsler.
2.	Finansforetak går gjennom listen av konkursvarsler og identifiserer hvilke av debitorene de har et kundeforhold til.
3.	Finansforetak benytter link i konkursvarsel til henting av utvidet datasett fra konkursvarsel.
4.	Finansforetak utfører handling, sperrer/åpner konto på kunde.

### Flytdiagram

/(images/Konkursbehandling flyt.JPG)

## Endringslogg

| Dato | Endring | Link i dokumentasjon |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- |
| 01.04.22 | Revidert dokument generelt, revidert av Brreg og Bits. Oppdatert iht. hjemler og godkjente endringer som sendes ut i rundskriv 1. april. |  |

