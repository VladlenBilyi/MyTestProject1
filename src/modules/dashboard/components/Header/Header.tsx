import React from "react";
import { connect } from "react-redux";

import { Store } from "../../../../store";

import { activeThemeSelector } from "../../../settings/selectors";

import { HeaderIcon } from "./HeaderIcon";
import styles from "./Header.module.scss";

const mapStateToProps = (state: Store) => ({
  theme: activeThemeSelector(state)
});

type ModelProps = ReturnType<typeof mapStateToProps>;
type InjectedProps = ModelProps;

export const HeaderUnconnected: React.FC<{}> = props => {
  const { children } = props;
  const { theme } = props as InjectedProps;
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
    </div>
  );
};

export const Header = connect(mapStateToProps)(HeaderUnconnected);
