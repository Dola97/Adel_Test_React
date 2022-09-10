import React, { ReactNode } from "react";
import styles from "../sections/business.module.css";
interface Props {
  icon: ReactNode;
  number: number;
  text: string;
}
export const BusinessCard: React.FC<Props> = ({ icon, number, text }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.ConatainerIcon}>{icon}</div>
      <div style={{ flexDirection: "column" }}>
        <p className={styles.NumberCard}> {number}</p>
        <p className={styles.TextCard}>{text}</p>
      </div>
    </div>
  );
};
