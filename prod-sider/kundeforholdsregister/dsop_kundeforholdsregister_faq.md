---
title: "FAQ"
slug: "dsop_kundeforholdsregister_faq"
id: "dsop_kundeforholdsregister_faq"
---

*Send e-post til [[DSOP@bits.no](mailto:DSOP@bits.no)](mailto:dsop@bits.no) dersom FAQ ikke besvarer ditt spørsmål.*

## Maskinporten

### Eksempel token request
```
Eksempel uten signatur: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsIng1YyI6WyJNSUlFNURDQ0E4eWdBd0lCQWdJTEFmTEU3RzEyRGJhTEpOZ3dEUVlKS29aSWh2Y05BUUVMQlFBd1VURUxNQWtHQTFVRUJoTUNUazh4SFRBYkJnTlZCQW9NRkVKMWVYQmhjM01nUVZNdE9UZ3pNVFl6TXpJM01TTXdJUVlEVlFRRERCcENkWGx3WVhOeklFTnNZWE56SURNZ1ZHVnpkRFFnUTBFZ016QWVGdzB4T0RFeU1EY3hNak01TURaYUZ3MHlNVEV5TURjeU1qVTVNREJhTUVveEN6QUpCZ05WQkFZVEFrNVBNUkF3RGdZRFZRUUtEQWRDU1ZSVElFRlRNUlV3RXdZRFZRUUREQXhDU1ZSVElFRlRJRlJGVTFReEVqQVFCZ05WQkFVVENUa3hOamsyTURFNU1EQ0NBU0l3RFFZSktvWklodmNOQVFFQkJRQURnZ0VQQURDQ0FRb0NnZ0VCQU1JUmJGZkUxUnVuVDFsV0VaamYwejJhQitoSm1RUVNyVFNOWVd5WkE0M1RuRmJhbjVlZTFQV1hnV2VaNERzNExaYWVzV05GKzFvdTE1M3hKSmRPQ2M2VDNrRXlrYUNScXQ3UVl4bHczQVova01NV2dtaUllK0lUNmRuSkVBZDB5c1NJaldYQzd0Vktoa0hQRUxPY2RpVkxrVVNDa3ExZVVXQlFaaGNncEJHWlBoSDNVRHE4V2E1SEl5YnJacnFVNGpVMDMrQURpdkxHRTNSeStnV21HNEZodGxtN0xHcEptMmQ1L0UvQXBQcm44alJ6TVNIM3RJbm5hbFVGOHZLZ3dJVEpqTHB5V0F4SFBBQUZTMEE2blMrMnA1dzRNVjY4b0xwdFJOb3Z4UkoxSURoVVdrTW5lQUJFbWg4bkZUTkxNREtWc1Jrc0wxekpjemNiM3VnZXVoTUNBd0VBQWFPQ0FjSXdnZ0crTUFrR0ExVWRFd1FDTUFBd0h3WURWUjBqQkJnd0ZvQVVQNjcxZUF1U28zQWdOVjlhK3Zja29GSUI4RUV3SFFZRFZSME9CQllFRkJPbjhWZk1Vbk9wS1E1UXV0ajcvWmFvOG9zQ01BNEdBMVVkRHdFQi93UUVBd0lFc0RBV0JnTlZIU0FFRHpBTk1Bc0dDV0NFUWdFYUFRQURBakNCdXdZRFZSMGZCSUd6TUlHd01EZWdOYUF6aGpGb2RIUndPaTh2WTNKc0xuUmxjM1EwTG1KMWVYQmhjM011Ym04dlkzSnNMMEpRUTJ4aGMzTXpWRFJEUVRNdVkzSnNNSFdnYzZCeGhtOXNaR0Z3T2k4dmJHUmhjQzUwWlhOME5DNWlkWGx3WVhOekxtNXZMMlJqUFVKMWVYQmhjM01zWkdNOVRrOHNRMDQ5UW5WNWNHRnpjeVV5TUVOc1lYTnpKVEl3TXlVeU1GUmxjM1EwSlRJd1EwRWxNakF6UDJObGNuUnBabWxqWVhSbFVtVjJiMk5oZEdsdmJreHBjM1F3Z1lvR0NDc0dBUVVGQndFQkJINHdmREE3QmdnckJnRUZCUWN3QVlZdmFIUjBjRG92TDI5amMzQXVkR1Z6ZERRdVluVjVjR0Z6Y3k1dWJ5OXZZM053TDBKUVEyeGhjM016VkRSRFFUTXdQUVlJS3dZQkJRVUhNQUtHTVdoMGRIQTZMeTlqY25RdWRHVnpkRFF1WW5WNWNHRnpjeTV1Ynk5amNuUXZRbEJEYkdGemN6TlVORU5CTXk1alpYSXdEUVlKS29aSWh2Y05BUUVMQlFBRGdnRUJBSDV0aTlvN1VyWUtsSU55ekFyeDVEOU95Uk9JVC9wSGpYdUI2Tm14akFKWDJsc3IwY0RCN1dmL0V5dFVCK2Y2TUxzZGpzT1hRc3NhYUtET3lwV3pzZW9BbnlyN2gwRnBwdzkrdW50a3NuNU53MFg4LzdTWnRxY1hpNVVHQklKRUVHVUs3eTNWd0hkVjUvbTN3MmFsdTQ1NW9ibG9RWm9tM0FmTTgvWkg1OGJweEpzOTdwQnpjN0ZERk5sVWdSeHFEQW5QWHpHeGM4VVMzcEcrVzNqQnpWVHY2YkRHMmZ0VGxjQ2JXQW5hQVVGOWw3ZFB2bFVMMGpsMWlGbUNxS3Q2T01YeHNOSnBLaFZLZ1kzRWVyYjk1cDRtRzBZbzUvU28vV1Fqc2FReE1WeTVOL0tIak4yTmQ2MktTV3B4MWt1Vmw2SVBJUHpuelZrdWxiNzkvQStSbVRzPSJdfQ.eyJpYXQiOjE1NzIzNTI3NzAsInNjb3BlIjoiYml0czprdW5kZWZvcmhvbGQud3JpdGUiLCJuYmYiOjE1NzIzNTI3NzcsImV4cCI6MTU3MjM1Mjg3NywiaXNzIjoiZDYxZmU5ZDAtODAyYy00OTliLThlYjgtYzdiNGMzMDg1ZDAxIiwiYXVkIjoiaHR0cHM6Ly9vaWRjLXZlcjIuZGlmaS5uby9pZHBvcnRlbi1vaWRjLXByb3ZpZGVyLyJ9

Header:
/
  "alg": "RS256",
  "typ": "JWT",
  "x5c": [
    "MIIE5DCCA8ygAwIBAgILAfLE7G12DbaLJNgwDQYJKoZIhvcNAQELBQAwUTELMAkGA1UEBhMCTk8xHTAbBgNVBAoMFEJ1eXBhc3MgQVMtOTgzMTYzMzI3MSMwIQYDVQQDDBpCdXlwYXNzIENsYXNzIDMgVGVzdDQgQ0EgMzAeFw0xODEyMDcxMjM5MDZaFw0yMTEyMDcyMjU5MDBaMEoxCzAJBgNVBAYTAk5PMRAwDgYDVQQKDAdCSVRTIEFTMRUwEwYDVQQDDAxCSVRTIEFTIFRFU1QxEjAQBgNVBAUTCTkxNjk2MDE5MDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMIRbFfE1RunT1lWEZjf0z2aB+hJmQQSrTSNYWyZA43TnFban5ee1PWXgWeZ4Ds4LZaesWNF+1ou153xJJdOCc6T3kEykaCRqt7QYxlw3AZ/kMMWgmiIe+IT6dnJEAd0ysSIjWXC7tVKhkHPELOcdiVLkUSCkq1eUWBQZhcgpBGZPhH3UDq8Wa5HIybrZrqU4jU03+ADivLGE3Ry+gWmG4Fhtlm7LGpJm2d5/E/ApPrn8jRzMSH3tInnalUF8vKgwITJjLpyWAxHPAAFS0A6nS+2p5w4MV68oLptRNovxRJ1IDhUWkMneABEmh8nFTNLMDKVsRksL1zJczcb3ugeuhMCAwEAAaOCAcIwggG+MAkGA1UdEwQCMAAwHwYDVR0jBBgwFoAUP671eAuSo3AgNV9a+vckoFIB8EEwHQYDVR0OBBYEFBOn8VfMUnOpKQ5Qutj7/Zao8osCMA4GA1UdDwEB/wQEAwIEsDAWBgNVHSAEDzANMAsGCWCEQgEaAQADAjCBuwYDVR0fBIGzMIGwMDegNaAzhjFodHRwOi8vY3JsLnRlc3Q0LmJ1eXBhc3Mubm8vY3JsL0JQQ2xhc3MzVDRDQTMuY3JsMHWgc6Bxhm9sZGFwOi8vbGRhcC50ZXN0NC5idXlwYXNzLm5vL2RjPUJ1eXBhc3MsZGM9Tk8sQ049QnV5cGFzcyUyMENsYXNzJTIwMyUyMFRlc3Q0JTIwQ0ElMjAzP2NlcnRpZmljYXRlUmV2b2NhdGlvbkxpc3QwgYoGCCsGAQUFBwEBBH4wfDA7BggrBgEFBQcwAYYvaHR0cDovL29jc3AudGVzdDQuYnV5cGFzcy5uby9vY3NwL0JQQ2xhc3MzVDRDQTMwPQYIKwYBBQUHMAKGMWh0dHA6Ly9jcnQudGVzdDQuYnV5cGFzcy5uby9jcnQvQlBDbGFzczNUNENBMy5jZXIwDQYJKoZIhvcNAQELBQADggEBAH5ti9o7UrYKlINyzArx5D9OyROIT/pHjXuB6NmxjAJX2lsr0cDB7Wf/EytUB+f6MLsdjsOXQssaaKDOypWzseoAnyr7h0Fppw9+untksn5Nw0X8/7SZtqcXi5UGBIJEEGUK7y3VwHdV5/m3w2alu455obloQZom3AfM8/ZH58bpxJs97pBzc7FDFNlUgRxqDAnPXzGxc8US3pG+W3jBzVTv6bDG2ftTlcCbWAnaAUF9l7dPvlUL0jl1iFmCqKt6OMXxsNJpKhVKgY3Eerb95p4mG0Yo5/So/WQjsaQxMVy5N/KHjN2Nd62KSWpx1kuVl6IPIPznzVkulb79/A+
   ]
/}
Kommentarer til header:
-	KID skal ikke benyttes hvis det ikke er avklart med Difi (Bruk x5c)
-	x5c skal ikke inkludere sertifikatetkjeden

Eksempel på payload:
/
  "iat": 1572352770,
  "scope": "bits:kundeforhold.write",
  "nbf": 1572352777,
  "exp": 1572352877,
  "iss": "d61fe9d0-802c-499b-8eb8-c7b4c3085d01",
  "aud": "https:/test.maskinporten.no/"
/}

Kommentarer til header:
-	iat, nbf og exp defineres per forespørsel
-	iss skal være klient ID definert i selvbetjeningsportalen
-	aud og scope skal ikke endres
```

