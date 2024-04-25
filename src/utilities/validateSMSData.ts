
import errors from '../errors.json';
import validatePhoneWithCode from "./validatePhoneNumber";
import {DataErrorInterface , SMSDataInterface } from '../interfaces/rootInterfaces';

export default function validateSMSData(data:SMSDataInterface): DataErrorInterface  {
    
    

    if (!data.senderId || (data.senderId === "")) {
        return  {
            status : false,
            message : errors.E001
        }
        
    }

    if (!data.route) {
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
        return {
            status : false,
            message : errors.E003
        }
    }

    if (!data.message) {
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