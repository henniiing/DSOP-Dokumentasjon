---
title: "Onboarding"
slug: "dsop_ajourhold_onboarding"
id: "dsop_ajourhold_onboarding"
keywords: ["sample"]
---

*Denne siden skal benyttes av pensjoninnretningene som et navigeringsverktøy som gir tilgang til informasjon som er nødvendig for en vellykket etablering av løsningen.*

## Kriterier for bruk av tjenesten

For å ta i bruk *Data for ajourhold av OTP i privat sektor* må virksomheten tilfredsstille følgende [kriterier](https:/dokumentasjon.dsop.no/ajourhold/dsop_ajourhold_om#kriterier-og-hjemmelsgrunnlag-pensjonsinnretningene-har-for-tilgang-til-data-for-tjenesten).

## Registrering

Send utfylt registreringsskjema via [saksbehandlerportalen](https:/online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi) for å starte prosessen med å implementere tjenesten:

* [Registreringsskjema](/assets/Registreringsskjema - Ajourhold av OTP (medlem av BLP V.1).docx)
* [Registreringsskjema, ikke-deltaker av Bits (BLP)](/assets/Registreringsskjema - Ajourhold av OTP (ikke medlem av BLP V.1).docx)

## Onboarding
For å sikre en god integrasjon med Skatteetaten og NAV (heretter "etatene"), Digdir og Altinn, samt en god implementering av tjenesten *Data for ajourhold av OTP i privat sektor*, bør selskapene følge prosjektets anbefalte onboardingprosess slik den er beskrevet under.

Onboarding for et selskap består av 4 faser:

|Prosess					|Beskrivelse|
|-----------------------------------------|------------------------------------|
|A - Forberedelse							| Lese dokumentasjon og vurdere hvordan dette berører pensjoninnretningene og hvordan arbeidet skal organiseres - og når. 
|B - Registrering
| A-2 | **Bestille test- og produksjonsvirksomhetssertifikat for pensjonsinnretning (forretning/IT)** | Pensjoninnretningen må ha gyldig test- og produksjons-virksomhetssertifikater fra enten [Buypass](https:/www.buypass.no/produkter/virksomhetssertifikat-esegl#oversikt-VID) eller [Commfides](https:/www.commfides.com/commfides-virksomhetssertifikat/) <br  /> Det er også mulig å gjenbruke eksisterende test- og produksjonsvirksomhetssertifikat.
| A-3 | **Sette seg inn i integrasjoner og nødvendige forutsetninger for å benytte Maskinporten. (Forretning/IT)** | Maskinporten brukes til å autorisere tilgang til etatenes API-er. Se følgende linker: <br  /> [Ta i bruk Maskinporten](https:/samarbeid.digdir.no/maskinporten/ta-i-bruk-maskinporten/97)<br  /> [Bruksvilkår maskinporten](https:/samarbeid.digdir.no/maskinporten/bruksvilkar-private-kunder-i-maskinporten/73)  
| A-6 | **Se testdata (IT).** | [Testdata](https:/skatteetaten.github.io/api-dokumentasjon/api/tjenestepensjonsavtale?tab=Test) (felles for Skatteetaten og NAV) 
| B-1 | **Pensjoninnretning registrerer seg i Aa-registeret hos NAV (Forretning)** | **Ønsket tilgang til Aa-registeret for Pensjonsinnretning hos NAV**: [Registrer for tilgang Aa-registeret](/https:/navikt.github.io/aareg/om_tjenestene/soke_om_tilgang) <br  /><br  /><br  /><br  /><br  /><br  /><br  /><br  />- Inntektsmottakere API<br  /> Testmiljø: Pensjonsinnretningene bruker testbrukeren oppgitt i steg B-4 som er registrert som daglig leder for foretaket i Altinns TT02-miljø for å delegere tilgang til tredjepart. Ta kontakt med Bits via [saksbehandlerportalen](https:/online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi) dersom dere ikke har testbruker registrert for deres foretak i TT02.  
|B-8| **Registrering i NAV og innhenting av subscription key**|[API portal](https:/api-portal.nav.no/)
| C-7 | **Pensjoninnretning sender bekreftelse til Bits om at pensjoninnretning er klar for produksjon (Forretning/IT)** 