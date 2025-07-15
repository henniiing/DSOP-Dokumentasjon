---
title: "Integrasjon mot Maskinporten"
slug: "dsop_ajourhold_Integrasjonmaskinporten"
id: "dsop_ajourhold_Integrasjonmaskinporten"
keywords:
  - "sample"
---

## Maskinporten

Digitaliseringsdirektoratets dokumentasjon om Maskinporten: [Slik bruker du Maskinporten som API-konsument](https:/docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument)

Tjenesten baserer seg på testmiljøet "test", hvor virksomheten må bruke virksomhetssertifikat for test. I produksjonsmiljø skal virksomheten benytte virksomhetssertifikatet for produksjon.

### Endringer i 2023

Det ble gjort endringer for Finansforetak som hadde utgående brannmur. Disse måtte oppdatere IP-adressene.  Endringen ble implementert i produksjon 06.02.2023. Endringen var nødvendig for å kunne bruke Maskinporten i forbindelse med autentisering og utstedelse av access token. 

Endepunkt ble endret fra VER2 til TEST i testmilø fra og med Q3 2022.
Det er foreløpig ingen endring i eksisterende oppsett for å hente tokens, men fra og med Q3 2023 må finansforetak ta i bruk nytt endepunkt test.maskinporten.no. Mer informasjon om denne endringen kommer nærmere Q3 2023. [Se informasjon Maskinporten](https:/samarbeid.digdir.no/maskinporten/maskinporten/1245)

### Opprette klient

Pensjonsinnretningen må opprette en klient i Maskinporten. Det vil si at de må opprettet tilgang til [Samarbeidsportalen fra Digdir](https:/docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument#registrering-via-samarbeidsportalen) og signer [Digdirs brukervilkår](https:/samarbeid.digdir.no/maskinporten/bruksvilkar-private-kunder-i-maskinporten/73)
<br >
Det er den som blir admin i Samarbeidsportalen som kan opprette en integrasjon.
<br >
[Selvbetjening av Maskinporten via Samarbeidsportalen](https:/docs.digdir.no/docs/Maskinporten/maskinporten_sjolvbetjening_web#tilgang-i-produksjonsmilj%C3%B8)




### Opprette integrasjon

For å kunne hente ut tokens som kan benyttes i etatenes API må man registrere en [Integrasjon i maskinporten](https:/docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument#4-opprett-en-integrasjon-i-maskinporten)


Dette gjøres slik:

1. Under "test", velg "Integrasjoner".
2. Velg "Ny integrasjon"
3. Under Difi-tjeneste velg Maskinporten og trykk "Legg til scopes"
4. Følgende valg bør da dukke opp som alternativer så fremt etatene har gitt dere tilgang til scopet. <br >
NAV: "NAV:aareg/v1/arbeidsforhold/otplan/v1/saldoopplysninger"<br >

Bruk av [Skatteetatens Apier med token fra maskinporten](https:/skatteetaten.github.io/api-dokumentasjon/om/sikkerhet#bruke-skatteetatens-apier-med-token-fra-maskinporten) <br >
Bruk av [NAVs Api med token fra maskinporten](https:/navikt.github.io/aareg/#_tilgang)

### Pensjonsinnretning som benytter ekstern leverandør
Delegering i Maskinporten [Maskinporten](https:/docs.digdir.no/docs/Maskinporten/maskinporten_func_delegering) 

Hvordan registrere [klient ved delegering](https:/docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument#bruke-delegering-via-altinn-autorisasjon) 


### Virksomhetssertifikat

Etatene validerer på org.nummeret i Maskinporten-tokenet. Pensjonsinnretninger som benytter en ekstern systemleverandør som skal bruke eget virksomhetssertifikat mot Maskinporten, må pensjonsinnretningen bruke [Delegerings-tjenesten i Altinn](https:/docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument#bruke-delegering-via-altinn-autorisasjon)


### Maskinporten og consumer

Dette settes basert på virksomhetssertifikatet pensjonsinnretningen/leverandøren bruker for å kalle Maskinporten. Når pensjonsinnretningen/leverandøren har fått gjennom et kall og hentet access_token fra Maskinporten med et virksomhetssertifikat så har "consumer" blitt satt automatisk. Innholdet i tokenet kan verifiseres med [https:/jwt.io](https:/jwt.io).

Ved bruk av delegeringstjenesten, må man angi hvilken pensjonsinnretning/leverandør som man kaller på vegne av.



## Endringslogg

| Dato       | Endring                                 | Link i dokumentasjon                                                                                                       |
|------------|-----------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| 04.04.2023 | Oppdatert link til skatteetatens Github | [Link](https:/skatteetaten.github.io/api-dokumentasjon/om/sikkerhet#bruke-skatteetatens-apier-med-token-fra-maskinporten) |