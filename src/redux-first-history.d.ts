declare module "redux-first-history" {
  import { History } from "history";
  import { Action, Middleware, Reducer, Store } from "redux";
  import { History as ReachHistory } from '@reach/router';

  declare function createReduxHistory(store: Store): History;

  export interface IHistoryContextOptions {
    history: History;
    routerReducerKey?: string;
    oldLocationChangePayload?: boolean;
    reduxTravelling?: boolean;
  }

  export interface IHistoryContext {
    createReduxHistory: typeof createReduxHistory;
    routerMiddleware: Middleware;
    routerReducer: Reducer;
  }

  export function createReduxHistoryContext(
    options: IHistoryContextOptions
  ): IHistoryContext;
  export const push: (to: string) => Action;

  export function reachify(history: History): ReachHistory;

  export const LOCATION_CHANGE: string;
}
