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