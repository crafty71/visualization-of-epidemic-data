import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class RequestInstance {
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig<any> | undefined) {
    this.instance = axios.create(config);
  }
}
