---
title: "API Cards V.1.2"
slug: "dsop_kontroll_apicards_v1_2"
id: "dsop_kontroll_apicards_v1_2"
keywords: ["sample"]
---

List of cards associated with the specified account and period. Empty list if no hits.

[The last chapter in this page](https:/dokumentasjon.dsop.no/dsop_kontroll_apicards_v1_2.html#use-of-the-data-model-per-DSOP-solution) shows what fields to include in the different DSOP Solutions based on the DSOP Control Common Standard.

### Abbreviations

| Abbreviations |  | Description |
| --------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| M | Mandatory | Must be part of the response, even if there is no data. Not returning this field in the response can break the receiving API. |
| D | Deliver | Producers are obligated to deliver all requested data if they can*. If the data exists in the Producers systems and is possible to deliver through the API, it must be part of the response. If the data does not exist or cannot be delivered through the API, the field can be omitted. |
| MC | Mandatory conditional | - Child fields where Parent field is marked «M»(Mandatory) is crucial to give value to the Parent and must be delivered, even if there is no data. (See separate description for how to return empty or no data in fields.) Not returning this field in the response can break the receiving API. 
| AdditionalReferenceID*  (O) | Reference ID when legal-mandate is not adequate alone, or to identify requester at consumer. Should be validated according to the legal-mandate. Formatted encoded text. | Required for some legal mandates. 