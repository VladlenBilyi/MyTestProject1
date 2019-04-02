import React from "react";
import cx from "classnames";

import styles from "./SidebarItem.module.scss";

interface Props {
  border?: boolean;
  className?: string;
}

export const SidebarItem: React.FC<Props> = ({
  children,
  border = false,
  className = ""
}) => {
  const classes = cx(className, styles.item, {
    [styles.bordered]: border
  });
  return <div className={classes}>{children}</div>;
};
