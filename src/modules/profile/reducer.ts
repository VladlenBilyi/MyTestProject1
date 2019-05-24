import { started, success, failed } from "../../utils/fetchState";

import { ProfileState, initialState } from "./model";
import { ActionTypes } from "./actions.types";
import { TypeKeys } from "./actions.constants";

export const ProfileReducer = (
  state: ProfileState = initialState,
  action: ActionTypes
): ProfileState => {
  switch (action.type) {
    case TypeKeys.GET_PROFILE_STARTED:
      return { ...state, ...started() };
    case TypeKeys.GET_PROFILE_FAILED:
      return { ...state, ...failed(), error: action.error };
    case TypeKeys.GET_PROFILE_SUCCESS:
      return { ...state, ...success(), ...action.payload.profile };
    case TypeKeys.RESET_PROFILE_STATE:
      return initialState;
    default:
      return state;
  }
};
