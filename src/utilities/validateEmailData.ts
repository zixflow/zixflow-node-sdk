import { EmailDataInterface, DataErrorInterface } from '../interfaces/rootInterfaces';
import emailValidator from './emailValidator';
import errors from '../errors.json';

export default function validateEmailData(data: EmailDataInterface): DataErrorInterface {
  let error: DataErrorInterface = {
    status: false,
    message: '',
  };

  if (data.to) {
    const result = emailValidator(data.to);
    if (result.status === false) {
      error.message = result.message;
    }
  }

  switch (true) {
    case !data.subject:
      error.message = errors.E009;
      break;

    case !data.from:
      error.message = errors.E010;
      break;

    case !data.fromName:
      error.message = errors.E011;
      break;

    case !data.bodyHtml && !data.bodyText:
      error.message = errors.E012;
      break;

    default:
      error.status = true;
      error.message = 'All values are valid';
  }
  return error;
}
