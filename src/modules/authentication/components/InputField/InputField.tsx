import React from "react";
import cx from "classnames";
import { Form, FormControlProps } from "react-bootstrap";

import styles from "./InputField.module.scss";

type OnChangeEvent = FormControlProps["onChange"];

interface Props {
  name: string;
  label: JSX.Element | string;
  type: string;
  onChange: OnChangeEvent;
  placeholder?: string;
  currentActiveField?: string;
  setCurrentActiveField(fieldName?: string): void;
  error: {
    failures: string[];
  };
  className?: string;
}

export const InputField: React.FC<Props> = ({
  name,
  label,
  type,
  onChange,
  currentActiveField,
  placeholder,
  setCurrentActiveField,
  error,
  className
}) => {
  return (
    <div className={className}>
      <Form.Label
        className={cx({
          [styles["active-field"]]: currentActiveField === name
        })}
      >
        {label}
      </Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => {
          setCurrentActiveField(name);
        }}
        onBlur={() => {
          if (currentActiveField === name) {
            setCurrentActiveField(undefined);
          }
        }}
      />
      {error.failures &&
        error.failures.map(failure => (
          <div key={failure} className={styles.error}>
            {failure}
          </div>
        ))}
    </div>
  );
};
