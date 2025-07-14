---
title: "Integrasjonstest"
slug: "dsop_ajourhold_integrasjonstest"
id: "dsop_ajourhold_integrasjonstest"
keywords: ["sample"]
---

## Testmiljøer
For OTP tjenesten er det flere testmiljøer og de ulike testmiljøene er linket under. <br \/>
### Felleskomponentene:

[Altinns TT02](https://altinn.github.io/docs/utviklingsguider/samtykke/datakonsument/test-tjeneste/) <br \/>
[Maskinporten test](https://samarbeid.digdir.no/maskinporten/maskinporten/1245)
<br \/>

### Skatteetaten - Tenor
**Informasjon om testdata og [testmiljø](https://skatteetaten.github.io/api-dokumentasjon/test/testmiljo)**

### NAV - API portal

[API portal NAV](https://api-portal.nav.no/)<br \/>
[Dokumentasjon om Aa-registeret og bruk av API'er ](https://navikt.github.io/aareg/tjenester/integrasjon/otp-api/)<br \/>


### Integrasjonstesten

Integrasjonstesten består av et [testdatasett og testcaser](assets/Integrasjonstest_Ajourhold_av_OTP_testdata_og_testcaser_V.1.xlsx) som må gjennomføres før pensjonsinnretningen kan autoriseres for NAV og Skatteetatens produksjonsmiljø.

Når integrasjonstest er utført må følgende [rapport](assets/Ajourhold_av_OTP_Integrasjonstest_rapport_V.1.0.docx) fylles ut. Pensjonsinnretningen skal kunne fremvise rapporten dersom NAV, Skatteetaten eller Bits ber om det.

### Formålet med testdataene

Testdataene vil henge sammen på tvers av API'ene som leveres for OTP, både fra Skatteetaten og NAV, men vi kan ikke garantere at testdataene henger sammen funksjonelt på tvers av andre tjenester som er tilgjengelige for test.

- Understøtte integrasjonstest mellom NAV, Skatteetaten og Pensjonsinnretningene.
- Fokus for integrasjonstesten er på grønne løp, og dataene er ikke ment å representere noen uttømmende funksjonell bredde.
- For funksjonell testing forventes det at den enkelte konsument selv tilrettelegger egne syntetiske testdata, og mocker/simulerer de eksterne tjenestene

### Testbrukere
Skatteetaten tilpasser testdatasettet til hver enkelt pensjonsinnretning og testdatasettet vil sendes fra Skatteetaten ved påkobling.

NB: For pensjonskasser med tredjepartsleverandører må det ifb. generering av testdatasettet påberegnes noe lengre tidsløp, da generering av testdata krever ekstra tilrettelegging i Altinns testmiljø (TT02).

<br \/><br \/>

## Endringslogg

| Dato | Endring | Link i dokumentasjon |
|-------------| ------------------------|
| 04.04.2023 | Oppdatert link til skatteetatens Github | [Link](https://skatteetaten.github.io/api-dokumentasjon/test/testmiljo) |
