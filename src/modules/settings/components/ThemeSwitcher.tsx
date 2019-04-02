import React from "react";
import { connect } from "react-redux";

import { Store } from "../../../store";

import { toggleTheme } from "../actionsThunk";

import { activeThemeSelector } from "../selectotrs";

import lightIcon from "../../../icons/switch-to-light.svg";
import darkIcon from "../../../icons/switch-to-dark.svg";
import styles from "./ThemeSwitcher.module.scss";

const mapStateToProps = (state: Store) => ({
  theme: activeThemeSelector(state)
});

const mapDispatchToProps = {
  toggleTheme
};

type ModelProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
type InjectedProps = ModelProps & DispatchProps;

export const ThemeSwitcherUnconnected: React.FC<{}> = props => {
  const { theme, toggleTheme } = props as InjectedProps;
  const iconSrc = theme === "light" ? darkIcon : lightIcon;

  function onClick() {
    toggleTheme();
  }

  return (
    <button title="сменить тему" className={styles.switcher} onClick={onClick}>
      <img src={iconSrc} height={32} alt="сменить тему" />
    </button>
  );
};

export const ThemeSwitcher = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeSwitcherUnconnected);
