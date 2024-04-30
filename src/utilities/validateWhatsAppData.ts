import { WhatsAppDataInterface, DataErrorInterface } from '../interfaces/rootInterfaces';
import validatePhoneWithCode from './validatePhoneNumber';
import errors from '../errors.json';

export default function validateWhatsAppData(data: WhatsAppDataInterface): DataErrorInterface {
  let error: DataErrorInterface = {
    status: false,
    message: '',
  };

  switch (true) {
    case !data.phoneId:
      error.message = errors.E013;
      break;

    case !data.templateName:
      error.message = errors.E014;
      break;

    case !data.language:
      error.message = errors.E015;
      break;

    case data.to !== undefined || data.to !== '':
      const result: DataErrorInterface = validatePhoneWithCode(data.to);
      return result;

    default:
      error.status = true;
      error.message = 'All values are valid';
  }

  return error;
}
