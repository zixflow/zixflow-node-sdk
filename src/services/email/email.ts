import { EmailDataInterface, EmailSuccessResponse } from '../../interfaces/rootInterfaces';

import validateEmailData from '../../utilities/validateEmailData';
import { POST_EMAIL_API_URL } from '../../constants';
import createAxiosConfig from '../../utilities/axiosConfig';
import axiosWrapper from '../../utilities/axiosRequestWrapper';
import { AxiosRequestConfig } from 'axios';

export default class Email {
  private __apiKey: string;

  constructor(apiKey?: string) {
    this.__apiKey = apiKey;
  }

  async sendEmail(emailData: EmailDataInterface): Promise<EmailSuccessResponse> {
    return new Promise<EmailSuccessResponse>(async (resolve, reject) => {
      const validationResult = validateEmailData(emailData);
      if (validationResult.status === false) {
        const errorMessage = validationResult.message;
        resolve({ status: false, message: errorMessage });
        return;
      }

      const config: AxiosRequestConfig = createAxiosConfig({
        apiKey: this.__apiKey,
        apiUrl: POST_EMAIL_API_URL,
        method: 'post',
        data: emailData,
      });

      await axiosWrapper(config)
        .then((response) => {
          if (response) {
            const responseObject = { status: response.status, message: response.message };
            resolve(responseObject);
          }
        })
        .catch((error) => {
          resolve(error.response?.data);
        });
    });
  }
}
