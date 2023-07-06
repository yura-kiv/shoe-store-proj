import React from "react";
import styles from "./styles/LoginPage.module.scss";
import Header from "../components/FormsInput/Header";
import Login from "../components/FormsInput/Login";

const LoginPage = () => {
  return (
    <div className={styles.loginPageMainWrapper}>
      <div className={styles.loginPageWrapper}>
        <Header
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/signup"
        />
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
