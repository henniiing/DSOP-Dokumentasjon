---
title: "Om tjenesten"
id: dsop_v2konkurs_about
slug: "/dsop_v2konkurs_about"
toc: false
---

## Om tjenesten Konkursbehandling

Konkursbehandling er en hel-digital løsning for utveksling av informasjon mellom bankene og bostyrer (via
Brønnøysundregistrene (Brreg)) knyttet til konkursbehandling. Tjenesten er en løsning som gjelder konkurser i bedrifter,
enkeltpersonforetak og personlige konkurser.

All standardinformasjon som flyter mellom banken og bostyrer (Brreg) knyttet til konkursbehandling skal gå fra maskin
til maskin. Bostyrer skal få informasjon fra bankene inn på sin arbeidsflate i Altinn, «Bosiden» hos Brreg. Bankene skal
etablere løsninger for både å agere umiddelbart ift. konkursvarsler og sperre konti til skyldneren, og for automatisk
utlevering av kontoopplysninger som bostyrer har hjemmel til å motta via «Bosiden» hos Brreg.

En hel-digitalisert løsning skal gi en raskere og standardisert informasjonsflyt som sikrer høyere kvalitet og sikkerhet
i samhandlingen mellom bostyrer og bankene ved en konkursbehandling.

Løsningen består i hovedsak av to moduler.

skal&lt;/u &amp;amp; gt; abonnere på tjenesten og skal dermed se om det er nye konkursvarsler tilgjengelig siden deres siste
spørring. Alle konkursvarslene inneholder informasjon om hvilken type konkursvarsel som er inntruffet og identifikator
på debitor i form av organisasjonsnummer eller fødselsnummer/D-nr.

Basert på denne informasjonen vil bankene kunne identifisere eventuelle kundeforhold i egne systemer maskinelt, og på
bakgrunn av dette forventes det at alle konti til skyldnere sperres.

### Tilgang til konkursvarsel for forsikringsselskaper og andre aktører som ikke benytter seg av SBL

Konkursvarslet er en selvstendig tjeneste som eies av Brønnøysundregisteret. Forsikringsselskaper og andre aktører som
kun ønsker tilgang til konkursvarslet kan få dette ved å fylle ut [standardavtalen med vedlegg.](/assets/Avtalemal - Levering av konkursvarsel fra Brønnøysundregisteret til forsikringsselskap.doc)/
Utfylt avtale sendes til [[konkursreg@brreg.no](mailto:konkursreg@brreg.no)](mailto:konkursreg@brreg.no). For forsikringsselskaper som benytter seg av
tjenesten er det Brønnøysundregisteret som er kontaktpunktet for alle feilsituasjoner og henvendelser.

#### Dokumentasjon for konkursvarslet

[API-spesifikasjon konkursvarsel](/Konkursvarsel-API-dokumentasjon)

[API-spesifikasjon konkursvarsel swagger](https:/bitsnorge.github.io/dsop-konkursvarsel-api/)

[Funksjonell spesifikasjon](/dsop_v2konkurs_functionalspecification)

## B: Innhenting av kontoinformasjon

Neste steg i prosessen er at bostyrer oppnevnt av tingretten innhenter informasjon fra bankene digitalt. Bostyrer har
sin arbeidsflate hos Altinn som heter «bosiden».

[<!-- Comment fixed -->](images/konkurs_01-2.png)

På bosiden får bostyrer tilgang til å be om kontoopplysninger på konkursboet.
Først hentes det informasjon om hvilke banker skyldner hadde et kundeforhold med. For å få denne informasjonen benytter
bosiden løsningen *DSOP Oversikt over kundeforhold* som returnerer hvilke finansforetak skyldner hadde et kundeforhold
til før konkursen (trinn 1). Bostyrer kan få informasjon om hvor skyldner hadde et kundeforhold i opptil 12 måneder fra
kjennelsesdatoen for konkursen.

I trinn 2 forespør bostyrer kontoopplysninger hos finansforetakene basert på listen returnert i trinn 1 om:
* Kontoliste med blant annet status på konto (enabled - disabled - deleted). Det forventes at alle konti som returneres fra løsningen har status «disabled», dvs. sperret.
* Kontodetaljer inkl. saldo på alle konti.
* Transaksjoner inntil 12 måneder tilbake i tid, regnet fra konkursdato.

## Endringslogg

| Dato | Versjon | Endring |
| ---------- | --------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 26.03.24 | 2.0 | Harmonisert informasjonen til nytt oppsett på dokumentasjonssiden |
| 18.01.24 | 1.0 | Lagt til dokumentasjon for konkursvarslet for andre aktører som ikke benytter seg av SBL |
| 08.01.24 | 1.0 | Lagt til informasjon om tilgang til konkursvarsel for forsikringsselskaper |
| 18.03.22 | 1.1 | Endret periode for spørring fra 4 måneder til 12 måneder tilbake i tid, regnet fra konkursdato. |
| 01.12.20 | 1.0 | Endret periode for spørring fra innværende måned + tre måneder tilbake i tid, til fire måneder tilbake i tid fra dagens dato |

