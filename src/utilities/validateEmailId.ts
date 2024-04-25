import errors from '../errors.json';

export default function validateEmailIds(emails)  {
    const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validationResults = {};
    const invalidEmails = [];

    if (emails.length === 0 ||  emails[0]=== "" ) {
        return errors.E008;
    }
    else {
        emails.forEach(email => {
            const isValid = emailValidationRegex.test(email);
            validationResults[email] = isValid ? 'valid' : 'invalid';
        });

        for (const email in validationResults) {
            if (validationResults[email] !== "valid") {
                invalidEmails.push(email);
            }
        }

        if (invalidEmails.length !== 0) {
            const errorTemplate = `The provided Email Id ${invalidEmails.join(', ')} is invalid`;
            return errorTemplate;
        }
        else {
            return true
        }
    }
}




