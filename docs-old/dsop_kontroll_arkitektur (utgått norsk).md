---
title: "Arkitekturdokument (utgått versjon)"
slug: "dsop_kontroll_arkitektur"
id: "dsop_kontroll_arkitektur"
keywords:
  - "sample"
---

**Oppdatert versjon på engelsk: [Se engelsk dokumentasjon](/https:/bitsnorge.github.io/dsop_kontroll_architecturedocument)**
<br ><br ><br >2.2. Avhengig av svar fra steg 2.1. over blir forespørselen om kontoopplysninger sendt via enten (XOR): 
<br >2.2.a. eOppslag: til definerte API (-er) hos finansinstitusjonen**  
<br ><br ><br ><br ><br >1.5.e. Finansforetak krypterer deretter responsen (kontoinformasjon) som deretter sendes til offentlig etat.
[![alt text](/img/arkitektur.jpeg "Overordnet informasjonsmodell for kontoopplysninger")](/img/arkitektur.jpeg)

### Digitalt brev
Dersom et- eller flere finansforetak i listen fra KAR/KFR ikke har implementert eOppslag (se steg 1.2 i figuren over), så sender offentlig etat forespørsel om kontoopplysninger som «Digitalt brev» via finansforetakets meldingsboks i Altinn. Forespørslene på «Digitalt brev» må deretter behandles manuelt av saksbehandlere (eventuelt ved hjelp av Robotic Process Automation – RPA). Når svaret på offentlig etats forespørsel er klart - sendes dette som ustrukturerte data* i samme kanal (Altinn). 

**Merk: for eksempel på et excel-format – eventuelt PDF.*

## Endringslogg

| Dato         | Endring  | Link i dokumentasjon|
|-------------| ------------------------|
|     |   | |

