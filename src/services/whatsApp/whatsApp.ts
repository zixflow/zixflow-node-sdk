import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { WhatsAppDataInterface , WhatsappSuccessResponse } from "../../interfaces/whatsappInterface";
import validateWhatsappData from "../../utilities/validateWhatsAppRequest";
import config from '../../config.json'

const { postWhatsAppApiUrl} = config;

export default class WhatsApp {
  private __apiKey: String;

  constructor(apiKey?: String) {
    this.__apiKey = apiKey;
  }

  async sendWhatsAppTemplate(whatsAppData: WhatsAppDataInterface): Promise<WhatsappSuccessResponse> {

    return new Promise<WhatsappSuccessResponse>(async (resolve , reject) => {

       const isValid = validateWhatsappData(whatsAppData);
            if (typeof isValid === 'string') {
              resolve({status: false,message: isValid})
                 return;
          }

        const config: AxiosRequestConfig = {
            method: "post",
            url: postWhatsAppApiUrl,
            headers: {
              Authorization: `Bearer ${this.__apiKey}`,
              "Content-Type": "application/json",
            },
            data: JSON.stringify(whatsAppData),
          };
           
            
          try {
            const response: AxiosResponse = await axios(config);
            resolve(response.data)
          } catch (error) {
            if((error as any).response) {
              const statusCode = (error as any).response.status;
              const errorMsg = (error as any).response;
              if (statusCode === 401) {
                  resolve({status: false, message: 'No tenant database for this user'});
                } else {
                   resolve({ status: false, message: 'Invalid data Provided'});
                }
            }
            else {
             resolve({ status: false, message: 'Network Error'});
            }
          }

    })

  }
}
