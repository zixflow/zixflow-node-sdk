import errors from '../errors.json';
import isEmail from 'validator/lib/isEmail';
import { DataErrorInterface } from '../interfaces/rootInterfaces';

export default function emailValidator(emails): DataErrorInterface {
  let invalidEmails = [];

  if (emails.length === 0 || emails[0] === '') {
    return {
      status: false,
      message: errors.E008,
    };
  } else {
    emails.forEach((email) => {
      const res = isEmail(email);
      if (!res) {
        invalidEmails.push(email);
      }
    });

    if (invalidEmails.length > 0) {
      return {
        status: false,
        message: `The provided email(s) ${invalidEmails.join(', ')} is/are invalid`,
      };
    } else {
      return {
        status: true,
        message: 'Valid Emails',
      };
    }
  }
}
