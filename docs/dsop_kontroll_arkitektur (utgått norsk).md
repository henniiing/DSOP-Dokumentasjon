---
title: "Arkitekturdokument (utgått versjon)"
slug: "dsop_kontroll_arkitektur"
id: "dsop_kontroll_arkitektur"
keywords:
  - "sample"
---

**Oppdatert versjon på engelsk: [Se engelsk dokumentasjon](https://bitsnorge.github.io/dsop_kontroll_architecturedocument.html)**
<br><br><br><br><br>

*Denne siden beskriver tekniske krav til en digitalisert- og standardisert løsning for innhenting
av kontoopplysninger fra finansinstitusjoner i forbindelse med kontrollaktiviteter hos offentlige
etater.*


## Scope

Løsningen er utviklet for bruk i utveksling mellom offentlige etater og finansinstitusjoner, men vil også kunne være aktuell for andre aktører såfremt de har hjemmel eller samtykke fra dataeier til å innhente informasjonen.  
 

Løsningen dekker:

1. Forespørsel med umiddelbar respons (eOppslag)
* Forespørsel om **kundeforhold** – Etat sender en forespørsel til Meldingshub om hvilke banker som har (eller har hatt) kundeforhold (eier/disponent*) til et organisasjonsnummer eller fødselsnummer/D-nummer i en angitt periode
* Forespørsel om **kontoopplysninger** – Etaten sender forespørsel om (detaljerte) opplysninger knyttet til et konkret kundeforhold (organisasjonsnummer, fødselsnummer/D-nummer eller kontonummer). Denne forespørselen vil typisk sendes kun til banker (finansinstitusjoner) som har/hadde et faktisk kundeforhold i angitt periode. 
2. «Digitalt brev» (via bankens meldingsbokser i Altinn)
* Forespørsler om ytterligere opplysninger
* Generelle henvendelser til de banker som inntil videre ikke er digitalisert og derfor ikke kan
svare som i pkt 1 (eOppslag).

**) Støtte for disponent ble innført i KAR i 3. kvartal 2019.*


## Løsningskonsept
Løsningen innebærer en fullautomatisert- og en delautomatisert ("digitalt brev") prosess for innhenting av kontoopplysninger fra bankene.  

Inndelingen baserer seg på følgende to hypoteser: 
* Bankene vil koble seg på den fullautomatiserte løsningen i varierende takt, og det vil i mellomtiden være behov for en "minimumsløsning" for sikker forsendelse  
* Det vil være brukstilfeller ("ytterligere opplysninger") som det ikke er hensiktsmessig å fullautomatisere, i alle fall i begynnelsen (innhenting av dokumentasjon f.eks. signerte kontakter, som ikke foreligger digitalt). 

## Arkitekturforutsetninger

Løsningen er ment å effektivisere utvekslingen av de mest etterspurte data. Løsningen har ikke som ambisjon å håndtere utveksling av alle typer data. En «fall-back» løsning for å håndtere forespørsler som ikke kan håndteres helautomatisk, skal også implementeres (se «digitalt brev» via Altinn). 

Finansinstitusjonene skal levere data fra de kjerneapplikasjoner, databaser og arkiver de har i dag. Det forventes ikke at finansinstitusjoner skal bytte ut sine kjerneapplikasjoner, databaser, arkiver e.l. for å bedre tilfredsstille behov fra DSOP. 

DSOP Kontrollinformasjon skal muliggjøre datautveksling mellom over 120 finansinstitusjoner og i første omgang 4 etater (NAV, Politiet, Skatteetaten og Brønnøysundregistrene – sistnevnte videreformidler kontoinformasjon til bostyrere ifm konkurser). Løsningen tar høyde for ulikheter mellom finansinstitusjonenes interne tekniske løsninger som kjerneapplikasjoner, datalagre, infrastruktur og gjennomføringsevne, herunder interne planer, ressurser, etc.: 
* Ulike versjoner av programvare og tidspunkter for nye utgivelser
* Ulike starttider for leveranser ihht. DSOP
* Ulike ikke funksjonelle egenskaper som kapasitet, responstid, oppetid, etc.
* Muligheter for ulik tolkning av spesifikasjoner
* Ulik tilgang på data, f.eks. ulik indeksering i databasene.


