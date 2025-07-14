---
title: "Om tjenesten"
slug: "dsop_konkurs_om"
id: "dsop_konkurs_om"
keywords:
  - "sample"
---

Konkursbehandling er en hel-digital løsning for utveksling av informasjon mellom bostyrer og bankene knyttet til konkursbehandling.
Tjenesten skal levere en løsning for konkurser i bedrifter, enkeltpersonfortak og personlige konkurser.

All standardinformasjon som flyter mellom banken og bostyrer knyttet til konkursbehandling skal gå fra maskin til maskin.
Bostyrer skal få informasjon fra bankene inn på sin arbeidsflate i Altinn, «Bosiden». Bankene skal etablere løsninger for automatisk
uthenting av standard informasjon som bostyrer har hjemmel til å be om.

En hel-digitalisert løsning skal gi en raskere og standardisert informasjonsflyt som sikrer høyere kvalitet og sikkerhet i samhandlingen mellom bostyrer og bankene ved en konkursbehandling.

Løsningen består i hovedsak av to moduler.
* Konkursvarsel - en eNotifikasjonstjeneste
* Innhenting av kontrollinformasjon 

[![alt text](images/Skisse-Konkursbehandling.jpg "Konkursbehandling")](images/Skisse-Konkursbehandling.jpg)

## Konkursvarsel
Tjenesten konkursvarsel gjør tilgjengelig konkursvarsler fra konkursregisteret, dette gjelder åpning av konkurs, tvangsavvikling og tvangsoppløsning. Varselet brukes av banker og andre som har hjemmel til fullstendig datasett med sikker identifikator (organisasjonsnummer/fødselsnummer) knyttet til konkursbo.

Bank spør på tjenesten og ser om det er nye konkursvarsler tilgjengelig siden sist de spurte. Alle konkursvarsel inneholder informasjon om hvilken type konkursvarsel som er inntruffet og identifikator på debitor i form av organisasjonsnummer eller fødselsnummer/dnr.

Basert på denne informasjonen vil bank kunne identifisere eventuelle kundeforhold i egne systemer maskinelt, og på bakgrunn av dette kunne foreta sperring av konto.

### Tilgang til konkursvarsel for forsikringsselskaper og andre aktører som ikke benytter seg av SBL
Konkursvarslet er en selvstendig tjeneste som eies av Brønnøysundregisteret. Forsikringsselskaper og andre aktører som kun ønsker tilgang til konkursvarslet kan få dette ved å fylle ut [standardavtalen med vedlegg.](assets/Avtalemal - Levering av konkursvarsel fra Brønnøysundregisteret til forsikringsselskap.doc){:target="_blank"} Utfylt avtale sendes til konkursreg@brreg.no. For forsikringsselskaper som benytter seg av tjenesten er det Brønnøysundregisteret som er kontaktpunktet for alle feilsituasjoner og henvendelser. 

Dokumentasjon for konkursvarslet

[API-spesifikasjon konkursvarsel](https://dokumentasjon.dsop.no/assets/Konkursvarsel-API-dokumentasjon.html){:target="_blank"}

[API-spesifikasjon konkursvarsel swagger](https://bitsnorge.github.io/dsop-konkursvarsel-api/){:target="_blank"}

[Funksjonell spesifikasjon](https://dokumentasjon.dsop.no/dsop_konkurs_funksjonellspesifikasjon.html){:target="_blank"}


## Innhenting av kontrollinformasjon
Steg 2 i prosessen er at bostyrer oppnevnt av tingretten innhenter informasjon fra bankene.
Bostyrer har sin arbeidsflate hos Altinn/Brønnøysundregistrene.
På bosiden får bostyrer tilgang til å be om informasjon på konkursboet.
Systemet vil først sende en forespørsel til et register i finansnæringen for å få utlevert en liste over hvilke banker som har- eller har hatt en relasjon til objektet.
Basert på banklisten fra registeret forespør så bosyrer de nevnte bankene om:
* Kontoliste med blant annet status på konto (enabled - diabled - deleted)
* Saldo
* Kontoopplysninger 12 måneder tilbake i tid, regnet fra konkursdato

Bostyrer får fra aktuelle banker presentert kontoliste og kontoinformasjon fra konkursdebitors konti direkte på bosiden.

For bank vil det være samme tekniske løsning som benyttes for innhenting av kontrollinformasjon som det er i DSOP prosjektet [Kontrollinformasjon](https://dokumentasjon.dsop.no/dsop_kontroll_om.html){:target="_blank"}.


## For mer informasjon og oversikt over implementering av løsningene se:
* [Presentasjon Konkursbehandling](assets/presentasjon_konkurs.pdf){:target="_blank"}
* [Onboarding Kontrollinformasjon og Konkursbehandling](https://dokumentasjon.dsop.no/dsop_kontroll_onboarding_datakilde.html){:target="_blank"}

### Brønnøysundregistrene sin presentasjon av løsningen - 28. november 2019

* [Presentasjon av Konkursbehandling - Brønnøysundregistrene](assets/BRREG_kontrollinformasjon.pdf){:target="_blank"}
<br><br>(alle data i presentasjon er fiktive)



## Endringslogg

| Dato         | Versjon | Endring  | Link i dokumentasjon|
|-------------| --------|------------------------|-----|
|18.03.22|1.1|Endret periode for spørring fra 4 måneder til 12 måneder tilbake i tid, regnet fra konkursdato.| [Link](https://dokumentasjon.dsop.no/dsop_konkurs_om.html#innhenting-av-kontrollinformasjon)|
|01.12.20     | 1.0  | Endret periode for spørring fra innværende måned + tre måneder tilbake i tid, til fire måneder tilbake i tid fra dagens dato |  |
|08.01.24     | 1.0  | Lagt til informasjon om tilgang til konkursvarsel for forsikringsselskaper |  |
|18.01.24     | 1.0  | Lagt til dokumentasjon for konkursvarslet for andre aktører som ikke benytter seg av SBL |  |