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