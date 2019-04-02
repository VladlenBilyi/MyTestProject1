import React from "react";
import cx from "classnames";
import { Form, FormControlProps, InputGroup } from "react-bootstrap";

import styles from "./InputField.module.scss";

type OnChangeEvent = FormControlProps["onChange"];

interface Props {
  name: string;
  label: JSX.Element | string;
  type: string;
  onChange: OnChangeEvent;
  prepend?: JSX.Element | string;
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
  prepend,
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
      <InputGroup>
        {prepend && (
          <InputGroup.Prepend>
            <InputGroup.Text id={`prepend-${name}`}>{prepend}</InputGroup.Text>
          </InputGroup.Prepend>
        )}
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
      </InputGroup>
      {error.failures &&
        error.failures.map(failure => (
          <div key={failure} className={styles.error}>
            {failure}
          </div>
        ))}
    </div>
  );
};
