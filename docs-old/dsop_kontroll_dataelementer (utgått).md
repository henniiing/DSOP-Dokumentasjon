---
title: "Dataelementer"
slug: "dsop_kontroll_dataelementer"
id: "dsop_kontroll_dataelementer"
keywords:
  - "sample"
---

*Denne siden gir beskrivelse av alle dataelementer i løsningen "DSOP Kontrollinformasjon".

## ISO20022
Prosjektet har tatt utgangspunkt i definisjonene i den åpne internasjonale standarden ISO20022, men
for noen av feltverdiene som «account type» har prosjektet begrenset hvilke verdier som er gyldige.
* ISO20022: 50+ gyldige verdier.
* DSOP: Alle kontotyper som er- eller har vært registrert i banken skal grupperes inn i de 7 gyldige verdiene (som vises i kolonnen «Array / gyldige verdier» under).

## Hjelp med datafelter
Ved tvil om tolkning av et felt – ta kontakt med [[DSOP@bits.no](mailto:DSOP@bits.no)](mailto:dsop@bits.no).

## Hovedoperasjoner
Hovedoperasjonene som etatene utfører mot bankene er listet under:
* Liste over konti for part (AccountList)
* Hente kontodetaljer med saldo (AccountDetails)
* Roller for konto (Roles)
* Transaksjonshistorikk for konto (Transactions)
* Kort knyttet til konto (Cards)

Flere «dataelementer» i løsningen benyttes i flere av hovedoperasjonene over. De er derfor listet i
alfabetisk rekkefølge* (for å unngå duplisering ved å liste under de hovedoperasjonene de brukes i).
Dette dokumentet skal altså brukes som et oppslagsverk:
• Hva datafeltene betyr – begrepsdefinisjon på norsk
• Gyldige verdier – der dette er relevant


Øvrige relaterte dokumenter: 
* [Funksjonell spesifikasjon](/dsop_kontroll_funksjonalitet) dersom man ønsker å lese mer om faktiske bruksscenarioer (der dataelementene inngår) - se kapittel 1.1.
* [API-speifikasjon](https:/bitsnorge.github.io/dsop-accounts-api/) har beskrivelse på et “OpenAPI Specification” format (.yaml). I tillegg til å beskrive responsen fra bankene, beskriver det også innholdet i forespørselene fra offentlig sektor.


## Account (Konto)


