import axios from 'axios';
import {
  getAccessToken,
  getRefreshToken,
  saveTokens,
} from '../async_storage/storage'; // Replace with the correct path

const baseURL = 'https://travelmates.pythonanywhere.com/';

const instance = axios.create({
  baseURL,
});

// Add a request interceptor
instance.interceptors.request.use(
  async (config) => {
    // Get the access token from AsyncStorage
    const accessToken = await getAccessToken();

    // If the access token is available, add it to the Authorization header
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // If the error is due to an unauthorized request and a refresh token is available, try to refresh the access token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = await getRefreshToken();

      if (refreshToken) {
        // Call your refresh token endpoint to get a new access token
        // Replace the following line with your actual refresh token endpoint
        const newAccessToken = await refreshTokenFunction(refreshToken);

        // Save the new tokens to AsyncStorage
        if (newAccessToken) {
          saveTokens(newAccessToken, refreshToken);

          // Retry the original request with the new access token
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originalRequest);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
