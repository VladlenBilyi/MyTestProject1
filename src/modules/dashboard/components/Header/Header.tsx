import React from "react";

import icon from "../../../../icons/dashboard-header.svg";

interface Props {}

export const Header: React.FC<Props> = props => {
  return (
    <div style={{ padding: "25px" }}>
      <h2>
        <img
          src={icon}
          style={{
            display: "inline-flex",
            alignSelf: "center",
            height: "1.5em",
            width: "1.5em",
            top: "-.1em",
            position: "relative"
          }}
        />
        <span style={{ marginLeft: "10px" }}>{props.children}</span>
      </h2>
    </div>
  );
};
