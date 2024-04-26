import { AxiosRequestConfig } from 'axios';
import { RequestConfigParams } from '../types/rootTypes';

export default function createAxiosConfig({ apiKey, apiUrl, method, data }: RequestConfigParams) {
  const config: AxiosRequestConfig = {
    method: method,
    url: apiUrl,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  };

  return config;
}
