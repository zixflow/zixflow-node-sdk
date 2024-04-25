import { EmailDataInterface , DataErrorInterface} from "../interfaces/rootInterfaces";
import validateEmailIds from "./validateEmailId";
import errors from '../errors.json';

export default function validateEmailData(data:EmailDataInterface): DataErrorInterface {
    
    if (data.to) {
        return  {
            status : true,
            message : errors.E008
        }
    }

    if (!data.subject) {
        return  {
            status : false,
            message : errors.E009
        }
    }

    if (!data.from) {
        return  {
            status : false,
            message : errors.E010
        }
    }

    if (!data.fromName) {
        return  {
            status : false,
            message : errors.E011
        }
    }

    if (!data.bodyHtml && !data.bodyText) {
        return  {
            status : false,
            message : errors.E012
        }
    }

    if (!data.bodyHtml && data.bodyText || !data.bodyText && data.bodyHtml) {
     
        return  {
            status : false,
            message : "success.Either one value is present"
        }
    }

    else {
        return {
                status : true,
                message : "All values are valid"
            }
       }

   
}