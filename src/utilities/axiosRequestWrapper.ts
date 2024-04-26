import axios, { AxiosRequestConfig } from 'axios';

const axiosWrapper = (axiosConfig: AxiosRequestConfig) =>
  new Promise<any>((resolve, reject) =>
    axios(axiosConfig)
      .then((response) => resolve(response.data))
      .catch((err) => {
        if (err.response?.data) {
          if (err.response.data?.message) {
            resolve(new Error(err.response.data.message));
          }
          resolve(new Error(err));
        } else resolve(err);
      }),
  );

export default axiosWrapper;
