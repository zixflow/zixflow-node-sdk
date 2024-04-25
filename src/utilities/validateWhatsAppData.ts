import { WhatsAppDataInterface , DataErrorInterface } from "../interfaces/rootInterfaces";
import validatePhoneWithCode from "./validatePhoneNumber";
import errors from '../errors.json';

export default function validateWhatsappData(data:WhatsAppDataInterface): DataErrorInterface {

    if (data.to !== undefined && data.to !== "") {
        const phoneNumber = data.to;
        const result = validatePhoneWithCode(phoneNumber)
        if (result !== true) {
            return  {
                status : false,
                message : result
            }
        }
    }


    if (!data.phoneId) {
        return {
            status : false,
            message : errors.E013
        }
    }

    if (!data.templateName) {
        return {
            status : false,
            message : errors.E014
        }
    }

    if (!data.language) {
        return {
            status : false,
            message : errors.E015
        }
    }

    else {
        return {
                status : true,
                message : "All values are valid"
            }
       }

}