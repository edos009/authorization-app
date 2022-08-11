import React from "react";
import { Field } from "formik";

import styles from "../../SignUp/SignUp.module.scss";

const RadioWithLabel = (props) => {
  const { name, rg, anotherProps } = props;
  return (
    <>
      <Field name={name} value={rg.id} {...anotherProps}>
        {({ field, form, meta }) => {
          return (
            <input
              id={rg.connection}
              className={styles.signup_radio}
              {...field}
              {...anotherProps}
              checked={form.values.picked === rg.id}
            />
          );
        }}
      </Field>
      <label className={styles.signup_radio_label} htmlFor={rg.connection}>
        <h3 className={styles.signup_radio_label_title}>{rg.title}</h3>
        <p
          className={styles.signup_radio_label_text}
        >
          {rg.text}
        </p>
      </label>
    </>
  );
};

export default RadioWithLabel;
