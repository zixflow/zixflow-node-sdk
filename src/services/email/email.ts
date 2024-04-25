import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { EmailDataInterface  , EmailSuccessResponse} from "../../interfaces/rootInterfaces";

import validateEmailData from "../../utilities/validateEmailData";
import {POST_EMAIL_API_URL} from "../../constants";

export default class Email {
  private __apiKey: String;

  constructor( apiKey?:String ) {
    this.__apiKey = apiKey;
  }

  async sendEmail(emailData: EmailDataInterface): Promise<EmailSuccessResponse> {

    return new Promise<EmailSuccessResponse>(async (resolve , reject) => {

      const validationObject = validateEmailData(emailData);
      
      if (validationObject.status === false) {
        const errorMessage = validationObject.message;
         resolve({status: false , message: errorMessage})
          return;
       }
             
        const config: AxiosRequestConfig = {
            method: "post",
            url: POST_EMAIL_API_URL,
            headers: {
              Authorization: `Bearer ${this.__apiKey}`,
              "Content-Type": "application/json",
            },
            data: JSON.stringify(emailData),
          };

          try {
            const response: AxiosResponse<any , any> = await axios(config);

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
