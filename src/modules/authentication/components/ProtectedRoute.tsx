import React from "react";
import { connect } from "react-redux";

import { Store } from "../../../store";

import { getToken } from "../selectors";
import { setToken } from "../actions";

const mapStateToProps = (state: Store) => ({
  token: getToken(state)
});

const mapDispatchToProps = {
  setToken
};

type ModelProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
type InjectedProps = ModelProps & DispatchProps;

export class ProtectedRouteUnconnected extends React.Component<{}> {
  componentDidMount() {
    const { setToken } = this.props as InjectedProps;
    const storedToken = window.localStorage.getItem("app:token");
    if (storedToken) {
      setToken(storedToken);
    }
  }
  render() {
    const { token } = this.props as InjectedProps;
    return token ? <>{this.props.children}</> : <div>Unauthorized</div>;
  }
}

export const ProtectedRoute = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProtectedRouteUnconnected);
