import { Fetchable, createFetchableInitialState } from "../../utils/fetchState";

export interface AuthenticationModel {
  token: string;
}

export interface AuthenticationError {
  message: string;
  failures: {
    Phone: string[];
    Password: string[];
  };
}

export interface AuthenticationState extends AuthenticationModel, Fetchable {
  error: AuthenticationError;
}

export const initialState: AuthenticationState = createFetchableInitialState({
  token: "",
  error: {
    message: "",
    failures: {
      Phone: [],
      Password: []
    }
  }
});
