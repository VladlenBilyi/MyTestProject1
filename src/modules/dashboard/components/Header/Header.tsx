import React from "react";

import icon from "../../../../icons/dashboard-header.svg";
import styles from "./Header.module.scss";

export const Header: React.FC<{}> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>
        <img src={icon} className={styles.icon} />
        <span>{children}</span>
      </h2>
    </div>
  );
};
