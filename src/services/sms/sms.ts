import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import validateData from "../../utilities/validateSMSRequest";
import {SMSDataInterface , SuccessResponse} from '../../interfaces/smsInterface';
import config from '../../config.json'

const { postSMSApiUrl} = config;

export default class SMS {
  private __apiKey:String;

  constructor(apiKey?:String) {
    this.__apiKey = apiKey || process.env.ZIXFLOW_API_KEY ;
  }

  async sendSMS(smsData: SMSDataInterface): Promise<SuccessResponse> {
    
    return new Promise<SuccessResponse>(async (resolve , reject) => {

            const isValid = validateData(smsData);
            
            if (typeof isValid === 'string') {
              resolve({status: false , message: isValid })
                return;
             }
          
            const config: AxiosRequestConfig = {
                method: "post",
                url: postSMSApiUrl,
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
                else {
                  resolve({ "status": false , "message": "Response is undefined" })
                }
          } catch (error) {
            if((error as any).response) {
              const statusCode = (error as any).response.status;
              if (statusCode === 401) {
                  resolve({ "status": false , "message": "Unauthorised" });
                  return
                } else {
                  resolve({status: false , message: "Unauthorised"})
                  return;
                }
            }
            else {
             resolve({status: false, message: 'Network Error'});
            }
          }

    })

  }
}



