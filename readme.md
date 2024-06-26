# **_Zixflow SDK_**

The Zixflow SDK provides a node js API for Zixflow services. You can use this API to build libraries or applications for node js.

Using this SDK makes it possible to realize a number of compelling use cases and there are several things you can build.

https://zixflow.com/

---

# Table of Contents

1. [Features](#features)
2. [Installing the SDK](#installing-the-sdk)
3. [Configuration of SDK](#configure-your-credentials)
4. [Working with SDK](#working-with-zixflow-sdk)
   - [Generate API key](#generate-api-key)
   - [All Services](#accessing-zixflow-services)
5. [Accessing Individual Service](#accessing-individual-services)
   1. [SMS](#sms-service)
   2. [Email](#email-service)
   3. [WhatsApp](#whatsApp-service)
   4. [Collections](#collection-records)
   5. [Lists](#list-entries)

---

# Features

Our APIs are based around REST architecture

- Our AI Engine enables maximum delivery with automated backup routing.
- Our APIs use the basic HTTPS request codes: POST, GET, PATCH, DELETE.
- You can import and test all our full API collection in the Postman app by clicking on the ’ Run in Postman’ button.

Note: Any requests made using the valid API credentials will affect the real-time data in your zixflow account &excl;

---

# Setting Up the SDK for node js

### Installing the SDK

The preferred way to install the Zixflow SDK for node js is to use the npm package manager for node js.<br>

Go to your node js project root directory.

```js
cd your_project_directory
```

Then simply type the following into a terminal window

```js
 npm install zixflow
```

This will install the Zixflow SDK into your node js project.

### Loading the SDK

After you install the SDK, If you are using **CommonJS** you can load the Zixflow SDK in your node js application by following the below steps

```js
const Zixflow = require('zixflow');
const zixflow = new Zixflow('Your_Zixflow_api_key');
```

If you are using **ES6 Modules** , follow these steps.

```js
import Zixflow from 'zixflow';
const zixflow = new Zixflow('Your_Zixflow_api_key');
```

---

# Configure Your Credentials

You need to provide credentials to Zixflow SDK so that only your account and its resources are accessed by the SDK. For more information about obtaining your account credentials, see [Getting Your Credentials](https://zixflow.com/).

To hold this information, we recommend you create an environment variable with <strong>ZIXFLOW_API_KEY</strong> as it's key and it's value should hold your <strong>zixflow api key</strong>.

```js
ZIXFLOW_API_KEY = your_zixflow_api_key;
```

<mark>**We do not recommend hard coding your Zixflow credentials in your scripts. Hard coding credentials poses a risk of exposing your api key.**</mark>

```js
const zixflow = new Zixflow(process.env.ZIXFLOW_API_KEY);
```

---

# Working with Zixflow SDK

The Zixflow SDK for node js provides access to services that it supports through a collection of service instances. Each supported Zixflow service offer low-level APIs for using service features and resources.

The services exposed through the SDK for node js follow the request-response pattern to exchange messages with calling applications. In this pattern, the code invoking a service submits an HTTPS request to an endpoint for the service. The request contains parameters needed to successfully invoke the specific feature being called. The service that is invoked generates a response that is sent back to the requestor. The response contains data if the operation was successful or error information if the operation was unsuccessful.

The current services available under this version of SDK are mentioned below

- SMS
- Email
- WhatsApp

When you're working with the Node.js SDK, you just need to include the SDK package in your app using 'require' or ES6 imports. This way, you'll have support for all the services available.

---

# Generate API key

To get new API Token , Firstly you need to register with zixflow and create an account. Click on this [link](https://docs.zixflow.com/api-reference/authentication) to visit and follow the instructions to complete the sign-up process and generate API key.

---

# Accessing Zixflow Services

Import the SDK for node js as shown below . This includes the entire SDK into your code.

```js
//For **CommonJs**
const Zixflow = require('zixflow');
```

```js
//For **ES6**
import Zixflow from 'zixflow';
```

Begin by creating an instance of the Zixflow SDK and assign it to a variable.

```js
const zixflow = new Zixflow(process.env.ZIXFLOW_API_KEY);
```

To utilize service features via the Zixflow class, you start by accessing a service. This grants you access to a set of features offered by the service instance underneath. Typically, there's one service instance for each service.

The provided code allows for the independent access of classes associated with the SMS, Email, and WhatsApp services.

```js
const sms = zixflow.sms;

const email = zixflow.email;

const whatsApp = zixflow.whatsApp;
```

---

# Accessing Individual Services

To access a specific service, start by importing that service.

```js
//For **CommonJs**
const SMS = require('zixflow/lib/services/sms/sms');
const sms = new SMS(process.env.ZIXFLOW_API_KEY);

const Email = require('zixflow/lib/services/email/email');
const email = new Email(process.env.ZIXFLOW_API_KEY);

const WhatsApp = require('zixflow/lib/services/whatsApp/whatsApp');
const whatsApp = new WhatsApp(process.env.ZIXFLOW_API_KEY);
```

```js
//For **ES6**
import SMS from 'zixflow/lib/services/sms/sms.js';
const sms = new SMS(process.env.ZIXFLOW_API_KEY);

import Email from 'zixflow/lib/services/email/email.js';
const email = new Email(process.env.ZIXFLOW_API_KEY);

import WhatsApp from 'zixflow/lib/services/whatsApp/whatsApp.js';
const whatsApp = new WhatsApp(process.env.ZIXFLOW_API_KEY);
```

---

# SMS Service

Programmatically send high volumes of text messages globally. Your users can get OTP, alerts, stock prices, account balance, transaction statements, discounts, offers and much more all over a message.

Zixflow SMS service provides easy api for sending and scheduling text messages which you can easily integrate in your node js application.

## Using SMS service

Start by integrating the Zixflow SDK into your Node.js project, using either CommonJS or ES6 imports.

```js
//For **CommonJs**
const Zixflow = require('zixflow');

or;

//For **ES6**
import Zixflow from 'zixflow';
```

Create a new instance of Zixflow SDK. Make sure you have configured your apikey in environment variable.

```js
const zixflow = new Zixflow('Your Zixflow Api key');
```

Access SMS service from the SDK.

```js
const sms = zixflow.sms;
```

Alternatively if you do not want to load whole sdk you can also access individual services. To access individual service begin by importing that service

```js
//For **CommonJs**
const SMS = require('zixflow/lib/services/sms/sms');

or;

//For **ES6**
import SMS from 'zixflow/lib/services/sms/sms.js';
```

Create an instance of the service and assign it to a variable. Make sure you have configured your apikey in environment variable.

```js
const sms = new SMS('your_zixflow-api-key');
```

## Sending a text message

You can easily send text message by calling the <strong>sendSMS method</strong> from SMS class. Pass the data object in the following format

## <center>Required configuration options for SMS service

|      option      | required/optional |  type   |                                                           description                                                           |
| :--------------: | :---------------: | :-----: | :-----------------------------------------------------------------------------------------------------------------------------: |
|     senderid     |    `REQUIRED`     | string  |                                            The registered and approved Sender name.                                             |
|      route       |    `REQUIRED`     | string  |                        Type of connectivity for the message, such as promotional, transactional, or OTP.                        |
|      number      |    `REQUIRED`     | string  |                            The phone number with a country prefix to which the message will be sent.                            |
|     message      |    `REQUIRED`     | string  |                                        The content of the message that you want to send.                                        |
|     isFlash      |    `OPTIONAL`     | boolean |               Set this parameter to true if you want to send a flash SMS via the API; otherwise, set it to false.               |
|  dltTemplateId   |    `OPTIONAL`     | string  |      Only applicable for India. If you want to pass a template ID directly via the API, you can do so with this parameter.      |
|   dltEntityId    |    `OPTIONAL`     | string  |      Only applicable for India. If you want to pass an entity ID directly via the API, you can do so with this parameter.       |
|    reportURL     |    `OPTIONAL`     | string  |                           Specify the URL where the user’s report and deliveries should be delivered.                           |
| submissionStatus |    `OPTIONAL`     | boolean | Users must set this key to true if they want to receive submission status from the API; otherwise, it remains false by default. |

```js

    const ZixFlow = require('zixflow');

    const zixflow = new ZixFlow("your_zixflow_api_token")

    const data = {
        senderId: "IDENTY",
        route: "transactional",
        number: "919090909090",
        message: "Your OTP is 0101",
        isFlash: false,
        dltTemplateId: "1234",
        dltEntityId: "1234",
        reportURL: "https://webhook.site/0a276bc5-f0e4-4235-9006-b58b7d224ad5",
        submissionStatus: false;
    }

    zixflow.sms.sendSMS(data)
```

## Response from server for SMS Service

#### Upon successful delivery of the message, you will receive a success response..

```js
      {
        "status": true,
        "message": "SMS submitted successfully!"
      }
```

#### If any of the required properties are missing in the request, you will receive the following error response, which might include the missing property value.

```js
      {
      "status": false,
      "message": "Invalid data Provided"
      }
```

#### If you provide an invalid api-key or fail to provide an API key, you will receive the following error as a response.

```js
      {
      "status": false,
      "message": "Unauthorised"
      }
```

## Choosing the right type of connectivity

If you want to choose type of connectivity for the message , such as promotional, transactional, or OTP , then configure **route** option

| option |  type  |                  description                   |
| :----: | :----: | :--------------------------------------------: |
| route  | string | route can be promotional, transactional or OTP |

```js
    const data = {
        route: "transactional";
        ... ,
    }

    zixflow.sms.sendSMS(data)
```

## Sending a text message along with flash SMS

| option  |  type   |              description               |
| :-----: | :-----: | :------------------------------------: |
| isFlash | boolean | send flash SMS by setting this to true |

If you want to send a flash SMS via the API , set **isFlash** to **true** . It is false by default.

```js
const data = {
       isFlash: true;
       ...
   }

   zixflow.sms.sendSMS(data)
```

## User gets Submission Status from API

If user wants to wait for submission status from the API they must set **submissionStatus** key to **true**. It is false by default.

|      option      |  type   |                      description                       |
| :--------------: | :-----: | :----------------------------------------------------: |
| submissionStatus | boolean | User can get submission status by setting this to true |

```js
const data = {
      submissionStatus: true;
      ...
  }

```

#### If **_submissionStatus_** is **_true_** and the SMS is sent successfully, you will receive the success response.

```js
      {
        status: true,
        message: 'SMS sent successfully!',
        campaignId: '6630d7a878ac3484a277588a',
        messageId: '6630d7a878ac3484a277588c'
      }
```

#### If **_submissionStatus_** is **_false_** and the SMS is sent successfully, you will receive the success response.

```js
      {
        "status": true,
        "message": "SMS submitted successfully!"
      }
```

---

# Email Service

Zixflow provides a service named Email API. This service allows you to send emails to large lists of multiple recipients by incorporating email into your applications.

Our Email API allows you to send emails to users around the globe through simple RESTful APIs. You can send one email to many people, or a unique email to each person on your list with an email API service.

You can send marketing messages, newsletters, updates, coupons, and invitations through email API.

## Using Email Service

Begin by loading _Zixflow_ SDK into your node js project.

```js
//For **CommonJs**
const Zixflow = require('zixflow');

or;

//For **ES6**
import Zixflow from 'zixflow';
```

Create a new instance of _Zixflow_ SDK. Make sure you have configured your apikey in environment variable.

```js
const zixflow = new ZixFlow('Your api key');
```

Access email service from the SDK

```js
const email = zixflow.email;
```

Alternatively if you do not want to load whole sdk you can also access individual services. To access individual service begin by importing that service

```js
//For **CommonJs**
const Email = require('zixflow/lib/services/email/email');

or;

//For **ES6**
import Email from 'zixflow/lib/services/email/email.js';
```

Create an instance of the service and assign it to a variable. Make sure you have configured your apikey in environment variable.

```js
const email = new Email('your_zixflow-api-key');
```

## <center>Required configuration options for email service

|    option    | required/optional |  type   |                                                                                             description                                                                                              |
| :----------: | :---------------: | :-----: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|      to      |    `REQUIRED`     |  array  |                          This is to contain email ids where you need to send emails.You can add multiple email ids where you need to send emails. Max 10 emails at one api.                          |
|   subject    |    `REQUIRED`     | string  |                                                                                     This contains email subject                                                                                      |
|     from     |    `REQUIRED`     | string  | This is a from email id. You can assign only verified email id. You can verify from email id from zixflow dashboard by below-specified section. dashboard -> campaign -> settings -> email -> domain |
|   fromName   |    `REQUIRED`     | string  |                                                                                 Display name for from email address                                                                                  |
|   bodyHtml   |    `REQUIRED`     | boolean |                                                        This field used to send html content in email either bodyHtml or bodyText is required.                                                        |
|   bodyText   |    `REQUIRED`     | string  |                                                    This field used to send normal text content in email either bodyHtml or bodyText is required.                                                     |
| trackClicks  |    `OPTIONAL`     | boolean |                                                 Should the click be tracked? If no value has been provided, Account’s default setting will be used.                                                  |
|  trackOpens  |    `OPTIONAL`     | boolean |                                                 Should the opens be tracked? If no value has been provided, Account’s default setting will be used.                                                  |
| replyToEmail |    `OPTIONAL`     | string  |                                                                                      Email address to reply to.                                                                                      |
| replyToName  |    `OPTIONAL`     | string  |                                                                               Name to use when replying to the email.                                                                                |
| attachments  |    `OPTIONAL`     |  array  |                                         An array of ID’s of attachments. Note: you can get attachment id from uploading attachment by upload attachment API                                          |
| callbackUrl  |    `OPTIONAL`     | string  |                                                                     Call back where you received notifications related to email.                                                                     |

```js
const ZixFlow = require('zixflow');

const zixflow = new ZixFlow('your_zixflow_api_token');

const data = {
  to: ['sample@gmail.com'],
  subject: 'API test 1',
  from: 'test@domain.com',
  fromName: 'sahil',
  bodyHtml: '<h1>Test 1</h1>',
  trackClicks: true,
  trackOpens: true,
  replyToEmail: 'test2@domain2.com',
  attachments: ['63a98c9c2b6df936ac930c17'],
  replyToName: 'sam',
  bodyText: 'Just Text Email',
  callbackUrl: 'https://webhook.site/0a276bc5-f0e4-4235-9006-b58b7d224ad5',
};

zixflow.email.sendEmail(data);
```

## Response from server for Email Service

#### Upon successful delivery of the email, you will receive a success response..

```js
      {
        "status": true,
        "message": "Email sent successfully!"
      }
```

#### If any of the required properties are missing in the request, you will receive the following error response, which might include the missing property value.

```js
      {
      "status": false,
      "message": "to[1] must be a valid email"
      }
```

#### If you provide an invalid api-key or fail to provide an API key, you will receive the following error as a response.

```js
      {
      "status": false,
      "message": "No token provided"
      }
```

---

# WhatsApp Service

Zixflow provides a service named WhatsApp API. This API is used to send WhatsApp messages to end-users based on approved templates.

This API allows you to craft and deliver messages in compliance with WhatsApp’s policies

> WhatsApp messages can only be sent using approved templates provided by WhatsApp’s official template library. Make sure to use the appropriate template and ensure that it complies with WhatsApp’s guidelines to guarantee successful message delivery.

## Using WhatsApp Service

Begin by loading _Zixflow_ SDK into your node js project.

```js
const ZixFlow = require('zixflow');
```

Create a new instance of _Zixflow_ SDK. Make sure you have configured your apikey in environment variable.

```js
const zixflow = new ZixFlow('Your api key');
```

Access whatsApp service from the SDK

```js
const whatsApp = zixflow.whatsApp;
```

Alternatively if you do not want to load whole sdk you can also access individual services. To access individual service begin by importing that service

```js
//For **CommonJs**
const WhatsApp = require('zixflow/lib/services/whatsApp/whatsApp');

or;

//For **ES6**
import WhatsApp from 'zixflow/lib/services/whatsApp/whatsApp.js';
```

Create an instance of the service and assign it to a variable. Make sure you have configured your apikey in environment variable.

```js
const whatsApp = new WhatsApp('your_zixflow-api-key');
```

## <center>Required configuration options for whatsApp service

|      option      | required/optional |  type   |                                                                                description                                                                                 |
| :--------------: | :---------------: | :-----: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|        to        |    `REQUIRED`     | string  |                                           Specifies the recipient’s phone number in international format (e.g., “1xxxxxxxxxxx”).                                           |
|     phoneId      |    `REQUIRED`     | string  |                                         This is the unique identifier associated with the sender’s phone number given by WhatsApp.                                         |
|   templateName   |    `REQUIRED`     | string  |     Refers to the name of the template to be used for the WhatsApp message. In this case, it is set to “hello_world.” You can obtain it from the template list screen.     |
|     language     |    `REQUIRED`     | string  |                      Specifies the language of the message, with “en_US” representing American English. You can get it from the template list screen.                      |
|    variables     |    `REQUIRED`     | object  |                                        Custom variables used for the template. Please provide a JSON object with the required data.                                        |
|      source      |       `API`       | string  |               If the “linkWithRecord” is set to true, the source from which the WhatsApp message is sent should be mentioned; otherwise, it defaults to API.               |
|  linkWithRecord  |    `OPTIONAL`     | boolean | Specify whether to associate the current message with a record and display it in the inbox. Set it to “true” for linking with a record; otherwise, it defaults to “false.” |
| submissionStatus |    `OPTIONAL`     | boolean |                      Users must set this key to true if they want to receive submission status from the API; otherwise, it remains false by default”                       |

```js
const ZixFlow = require('zixflow');

const zixflow = new ZixFlow('your_zixflow_api_token');

const data = JSON.stringify({
  to: '13023895111',
  phoneId: '104898309288724',
  templateName: 'marketing_sample_2',
  language: 'en',
  variables: {
    video: 'https://techslides.com/demos/sample-videos/small.mp4',
  },
  submissionStatus: true,
});

zixflow.whatsApp.sendWhatsAppTemplate(data);
```

## Response from server for WhatsApp Service

#### Upon successful delivery of the WhatsApp message, you will receive a success response.

```js
      {
        "status": true,
        "message": "SMS submitted successfully!"
      }
```

#### If any of the required properties are missing in the request, you will receive the following error response, which might include the missing property value.

```js
      {
      "status": false,
      "message": "Invalid data Provided"
      }
```

#### If you provide an invalid api-key or fail to provide an API key, you will receive the following error as a response.

```js
      {
      "status": false,
      "message": "Unauthorised"
      }
```

## User gets Submission Status from API

If user wants to wait for submission status from the API they must set **submissionStatus** key to **true**. It is false by default.

|      option      |  type   |                      description                       |
| :--------------: | :-----: | :----------------------------------------------------: |
| submissionStatus | boolean | User can get submission status by setting this to true |

```js
const data = {
      submissionStatus: true;
      ...
  }

```

#### If **_submissionStatus_** is **_true_** and the WhatsApp message is sent successfully, you will receive the success response.

```js
      {
        status: true,
        message: 'WhatsApp sent successfully!',
        campaignId: '6631b22978ac3484a283e17a',
        messageId: '6631b22978ac3484a283e17c'
      }
```

#### If **_submissionStatus_** is **_false_** and the WhatsApp message is sent successfully, you will receive the success response.

```js
      {
        "status": true,
        "message": "SMS submitted successfully!"
      }
```

---

# Collection Records

Collections are the backbone of Zixflow’s data models, providing a structured framework for organizing information.

## Using Collection Records service

```js
//For **CommonJs**
const Zixflow = require('zixflow');

or;

//For **ES6**
import Zixflow from 'zixflow';
```

Create a new instance of Zixflow SDK. Make sure you have configured your apikey in environment variable.

```js
const zixflow = new Zixflow('Your Zixflow Api key');
```

Access Collection Records service from the SDK.

```js
const collectionRecords = zixflow.collectionRecords;
```

Alternatively if you do not want to load whole sdk you can also access individual services. To access individual service begin by importing that service

```js
//For **CommonJs**
const CollectionRecords = require('zixflow/lib/services/collectionRecords/collectionRecords');

or;

//For **ES6**
import CollectionRecords from 'zixflow/lib/services/collectionRecords/collectionRecords.js';
```

Create an instance of the service and assign it to a variable. Make sure you have configured your apikey in environment variable.

```js
const collectionRecords = new CollectionRecords('your_zixflow-api-key');
```
---
## Get List of Collection Records

This API endpoint enables the retrieval of collection records data. The structure of the collection record data is dynamic and varies depending on the collection, with no fixed response keys within the data.

## <center>Required Path and Body configuration options for fetching list of Collection Records

## Path

|    option    | required/optional |  type  |                                                                                            description                                                                                            |
| :----------: | :---------------: | :----: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| collectionId |    `REQUIRED`     | string |                                                                              A unique identifier for the collection.                                                                              |



## Body

|   option   | required/optional |  type  |                                                                                            description                                                                                            |
| :--------: | :---------------: | :----: | :------------------------------------------------------------------------------------------------: |
|   filter   |    `OPTIONAL`     | array  |         An array that will eventually allow users to define specific criteria for filtering data. Currently, it is an empty array, indicating that no filtering is applied at this time.          |
|    sort    |    `OPTIONAL`     | array  |  An array that will eventually enable users to specify sorting criteria for the data. Like the filter array, it is currently empty, implying that no sorting is applied in the current context.   |
|   limit    |    `REQUIRED`     | number |                             The number of records to be returned, set to 10 in this instance. This parameter restricts the response to a specific quantity of records.                             |
|   offset   |    `REQUIRED`     | number | The starting point from which the records are to be fetched within the entire dataset. In this case, it is set to 0, indicating that retrieval should commence from the beginning of the dataset. |






---

## Get Collection Record by Id

This API endpoint enables the retrieval of selected collection record data. The structure of the collection record data is dynamic and varies depending on the collection, with no fixed response keys within the data.

## <center>Required Path configuration options for fetching a record from a Collection 

## Path

|    option    | required/optional |  type  |                                                                                            description                                                                                            |
| :----------: | :---------------: | :----: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| collectionId |    `REQUIRED`     | string |                                                                              A unique identifier for the collection.                                                                              |
|    recordId    |    `REQUIRED`     | string  |         A unique identifier for the collection.          |

---


## Create a Collection Record

This API endpoint enables the creation of a new collection record within a specified collection. The collection record is associated with the provided collection ID.

## <center>Required path and body configuration options for creating a record in a specified Collection 

## Path

|    option    | required/optional |  type  |                                                                                            description                                                                                            |
| :----------: | :---------------: | :----: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| collectionId |    `REQUIRED`     | string |                                                                              A unique identifier for the collection where the record will be added.                                                                              |


## Body

|    option    | required/optional |  type  |                                                                                            description                                                                                            |
| :----------: | :---------------: | :----: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    body      |    `REQUIRED`     | key-value |         Key-value pairs representing data for the collection record. Keys are defined by the attribute API key name, and values depend on the input type of the attribute.          |


## Response from server

```js
{
    "status": true,
    "message": "Record created successfully!",
    "_id": "6551f5ff3c896c334f28d659",
    "data": {
        "_id": "6551f5ff3c896c334f28d659",
        "<key>": "<value>"
    }
}

```

---

## Update a Collection Record

This API endpoint allows the modification of an existing collection record within a specified collection. The record to be updated is identified by the provided collection ID and record ID.

## <center>Required Path and Body configuration options for updating a record in a specified Collection 

## Path

|    option    | required/optional |  type  |                                                                                            description                                                                                            |
| :----------: | :---------------: | :----: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| collectionId |    `REQUIRED`     | string |                                                                              A unique identifier for the collection where the record will be added.                                                                              |
| recordId |    `REQUIRED`     | string |                                                                              The unique identifier for the record to be updated within the specified collection.                                                                              |


## Body

|    option    | required/optional |  type  |                                                                                            description                                                                                            |
| :----------: | :---------------: | :----: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    body      |    `REQUIRED`     | key-value |         Key-value pairs representing data for the collection record. Keys are defined by the attribute API key name, and values depend on the input type of the attribute.          |

## Response from server

```js
{
    "status": true,
    "message": "Record updated successfully!"
}
```

---

## Delete Collection Record by Id

This API endpoint facilitates the removal of a specific collection record by providing the unique identifiers of both the collection and the record.

## <center>Required Path configuration options for deleting a record in a specified Collection 

## Path

|    option    | required/optional |  type  |                                                                                            description                                                                                            |
| :----------: | :---------------: | :----: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| collectionId |    `REQUIRED`     | string |                                                                              A unique identifier for the collection, allowing for precise referencing.                                                                             |
| recordId |    `REQUIRED`     | string |                                                                              A unique identifier for the collection record to be deleted.                                                                             |

## Response from server

```js
{
    "status": true,
    "message": "Record Deleted Successfully!"
}
```

---

# List Entries

Lists are the backbone of Zixflow’s data models, providing a structured framework for organizing information.

## Using List Entries Service

```js
//For **CommonJs**
const Zixflow = require('zixflow');

or;

//For **ES6**
import Zixflow from 'zixflow';
```

Create a new instance of Zixflow SDK. Make sure you have configured your apikey in environment variable.

```js
const zixflow = new Zixflow('Your Zixflow Api key');
```

Access Collection Records service from the SDK.

```js
const listEntries = zixflow.listEntries;
```

Alternatively if you do not want to load whole sdk you can also access individual services. To access individual service begin by importing that service

```js
//For **CommonJs**
const ListEntries = require('zixflow/lib/services/listEntries/listEntries');

or;

//For **ES6**
import ListEntries from 'zixflow/lib/services/listEntries/listEntries.js';
```

Create an instance of the service and assign it to a variable. Make sure you have configured your apikey in environment variable.

```js
const listEntries = new ListEntries('your_zixflow-api-key');
```
---
## Get List of List Entries

This API endpoint enables the retrieval of list entries. The structure of the list entries is dynamic and varies depending on the list and attributes, with no fixed response keys within the data.

## <center>Required configuration options for fetching list of List Entries

|    option    | required/optional |  type  |                                                                                            description                                                                                            |
| :----------: | :---------------: | :----: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| listId |    `REQUIRED`     | string |                                                                              A unique identifier for the list.                                                                              |
|    filter    |    `OPTIONAL`     | array  |         An array that will eventually allow users to define specific criteria for filtering data. Currently, it is an empty array, indicating that no filtering is applied at this time.          |
|     sort     |    `OPTIONAL`     | array  |  An array that will eventually enable users to specify sorting criteria for the data. Like the filter array, it is currently empty, implying that no sorting is applied in the current context.   |
|    limit     |    `REQUIRED`     | number |                             he number of records to be returned, set to 10 in this instance. This parameter restricts the response to a specific quantity of records.                             |
|    offset    |    `REQUIRED`     | number | The starting point from which the records are to be fetched within the entire dataset. In this case, it is set to 0, indicating that retrieval should commence from the beginning of the dataset. |

---

## Get List Entry By Id

This API endpoint enables the retrieval of selected list entry data. The structure of the list entry data is dynamic and varies depending on the list, with no fixed response keys within the data.

## <center>Required Path configuration options for fetching a entry from a List 

## Path

|    option    | required/optional |  type  |                                                                                            description                                                                                            |
| :----------: | :---------------: | :----: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| listId |    `REQUIRED`     | string |                                                                              A unique identifier for the list.                                                                              |
|    entryId    |    `REQUIRED`     | string  |         A unique identifier for the entry.          |

---

## Create a List Entry

This API endpoint enables the creation of a new list entry within a specified collection. The list entry is associated with the provided list ID.

## <center>Required path and body configuration options for creating a entry in specified List 

## Path

|    option    | required/optional |  type  |                                                                                            description                                                                                            |
| :----------: | :---------------: | :----: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| listId |    `REQUIRED`     | string |                                                                              A unique identifier for the list where the entry will be added.                                                                              |


## Body

|    option    | required/optional |  type  |                                                                                            description                                                                                            |
| :----------: | :---------------: | :----: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    body      |    `REQUIRED`     | key-value |         Key-value pairs representing data for the list entry. Keys are defined by the attribute API key name, and values depend on the input type of the attribute.          |


## Response from server

```js
{
    "status": true,
    "message": "List entry created successfully!",
    "data": {
        "listId": "6551fdcad2d75edff28c9085",
        "peopleId": "654566f0c57bc82e28e5bb40",
        "companyId": null,
        "dealId": null,
        "recordId": null,
        "owner": "63d0e0b2eaa35b73f3b2344e",
        "_id": "6551fe0c92dc3d7c3aa20e12",
        "createdAt": "2023-11-13T10:44:28.028Z",
        "updatedAt": "2023-11-13T10:44:28.028Z",
        "__v": 0
        <!-- Additional fields based on list attributes -->
    }
}

```

---
## Update List Entry

This API endpoint allows the modification of an existing entry within a specified list. The entry to be updated is identified by the provided list ID and entry ID.

## <center>Required Path and Body configuration options for updating a entry in a specified list 

## Path

|    option    | required/optional |  type  |                                                                                            description                                                                                            |
| :----------: | :---------------: | :----: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| listId |    `REQUIRED`     | string |                                                                              A unique identifier for the list where the entry will be added.                                                                              |
| entryId |    `REQUIRED`     | string |                                                                              The unique identifier for the entry to be updated within the specified list.                                                                              |


## Body

|    option    | required/optional |  type  |                                                                                            description                                                                                            |
| :----------: | :---------------: | :----: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    body      |    `REQUIRED`     | key-value |         Key-value pairs representing data for the list. Keys are defined by the attribute API key name, and values depend on the input type of the attribute.          |

## Response from server

```js
{
    "status": true,
    "message": "List entry updated successfully!"
}
```

## Delete List Entry By Id

This API endpoint facilitates the removal of a specific list entry by providing the unique identifiers of both the list and the entry.

## <center>Required Path configuration options for deleting a entry in a specified List 

## Path

|    option    | required/optional |  type  |                                                                                            description                                                                                            |
| :----------: | :---------------: | :----: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| listId |    `REQUIRED`     | string |                                                                              A unique identifier for the list, allowing for precise referencing.                                                                             |
| entryId |    `REQUIRED`     | string |                                                                              A unique identifier for the list entry to be deleted.                                                                             |

## Response from server

```js
{
    "status": true,
    "message": "List Entry deleted successfully"
}
```
