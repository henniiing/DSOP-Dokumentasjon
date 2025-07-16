---
title: "API Roles V.1.2"
slug: "dsop_kontroll_apiroles_v1_2"
id: "dsop_kontroll_apiroles_v1_2"
keywords:
  - "sample"
---

Role holders for the specified account and period. Empty list if no hits.

[The last chapter in this page](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2.html#use-of-the-data-model-per-DSOP-solution) shows what fields to include in the different DSOP Solutions based on the DSOP Control Common Standard.

### Abbreviations

| Abbreviations |                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                              |
|---------------|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| M             | Mandatory             | Must be part of the response, even if there is no data. Not returning this field in the response can break the receiving API.                                                                                                                                                                                                                                                                                                            |
| D             | Deliver               | Producers are obligated to deliver all requested data if they can*. If the data exists in the Producers systems and is possible to deliver through the API, it must be part of the response. If the data does not exist or cannot be delivered through the API, the field can be omitted.                                                                                                                                                |
| MC            | Mandatory conditional | - Child fields where Parent field is marked «M»(Mandatory) is crucial to give value to the Parent and must be delivered, even if there is no data. (See separate description for how to return empty or no data in fields.) Not returning this field in the response can break the receiving API. <br> <br> - As long as a parent field marked with “D” is part of the response, the child field marked with “MC” must also be returned. |
| O             | Optional              | Only used in input parameters                                                                                                                                                                                                                                                                                                                                                                                                            |

  **If the data provider cannot deliver all requested data through Control API, but have more data offline, [responseStatus](https://dokumentasjon.dsop.no/dsop_kontroll_apiaccountlist#responsestatus) must return value "partial".*



## Input parameters

Values set by data consumer.

It is the data providers responsibility to validate all requests' from the data consumers and to make sure that all requests are validated well enough. See some [recommendations regarding validation of requests in Control API](https://dokumentasjon.dsop.no/dsop_kontroll_validation.html). 

| Parameter                      | Description                                                                                                                                                              | Comment                                                                                                                                                                                                                                |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| accountReference (M)           | A unique reference to the account, but should not be the account number and not simply decoded to an account number.                                                     |                                                                                                                                                                                                                                        |
| AccountInfoRequestID (M)       | Consumers case reference id/number                                                                                                                                       | [Link to Specification of eOppslag](https://dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#accountinforequestid)                                                                                  |
| CorrelationID (M)              | Unique identifier for the technical request                                                                                                                              | [Link to Specification of eOppslag](https://dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#correlationid)                                                                                         |
| Legal-Mandate* (M)             | Legal basis the financial institution should validate. Formatted encoded text.                                                                                           | [Link to Juridiske rammebetingelser](https://dokumentasjon.dsop.no/dsop_kontroll_juridisk.html)                                                                                                                       |
| AdditionalReferenceID*  (O)    | Reference ID when legal-mandate is not adequate alone, or to identify requester at consumer. Should be validated according to the legal-mandate. Formatted encoded text. | Required for some legal mandates. <br>[More information in Specification of eOppslag](https://dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid) |
| AdditionalReferenceIDType* (O) | What type of reference to expect in AdditionalReferenceID                                                                                                                | Required for some legal mandates. <br>[More information in Specification of eOppslag](https://dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid) |
| fromDate  (O)                  | From date, current date if not stated                                                                                                                                    |                                                                                                                                                                                                                                        |
| toDate (O)                     | To date, current date if not stated                                                                                                                                      |                                                                                                                                                                                                                                        |

**It is recommended to validate AdditionalReferenceID and AdditionalReferenceIDType according to the legal-mandate ([see what legal mandates which requires information in AdditionalReferenceID](https://dokumentasjon.dsop.no/dsop_kontroll_specification_of_eoppslag.html#additionalreferenceidtype-and-additionalreferenceid)). Legal-mandate should always be logged with belonging AdditionalReferenceID.*


## Responses

Values in response from financial institutions.

All fields are to be provided as long as the bank/financial institution holds the data, regardless of whether the fields are marked as mandatory or not. This is according to the legal basis.

| Value                                                                                                                 | Level 1                                                                                                                          | Level 2                                                                                                                                                 |  
|:----------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
| [**responseStatus (D)**](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#responsestatus)   |
| [**responseDetails (D)**](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#responsedetails) |                                                                                                                                  |                                                                                                                                                         |                                                                                                                                                                                               |
|                                                                                                                       | [responseDetails.status (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#responsedetailsstatus)   |                                                                                                                                                         |                                                                                                                                                                                               |
|                                                                                                                       | [responseDetails.message (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#responsedetailsmessage) |                                                                                                                                                         |                                                                                                                                                                                               |
| [**roles (D)**](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#roles)                     |
|                                                                                                                       | [roles.permission (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolespermission)               |
|                                                                                                                       | [roles.identifier (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolesidentifier)               |
|                                                                                                                       |                                                                                                                                  | [roles.identifier.countryOfResidence (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolesidentifiercountryofresidence) |
|                                                                                                                       |                                                                                                                                  | [roles.identifier.value (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolesidentifiervalue)                          |
|                                                                                                                       |                                                                                                                                  | [roles.identifier.type (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolesidentifiertype)                            |
|                                                                                                                       | [roles.name (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolesname)                           |
|                                                                                                                       | [roles.startDate (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolesstartdate)                 |
|                                                                                                                       | [roles.endDate (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolesenddate)                     |
|                                                                                                                       | [roles.postaladdress (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolespostaladdress)         |
|                                                                                                                       |                                                                                                                                  | [roles.postaladdress.postCode (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolespostaladdresspostcode)               |
|                                                                                                                       |                                                                                                                                  | [roles.postaladdress.type (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolespostaladdresstype)                       |
|                                                                                                                       |                                                                                                                                  | [roles.postaladdress.streetName (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolespostaladdressstreetname)           |
|                                                                                                                       |                                                                                                                                  | [roles.postaladdress.buildingNumber (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolespostaladdressbuildingnumber)   |
|                                                                                                                       |                                                                                                                                  | [roles.postalAddress.townName (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolespostaladdresstownname)               |
|                                                                                                                       |                                                                                                                                  | [roles.postalAddress.country (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolespostaladdresscountry)                 |
|                                                                                                                       |                                                                                                                                  | [roles.postalAddress.addressLines (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolespostaladdressaddresslines)       |
|                                                                                                                       | [roles.electronicAddress (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#roleselectronicaddress) |
|                                                                                                                       |                                                                                                                                  | [roles.electronicAddress.type (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#roleselectronicaddresstype)              |
|                                                                                                                       |                                                                                                                                  | [roles.electronicAddress.value (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#roleselectronicaddressvalue)            |

## Description og all response elements in the API


### responseStatus

*Deliver*

Indicates whether this is a complete answer, or whether there is data offline that can not be retrieved through the API.
* partial: If there is any data in the producers systems that can be retrieved manually and is not part of the API response,
  or whether the provider wishes to be contacted via another channel by the consumer.
* complete: If there are no more available data that can be retrieved manually. All known data has been returned in the response.

responseStatus is not to be used as an indicator for paginating.

|[partial, complete]|


### responseDetails

*Deliver*

### responseDetails.status

*Deliver*

Indicates whether this is a complete answer, or whether there is data offline that can not be retrieved through the API.
* partial: If there is any data in the producers systems that can be retrieved manually and is not part of the API response,
  or whether the provider wishes to be contacted via another channel by the consumer.
* complete: If there are no more available data that can be retrieved manually. All known data has been returned in the response.

responseDetails.status is not to be used as an indicator for paginating.

|[partial, complete]|

### responseDetails.message

*Deliver*

In case of responseDetails.status partial, responseDetails.message indicates the reason why not all data has been delivered
through the API in order to inform the data consumers about the situation, and enable them to decide if it is necessary
to send a digital letter to the Data provider or not
					

### roles	 	 	 

*Deliver*

### roles.permission	 	 

*Deliver*

Specifies the type of role/right a person or organization has for an account.
* rightToUseAlone: Can issue transactions changing the balance of the account on its own
* rightToUseWithOther: Can only issue transactions changing the balance of the account together with other party
* rightToSeeOnly: Can only view account details, but not issue transactions. 									

|[rightToUseAlone, rightToUseWithOther, rightToSeeOnly]|

### roles.identifier	 	 

*Deliver*

### roles.identifier.countryOfResidence	 

*Deliver*

CountryCode. The country the person or organization belongs to. In ISO 3166-1/Alpha-2 code format.			

### roles.identifier.value	 

*Mandatory conditional*

Birth and social security number or organization number.									

### roles.identifier.type	 

*Mandatory conditional*

* countryIdentificationCode: The national registration code for businesses, enterprise, organizations and companies that is retrived from the National register for organizations. In Norway this would be from BRREG.
* nationalIdentityNumber: Used for persons. The national identitycode for persons. In Norway this would be P or D numbers from FREG.									

|[countryIdentificationCode, nationalIdentityNumber]|

### roles.name	 

*Deliver*

Name of the person or organization has the role on the account.							

### roles.startDate

*Deliver*

Start date for when party got the account role. This is the last period to be specified if the account rights has been lost then re-gained. ISODate (yyyy-mm-dd).

### roles.endDate

*Deliver*

End date for when the party lost their rights on the account. This is the last period to be specified if the account rights has been lost then re-gained. No end date if the party still have right to the account. ISODate (yyyy-mm-dd).

### roles.postalAddress	 

*Deliver*

The address of the party who owns the account.										 
### roles.postalAddress.postCode

*Deliver*

Registered postalcode for the role holders address.									
### roles.postalAddress.type	 

*Deliver*

Type of registered address for the role holder.

|[residential, business, mailTo, deliveryTo]|

### roles.postalAddress.streetName

*Deliver*

Street address registered on the role holder.

### roles.postalAddress.buildingNumber

*Deliver*

Buildingnumber for the street address registered on the role holder.										

### roles.postalAddress.townName

*Deliver*

Postalcode location name, reffering to the Postalcode and street address for the role holder.

### roles.postalAddress.country	 

*Deliver*

Country code for the registered address of the role holder. countryCode In ISO 3166-1/Alpha-2 code format.

### roles.postalAddress.addressLines

*Deliver*

Additional address information, freetext.

### roles.electronicAddress	 	 

*Deliver*

### roles.electronicAddress.type	 

*Mandatory conditional*

|[phoneNumber, emailAddress]|

### roles.electronicAddress.value

*Mandatory conditional*

Registered phone number or e-mailaddress for primary owner, if any. Any format. Phonenumber may start with country suffix.


## Use of the data model per DSOP solution
The table below shows what fields to include in the different DSOP Solutions.

| Field                                                                                                                                                   | 	Kontrollinformasjon (Skatteetaten, NAV, Politi) | 	Konkursbehandling (Brreg) |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|----------------------------|
| [**responseStatus (D)**](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#responsestatus)                                     | ✅                                                | N/A                        |
| [**responseDetails (D)**](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#responsedetails)                                   | ✅                                                | N/A                        |
| [responseDetails.status (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#responsedetailsstatus)                          | ✅                                                | N/A                        |
| [responseDetails.message (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#responsedetailsmessage)                        | ✅                                                | N/A                        |
| [**roles (D)**](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#roles)                                                       | ✅                                                | N/A                        |
| [roles.permission (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolespermission)                                      | ✅                                                | N/A                        |
| [roles.identifier (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolesidentifier)                                      | ✅                                                | N/A                        |
| [roles.identifier.countryOfResidence (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolesidentifiercountryofresidence) | ✅                                                | N/A                        |
| [roles.identifier.value (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolesidentifiervalue)                          | ✅                                                | N/A                        |
| [roles.identifier.type (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolesidentifiertype)                            | ✅                                                | N/A                        |
| [roles.name (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolesname)                                                  | ✅                                                | N/A                        |
| [roles.startDate (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolesstartdate)                                        | ✅                                                | N/A                        |
| [roles.endDate (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolesenddate)                                            | ✅                                                | N/A                        |
| [roles.postaladdress (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolespostaladdress)                                | ✅                                                | N/A                        |
| [roles.postaladdress.postCode (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolespostaladdresspostcode)               | ✅                                                | N/A                        |
| [roles.postaladdress.type (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolespostaladdresstype)                       | ✅                                                | N/A                        |
| [roles.postaladdress.streetName (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolespostaladdressstreetname)           | ✅                                                | N/A                        |
| [roles.postaladdress.buildingNumber (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolespostaladdressbuildingnumber)   | ✅                                                | N/A                        |
| [roles.postalAddress.townName (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolespostaladdresstownname)               | ✅                                                | N/A                        |
| [roles.postalAddress.country (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolespostaladdresscountry)                 | ✅                                                | N/A                        |
| [roles.postalAddress.addressLines (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#rolespostaladdressaddresslines)       | ✅                                                | N/A                        |
| [roles.electronicAddress (D)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#roleselectronicaddress)                        | ✅                                                | N/A                        |
| [roles.electronicAddress.type (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#roleselectronicaddresstype)              | ✅                                                | N/A                        |
| [roles.electronicAddress.value (MC)](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#roleselectronicaddressvalue)            | ✅                                                | N/A                        |


## Change log

| Date     | Change                                               | Link in document                                                                                              |
|----------|------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| 03.05.23 | Added data model for V.1.2, includes responseDetails | [responseDetails](https://dokumentasjon.dsop.no/dsop_kontroll_apiroles_v1_2#responseDetails) |

