import React from "react";
import styles from "./ArrowBtn.module.scss";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

const ArrowBtn = ({ btnHandler, className }) => {
  return (
    <div
      onClick={() => {
        btnHandler && btnHandler();
      }}
      className={`${styles.btn}` + ` ${className ? className : ""}`}
    >
      <Arrow className={styles.arrow} />
    </div>
  );
};

export default ArrowBtn;
