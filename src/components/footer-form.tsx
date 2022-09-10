import React from "react";
import styles from "./form-login.module.css";
export const FormFooter = () => {
  return (
    <>
      <hr className={styles.Line} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <p className={styles.footerFormTxt}>Terms & Conditions</p>
        <p className={styles.footerFormTxt}>Privacy Policy</p>
      </div>
    </>
  );
};
