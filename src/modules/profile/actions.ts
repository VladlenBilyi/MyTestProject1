import { ProfileModel } from "./model";

export enum TypeKeys {
  GET_PROFILE_STARTED = "Profile.GET_PROFILE_STARTED",
  GET_PROFILE_SUCCESS = "Profile.GET_PROFILE_SUCCESS",
  GET_PROFILE_FAILED = "Profile.GET_PROFILE_FAILED",

  RESET_PROFILE_STATE = "Profile.RESET_PROFILE_STATE",
}

export type ActionTypes =
  | GetProfileStartedAction
  | GetProfileSuccessAction
  | GetProfileFailedAction
  | ResetProfileSateAction;

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

export const resetProfileState = () => ({
  type: TypeKeys.RESET_PROFILE_STATE as TypeKeys.RESET_PROFILE_STATE,
});

export type GetProfileStartedAction = ReturnType<typeof getProfileStarted>;
export type GetProfileSuccessAction = ReturnType<typeof getProfileSuccess>;
export type GetProfileFailedAction = ReturnType<typeof getProfileFailed>;
export type ResetProfileSateAction = ReturnType<typeof resetProfileState>;
