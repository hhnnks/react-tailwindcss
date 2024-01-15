import axios from "axios";

class BaseRequest {
  private axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:3000", // 后端接口地址
      timeout: 10000, // 请求超时时间
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
  }

  async GET(url: string, params?: any) {
    return await this.request("GET", url, params);
  }

  async POST(url: string, data: any) {
    return await this.request("POST", url, data);
  }

  async PUT(url: string, data: any) {
    return await this.request("PUT", url, data);
  }

  async DELETE(url: string, params?: any) {
    return await this.request("DELETE", url, params);
  }

  async request(method: string, url: string, data: any) {
    try {
      const response = await this.axiosInstance.request({
        method,
        url,
        data,
      });
      const res = response.data;
      return res;
    } catch (error) {
      console.error("request error:", error);
      throw error;
    }
  }
}

export default BaseRequest;
