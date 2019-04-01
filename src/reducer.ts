import { Reducer, combineReducers, AnyAction } from "redux";

import { ProfileReducer } from "./modules/profile/reducer";
import { AuthenticationReducer } from "./modules/authentication/reducer";
import { ExamsReducer } from "./modules/exams/reducer";
import { SettingsReducer } from "./modules/settings/reducer";

export const createRootReducer = (RouterReducer: Reducer<any, AnyAction>) => {
  return combineReducers({
    authentication: AuthenticationReducer,
    profile: ProfileReducer,
    exams: ExamsReducer,
    router: RouterReducer,
    settings: SettingsReducer
  });
};
