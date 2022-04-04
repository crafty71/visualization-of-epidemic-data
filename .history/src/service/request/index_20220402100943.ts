import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import type { RequestInterceptors, RequestConfig } from "./type";

class RequestInstance {
  instance: AxiosInstance;

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
  }
}
