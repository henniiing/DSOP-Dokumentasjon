---
title: "Onboarding"
slug: "dsop_ajourhold_onboarding"
id: "dsop_ajourhold_onboarding"
keywords:
  - "sample"
---

*Denne siden skal benyttes av pensjoninnretningene som et navigeringsverktøy som gir tilgang til informasjon som er nødvendig for en vellykket etablering av løsningen.*

## Kriterier for bruk av tjenesten

For å ta i bruk *Data for ajourhold av OTP i privat sektor* må virksomheten tilfredsstille følgende [kriterier](https:/dokumentasjon.dsop.no/dsop_ajourhold_om.html#kriterier-og-hjemmelsgrunnlag-pensjonsinnretningene-har-for-tilgang-til-data-for-tjenesten).

## Registrering

Send utfylt registreringsskjema via [saksbehandlerportalen](https:/online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi) for å starte prosessen med å implementere tjenesten:

* [Registreringsskjema](/assets/Registreringsskjema - Ajourhold av OTP (medlem av BLP V.1).docx)
* [Registreringsskjema, ikke-deltaker av Bits (BLP)](/assets/Registreringsskjema - Ajourhold av OTP (ikke medlem av BLP V.1).docx)

## Onboarding
For å sikre en god integrasjon med Skatteetaten og NAV (heretter "etatene"), Digdir og Altinn, samt en god implementering av tjenesten *Data for ajourhold av OTP i privat sektor*, bør selskapene følge prosjektets anbefalte onboardingprosess slik den er beskrevet under.

Onboarding for et selskap består av 4 faser:

|Prosess					|Beskrivelse|
|-----------------------------------------|------------------------------------|
|A - Forberedelse							| Lese dokumentasjon og vurdere hvordan dette berører pensjoninnretningene og hvordan arbeidet skal organiseres - og når. <br >Igangsette nødvendige tekniske interne bestillinger.  |
|B - Registrering<br >inngåelse         | Pensjonsinnretningene registrerer seg hos Bits, hvor Bits administrerer signering av avtaler/vilkår. |
|C - Integrasjon             | Pensjonsinnretningene starter implementering av tjenestene og utfører nødvendige interne tester og integrasjonstester mot etatene før overgangen til produksjon.  |
|D - Produksjon            | Pensjonsinnretningene går over til produksjon. |


I de neste kapitlene er det også presentert anbefalinger om hvem som burde fullføre hvilke oppgaver:

* IT: IT-spesifikke oppgaver

* Forretning: Oppgaver for forretningssiden som vil implementere løsningen

* Alle: Alle de ovenfor nevnte miljøene

* Bits: Forvaltning hos Bits gjennomfører oppgaven


### A - Forberedelse

*I dette kapittelet finner man oversikt over oppgaver som skal/bør utføres før pensjoninnretningene går til registrering og avtaleinngåelse (B).*

| Oppgaver|
|-----|
|A-1|**Lese og forstå dokumentasjonen fra etatene. (Alle)** | Se [om tjenesten](/dsop_ajourhold_om), [Informasjonsmodeller, API og testdata Skatteetaten](/dsop_skatteetaten_api) og [Informasjonsmodell, API og testdata NAV](/dsop_Nav_api). <br ><br ><br ><br ><br ><br > - Formål: «Til bruk i arbeidet med pensjonsordning etter innskuddspensjonsloven, foretakspensjonsloven eller tjenestepensjonsloven» <br > -	[Dataelementer](/assets/Vedlegg_til_soknad_om_tilgang_til_Aa_-_registeret_for_OTP.pdf) (dette dokumentet må lastes opp i søknaden og er tilpasset ut fra hvilken informasjon som inngår i tjenestene). <br > -	Kontaktpersoner må oppgis <br > -	Hvilken tilgang: API|
|B-2| **Pensjoninnretning fyller ut registreringsskjemaet og sender det til Bits (Forretning)** | Fyll ut [registreringsskjema](https:/dokumentasjon.dsop.no/dsop_ajourhold_onboarding.html#registrering). Ferdig utfylt skjema sendes til Bits via [saksbehandlerportalen](https:/online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi). <br > Bits vil verifisere innholdet i skjemaet og vil på bakgrunn av godkjent registreringsskjema starte prosess for elektronisk avtaleinngåelse. |
|B-3| **Pensjoninnretning melder seg inn i Maskinporten og signerer bruksvilkår for Maskinporten elektronisk. (IT/Forretning)** <br > Dersom tredjepart skal implementere løsningen er det kun deres organisasjon som trenger å signere bruksvilkår og opprette tilgang i Maskinporten sin samarbeidsportal. |
|B-4| **Elektronisk signering av tilknytningsavtale og tjenestebeskrivelse (Bits/Forretning)** | Tilknytningsavtalen signeres for å ta del i DSOP. Tjenestebeskrivelsen inneholder bruksvilkårene for tjenestene og underbilag. I tillegg skal det signeres en standard tilslutningserklæring ved påkobling til tjenesten. <br > Elektronisk signering initieres når mottatt registreringsskjema godkjennes av Bits, og gjennomføres i Verified. Verified er en tjeneste som brukes for å signere elektroniske dokumenter ved bruk av elektronisk id. |
|B-5| **Bestille tilgang til testmiljø Altinn (Bits)**| Bits bestiller tilgang til TT02 (testmiljø) for pensjoninnretningene. Dersom pensjonsinnretningen har oppgitt bruk av tredjepartsleverandør i registreringsskjema vil det også bestilles testbruker med delegeringsrettigheter som skal brukes i steg B-6. |
|B-6| **Bestille tilgang til testmiljø etatene (Bits)**| Bits bestiller tilgang til testmiljøet til Skatteetaten for pensjoninnretningene. Basert på bestillingen gis tilgang til API-ene, samt tilgang til Maskinporten og scopene for tjenesten.<br > Dette kan ta opptil 1-3 virkedager.|
|B-7| **Delegere tilgang til tredjepart/tredjepart i Altinn (IT/Forretning)**| Denne prosessen gjelder kun for pensjoninnretning som benytter tredjeparter, og hvor tredjepart skal benytte sitt virksomhetssertifikat mot Maskinporten. <br >- Tjenestepensjonsavtale API<br > Testmiljø: Pensjonsinnretningene bruker testbrukeren oppgitt i steg B-4 som er registrert som daglig leder for foretaket i Altinns TT02-miljø for å delegere tilgang til tredjepart. Ta kontakt med Bits via [saksbehandlerportalen](https:/online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi) dersom dere ikke har testbruker registrert for deres foretak i TT02.  <br > Produksjonsmiljø: Bemyndiget person hos Pensjoninnretning må delegere tilgang til tredjepart i Altinn. Se her for [veiledning for å delegere tilgang i Altinn](/assets/Veiledning_delegering_Altinn.pdf).|
|B-8| **Registrering i NAV og innhenting av subscription key**|[API portal](https:/api-portal.nav.no/)<br > [Digdir](https:/status.digdir.no/) |
|C-7|**Pensjoninnretning sender bekreftelse til Bits om at pensjoninnretning er klar for produksjon (Forretning/IT)** <br > - Rapport for integrasjonstest er laget | 

### D - Påkobling til produksjon
*I dette kapittelet finner du oversikt over oppgaver som bør gjøres i forbindelse med produksjon.*

|Oppgaver|
|------------|
|D-1| **Motta bekreftelse fra etatene om at tilgang til eteatenes produksjonsmiljø er opprettet. (IT)** | Bits får bekreftelse fra etatene om tilgang er gitt og informerer dermed pensjoninnretning at de er i produksjon. |
|D-2| **Forvaltningsrutiner (Forretning)** | Tjenestens [Forvaltningsrutiner](/dsop_ajourhold_forvaltningsrutiner) skal innarbeides hos pensjonsinnretningen. Blant annet gjelder dette å tilrettelegge for at alle feilmeldinger, spørsmål til dokumentasjon og endringsønsker sendes til Bits via [saksbehandlerportalen](https:/online3.superoffice.com/Cust28770/CS/scripts/customer.fcgi) |

## Endringslogg

| Dato         | Endring  | Link i dokumentasjon|
|-------------| ------------------------|
|04.04.23    | Oppdatert linker til skatteetatens Github | A6 og C6 |
|02.11.21    | Oppdatert C2/3| [C2 og C3](http:/127.0.0.1:4000/dsop_ajourhold_onboarding.html#c---p%C3%A5kobling-til-test-og-integrasjonstesting)|
