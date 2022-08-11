import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = (props) => {
  const { pathname } = useLocation();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_inner}>
          <Link to="/" className={styles.header_logo}>
            <img
              className={styles.header_logo_img}
              src="/static/images/logo.png"
              alt="logo"
            />
          </Link>
          {pathname === "/login" ? (
            <Link to="/signup">signup</Link>
          ) : (
            <Link to="/login">login</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
