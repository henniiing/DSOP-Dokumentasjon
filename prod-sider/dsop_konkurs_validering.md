---
title: "Anbefaling angående validering av forespørsler"
slug: "dsop_konkurs_validering"
id: "dsop_konkurs_validering"
keywords: ["sample"]
sidebar: main_sidebar
permalink: dsop_konkurs_validering.html
folder: section1
toc: false
---

<br \/>
Det er datakildes ansvar å validere alle forespørsler fra datakonsument. Det er også datakildes ansvar å sørge for at alle forespørsler valideres godt nok.

## Anbefaling angående validering av forespørsler for utlevering av kontoinformasjon til Brønnøysundregistrene

Generelle anbefalinger om validering i Kontrollinformasjon er også gjeldende for utlevering av kontoinformasjon i Konkursbehandling: [Validation of requests](https://dokumentasjon.dsop.no/dsop_kontroll_validation.html).

For Konkursbehandling anbefales det en ekstra validering for utlevering av kontoinformasjon til Brønnøysundregistrene. Det anbefales at finansforetaket validerer følgende i tillegg til generelle anbefalinger om validering (nevnt i avsnittet over):

* Brønnøysundregistrene (bostyrer) skal kun ha tilgang til følgende API'er:
  * Accounts
  * AccountDetails
  * Transactions <br \/><br \/>Finansforetaket bør validere at de øvrige Kontrollinformasjon-APIene ikke benyttes i forespørsler fra Brønnøysundregistrene (bostyrer).

* Brønnøysundregistrene (bostyrer) kan innhente kontohistorikk opptil 12 måneder tilbake i tid, regnet fra konkursdato. Finansforetak bør validere at det ikke spørres på kontohistorikk lenger tilbake i tid enn 12 måneder, regnet fra konkursdato. Finansforetaket finner datoen for konkurs i konkursvarselet - i feltet *kjennelsesdato* ([se informasjon om felter i konkursvarselet](https://dokumentasjon.dsop.no/assets/Konkursvarsel-API-dokumentasjon.html)).

* Finansforetaket bør validere at det er åpnet konkurs på parten (f.nr./d.nr./org.nr.) som Brønnøysundregistrene (bostyrer) sender forespørsel på. Dette kan finansforetaket validere ved å sjekke at de har mottat et konkursvarsel fra Brønnøysundregistrene på den forespurte parten.


## Endringslogg

| Dato | Versjon | Endring | Link i dokumentasjon|
| ------------- | -------- | ------------------------ |-----|
| 18.03.22 | 1.1 | Endret fra at Brønnøysundregistrene kan be om kontohistorikk 4 måneder tilbake i tid.<br \/> Endret til at det kan innhentes kontohistorikk opptil 12 måneder tilbake i tid, regnet fra konkursdato. <br \/>Endringen er godkjent i DSOP Referansegruppe Bank. | [Anbefaling angående validering](https://dokumentasjon.dsop.no/dsop_konkurs_validering.html#anbefaling-ang%C3%A5ende-validering-av-foresp%C3%B8rsler-for-utlevering-av-kontoinformasjon-til-br%C3%B8nn%C3%B8ysundregistrene)|
| 16.04.21 | 1.0 | Gjeldende versjon for løsningen. <br \/>Fremstilt dokumentasjonen mer oversiktlig, samt harmonisert med dokumentasjonen på Kontrollinformasjon for den delen som omhandler utlevering av kontoopplysninger til Brønnøysundregistrene |  |

