import { createStore as createReduxStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createReduxHistoryContext, reachify } from "redux-first-history";
import createHistory from "history/createBrowserHistory";

import { createFetchOnRouteEnterMiddleware } from "./utils/fetchOnRouteEnterMiddleware";

import { AuthenticationState } from "./modules/authentication/model";
import { RouterState } from "./modules/router/model";
import { SettingsState } from "./modules/settings/model";
import { ProfileState } from "./modules/profile/model";
import { ExamsState } from "./modules/exams/model";

import { onRouteEnter as onRouteEnterExams } from "./modules/exams/onRouteEnter";
import { onRouteEnter as onRouteEnterProfile } from "./modules/profile/onRouteEnter";

import { createRootReducer } from "./reducer";

export interface Store {
  authentication: AuthenticationState;
  router: RouterState;
  settings: SettingsState;
  profile: ProfileState;
  exams: ExamsState;
}

export const createStore = () => {
  const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
  } = createReduxHistoryContext({
    history: createHistory()
  });

  const fetchersMiddlewares = [
    createFetchOnRouteEnterMiddleware(onRouteEnterExams),
    createFetchOnRouteEnterMiddleware(onRouteEnterProfile)
  ];

  const middlewares = [
    thunkMiddleware,
    routerMiddleware,
    ...fetchersMiddlewares
  ];

  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createReduxStore(
    createRootReducer(routerReducer),
    composeWithDevTools(middleWareEnhancer)
  );

  const history = reachify(createReduxHistory(store));

  return { store, history };
};

export type CreatedStore = ReturnType<typeof createStore>;
