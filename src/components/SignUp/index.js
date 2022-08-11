import React from 'react';
import FormSignUp from '../Forms/FormSignUp';

import styles from './SignUp.module.scss'

const SignUp = (props) => {
  return (
    <section className={styles.signup}>
      <div className={styles.container}>
        <div className={styles.signup_inner}>
          <h1 className={styles.signup_title}>create an account</h1>
          <h2 className={styles.signup_subtitle}>We always keep your name and email address private.</h2>
        </div>
        <FormSignUp/>
      </div>
    </section>
  );
}

export default SignUp;
