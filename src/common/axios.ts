import axios, { AxiosInstance, AxiosRequestConfig, Method } from "axios";

export interface Parameters {
  url: string;
  method: Method;
  data?: any;
}
export default class VueAxios {
  instance!: AxiosInstance;
  options: Partial<AxiosRequestConfig>;

  constructor(options: Partial<AxiosRequestConfig>) {
    this.options = options || {}
  }

  createInstance() {
    return axios.create(this.options);
  }

  create() {
    this.instance = this.createInstance();
    this.instance.interceptors.request.use((request) => {
        return request;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const errorResponse = error.response;
        /*if (errorResponse.status == 401) {
          window.location.href = "https://localhost/login";
        }*/
        console.error("Error");
        return Promise.reject(error);
      }
    );
  }

  exec(params: Parameters) {
    return this.instance(params.url, {
      method: params.method,
      data: params.data
    });
  }
};
