import React from "react";
import { Form, Formik } from "formik";
import { schema_login } from "../../../utils/schemas";

import styles from "../../Login/Login.module.scss";
import Input from "../Input";

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
        <Input name="email" type="text" placeholder="Email address" />
        <Input name="password" type="password" placeholder="Password" />

        <input className={styles.login_btn} type="submit" value="Login" />
      </Form>
    </Formik>
  );
};

export default FormLogin;
