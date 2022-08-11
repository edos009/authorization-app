import React from "react";
import { Form, Formik } from "formik";
import { schema_login } from "../../../utils/schemas";

import InputLogin from "../InputLogin";

import styles from "../../Login/Login.module.scss";

const initialValues = {
  email: "",
  password: "",
};

const FormLogin = () => {
  const onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema_login}
    >
      <Form className={styles.login_form}>
        <InputLogin
          name="email"
          type="text"
          placeholder="Email address"
          autoComplete="off"
        />
        <InputLogin
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="off"
        />

        <input className={styles.login_btn} type="submit" value="Login" />
      </Form>
    </Formik>
  );
};

export default FormLogin;
