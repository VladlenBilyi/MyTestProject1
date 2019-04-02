import React, { useState } from "react";
import { connect } from "react-redux";
import { push } from "redux-first-history";
import { Link } from "@reach/router";
import { Form, Button, FormControlProps } from "react-bootstrap";

import { Store } from "../../../../store";

import { getError } from "../../selectors";
import { login } from "../../actionsApi";

import { InputField } from "../InputField/InputField";

import styles from "./LoginForm.module.scss";

const mapStateToProps = (state: Store) => ({
  error: getError(state)
});

const mapDispatchToProps = {
  login,
  push
};

type ModelProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
type InjectedProps = ModelProps & DispatchProps;

export const LoginFormUnconnected: React.FC<{}> = props => {
  const [phoneField, setPhoneField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [activeField, setActiveField] = useState<string | undefined>();

  const injected = props as InjectedProps;

  function login(e: React.SyntheticEvent) {
    e.preventDefault();
    injected.login(phoneField, passwordField);
  }

  function onPhoneChange(e: React.FormEvent<FormControlProps>) {
    setPhoneField(e.currentTarget.value || "");
  }

  function onPasswordChange(e: React.FormEvent<FormControlProps>) {
    setPasswordField(e.currentTarget.value || "");
  }

  return (
    <div className={styles.form}>
      <h2>Вход</h2>
      <p className="text-muted">
        в личный кабинет и запись на квалификационные экзамены
      </p>
      <Form.Group controlId="loginForm">
        <InputField
          name="phone"
          label="Мобильный телефон"
          type="phone"
          placeholder="9794426521"
          prepend="+7"
          currentActiveField={activeField}
          setCurrentActiveField={setActiveField}
          onChange={onPhoneChange}
          error={{
            failures: injected.error.failures
              ? injected.error.failures.Phone
              : []
          }}
        />

        <InputField
          className="mt-3"
          name="password"
          label="Пароль"
          type="password"
          placeholder=""
          currentActiveField={activeField}
          setCurrentActiveField={setActiveField}
          onChange={onPasswordChange}
          error={{
            failures: injected.error.failures
              ? injected.error.failures.Password
              : []
          }}
        />

        <Link to="/forgot-password">
          <Form.Text
            className={`mb-3 text-muted text-right ${
              styles["forgot-password"]
            }`}
          >
            Забыли пароль?
          </Form.Text>
        </Link>

        <Button variant="primary" onClick={login} type="submit" block>
          Войти
        </Button>

        <Form.Group controlId="rememberMe" className="mt-3">
          <Form.Check
            type="checkbox"
            label="Запомнить меня"
            className="text-center text-muted"
          />
        </Form.Group>
      </Form.Group>
    </div>
  );
};

export const LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormUnconnected);
