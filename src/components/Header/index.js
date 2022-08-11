import React from "react";
import { Link, useLocation } from "react-router-dom";
import cx from "classnames";

import styles from "./Header.module.scss";

const Header = (props) => {
  const { pathname } = useLocation();
  const styleLink = cx(styles.header_link, {
    [styles.header_link_signup]: pathname === "/login",
    [styles.header_link_login]: pathname === "/signup" || pathname === "/",
  });

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
            <Link className={styleLink} to="/signup">
              signup
            </Link>
          ) : (
            <Link className={styleLink} to="/login">
              login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
