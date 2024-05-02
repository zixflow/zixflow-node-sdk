import validateSMSData from '../../utilities/validateSMSData';
import { SMSDataInterface, SuccessResponse , ErrorResponse } from '../../interfaces/rootInterfaces';
import createAxiosConfig from '../../utilities/axiosConfig';
import { POST_SMS_API_URL } from '../../constants';
import axiosWrapper from '../../utilities/axiosRequestWrapper';
import { AxiosRequestConfig } from 'axios';

/**
 * @summary Represents a SMS class instance used for sending SMS.
 * @description This class provides a method sendSMS() to send SMS.
 * @property {string} __apiKey - The Zixflow API key used for authentication.
 * @property {string} domain - The base domain URL for Zixflow API requests.
 */
export default class SMS {

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
   * @summary Creates a new SMS service instance.
   * @param {string} [apiKey] The Zixflow API key. If not provided here, it will be retrieved from the environment variable ZIXFLOW_API_KEY. If it cannot be found there, an error will be thrown.
   * @param {string} [domain] The Zixflow API domain. This specifies the domain for API requests related to SMS functionality. If not provided, the constructor will attempt to retrieve it from the environment variable ZIXFLOW_DOMAIN. If that's not available either, it will default to "https://api.zixflow.com".
   * @returns {SMS}  Instance of SMS class
   */
  constructor(apiKey?: string , domain?: string) {
    this.__apiKey = apiKey || process.env.ZIXFLOW_API_KEY;
    this.domain = domain || process.env.ZIXFLOW_DOMAIN || "https://api.zixflow.com"
  }
  

  /**
 * 
 * @summary This method is responsible for sending a SMS.
 * @param {SMSDataInterface} [smsData] An object representing the SMS data to be sent. It should adhere to the SMSDataInterface format.
 * ```typescript
 *  interface SMSDataInterface {
        *    senderId: string;  
        *    route: string;
        *    number: string;
        *    message: string;
        *    isFlash?: boolean;
        *    dltTemplateId?: string;
        *    dltEntityId?: string;
        *    reportURL?: string;
        *    submissionStatus?: boolean;
 * }
 * ```
 * @property  [smsData.senderId] - (Required) The registered and approved Sender name.
 * @property  [smsData.route] - (Required) Type of connectivity for the message, such as promotional, transactional, or OTP..
 * @property  [smsData.number] - (Required) The phone number with a country prefix to which the message will be sent.
 * @property [smsData.message] - (Required) The content of the message that you want to send.
 * @property  [smsData.isFlash] - (Optional) Set this parameter to true if you want to send a flash SMS via the API; otherwise, set it to false.
 * @property  [smsData.dltTemplateId] - (Optional) Only applicable for India. If you want to pass a template ID directly via the API, you can do so with this parameter.
 * @property  [smsData.dltEntityId] - (Optional) Only applicable for India. If you want to pass an entity ID directly via the API, you can do so with this parameter.
 * @property  [smsData.reportURL] - (Optional) Specify the URL where the user’s report and deliveries should be delivered.
 * @property  [smsData.submissionStatus] - (Optional) Set this key to true if you want to receive submission status from the API; otherwise, it remains false by default.
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
  async sendSMS(smsData: SMSDataInterface): Promise<SuccessResponse | ErrorResponse> {
    return new Promise<SuccessResponse | ErrorResponse>(async (resolve, reject) => {
      const validationResult = validateSMSData(smsData);

      if (validationResult?.status !== true) {
        const errorMessage = validationResult.message;
        resolve({ status: false, message: errorMessage });
        return;
      }
      
      const config: AxiosRequestConfig = createAxiosConfig({
        apiKey: this.__apiKey,
        apiUrl: `${this.domain}${POST_SMS_API_URL}`,
        method: 'post',
        data: smsData,
      });

      await axiosWrapper(config)
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
