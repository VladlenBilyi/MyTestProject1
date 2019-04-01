import React from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";

import { Store } from "../../../../store";

import { ThemeSwitcher } from "../../../settings/components/ThemeSwitcher";

import { getFirstName, getLastName } from "../../../profile/selectors";
import { getProfile } from "../../../profile/actionsApi";

import logo from "../../../../icons/logo.svg";

const mapStateToProps = (state: Store) => ({
  firstName: getFirstName(state),
  lastName: getLastName(state),
});

const mapDispatchToProps = {
  getProfile
};

type ModelProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
type InjectedProps = ModelProps & DispatchProps;

export const SidebarUnconnected: React.FC<{}> = props => {
  const { firstName, lastName, getProfile } = props as InjectedProps;
  return (
    <div>
      <img src={logo} height={48} />
      {firstName} {lastName}
      <ThemeSwitcher />
      <button
        onClick={() => {
          getProfile();
        }}
      >
        getProfile
      </button>
      <div>
        <Link to="/dashboard/profile">Профиль</Link>
      </div>
      <div>
        <Link to="/dashboard/exams">Экзамены</Link>
      </div>
    </div>
  );
};

export const Sidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarUnconnected);
