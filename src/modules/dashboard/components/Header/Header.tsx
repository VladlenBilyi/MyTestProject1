import React from "react";
import { connect } from "react-redux";

import { Store } from "../../../../store";

import { activeThemeSelector } from "../../../settings/selectors";
import { logout } from "../../../authentication/actions.api";

import { HeaderIcon } from "./HeaderIcon";
import { LogoutIcon } from "./LogoutIcon";
import styles from "./Header.module.scss";

const mapStateToProps = (state: Store) => ({
  theme: activeThemeSelector(state)
});

const mapDispatchToProps = {
  logout
};

type ModelProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
type InjectedProps = ModelProps & DispatchProps;

export const HeaderUnconnected: React.FC<{}> = props => {
  const { children } = props;
  const { theme, logout } = props as InjectedProps;
  return (
    <div className={`${styles.wrapper} secondary-text`}>
      <span className={styles.icon}>
        <HeaderIcon
          width={40}
          height={40}
          fill={theme === "light" ? "black" : "white"}
        />
      </span>
      <h3>{children}</h3>
      <span
        className={`${styles.icon} ${styles["logout-icon"]}`}
        onClick={logout}
        title="Выйти"
      >
        <LogoutIcon
          width={40}
          height={40}
          fill={theme === "light" ? "black" : "white"}
        />
      </span>
    </div>
  );
};

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderUnconnected);
