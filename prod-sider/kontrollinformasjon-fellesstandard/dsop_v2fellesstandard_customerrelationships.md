---
title: "Endpoint customerRelationships V.2.0"
slug: "/dsop_v2fellesstandard_customerrelationships"
id: dsop_v2fellesstandard_customerrelationships
---

Lookup customer relationships for governmental institutions (data consumers).

### Abbreviations

| Abbreviations |  | Description |
| --------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| M | Mandatory | Must be part of the response, even if there is no data. Not returning this field in the response can break the receiving API. |
| D | Deliver | Providers are obligated to deliver all requested data if they can. If the data exists in the Producers systems and is possible to deliver through the API, it must be part of the response. If the data does not exist or cannot be delivered through the API, the field can be omitted. |
| MC | Mandatory conditional | - Child fields where Parent field is marked «M»(Mandatory) is crucial to give value to the Parent and must be delivered, even if there is no data. (See separate description for how to return empty or no data in fields.) Not returning this field in the response can break the receiving API. 