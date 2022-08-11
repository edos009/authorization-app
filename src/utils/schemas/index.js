import * as Yup from "yup";

export const schema_login = Yup.object({
  email: Yup.string("Input value must be string")
    .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, "Invalid email")
    .required("This field is required"),
  password: Yup.string("Input value must be string")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Invalid password"
    )
    .required("This field is required"),
});
