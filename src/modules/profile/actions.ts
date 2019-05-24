import { ProfileModel } from "./model";
import { TypeKeys } from "./actions.constants";

export const getProfileStarted = () =>
  ({
    type: TypeKeys.GET_PROFILE_STARTED
  } as const);

export const getProfileSuccess = (profile: ProfileModel) =>
  ({
    type: TypeKeys.GET_PROFILE_SUCCESS,
    payload: {
      profile
    }
  } as const);

export const getProfileFailed = (error: string) =>
  ({
    type: TypeKeys.GET_PROFILE_FAILED,
    error
  } as const);

export const resetProfileState = () =>
  ({
    type: TypeKeys.RESET_PROFILE_STATE
  } as const);