### Føringer

Generelle føringer:
* Standarder benyttes der dette er hensiktsmessig
* Nasjonale felleskomponenter (fra Difi og Brønnøysundregistrene/Altinn) skal gjenbrukes der
dette er hensiktsmessig.

Spesifikke føringer:
* Datautvekslingen baseres på standardiseringsarbeidet rundt ISO 20022 (og har likhetstrekk med
Berlin Groups API spesifikasjoner for PSD2).
	- Der ISO 20022 formatene ikke er egnet, benyttes feltdefinisjoner, syntaks og semantikk
fra standardene.
	- Der det er behov for dataelementer som ikke er spesifisert i ISO 20022, defineres disse
dataelementene i samme stil (dvs. slik vi ville definert dem om vi skulle søkt om å få dem
inkludert i fremtidige versjoner av ISO 20022).
* Etatene skal ikke behøve å vite hvor (i hvilke banker) en person/virksomhet har (hatt) kontoer
* Etatene skal ikke selv måtte lagre / vedlikeholde hvilke banker som har virksomhet i Norge og
hvordan disse kan forespørres om kontoinformasjon
* Restriksjoner for bruk/utveksling av kortnummer gitt av PCI/DSS.

### Avgrensninger

* Kun kunder av norske finansinstitusjoner er inkludert i prosjektets scope
* Hvilke data som kan leveres fra finansinstitusjonene - avhenger av hvor gamle data som finnes og hvilke dataelementer som er lagret for de ulike entitetene, i hvilket kjernesystem, og dermed deres tilgjengelighet: 
	- **Ytelse:**  tiden det tar å få tilgang til data kan variere avhengig av hvordan data kan aksesseres (on-line, nattkjøringer, manuelt arkiv, etc.). Finansinstitusjonene har typisk on-line tilgang til dagens data, mens tilgang til historiske data kan ta noe tid. Det kan medføre at data ikke kan leveres umiddelbart og dermed er uegnet for eOppslag.  
	- **Innhold:** (hvor gamle data som finnes): Finansinstitusjonene er forpliktet til å lagre regnskapsdata i en lang periode (5 år + 1 iht. bokføringsloven §13).  


### Prinsipper

* Noen data er bare relevante i dagens situasjon, andre i et historisk perspektiv - og andre igjen i begge sammenhenger. Offentlige etater kan derfor spørre om dagens situasjon og/eller historiske data - og finansinstitusjonene leverer et snapshot av dagens situasjon eller konto-opplysninger for en periode.  
* Finansinstitusjonene leverer de data de har og forventes å svare på forespørsler så snart data er tilgjengelig.  
* Alle parter skal tilstrebe å unngå dubletter. Generelt betraktes instanser med samme identitet som dubletter. Dubletter kan ignoreres. 
* Behandlingen av en forespørsel kan også avsluttes av finansinstitusjonene når alle forespurte data er levert 
* Offentlige etater har ansvaret for å sammenstille data, både leveranser fra hver enkelt finansinstitusjon og data mottatt fra flere finansinstitusjoner.
* Offentlige etater og finansinstitusjonene er, hver på sin side, ansvarlige for å implementere støtte for juridiske krav, f.eks. lovpålagt sporbarhet og lagring (ansvar for informasjonen innenfor egne systemer).  
* Utforming av eOppslag:
	- Spesifikke og relativt «smale søk» etter data
	- Søkene omfatter kun en «en-til-mange» relasjon (f.eks. søk etter alle konti for en kunde)
	

