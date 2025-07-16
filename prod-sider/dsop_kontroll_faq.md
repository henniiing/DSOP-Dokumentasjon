---
title: "FAQ"
slug: "dsop_kontroll_faq"
id: "dsop_kontroll_faq"
---

*Send e-post til [DSOP@bits.no](mailto:dsop@bits.no) dersom FAQ ikke besvarer ditt spørsmål.*

## Funksjonelle spørsmål

### Kausjonister
**Skal det leveres informasjon om kausjonister?**

### Saldo
**Skal saldo leveres på forespørselstidspunkt?**

**Skal historisk saldo leveres?**

**Hva skal oppgis som saldo ved avsluttet konto?**


## Anonymisering av testdata

Det skal tilstrebes å levere syntetisk testdata i testmiljø for Kontrollinfomasjon. Hvis det ikke er oppnåelig med systetisk testdata, må følgende retningslinjer for anonymisert testdata følges:

Utgangpunktet er [Datatilsynets veileder om Anonymisering av personopplysninger](https:/www.datatilsynet.no/globalassets/global/dokumenter-pdfer-skjema-ol/regelverk/veiledere/anonymisering-veileder-041115.pdf) og [Dataelementer](https:/dokumentasjon.dsop.no/dsop_kontrolll_dataelementer.html).

Oppsummert:
- Anonymisering handler om å fjerne muligheten for å identifisere enkeltpersoner i et datasett.
- Fødsels- og organisasjonsnummer, og navn på personer og organisasjoner må anonymiseres.
- Adresseinformasjon må anonymiseres.
- Kontonummer og navn på konto må anonymiseres.
- Informasjon om transaksjoners innhold og stedet transaksjonen ble utført på må anonymiseres.

Det betyr at følgende dataelementer må anonymiseres:

```
• Account
	o accountIdentifier
	o name
• AccountDetail
	o accountIdentifier
	o name
	o primaryOwner
• AccountRole
	o identifier
	o name
	o postalAddress
	o electronicAddress
• CounterParty
	o accountIdentifier
	o identifier
	o name
	o postalAddress
• ElectronicAddress
	o value
• Identifier
	o value
• PaymentCard
	o holderName
• PostalAddress
	o postCode
	o streetName
	o buildingNumber
	o townName
	o country
	o addressLines
• Transaction
	o reference
	o counterParties
	o additionalInfo
	o merchant
• TransactionReference
	o value
```

## BCL/BCP

### BCL

[API spesifikasjon BCL](https:/github.com/difi/bcp-docs/blob/master/interface/locator/v1/openapi/locator-lookup.yaml)

API-et tar et parameter som er en identifikator for den offentlige etaten. Denne er basert på en «qualifier» som alltid vil være «iso6523-actorid-upis» og en identifikator som er basert på ISO 6523 standarden. En identifikator i ISO 6523 består av en ID for registeret, samt virksomhetens organisasjonsnummer. Verdiene er separert med kolon.

| Organisasjonens navn       | participantID    |
|----------------------------|------------------|
| NAV                        | '0192:889640782' |
| Skatteetaten               | '0192:974761076' |
| Politi- og lensmannsetaten | '0192:915429785' |
| Brønnøysundregistrene      | '0192:974760673' |

| Miljø      | Link                                             |
|------------|--------------------------------------------------|
| Test       | https:/certpub.com/docs/environment/test/       |
| Produksjon | https:/certpub.com/docs/environment/production/ |

Eksempel på forespørsel mot BCL i testmiljø for å vite i hvilken BCP NAV (889 640 782) har sitt sertifikat:

```
GET https:/host:port/lookup/v2/::/

GET https:/test-bcl.difi.blufo.net/lookup/v2/iso6523-actorid-upis::0192:889640782
```

Eksempel på respons i testmiljø (endepunkt mot NAV sin BCP):

```
/

    "difi-bcp-v1": "https:/api.test4.buypass.com/bcp-api/v1/standard/"

/}
```

### BCP

Eksempel på forespørsel mot BCP i testmiljø:

```
GET https:/api.test4.buypass.com/bcp-api/v1/standard/api/v1/iso6523-actorid-upis::0192:889640782/bdx-procid-dsop::urn:fdc:bits.no:2018:dsop:account:1.0
```

Process identifier er for denne løsningen definert som: bdx-procid-dsop::urn:fdc:bits.no:2018:dsop:account:1.0

## Access token from Maskinporten

The following properties are important in the access tokens:

| Property                | Description                                                                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| "aud":                  | Defines the audience for the access token. This value must be a URI, equal to the base URL defined for the endpoint in the API-catalogue. Must be validated by the bank.                       |
| "scope":                | This is the common scope for access tokens used in the Control Information solution. This value for the scope is: "bits:kontoinformasjon"                                                      |
| "iss":                  | The URI of Maskinporten (where the access token was issued)                                                                                                                                    |
| "client_orgno":         | The organization number of the client that the access token was issued to. Note: This claim will be removed. The consumer claim should be used to validate who the access token was issued to. |
| "client_id":            | This value should not be used to validate the client.                                                                                                                                          |
| Validity (exp and iat): | The validity of the access token is, in the Control Information solution, set to 120 seconds.                                                                                                  |
| Signature:              | The token signature should be validated locally, and the certificate used for the signing is defined in the ".well-known" endpoint for Maskinporten.                                           |
| Consumer:               | Contains information about the client the access token was issued to. The organisation number in this claim may be used to validate the client.                                                |

Note: Access token may be reused on multiple requests.

Recommendations regarding validation of access tokens are available in the DSOP documentation: https:/dokumentasjon.dsop.no/dsop_kontroll_validation.html



Token request example:

```
/
  "aud": " https:/test.maskinporten.no/",
  "scope": "bits:kontoinformasjon",
  "iss": "test_rp",
  "exp": 1520589928,
  "iat": 1520589808,
  "jti": "415ec7ac-33eb-4ce3-bc86-6ad40e29768f"
  "resource": [https:/bank.no/dsop/]
/}
```

Access token example:

```
/
  "aud": https:/bank.no/dsop/,
  "scope": "bits:kontoinformasjon",
  "iss": " https:/test.maskinporten.no/",
  "client_amr": "virksomhetssertifikat",
  "token_type": "Bearer",
  "exp": 1520590409,
  "iat": 1520589809,
  "jti": "wTBYC7E2zF6vmflhQm8OYF9WQyYRAi2EuJenQsIo9"
  "consumer": /
    "authority": "iso6523-actorid-upis",
   "ID": "0192:916960190"
  /}
/}
```

