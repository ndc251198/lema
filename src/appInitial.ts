import axios from "axios";
import httpClient from "./core/http/httpClient";
import { Configuration } from "./lema";

function initConfig() {
  const env = process.env.NODE_EVN;
  let configUrl = `config/config.json`;
  if (env === 'development') {
    configUrl = `config/config.development.json`;
  }

  return axios.get(configUrl).then(res => {
    if (res) {
      Configuration.setConfig(res.data)
      httpClient.interceptors();
    }
  })
}

export default function() {
  return Promise.all([
    initConfig()
  ]);
}