### Løsningskonsept
Løsningen består av tre hoveddeler:
* Systemløsninger hos de offentlige etatene ("konsumentsiden")
* Systemløsninger hos finansinstitusjonene ("tilbydersiden")
* Fellesløsninger / integrasjonsmekanismer.

Dette dokumentet fokuserer på fellesnevnerne i løsningen - uten å gå inn i detaljer på hva som må gjøres i systemene hos offentlige etater og finansinstitusjonene. 

Løsningen må dekke at det skal finnes følgende to måter å forespørre på:  
1. Indirekte kall: først kall til fellesløsninger for å finne hvilke finansinstitusjon som kan ha relevant kontoinformasjon – og deretter som i punkt 2 under.  
2. Direkte kall: til grensesnitt hos finansinstitusjonene** (eOppslag mot API) eller Altinn (Digitalt Brev til finansinstitusjonens meldingsboks i Altinn).  


#### Informasjonsflyten i løsningen er derfor som følger: 
1. Innhenting av kontoforhold: hvilke finansinstitusjoner har- eller har hatt et kundeforhold til part (fødselsnummer/d-nummer/organisasjonsnummer) i en angitt periode? 
<br><br>1.1. Kall til registrene over kunderelasjoner (via Meldingshub). 
<br><br>
2. Innhenting av kontoopplysninger (kun til de banker som ble identifisert til å ha kundeforhold i angitt periode i steg 1) 
<br><br>2.1. Oppslag i API Katalogen* for å hente «teknisk endepunkt» (teknisk adresse for kall)  
<br>2.2. Avhengig av svar fra steg 2.1. over blir forespørselen om kontoopplysninger sendt via enten (XOR): 
<br><br>2.2.a. eOppslag: til definerte API (-er) hos finansinstitusjonen**  
<br>2.2.b. Digitalt brev: til finansinstitusjonens meldingsboks i Altinn (via CorrespondenceWS). 

**Merk: En sentral felleskomponent (API Katalogen, ref. kapittel 4.1.3 under) holder oversikt over API-adressene til finansinstitusjoner som støtter eOppslag. Øvrige finansinstitusjoner må det sendes Digitalt Brev til (via Altinn).*

***Merk: Alle finansinstitusjoner skal konsolidere data fra alle bakenforliggende systemer og tilgjengeliggjøre disse for data konsumentene gjennom en instans per tjeneste (API):*

*1. Kontoliste*  

*2. Kontodetaljer og saldo*

*3. Transaksjonshistorikk* 

*4. Roller*

*5. Betalingskort.*

### Overordnet prosess ved fullautomatiserte forespørsler om kontoopplysninger

Figuren nedenfor viser overordnet prosess ved fullautomatiserte forespørsler om kontoopplysninger. 

[![alt text](images/dsop_kontroll_arkitektur_flyt.png "Overordnet informasjonsmodell for kontoopplysninger")](images/dsop_kontroll_arkitektur_flyt.png)


Interaksjonen mellom partene foregår i form av «forespørsler» ("online oppslag").
* En forespørsel kan starte med en kundeforholdsforespørsel til Meldingshub (med KAR og KFR bak) for å sile ut de som har et kundeforhold til personen eller organisasjonen som skal undersøkes. Hensikten med dette steget i prosessen er bla. å effektivisere løsningen ved at det kun sendes forespørsler om kontoopplysninger til de banker som faktisk har opplysninger om en person (fødselsnummer/D-nummer) eller en organisasjon (organisasjonsnummer)  
* De offentlige etatene kan også velge å sende forespørsler direkte til finansinstitusjonene uten forutgående kundeforholdsforespørsel. 

