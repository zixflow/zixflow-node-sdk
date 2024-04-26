import { parsePhoneNumber , parsePhoneNumberFromString} from 'libphonenumber-js';
import errors from '../errors.json';
import { DataErrorInterface } from '../interfaces/rootInterfaces';

export default function validatePhoneWithCode(phNumber:number | string): DataErrorInterface {

    const phoneNumber = parsePhoneNumberFromString(`+${phNumber}`);
   
    if (phoneNumber) {
        const countryCode = phoneNumber.countryCallingCode;
        const nationalNumber = phoneNumber.nationalNumber;
        
        if (countryCode && nationalNumber && nationalNumber.length === 10) {
            return  {
                status : true,
                message : "Valid Number"
            }
        } else {
            return {
                status : false,
                message : errors.E007
            }
        }
        
    } else {
        return {
            status : false,
            message : errors.E006
        }
    }

}
