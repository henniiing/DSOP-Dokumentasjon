---
title: "Løsningsbeskrivelse for Vergekontroll"
slug: "dsop_v2vergekontroll_løsningsbeskrivelse"
id: "dsop_v2vergekontroll_løsningsbeskrivelse"
keywords: ["sample"]
---

## Kontrollinformasjon - Innhenting av kontoinformasjon til SRF

[<!-- Comment fixed -->](images/vergekontroll_figur_1.png)

Tjenesten er basert på DSOP Kontrollinformasjon fellesstandard og gjelder utlevering av kontoopplysninger til Statens sivilrettsforvaltning (SRF).
Se [Juridiske rammebetingelser](/dsop_v2vergekontroll_juridisk) for *Vergekontroll*.

### Trinn 1 - DSOP Oversikt over kundeforhold

Statens sivilrettsforvaltning (SRF) skal bruke *DSOP Oversikt over kundeforhold* API-et på følgende måte:

#### Tillatte endepunkter i trinn 1 for tjenesten Vergekontroll

| Endepunkter | Scope fra Maskinporten | Minimum nødvendig versjon av API |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------------------------------- |
| [customerRelationships](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_api_specification.html#api-for-customer-relation-overview) | `bits:kundeforhold` | V.2.0 |

#### Gyldig forespørsel - Trinn 1

SRF skal bruke endepunktet *customerRelationships* på følgende måte:

| Input-felter         | Beskrivelse                                                                                                                                                                                                                                                                                                                                    |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authorization        | Gyldig token fra Maskinporten (`bits:kundeforhold`).                                                                                                                                                                                                                                                                                           |
| CustomerID           | FNR/D-NR til vergehaver.                                                                                                                                                                                                                                                                                                                       |
| CorrelationID        | Uuid-verdi for unik teknisk referanse til forespørselen.                                                                                                                                                                                                                                                                                       |
| Legal-Mandate        | Lovhjemmel for tjenesten skal være "Vergemålsloven &sect; 54 (2), jf. vergemålsforskriften &sect;20a (2), jf. vergemålsforskriften &sect;20a (1) a". URL Encoded verdien skal altså være "Vergem%C3%A5lsloven%20%C2%A7%2054%20(2)%2C%20jf.%20vergem%C3%A5lsforskriften%20%C2%A720a%20(1)%20a". |
| AccountInfoRequestID | Uuid-verdi for saksnummer i SRF.                                                                                                                                                                                                                                                                                                               |
| fromDate             | Fra 1 januar i siste kalenderår.                                                                                                                                                                                                                                                                                                               |
| toDate               | Til 31. desember i siste kalenderår. Dato skal være nyere eller likt fromDate.                                                                                                                                                                                                                                                                 |
| onlyPrimaryOwner     | Kun "onlyPrimaryOwner" = "TRUE".                                                                                                                                                                                                                                                                                                               |

Se datamodell for [customerRelationships](/dsop_v2fellesstandard_customerrelationships).

### Trinn 2 a og b - DSOP Kontrollinformasjon

#### Generell informasjon

| Informasjon om | Beskrivelse | Link |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Funksjonell spesifikasjon | Den funksjonelle spesifikasjonen for DSOP Kontrollinformasjon fellesstandard gjelder for tjenesten *Vergekontroll*. | Dokumentasjon på engelsk: [Functional specification DSOP Control Common Standard](/dsop_v2fellesstandard_functionalspecification). |
| Informasjon om volum og responstider             | Responstidene kan variere mellom finansinstitusjoner, men det typiske mønsteret er at forespørsler etter data vil ha raske responstider (sekunder), mens store historiske forespørsler kan ta lengre tid.<br  />Det er <uminimum />/accounts/listAccounts)    
forespørsler fra etat blir validert <u />%20vergem%C3%A5lsforskriften%20%C2%A7%2020%20(2)%2C%20jf.