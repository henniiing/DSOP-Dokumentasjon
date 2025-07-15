---
title: "FAQ"
slug: "dsop_v2fellesstandard_faq"
id: "dsop_v2fellesstandard_faq"
---

*Send e-post til [[DSOP@bits.no](mailto:DSOP@bits.no)](mailto:dsop@bits.no) dersom FAQ ikke besvarer ditt spørsmål.*

## Funksjonelle spørsmål

### Kausjonister
**Skal det leveres informasjon om kausjonister?**
<br >

### Medlåntakere
**Skal det leveres informasjon om medlåntakere?**
<br >

### Saldo
**Skal saldo leveres på forespørselstidspunkt?**
<br >

**Skal historisk saldo leveres?**
<br >

**Hva skal oppgis som saldo ved avsluttet konto?**
<br >Konto avsluttet: 20.03.23<br >Alle bokførte transaksjoner skal leveres med status «booked». Reserverte transaksjoner kan også leveres med status «pending».<br > accountServicingProvider: “bits:kundeforhold.konto” <br > For all the endpoints: “bits:kontoinformasjon” |
| “iss”:                  | The URI of Maskinporten (where the access token was issued)                                                                                                                                                                                                                                                                                                                                                                                                          |
| “client_orgno”:         | The organization number of the client that the access token was issued to. Note: This claim will be removed. The consumer claim should be used to validate who the access token was issued to.                                                                                                                                                                                                                                                                       |
| “client_id”:            | This value should not be used to validate the client.                                                                                                                                                                                                                                                                                                                                                                                                                |
| Validity (exp and iat): | The validity of the access token is, in the Control Information solution, set to 120 seconds.                                                                                                                                                                                                                                                                                                                                                                        |
| Signature:              | The token signature should be validated locally, and the certificate used for the signing is defined in the “.well-known” endpoint for Maskinporten.                                                                                                                                                                                                                                                                                                                 |
| Consumer:               | Contains information about the client the access token was issued to. The organisation number in this claim may be used to validate the client.                                                                                                                                                                                                                                                                                                                      |

Note: Access token may be reused on multiple requests.

Recommendations regarding generic validation of access tokens are available in the DSOP documentation: https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_validation.html



Token request example:

```
/
```

Access token example:

```
/
}
```


## Common API registry (Felles datakatalog) at Digdir

The documentation for this service (Information about API endpoints for the Norwegian financial institutions) is 
available in Norwegian at [https:/docs.data.altinn.no/tjenester/bitskontrollinformasjon/](https:/docs.data.altinn.no/tjenester/bitskontrollinformasjon/). 
