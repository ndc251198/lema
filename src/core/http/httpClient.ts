import axios, { AxiosRequestConfig } from 'axios';
import Vue from 'vue';
import interceptors from './interceptor';

class HttpClient {
  constructor() {
    Vue.axios = axios;
  }

  interceptors() {
    interceptors();
  }

  get<T>(url: string, config?: AxiosRequestConfig) {
    return Vue.axios.get<any, T>(url, config);
  }

  post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return Vue.axios.post<any, T>(url, data, config);
  }

  put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return Vue.axios.put<any, T>(url, data, config);
  }

  delete<T>(url: string, config?: AxiosRequestConfig) {
    return Vue.axios.delete<any, T>(url, config);
  }

  upload<T>(url: string, data?: any, callback?: (event: ProgressEvent) => void) {
    return Vue.axios.post<any, T>(url, data, {
      onUploadProgress: callback
    });
  }

  download<T>(url: string, data?: any, callback?: (event: ProgressEvent) => void) {
    return Vue.axios.post<any, T>(url, data, {
      onDownloadProgress: callback
    });
  }
}

export default new HttpClient();