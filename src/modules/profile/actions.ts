import { ProfileModel } from "./model";

export enum TypeKeys {
  GET_PROFILE_STARTED = "Profile.GET_PROFILE_STARTED",
  GET_PROFILE_SUCCESS = "Profile.GET_PROFILE_SUCCESS",
  GET_PROFILE_FAILED = "Profile.GET_PROFILE_FAILED"
}

export type ActionTypes =
  | GetProfileStartedAction
  | GetProfileSuccessAction
  | GetProfileFailedAction;

export const getProfileStarted = () => ({
  type: TypeKeys.GET_PROFILE_STARTED as TypeKeys.GET_PROFILE_STARTED
});

export const getProfileSuccess = (profile: ProfileModel) => ({
  type: TypeKeys.GET_PROFILE_SUCCESS as TypeKeys.GET_PROFILE_SUCCESS,
  payload: {
    profile
  }
});

export const getProfileFailed = (error: string) => ({
  type: TypeKeys.GET_PROFILE_FAILED as TypeKeys.GET_PROFILE_FAILED,
  error
});

export type GetProfileStartedAction = ReturnType<typeof getProfileStarted>;
export type GetProfileSuccessAction = ReturnType<typeof getProfileSuccess>;
export type GetProfileFailedAction = ReturnType<typeof getProfileFailed>;
