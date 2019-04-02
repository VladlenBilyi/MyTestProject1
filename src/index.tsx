import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import { createStore } from "./store";

import { setToken } from "./modules/authentication/actions";

import { App } from "./App";

import { applyTheme } from "./themes/themes";

import "./themes/styles.scss";
import "./themes/bootstrap.scss";

const { store, history } = createStore();

const storedToken = window.localStorage.getItem("app:token");
if (storedToken) {
  store.dispatch(setToken(storedToken));
}

applyTheme();

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById("root")
);

serviceWorker.unregister();
