import { WhatsAppDataInterface } from "../interfaces/whatsappInterface";
import validatePhoneWithCode from "./validatePhoneNumber";
import errors from '../errors.json';
export default function validateWhatsappData(data:WhatsAppDataInterface): string | true {

    let result:string | true;

    if (data.to !== undefined && data.to !== "") {
        const phoneNumber = data.to;
        let checkedResult = validatePhoneWithCode(phoneNumber)
        result =  checkedResult;
    }
    else {
        result =  errors.E005
    }


    if (!data.phoneId) {
        result = errors.E013;
    }

    if (!data.templateName) {
        result = errors.E014;
    }

    if (!data.language) {
        result = errors.E015;
    }

    return result
}