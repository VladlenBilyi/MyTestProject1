/*
  Fetches target resource automatically based on the current route.
*/

import { LOCATION_CHANGE } from "redux-first-history";

import { Middleware, MiddlewareAPI, Dispatch, Action } from "redux";

import { ThunkAction } from "redux-thunk";

interface Options<S> {
  resource: string;
  url: string;
  action(): ThunkAction<void, S, null, Action<string>>;
  delay?: number;
}

export const createFetchOnRouteEnterMiddleware = <S>(options: Options<S>) => {
  const autoFetcher: Middleware = ({ dispatch, getState }: MiddlewareAPI) => (
    next: Dispatch
  ) => action => {
    if (action.type === LOCATION_CHANGE) {
      if (action.payload.location.pathname === options.url) {
        console.log("got target, dispatching");
        // A little bit hacky, but we need to set stored in the local storage token first
        setTimeout(() => dispatch(options.action() as any), options.delay);
      }
    }
    let result = next(action);
    return result;
  };

  return autoFetcher;
};
