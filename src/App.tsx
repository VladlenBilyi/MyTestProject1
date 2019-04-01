import React, { Component } from "react";

import { Provider } from "react-redux";
import { Router, RouteComponentProps, LocationProvider } from "@reach/router";

import { CreatedStore } from "./store";

import LoginPage from "./pages/LoginPage/LoginPage";
import { ExamsPage } from "./pages/ExamsPage/ExamsPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";

import { ProtectedRoute } from "./modules/authentication/components/ProtectedRoute";

import "./App.scss";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

interface Props {
  store: CreatedStore["store"];
  history: CreatedStore["history"];
}

export const App: React.FC<Props> = ({ store, history }) => (
  <Provider store={store}>
    <LocationProvider history={history}>
      <Router>
        <RouterPage default pageComponent={<LoginPage />} />
        <RouterPage
          path="/dashboard/exams"
          pageComponent={
            <ProtectedRoute>
              <ExamsPage />
            </ProtectedRoute>
          }
        />
        <RouterPage
          path="/dashboard/profile"
          pageComponent={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Router>
    </LocationProvider>
  </Provider>
);
