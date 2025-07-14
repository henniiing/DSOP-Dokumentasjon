---
title: "Juridiske rammebetingelser Konkursbehandling - innhenting av kontoinformasjon"
slug: "dsop_konkurs_juridisk"
id: "dsop_konkurs_juridisk"
keywords: ["sample"]
---

<br \/>
*Denne siden oppsummerer hvilke juridiske rammebetingelser som Konkursbehandling (modul "Innhenting av kontoinformasjon") opererer under. Innhenting av kontoinformasjon omfatter utlevering av kontoinformasjon om et konkursbo til en bostyrer.*

## Datatilsynet og betraktninger vedr. personvern pr. 29.03.2021

Datatilsynet har i brev 22.03.2021 kommet med sin vurdering og anbefalinger til kontrollprosjektet, som medfører at DSOP aktørene i fellesskap må gjennomgå kontrollinformasjonsløsningen og vurdere hva som må til for å imøtekomme tilsynets kommentarer.
Det er Bits' og pilotbankenes vurdering at dette ikke får konsekvenser for tilknytningsavtalen og avtaler om tilslutning til konkurs. Ingen av disse er behandlet i datatilsynets vurdering.

Når det gjelder bankenes utlevering av informasjon til bostyrer i konkurs, anser Bits og pilotbankene at personvernrisikoene i konkursløsningen er vesentlig lavere enn i kontroll-prosjektet, og at de forhold som er påpekt i Datatilsynets brev ikke gjør seg tilsvarende gjeldende for konkursløsningen. Konkursløsningen er derfor ikke omhandlet i de DPIA'ene som lå til grunn for anmodningen om forhåndsvurdering.
Grunnlaget for bankens opplysningsplikt overfor bostyrer utledes blant annet av konkursinstituttet, herunder konkursens karakter av generalbeslag. Som følge av konkursåpningen fratas debitor rådighet over sine eiendeler, jf. konkursloven &sect; 100 første ledd og bostyrer trer inn i debitors sted. Risikoen for utlevering av overskuddsinformasjon er dermed ikke den samme

Finansforetakene har også mulighet til selv å sjekke at de selskaper det spørres om er konkurs, dette er informasjon som sendes fra Brønnøysundregistrene i forkant av at det spørres på kontoinformasjon igjennom et konkursvarsel. Dersom det ikke er sendt et konkursvarsel på ett org.nr eller fnr skal kontoinformasjonsforespørsel avvises.

Hjemmelsgrunnlaget gir også bare adgang til informasjonsutveksling til den ene bostyrer som er utnevnt for det enkelte bo, ikke en generell tilgang til bankenes kundedata. Brønnøysundregistrene er som forvalter av Bosiden pålagt å kontrollere at det er rett bostyrer som får tilgang til rett boside og som dermed kan spørre på konkursboets kontoer i de relevante bankene.

## Hjemler for Bostyrer (org.nr 974 760 673)

*Bostyrer sin arbeidsflate er i Altinn/BRREG.*

Bostyrer har hjemmel til å innhente kontoopplysninger for å skaffe seg en oversikt over midlene i boet. Dette er i tråd med konkurslovens system, hvor det blant annet i konkurslovens &sect; 79 femte ledd er nedfelt at «med mindre retten beslutter å gjøre det selv, skal bostyreren videre sende underretning om konkursåpningen til (...) de banker (...) hvor skyldneren har innskudd», og i konkurslovens &sect; 85 hvor det fremgår at det påhviler bostyrer «å skaffe rede på hva som hører til boets masse».

Behovene skissert i dette dokumentet faller inn under dagens hjemler.

| Brukstilfelle | Lovhjemmel (BRREG benytter eksakt denne tekststrengen og den er URL-enkodet i forespørselen) | Tilgang til følgende API'er* |
| ----- | ---------- | ------------ |
| Innhenting av kontoopplysninger (kontoliste, saldo, transaksjon og eventuelt innhenting av ytterligere opplysninger*) | kkl. &sect;156 (3) og (4), jf. kkfor.&sect;21 | Kontoliste<br \/>&amp;gt; Kontodetaljer<br \/> &amp;gt; Transaksjoner |

**Bostyrere kan innhente kontohistorikk opptil 12 måneder tilbake i tid, regnet fra konkursdato.*

## Andre relevante lover og bestemmelser

I tillegg til de hjemlene BRREG/Bostyrer kan vise til for å få utlevert kontoinformasjon, må bankene også forholde seg til andre lover og regler - som bl.a. Finanstilsynet og Datatilsynet kontrollerer at de etterlever.

### [IKT Forskriften](https://lovdata.no/dokument/SF/forskrift/2003-05-21-630?q=IKT)

IKT-forskriften &sect; 1, 2. ledd sier *«For eksterne brukere av foretakets IKT-systemer skal det foreligge avtaler som sikrer at forskriftens krav til sikkerhet og dokumentasjon ivaretas».*

På dette grunnlaget ble det besluttet at det bør foreligge en avtale mellom partene (selv om etatene har hjemmel for å kreve å få kontoinformasjon utlevert).

### [Finansforetaksloven](https://lovdata.no/dokument/NL/lov/2015-04-10-17?q=Finansforetaksloven)

Finansforetaksloven &sect; 16-2 (5) gir anvisning på at *«Et finansforetak skal ha kontrollordninger for å sikre at kundeopplysninger blir behandlet på en betryggende måte og at uvedkommende ikke får tilgang eller kjennskap til opplysningene».*

### [Lov om behandling av personopplysninger (personopplysningsloven)](https://lovdata.no/dokument/NL/lov/2018-06-15-38)

Det er avklart mellom avtaleansvarlige hos aktørene at når bankene utleverer kontoinformasjon til bostyrer (basert på de hjemler de har) så er det å anse som oversendelse av data fra behandlingsansvarlig til behandlingsansvarlig. Det betyr at når data er overlevert til bostyrer, så trenger ikke/skal ikke bankene kontrollere hvordan bostyrer behandler de data de har fått.

## Endringslogg

| Dato | Versjon | Endring | Link i dokumentasjon|
| ------------- | -------- | ------------------------ |-----|
| 18.03.22 | 1.1 | Endret fra "Bostyrere skal kun innhente opplysninger fire måneder tilbake i tid fra dagens dato.".&amp;lt;br /Endret til "Bostyrere kan innhente kontohistorikk opptil 12 måneder tilbake i tid, regnet fra konkursdato." &amp;lt;br />Endring er godkjent i DSOP Referansegruppe Bank 28. februar 2022. |[Hjemler for Bostyrer](https://dokumentasjon.dsop.no/dsop_konkurs_juridisk.html#hjemler-for-bostyrer-orgnr-974-760-673)|
| 16.04.21 | 1.0 | Gjeldende versjon for løsningen.&amp;lt;br /&amp;gt;Fremstilt dokumentasjonen mer oversiktlig, og flyttet juridiske rammebetingelser som gjelder utlevering av kontoinformasjon til Brønnøysundregistrene inn på egen side for Konkursbehandling. |  |
