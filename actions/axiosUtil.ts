import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  // baseURL: process.env.BASE_URL,
  // timeout: 15000,
  headers: { "Content-Type": "application/json" },

  // withCredentials: true // for sent cookie on request
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig<any>) {
    // Do something before request is sent
    // console.log("interceptor request sent config: \n", config);
    return config;
  },
  function (error) {
    console.log("error in request interceptor:--\n", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
// axios.interceptors.response.use(function (response) {
//     console.log("interceptor response get config: \n", response)
//     return response;
//   }, function (error) {
//     console.log("error in response interceptor:--\n", error);
//     return Promise.reject(error);
//   });

axiosInstance.interceptors.response.use(
  function (response: AxiosResponse<any, any>) {
    // console.log("interceptor response get config: \n", response);
    return response;
  },
  async (error) => {
    console.log("error in response interceptor:--\n", error);
    try {
      // if (error.response.status === 401) {
      //   console.log(error.response, "error res");
      //   const accessToken = localStorage.getItem("accessToken");
      //   const refreshToken = localStorage.getItem("refreshToken");

      //   console.log(accessToken, refreshToken);

      //   if (accessToken !== undefined && refreshToken !== undefined) {
      //     const body = {
      //       grant_type: "refresh_token",
      //       refresh_token: refreshToken,
      //       access_token: accessToken,
      //     };
      //     const url = `https://securetoken.googleapis.com/v1/token?key=${process.env.REACT_APP_FIREBASE_KEY}`;

      //     const res = await axios.post(url, body);

      //     console.log(res, "res 🥴🥴");

      //     if (res.status === 200) {
      //       // console.log(res);
      //       localStorage.setItem("accessToken", res.data.access_token);
      //       localStorage.setItem("refreshToken", res.data.refresh_token);

      //       //debugger; // need to remove later

      //       error.config.headers[
      //         "Authorization"
      //       ] = `Bearer ${res.data.access_token}`;
      //       return axios(error.config);

      //       // window.location.reload();
      //     }
      //   }
      // }

      //*** do your error handling here */

      throw new Error("unhandled error!");
    } catch (err) {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;

// delete axios.defaults.headers.common.Authorization;
// axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
