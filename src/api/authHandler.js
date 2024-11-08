import axios from "axios";
import { endpoint } from "./endpoint";
import Cookies from "js-cookie";

class AuthService {
  constructor() {
    this.baseAuthUrl = endpoint.authEndpoint;
    this.axiosInstance = axios.create({
      baseURL: this.baseAuthUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // Signup method
  async signup({ name, email, password, userType }) {
    try {
      let response;

      if (userType === "student") {
        response = await this.axiosInstance.post("/studentSignUp", {
          name,
          email,
          password,
        });
      } else {
        response = await this.axiosInstance.post("/teacherSignUp", {
          name,
          email,
          password,
        });
      }

      Cookies.set("token", response.data.token, { expires: 7 });
      return response.data;
    } catch (error) {
      throw error.response;
    }
  }

  // Login method

  async login({ email, password, userType }) {
    try {
      let response;

      if (userType === "student") {
        response = await this.axiosInstance.post("/studentSignIn", {
          email,
          password,
        });
      } else {
        response = await this.axiosInstance.post("/teacherLogin", {
          email,
          password,
        });
      }

      Cookies.set("token", response.data.token, { expires: 7 });
      return response.data;
    } catch (error) {
      throw error.response;
    }
  }

  // Validate token method
  async validateUserSession() {
    try {
      const response = await this.axiosInstance.get("/validateUserSession", {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      // console.log(response);
      return response.data;
    } catch (error) {
      // console.log(error.response);
      throw error.response;
    }
  }
}

export default new AuthService();
