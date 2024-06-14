import { AxiosRequestConfig } from 'axios';
import { RequestConfigParams } from '../types/rootTypes';
// import https from 'https';

// const agent = new https.Agent({ keepAlive: true });

export default function createAxiosConfig({ apiKey, apiUrl, method, data }: RequestConfigParams) {
  const config: AxiosRequestConfig = {
    method: method,
    url: apiUrl,
    // httpsAgent: agent,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  };

  return config;
}
