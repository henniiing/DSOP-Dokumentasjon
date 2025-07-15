---
title: "Dsop Su IntegrasjonSamtykke"
id: "dsop_su_integrasjonSamtykke"
slug: "dsop_su_integrasjonSamtykke"
---

﻿---
title: Integrasjon mot Samtykkeløsningen
sidebar: main_sidebar
permalink: dsop_su_integrasjonSamtykke.html
folder: section1
---

## Samtykkeløsningen

Altinns dokumentasjon om Samtykkeløsningen: [For Datakonsument](https:/altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/)

Tjenestens løsning baserer seg på Altinn sitt TT02-system, hvor virksomheten må bruke test-virksomhetssertifikat. I produksjonsmiljø skal virksomheten benytte virksomhetssertifikat for produksjon.

Her må dere ha fått tildelt API-nøkler fra Altinn før dere får gjort noe. Se onboardingsguide prosess B-4 for bestilling av API-nøkkel.

Detaljer for å få ut tokens fra samtykkeløsning:

* Endpoint: https:/tt02.altinn.no/api/authorization/token?authcode= hvor authcodeinrequest er koden for kunden som benyttes for innveksling til token.
* ApiKey angis i header
* Accept = application/hal+json angis også i header
* Krever virksomhetsautentisering med Maskinporten-token. [Prosessen er beskrevet her](/dsop_su_integrasjonMaskinporten).
* Virksomheten må legge til følgende scopes for å få utstedt Maskinporten-token (dersom de ønsker å bruker Maskinporten-token istedenfor virksomhetssertifikat for autentisering mot samtykkeløsningen):
	* altinn:consentrequests.read
	* altinn:consentrequests.write
	* altinn:consenttokens

Scopene er åpne og finanforetakene kan legge til scopene selv.

### CoveredBy
Virksomheten må her oppgi organisasjonsnummeret til den organisasjonen kunden skal samtykke til. Altinn henter inn virksomhetens offisielle navn slik det fremkommer i enhetsregisteret.

### OfferedBy
Virksomheten oppgir kundens fødsels- og personnummer

### OfferedByName
Virksomheten oppgir kundens etternavn

### RequiredDelegator
Virksomheten oppgir kundens fødsels- og personnummer

### RequiredDelegatorName
Virksomheten oppgir kundens etternavn.

### ValidTo
Tidspunkt som oppgis i validTo kan maksimalt være 3 år frem i tid, fra det tidspunktet samtykket er gitt. Samtykket som kunden gir kan ha en maksimal varighet på 3 år.

### RedirectUrl
Domenet som kunden skal returneres til etter samtykket er gitt. Erfaring viser at man må bruke https:/ i redirectUrl.

### ServiceCode og ServiceEditionCode

* Tjenestekode(ServiceCode): 5252

* Tjenesteutgavekoden(ServiceEditionCode): 2

### Metadata
Når man skal gjøre en request mot Altinn må man sende med metadata-feltet "Navn". Her skal man sette inn navnet på virksomheten som kunden gir samtykke til. Kallet vil feile dersom parameteren er utelatt. Dersom verdien er blank vil kallet lykkes, og på samtykkesiden vises da ingenting for virksomhetens navn.

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

Når kunden har gitt sitt samtykke er autorisasjonskoden (samtykket) aktiv i 3 år. For å veklse inn autorisasjonskode med samtykketoken legger man autorisasjonskode i følgende lenke: https:/tt02.altinn.no/api/authorization/token?authcode=​​

**Viktig**: Denne forespørselen skal kun sendes 1 gang per samtykke. Denne forespørselen skal gjøres på ny når samtykket skal fornyes etter 3 år.

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




| Dato         | Endring  | Link i dokumentasjon|
|-------------| ------------------------|
|     |   | |
