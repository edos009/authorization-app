import React from "react";
import { Field } from "formik";

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

export default RadioWithLabel;
