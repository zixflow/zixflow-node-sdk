import validateSMSData from "../../utilities/validateSMSData";
import {SMSDataInterface , SuccessResponse} from '../../interfaces/rootInterfaces';
import createAxiosConfig from "../../utilities/axiosConfig";
import {POST_SMS_API_URL} from "../../constants";
import axiosWrapper from "../../utilities/axiosRequestWrapper";
import { AxiosRequestConfig } from "axios";

export default class SMS {
  private __apiKey:string;

  constructor(apiKey?:string) {
    this.__apiKey = apiKey || process.env.ZIXFLOW_API_KEY ;
  }

  async sendSMS(smsData: SMSDataInterface): Promise<SuccessResponse> {
    return new Promise<SuccessResponse>(async (resolve , reject) => {
            
            const validationResult = validateSMSData(smsData);
            
            if (validationResult?.status !== true) {
              const errorMessage = validationResult.message;
               resolve({status: false , message: errorMessage})
                return;
             } 
             
            
            const config:AxiosRequestConfig = createAxiosConfig({
              apiKey : this.__apiKey,
              apiUrl : POST_SMS_API_URL , 
              method : "post" , 
              data : smsData 
            });
          
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



