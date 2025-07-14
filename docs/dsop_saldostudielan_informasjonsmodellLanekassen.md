---
title: "Dsop Saldostudielan InformasjonsmodellLanekassen"
id: "dsop_saldostudielan_informasjonsmodellLanekassen"
slug: "dsop_saldostudielan_informasjonsmodellLanekassen"
---

﻿---
title: Tolkning av retur og informasjonsmodell
sidebar: main_sidebar
permalink: dsop_saldostudielan_informasjonsmodellLanekassen.html
folder: section1
---

## Eksempel på retur

```

{
    "Accounts": [
        {
            "Balances": [
                {
                    "BalanceType": "closingBooked",
                    "BalanceAmount": {
                        "currency": "NOK",
                        "amount": 12684.79
                    },
                    "LastChangeDateTime": "2020-01-15T21:02:11.307Z"
                }
            ],
            "Name": "Lån",
            "Bban": "08027202285",
            "Assert": ""
        },
        {
            "Balances": [
                {
                    "BalanceType": "closingBooked",
                    "BalanceAmount": {
                        "currency": "NOK",
                        "amount": 90.44
                    },
                    "LastChangeDateTime": "2020-04-02T06:12:33.593Z"
                }
            ],
            "Name": "Renter",
            "Bban": "08027202285",
            "Assert": ""
        },
        {
            "Balances": [
                {
                    "BalanceType": "closingBooked",
                    "BalanceAmount": {
                        "currency": "NOK",
                        "amount": 280.0
                    },
                    "LastChangeDateTime": "2020-03-02T01:52:27.87Z"
                }
            ],
            "Name": "Gebyr",
            "Bban": "08027202285",
            "Assert": ""
        }
    ],
    "TotalAmount": 0
}

```

## Forklaring av retur

* Det returneres 0 til 4 Balances (underkontoer). <br>
* BalanceType = closingBooked - Fast verdi<br>
* BalanceAmount.currency = NOK - Fast verdi<br>
* BalanceAmount.amound = desimaltall for beløp<br>
* LastChangeDateTime = Sist endret<br>
* Name - Type - Gebyr/Omkostninger/Renter/Lån<br>
* TotalAmount = Sum gjeld på de underkontoen som er returnert. <br>
* Bban: Basic Bank Account Number - Lånekassen har ikke tradisjonelle kontonummer slik vanlige banker har, og dermed er fnr identifikatoren for bban.<br>
* Assert: Kan ignoreres<br>


## Innfridd studielånet
Tjenesten gir ikke informasjon om innfridde kunder direkte. Men en innfridd kunde vil komme ut med "TotalAmount=0". Men selv om de aller fleste som har en saldo på null er innfridd, vil ikke dette alltid være tilfelle. Lånekassen kan ha kunder som har null i saldo fordi de kun har stipend eller andre årsaker. Kunder som nylig har innfridd kan også få en negativ gjeld hvis man har betalt inn for mye og man venter på refusjon.

## Rentebelastning i Lånekassen

### Hendelse

I Lånekassen belastes kundens reskontro med renter i forbindelse med "hendelser".<br>

En hendelse kan for eksempel være en postering av innbetaling, gebyrbelastning, ajorføring i forbindelse med saksbehandling eller månedesavslutning.


### Eksempel 1 - Innbetaling på forfall

Anta at kunden har forfall den 15. Ved en innbetaling 15. august, rentebelastes lånet frem til og med 14. august. Så posteres innbetalingen. Innbetalingen posteres i en bestemt rekkefølge. Først omkostninger, gebyr, renter og til slutt lån. Kunder som er stort sett følger nedbetalingsplanen og er ellers ajours vil da stort sett få dekket opp rentene, og får da en rentesaldo på null.

### Eksempel 2 - Sjekker saldo noen dager etter en hendelse
Anta at det siste som skjedde var innbetalingen i eksempel 1. Kunden sjekker saldoen 20. august. Rentene fra 15. aug til 19. aug er påløpt men ikke bokført. Kunden ser derfor ikke disse rentene. Dersom innbetalingen også dekket lån, vil kunden se en rentesaldo på null kroner.

### Eksempel 3 - Ny hendelse
Anta at det har vært en hendelse som trigget en rentebelastning på kundens konto 20. august. Da vil det være mulig å se en liten rentesaldo som er påløpte renter for de fem dagene (15-19).

### Eksempel 4 - Månedsavslutning
Overgangen til en ny måned er en "hendelse" som trigger en rentebelastning. I begynnelsen av hver måned utfører vi rentebelastning fra forrige hendelse og ut forrige måned. Gitt eksempel 1-3, ville vi ha rentebelastet perioden 20-31. august. Dette blir lagt til på den eksisterende rentesaldoen. Det kunden ser nå, er påløpte renter for hele perioden 15-31. august.

### Eksempel 5 - Ny innbetaling

Vi forutsetter nå at det kommer en ny innbetaling på forfall, 15. september. Før innbetalingen posteres, rentebelaster vi nå perioden 1. september til 14. september. Innbetalingen posteres og rentesaldoen går i null og lånet reduseres med det overskytende. Kunden vil igjen se null renter i saldoen.

### Rentekostnader

Saldotjenesten er ikke egnet til å få et inntrykk av rentekostnaden på studielånet. For faktiske kostnader må kunden se i kontotransaksjonene på Lånekassens Dine sider. Dette blir også oppsummert i kundens årsoppgave. For mange kunder vil nedbetalingsplanen være egnet for å gi et inntrykk av rentekostnaden.

### Throttling
Kunder som går fra å være student til å være tilbakebetaler, har en periode med betalingspause før de får den første regningen. Selv om lånet er rentebærende fra første dag etter endte støtteperioden, tar det noe tid før Lånekassen oppretter en nedbetalingsplan og utfører den første rentebelastningen.<br>

Betalingspausen har den samme effekten på rentesaldoen som ved betalingsutsettelse. Det innebærer at det påløper renter som legges til på saldoen. Nye tilbakebetalere vil ofte oppleve at de første innbetalingene i all hovedsak dekker påløpte renter. Det kan også gjelder kunder som har hatt mange betalingsutsettelser. Disse kundene vil langt oftere se at de har en rentesaldo som er høyere enn for de kundene som en periode har vært i ordinær tilbakebetaling og betaler jevnlig på forfall.
