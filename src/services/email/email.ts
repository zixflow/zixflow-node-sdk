import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { EmailDataInterface  , EmailSuccessResponse} from "../../interfaces/emailInterface";

import config from '../../config.json'
import validateEmailRequestData from "../../utilities/validateEmailRequestData";

const { postEmailApiUrl} = config;

export default class Email {
  private __apiKey: String;

  constructor( apiKey?:String ) {
    this.__apiKey = apiKey;
  }

  async sendEmail(emailData: EmailDataInterface): Promise<EmailSuccessResponse> {

    return new Promise<EmailSuccessResponse>(async (resolve , reject) => {

         const isValid = validateEmailRequestData(emailData);
         if (typeof isValid === 'string') {
           resolve({status: false , message: isValid })
             return;
           }
             
        const config: AxiosRequestConfig = {
            method: "post",
            url: postEmailApiUrl,
            headers: {
              Authorization: `Bearer ${this.__apiKey}`,
              "Content-Type": "application/json",
            },
            data: JSON.stringify(emailData),
          };

          try {
            const response: AxiosResponse<any , any> = await axios(config);
            if (response) {
              const succesMsgFromDocs = { "status": true, "message": "Email sent successfully!"}
              resolve(response.data);
            }else {
              reject();
            }
            
          } catch (error) {
            const responseStatusCode = error.response?.status
            const responseStatusText = error.response?.statusText
            const responseData = error.response?.data
            if((error as any).response) {
              const statusCode = (error as any).response.status;
              const errorMsg = (error as any).response;
              if (statusCode === 401) {
                  resolve({ status: false, message: "No token provided"}
                )
                } else {
                    const invalidResponseFromDocs = { 
                    "status": false,
                    "message": "to[1] must be a valid email"
                     }
                  
                  resolve(errorMsg.data)
                }
            }
            else {
             resolve({status: false,message: 'Network Error'});
            }
          }

    })

  }
}
