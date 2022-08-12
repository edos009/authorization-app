import React, { Component } from "react";
import { Form, Formik } from "formik";
import { schema_login } from "../../../utils/schemas";

import InputLogin from "../InputLogin";

import styles from "../../Login/Login.module.scss";

const initialValues = {
  email: "",
  password: "",
};

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTypePassword: true,
    };
  }

  onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  handlerShowPassword = () => {
    const { isTypePassword } = this.state;
    this.setState({ isTypePassword: !isTypePassword });
  };

  render() {
    const { isTypePassword } = this.state;
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.onSubmit}
        validationSchema={schema_login}
      >
        <Form className={styles.login_form}>
          <InputLogin
            name="email"
            type="text"
            placeholder="Email address"
            autoComplete="off"
          />
          <div className={styles.box_input_password}>
            <InputLogin
              name="password"
              type={isTypePassword ? "password" : "text"}
              placeholder="Password"
              autoComplete="off"
            />
            <button
              type="button"
              className={styles.btn_show_password}
              onClick={this.handlerShowPassword}
            ></button>
          </div>

          <input className={styles.login_btn} type="submit" value="Login" />
        </Form>
      </Formik>
    );
  }
}

export default FormLogin;
