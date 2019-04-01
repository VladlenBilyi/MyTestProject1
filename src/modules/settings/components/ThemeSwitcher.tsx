import React from "react";
import { connect } from "react-redux";

import { Store } from "../../../store";

import { toggleTheme } from "../actionsThunk";

import { activeThemeSelector } from "../selectotrs";

import lightIcon from "../../../icons/switch-to-light.svg";
import darkIcon from "../../../icons/switch-to-dark.svg";

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
  return (
    <div>
      <button
        onClick={e => {
          toggleTheme();
        }}
      >
        <img src={iconSrc} height={32} alt="сменить тему" />
      </button>
    </div>
  );
};

export const ThemeSwitcher = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeSwitcherUnconnected);
