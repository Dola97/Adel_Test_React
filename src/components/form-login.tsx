import { useAuth } from "../hooks";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "./button";
import { FormFooter } from "./footer-form";
import Styles from "./form-login.module.css";

export const FormLogin = () => {
  const { login } = useAuth();
  const [validated, setValidated] = useState(false);
  const [data, updateData] = useState({ email: "", password: "" });
  const handleSubmit = (event: any) => {
    if (data.email.length == 0 || data.password.length == 0) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
      console.log("data", data);
      login(data);
    }
  };
  return (
    <Form noValidate validated={validated}>
      <Form.Group className={Styles.FormConatiner} controlId="formBasicEmail">
        <Form.Label className={Styles.lableForm}>Email Address</Form.Label>
        <Form.Control
          required
          style={{ height: 50, border: "1px solid #B4B6C4", borderRadius: 6 }}
          value={data.email}
          onChange={(event) =>
            updateData({ ...data, email: event.target.value })
          }
          name="email"
          type="email"
          placeholder="Enter email"
        />
        <Form.Control.Feedback type="invalid">
          Email Is Required
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={Styles.lableForm}>Password</Form.Label>
        <Form.Control
          required
          style={{ height: 50, border: "1px solid #B4B6C4", borderRadius: 6 }}
          value={data.password}
          onChange={(event) =>
            updateData({ ...data, password: event.target.value })
          }
          name="password"
          type="password"
          placeholder="Password"
        />
        <Form.Control.Feedback type="invalid">
          Password Is Required
        </Form.Control.Feedback>
      </Form.Group>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <p className={Styles.forgetText}>Forgot Password?</p>
      </div>
      <Button
        border={"none"}
        color={"#CF0303"}
        type="button"
        height={"50px"}
        children={<p className={Styles.LoginText}>Login</p>}
        onClick={handleSubmit}
        radius={"10px"}
        width={"100%"}
      />
      <div
        style={{ display: "flex", justifyContent: "center", paddingTop: 31 }}
      >
        <p className={Styles.DoneHaveTxt}>
          Don’t have an account? <span>Sign Up</span>
        </p>
      </div>
      <FormFooter />
    </Form>
  );
};
