import validateSMSData from '../../utilities/validateSMSData';
import { SMSDataInterface, SuccessResponse , ErrorResponse } from '../../interfaces/rootInterfaces';
import createAxiosConfig from '../../utilities/axiosConfig';
import { POST_SMS_API_URL } from '../../constants';
import axiosWrapper from '../../utilities/axiosRequestWrapper';
import { AxiosRequestConfig } from 'axios';

export default class SMS {
  private __apiKey: string;
  private domain: string;

  constructor(apiKey?: string , domain?: string) {
    this.__apiKey = apiKey || process.env.ZIXFLOW_API_KEY;
    this.domain = domain || process.env.ZIXFLOW_DOMAIN || "https://api.zixflow.com"
  }

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
            const responseObject = { status: response.status, message: response.message };
            resolve(responseObject);
          }
        })
        .catch((error) => {
          console.log(error.response);
          
          resolve(error.response?.data);
        });
    });
  }
}
