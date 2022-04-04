import axios, { AxiosInstance } from "axios";
import type { RequestInterceptors, RequestConfig } from "./type";

class RequestInstance {
  instance: AxiosInstance;
  interceptors?: RequestInterceptors;

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);

    this.interceptors = config.interceptors;
  }
}

export default RequestInstance;
