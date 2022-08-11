import React from "react";
import FormLogin from "../Forms/FormLogin";

import styles from "./Login.module.scss";

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.container}>
        <div className={styles.login_inner}>
          <h1 className={styles.login_title}>login to your account</h1>
        </div>
      </div>
      <FormLogin/>
    </section>
  );
};

export default Login;
