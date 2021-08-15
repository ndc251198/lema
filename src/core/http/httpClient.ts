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

  get(url: string, config?: AxiosRequestConfig) {
    return Vue.axios.get(url, config);
  }

  post(url: string, data?: any, config?: AxiosRequestConfig) {
    return Vue.axios.post(url, data, config);
  }

  put(url: string, data?: any, config?: AxiosRequestConfig) {
    return Vue.axios.put(url, data, config);
  }

  delete(url: string, config?: AxiosRequestConfig) {
    return Vue.axios.delete(url, config);
  }

  upload(url: string, data?: any, callback?: (event: ProgressEvent) => void) {
    return Vue.axios.post(url, data, {
      onUploadProgress: callback
    });
  }

  download(url: string, data?: any, callback?: (event: ProgressEvent) => void) {
    return Vue.axios.post(url, data, {
      onDownloadProgress: callback
    });
  }
}

export default new HttpClient();