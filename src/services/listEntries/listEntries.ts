import { SuccessResponse, ErrorResponse } from '../../interfaces/rootInterfaces';
import createAxiosConfig from '../../utilities/axiosConfig';
import { AxiosRequestConfig } from 'axios';
import {
  CREATE_LIST_ENTRY,
  DELETE_LIST_ENTRY_BY_ID,
  GET_LIST_ENTRY_BY_ID,
  GET_LIST_OF_LIST_ENTRIES,
  UPDATE_LIST_ENTRY,
} from '../../constants';
import axiosWrapper from '../../utilities/axiosRequestWrapper';
import { validateParameters } from '../../utilities/validateParameters';

/**
 * @summary Represents a List Entries class instance used for creating , updating , fetching and deleting entries.
 * @description This class provides a methods to create , update , delete and find list entries.
 * @property {string} __apiKey - The Zixflow API key used for authentication.
 * @property {string} domain - The base domain URL for Zixflow API requests.
 */
class ListEntries {
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
   * @summary Creates a new ListEntries service instance.
   * @param {string} [apiKey] The Zixflow API key. If not provided here, it will be retrieved from the environment variable ZIXFLOW_API_KEY. If it cannot be found there, an error will be thrown.
   * @param {string} [domain] The Zixflow API domain. This specifies the domain for API requests related to Lists functionality. If not provided, the constructor will attempt to retrieve it from the environment variable ZIXFLOW_DOMAIN. If that's not available either, it will default to "https://api.zixflow.com".
   * @returns {SMS}  Instance of ListEntries class
   */
  constructor(apiKey?: string, domain?: string) {
    this.__apiKey = apiKey || process.env.ZIXFLOW_API_KEY || '';
    this.domain = domain || process.env.ZIXFLOW_DOMAIN || 'https://api.zixflow.com';

    if (!this.__apiKey) {
      throw new Error('API key is required.');
    }
  }

  async getListOfListEntries(listId: string , data: any): Promise<SuccessResponse | ErrorResponse> {
      try {
        validateParameters({ listId }, ['listId']);

        return new Promise<SuccessResponse | ErrorResponse>((resolve , reject) => {
          const apiUrl = `${this.domain}${GET_LIST_OF_LIST_ENTRIES.replace('{listId}', listId)}`;
         
          const config: AxiosRequestConfig = createAxiosConfig({
            apiKey: this.__apiKey,
            apiUrl: apiUrl,
            method: 'post',
            data
          });
    
          axiosWrapper(config)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
              reject(error.response?.data);
            });
        });
      } catch (error) {
        return Promise.reject(error.message)
      }
    
  }

  async getListEntryById(listId: string, entryId: string): Promise<SuccessResponse | ErrorResponse> {
      try {
        validateParameters({ listId, entryId }, ['listId', 'entryId']);

        return new Promise<SuccessResponse | ErrorResponse>((resolve , reject) => {
          const apiUrl = `${this.domain}${GET_LIST_ENTRY_BY_ID.replace('{listId}', listId).replace('{entryId}', entryId)}`;
          const config: AxiosRequestConfig = createAxiosConfig({
            apiKey: this.__apiKey,
            apiUrl: apiUrl,
            method: 'get',
          });
    
          axiosWrapper(config)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
              reject(error.response?.data);
            });
        });
      } catch (error) {
        return Promise.reject(error.message)
      }
  }

  async createListEntry(listId: string, recordData:any): Promise<SuccessResponse | ErrorResponse> {
    try {
      validateParameters({ listId, recordData }, ['listId', 'recordData']);

      return new Promise<SuccessResponse | ErrorResponse>((resolve , reject) => {
        const apiUrl = `${this.domain}${CREATE_LIST_ENTRY.replace('{listId}', listId)}`;
      
        const config: AxiosRequestConfig = createAxiosConfig({
          apiKey: this.__apiKey,
          apiUrl: apiUrl,
          method: 'post',
          data: recordData,
        });
  
        axiosWrapper(config)
          .then((response) => {
              resolve(response);
          })
          .catch((error) => {
            reject(error.response?.data);
          });
      });
    } catch (error) {
      return Promise.reject(error.message)
    }
  }

  async updateListEntry(listId: string, entryId: string, recordData: any): Promise<SuccessResponse | ErrorResponse> {
    try {
      validateParameters({ listId, entryId, recordData }, ['listId', 'entryId', 'recordData']);

      return new Promise<SuccessResponse | ErrorResponse>((resolve , reject) => {
        const apiUrl = `${this.domain}${UPDATE_LIST_ENTRY.replace('{listId}', listId).replace('{entryId}', entryId)}`;
     
        const config: AxiosRequestConfig = createAxiosConfig({
          apiKey: this.__apiKey,
          apiUrl: apiUrl,
          method: 'patch',
          data: recordData,
        });
  
        axiosWrapper(config)
          .then((response) => {
              resolve(response);
          })
          .catch((error) => {
            reject(error.response?.data);
          });
      });
    } catch (error) {
      return Promise.reject(error.message)
    }
  
  }

  async deleleListEntryById(listId: string, entryId: string): Promise<SuccessResponse | ErrorResponse> {
    try {
      validateParameters({ listId, entryId }, ['listId', 'entryId']);

      return new Promise<SuccessResponse | ErrorResponse>((resolve , reject) => {
        const apiUrl = `${this.domain}${DELETE_LIST_ENTRY_BY_ID.replace('{listId}', listId).replace('{entryId}', entryId)}`;
        
        const config: AxiosRequestConfig = createAxiosConfig({
          apiKey: this.__apiKey,
          apiUrl: apiUrl,
          method: 'delete',
        });
  
        axiosWrapper(config)
          .then((response) => {
              resolve(response);
          })
          .catch((error) => {
            reject(error.response?.data);
          });
      });
    } catch (error) {
      return Promise.reject(error.message)
    }
   
  }
}

export = ListEntries;
