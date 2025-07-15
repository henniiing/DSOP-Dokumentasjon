---
title: "Integrasjon mot Maskinporten"
slug: "dsop_su_integrasjonMaskinporten"
id: "dsop_su_integrasjonMaskinporten"
keywords:
  - "sample"
---

## Maskinporten

Digitaliseringsdirektoratets dokumentasjon om Maskinporten: [Slik bruker du Maskinporten som API-konsument](https:/docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument)

Tjenesten baserer seg på testmiljøet "TEST" i testmiljø, hvor virksomheten må bruke virksomhetssertifikat for test. I produksjonsmiljø skal virksomheten benytte virksomhetssertifikatet for produksjon.

### Endringer i 2023

Det ble gjort endringer for Finansforetak som har utgående brannmur hvor de måtte oppdatere ID adressene sine. Endringen måtte implementeres innen 06.02.2023 for produksjonsmiljøet. Endringen var nødvendig for å kunne bruke Maskinporten i forbindelse med autentisering og utstedelse av access token. 

Endepunkt ble endret fra VER2 til TEST fra og med Q3 2022 i testmiljø.
Det er foreløpig ingen endring i eksisterende oppsett for å hente tokens, men fra og med Q3 2023 må finansforetak ta i bruk nytt endepunkt test.maskinporten.no. Mer informasjon om denne endringen kommer nærmere Q3 2023. [Se informasjon Maskinporten](https:/samarbeid.digdir.no/maskinporten/maskinporten/1245)

### Opprette klient

Forsikringsselskapet må opprette en klient i Maskinporten. Det vil si at de må opprettet tilgang til [Samarbeidsportalen fra Digdir](https:/samarbeid.digdir.no/maskinporten/maskinporten/25) og signere [Digdirs brukervilkår](https:/samarbeid.digdir.no/maskinporten/bruksvilkar-private-kunder-i-maskinporten/73)
<br >
Det er den som blir admin i Samarbeidsportalen som kan opprette en integrasjon.
<br >
[Selvbetjening av Maskinporten via Samarbeidsportalen](https:/docs.digdir.no/docs/Maskinporten/maskinporten_sjolvbetjening_web#tilgang-i-produksjonsmilj%C3%B8)



### Opprette integrasjon

For å kunne hente ut tokens som kan benyttes i etatens API må man registrere en [Integrasjon i maskinporten](https:/docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument#4-opprett-en-integrasjon-i-maskinporten)


Dette gjøres slik:

1. Under "TEST", velg "Integrasjoner".
2. Velg "Ny integrasjon"
3. Under Difi-tjeneste velg Maskinporten og trykk "Legg til scopes"
4. Følgende valg bør da dukke opp som alternativer så fremt etaten har gitt dere tilgang til scopene: <br >


### Finansforetak som benytter ekstern leverandør

Hvordan registrere [klient ved delegering](https:/docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument#registrere-klient-som-leverand%C3%B8r-for-ekstern-delegering).

### Virksomhetssertifikat

NAV validerer mellom organisasjonsnummeret i samtykketoken og i Maskinporten-tokenet. Forsikringsselskap som benytter en ekstern systemleverandør som skal bruke eget virksomhetssertifikat mot Maskinporten, må bruke [Delegerings-tjenesten i Altinn](https:/docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument#bruke-delegering-via-altinn-autorisasjon).


### Maskinporten og consumer

Dette settes basert på virksomhetssertifikatet forsikringselskapet/leverandøren bruker for å kalle Maskinporten. Når forsikringselskapet/leverandøren har fått gjennom et kall og hentet access_token fra Maskinporten med et virksomhetssertifikat så har "consumer" blitt satt automatisk. Innholdet i tokenet kan verifiseres med [https:/jwt.io](https:/jwt.io).

Ved bruk av delegeringstjenesten, må man angi hvilket forsikringsselskap/leverandør som man kaller på vegne av.


## Endringslogg

| Dato         | Endring i dokumentasjon   |
|-------------| ------------------------|
|     |   |
