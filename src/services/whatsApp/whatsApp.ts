import { AxiosRequestConfig } from 'axios';
import { WhatsAppDataInterface, SuccessResponse, ErrorResponse } from '../../interfaces/rootInterfaces';
import validateWhatsAppData from '../../utilities/validateWhatsAppData';
import { POST_WHATSAPP_API_URL } from '../../constants';
import createAxiosConfig from '../../utilities/axiosConfig';
import axiosWrapper from '../../utilities/axiosRequestWrapper';

/**
 * @summary Represents a WhatsApp class instance used for sending messages.
 * @description This class provides a method sendWhatsAppTemplate() to send messages.
 * @property {string} __apiKey - The Zixflow API key used for authentication.
 * @property {string} domain - The base domain URL for Zixflow API requests.
 */
class WhatsApp {
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
   * @summary Creates a new WhatsApp service instance.
   * @param {string} [apiKey] The Zixflow API key. If not provided here, it will be retrieved from the environment variable ZIXFLOW_API_KEY. If it cannot be found there, an error will be thrown.
   * @param {string} [domain] The Zixflow API domain. This specifies the domain for API requests related to WhatsApp functionality. If not provided, the constructor will attempt to retrieve it from the environment variable ZIXFLOW_DOMAIN. If that's not available either, it will default to "https://api.zixflow.com".
   * @returns {WhatsApp}  Instance of WhatsApp class
   */
  constructor(apiKey?: string, domain?: string) {
    this.__apiKey = apiKey || process.env.ZIXFLOW_API_KEY || '';
    this.domain = domain || process.env.ZIXFLOW_DOMAIN || 'https://api.zixflow.com';

    if (!this.__apiKey) {
      throw new Error('API key is required.');
    }
  }

  /**
   *
   * @summary This method is responsible for sending WhatsApp messages.
   * @param {WhatsAppDataInterface} [whatsAppData] An object representing the WhatsApp data to be sent. It should adhere to the WhatsAppDataInterface format.
   * ```typescript
   *  interface WhatsAppDataInterface {
   *    to: string;
   *    phoneId: string;
   *    templateName: string;
   *    language: string;
   *    variables: Object;
   *    source: string;
   *    linkWithRecord: boolean;
   *    submissionStatus: boolean;
   * }
   * ```
   * @property  [whatsAppData.to] - (Required) Specifies the recipient’s phone number in international format (e.g., “1xxxxxxxxxxx”).
   * @property  [whatsAppData.phoneId] - (Required) This is the unique identifier associated with the sender’s phone number given by WhatsApp.
   * @property  [whatsAppData.templateName] - (Required) Refers to the name of the template to be used for the WhatsApp message. In this case, it is set to “hello_world.” You can obtain it from the template list screen.
   * @property  [whatsAppData.language] - (Required) Specifies the language of the message, with “en_US” representing American English. You can get it from the template list screen.
   * @property  [whatsAppData.variables] - (Optional) Custom variables used for the template. Please provide a JSON object with the required data.
   * @property  [whatsAppData.source] - (Optional) If the “linkWithRecord” is set to true, the source from which the WhatsApp message is sent should be mentioned; otherwise, it defaults to API.
   * @property  [whatsAppData.linkWithRecord] - (Optional) Specify whether to associate the current message with a record and display it in the inbox. Set it to “true” for linking with a record; otherwise, it defaults to “false.”.
   * @property  [whatsAppData.submissionStatus] - (Optional) Set this key to true if you want to receive submission status from the API; otherwise, it remains false by default.
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
  async sendWhatsAppTemplate(whatsAppData: WhatsAppDataInterface): Promise<SuccessResponse | ErrorResponse> {
    return new Promise<SuccessResponse | ErrorResponse>((resolve) => {
      const validationResult = validateWhatsAppData(whatsAppData);

      if (validationResult.status === false) {
        const errorMessage = validationResult.message;
        resolve({ status: validationResult.status, message: errorMessage });
        return;
      }

      const config: AxiosRequestConfig = createAxiosConfig({
        apiKey: this.__apiKey,
        apiUrl: `${this.domain}${POST_WHATSAPP_API_URL}`,
        method: 'post',
        data: whatsAppData,
      });

      axiosWrapper(config)
        .then((response) => {
          if (response) {
            resolve(response);
          }
        })
        .catch((error) => {
          resolve(error.response?.data);
        });
    });
  }
}

export = WhatsApp;
