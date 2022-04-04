import axios, { AxiosInstance } from "axios";
import type { RequestInterceptors, RequestConfig } from "./type";

class RequestInstance {
  instance: AxiosInstance;
  interceptors?: RequestInterceptors;

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);

    this.interceptors = config.interceptors;
    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      }
    );
  }
}

export default RequestInstance;
