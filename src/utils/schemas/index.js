import * as Yup from "yup";

export const schema_fname = Yup.string("Input value must be string")
  .matches(/^[A-Za-z0-9_-]{3,15}$/, "Invalid first name")
  .required("This field is required");

export const schema_lname = Yup.string("Input value must be string")
  .matches(/^[A-Za-z0-9_-]{3,15}$/, "Invalid last name")
  .required("This field is required");

export const schema_dname = Yup.string("Input value must be string")
  .matches(/^[A-Za-z0-9_-]{3,15}$/, "Invalid display name")
  .required("This field is required");

export const schema_email = Yup.string("Input value must be string")
  .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, "Invalid email")
  .required("This field is required");

export const schema_password = Yup.string("Input value must be string")
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    "Invalid password"
  )
  .required("This field is required");

export const schema_signup = Yup.object({
  fname: schema_fname,
  lname: schema_lname,
  dname: schema_dname,
  email: schema_email,
  password: schema_password,
  password_confirm: Yup.string()
    .oneOf([Yup.ref("password")], "Password did not match")
    .required("This field is required"),
  picked: Yup.string()
    .oneOf(["one", "two"], '!!!')
    .required("One of the field is required"),
});

export const schema_login = Yup.object({
  email: schema_email,
  password: schema_password,
});
