import { Fetchable, createFetchableInitialState } from "../../utils/model";

export interface ProfileModel {
  id: string;
  firstName: string;
  lastName: string;
  sex: string;
  birthDate: string;
  email: string;
  emailConfirmed: boolean;
  phone: string;
}

export interface ProfileState extends ProfileModel, Fetchable {
  error: string;
}

export const initialState: ProfileState = createFetchableInitialState({
  id: "",
  firstName: "",
  lastName: "",
  sex: "",
  birthDate: "",
  email: "",
  emailConfirmed: false,
  phone: "",
  error: ""
});
