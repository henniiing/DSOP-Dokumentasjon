---
title: "Saldostudielan Informasjonsmodelllanekassen"
id: dsop_saldostudielan_informasjonsmodellLanekassen
slug: "/dsop_saldostudielan_informasjonsmodellLanekassen"
---

## Eksempel på retur

```
/
    "Accounts": [
        /
            "Balances": [
                /
                    "BalanceType": "closingBooked",
                    "BalanceAmount": /
                        "currency": "NOK",
                        "amount": 12684.79
                    /},
                    "LastChangeDateTime": "2020-01-15T21:02:11.307Z"
                /}
            ],
            "Name": "Lån",
            "Bban": "08027202285",
            "Assert": ""
        /},
        /
            "Balances": [
                /
                    "BalanceType": "closingBooked",
                    "BalanceAmount": /
                        "currency": "NOK",
                        "amount": 90.44
                    /},
                    "LastChangeDateTime": "2020-04-02T06:12:33.593Z"
                /}
            ],
            "Name": "Renter",
            "Bban": "08027202285",
            "Assert": ""
        /},
        /
            "Balances": [
                /
                    "BalanceType": "closingBooked",
                    "BalanceAmount": /
                        "currency": "NOK",
                        "amount": 280.0
                    /},
                    "LastChangeDateTime": "2020-03-02T01:52:27.87Z"
                /}
            ],
            "Name": "Gebyr",
            "Bban": "08027202285",
            "Assert": ""
        /}
    ],
    "TotalAmount": 0
/}
```

## Forklaring av retur

* Det returneres 0 til 4 Balances (underkontoer). 
* BalanceAmount.currency = NOK - Fast verdi
* LastChangeDateTime = Sist endret
* TotalAmount = Sum gjeld på de underkontoen som er returnert. 
I Lånekassen belastes kundens reskontro med renter i forbindelse med "hendelser".
Betalingspausen har den samme effekten på rentesaldoen som ved betalingsutsettelse. Det innebærer at det påløper renter som legges til på saldoen. Nye tilbakebetalere vil ofte oppleve at de første innbetalingene i all hovedsak dekker påløpte renter. Det kan også gjelder kunder som har hatt mange betalingsutsettelser. Disse kundene vil langt oftere se at de har en rentesaldo som er høyere enn for de kundene som en periode har vært i ordinær tilbakebetaling og betaler jevnlig på forfall.
