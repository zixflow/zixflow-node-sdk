import axios , { AxiosRequestConfig} from 'axios';


export default function createAxiosRequestConfig (apiKey , apiUrl , method , data) {

    const config:AxiosRequestConfig = {
        method: method,
        url: apiUrl,
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
      };

      return config;
} 



