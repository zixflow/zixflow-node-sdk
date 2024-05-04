import { WhatsAppDataInterface, DataErrorInterface } from '../interfaces/rootInterfaces';
import validatePhoneWithCode from './validatePhoneNumber';
import errors from '../errors.json';

export default function validateWhatsAppData(data: WhatsAppDataInterface): DataErrorInterface {
  let message = '';
  if (!data.phoneId) message = errors.E013;
  else if (!data.templateName) message = errors.E014;
  else if (!data.language) message = errors.E015;
  else if (data.to !== undefined || data.to !== '') {
    const result: DataErrorInterface = validatePhoneWithCode(data.to);
    message = !result.status ? result.message : '';
  } else message = '';

  return {
    status: message === '' ? true : false,
    message: message === '' ? 'All values are valid' : message,
  };
}
