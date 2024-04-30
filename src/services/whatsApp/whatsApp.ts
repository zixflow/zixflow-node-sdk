import { AxiosRequestConfig } from 'axios';
import { WhatsAppDataInterface, SuccessResponse , ErrorResponse } from '../../interfaces/rootInterfaces';
import validateWhatsappData from '../../utilities/validateWhatsAppData';
import { POST_WHATSAPP_API_URL } from '../../constants';
import createAxiosConfig from '../../utilities/axiosConfig';
import axiosWrapper from '../../utilities/axiosRequestWrapper';

export default class WhatsApp {
  private __apiKey: string;
  private domain: string;

  constructor(apiKey?: string , domain?: string) {
    this.__apiKey = apiKey;
    this.domain = domain || process.env.ZIXFLOW_DOMAIN || "https://api.zixflow.com"
  }

  async sendWhatsAppTemplate(whatsAppData: WhatsAppDataInterface): Promise<SuccessResponse | ErrorResponse> {
    return new Promise<SuccessResponse | ErrorResponse>(async (resolve, reject) => {
      const validationResult = validateWhatsappData(whatsAppData);

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

      await axiosWrapper(config)
        .then((response) => {
          if (response) {
            const responseObject = { status: response.status, message: response.message };
            resolve(responseObject);
          }
        })
        .catch((error) => {
          resolve(error.response?.data);
        });
    });
  }
}
