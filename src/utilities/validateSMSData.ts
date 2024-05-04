import errors from '../errors.json';
import validatePhoneWithCode from './validatePhoneNumber';
import { DataErrorInterface, SMSDataInterface } from '../interfaces/rootInterfaces';

export default function validateSMSData(data: SMSDataInterface): DataErrorInterface {
  let message = '';

  if (!data.senderId || data.senderId === '') message = errors.E001;
  else if (!data.route) message = errors.E002;
  else if (!data.message) message = errors.E004;
  else if (data.number !== undefined || data.number !== '') {
    const result: DataErrorInterface = validatePhoneWithCode(data.number);
    message = !result.status ? result.message : '';
  } else message = '';

  return {
    status: message === '' ? true : false,
    message: message === '' ? 'All values are valid' : message,
  };
}
