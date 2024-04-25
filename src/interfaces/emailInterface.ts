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