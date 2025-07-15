---
title: "Funksjonell spesifikasjon Konkursvarsel"
slug: "dsop_konkurs_funksjonellspesifikasjon"
id: "dsop_konkurs_funksjonellspesifikasjon"
---

Denne siden beskriver det funksjonelle i tjenesten DSOP Konkursvarsel. Beskrivelsen er en sammenstilling av behov og krav som er avklart gjennom samarbeid mellom pilotbankene (Sparebank 1, DNB, Nordea) og Brønnøysundregistrene. Formålet er å gi en kortfattet og enkel beskrivelse av tjenesten for nye brukere. Dette gjelder deltakere fra forretningsside, ledelse, teknisk personell (arkitekter og utviklere) og eventuelt andre som måtte ha behov for en innføring i tjenesten. Justeringer vil komme på bakgrunn av erfaringer i pilotperioden og Brønnøysundregistrene ønsker gjerne innspill som kan forbedre dokumentet.

## Bakgrunn
Ved åpning av konkurs, tvangsavvikling og tvangsoppløsning oppnevner tingrettene en bostyrer som skal, med mindre retten beslutter å gjøre det selv, sørge for at det varsles om en slik åpning og at midler i skyldnerens bo sikres, se konkursloven &sect;§ 77 jf. 79 og 80.

For å bistå bostyrer med å varsle, er det laget en tjeneste, Konkursvarsel, som skal forenkle de overnevnte manuelle arbeidsoppgavene slik at disse kan løses maskinelt både av bostyrer og finansforetakene. Tjenesten innebærer at alle finansforetak som bruker tjenesten, varsles digitalt om nye konkursåpninger for å kunne foreta seg nødvendige handlinger, som blant annet å sperre skyldnerens konti som ledd i sikring av eiendelene. *Konkursvarsel* varsler finansforetak som benytter tjenesten opptil 32 ganger per døgn innenfor Konkursregisterets ordinære åpningstid.

Tjenesten *Konkursvarsel* er gratis for finansforetakene. Tidligere praksis for finansforetak er vært å hente konkursåpninger via en abonnementstjeneste hos Brønnøysundregistrene. Denne abonnementstjenesten oppdateres sjeldnere (kun hver time) og er en tjeneste hvert finansforetak må betale for. Dette slipper man ved å benytte tjenesten *Konkursvarsel*, som for øvrig er oftere oppdatert.

I forbindelse med utviklingen av tjenesten *Konkursvarsel*, er det gjort endringer i konkursloven &sect; 79. Etter denne bestemmelsen kan nå Konkursregisteret på vegne av bostyrer sende automatisk melding til registre og finansforetak om at konkurs er åpnet i skyldnerens bo. Slik det åpnes for &sect; 79 femte ledd, utarbeides det per tid forskriftsbestemmelser som vil gi en nærmere beskrivelse av blant annet konkursvarselet.

## Beskrivelse av tjenesten DSOP Konkursbehandling - Konkursvarsel
Tjenesten vil gjøre tilgjengelig konkursvarsler fra Konkursregisteret. Innholdet i varslene er fire forskjellige typer varsel (se pkt. 2 for mer informasjon om type).

a) "aapning": Dette gjelder åpning av konkurs, tvangsavvikling og tvangsoppløsning. b) "sletting": Dette er en sletting/annullering av en åpning, nevnt i a). c) "oppheving": Dette gjelder endring som følge av en anke på åpning, nevnt i a). d) "avslutning": Avslutning av konkurs, tvangsavvikling eller tvangsoppløsning

Varslene kan brukes av banker og andre som har hjemmel til fullstendig datasett med sikker identifikator knyttet til konkursbo. Med sikker identifikator menes det i denne forbindelse organisasjonsnummer til en enhet eller fødselsnummer/ d-nummer. Alle konkursvarsler vil inneholde informasjon om hvilken type konkursvarsel dette er og sikker identifikator på debitor i form av organisasjonsnummer eller fullt fødselsnummer/d-nr.

Om en mottaker av et konkursvarsel oppdager et kundeforhold til debitor i varselet, vil detaljer knyttet til hvert enkelt konkursvarsel være tilgjengelig i form av en ressurs-link (URL) som kan benyttes for å hente fullstendig datasett for dette konkursvarselet. Ved å følge ressurs-linken kan mottakere verifisere at de kontrollerer riktig kunde og får de samme opplysningene som en kunngjøring fra brreg.no inneholder. På bakgrunn av denne informasjonen vil finansforetaket kunne identifisere eventuelle kundeforhold i egne systemer maskinelt, og finansforetaket kan på bakgrunn av dette sperre skyldneres konti.

Finansforetak, som har et kundeforhold til debitor i varsel om åpning (aapning), skal sperre alle konti til kunden/debitor. Dersom det kommer et varsel om "sletting" på en kunde/debitor, der det tidligere er mottatt et varsel om åpning "aapning", må de konti som er sperret på bakgrunn av varsel om åpning gjenåpnes.

[/

### Innhold i tjenesten
For å angi innholdet *konkursvarsel* som finnes i tjenesten, benyttes feltet "type" til å kategorisere konkursvarselet.

Det vil forekomme fire forskjellige "type".

"type"  |  Beskrivelse av type
--------|-------------------
"aapning" | Dette gjelder åpning av konkurs, tvangsavvikling og tvangsoppløsning.
"avslutning" | Dette gjelder avslutning av en konkurs, tvangsavvikling eller entvangsoppløsning.<br  />
**Tenkt flyt hos finansforetak**
1.	Finansforetak kaller tjeneste og mottar konkursvarsler.
2.	Finansforetak går gjennom listen av konkursvarsler og identifiserer hvilke av debitorene de har et kundeforhold til.
3.	Finansforetak benytter link i konkursvarsel til henting av utvidet datasett fra konkursvarsel.
4.	Finansforetak utfører handling, sperrer/åpner konto på kunde.

### Flytdiagram
[/](images/Konkursbehandling flyt.JPG)

## Endringslogg

| Dato | Endring | Link i dokumentasjon |
|-------------| ------------------------|
| 01.04.22 | Revidert dokument generelt, revidert av Brreg og Bits. Oppdatert iht. hjemler og godkjente endringer som sendes ut i rundskriv 1. april. |  |