Hver finansinstitusjon kan motta en eller flere forespørsler fra offentlige etater. Finans-institusjonene vil svare på forespørselen ved å utføre «tjenester» mot sine applikasjoner.  
* Finansinstitusjonene returnerer de data som er tilgjengelige for umiddelbar respons 
* Dersom finansinstitusjonene ikke finner data vil de svare at finansinstitusjonen ikke har data 
* Hvis en finansinstitusjonene ikke kan levere alle data gjennom et eOppslag, skal de levere statuskoder som beskriver årsaken(e) til at data ikke kan leveres.  

**) Prosessen for håndtering av data som ikke kan leveres i eOppslag var ikke med i scope for fase 1 av prosjektet og
gjenstår derfor å spesifisere. *

### Overordnet informasjonsmodell for kontoopplysninger

[![alt text](images/dsop_kontroll_arkitektur_informasjonsmodell.png "Overordnet informasjonsmodell for kontoopplysninger")](images/dsop_kontroll_arkitektur_informasjonsmodell.png)

| Navn         | Beskrivelse   |
|-------------| ------------------------|
|   Account  |  En spesifikasjon av en klart avgrenset type økonomiske hendelser |
| AccountRole    | Angir eier av- eller disponent på konto  |
| Balance     |  Beholdning av innskudd og utlån på finanskonto |
|    CounterParty | Den part som en transaksjon går til eller kommer fra  |
|    CurrencyExchange |  Omregne et beløp fra en valuta til en annen valuta|
|   FinancialInstitution  |Foretak eller annen institusjon som driver finansieringsvirksomhet (f.eks. innskudd, lånevirksomhet mm).   |
|    PaymentCard |  Fellesbetegnelse for ulike typer «plastkort» som brukes til kontantuttak og til betaling for varer og tjenester på ulike brukersteder |
| PostalAddress    | Navngitt geografisk sted (postadresse)  |
|    Transaction | Enhver postering på konto  |'


## Logisk arkitektur

### Oversikt fellesløsninger - eOppslag

Figuren nedenfor viser hvilke valg som er tatt for felles standarder, integrasjonsmekanismer og
felleskomponenter:

[![alt text](images/dsop_kontroll_arkitektur_fellesstandard.png "Overordnet informasjonsmodell for kontoopplysninger")](images/dsop_kontroll_arkitektur_fellesstandard.png)

