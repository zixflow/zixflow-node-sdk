import Email from './services/email/email';
import SMS from './services/sms/sms';
import WhatsApp from './services/whatsApp/whatsApp';
import errors from './errors.json';

import CollectionRecords from './services/collectionRecords/collectionRecords';
import ListEntries from './services/listEntries/listEntries';


/**
 *@summary This represents an instance of Zixflow utilized for interacting with Zixflow services.
 *@description This class provides a convenient interface for accessing Zixflow's SMS, Email, and WhatsApp services.
 *
 * @property {SMS} sms - An instance of the SMS service for sending SMS.
 * @property {Email} email - An instance of the Email service for sending email messages.
 * @property {WhatsApp} whatsApp - An instance of the WhatsApp service for sending WhatsApp messages.
 * @property {string} __apiKey - The Zixflow API key used for authentication.
 * @property {string} domain - The base domain URL for Zixflow API requests.
 */
class Zixflow {
  /**
   * @summary The Zixflow API key used for authentication.
   * @type {string}
   */
  private __apiKey: string;

  /**
   * @summary The base domain URL for Zixflow API requests.
   * @type {string}
   */
  private domain: string;

  /**
   * @summary An instance of the SMS service for sending SMS .
   * @type {SMS}
   */
  sms: SMS;

  /**
   * @summary An instance of the Email service for sending email messages.
   * @type {Email}
   */
  email: Email;

  /**
   * @summary An instance of the WhatsApp service for sending WhatsApp messages.
   * @type {WhatsApp}
   */
  whatsApp: WhatsApp;


  collectionRecords: CollectionRecords;

  listEntries: ListEntries;

  /**
   *
   * @summary Creates a new Zixflow instance.
   * @description This constructor initializes a new instance of the Zixflow class, which provides access to Zixflow's SMS, Email, and WhatsApp services.
   *
   * @param {string} [apiKey]  The Zixflow API key. If not provided here, it will be retrieved from the environment variable ZIXFLOW_API_KEY. If it cannot be found there, an error will be thrown.
   *
   * @param {string} [domain]  The Zixflow API domain.If not provided, Defaults to "https://api.zixflow.com".
   *
   * @returns {Zixflow}  Instance of Zixflow class
   *
   * @throws {Error} An error if the API key is not provided or is not a string, or is an empty string.
   */
  constructor(apiKey?: string, domain?: string) {
    this.__apiKey = apiKey || process.env.ZIXFLOW_API_KEY || '';
    this.domain = domain || 'https://api.zixflow.com';
    this.sms = new SMS(this.__apiKey, this.domain);
    this.email = new Email(this.__apiKey, this.domain);
    this.whatsApp = new WhatsApp(this.__apiKey, this.domain);

    this.collectionRecords = new CollectionRecords(this.__apiKey , this.domain);
    this.listEntries = new ListEntries(this.__apiKey , this.domain);

    if (this.__apiKey === undefined) throw Error(errors['SFV001']);
    if (typeof this.__apiKey !== 'string') throw Error(errors['SFT001']);
    if (this.__apiKey.trim() === '') throw Error(errors['SFV002']);
  }
}

export = Zixflow;