| Feltnavn           | Begrepsdefinisjon                                                                                                                                                               | Array / gyldige verdier               | Kommentarer                                    |
|--------------------|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|-----|------------------------------------------------|
| status*            | angir nåværende status for en konto                                                                                                                                             | enabled, disabled, deleted            | Link til dataelementet [AccountStatus](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#accountstatus)       |
| servicer*          | finansinstitusjon som administrerer en konto på vegne av kontoeier, herunder håndtere registrering av transaksjoner på konto, beregne saldo på konto og gi informasjon om konto |                                       | Link til dataelement [FinancialInstitution](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#financialinstitution-finansinstitusjon) |
| links              | støtte oppdeling av respons for store resultatsett                                                                                                                              |                                       | Se dataelement [Link](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#link-paginering)                       |
| accountIdentifier* | unik identifikator for konto, normalt kontonummer                                                                                                                               |                                       |                                                |
| accountReference*  |unik referanse til kontoen. Unik referanse kan ikke være kontonummeret, eller enkelt dekodes til et kontonummer                                                                                                          |Banken bestemmer hva denne skal være.  | Se dataelement [AccountReference](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#accountreference)          |
| type*              | Kontotype, beskrivelse av ulike typer konto                                                                                                                                                |                                       | Se dataelement [AccountType](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#accounttype)                |
| currency*          | valutakode. koder for offisielle valutaer                                                                                                                                                   | ISO 4217. String pattern: [A-Z]  |                                              |
| primaryOwner*      | angir eier av- eller disponent på konto                                                                                                                                         |                                       | Link til dataelement [AccountRole](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#accountrole)           |
| name               | Navn på konto                                                                                                                           | String (length 1-70)                  |                                                |


## AccountDetail (Kontodetaljer)

Feltnavn|Begrepsdefinisjon |Array / gyldige verdier|Kommentarer 
-----|-----|-----|-----|-----|-----
**AccountDetail**|**Kontodetaljer**|| | |
status*|angir nåværende status for en konto|enabled, disabled, deleted |Link til dataelementet [AccountStatus](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#accountstatus) |
servicer*|finansinstitusjon som administrerer en konto på vegne av kontoeier, herunder håndtere registrering av transaksjoner på konto, beregne saldo på konto og gi informasjon om konto| |Link til dataelement [FinancialInstitution](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#financialinstitution-finansinstitusjon) |
accountIdentifier*|unik identifikator for konto, normalt kontonummer| |  | 
accountReference*|Unik referanse til kontoen. Unik referanse kan **ikke** være kontonummeret, eller enkelt dekodes til kontonummer. |  |Se dataelement [AccountReference](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#accountreference) |
type*|Kontotype. Beskrivelse av ulike typer konto|loanAccount, salaryAccount, currencyAccount, savingsAccount, clientAccount, taxDeductionAccount, businessAccount |Se dataelement [AccountType](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#accounttype) |
currency*|Valutakode. Koder for offisielle valutaer |ISO 4217. String pattern: [A-Z]  |  |
name|Navn på konto|String (length 1-70)|  |
balance| saldo | |Link til dataelement [Balance](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#balance-saldo) | 
primaryOwner*|Rolle på konto. Angir eier av- eller disponent på konto| |Link til dataelement [AccountRole](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#accountrole) |
startDate|Dato for når konto ble opprettet |ISODate string ($date)|  |
endDate|Dato for når konto ble avsluttet |ISODate string ($date)|  |

## AccountDetails

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
**AccountDetails**|**Kontodetaljer**|**Rotelement for respons**| | | 
responseStatus|angir hvorvidt dette er en komplett respons, eller om det også kan finnes data offline som ikke kan hentes gjennom APIene.|partial, complete|Se utdypning av dataelement [ResponseStatus](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#responsestatus) |
account | Konto| | Link til dataelementet [AccountDetail](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#accountdetail-kontodetaljer) | 

## AccountNumber

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
 **AccountNumber**| | | |  
 

## AccountRole

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
 **AccountRole**|**Angir eier av- eller disponent på konto og hvilke rettigheter denne har**| | | 
permission|Disposisjonsrett. Angir hvilken rettighet man har på en konto|noRight, rightToUseAlone, rightToUseWithOther|Banken velger type etter beste evne |
identifier|Det som representerer identiteten til person med rettighet på konto| |Link til dataelement [Identifier](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#identifier) | 
name*|Navn på person med rettighet på konto| (length 1-140)|  |
startDate|dato for når en person fikk tildelt rettighet| ISODatestring($date)| |
endDate|dato for når en person mistet sin rettighet på konto| ISODatestring($date)| |
postalAddress|geografisk adresse| |Link til dataelement [PostalAddress](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#postaladdress-partostadresse) | 
electronicAddress|Elektronisk adresse, epost/telefonnummer | |Link til dataelement [ElectronicAddress (Elektronisk adresse)](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#electronicaddress) |



## AccountReference

Feltnavn|Begrepsdefinisjon |Array / gyldige verdier|Kommentarer 
-----|-----|-----|-----|-----|-----
**AccountReference***|**Unik referanse til kontoen. Unik referanse kan *ikke* være et kontonummer, eller enkelt dekodes til et kontonummer.**|**Banken bestemmer hva denne skal være.**||
	
## Accounts

Feltnavn|Begrepsdefinisjon |Array / gyldige verdier|Kommentarer 
-----|-----|-----|-----|-----|-----
 **Accounts**|**Rot-element for respons**| | | 
responseStatus| Angir hvorvidt dette er en komplett respons, eller om det også kan finnes data offline som ikke kan hentes gjennom api-ene.| |Se dataelement [ResponseStatus](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#responsestatus) |
accounts| | |Link til dataelement [Account (Konto)](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#account-konto)
links|Paginering. Støtte oppdeling av respons for store resultatsett| |Se dataelement [Link](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#link-paginering) |


## AccountStatus


Feltnavn|Begrepsdefinisjon |Array / gyldige verdier|Kommentarer 
-----|-----|-----|-----|-----|-----
**AccountStatus**| |**enabled, disabled, deleted**| | 


## AccountType


Feltnavn|Begrepsdefinisjon |Array / gyldige verdier|Kommentarer 
-----|-----|-----|-----|-----|-----
**AccountType**|**Beskrivelse av ulike typer konto**|**loanAccount, salaryAccount, currencyAccount, savingsAccount, clientAccount, taxDeductionAccount, businessAccount** |**Se ytterligere beskrivelse av de ulike kontotypene under.** |

1. loanAccount (utlånskonto): inneholder oversikt og transaksjoner over midler som part har lånt av finansinstitusjon
2. salaryAccount (lønnskonto): inneholder oversikt og transaksjoner over midler som brukes løpende av en person
3. currencyAccount (valutakonto): inneholder oversikt over oppgjør og transaksjoner i en fastsatt utenlandsk valuta
4. savingsAccount (sparekonto): inneholder oversikt og transaksjoner over midler som brukes til sparing
5. clientAccount (klientkonto): inneholder oversikt og transaksjoner av klienters midler
6. taxDeductionAccount (skattetrekkskonto): inneholder oversikt og transaksjoner over midler som skal benyttes til betaling av forskuddsskatt for ansatte
7. businessAccount (driftskonto): inneholder oversikt og transaksjoner over midler som brukes løpende av en bedrift/virksomhet

*Merk: Alle kontotyper som er- eller har vært registrert i banken skal grupperes inn i de 7 gyldige verdiene listet over.*


## AddressType

Feltnavn|Begrepsdefinisjon |Array / gyldige verdier|Kommentarer 
-----|-----|-----|-----|-----|-----
**AddressType**|**Kategorisering av måter å bruke en adresse både mht. hva slags adresse beskrevet adresse er og hva man ønsker å utføre ved bruk av adressen**|**residential, business, mailTo, deliveryTo**| | |


## Amount

Feltnavn|Begrepsdefinisjon |Array / gyldige verdier|Kommentarer 
-----|-----|-----|-----|-----|-----
**Amount**|**En sum av penger brukt i en kontekst. Dette kan være en transaksjon, saldo o.l.**|**Skal alltid ha positiv verdi**|**creditDebitIndicator skal benyttes for å vise om beløpet er positivt eller negativt.**


## Balance (Saldo)

Beholdning av innskudd og utlån på finanskonto

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
creditLineIncluded*|Kredittgrense inkludert i saldo: angir om kredittgrense er inkludert i saldo eller ikke|true, false|Bør alltid være «false»
amount*| | |Link til dataelement [Amount](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#amount) |
creditDebitIndicator*|credit er positiv saldo debit er negativ saldo| credit, debit| |
 registered*|gjeldende dato og tid for saldoen| | |
type*|saldotype| |Se dataelement [BalanceType](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#balancetype) |
creditLineAmount|Kredittramme innvilget for konto| | 
creditLineCurrency|Valutakode på kredittramme. Koder for offisielle valutaer etter ISO 4217| | 
currency*|Valutakode. Koder for offisielle valutaer etter ISO 4217| | 


## BalanceType

Feltnavn|Begrepsdefinisjon |Array / gyldige verdier|Kommentarer 
-----|-----|-----|-----|-----|-----
**BalanceType**|**Saldotype**|**availableBalance, bookedBalance** | | 


## BankTransactionCode (Transaksjonskode)

Feltnavn|Begrepsdefinisjon |Array / gyldige verdier|Kommentarer 
-----|-----|-----|-----|-----|----- 
domain|Forretningsområde. Høyeste nivå for klassifisering av aktivitet i en forretning| |Link til dataelement [DomainType](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#domaintype) |
family|Produktfamilie. En spesifikasjon av et produkt| |Link til dataelement [FamilyType](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#familytype) |
subFamily|Produktfamilie. En spesifikasjon av et produkt| |Link til dataelement [SubFamilyType](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#subfamilytype) |
freeText| | |String (length 1-500)| 


## CardNumber


Feltnavn|Begrepsdefinisjon |Array / gyldige verdier|Kommentarer 
-----|-----|-----|-----|-----|-----
**CardNumber**|**Kortnummer. Nummer som brukes til å identifisere betalingskort**|**String**| | 


## Cards (Kort)

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
**Cards** |**Rot-element for respons**| | | 
responseStatus|Angir hvorvidt dette er en komplett respons, eller om det også kan finnes data offline som ikke kan hentes gjennom api-ene.| |Se dataelement [ResponseStatus](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#responsestatus)
paymentCards|Betalingskort. Fellesbetegnelse for ulike typer "plastkort" som brukes til kontantuttak og til betaling for varer og tjenester på ulike brukersteder| |Se dataelement [PaymentCard (Betalingskort)](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#paymentcard-betalingskort)
 
 
## CardType

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
**CardType** |**Korttype** | **creditCard, debitCard**| | 


##  CounterParty

Den part som en transaksjon går til eller kommer fra

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|----- 
accountIdentifier|kontonummer | |Sjekk dataelement [AccountNumber](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#accountnumber)
identifier|identifikator | |Sjekk dataelement [Identifier](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#identifier)
name|Transaksjonsmotpartens navn| | 
type*|Type transaksjons-motpart som en transaksjon går til eller kommer fra| |Se dataelement [CounterPartyType](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#counterpartytype)
postalAddress|Transaksjonsmotpartens postadresse| |Skal være adressen til motpart om denne er tilgjengelig. Se dataelement [PostalAddress](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#postaladdress-partostadresse)


## CounterPartyType

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
**CounterPartyType**|**Type transaksjons-motpart som en transaksjon går til eller kommer fra**| **debtor, creditor, ultimateDebtor, ultimateCreditor** | **Motpart er creditor når han/hun mottar penger. Motpart er debtor når han/hun sender penger.**| 

## CountryCode

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
**CountryCode**|**Landkode**|**ISO/_3166-1 (alpha 2 code) Se link i kommentarfeltet**| |**[Link](https:/en.wikipedia.org/wiki/ISO/_3166-1)**

## CreditOrDebit

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
**CreditOrDebit**|**credit er en økning og debit er en redusering** |**credit, debit** | 
 
## CurrencyCode

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
**CurrencyCode**|**Valutakode. Kode for offisielle valutaer** |**Etter ISO 4217 (A-Z)(3,3)** | 

## CurrencyExchange (Valutaomregning)

Omregne et beløp fra en valuta til en annen valuta

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
 **CurrencyExchange**|**Valutaomregning. Omregne et beløp fra en valuta til en annen valuta**| | | 
originalAmount|beløp i sin opprinnelige valuta når konvertering fra / til en annen valuta har skjedd| | 
sourceCurrency*|valuta som et beløp skal konverteres fra i en valutaomregning|Etter ISO 4217 (A-Z)(3,3)| 
targetCurrency*|valuta som et beløp skal konverteres til i en valutaomregning|Etter ISO 4217 (A-Z)(3,3)| 
unitCurrency|valuta som uttrykkes i resultatet av en valutaomregning|Etter ISO 4217 (A-Z)(3,3)| 
exchangeRate*|prisen eller kursen på utenlandsk valuta| | 

## DomainType

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
**DomainType** |**Tjenestekategorier**|**accountManagement, cashManagement, foreignExchange, payments, securities, tradeServices, extended**| | 

## ElectronicAddress

Elektronisk adresse

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
type|Type elektronisk adresse| |Se dataelement [ElectronicAddressType](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#electronicaddresstype)
value*|elektronisk adresse |String (1-2048)| 

## ElectronicAddressType

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
**ElectronicAddressType**| |**phoneNumber, emailAddress**| |  

## FamilyType

Feltnavn|Begrepsdefinisjon |Array / gyldige verdier|Kommentarer 
-----|-----|-----|-----|-----|-----
**FamilyType**|**En spesifikasjon av et produkt**|**additionalMiscellaneousCreditOperations, additionalMiscellaneousDebitOperations, miscellaneousCreditOperations, miscellaneousDebitOperations, openingAndClosing, accountBalancing, cashPooling, notAvailable, customerCardTransactions, counterTransactions, drafts, issuedCashConcentrationTransactions, issuedCreditTransfers, issuedCheques, issuedDirectDebits, lockboxTransactions, merchantCardTransactions, other, receivedCashConcentrationTransactions, receivedCreditTransfers, receivedCheques, receivedDirectDebits, corporateAction, documentaryCollection, standByLetterOfCredit**| | 


## FinancialInstitution (Finansinstitusjon)

Foretak eller annen institusjon som driver finansieringsvirksomhet

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|----- 
identifier*|Det som representerer finansforetaket| |Se dataelement [Identifier](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#identifier)
name*|Finansforetakets navn| | 

## Identifier 

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
**identifier**|**Det som representerer identiteten** |**Identifikasjon av motpart (person/virksomhet)** | 
countryOfResidence|landet hvor part er hjemmehørende| |Se dataelement [CountryCode](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#countrycode)
value|verdi knyttet til en nøkkel| | 
type|Identifikasjonstype|countryIdentificationCode, nationalIdentityNumber |Se dataelement [IdentifierType](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#identifiertype)

## IdentifierType

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
**IdentifierType**|**Identifikasjonstype**|**countryIdentificationCode, nationalIdentityNumber** | 

## ISODate

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
**ISODate**|**Dato**|**Ihht ISO 8601**|

## ISODateTime

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
**ISODateTime**|**Dato og tid**|**Ihht ISO 8601**  | 

## ISOYearMonth

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
**ISOYearMonth**|**År og måned**|**Ihht ISO 8601**|**1** |  | 

## Link (Paginering)

støtte oppdeling av respons forstore resultatsett

Feltnavn|Begrepsdefinisjon |Array / gyldige verdier|Kommentarer 
-----|-----|-----|-----|-----|-----
rel*||String (length 1-16)|Hjelpefelt – ikke nyttelast. 
href*| |String (length 1-500)|Hjelpefelt – ikke nyttelast. 

## PaymentCard 

Feltnavn|Begrepsdefinisjon |Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
**PaymentCard**|**Betalingskort. Fellesbetegnelse for ulike typer "plastkort" som brukes til kontantuttak og til betaling for varer og tjenester på ulike brukersteder**| | | 
cardIdentifier|Kortnummer som brukes til å identifisere betalingskort, må være maskert| |Se dataelement [CardNumber](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#cardnumber)
holderName|Kortholders navn. Part som betalingskort er utstedt til| | 
startDate|Angir at betalingskort er gyldig fra og med måned og år| | 
expiryDate|Angir at betalingskort er gyldig til og med måned og år| | 
cardIssuerName|kortutsteders navn|Finansinstitusjon som har utstedt betalingskort| | 
type| | |Se dataelement [CardType](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#cardtype)
cardIssuerIdentifier|Finansforetaket som har utstedt kortet|Identifier (countryOfResidence, value, type) |Se dataelement [Identifier](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#identifier)


## PostalAddress

Navngitt geografisk sted

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
postCode|nummer på et poststed| | 
type| kategorisering av typer å bruke en adresse både mht. hva slags adresse beskrevet adresse er og hva man ønsker å utføre ved bruk av adressen| |Link til dataelement [AddressType](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#addresstype)
streetName|navn på gate, veg, sti, plass eller område, brukt som del av den offisielle adressen| | 
buildingNumber|et nummer og en eventuell bokstav som entydig identifiserer eiendommer, anlegg, bygninger eller innganger til bygninger innenfor en adresserbar gate, veg, sti, plass eller område| | 
townName|navn på et poststed| | 
country| | |Link til dataelement [CountryCode](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#countrycode)
addressLines|tekst for ustrukturert adresse innen et poststed| String (1-70)| 

## ResponseStatus

Feltnavn|Begrepsdefinisjon |Array / gyldige verdier|Kommentarer 
-----|-----|-----|-----|-----|-----
**responseStatus**|**Angir hvorvidt dette er en komplett respons, eller om det også kan finnes data offline som ikke kan hentes gjennom api-ene.**|**partial, complete**| | **Partial benyttes dersom tjenestetilbyder ikke kan gi en komplett response pga. at informasjon for angitt periode ikke ertilgjengelig via eOppslag. Partial skal også benyttes dersom datakilde ikke vet om responsen via eOppslag er komplett eller ikke. <br > Partial skal ikke brukes hvis årsaken til at data ikke returneres er et driftsproblem feks. serverfeil (feilkoder skal brukes i disse tilfellene).** 

## Roles

Feltnavn|Begrepsdefinisjon |Array / gyldige verdier|Kommentarer 
-----|-----|-----|-----|-----|-----
 **ROLES**|**Rot-element for respons**| | | 
responseStatus|| |Se dataelement [ResponseStatus](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#responsestatus)
roles| | |Se dataelement [AccountRole](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#accountrole)

## SubFamilyType

Feltnavn|Begrepsdefinisjon |Array / gyldige verdier|Kommentarer 
-----|-----|-----|-----|-----|-----
**SubFamilyType**|**En spesifikasjon av et produkt**|**valueDate, chargesGeneric, commissions, interestsGeneric, other, accountClosing, notAvailable, sweeping, topping, zeroBalancing, cashWithdrawal, debitCardPayment, crossBorderCashWithdrawal, cashDeposit, debitAdjustmentGeneric, travellersChequesDeposit, settlementAtMaturity, intraCompanyTransfer, corporateOwnAccountTransfer, crossBorderIntraCompanyTransfer, achDebit, achReturn, achTransactionAtxn, automaticTransfer, bankCheque, booked, domesticCreditTransfer, dividend, sepaCreditTransfer, financialInstitutionCreditTransfer, principalPayment, priorityCreditTransfer, reversalDueToPaymentReturn, achTransactionSala, sameDayValueCreditTransfer, standingOrder, taxes, creditTransferWithAgreedCommercialInformation, crossBorderCreditTransfer, cashLetter, cheques, chequesReversal, openCheque, unpaidCheque, crossBorderCheque, sepaCoreDirectDebit, directDebitPayment, reversalDueToPayment, reversalDueToPaymentCancellationRequest, reversalDueToReturnUnpaidDirectDebit, debit, deposit, adjustments, fees, creditCardPayment, pointOfSalePosPayment, creditAdjustment, settlementAfterCollection**| | 

## Transaction 

Transaksjon: enhver postering på konto

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
transactionIdentifier*|Identifikator som finansforetaket sender må være unik blant alle bankens transaksjoner. Finansforetaket må selv vite hvilken identifikator som er unik. maxLength: 35| | 
references|| |Se dataelement [TransactionReference](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#transactionreference)
creditDebitIndicator*| | |Se dataelement [CreditOrDebit](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#creditordebit)
reversalIndicator|angir om transaksjonen er en korreksjon av en tidligere transaksjon| | 
status*|transaksjonens status| |Se dataelement [TransactionStatus](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#transactionstatus)
transactionCode*|inneholder et sett av elementer for å kunne identifisere type transaksjon| |Se dataelement [BankTransactionCode](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#banktransactioncode-transaksjonskode)
bookingDate*|Bokføringsdato. Dato for når posteringen av transaksjonen er gjennomført av finansinstitusjonen| | 
valueDate*|Rentedato. Dato for når posteringen av transaksjonen er rentebærende| | 
counterParties|Motpart i en transaksjon | |Se dataelementer [CounterParty](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#counterparty)
additionalInfo|Tilleggsinformasjon på transaksjon. Tekstlig beskrivelse av innholdet på en transaksjon| | 
currencyExchange|Valutakurs| |Se dataelementer [CurrencyExchange](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#currencyexchange-valutaomregning)
merchant|Brukersted. Det fysiske stedet transaksjonen ble utført| | 
paymentCard|Betalingskort | |Se dataelementer [PaymentCard (Betalingskort)](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#paymentcard-betalingskort)
registered|Registreringsdato. Dato og tid for når transaksjonen ble utført| | 
amount*|beløp| |Se dataelement [Amount](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#amount)
currency*|valutakode| |Se dataelement [CurrencyCode](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#currencycode)

## TransactionReference

Referanse til transaksjonen

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
value*|verdi| | 
type*|type| |Se dataelement [TransactionReferenceType](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#transactionreferencetype)

## TransactionReferenceType

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
 **TransactionReferenceType**|**Typen av referanse til transaksjonen**|**accountServicerReference, archiveReference, chequeNumber, endToEndIdentification, instructionIdentification, invoiceNumber, mandateIdentification, messageIdentification, otherReference, paymentInformationIdentification, remittanceReference**| | 

## TransactionStatus

Feltnavn|Begrepsdefinisjon|Array / gyldige verdier|Kommentarer
-----|-----|-----|-----|-----|-----
 **TransactionStatus**|**Status for transaksjonen**|**booked, pending, info**| | |

## Transactions

Feltnavn|Begrepsdefinisjon |Array / gyldige verdier|Kommentarer 
-----|-----|-----|-----|-----|-----
responseStatus| | |Se dataelement [ResponseStatus](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#responsestatus)
transaction| | |Se dataelement [Transaction](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#transaction-transaksjon)
links|paginering| |Se dataelement [Link](https:/dokumentasjon.dsop.no/dsop_kontroll_dataelementer.html#link-paginering)

## TrueFalseIndicator

Feltnavn|Begrepsdefinisjon |Array / gyldige verdier|Kommentarer 
-----|-----|-----|-----|-----|-----
 **TrueFalseIndicator**|**Sann eller usann indikator**| **boolean**| | 

## Error

Feilstruktur for alle feilmeldinger

Feltnavn|Begrepsdefinisjon |Array / gyldige verdier|Kommentarer 
-----|-----|-----|-----|-----|-----
code|feilkode, for maskinell håndtering|ACC-0xx| 
message|feilmelding, beskrivelse av feilen som har oppstått| | 


## Endringslogg

| Dato         | Endring  | Link i dokumentasjon|
|-------------| ------------------------|
|     |   | |

 













