import { Form, Formik } from "formik";
import React from "react";
import { schema_signup } from "../../../utils/schemas";

import styles from "../../SignUp/SignUp.module.scss";
import RadioSignUp from "../RadioSignUp";
import InputSignUp from "../InputSignUp";

const initialValues = {
  fname: "",
  lname: "",
  dname: "",
  email: "",
  password: "",
  password_confirm: "",
  picked: '',
};

const radioGroup = [
  {
    id: 'one',
    connection: 'join_buyer',
    title: "Join as a Buyer",
    text: "I am looking for a Name, Logo or Tagline for my business, brand or product.",
  },
  {
    id: 'two',
    connection: 'join_seller',
    title: "Join As a Creative or Marketplace Seller",
    text: "I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.",
  },
];

const FormSignUp = () => {
  const onSubmit = (values, formikBag) => {
    console.log(values);
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

        <input className={styles.signup_btn} type='submit' value='Create Account'/>
      </Form>
    </Formik>
  );
};

export default FormSignUp;
