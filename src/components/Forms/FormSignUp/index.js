import { Form, Formik } from "formik";
import React from "react";
import { schema_signup } from "../../../utils/schemas";

import styles from "../../SignUp/SignUp.module.scss";
import RadioSignUp from "../RadioSignUp";
import InputSignUp from "../InputSignUp";
import radioGroup from './radioGroup.json'

const initialValues = {
  fname: "",
  lname: "",
  dname: "",
  email: "",
  password: "",
  password_confirm: "",
  picked: "",
};

const FormSignUp = () => {
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
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
        <InputSignUp
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="off"
        />
        <InputSignUp
          name="password_confirm"
          type="password"
          placeholder="Password Confirmation"
        />

        <RadioSignUp name="picked" type="radio" radioGroup={radioGroup} />

        <input
          className={styles.signup_btn}
          type="submit"
          value="Create Account"
        />
      </Form>
    </Formik>
  );
};

export default FormSignUp;
