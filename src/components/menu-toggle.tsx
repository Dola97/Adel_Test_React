import React from "react";
import styles from "./header.module.css";
interface Props {
  isOpen: boolean;
  toggle: () => void;
}
export const MenuToggle: React.FC<Props> = ({ toggle, isOpen }) => {
  return (
    <div className={styles.menuToggle} onClick={toggle}>
      {isOpen ? "Close" : "Open"}
    </div>
  );
};