#### Standardiserte grensesnitt
Løsningen gjenbruker definisjoner fra ISO 20022 og deler av Berlin Groups arbeide rundt standardisering av APIer for PSD [https://www.berlingroup.org/psd2-access-to-bank-accounts](https://www.berlingroup.org/psd2-access-to-bank-accounts).

#### Registre over kunderelasjoner
Finansnæringen har registre over kunderelasjoner tilgjengelig bak sin Meldingshub. Se beskrivelsen av Meldingshub, KAR og KFR i starten av dokumentet. 

#### Adresseringstjenesten
Adresseringstjenesten API Katalogen hos Brønnøysundregistrene inneholder tekniske endepunkter (adresser) for integrasjon (etatene slår opp her for å finne endepunkts-adressene til bankene).  

Hensikten med å benytte en sentral adresseringstjeneste er å unngå at:
* De offentlige etatene selv må lagre og vedlikeholde detaljer rundt teknisk adressering (tekniske endepunkter for kall) for finansinstitusjonene (100+) 
* Finansinstitusjonene må kommunisere endringer (i teknisk adressering) til alle offentlige etater som skal benytte deres tjenester. 


### Systemløsninger hos finansinstitusjonene

Finansinstitusjonene i løsningen har etablert hensiktsmessige løsninger for automatisert uthenting av kontoinformasjon. Finansinstitusjonene har forskjellig arkitektur, løsninger og prosesser, det betyr at valg av løsning finansinstitusjon for finansinstitusjon vil variere utfra hva som er mest hensiktsmessig og kostnadseffektivt. For det valgte løsningskonseptet må finansinstitusjonene: 

* Implementere et maskin-til-maskin-grensesnitt (API) for online oppslag fra offentlige etater for å hente kontoopplysninger med så lang historikk som bankene har tilgjengelig.  
* Manuelt sette opp sin meldingsboks i Altinn (CorrespondenceWS) for mottak av kontoopplysnings-forespørsler i form av «digitale brev» med manuell behandling av forespørsel om hhv. kontoopplysninger eller ytterligere opplysninger. 

### Systemløsninger hos offentlige etater

Konsumentene (etatene) i løsningen har laget IT systemstøtte for bl.a.:
* Integrasjon mot- og bestilling og mottak av opplysninger gjennom Meldingshub (med KAR og KFR bak), API Katalogen og finansinstitusjonenes API-tjenester 
* Forsendelse og mottak av «digitale brev» gjennom Altinn
* Sak og arkivføring av opplysningene
* Tilgangskontroll og sletting av opplysninger som ikke skal oppbevares lengre.

### Informasjonsflyt - eOppslag
Figuren under illustrerer informasjonsflyten i forbindelse med forespørsel om kontoinformasjon fra etatene til bank og hvert av stegene i prosessen er beskrevet under. 

1.1 Offentlig sektor forespør et access token fra Maskinporten (autorisasjonsserver hos Difi) for å få tilgang til Meldingshub. 
<br><br>1.2 Offentlig etat henter informasjon fra Meldingshub om objektets kundeforhold basert på personnummer/D-nummer eller organisasjonsnummer. Liste med finansforetakenes navn og organisasjonsnummer returneres til offentlig etat. 
<br><br>1.3 Offentlig etat forespør API-katalogen hos Brønnøysundregistrene om teknisk(e) endepunkt(er) for finansforetak(ene) objektet har kundeforhold i. 
<br><br>1.4 Offentlig sektor forespør et access token fra Maskinporten (autorisasjonsserver hos Difi) for å få tilgang til finansforetakets API. 
<br><br>1.5 Offentlig sektor forespør kontoopplysinger fra API-endepunktene til finansforetakene (kontoliste, kontodetaljer, transaksjoner, kort og/eller roller) med et access token (se pkt 1.4). 
<br><br>1.5.a. Finansforetakene validerer krav og signatur i mottatt access token. Det anbefales at validering gjøres lokalt. Servernøkkel for autorisasjon (verifisering av Difi sin signatur) må hentes fra Difi hvis den ikke allerede er lagret i lokal cache. 
<br><br>1.5.b. Finansforetak henter forespurt data fra interne systemer og genererer API-respons
<br><br>1.5.c.  Finansforetak benytter BCL (Business Certificate Locator – hos Difi) for å finne den riktige BCP-tilbyderen hvor offentlig etat har lastet opp sitt sertifikat. 
<br><br>1.5.d. Finansforetak henter krypteringsnøkkel i offentlig sertifikat fra BCP (Business Certificate Publisher), som kan valgfritt lagres i lokal cache (anbefalt) 
<br><br>1.5.e. Finansforetak krypterer deretter responsen (kontoinformasjon) som deretter sendes til offentlig etat.
[![alt text](images/arkitektur.jpeg "Overordnet informasjonsmodell for kontoopplysninger")](images/arkitektur.jpeg)

### Digitalt brev
Dersom et- eller flere finansforetak i listen fra KAR/KFR ikke har implementert eOppslag (se steg 1.2 i figuren over), så sender offentlig etat forespørsel om kontoopplysninger som «Digitalt brev» via finansforetakets meldingsboks i Altinn. Forespørslene på «Digitalt brev» må deretter behandles manuelt av saksbehandlere (eventuelt ved hjelp av Robotic Process Automation – RPA). Når svaret på offentlig etats forespørsel er klart - sendes dette som ustrukturerte data* i samme kanal (Altinn). 

**Merk: for eksempel på et excel-format – eventuelt PDF.*

## Endringslogg

| Dato         | Endring  | Link i dokumentasjon|
|-------------| ------------------------|
|     |   | |

