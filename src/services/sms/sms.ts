import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import validateSMSData from "../../utilities/validateSMSData";
import {SMSDataInterface , SuccessResponse} from '../../interfaces/rootInterfaces';

import {POST_SMS_API_URL} from "../../constants";


export default class SMS {
  private __apiKey:String;

  constructor(apiKey?:String) {
    this.__apiKey = apiKey || process.env.ZIXFLOW_API_KEY ;
  }

  async sendSMS(smsData: SMSDataInterface): Promise<SuccessResponse> {
    
    return new Promise<SuccessResponse>(async (resolve , reject) => {
            
            const validationObject = validateSMSData(smsData);
            
            if (validationObject.status === false) {
              const errorMessage = validationObject.message;
               resolve({status: false , message: errorMessage})
                return;
             }
             
             
            const config: AxiosRequestConfig = {
                method: "post",
                url: POST_SMS_API_URL,
                headers: {
                  Authorization: `Bearer ${this.__apiKey}`,
                  "Content-Type": "application/json",
                },
                data: JSON.stringify(smsData),
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



