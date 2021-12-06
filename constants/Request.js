import axios from "axios";
const AsyncRequest = axios.create(); // with loaders on client side


const LoaderId = "__CUSTOM_CUBE_LOADER__";
const toggleLoader = show => {
  if (typeof document !== "undefined") {
    if (document.getElementById(LoaderId)) {
      document.getElementById(LoaderId).style.display = show ? "block" : "none";
    }
  }
};


AsyncRequest.interceptors.request.use(function (config) {
    // Do something before request is sent
    toggleLoader(true);
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
AsyncRequest.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    toggleLoader(false);
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    toggleLoader(false);
    return Promise.reject(error);
  });

export const makeAsyncRequest = (method, url, data) => {
    const options = {
      method,
      url,
      data
    };
    return AsyncRequest(options);
  };
  