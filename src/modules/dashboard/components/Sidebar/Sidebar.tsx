import React from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";

import { Store } from "../../../../store";

import { ThemeSwitcher } from "../../../settings/components/ThemeSwitcher";

import { getFirstName, getLastName } from "../../../profile/selectors";

import logo from "../../../../icons/logo.svg";
import styles from "./Sidebar.module.scss";
import { SidebarItem } from "../SidebarItem/SidebarItem";

const mapStateToProps = (state: Store) => ({
  firstName: getFirstName(state),
  lastName: getLastName(state)
});

type ModelProps = ReturnType<typeof mapStateToProps>;
type InjectedProps = ModelProps;

export const SidebarUnconnected: React.FC<{}> = props => {
  const { firstName, lastName } = props as InjectedProps;
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={logo} height={48} />
        <div className={styles.switcher}>
          <ThemeSwitcher />
        </div>
      </div>

      <SidebarItem className="main-text">
        {firstName} {lastName}
      </SidebarItem>

      <Link to="/dashboard/profile" className="link-in-button">
        <SidebarItem border className="mb-3">
          Профиль
        </SidebarItem>
      </Link>
      <Link to="/dashboard/exams" className="link-in-button">
        <SidebarItem border>Расписание экзаменов</SidebarItem>
      </Link>
    </div>
  );
};

export const Sidebar = connect(mapStateToProps)(SidebarUnconnected);
