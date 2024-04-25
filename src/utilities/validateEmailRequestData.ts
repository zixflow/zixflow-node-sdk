import { EmailDataInterface } from "../interfaces/emailInterface";
import validateEmailIds from "./validateEmailId";
import errors from '../errors.json';

export default function validateEmailRequestData(data:EmailDataInterface): string | true {
    let result:string | true;

    if (data.to) {
        result = validateEmailIds(data.to);
    }

    if (!data.subject) {
        result =  errors.E009;
    }

    if (!data.from) {
        result = errors.E010;
    }

    if (!data.fromName) {
        result = errors.E011;
    }

    if (!data.bodyHtml && !data.bodyText) {
        result = errors.E012;
    }

    if (!data.bodyHtml && data.bodyText || !data.bodyText && data.bodyHtml) {
        result = true;
    }

    return result
}