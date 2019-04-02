import React from "react";
import { Row, Col } from "react-bootstrap";

import { Sidebar } from "../Sidebar/Sidebar";

import styles from "./Layout.module.scss";

interface Props {
  Content: JSX.Element;
  Header: JSX.Element;
}

export const Layout: React.FC<Props> = props => {
  const { Content, Header } = props;
  return (
    <Row style={{ width: "100vw", overflow: "hidden" }} noGutters>
      <Col xs={2} className={styles.sidebar}>
        <Sidebar />
      </Col>
      <Col className={styles["content-wrapper"]}>
        {Header}
        <div className={styles.content}>{Content}</div>
      </Col>
    </Row>
  );
};
