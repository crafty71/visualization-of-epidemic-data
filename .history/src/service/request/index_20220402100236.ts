import axios, { AxiosInstance } from "axios";

class RequestInstance {
  instance: AxiosInstance;

  constructor(config: any) {
    this.instance = axios.create(config);
  }
}
