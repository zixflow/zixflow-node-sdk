import { EmailDataInterface, DataErrorInterface } from '../interfaces/rootInterfaces';
import emailValidator from './emailValidator';
import errors from '../errors.json';

export default function validateEmailData(data: EmailDataInterface): DataErrorInterface {
  let message = '';
  if (data.to) {
    const result = emailValidator(data.to);
    if (result.status === false) {
      message = result.message;
    }
  }
  if (message)
    return {
      status: false,
      message: message,
    };

  if (!data.subject) message = errors.E009;
  else if (!data.from) message = errors.E010;
  else if (!data.fromName) message = errors.E011;
  else if (!data.bodyHtml && !data.bodyText) message = errors.E012;

  return {
    status: message === '' ? true : false,
    message: message === '' ? 'All values are valid' : message,
  };
}
