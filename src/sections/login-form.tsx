import React from "react";
import { Container } from "react-bootstrap";
import { Logo } from "../svgs";
import { FormLogin } from "../components/form-login";
import styles from "./form.module.css";
import { LOGINTEXT } from "../constants/index";
export const LoginFormSection = () => {
  return (
    <section style={{ padding: 60, display: "flex", flexDirection: "column" }}>
      <Logo />
      <text className={styles.TextForm}>
        <span>Log in</span> {LOGINTEXT}
      </text>
      <FormLogin />
    </section>
  );
};
