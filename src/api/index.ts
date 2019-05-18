import axios from "axios";

import { mockRequester } from "./fakeApi";

export type ApiResponse<D, E> =
  | {
      success: true;
      data: D;
    }
  | {
      success: false;
      error: E;
    };

const apiBaseURL = `https://api-applicant.spkfr.ru/v1`;

const useFakeApi = true;

let axiosInstance = axios.create({
  baseURL: apiBaseURL
});

if (useFakeApi) {
  mockRequester(axiosInstance)
}

export const requester = axiosInstance;

export const withToken = (token: string) => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export const api = {};
