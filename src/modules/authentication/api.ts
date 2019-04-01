import { ApiResponse, requester } from "../../api";

export const loginEndpoint = `/account/login`;

export interface SuccessResponse {
  profile: {
    id: string;
    firstName: string;
    lastName: string;
    sex: string;
    birthDate: string;
    email: string;
    emailConfirmed: boolean;
    phone: string;
  };
  token: string;
}

interface ErrorResponse {
  message: string;
  failures: {
    Phone: string[];
    Password: string[];
  };
}

type LoginResponse = ApiResponse<SuccessResponse, ErrorResponse>;

export const postLogin = async (
  phone: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const result = await requester.post<SuccessResponse>(loginEndpoint, {
      phone,
      password
    });
    return { success: true, data: result.data };
  } catch (e) {
    const { message, failures } = e.response.data as ErrorResponse;
    return {
      success: false,
      error: { message, failures }
    };
  }
};
