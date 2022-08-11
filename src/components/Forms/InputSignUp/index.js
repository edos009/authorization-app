import React from "react";
import { ErrorMessage, Field } from "formik";
import cx from "classnames";

import styles from "../../SignUp/SignUp.module.scss";

const InputSignUp = (props) => {
  const { name, ...anotherProps } = props;
  return (
    <label className={styles.signup_wrapper}>
      <Field name={name} {...anotherProps}>
        {({ field, form, meta }) => {
          const styleInput = cx(styles.signup_input, {
            [styles.signup_input_error]: meta.error && meta.touched,
            [styles.signup_input_correct]:
              meta.touched && meta.value !== "" && !meta.error,
          });
          return (
            <>
              <input className={styleInput} {...field} {...anotherProps} />
              {meta.touched && meta.value !== "" && !meta.error ? (
                <div
                  className={cx(
                    styles.signup_input_text,
                    styles.signup_input_correct_text
                  )}
                >
                  The field is correct
                </div>
              ) : null}
            </>
          );
        }}
      </Field>
      <ErrorMessage
        className={cx(styles.signup_input_text, styles.signup_input_error_text)}
        name={name}
        component="div"
      />
    </label>
  );
};

export default InputSignUp;
