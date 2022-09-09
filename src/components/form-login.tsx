import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "./button";
import { FormFooter } from "./footer-form";
import Styles from "./form-login.module.css";
export const FormLogin = () => {
  return (
    <Form>
      <Form.Group className={Styles.FormConatiner} controlId="formBasicEmail">
        <Form.Label className={Styles.lableForm}>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={Styles.lableForm}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <text className={Styles.forgetText}>Forgot Password?</text>
      </div>
      <Button
        border={"none"}
        color={"#CF0303"}
        type="submit"
        height={"50px"}
        children={<text className={Styles.LoginText}>Login</text>}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        radius={"10px"}
        width={"100%"}
      />
      <div
        style={{ display: "flex", justifyContent: "center", paddingTop: 31 }}
      >
        <text className={Styles.DoneHaveTxt}>
          Don’t have an account? <span>Sign Up</span>
        </text>
      </div>
      <FormFooter />
    </Form>
  );
};
