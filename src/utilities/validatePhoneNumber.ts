import { parsePhoneNumber , parsePhoneNumberFromString} from 'libphonenumber-js';
import errors from '../errors.json';

export default function validatePhoneWithCode(phNumber:number | string): string | true {

    const phoneNumber = parsePhoneNumberFromString(`+${phNumber}`);
   
    if (phoneNumber) {
        const countryCode = phoneNumber.countryCallingCode;
        const countryName = phoneNumber.country;
        const formattedPhoneNumber = phoneNumber.formatInternational();
        if (countryCode && countryName && formattedPhoneNumber) {
            return true
        } else {
            return errors.E007
        }
        
    } else {
        return errors.E006
    }

}
