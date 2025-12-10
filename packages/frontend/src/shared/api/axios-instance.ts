import axios from 'axios';

import { getAccessToken } from './get-access-token';
import { env } from '../config/env';

export const axiosInstance = axios.create({
  baseURL: env.VITE_API_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config?.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
