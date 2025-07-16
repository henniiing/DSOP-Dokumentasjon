---
title: "Datamodell og arkitektur for Konkursbehandling"
slug: "dsop_konkurs_datamodell_konkursbehandling"
id: "dsop_konkurs_datamodell_konkursbehandling"
keywords:
  - "sample"
---

<br>
Løsningen Konkursbehandling består av to selvstendige tjenester, der begge skal implementeres: 
* Konkursvarsel
* Kontrollinformasjon - Innhenting av kontoinformasjon for bostyrere

<br><br>
I tabellen under finnes link til datamodell og arkitektur for hver tjeneste.

|Tjeneste  | Beskrivelse | Link |
| ----- | ----- | ----- |
|Konkursvarsel | Tjenesten er en selvstendig tjeneste som varsler om åpnet- slettet- opphevet- og avsluttede konkurser.  | [Datamodell og arkitekturdokument for Konkursvarsel](https://dokumentasjon.dsop.no/assets/Konkursvarsel-API-dokumentasjon.html){:target="_blank"}|
|Kontrollinformasjon |Tjenesten er en selvstendig tjeneste som i Konkursbehandling benyttes for utlevering av kontoinformasjon om et konkursbo til en bostyrer. <br><br>Datamodell for tjenesten Kontrollinformasjon er gjeldende her. APIene som inngår i Konkursbehandling er: <br>- Accounts <br>- Account details <br>- Transactions <br><br>Der det henvises til konkrete etater er det Brønnøysundregistrene som inngår i tjenesten Konkursbehandling.| [Datamodell Kontrollinformasjon](https://dokumentasjon.dsop.no/dsop_kontroll_datamodel.html){:target="_blank"}<br><br>[Arkitekturdokument Kontrollinformasjon](https://dokumentasjon.dsop.no/dsop_kontroll_architecturedocument.html){:target="_blank"} |


## Endringslogg

| Dato         | Versjon | Endring  | Link i dokumentasjon|
|-------------| --------|------------------------|
|16.04.21    |1.0  |Gjeldende versjon for løsningen. <br>Fremstilt dokumentasjonen mer oversiktlig, samt harmonisert med dokumentasjonen på Kontrollinformasjon for den delen som omhandler utlevering av kontoopplysninger til Brønnøysundregistrene  |  |