### Asymmetriske nøkler

Difi har gitt tilbakemelding om at det er en feil med selvbetjenings API'et som brukes til å forhåndsregistrere asymmetriske nøkler (JWKS). X5c i JWT header kan benyttes i stedet.

## API-spesifikasjon

### Boundary i batch

Det er viktig at boundary er korrekt definert i body og header. I header skal verdi i boundary ikke ha anføreselstegn (").
Hvis KFR returnerer 403 på batch-forespørselen er dette sannsynligvis fordi boundary har blitt definert feil enten i header eller body.

Se eksempel under.

### Eksempel BATCH
```
POST https:/preprod.api.bits.no/kar-ws/api/v1/customers/financialInstitutions/916960190/batch

=== HEADER ===
Authorization: Bearer 
Content-Type: multipart/form-data; boundary=873380600719114776488944
CorrelationID: 2b6fc544-e708-4887-8425-378733eea631
User-Agent: PostmanRuntime/7.18.0

=== BODY ===
--873380600719114776488944
Content-Disposition: form-data; ";

DSOPBANK

--873380600719114776488944
Content-Disposition: form-data; "; ";
Content-Type: text/plain

922203687#2019-11-08,958069367#2011-11-05,921785194#2019-10-15,917439389,989181335#2019-01-03,996128768
--873380600719114776488944--
```

### Datafeltet *activeAccount*
Feltet *activeAccount* indikerer om en kunde har minst én konto som er aktiv og kan motta betalinger via NICS (Norwegian Interbank Clearing System). Verdien settes til true kun dersom kunden eier en slik konto, og kontoen er aktiv per dags dato. I motsatt fall settes verdien til false.

I KFR-tjenesten vil *activeAccount* **alltid**  være false, ettersom KFR opererer på personnivå og ikke har tilgang til kontodetaljer eller informasjon om NICS-berettigelse. Til sammenligning benytter KAR (Konto- og Adresserelasjon) seg av kontodata, og kan derfor avgjøre om en konto oppfyller kriteriene for å være aktiv.

#### Eksempel på respons ####

```
/
  "banks": [
    /
      "organizationID": "XXXXXXXXX",
      "bankName": "BANK NAME",
      "activeAccount": true/false
    /}
  ]
/}
```

