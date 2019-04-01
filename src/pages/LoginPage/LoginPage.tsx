import React, { Component } from "react";
import { Link } from "@reach/router";
import { Container, Row, Col } from "react-bootstrap";

import { LoginForm } from "../../modules/authentication/components/LoginForm/LoginForm";

import logo from "../../icons/logo.svg";

import styles from "./LoginPage.module.scss";

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
        </div>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs="auto" md="6" lg="4">
              <div className={styles.form}>
                <LoginForm />
              </div>
              <p className="text-center">
                Еще нет аккаунта?
                <Link to="/register">
                  <b style={{ color: "black" }}>Регистрация</b>
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
