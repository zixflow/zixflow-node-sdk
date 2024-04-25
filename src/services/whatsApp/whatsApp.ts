import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { WhatsAppDataInterface , WhatsappSuccessResponse } from "../../interfaces/rootInterfaces";
import validateWhatsappData from "../../utilities/validateWhatsAppData";
import {POST_WHATSAPP_API_URL} from "../../constants";

export default class WhatsApp {
  private __apiKey: String;

  constructor(apiKey?: String) {
    this.__apiKey = apiKey;
  }

  async sendWhatsAppTemplate(whatsAppData: WhatsAppDataInterface): Promise<WhatsappSuccessResponse> {

    return new Promise<WhatsappSuccessResponse>(async (resolve , reject) => {

      const validationObject = validateWhatsappData(whatsAppData);

      if (validationObject.status === false) {
        const errorMessage = validationObject.message;
         resolve({status: validationObject.status , message: errorMessage})
          return;
       }

        const config: AxiosRequestConfig = {
            method: "post",
            url: POST_WHATSAPP_API_URL,
            headers: {
              Authorization: `Bearer ${this.__apiKey}`,
              "Content-Type": "application/json",
            },
            data: JSON.stringify(whatsAppData),
          };
           
            
          try {
            const response: AxiosResponse = await axios(config);

            if (response && response.data) {
              const responseObject = {status : response.data.status,message : response.data.message}
              resolve(responseObject);
            } 
          } catch (error) {
              resolve(error.response.data)
          }

    })

  }
}

