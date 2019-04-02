import React from "react";

import icon from "../../../../icons/dashboard-header.svg";

import styles from "./Header.module.scss";

export const Header: React.FC<{}> = ({ children }) => {
  return (
    <div className={`${styles.wrapper} secondary-text`}>
      <img src={icon} className={styles.icon} />
      <h3>{children}</h3>
    </div>
  );
};
