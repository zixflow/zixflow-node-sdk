import { SMSDataInterface } from "../interfaces/smsInterface";
import errors from '../errors.json';
import validatePhoneWithCode from "./validatePhoneNumber";

export default function validateData(data:SMSDataInterface): string | true {
    
    let result:string | boolean ;

    if (!data.senderId) {
        result =  errors.E001;
    }

    if (!data.route) {
        result = errors.E002;
    }

    if (data.number !== undefined && data.number !== "") {   
        const phResult = validatePhoneWithCode(data.number)
        result = phResult ;
    } else {
        result =  errors.E005
    }

    if (!data.route) {
        result = errors.E003;
    }

    if (!data.message) {
        result = errors.E004;
    }

    return result
}