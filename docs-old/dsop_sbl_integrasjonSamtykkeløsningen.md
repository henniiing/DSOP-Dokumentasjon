---
title: "Dsop Sbl IntegrasjonSamtykkeløSningen"
id: "dsop_sbl_integrasjonSamtykkeløsningen"
slug: "dsop_sbl_integrasjonSamtykkeløsningen"
---

﻿---
title: Integrasjon mot Samtykkeløsningen
sidebar: main_sidebar
permalink: dsop_sbl_integrasjonSamtykkeløsningen.html
folder: section1
---

## Samtykkeløsningen

Altinns dokumentasjon om Samtykkeløsningen: [For Datakonsument](https:/altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/)

Tjenestens løsning baserer seg på Altinn sitt TT02-system, hvor virksomheten må bruke test-virksomhetssertifikat. I produksjonsmiljø skal virksomheten benytte virksomhetssertifikat for produksjon.

Her må dere ha fått tildelt API-nøkler fra Altinn før dere får gjort noe. 
For finansforetak som benytter leverandører - viktig å notere seg at  til forskjell for den gamle lenkebaserte samtykkeløsningen trenger ikke leverandøren ha API-nøkler for hver enkelt av de datakonsumenter den representerer - leverandøren skal alltid oppgi sin egen API-nøkkel.

Detaljer for å få ut tokens fra samtykkeløsning:

* Endpoint: https:/tt02.altinn.no/api/authorization/token?authcode= hvor authcodeinrequest er koden for kunden som benyttes for innveksling til token.
* ApiKey angis i header
* Accept = application/hal+json angis også i header
* Krever virksomhetsautentisering med Maskinporten-token. [Prosessen er beskrevet her](https:/altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/leverandor/#bruk-av-leverand%C3%B8rtoken-i-maskinporten-anbefalt).
* Virksomheten må legge til følgende scopes for å få utstedt Maskinporten-token:
	* altinn:consentrequests.read
	* altinn:consentrequests.write
	* altinn:consenttokens

Scopene er åpne og finanforetakene kan legge til scopene selv.

### For finansforetak med leverandører 
 For at leverandøren skal få tilgang til å opprette samtykkeforespørsler og hente ut samtykketokens på vegne av datakonsumenten (finansforetaket), må en hovedadministrator delegere tilgang til *"Tilgang til å administrere samtykkeforespørsler og samtykketokens"* til leverandørens organisasjonsnummer.




### Felter

**Alle felter er obligatoriske.**

| Feltnavn | Beskrivelse |
| ----------------- |--------------|
|Resources  |Punktum separert liste med ID_VERSJON for data tjenester man ønsker samtykke for. Se [tjeneste ID og Versjon](https:/dokumentasjon.dsop.no/dsop_sbl_integrasjonSamtykkel%C3%B8sningen.html#servicecode-og-serviceeditioncode) 
| CoveredBy | Orgnummer for datakonsument. Må matche orgnummer til autentisert konsument. Altinn henter inn virksomhetens offisielle navn slik det fremkommer i enhetsregisteret. |
|HandledBy  |Orgnummer for leverandøren, dersom tilgangen er delegert
| OfferedBy | Virksomheten oppgir kundens fødsels- og personnummer |
| OfferedByName | Virksomheten oppgir kundens etternavn |
| RequiredDelegator | Virksomheten oppgir kundens fødsels- og personnummer. Bruk av dette feltet medfører at samtykkeløsningen automatisk krever at kunden må logge inn via IDporten, dersom en annen person sin sesjon på offentlige sider fortsatt er aktiv. |
| RequiredDelegatorName | Virksomheten oppgir kundens etternavn |
| ValidTo | Kan maksimalt være 10 dager frem i tid. Skatteetaten vil avvise samtykker med gyldighetsperioder lengre perioder enn 10 dager (selv om samtykket benyttes innen 10 dager)


### ServiceCode og ServiceEditionCode
Ifb. ny samtykkeløsning (forhåndsregistrerte samtykkeforespørsler)
har Skatteetaten kommet med nye tjenesteutgavekoder for SBL API-ene. 
 <br >

 De nye tjenesteutgavekodene er som følger:

* Tjenestekode (ServiceCode) og Tjenesteutgavekode (ServiceEditionCode):
 <br >
    - Inntektsmottaker: 4804_210607

Informasjon om [Tjeneste parametere](https:/skatteetaten.github.io/api-dokumentasjon/om/samtykke#tjenester-med-st%C3%B8tte-for-samtykke)


### Metadata
Når man skal gjøre en request mot Altinn må man sende med metadata-feltet "Navn". Her skal man sette inn navnet på finansforetaket/virksomheten som kunden gir samtykke til. Kallet vil feile dersom parameteren er utelatt. Dersom verdien er blank vil kallet lykkes, og på samtykkesiden vises da ingenting for finansforetakets navn.

Virksomheten må her oppgi navnet til den organisasjonen kunden skal samtykke til. Merk at det ikke gjenbrukes det navnet som utledes fra coveredBy. Enkelte virksomheter kan ha et "markedsføringsnavn" eller "bruksnavn" som er forskjellig fra det offsielle navnet i enhetsregisteret. Virksomheten bør oppgi navnet likt med det den har registrert i enhetsregisteret.


### AuthorizationCode
AuthorizationCode er koden for kundens samtykke som i legges til URL'en hvor kunden blir sendt til samtykkeløsning for å gi samtykke og for innveksling til token etter kunden har gitt samtykket.


## Steg 1 - opprette autorisasjonskode

Steg 1 er å opprette autorisasjonskode (samtykke) hos Altinn.

Eksempel forespørsel mot https:/tt02.altinn.no/api/ConsentRequest?ForceEIAuthentication
```
/
        }
    ],
    "requestMessage": 
}
```
Eksempel retur:
```
/
    ]
}
```

For virksomheter som bruker tredjepart/leverandører vil forespørselen se slik ut:
```
/
   }
    ],
"requestMessage": 
}
```

## Steg 2 - autorisasjonskode i URL til samtykkesiden

Steg 2 er å sette inn "AuthorizationCode" i URL som benyttes for å sende brukeren til samtykkesiden: https:/tt02.altinn.no/ui/AccessConsent/request?id=​​

Eksempel: https:/altinn.no/ui/AccessConsent/request?id=c44f284f-b43b-4355-925a-2add17439659


## Steg 3 - Veklse autorisasjonskode med samtykketoken

Når kunden har gitt sitt samtykke er autorisasjonskoden (samtykket) aktivt 10 dager frem i tid. Token har 30 sekunders varighet og datakonsument må be om nytt token når det har gått ut (benytt samme autorisasjonskode om igjen). <br >
For å veklse inn autorisasjonskode med samtykketoken legger man autorisasjonskode i følgende lenke: https:/tt02.altinn.no/api/authorization/token?authcode=​​



Eksempel på forespørsel mot: https:/tt02.altinn.no/api/authorization/token?authcode=
```
/
        }
    ],
    "requestMessage": 
}
```

Eksempel på retur (samtykketoken):
```
/
```


## Endringslogg


| Dato         | Endring  | Link i dokumentasjon|
|-------------| ------------------------|
| 03.04.2023 | Oppdatert link til skatteetatens Github | [Tjeneste parametre](https:/skatteetaten.github.io/api-dokumentasjon/om/samtykke#tjenester-med-st%C3%B8tte-for-samtykke) |
