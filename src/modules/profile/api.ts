import { ApiResponse, requester, withToken } from "../../api";

const profileEndpoint = `/account/profile`;

export interface ProfileServerData {
  id: string;
  firstName: string;
  lastName: string;
  sex: string;
  birthDate: string;
  email: string;
  emailConfirmed: boolean;
  phone: string;
}

export const getProfile = async (
  token: string
): Promise<ApiResponse<ProfileServerData, string>> => {
  try {
    const result = await requester.get<ProfileServerData>(
      profileEndpoint,
      withToken(token)
    );
    return { success: true, data: result.data };
  } catch (e) {
    return { success: false, error: e.response.statusText };
  }
};
