import React from "react";
import { ErrorMessage, Field } from "formik";
import cx from "classnames";
import PropTypes from "prop-types";

import styles from "../../Login/Login.module.scss";

const InputLogin = (props) => {
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
                  The field is correct
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

InputLogin.defaultProps = {
  name: "test-name",
};

InputLogin.propTypes = {
  name: PropTypes.string.isRequired,
  anotherProps: PropTypes.object
};

export default InputLogin;
