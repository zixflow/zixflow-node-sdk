export interface SMSDataInterface {
  senderId: string;
  route: string;
  number: string;
  message: string;
  isFlash: boolean;
  dltTemplateId: string;
  dltEntityId: string;
  reportURL: string;
  submissionStatus: boolean;
}

export interface EmailDataInterface {
  to: Array<string>;
  subject: string;
  from: string;
  fromName: string;
  bodyHtml: string;
  bodyText: string;
  trackClicks: boolean;
  trackOpens: boolean;
  replyToEmail: string;
  replyToName: string;
  attachments: Array<string>;
  callbackUrl: string;
}


export interface WhatsAppDataInterface {
  to: string;
  phoneId: string;
  templateName: string;
  language: string;
  variables: Object;
  source: string;
  linkWithRecord: boolean;
  submissionStatus: boolean;
}

interface ServerResponse {
  status: boolean;
  message: string;
  messageId?: string;
  campaignId?: string;
}

export interface SuccessResponse extends ServerResponse {
  status: true; 
}

export interface ErrorResponse extends ServerResponse {
  status: false; 
}

export interface DataErrorInterface {
  status: boolean;
  message: string;
}
