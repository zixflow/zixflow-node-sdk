import { EmailDataInterface , DataErrorInterface} from "../interfaces/rootInterfaces";
import emailValidator from "./emailValidator";
import errors from '../errors.json';

export default function validateEmailData(data:EmailDataInterface): DataErrorInterface {
    
    
    if (data.to) {

        const result = emailValidator(data.to)
        if (result.status === false) {
            return  {
                status : false,
                message : result.message
            }
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


    

    else {
        return {
                status : true,
                message : "All values are valid"
            }
       }

   
}