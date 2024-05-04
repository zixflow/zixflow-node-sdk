import { EmailDataInterface, SuccessResponse, ErrorResponse } from '../../interfaces/rootInterfaces';

import validateEmailData from '../../utilities/validateEmailData';
import { POST_EMAIL_API_URL } from '../../constants';
import createAxiosConfig from '../../utilities/axiosConfig';
import axiosWrapper from '../../utilities/axiosRequestWrapper';
import { AxiosRequestConfig } from 'axios';

/**
 * @summary Represents a Email class instance used for sending SMS.
 * @description This class provides a method sendEmail() to send emails.
 * @property {string} __apiKey - The Zixflow API key used for authentication.
 * @property {string} domain - The base domain URL for Zixflow API requests.
 */
export default class Email {
  /**
   * @summary The Zixflow API key.
   * @type {string}
   */
  private __apiKey: string;

  /**
   * @summary The Zixflow API domain.
   * @type {string}
   */
  private domain: string;

  /**
   * @summary Creates a new Email service instance.
   * @param {string} [apiKey] The Zixflow API key. If not provided here, it will be retrieved from the environment variable ZIXFLOW_API_KEY. If it cannot be found there, an error will be thrown.
   * @param {string} [domain] The Zixflow API domain. This specifies the domain for API requests related to Email functionality. If not provided, the constructor will attempt to retrieve it from the environment variable ZIXFLOW_DOMAIN. If that's not available either, it will default to "https://api.zixflow.com".
   * @returns {SMS}  Instance of Email class
   */
  constructor(apiKey?: string, domain?: string) {
    this.__apiKey = apiKey || process.env.ZIXFLOW_API_KEY || '';
    this.domain = domain || process.env.ZIXFLOW_DOMAIN || 'https://api.zixflow.com';
  }

  /**
   *
   * @summary This method is responsible for sending an Email.
   * @param {EmailDataInterface} [emailData] An object representing the Email data to be sent. It should adhere to the EmailDataInterface format.
   * ```typescript
   *  interface EmailDataInterface {
   *   to: Array<string>;
   *   subject: string;
   *  from: string;
   *   fromName: string;
   *  bodyHtml: string;
   *   bodyText: string;
   *   trackClicks: boolean;
   *  trackOpens: boolean;
   *   replyToEmail: string;
   *   replyToName: string;
   *   attachments: Array<string>;
   *  callbackUrl: string;
   * }
   * ```
   * @property  [emailData.to] - (Required) This is to contain email ids where you need to send emails.You can add multiple email ids where you need to send emails. Max 10 emails at one api.
   * @property  [emailData.subject] - (Required) This contains email subject.
   * @property  [emailData.from] - (Required) This is a from email id. You can assign only verified email id. You can verify from email id from zixflow dashboard by below-specified section. Zixflow Dashboard -> Campaigns -> settings -> email -> domain.
   * @property [emailData.fromName] - (Required) Display name for from email address.
   * @property  [emailData.bodyHtml] - (Required) This field used to send html content in email either bodyHtml or bodyText is required.
   * @property  [emailData.bodyText] - (Required) This field used to send normal text content in email either bodyHtml or bodyText is required.
   * @property  [emailData.trackClicks] - (Optional) Should the click be tracked? If no value has been provided, Account’s default setting will be used.
   * @property  [emailData.trackOpens] - (Optional) Should the opens be tracked? If no value has been provided, Account’s default setting will be used.
   * @property  [emailData.replyToEmail] - (Optional) Email address to reply to.
   * @property  [emailData.replyToName] - (Optional) Name to use when replying to the email.
   * @property  [emailData.attachments] - (Optional) An array of ID’s of attachments. Note: you can get attachment id from uploading attachment by upload attachment API.
   * @property  [emailData.callbackUrl] - (Optional) Call back where you received notifications related to email.
   *
   * @returns A Promise object that will be resolved with either a SuccessResponse or an ErrorResponse, adhering to the specified format.
   *  ```typescript
   *    interface SuccessResponse {
   *     status: boolean;
   *     message: string;
   *     campaignId?: string;
   *     messageId?: string;
   *    }
   *
   * interface ErrorResponse {
   *     status: boolean;
   *     message: string;
   *    }
   *
   * ```
   *
   */
  async sendEmail(emailData: EmailDataInterface): Promise<SuccessResponse | ErrorResponse> {
    return new Promise<SuccessResponse | ErrorResponse>((resolve) => {
      const validationResult = validateEmailData(emailData);
      if (validationResult.status === false) {
        const errorMessage = validationResult.message;
        resolve({ status: false, message: errorMessage });
        return;
      }

      const config: AxiosRequestConfig = createAxiosConfig({
        apiKey: this.__apiKey,
        apiUrl: `${this.domain}${POST_EMAIL_API_URL}`,
        method: 'post',
        data: emailData,
      });

      axiosWrapper(config)
        .then((response) => {
          if (response) {
            const responseObject = {
              status: response.status,
              message: response.message,
            };
            resolve(responseObject);
          }
        })
        .catch((error) => {
          resolve(error.response?.data);
        });
    });
  }
}
