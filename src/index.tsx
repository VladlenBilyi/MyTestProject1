import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import { createStore } from "./store";

import { App } from "./App";

import "./themes/themes.scss";
import "./themes/custom.scss";

const { store, history } = createStore();

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById("root")
);

serviceWorker.unregister();
