import { SuccessResponse, ErrorResponse } from '../../interfaces/rootInterfaces';
import createAxiosConfig from '../../utilities/axiosConfig';
import { AxiosRequestConfig } from 'axios';
import {
  CREATE_COLLECTION_RECORD,
  DELETE_COLLECTION_RECORD_BY_ID,
  GET_COLLECTION_RECORD_BY_ID,
  GET_LIST_OF_COLLECTION_RECORDS,
  UPDATE_COLLECTION_RECORD,
} from '../../constants';
import axiosWrapper from '../../utilities/axiosRequestWrapper';
import { validateParameters } from '../../utilities/validateParameters';

/**
 * @summary Represents a Collection Records class instance used for creating , updating , fetching and deleting records.
 * @description This class provides a methods to do CRUD.
 * @property {string} __apiKey - The Zixflow API key used for authentication.
 * @property {string} domain - The base domain URL for Zixflow API requests.
 */
class CollectionRecords {
  /**
   * @summary The Zixflow API key.
   * @type {string}
   */
  private __apiKey: string;

  /**
   * @summary The Zixflow API domain.
   * @type {string}
   */
  private domain: string;

  /**
   * @summary Creates a new SMS service instance.
   * @param {string} [apiKey] The Zixflow API key. If not provided here, it will be retrieved from the environment variable ZIXFLOW_API_KEY. If it cannot be found there, an error will be thrown.
   * @param {string} [domain] The Zixflow API domain. This specifies the domain for API requests related to SMS functionality. If not provided, the constructor will attempt to retrieve it from the environment variable ZIXFLOW_DOMAIN. If that's not available either, it will default to "https://api.zixflow.com".
   * @returns {SMS}  Instance of SMS class
   */
  constructor(apiKey?: string, domain?: string) {
    this.__apiKey = apiKey || process.env.ZIXFLOW_API_KEY || '';
    this.domain = domain || process.env.ZIXFLOW_DOMAIN || 'https://api.zixflow.com';

    
    if (!this.__apiKey) {
      throw new Error('API key is required.');
    }
  }

  

  async getListOfCollectionRecords(collectionId: string ): Promise<SuccessResponse | ErrorResponse> {
  
    validateParameters({ collectionId }, ['collectionId']);

    return new Promise<SuccessResponse | ErrorResponse>((resolve) => {
      const apiUrl = `${this.domain}${GET_LIST_OF_COLLECTION_RECORDS.replace('{collectionId}', collectionId)}`;
      
      const config: AxiosRequestConfig = createAxiosConfig({
        apiKey: this.__apiKey,
        apiUrl: apiUrl,
        method: 'post'
      });

      axiosWrapper(config)
        .then((response) => {
          if (response) {
            resolve(response);
          }
        })
        .catch((error) => {
          resolve(error.response?.data);
        });
    });
  }

  async getCollectionRecordById(collectionId: string, recordId: string): Promise<SuccessResponse | ErrorResponse> {
   
    validateParameters({ collectionId, recordId }, ['collectionId', 'recordId']);

    return new Promise<SuccessResponse | ErrorResponse>((resolve) => {
      const apiUrl = `${this.domain}${GET_COLLECTION_RECORD_BY_ID.replace('{collectionId}', collectionId).replace('{recordId}', recordId)}`;
    
      const config: AxiosRequestConfig = createAxiosConfig({
        apiKey: this.__apiKey,
        apiUrl: apiUrl,
        method: 'get',
      });

      axiosWrapper(config)
        .then((response) => {
          if (response) {
            resolve(response);
          }
        })
        .catch((error) => {
          resolve(error.response?.data);
        });
    });
  }

  async createCollectionRecord(collectionId: string, recordData: {}): Promise<SuccessResponse | ErrorResponse> {
   
    validateParameters({ collectionId, recordData }, ['collectionId', 'recordData']);

    return new Promise<SuccessResponse | ErrorResponse>((resolve) => {
      const apiUrl = `${this.domain}${CREATE_COLLECTION_RECORD.replace('{collectionId}', collectionId)}`;
      
      const config: AxiosRequestConfig = createAxiosConfig({
        apiKey: this.__apiKey,
        apiUrl: apiUrl,
        method: 'post',
        data: recordData,
      });

      axiosWrapper(config)
        .then((response) => {
          if (response) {
            resolve(response);
          }
        })
        .catch((error) => {
          resolve(error.response?.data);
        });
    });
  }

  async updateCollectionRecord(
    collectionId: string,
    recordId: string,
    recordData: {},
  ): Promise<SuccessResponse | ErrorResponse> {
  
    validateParameters({ collectionId, recordId, recordData }, ['collectionId', 'recordId', 'recordData']);

    return new Promise<SuccessResponse | ErrorResponse>((resolve) => {
      const apiUrl = `${this.domain}${UPDATE_COLLECTION_RECORD.replace('{collectionId}', collectionId).replace('{recordId}', recordId)}`;
     
      const config: AxiosRequestConfig = createAxiosConfig({
        apiKey: this.__apiKey,
        apiUrl: apiUrl,
        method: 'patch',
        data: recordData,
      });

      axiosWrapper(config)
        .then((response) => {
          if (response) {
            resolve(response);
          }
        })
        .catch((error) => {
          resolve(error.response?.data);
        });
    });
  }

  async deleteCollectionRecordById(collectionId: string, recordId: string): Promise<SuccessResponse | ErrorResponse> {
    
    validateParameters({ collectionId, recordId }, ['collectionId', 'recordId']);

    return new Promise<SuccessResponse | ErrorResponse>((resolve) => {
      const apiUrl = `${this.domain}${DELETE_COLLECTION_RECORD_BY_ID.replace('{collectionId}', collectionId).replace('{recordId}', recordId)}`;
      
      const config: AxiosRequestConfig = createAxiosConfig({
        apiKey: this.__apiKey,
        apiUrl: apiUrl,
        method: 'delete',
      });

      axiosWrapper(config)
        .then((response) => {
          if (response) {
            resolve(response);
          }
        })
        .catch((error) => {
          resolve(error.response?.data);
        });
    });
  }
}

export = CollectionRecords;
