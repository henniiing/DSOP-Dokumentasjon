---
title: "Endpoint Roles V.2.0"
slug: "dsop_v2fellesstandard_roles"
id: "dsop_v2fellesstandard_roles"
keywords:
  - "sample"
---

Role holders for the specified account and period. Empty list if no hits.


<br >.	 | Even though this parameter is technically optional, it could become logically mandatory for a given DSOP service.                                                                                           |
| fromDate (M)                   | Date (included) from which the time period for the data delivery starts.	                                                                                                                                                                                                                                                                                                                                                                                                                                | -                                                                                                                                                                                                           | 
| toDate (M)                     | Date (included) from which the time period for the data delivery ends.                                                                                                                                                                                                                                                                                                                                                                                                                                   | -                                                                                                                                                                                                           |

**It is recommended to validate AdditionalReferenceID and AdditionalReferenceIDType according to the legal-mandate.*



## Responses

Values in response from data providers.

All fields are to be provided as long as the data provider holds the data, regardless of whether the 
fields are marked as mandatory or not. This is according to the legal basis.

| Value                                                                                                | Level 1                                                                                                         | Level 2                                                                                                                                |  
|:-----------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| [**responseDetails (D)**](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_roles#responsedetails) |                                                                                                                 |                                                                                                                                        |                                                                                                                                                                                               |
|                                                                                                      | [responseDetails.status (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_roles#responsedetailsstatus)   |                                                                                                                                        |                                                                                                                                                                                               |
|                                                                                                      | [responseDetails.message (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_roles#responsedetailsmessage) |                                                                                                                                        |                                                                                                                                                                                               |
| [**roles (D)**](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_roles#roles)                     |
|                                                                                                      | [roles.permission (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_roles#rolespermission)               |
|                                                                                                      | [roles.identifier (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_roles#rolesidentifier)               |
|                                                                                                      |                                                                                                                 | [roles.identifier.countryOfResidence (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_roles#rolesidentifiercountryofresidence) |
|                                                                                                      |                                                                                                                 | [roles.identifier.value (MC)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_roles#rolesidentifiervalue)                          |
|                                                                                                      |                                                                                                                 | [roles.identifier.type (MC)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_roles#rolesidentifiertype)                            |
|                                                                                                      | [roles.name (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_roles#rolesname)                           |
|                                                                                                      | [roles.startDate (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_roles#rolesstartdate)                 |
|                                                                                                      | [roles.endDate (D)](https:/dokumentasjon.dsop.no/dsop_v2fellesstandard_roles#rolesenddate)                     |


## Description of all response elements in the API


### responseDetails

*Deliver*


### responseDetails.status

*Deliver*

Indicates whether this is a complete answer, or whether there is data offline that cannot be retrieved through the API.
* partial: If there is any data in the producers systems that can be retrieved manually and is not part of the API response,
  or if the provider wishes to be contacted via another channel by the consumer.
* complete: If there is no more available data that can be retrieved manually. All known data has been returned in the response.

responseDetails.status is not to be used as an indicator for paginating.

|[partial, complete]|


### responseDetails.message

*Deliver*

In case of responseDetails.status partial, responseDetails.message indicates the reason why not all data has been delivered
through the API in order to inform the data consumers about the situation, and enable them to decide if it is necessary
to send a digital letter to the Data provider or not. A description of the different messages to return is available in
the document [DSOP Control - Functional specification - 2024-03-06 - Messages in relation with partial.pdf](https:/dokumentasjon.dsop.no/assets/DSOP Control - Functional specification - 2024-03-06 - Messages in relation with partial.pdf).


### roles

*Deliver*

### roles.permission

*Deliver*

Specifies the type of role/right a person or organization has for an account.
* rightToUseAlone: Can issue transactions changing the balance of the account on their own.
* rightToUseWithOther: Can only issue transactions changing the balance of the account together with other party.
* rightToSeeOnly: Can only view account details, but not issue transactions.

|[rightToUseAlone, rightToUseWithOther, rightToSeeOnly]|

### roles.identifier

*Deliver*

### roles.identifier.countryOfResidence

*Deliver*

CountryCode. The country the person or organization belongs to. In ISO 3166-1/Alpha-2 code format.

### roles.identifier.value

*Mandatory conditional*

Personal identification number, D-number or organization number.

### roles.identifier.type

*Mandatory conditional*

* countryIdentificationCode: The national registration code for businesses, enterprise, organizations and companies that is retrieved from the National register for organizations. In Norway this would be from BRREG.
* nationalIdentityNumber: Used for persons. The national identitycode for persons. In Norway this would be P or D numbers from FREG.

|[countryIdentificationCode, nationalIdentityNumber]|

### roles.name

*Deliver*

Name of the person or organization that has the role on the account in the time period.

### roles.startDate

*Deliver*

Start date for when party got a role on the account. This is the last period to be specified if the account is closed 
and re-opened.

### roles.endDate

*Deliver*

End date for when the party lost their rights for a specific role on the account. This is the last period to be 
specified if the account rights have been lost and re-gained. No end date if the party still has rights to the account.




## Change log

| Date     | Version | Change                                                                                         |
|----------|---------|------------------------------------------------------------------------------------------------|
| 20.03.24 | 2.0     | New version of the DSOP Control API generating extensive changes throughout all documentation. |
| 03.05.23 | 1.2     | Added data model for V.1.2, includes responseDetails                                           |

