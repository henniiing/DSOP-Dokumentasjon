---
title: "FAQ"
slug: "dsop_konkurs_faq"
id: "dsop_konkurs_faq"
keywords: ["sample"]
---

*Send e-post til [DSOP@bits.no](mailto:dsop@bits.no) dersom FAQ ikke besvarer ditt spørsmål.*

## BCL/BCP

### BCL

[API spesifikasjon på BCL](https:/github.com/difi/bcp-docs/blob/master/interface/locator/v1/openapi/locator-lookup.yaml)

API-et tar et parameter som er en identifikator for den offentlige etaten. Denne er basert på en «qualifier» som alltid vil være «iso6523-actorid-upis» og en identifikator som er basert på ISO 6523 standarden. En identifikator i ISO 6523 består av en ID for registeret, samt virksomhetens organisasjonsnummer. Verdiene er separert med kolon.

Fra oktober 2023 vil url-en ikke lengre ha en slash på slutten. Tidligere har bankene måtte benytte url med slash for å få respons.

| Organisasjonens navn     | participantID      |
| ------------- |-------------|
| Brønnøysundregistrene | '0192:974760673'    |

| Miljø    | Link     |
| ------------- |-------------|
| Test  | https:/test-bcl.difi.blufo.net/lookup/v2   |
| Produksjon | https:/bcl.difi.blufo.net/lookup/v2   |

Eksempel på forespørsel mot BCL i testmiljø for å vite i hvilken BCP BRREG (974760673) har sitt sertifikat:

```
GET https:/host:port/lookup/v2/::/

GET https:/test-bcl.difi.blufo.net/lookup/v2/iso6523-actorid-upis::0192:974760673
```

Eksempel på respons (endepunkt mot 974760673 sin BCP):

```
/

    "difi-bcp-v1": "https:/api.test4.buypass.com/bcp-api/v1/standard"

/}
```

### BCP

Eksempel på forespørsel mot BCP (testmiljø):

```
https:/api.test4.buypass.com/bcp-api/v1/standard/api/v1/iso6523-actorid-upis::0192:974760673/bdx-procid-dsop::urn:fdc:bits.no:2018:dsop:account:1.0
```

Process identifier er for denne løsningen definert som: bdx-procid-dsop::urn:fdc:bits.no:2018:dsop:account:1.0