import { Logo } from "../svgs";
import { FormLogin } from "../components/form-login";
import styles from "./form.module.css";
import { LOGINTEXT } from "../constants/index";
export const LoginFormSection = () => {
  return (
    <section className={styles.Container}>
      <Logo />
      <p className={styles.TextForm}>
        <span>Log in</span> {LOGINTEXT}
      </p>
      <FormLogin />
    </section>
  );
};
