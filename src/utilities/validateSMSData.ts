import { SMSDataInterface } from "../interfaces/smsInterface";
import errors from '../errors.json';
import validatePhoneWithCode from "./validatePhoneNumber";

export default function validateSMSData(data:SMSDataInterface):  { status: boolean; message: string } {
    
    
    
   

    if (!data.senderId || (data.senderId === "")) {
        // result =  errors.E001;
        return  {
            status : false,
            message : errors.E001
        }
        
    }

    if (!data.route) {
        // result = errors.E002;
        return  {
            status : false,
            message : errors.E002
        }
    }

    if (data.number !== undefined && data.number !== "") {   
        const phResult = validatePhoneWithCode(data.number)
        if (phResult !== true) {
            return  {
                status : false,
                message : phResult
            }
        }
        
    } 

    if (!data.route) {
        // result = errors.E003;
        return {
            status : false,
            message : errors.E003
        }
    }

    if (!data.message) {
        // result = errors.E004;
        return {
            status : false,
            message : errors.E004
        }
    }

   else {
    return {
            status : true,
            message : "All values are valid"
        }
   }
}