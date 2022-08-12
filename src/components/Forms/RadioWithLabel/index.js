import React from "react";
import { Field } from "formik";
import { PropTypes } from "prop-types";

import styles from "../../SignUp/SignUp.module.scss";

const RadioWithLabel = (props) => {
  const {
    name,
    rg: { id, connection, title, text },
    anotherProps,
  } = props;
  return (
    <>
      <Field
        id={connection}
        className={styles.signup_radio}
        name={name}
        value={id}
        {...anotherProps}
      />
      <label className={styles.signup_radio_label} htmlFor={connection}>
        <h3 className={styles.signup_radio_label_title}>{title}</h3>
        <p className={styles.signup_radio_label_text}>{text}</p>
      </label>
    </>
  );
};

export const rgPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  connection: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
});

export const rgDefaultProps = {
  id: "test-id",
  connection: "test-connection",
  title: "test-title",
  text: "test-text",
};

RadioWithLabel.defaultProps = {
  name: "test-name",
  rg: rgDefaultProps,
};

RadioWithLabel.propTypes = {
  name: PropTypes.string.isRequired,
  rg: rgPropTypes,
  anotherProps: PropTypes.object,
};

export default RadioWithLabel;
