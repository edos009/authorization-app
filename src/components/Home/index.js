import React from 'react';

import styles from './Home.module.scss'

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.home_inner}>
          <h1 className={styles.home_title}>Home</h1>
        </div>
      </div>
    </section>
  );
}

export default Home;
