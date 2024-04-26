import errors from '../errors.json';
import validatePhoneWithCode from "./validatePhoneNumber";
import { DataErrorInterface, SMSDataInterface } from '../interfaces/rootInterfaces';

export default function validateSMSData(data: SMSDataInterface): DataErrorInterface {
    let error: DataErrorInterface = {
        status: false,
        message: ""
    };

    switch (true) {
        case (!data.senderId || data.senderId === ""):
            error.message = errors.E001;
            break;
        case (!data.route):
            error.message = errors.E002;
            break;
        case (!data.route):
            error.message = errors.E003;
            break;
        case (!data.message):
            error.message = errors.E004;
            break;
        case (data.number !== undefined || data.number !== ""):
        const phResult: DataErrorInterface = validatePhoneWithCode(data.number);
        return phResult;
        
        default:
            error.status = true;
            error.message = "All values are valid";
    }

    return error;
}
