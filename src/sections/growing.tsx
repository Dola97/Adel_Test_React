import { NETWORKCONTENT, NEWWORKTEXT } from "../constants/index";
import Image from "react-bootstrap/Image";
import growingImage from "../images/ILLUSTRATION.png";
import styles from "./growing.module.css";
export const GrowingSection = () => {
  return (
    <section className={styles.GrowingSection}>
      <Image
        className={styles.ImageStyle}
        src={growingImage}
        alt="Growing Image"
      />
      <p className={styles.NetWorkText}>{NEWWORKTEXT}</p>
      <p className={styles.NetWorkContent}>{NETWORKCONTENT}</p>
    </section>
  );
};
