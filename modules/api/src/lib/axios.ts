import axios, { AxiosInstance } from 'axios';

let api: AxiosInstance | null = null;

export function createApi(baseURL: string, apiKey: string) {
  api = axios.create({
    baseURL,
    timeout: 10000,
    params: {
      apiKey,
    },
  });

  return api;
}

export function getApi(): AxiosInstance {
  if (!api) {
    throw new Error('API not initialized. Call createApi() in your app first.');
  }
  return api;
}
