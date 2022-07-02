import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const axiosClient = (() => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_NEXTAPI_URL,
  });
})();

export const request = async (options: AxiosRequestConfig) => {
  // success handler
  const onSuccess = (response: AxiosResponse) => {
    const { data } = response;
    return data;
  };

  // error handler
  const onError = (error: AxiosError) => {
    return Promise.reject(error.response);
  };

  // adding success and error handlers to client
  return axiosClient(options).then(onSuccess).catch(onError);
};
