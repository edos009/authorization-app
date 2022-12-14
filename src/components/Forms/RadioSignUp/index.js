import React from "react";
import { ErrorMessage } from "formik";
import cx from "classnames";
import { PropTypes } from "prop-types";

import RadioWithLabel, { rgDefaultProps, rgPropTypes } from "../RadioWithLabel";

import styles from "../../SignUp/SignUp.module.scss";

const RadioSignUp = (props) => {
  const { name, radioGroup, ...anotherProps } = props;
  const [rg1, rg2] = radioGroup;
  return (
    <>
      <div className={styles.signup_box_radio} role="group">
        <RadioWithLabel name={name} rg={rg1} anotherProps={anotherProps} />
        <RadioWithLabel name={name} rg={rg2} anotherProps={anotherProps} />

        <ErrorMessage
          className={cx(
            styles.signup_radio_text,
            styles.signup_radio_error_text
          )}
          name={name}
          component="div"
        />
      </div>
    </>
  );
};

RadioSignUp.defaultProps = {
  name: "test-name",
  radioGroup: [rgDefaultProps],
};

RadioSignUp.propTypes = {
  name: PropTypes.string.isRequired,
  radioGroup: PropTypes.arrayOf(rgPropTypes),
  anotherProps: PropTypes.object,
};

export default RadioSignUp;
