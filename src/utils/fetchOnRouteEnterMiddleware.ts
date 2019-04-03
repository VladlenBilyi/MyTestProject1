/*
  Fetches target resource automatically based on the current route.
*/

import { LOCATION_CHANGE } from "redux-first-history";
import { Middleware, MiddlewareAPI, Dispatch, Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { isFetched } from "./fetchState";

interface Options<S> {
  resource: string;
  url: string | RegExp;
  action(): ThunkAction<void, S, null, Action<string>>;
  forceReload?: boolean;
  delay?: number;
}

export const createFetchOnRouteEnterMiddleware = <S>(options: Options<S>) => {
  const autoFetcher: Middleware = ({ dispatch, getState }: MiddlewareAPI) => (
    next: Dispatch
  ) => action => {
    const { url } = options;
    if (action.type === LOCATION_CHANGE) {
      const { pathname } = action.payload.location;
      if (typeof url === "string" ? pathname === url : url.test(pathname)) {
        const isAlreadyFetched = isFetched(getState()[options.resource]);
        if (isAlreadyFetched && !options.forceReload) {
          return next(action);
        }
        // A little bit hacky, but we need to set stored in the local storage token first
        setTimeout(() => dispatch(options.action() as any), options.delay);
      }
    }
    return next(action);
  };

  return autoFetcher;
};
