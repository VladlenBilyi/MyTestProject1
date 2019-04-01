import { createStore as createReduxStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createReduxHistoryContext, reachify } from "redux-first-history";
import createHistory from "history/createBrowserHistory";

import { AuthenticationState } from "./modules/authentication/model";
import { SettingsState } from "./modules/settings/model";
import { ProfileState } from "./modules/profile/model";
import { ExamsState } from "./modules/exams/model";

import { createRootReducer } from "./reducer";

interface RouterModel {
  location: {
    pathname: string;
    search: string;
    hash: string;
  };
  action: string;
}

export interface Store {
  authentication: AuthenticationState;
  router: RouterModel;
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

  const middlewares = [thunkMiddleware, routerMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createReduxStore(
    createRootReducer(routerReducer),
    composeWithDevTools(middleWareEnhancer)
    // applyMiddleware(thunkMiddleware)
  );

  const history = reachify(createReduxHistory(store));

  return { store, history };
};

export type CreatedStore = ReturnType<typeof createStore>;
