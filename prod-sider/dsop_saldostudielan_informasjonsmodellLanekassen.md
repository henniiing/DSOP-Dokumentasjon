---
title: "Dsop Saldostudielan InformasjonsmodellLanekassen"
id: "dsop_saldostudielan_informasjonsmodellLanekassen"
slug: "dsop_saldostudielan_informasjonsmodellLanekassen"
sidebar: "main_sidebar"
permalink: "dsop_saldostudielan_informasjonsmodellLanekassen.html"
folder: "section1"
---

## Eksempel på retur

```
\\\\\\{\}
    "Accounts": [
        \\\{\}
            "Balances": [
                \\\{\}
                    "BalanceType": "closingBooked",
                    "BalanceAmount": \\\{\}
                        "currency": "NOK",
                        "amount": 12684.79
                    \\\\\},
                    "LastChangeDateTime": "2020-01-15T21:02:11.307Z"
                \}
            ],
            "Name": "Lån",
            "Bban": "08027202285",
            "Assert": ""
        \},
        \\\\\\{\}
            "Balances": [
                \\\{\}
                    "BalanceType": "closingBooked",
                    "BalanceAmount": \\\{\}
                        "currency": "NOK",
                        "amount": 90.44
                    \\\\\},
                    "LastChangeDateTime": "2020-04-02T06:12:33.593Z"
                \}
            ],
            "Name": "Renter",
            "Bban": "08027202285",
            "Assert": ""
        \},
        \\\\\\{\}
            "Balances": [
                \\\{\}
                    "BalanceType": "closingBooked",
                    "BalanceAmount": \\\{\}
                        "currency": "NOK",
                        "amount": 280.0
                    \\\\\\},
                    "LastChangeDateTime": "2020-03-02T01:52:27.87Z"
                \\}
            ],
            "Name": "Gebyr",
            "Bban": "08027202285",
            "Assert": ""
        \\}
    ],
    "TotalAmount": 0
\\}
```

## Forklaring av retur

* Det returneres 0 til 4 Balances (underkontoer). <br \/>
* BalanceType = closingBooked - Fast verdi<br \/>&amp;gt;
* BalanceAmount.currency = NOK - Fast verdi<br \/> &amp;gt;
* BalanceAmount.amound = desimaltall for beløp<br \/> &amp;gt;
* LastChangeDateTime = Sist endret<br \/> &amp;gt;
* Name - Type - Gebyr/Omkostninger/Renter/Lån<br \/> &amp;gt;
* TotalAmount = Sum gjeld på de underkontoen som er returnert. <br \/>
* Assert: Kan ignoreres<br \/>&amp;gt;

## Innfridd studielånet
Tjenesten gir ikke informasjon om innfridde kunder direkte. Men en innfridd kunde vil komme ut med "TotalAmount=0". Men selv om de aller fleste som har en saldo på null er innfridd, vil ikke dette alltid være tilfelle. Lånekassen kan ha kunder som har null i saldo fordi de kun har stipend eller andre årsaker. Kunder som nylig har innfridd kan også få en negativ gjeld hvis man har betalt inn for mye og man venter på refusjon.

## Rentebelastning i Lånekassen

### Hendelse

I Lånekassen belastes kundens reskontro med renter i forbindelse med "hendelser".<br \/>

Betalingspausen har den samme effekten på rentesaldoen som ved betalingsutsettelse. Det innebærer at det påløper renter som legges til på saldoen. Nye tilbakebetalere vil ofte oppleve at de første innbetalingene i all hovedsak dekker påløpte renter. Det kan også gjelder kunder som har hatt mange betalingsutsettelser. Disse kundene vil langt oftere se at de har en rentesaldo som er høyere enn for de kundene som en periode har vært i ordinær tilbakebetaling og betaler jevnlig på forfall.
