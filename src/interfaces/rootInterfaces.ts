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
  
export interface SuccessResponse {
         status:boolean;
         message:string;
         messageId?:string; 
        campaignId?:string;
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
    attachments:Array<string>;
    callbackUrl:string
  }
  
  export interface EmailSuccessResponse {
        status: boolean;
        message: string;
        campaignId?: string;
        messageIds?: Array<{}>;
}

export interface WhatsAppDataInterface {
    to:string;
    phoneId: string;
    templateName: string;
    language: string;
    variables: Object;
    source:string,
    linkWithRecord:boolean,
    submissionStatus:boolean
  }
  
  
  export interface WhatsappSuccessResponse {
        status: boolean;
        message: string;
        campaignId?: string;
        messageId?: string;
}

export interface DataErrorInterface {
    status: boolean; 
    message: string 
}

