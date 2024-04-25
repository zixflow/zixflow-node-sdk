import Email from "./services/email/email";
import SMS from "./services/sms/sms";
import WhatsApp from "./services/whatsApp/whatsApp";
import errors from "../src/errors.json";

export default class Zixflow {
  private __apiKey: string;

  sms : SMS;

  email : Email;

  whatsApp : WhatsApp;

  constructor(apiKey?: string) {
      this.__apiKey = apiKey || process.env.ZIXFLOW_API_KEY
      this.sms = new SMS(this.__apiKey);
      this.email = new Email(this.__apiKey);
      this.whatsApp = new WhatsApp(this.__apiKey);

        if (this.__apiKey === undefined) throw Error(errors["SFV001"])
        if (typeof this.__apiKey !== "string") throw Error(errors["SFT001"])
        if (this.__apiKey.trim() === "") throw Error(errors["SFV002"])
  }
}




