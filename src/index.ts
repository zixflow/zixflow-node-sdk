import Email from "./services/email/email";
import SMS from "./services/sms/sms";
import WhatsApp from "./services/whatsApp/whatsApp";
import errors from "./errors.json";


export class Zixflow {
  private __apiKey: string;
  private domain: string;

  sms : SMS;

  email : Email;

  whatsApp : WhatsApp;

  constructor(apiKey?: string , domain?: string) {
      this.__apiKey = apiKey || process.env.ZIXFLOW_API_KEY
      this.domain = domain || process.env.ZIXFLOW_DOMAIN || "https://api.zixflow.com"
      this.sms = new SMS(this.__apiKey , this.domain);
      this.email = new Email(this.__apiKey , this.domain);
      this.whatsApp = new WhatsApp(this.__apiKey , this.domain);

        if (this.__apiKey === undefined) throw Error(errors["SFV001"])
        if (typeof this.__apiKey !== "string") throw Error(errors["SFT001"])
        if (this.__apiKey.trim() === "") throw Error(errors["SFV002"])
  }

}







