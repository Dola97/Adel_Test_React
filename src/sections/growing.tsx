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
      <text className={styles.NetWorkText}>{NEWWORKTEXT}</text>
      <text className={styles.NetWorkContent}>{NETWORKCONTENT}</text>
    </section>
  );
};
