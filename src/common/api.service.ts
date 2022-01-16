import VueAxios from '@/common/axios.ts';
import JwtService from "@/common/jwt.service";
import { Configuration } from "@/common/config.ts";
import axios, { Method } from "axios";

export default class ApiService extends VueAxios {
  constructor() {
    const AXIOS_OPTIONS = {
      baseUrl: Configuration.API_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${JwtService.getToken()}`,
      },
    };
    super(AXIOS_OPTIONS);
  }

  async request(type: Method, url: string, data: any) {
    let promise = null;
    switch (type) {
      case "GET":
        promise = await axios.get(url, { params: data });
        break;
      case "POST":
        promise = await axios.post(url, data);
        break;
      case "PUT":
        promise = await axios.put(url, data);
        break;
      case "PATCH":
        promise = await axios.patch(url, data);
        break;
      case "DELETE":
        promise = await axios.delete(url, data);
        break;
    }
    return promise;
  }
}
