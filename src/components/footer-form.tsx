import React from "react";
import styles from "./form-login.module.css";
export const FormFooter = () => {
  return (
    <>
      <hr className={styles.Line} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <text className={styles.footerFormTxt}>Terms & Conditions</text>
        <text className={styles.footerFormTxt}>Privacy Policy</text>
      </div>
    </>
  );
};
