import axios from "axios";

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

export const requester = axios.create({
  baseURL: apiBaseURL
});

export const withToken = (token: string) => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});