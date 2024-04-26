import { AxiosRequestConfig} from "axios";
import { WhatsAppDataInterface , WhatsappSuccessResponse } from "../../interfaces/rootInterfaces";
import validateWhatsappData from "../../utilities/validateWhatsAppData";
import {POST_WHATSAPP_API_URL} from "../../constants";
import createAxiosConfig from "../../utilities/axiosConfig";
import axiosWrapper from "../../utilities/axiosRequestWrapper";

export default class WhatsApp {
  private __apiKey: string;

  constructor(apiKey?: string) {
    this.__apiKey = apiKey;
  }

  async sendWhatsAppTemplate(whatsAppData: WhatsAppDataInterface): Promise<WhatsappSuccessResponse> {

    return new Promise<WhatsappSuccessResponse>(async (resolve , reject) => {

      const validationResult = validateWhatsappData(whatsAppData);

      if (validationResult.status === false) {
        const errorMessage = validationResult.message;
         resolve({status: validationResult.status , message: errorMessage})
          return;
       }

          const config:AxiosRequestConfig = createAxiosConfig({
              apiKey : this.__apiKey ,
              apiUrl : POST_WHATSAPP_API_URL ,
              method : "post" ,
              data : whatsAppData
          })
           
            await axiosWrapper(config).then(response => {
              if (response) {
                const responseObject = {status : response.status,message : response.message}
                resolve(responseObject);
              } 
            }).catch(error => {
                resolve(error.response?.data)
            })

          })
  }
}

