---
title: "Integrasjon mot Maskinporten"
slug: "dsop_sbl_integrasjonMaskinporten"
id: "dsop_sbl_integrasjonMaskinporten"
keywords: ["sample"]
---

## Maskinporten

Digitaliseringsdirektoratets dokumentasjon om Maskinporten: [Slik bruker du Maskinporten som API-konsument](https:/docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument)

Tjenesten baserer seg på testmiljøet "TEST", hvor virksomheten må bruke virksomhetssertifikat for test. I produksjonsmiljø skal virksomheten benytte virksomhetssertifikatet for produksjon.

### Endringer

Finansforetak som har utgående brannmur- MÅ OPPDATERE IP-ADRESSENE
Denne endringen må implementeres innen 05.01.2023 for testmiljø og 06.02.2023 for produksjonsmiljø. Dette er nødvendig for å kunne bruke Maskinporten i forbindelse med autentisering og utstedelse av access token. 

Endring av endepunkt i testmiljøet - Endepunkt endres fra VER2 til TEST fra og med Q3 2022.
Det er foreløpig ingen endring i eksisterende oppsett for å hente tokens, men fra og med Q3 2023 må finansforetak ta i bruk nytt endepunkt test.maskinporten.no. Mer informasjon om denne endringen kommer nærmere Q3 2023.

### Opprette klient

Finansinstitusjonen må opprette en klient i Maskinporten. Det vil si at de må opprettet tilgang til [Samarbeidsportalen fra Digdir](https:/samarbeid.digdir.no/maskinporten/maskinporten/25) og signere [Digdirs brukervilkår](https:/samarbeid.digdir.no/maskinporten/bruksvilkar-private-kunder-i-maskinporten/73)
<br  />
Det er den som blir admin i Samarbeidsportalen som kan opprette en integrasjon.
<br  />
[Selvbetjening av Maskinporten via Samarbeidsportalen](https:/docs.digdir.no/docs/Maskinporten/maskinporten_sjolvbetjening_web#tilgang-i-produksjonsmilj%C3%B8)

### Opprette integrasjon

For å kunne hente ut tokens som benyttes for Skatteetatens API må man registrere en [Integrasjon i maskinporten](https:/docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument#4-opprett-en-integrasjon-i-maskinporten)

Dette gjøres slik:

1. Under "TEST", velg "Integrasjoner".
2. Velg "Ny integrasjon"
3. Under Difi-tjeneste velg Maskinporten og trykk "Legg til scopes"
4. Følgende valg bør da dukke opp som alternativer så fremt etaten har gitt dere tilgang til scopene: 
### Finansinstitusjon som benytter ekstern leverandør

Hvordan registrere [klient ved delegering](https:/docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument#registrere-klient-som-leverand%C3%B8r-for-ekstern-delegering)

Hvordan [Delegere rettigheter i Altinn](https:/docs.digdir.no/maskinporten_guide_apikonsument.html#bruke-delegering-via-altinn-autorisasjon)

[Hvordan delegere rettigheter til leverandør(Video)](https:/vimeo.com/533856189)

Ved bruk av delegeringstjenesten, må man angi hvilken finansinstitusjon/systemleverandør som man kaller på vegne av.

### Virksomhetssertifikat

Skatteetaten validerer mellom org.nummeret i samtykketoken og i Maskinporten-tokenet. Finansinstitusjon som benytter en ekstern systemleverandør som skal bruke eget virksomhetssertifikat mot Maskinporten, må bruke [Delegerings-tjenesten i Altinn](https:/docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument#bruke-delegering-via-altinn-autorisasjon)

## Endringslogg

| Dato         | Endring i dokumentasjon   |
|-------------| ------------------------|
| 03.04.2023 | Oppdatert linker til skatteetatens Github |
| 22.10.2021    | Lagt til Hvordan [Delegere rettigheter i Altinn](https:/docs.digdir.no/maskinporten_guide_apikonsument.html#bruke-delegering-via-altinn-autorisasjon) og [Hvordan delegere rettigheter til leverandør(Video)](https:/vimeo.com/533856189) |
