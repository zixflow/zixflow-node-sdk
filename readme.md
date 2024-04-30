# <span style="color:white">***Zixflow SDK***</span>


The Zixflow SDK for node js provides a node js API for Zixflow services. You can use the node js API to build libraries or applications for node js.

Using the SDK for node js makes it possible to realize a number of compelling use cases. their are several things you can build by using the SDK for node js.

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
      1) [Sms](#sms-service) 
      2) [Email](#email-service) 
      3) [Whatsapp](#whatsapp-service) 

---

# Features


 > Our APIs are based around REST architecture 
 >
 >> - Our AI Engine enables maximum delivery with automated backup routing.
 >> - Our APIs use the basic HTTPS request codes: POST, GET, PATCH, DELETE.
 >> - You can import and test all our full API collection in the Postman app by clicking on the ’ Run in Postman’ button.
 >
 > Note:  Any requests made using the valid API credentials will affect the real-time data in your zixflow account &excl;



---

# Setting Up the SDK for node js 
### Installing the SDK
The preferred way to install the Zixflow SDK for node js is to use the npm package manager for node js.<br>

Go to your node js project root directory.

> cd your_project_directory

Then simply type the following into a terminal window

> npm install zixflow 


This will install the Zixflow SDK into your node js project.



### Loading the SDK
After you install the SDK, If you are using **CommonJS** you can load the Zixflow SDK in your node js application by following the below steps
```js
const Zixflow = require("zixflow").default;
const zixflow = new Zixflow("Your_Zixflow_api_key");
```

If you are using **ES6 Modules** , follow these steps.
```js
import ZixflowEntity from 'zixflow';
const Zixflow = ZixflowEntity.default;
const zixflow = new Zixflow("Your_Zixflow_api_key");
```

---

# Configure Your Credentials
You need to provide credentials to Zixflow SDK so that only your account and its resources are accessed by the SDK. For more information about obtaining your account credentials, see [Getting Your Credentials](https://zixflow.com/).

To hold this information, we recommend you create an environment variable with <strong>ZIXFLOW_API_KEY</strong> as it's key and it's value should hold your <strong>zixflow api key</strong>. 

> ZIXFLOW_API_KEY=your_zixflow_api_key



 <mark>**We do not recommend hard coding your Zixflow credentials in your scripts. Hard coding credentials poses a risk of exposing your api key.**</mark>

>
> <mark>**const zixflow = new Zixflow(process.env.ZIXFLOW_API_KEY)**</mark>
 
---

# Working with Zixflow SDK

The Zixflow SDK for node js provides access to services that it supports through a collection of service instances. Each supported Zixflow service offer low-level APIs for using service features and resources.

The services exposed through the SDK for node js follow the request-response pattern to exchange messages with calling applications. In this pattern, the code invoking a service submits an HTTPS request to an endpoint for the service. The request contains parameters needed to successfully invoke the specific feature being called. The service that is invoked generates a response that is sent back to the requestor. The response contains data if the operation was successful or error information if the operation was unsuccessful.



The current services available under this version of SDK are mentioned below 
- SMS
- Email
- Whatsapp

When using the SDK for node js, you need to add the SDK package to your application using require, which provides support for all current services.

---

# Generate API key

 To get new API Token , Firstly you need to register with zixflow and create an account. Click on this [link](https://docs.zixflow.com/api-reference/authentication) to visit and follow the instructions to complete the sign-up process and generate API key.

---

# Accessing Zixflow Services 

Import the SDK for node js as shown below . This includes the entire SDK into your code.
```js
//For **CommonJs**
const Zixflow = require("zixflow").default;
```
```js
//For **ES6**
import ZixflowEntity from 'zixflow';
const Zixflow = ZixflowEntity.default;
```

Begin by creating an instance of the Zixflow SDK and assign it to a variable.

> const zixflow = new Zixflow( process.env.ZIXFLOW_API_KEY )

To access service features through the Zixflow class, you first access a service through which you need access to a set of features provided by the underlying service instance. Generally there is one service instance provided for each service.

Consider the following code , this is used to access class of Sms service , Email service and Whatsapp service respectively

> const sms = zixflow.sms
>
> const email = zixflow.email
>
> const whatsapp = zixflow.whatsapp

---

# Accessing Individual Services

To access individual service begin by importing that service

> const Sms = require("zixflow/lib/services/sms")

Create an instance of the service and assign it to a variable.

> const sms = new Sms()
---
# Sms Service

Programmatically send high volumes of text messages globally. Your users can get OTP, alerts, stock prices, account balance, transaction statements, discounts, offers and much more all over a message.

Zixflow sms service provides easy api for sending and scheduling text messages which you can easily integrate in your node js application.
              
## Using sms service

Begin by loading Zixflow SDK into your node js project.

> const Zixflow = require("zixflow").default;

Create a new instance of Zixflow SDK. Make sure you have configured your apikey in environment variable.

> const zixflow = new Zixflow("Your Zixflow Api key")

Access sms service from the SDK.

> const sms = zixflow.sms

Alternatively if you do not want to load whole sdk you can also access individual services. To access individual service begin by importing that service

> const Sms = require("zixflow/lib/services/sms").default

Create an instance of the service and assign it to a variable. Make sure you have configured your apikey in environment variable.

> const sms = new Sms("your_zixflow-api-key")

## Sending a text message

You can easily send text message by calling the <strong>sendSMS method</strong> from sms class. Pass the data object in the following format

## <center>Required configuration options for sms service


|option|required/optional|type|description|
|:---:|:---:|:---:|:---:|
| senderid  | `REQUIRED` | string | The registered and approved Sender name. |
| route | `REQUIRED` | string | Type of connectivity ex Global, Promotional, Transactional, etc. |
| number | `REQUIRED` | string |The phone number with a country prefix to which the message will be sent. |
| message| `REQUIRED` | string |The content of the message that you want to send.      |
| isFlash  |  `OPTIONAL`   |  boolean   | Set this parameter to true if you want to send a flash SMS via the API; otherwise, set it to false.        |
|dltTemplateId |  `OPTIONAL` |string | Only applicable for India. If you want to pass a template ID directly via the API, you can do so with this parameter.         |
|dltEntityId|`OPTIONAL`| string | Only applicable for India. If you want to pass an entity ID directly via the API, you can do so with this parameter.         |
|reportURL|`OPTIONAL`|string| Specify the URL where the user’s report and deliveries should be delivered.         |
|submissionStatus     |`OPTIONAL`      |boolean     | When a user wants to wait for submission status from the API, they must set this key to true. It is false by default.|


```js

    const ZixFlow = require('zixflow').default;
    
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

## Choosing the right type of connectivity

If you want to choose type of connectivity for the message , such as promotional, transactional, or OTP , then configure **route** option

|option|type |description|
|:----:|:----:|:----:|
|route|string| route can be promotional, transactional or OTP

```ruby
    const data = {
        route: "transactional"; 
        ... ,
    }

    zixflow.sms.sendSMS(data)
```

## Sending a text message along with flash Sms

|option|type |description|
|:----:|:----:|:----:|
|isFlash|boolean| send flash Sms by setting this to true 

 If you want to send a flash SMS via the API , set **isFlash** to **true**  .  It is false by default.
 ```js
 const data = {
        isFlash: true; 
        ...
    }

    zixflow.sms.sendSMS(data)
```

## User gets  message Submission Status

 If user wants to wait for submission status from the API they must set **submissionStatus** key to **true**. It is false by default.

 |option|type |description|
|:----:|:----:|:----:|
|submissionStatus|boolean| User can get submission status by setting this to true 

  ```js
 const data = {
        submissionStatus: true; 
        ...
    }

```
---
# Email Service

Zixflow provides a service named Email API. An email API service allows you to send emails to large lists of multiple recipients by incorporating email into your applications.

Our email API allows you to send emails to users around the globe through simple RESTful APIs. You can send one email to many people, or a unique email to each person on your list with an email API service.

You can send marketing messages, newsletters, updates, coupons, and invitations through email API.

## Using Email Service 

Begin by loading *Zixflow* SDK into your node js project.

> const ZixFlow = require("zixflow").default;

Create a new instance of *Zixflow* SDK. Make sure you have configured your apikey in environment variable.

> const zixflow = new ZixFlow("Your api key");

Access email service from the SDK

> const email = zixflow.email

Alternatively if you do not want to load whole sdk you can also access individual services. To access individual service begin by importing that service

> const Email = require("zixflow/lib/services/email").default;

Create an instance of the service and assign it to a variable. Make sure you have configured your apikey in environment variable.

> const email = new Email("your_zixflow-api-key")

## <center>Required configuration options for email service

|option|required/optional|type|description|
|:---:|:---:|:---:|:---:|
| to  | `REQUIRED` | array |This is to contain email ids where you need to send emails. you can add multiple email ids where you need to send emails. Max 10 emails at one api. |
| subject | `REQUIRED` | string | This contains email subject |
| from | `REQUIRED` | string |This is a from email id. You can assign only verified email id. You can verify from email id from zixflow dashboard by below-specified section. dashboard - campaign -> settings -> email -> domain |
| fromName| `REQUIRED` | string |Display name for from email address |
| bodyHtml  |  `REQUIRED`   |  boolean   |This field used to send html content in email either bodyHtml or bodyText is required.        |
|bodyText |  `REQUIRED` |string | This field used to send normal text content in email either bodyHtml or bodyText is required.         |
|trackClicks|`OPTIONAL`| boolean |Should the click be tracked? If no value has been provided, Account’s default setting will be used.         |
|trackOpens|`OPTIONAL`|boolean| Should the opens be tracked? If no value has been provided, Account’s default setting will be used.         |
|replyToEmail|`OPTIONAL`      |string     |Email address to reply to.|
|replyToName | `OPTIONAL`    | string          |Name to use when replying to the email.       |
|attachments  | `OPTIONAL`   | array     | An array of ID’s of attachments. Note: you can get attachment id from uploading attachment by upload attachment API      |


```js

  const ZixFlow = require('zixflow').default;

  const zixflow = new ZixFlow("your_zixflow_api_token")

  const emailData = {
    "to": [
      "sample@gmail.com"
    ],
    "subject": "API test 1",
    "from": "test@domain.com",
    "fromName": "sahil",
    "bodyHtml": "<h1>Test 1</h1>",
    "trackClicks": true,
    "trackOpens": true,
    "replyToEmail": "test2@domain2.com",
    "attachments": [
      "63a98c9c2b6df936ac930c17"
    ],
    "replyToName": "sam",
    "bodyText": "Just Text Email",
    "callbackUrl": "https://webhook.site/0a276bc5-f0e4-4235-9006-b58b7d224ad5"
  };

  zixflow.email.sendEmail(emailData)

```

## <center><ins>Upload Email Attachment</ins></center>

Purpose of API is whenever the user wants to send an attachment in the email. user need to upload attachment in *Zixflow* platform first. Zixflow will provide id represents to attachment. and the user can send this id in send email API's attachment field to send attachment along with the email.

|option| required/optional |type |description|
|:----:|:----: |:----:|:----:|
|file|`REQUIRED`| form-data | binary file data|

```
Write code snippet for a function to upload the formdata
```

[This syntax is used for hiding the content and not render]:#

---
# Whatsapp Service

Zixflow provides a service named WhatsApp API. This API is used to send WhatsApp messages to end-users based on approved templates.

This API allows you to craft and deliver messages in compliance with WhatsApp’s policies

> WhatsApp messages can only be sent using approved templates provided by WhatsApp’s official template library. Make sure to use the appropriate template and ensure that it complies with WhatsApp’s guidelines to guarantee successful message delivery.

## Using WhatsApp Service 

Begin by loading *Zixflow* SDK into your node js project.

> const ZixFlow = require("zixflow").default;

Create a new instance of *Zixflow* SDK. Make sure you have configured your apikey in environment variable.

> const zixflow = new ZixFlow("Your api key");

Access whatsApp service from the SDK

> const whatsApp = zixflow.whatsApp

Alternatively if you do not want to load whole sdk you can also access individual services. To access individual service begin by importing that service

> const WhatsApp = require("zixflow/lib/services/whatsApp").default

Create an instance of the service and assign it to a variable. Make sure you have configured your apikey in environment variable.

> const whatsApp = new WhatsApp("your_zixflow-api-key")

## <center>Required configuration options for whatsApp service

|option|required/optional|type|description|
|:---:|:---:|:---:|:---:|
| to  | `REQUIRED` | string | Specifies the recipient’s phone number in international format (e.g., “1xxxxxxxxxx”). |
| phoneId | `REQUIRED` | string |(Required) This is the unique identifier associated with the sender’s phone number given by WhatsApp. |
| templateName | `REQUIRED` | string | Refers to the name of the template to be used for the WhatsApp message. In this case, it is set to “hello_world.” You can obtain it from the template list screen. |
| language| `REQUIRED` | string | Specifies the language of the message, with “en_US” representing American English. You can get it from the template list screen. |
| variables  |  `REQUIRED`   |  object   | Custom variables used for the template. Please provide a JSON object with the required data.        |
|source |  `API` |string | If the “linkWithRecord” is set to true, the source from which the WhatsApp message is sent should be mentioned; otherwise, it defaults to API.         |
|linkWithRecord|`OPTIONAL`| boolean | Specify whether to associate the current message with a record and display it in the inbox. Set it to “true” for linking with a record; otherwise, it defaults to “false.”         |
|submissionStatus|`OPTIONAL`|boolean| Indicates whether to wait for the submission status. Set it to “true” if you want to wait for the submission status; otherwise, it defaults to “false.”         |

```js

    const ZixFlow = require('zixflow').default;

    const zixflow = new ZixFlow("your_zixflow_api_token")

    const  data = JSON.stringify({
          "to": "13023895111",
          "phoneId": "104898309288724",
          "templateName": "marketing_sample_2",
          "language": "en",
          "variables": {
            "video": "https://techslides.com/demos/sample-videos/small.mp4"
          },
          "submissionStatus": true
        });

    zixflow.whatsApp.sendWhatsAppTemplate(data)
```










