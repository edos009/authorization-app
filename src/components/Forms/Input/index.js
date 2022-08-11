import React from "react";
import { ErrorMessage, Field } from "formik";
import cx from "classnames";

import styles from "../../Login/Login.module.scss";

const Input = (props) => {
  const { name, ...anotherProps } = props;
  return (
    <label className={styles.login_wrapper}>
      <Field name={name} {...anotherProps}>
        {({ field, form, meta }) => {
          console.log(meta);
          const styleInput = cx(styles.login_input, {
            [styles.login_input_error]: meta.error && meta.touched,
            [styles.login_input_correct]:
              meta.touched && meta.value !== "" && !meta.error,
          });
          return (
            <>
              <input className={styleInput} {...field} {...anotherProps} />
              {meta.touched && meta.value !== "" && !meta.error ? (
                <div
                  className={cx(
                    styles.login_input_text,
                    styles.login_input_correct_text
                  )}
                >
                  Valid email
                </div>
              ) : null}
            </>
          );
        }}
      </Field>
      <ErrorMessage
        className={cx(styles.login_input_text, styles.login_input_error_text)}
        name={name}
        component="div"
      />
    </label>
  );
};

export default Input;
