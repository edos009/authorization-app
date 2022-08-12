import { Form, Formik } from "formik";
import React, { Component } from "react";
import { schema_signup } from "../../../utils/schemas";

import cx from "classnames";

import RadioSignUp from "../RadioSignUp";
import InputSignUp from "../InputSignUp";
import radioGroup from "./radioGroup.json";

import styles from "../../SignUp/SignUp.module.scss";

const initialValues = {
  fname: "",
  lname: "",
  dname: "",
  email: "",
  password: "",
  password_confirm: "",
  picked: "",
};

class FormSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTypePassword: true,
      isTypePasswordConfirm: true,
    };
  }

  onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  handlerShowPassword = () => {
    const { isTypePassword } = this.state;
    this.setState({ isTypePassword: !isTypePassword });
  };

  handlerShowPasswordConfirm = () => {
    const { isTypePasswordConfirm } = this.state;
    this.setState({ isTypePasswordConfirm: !isTypePasswordConfirm });
  };

  render() {
    const { isTypePassword, isTypePasswordConfirm } = this.state;
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.onSubmit}
        validationSchema={schema_signup}
      >
        <Form className={styles.signup_form}>
          <InputSignUp
            name="fname"
            type="text"
            placeholder="First name"
            autoComplete="off"
          />
          <InputSignUp
            name="lname"
            type="text"
            placeholder="Last name"
            autoComplete="off"
          />
          <InputSignUp
            name="dname"
            type="text"
            placeholder="Display name"
            autoComplete="off"
          />
          <InputSignUp
            name="email"
            type="text"
            placeholder="Email Address"
            autoComplete="off"
          />

          <div className={styles.box_input_password}>
            <InputSignUp
              name="password"
              type={isTypePassword ? "password" : "text"}
              placeholder="Password"
              autoComplete="off"
            />
            <button
              type="button"
              className={cx(
                styles.btn_show_password,
                isTypePassword
                  ? styles.btn_show_password_off
                  : styles.btn_show_password_on
              )}
              onClick={this.handlerShowPassword}
            ></button>
          </div>

          <div className={styles.box_input_password}>
            <InputSignUp
              name="password_confirm"
              type={isTypePasswordConfirm ? "password" : "text"}
              placeholder="Password Confirm"
            />
            <button
              type="button"
              className={cx(
                styles.btn_show_password,
                isTypePasswordConfirm
                  ? styles.btn_show_password_off
                  : styles.btn_show_password_on
              )}
              onClick={this.handlerShowPasswordConfirm}
            ></button>
          </div>

          <RadioSignUp name="picked" type="radio" radioGroup={radioGroup} />

          <input
            className={styles.signup_btn}
            type="submit"
            value="Create Account"
          />
        </Form>
      </Formik>
    );
  }
}

export default FormSignUp;
