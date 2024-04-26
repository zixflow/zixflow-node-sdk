import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import validateSMSData from "../../utilities/validateSMSData";
import {SMSDataInterface , SuccessResponse} from '../../interfaces/rootInterfaces';
import createAxiosRequestConfig from "../../utilities/axiosRequestConfig";
import {POST_SMS_API_URL} from "../../constants";
import axiosWrapper from "../../utilities/axiosRequestWrapper";

export default class SMS {
  private __apiKey:String;

  constructor(apiKey?:String) {
    this.__apiKey = apiKey || process.env.ZIXFLOW_API_KEY ;
  }

  async sendSMS(smsData: SMSDataInterface): Promise<SuccessResponse> {
    
    return new Promise<SuccessResponse>(async (resolve , reject) => {
            
            const validationObject = validateSMSData(smsData);
            
            if (validationObject?.status !== true) {
              const errorMessage = validationObject.message;
               resolve({status: false , message: errorMessage})
                return;
             } 
             
            
           const config = createAxiosRequestConfig(
            this.__apiKey,
            POST_SMS_API_URL , 
            "post" , 
            smsData ,
          );
          

            await axiosWrapper(config).then(response => {
              if (response) {
                const responseObject = {status : response.status ,message : response.message}
                resolve(responseObject);
              }     
            }).catch(error => {
              resolve(error.response?.data)
            }) 
              
          

    })

  }
}



